// API Actions
export const BLUEPRINT_REQUEST = 'BLUEPRINT_REQUEST';
export const BLUEPRINT_SUCCESS = 'BLUEPRINT_SUCCESS';
export const BLUEPRINT_FAILURE = 'BLUEPRINT_FAILURE';

// State Mutations
export const BLUEPRINT_NAME_UPDATE = 'BLUEPRINT_NAME_UPDATE';

export const BLUEPRINT_ADD_FIELD = 'BLUEPRINT_ADD_FIELD';
export const BLUEPRINT_UPDATE_FIELD = 'BLUEPRINT_UPDATE_FIELD';
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
}

export type BlueprintFieldView = 'root' | BlueprintField['id'];
