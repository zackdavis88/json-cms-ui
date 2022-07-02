// API Actions
export const BLUEPRINT_REQUEST = 'BLUEPRINT_REQUEST';
export const BLUEPRINT_SUCCESS = 'BLUEPRINT_SUCCESS';
export const BLUEPRINT_FAILURE = 'BLUEPRINT_FAILURE';

// State Mutations
export const BLUEPRINT_NAME_UPDATE = 'BLUEPRINT_NAME_UPDATE';
export const BLUEPRINT_NAME_ERROR_UPDATE = 'BLUEPRINT_NAME_ERROR_UPDATE';

export const BLUEPRINT_ADD_FIELD = 'BLUEPRINT_ADD_FIELD';
export const BLUEPRINT_UPDATE_FIELD = 'BLUEPRINT_UPDATE_FIELD';
export const BLUEPRINT_UPDATE_FIELD_ERROR = 'BLUEPRINT_UPDATE_FIELD_ERROR';
export const BLUEPRINT_REMOVE_FIELD = 'BLUEPRINT_REMOVE_FIELD';

export const BLUEPRINT_UPDATE_FIELD_VIEW = 'BLUEPRINT_UPDATE_FIELD_VIEW';

// Typescript types.
export enum BlueprintFieldTypes {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  DATE = 'DATE',
  ARRAY = 'ARRAY',
  OBJECT = 'OBJECT',
}

export enum BlueprintFieldErrorTypes {
  NAME = 'NAME', // used for name validation errors.
  CHILDREN = 'CHILDREN', // used for arrayOf and children validation errors.
  NESTED = 'NESTED', // used when the error is nested deeper within a field.
}

export interface BlueprintField {
  id: string;
  parentId?: string;
  name: string;
  type: BlueprintFieldTypes;
  isRequired: boolean;
  isInteger: boolean;
  regex: string;
  min: number;
  max: number;
  arrayOf: string;
  children: string[];
  errorType?: BlueprintFieldErrorTypes;
  errorMessage?: string;
}

export type BlueprintFieldView = 'root' | BlueprintField['id'];
