import {
  BLUEPRINT_NAME_UPDATE,
  BLUEPRINT_ADD_FIELD,
  BLUEPRINT_UPDATE_FIELD,
  BLUEPRINT_REMOVE_FIELD,
  BLUEPRINT_UPDATE_FIELD_VIEW,
  BlueprintField,
  BlueprintFieldView,
  BlueprintFieldTypes,
} from 'src/store/actions';
import { Action as ReduxAction } from '@reduxjs/toolkit';

export interface BlueprintState {
  name: string;
  fieldView: BlueprintFieldView;
  rootFields: BlueprintField['id'][];
  fields: {
    [key: string]: BlueprintField;
  };
}

interface BlueprintAction extends ReduxAction {
  field: BlueprintField;
  fieldView: BlueprintFieldView;
  name: string;
  // TODO: request will probably also go here once we get to that.
}

export const defaultState: BlueprintState = {
  name: '',
  fieldView: 'root',
  fields: {},
  rootFields: [],
};

type BlueprintReducer = (
  state: BlueprintState,
  action: BlueprintAction,
) => BlueprintState;
const blueprintReducer: BlueprintReducer = (state = defaultState, action) => {
  switch (action.type) {
    case BLUEPRINT_NAME_UPDATE: {
      return {
        ...state,
        name: action.name,
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
      } else {
        const parentField = { ...newState.fields[state.fieldView] };
        if (parentField.type === BlueprintFieldTypes.ARRAY) {
          parentField.arrayOf = action.field.id;
        } else if (parentField.type === BlueprintFieldTypes.OBJECT) {
          parentField.children = parentField.children.concat(action.field.id);
        }
        newState.fields = {
          ...newState.fields,
          [action.field.id]: { ...action.field, parentId: state.fieldView },
          [state.fieldView]: parentField,
        };
      }

      return newState;
    }
    case BLUEPRINT_UPDATE_FIELD: {
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.field.id]: action.field,
        },
      };
    }
    case BLUEPRINT_REMOVE_FIELD: {
      const newState = { ...state };
      delete newState.fields[action.field.id];

      if (state.fieldView === 'root') {
        // Cleanup rootFields if the removed field was root-level.
        const newRootFields = [...newState.rootFields];
        const fieldIndex = newRootFields.indexOf(action.field.id);
        newRootFields.splice(fieldIndex, 1);
        newState.rootFields = newRootFields;
      } else {
        const parentField = newState.fields[state.fieldView];
        if (parentField.type === BlueprintFieldTypes.ARRAY) {
          // Cleanup parentField arrayOf if the removed field was the child of an array parent.
          parentField.arrayOf = '';
        } else if (parentField.type === BlueprintFieldTypes.OBJECT) {
          // Cleanup parentField children if the removed field was the child of an object parent.
          const newChildren = [...parentField.children];
          const fieldIndex = newChildren.indexOf(action.field.id);
          newChildren.splice(fieldIndex, 1);
          newState.fields[state.fieldView] = {
            ...newState.fields[state.fieldView],
            children: newChildren,
          };
        }
      }

      return newState;
    }
    default:
      return state;
  }
};

export default blueprintReducer;
