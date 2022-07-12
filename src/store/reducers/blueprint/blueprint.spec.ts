import reducer, { defaultState, BlueprintAction, BlueprintState } from './blueprint';
import {
  BLUEPRINT_REQUEST,
  BLUEPRINT_SUCCESS,
  BLUEPRINT_FAILURE,
  BlueprintField,
  BlueprintPayload,
  BlueprintFieldTypes,
  BLUEPRINT_NAME_UPDATE,
  BLUEPRINT_NAME_ERROR_UPDATE,
  BLUEPRINT_UPDATE_FIELD_VIEW,
  BlueprintFieldErrorTypes,
  BLUEPRINT_UPDATE_FIELD,
  BLUEPRINT_ADD_FIELD,
  BLUEPRINT_UPDATE_FIELD_ERROR,
  BLUEPRINT_REMOVE_FIELD,
  BLUEPRINT_UPDATE_ROOT_FIELDS_ERROR,
  BLUEPRINT_RESET_STATE,
} from 'src/store/actions';

const mockGetBlueprintPayload = {
  body: {
    message: '',
    error: '',
    blueprint: {
      id: 'unit-test-blueprint-id',
      version: 1,
      name: 'UnitTestBlueprint',
      fields: [
        {
          id: 'string-field-id',
          name: 'stringField',
          type: BlueprintFieldTypes.STRING,
        },
        {
          id: 'array-field-id',
          name: 'arrayField',
          type: BlueprintFieldTypes.ARRAY,
          arrayOf: {
            id: 'array-field-arrayOf-id',
            name: 'arrayFieldArrayOf',
            type: BlueprintFieldTypes.OBJECT,
            fields: [
              {
                id: 'boolean-field-id',
                name: 'booleanField',
                type: BlueprintFieldTypes.BOOLEAN,
              },
            ],
          },
        },
      ],
    },
  },
};

const defaultAction: BlueprintAction = {
  type: '',
  field: {} as BlueprintField,
  fieldView: '',
  name: '',
  nameError: '',
  rootFieldsError: '',
  response: {
    body: {
      message: '',
      error: '',
      blueprint: {} as BlueprintPayload,
    },
  },
};

describe('Blueprint Reducer', () => {
  it('should return the initial blueprint state', () => {
    const expectedState = { ...defaultState };
    expect(reducer(defaultState, defaultAction)).toEqual(expectedState);
  });

  it('should set isLoading to true while making requests', () => {
    const expectedState = {
      ...defaultState,
      isLoading: true,
    };
    expect(reducer(defaultState, { type: BLUEPRINT_REQUEST })).toEqual(expectedState);
  });

  it('should reduce an API payload into the state and setting isLoading to false', () => {
    const expectedState: BlueprintState = {
      isLoading: false,
      name: 'UnitTestBlueprint',
      rootFields: ['string-field-id', 'array-field-id'],
      fields: {
        'string-field-id': {
          id: 'string-field-id',
          parentId: '',
          name: 'stringField',
          type: BlueprintFieldTypes.STRING,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
        },
        'array-field-id': {
          id: 'array-field-id',
          parentId: '',
          name: 'arrayField',
          type: BlueprintFieldTypes.ARRAY,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: 'array-field-arrayOf-id',
          children: [],
        },
        'array-field-arrayOf-id': {
          id: 'array-field-arrayOf-id',
          parentId: 'array-field-id',
          name: 'arrayFieldArrayOf',
          type: BlueprintFieldTypes.OBJECT,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: ['boolean-field-id'],
        },
        'boolean-field-id': {
          id: 'boolean-field-id',
          parentId: 'array-field-arrayOf-id',
          name: 'booleanField',
          type: BlueprintFieldTypes.BOOLEAN,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
        },
      },
      fieldView: 'root',
      nameError: '',
      rootFieldsError: '',
      hasChange: false,
    };
    const action = {
      type: BLUEPRINT_SUCCESS,
      response: mockGetBlueprintPayload,
    };
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('should set isLoading to false after a failed request', () => {
    const expectedState = {
      ...defaultState,
      isLoading: false,
    };
    expect(
      reducer({ ...defaultState, isLoading: true }, { type: BLUEPRINT_FAILURE }),
    ).toEqual(expectedState);
  });

  it('should update the blueprint name and clear the nameError if it exists', () => {
    const updatedName = 'UpdatedBlueprintName';
    const action = {
      type: BLUEPRINT_NAME_UPDATE,
      name: updatedName,
    };
    const expectedState = { ...defaultState, name: updatedName, hasChange: true };
    expect(
      reducer({ ...defaultState, nameError: 'existing name error' }, action),
    ).toEqual(expectedState);
  });

  it('should update the blueprint nameError', () => {
    const nameError = 'name error test';
    const action = {
      type: BLUEPRINT_NAME_ERROR_UPDATE,
      nameError,
    };
    const expectedState = { ...defaultState, nameError };
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('should update the blueprint fieldView', () => {
    const fieldView = 'some-field-id';
    const action = {
      type: BLUEPRINT_UPDATE_FIELD_VIEW,
      fieldView,
    };
    const expectedState = { ...defaultState, fieldView };
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('should update a blueprint field and clear any errors along the tree', () => {
    const updateField: BlueprintField = {
      id: 'boolean-field-id',
      parentId: 'array-field-arrayOf-id',
      name: 'booleanFieldUpdated',
      type: BlueprintFieldTypes.BOOLEAN,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
    };
    const testFields: {
      [key: BlueprintField['id']]: BlueprintField;
    } = {
      'string-field-id': {
        id: 'string-field-id',
        parentId: '',
        name: 'stringField',
        type: BlueprintFieldTypes.STRING,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: '',
        children: [],
      },
      'array-field-id': {
        id: 'array-field-id',
        parentId: '',
        name: 'arrayField',
        type: BlueprintFieldTypes.ARRAY,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: 'array-field-arrayOf-id',
        children: [],
        errorType: BlueprintFieldErrorTypes.NESTED,
      },
      'array-field-arrayOf-id': {
        id: 'array-field-arrayOf-id',
        parentId: 'array-field-id',
        name: 'arrayFieldArrayOf',
        type: BlueprintFieldTypes.OBJECT,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: '',
        children: ['boolean-field-id'],
        errorType: BlueprintFieldErrorTypes.NESTED,
      },
      'boolean-field-id': {
        id: 'boolean-field-id',
        parentId: 'array-field-arrayOf-id',
        name: 'booleanField',
        type: BlueprintFieldTypes.BOOLEAN,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: '',
        children: [],
        errorType: BlueprintFieldErrorTypes.NAME,
        errorMessage: 'something is wrong with this field',
      },
    };
    const state: BlueprintState = {
      ...defaultState,
      fields: {
        ...testFields,
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_UPDATE_FIELD,
      field: { ...updateField },
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {
        ...state.fields,
      },
      hasChange: true,
    };

    const updatedArrayOfField = { ...testFields['array-field-arrayOf-id'] };
    delete updatedArrayOfField.errorType;
    delete updatedArrayOfField.errorMessage;

    const updatedArrayField = { ...testFields['array-field-id'] };
    delete updatedArrayField.errorType;
    delete updatedArrayField.errorMessage;

    expectedState.fields[updateField.id] = { ...updateField };
    expectedState.fields['array-field-id'] = { ...updatedArrayField };
    expectedState.fields['array-field-arrayOf-id'] = { ...updatedArrayOfField };

    expect(reducer(state, action)).toStrictEqual(expectedState);
  });

  it('should update a blueprint field but not clear errors if isExpanded was updated', () => {
    const stringField = {
      id: 'string-field-id',
      parentId: '',
      name: 'stringField',
      type: BlueprintFieldTypes.STRING,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
      errorType: BlueprintFieldErrorTypes.NAME,
      errorMessage: 'something wrong here',
    };
    const state: BlueprintState = {
      ...defaultState,
      fields: {
        ...defaultState.fields,
        'string-field-id': { ...stringField },
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_UPDATE_FIELD,
      field: { ...stringField, isExpanded: true },
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {
        ...state.fields,
      },
      hasChange: false,
    };
    expectedState.fields['string-field-id'] = { ...stringField, isExpanded: true };

    expect(reducer(state, action)).toStrictEqual(expectedState);
  });

  it('should add a field as a child of another field and clear any errors along the tree', () => {
    const newField: BlueprintField = {
      id: 'arrayField-arrayOf-id',
      name: 'arrayOfField',
      type: BlueprintFieldTypes.BOOLEAN,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
    };
    const state: BlueprintState = {
      ...defaultState,
      fieldView: 'array-field-id',
      fields: {
        'string-field-id': {
          id: 'string-field-id',
          parentId: '',
          name: 'stringField',
          type: BlueprintFieldTypes.STRING,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
        },
        'array-field-id': {
          id: 'array-field-id',
          parentId: '',
          name: 'arrayField',
          type: BlueprintFieldTypes.ARRAY,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
          errorType: BlueprintFieldErrorTypes.CHILDREN,
        },
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_ADD_FIELD,
      field: newField,
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {
        ...state.fields,
      },
      hasChange: true,
    };

    const updatedArrayField = { ...state.fields['array-field-id'], arrayOf: newField.id };
    delete updatedArrayField.errorType;
    delete updatedArrayField.errorMessage;

    expectedState.fields[newField.id] = {
      ...newField,
      parentId: state.fields['array-field-id'].id,
    };
    expectedState.fields['array-field-id'] = updatedArrayField;

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should add a field to rootFields and clear any errors along the tree', () => {
    const newField: BlueprintField = {
      id: 'arrayField-arrayOf-id',
      name: 'arrayOfField',
      type: BlueprintFieldTypes.BOOLEAN,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
    };
    const state: BlueprintState = {
      ...defaultState,
      fieldView: 'root',
      fields: {
        'string-field-id': {
          id: 'string-field-id',
          parentId: '',
          name: 'stringField',
          type: BlueprintFieldTypes.STRING,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
        },
        'array-field-id': {
          id: 'array-field-id',
          parentId: '',
          name: 'arrayField',
          type: BlueprintFieldTypes.ARRAY,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
          errorType: BlueprintFieldErrorTypes.CHILDREN,
        },
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_ADD_FIELD,
      field: newField,
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {
        ...state.fields,
        [newField.id]: { ...newField },
      },
      rootFields: [newField.id],
      hasChange: true,
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should update a blueprint field error and add nested errors along the tree', () => {
    const fieldWithError: BlueprintField = {
      id: 'boolean-field-id',
      parentId: 'array-field-arrayOf-id',
      name: '',
      type: BlueprintFieldTypes.BOOLEAN,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
      errorType: BlueprintFieldErrorTypes.NAME,
      errorMessage: 'name error here.',
    };
    const testFields: {
      [key: BlueprintField['id']]: BlueprintField;
    } = {
      'string-field-id': {
        id: 'string-field-id',
        parentId: '',
        name: 'stringField',
        type: BlueprintFieldTypes.STRING,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: '',
        children: [],
      },
      'array-field-id': {
        id: 'array-field-id',
        parentId: '',
        name: 'arrayField',
        type: BlueprintFieldTypes.ARRAY,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: 'array-field-arrayOf-id',
        children: [],
      },
      'array-field-arrayOf-id': {
        id: 'array-field-arrayOf-id',
        parentId: 'array-field-id',
        name: 'arrayFieldArrayOf',
        type: BlueprintFieldTypes.OBJECT,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: '',
        children: ['boolean-field-id'],
      },
      'boolean-field-id': {
        id: 'boolean-field-id',
        parentId: 'array-field-arrayOf-id',
        name: 'booleanField',
        type: BlueprintFieldTypes.BOOLEAN,
        isRequired: false,
        isExpanded: false,
        isInteger: false,
        min: 0,
        max: 0,
        regex: '',
        arrayOf: '',
        children: [],
      },
    };
    const state: BlueprintState = {
      ...defaultState,
      fields: {
        ...testFields,
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_UPDATE_FIELD_ERROR,
      field: { ...fieldWithError },
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {
        ...state.fields,
      },
    };

    const updatedArrayOfField = { ...testFields['array-field-arrayOf-id'] };
    updatedArrayOfField.errorType = BlueprintFieldErrorTypes.NESTED;

    const updatedArrayField = { ...testFields['array-field-id'] };
    updatedArrayField.errorType = BlueprintFieldErrorTypes.NESTED;

    expectedState.fields[fieldWithError.id] = {
      ...testFields[fieldWithError.id],
      errorType: fieldWithError.errorType,
      errorMessage: fieldWithError.errorMessage,
    };
    expectedState.fields['array-field-id'] = { ...updatedArrayField };
    expectedState.fields['array-field-arrayOf-id'] = { ...updatedArrayOfField };

    expect(reducer(state, action)).toStrictEqual(expectedState);
  });

  it('should remove a nested field and clear any errors along the tree', () => {
    const removeField: BlueprintField = {
      id: 'arrayField-arrayOf-id',
      name: 'arrayOfField',
      type: BlueprintFieldTypes.BOOLEAN,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
      errorType: BlueprintFieldErrorTypes.CHILDREN,
      errorMessage: 'something is wrong with this field that is about to be removed',
    };
    const state: BlueprintState = {
      ...defaultState,
      fieldView: 'array-field-id',
      fields: {
        'string-field-id': {
          id: 'string-field-id',
          parentId: '',
          name: 'stringField',
          type: BlueprintFieldTypes.STRING,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
        },
        'array-field-id': {
          id: 'array-field-id',
          parentId: '',
          name: 'arrayField',
          type: BlueprintFieldTypes.ARRAY,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: 'arrayField-arrayOf-id',
          children: [],
          errorType: BlueprintFieldErrorTypes.NESTED,
        },
        'arrayField-arrayOf-id': {
          id: 'arrayField-arrayOf-id',
          parentId: 'array-field-id',
          name: 'arrayOfField',
          type: BlueprintFieldTypes.BOOLEAN,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
          errorType: BlueprintFieldErrorTypes.CHILDREN,
          errorMessage: 'something is wrong with this field that is about to be removed',
        },
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_REMOVE_FIELD,
      field: removeField,
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {
        ...state.fields,
      },
      hasChange: true,
    };

    const updatedArrayField = { ...state.fields['array-field-id'], arrayOf: '' };
    delete updatedArrayField.errorType;
    delete updatedArrayField.errorMessage;

    delete expectedState.fields[removeField.id];
    expectedState.fields['array-field-id'] = updatedArrayField;

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should remove a root field', () => {
    const removeField: BlueprintField = {
      id: 'string-field-id',
      parentId: '',
      name: 'stringField',
      type: BlueprintFieldTypes.STRING,
      isRequired: false,
      isExpanded: false,
      isInteger: false,
      min: 0,
      max: 0,
      regex: '',
      arrayOf: '',
      children: [],
    };
    const state: BlueprintState = {
      ...defaultState,
      fieldView: 'root',
      rootFields: ['string-field-id'],
      fields: {
        'string-field-id': {
          id: 'string-field-id',
          parentId: '',
          name: 'stringField',
          type: BlueprintFieldTypes.STRING,
          isRequired: false,
          isExpanded: false,
          isInteger: false,
          min: 0,
          max: 0,
          regex: '',
          arrayOf: '',
          children: [],
        },
      },
    };
    const action: BlueprintAction = {
      type: BLUEPRINT_REMOVE_FIELD,
      field: removeField,
    };
    const expectedState: BlueprintState = {
      ...state,
      fields: {},
      hasChange: true,
      rootFields: [],
    };

    expect(reducer(state, action)).toEqual(expectedState);
  });

  it('should update the blueprint rootFieldsError', () => {
    const rootFieldsError = 'something wrong with rootFields boss.';
    const action: BlueprintAction = {
      type: BLUEPRINT_UPDATE_ROOT_FIELDS_ERROR,
      rootFieldsError,
    };
    const expectedState = { ...defaultState, rootFieldsError };
    expect(reducer(defaultState, action)).toEqual(expectedState);
  });

  it('should reset the blueprint state', () => {
    const state: BlueprintState = {
      name: 'Some Existing State Data',
      nameError: '',
      hasChange: true,
      fieldView: 'root',
      rootFields: [],
      fields: {},
      rootFieldsError: '',
      isLoading: false,
    };

    const action: BlueprintAction = {
      type: BLUEPRINT_RESET_STATE,
    };

    expect(reducer(state, action)).toEqual(defaultState);
  });
});
