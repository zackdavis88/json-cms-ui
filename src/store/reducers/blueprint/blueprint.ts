import {
  BLUEPRINT_REQUEST,
  BLUEPRINT_SUCCESS,
  BLUEPRINT_FAILURE,
  BLUEPRINT_NAME_UPDATE,
  BLUEPRINT_NAME_ERROR_UPDATE,
  BLUEPRINT_ADD_FIELD,
  BLUEPRINT_UPDATE_FIELD,
  BLUEPRINT_UPDATE_FIELD_ERROR,
  BLUEPRINT_UPDATE_ROOT_FIELDS_ERROR,
  BLUEPRINT_REMOVE_FIELD,
  BLUEPRINT_UPDATE_FIELD_VIEW,
  BLUEPRINT_RESET_STATE,
  BlueprintField,
  BlueprintFieldView,
  BlueprintFieldTypes,
  BlueprintFieldErrorTypes,
} from 'src/store/actions';
import { Action as ReduxAction } from '@reduxjs/toolkit';

export interface BlueprintState {
  name: string;
  nameError: string;
  fieldView: BlueprintFieldView;
  rootFields: BlueprintField['id'][];
  fields: {
    [key: string]: BlueprintField;
  };
  rootFieldsError: string;
  isLoading: boolean;
}

interface BlueprintAction extends ReduxAction {
  field: BlueprintField;
  fieldView: BlueprintFieldView;
  name: string;
  nameError: string;
  rootFieldsError: string;
  // TODO: request will probably also go here once we get to that.
}

export const defaultState: BlueprintState = {
  name: '',
  fieldView: 'root',
  fields: {},
  rootFields: [],

  nameError: '',
  rootFieldsError: '',

  isLoading: false,
};

type BlueprintReducer = (
  state: BlueprintState,
  action: BlueprintAction,
) => BlueprintState;
const blueprintReducer: BlueprintReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BLUEPRINT_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BLUEPRINT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case BLUEPRINT_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case BLUEPRINT_NAME_UPDATE: {
      return {
        ...state,
        name: action.name,
        nameError: '',
      };
    }
    case BLUEPRINT_NAME_ERROR_UPDATE: {
      return {
        ...state,
        nameError: action.nameError,
      };
    }
    case BLUEPRINT_UPDATE_FIELD_VIEW: {
      return {
        ...state,
        fieldView: action.fieldView,
      };
    }
    case BLUEPRINT_ADD_FIELD: {
      const newState = { ...state };

      if (state.fieldView === 'root') {
        newState.fields = {
          ...newState.fields,
          [action.field.id]: action.field,
        };

        newState.rootFields = [...newState.rootFields, action.field.id];
        newState.rootFieldsError = ''; // This is an error that gets set when rootFields failed validation because it was an empty array.
      } else {
        const parentField = { ...newState.fields[state.fieldView] };
        if (parentField.type === BlueprintFieldTypes.ARRAY) {
          parentField.arrayOf = action.field.id;
        } else if (parentField.type === BlueprintFieldTypes.OBJECT) {
          parentField.children = parentField.children.concat(action.field.id);
        }

        // Clear out any existing CHILDREN / NESTED errors along the tree.
        if (parentField.errorType === BlueprintFieldErrorTypes.CHILDREN) {
          delete parentField.errorType;
          delete parentField.errorMessage;

          // Travel the tree backwards from this node and clear any existing NESTED errors.
          let parentId = parentField.parentId;
          while (parentId) {
            const parentField = { ...newState.fields[parentId] }; // This would be the parent of the parent.
            delete parentField.errorType;
            delete parentField.errorMessage;
            newState.fields = {
              ...newState.fields,
              [parentId]: parentField,
            };

            parentId = parentField.parentId;
          }
        }

        // Attach the new field and its updated parent.
        newState.fields = {
          ...newState.fields,
          [action.field.id]: { ...action.field, parentId: state.fieldView },
          [state.fieldView]: parentField,
        };
      }

      return newState;
    }
    case BLUEPRINT_UPDATE_FIELD: {
      const newState = { ...state };
      newState.fields = {
        ...newState.fields,
        [action.field.id]: action.field,
      };

      // If a field name was updated we need to clear any errors in the tree related to it.
      const fieldNameWasUpdated =
        state.fields[action.field.id].name !== action.field.name;
      const fieldHadNameError =
        state.fields[action.field.id].errorType === BlueprintFieldErrorTypes.NAME;

      if (fieldNameWasUpdated && fieldHadNameError) {
        let parentId = newState.fields[action.field.id].parentId;
        while (parentId) {
          const parentField = { ...newState.fields[parentId] };
          delete parentField.errorType;
          delete parentField.errorType;

          newState.fields[parentId] = parentField;
          parentId = parentField.parentId;
        }
      }

      return newState;
    }
    case BLUEPRINT_UPDATE_FIELD_ERROR: {
      // This will attach an errorType/message to a specific field.
      // Then it will traverse the tree and attach a NESTED error to all parents.
      const fieldWithError = {
        ...state.fields[action.field.id],
        errorType: action.field.errorType,
        errorMessage: action.field.errorMessage,
      };
      let newState = {
        ...state,
        fields: {
          ...state.fields,
          [action.field.id]: fieldWithError,
        },
      };

      let parentId = fieldWithError.parentId;
      while (parentId) {
        const parentFieldWithError = {
          ...newState.fields[parentId],
          errorType: BlueprintFieldErrorTypes.NESTED,
        };
        newState = {
          ...newState,
          fields: {
            ...newState.fields,
            [parentId]: parentFieldWithError,
          },
        };

        parentId = parentFieldWithError.parentId;
      }

      return newState;
    }
    case BLUEPRINT_REMOVE_FIELD: {
      const newState = { ...state };
      const removedFieldHasError = newState.fields[action.field.id].errorType;
      delete newState.fields[action.field.id];

      if (state.fieldView === 'root') {
        // Cleanup rootFields if the removed field was root-level.
        const newRootFields = [...newState.rootFields];
        const fieldIndex = newRootFields.indexOf(action.field.id);
        newRootFields.splice(fieldIndex, 1);
        newState.rootFields = newRootFields;
      } else {
        const { type: parentFieldType, children: parentFieldChildren } =
          newState.fields[state.fieldView];
        if (parentFieldType === BlueprintFieldTypes.ARRAY) {
          // Cleanup parentField arrayOf if the removed field was the child of an array parent.
          newState.fields[state.fieldView].arrayOf = '';
        } else if (parentFieldType === BlueprintFieldTypes.OBJECT) {
          // Cleanup parentField children if the removed field was the child of an object parent.
          const newChildren = [...parentFieldChildren];
          const fieldIndex = newChildren.indexOf(action.field.id);
          newChildren.splice(fieldIndex, 1);
          newState.fields[state.fieldView].children = newChildren;
        }

        // If the removed field had an error, then we need to clean up the errors along the tree starting from the parent.
        if (removedFieldHasError) {
          const parentField = { ...newState.fields[state.fieldView] };
          delete parentField.errorType;
          delete parentField.errorMessage;
          newState.fields[state.fieldView] = parentField;

          // Traverse the tree backwards and clear all errors along the path.
          let parentId = parentField.parentId;
          while (parentId) {
            const parentField = { ...newState.fields[parentId] };
            delete parentField.errorType;
            delete parentField.errorMessage;

            newState.fields[parentId] = parentField;

            parentId = parentField.parentId;
          }
        }
      }

      return newState;
    }
    case BLUEPRINT_UPDATE_ROOT_FIELDS_ERROR: {
      return {
        ...state,
        rootFieldsError: action.rootFieldsError,
      };
    }
    case BLUEPRINT_RESET_STATE: {
      return { ...defaultState };
    }
    default:
      return state;
  }
};

export default blueprintReducer;
