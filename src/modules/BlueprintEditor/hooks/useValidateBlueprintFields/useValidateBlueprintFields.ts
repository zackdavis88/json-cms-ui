import { useBlueprintAllFields, useBlueprintRootFields } from 'src/hooks';
import {
  BlueprintField,
  BlueprintFieldErrorTypes,
  BlueprintFieldTypes,
} from 'src/store/actions';
import { validateName } from 'src/modules/BlueprintEditor/hooks/utils';

type FieldArray = BlueprintField['id'][];
type AllFields = {
  [key: BlueprintField['id']]: BlueprintField;
};

interface BlueprintFieldsReduce {
  validationError: BlueprintField | false;
  nameValues: string[];
}

type ValidateFields = (
  fields: FieldArray,
  allFields: AllFields,
) => BlueprintField | false;
const validateFields: ValidateFields = (fields, allFields) => {
  const { validationError } = fields.reduce<BlueprintFieldsReduce>(
    (prev, fieldId) => {
      // Bailing out of checks if we found an error.
      if (prev.validationError) {
        return prev;
      }

      // Little bit lighter validation compared to the API. Prolly not smart, but this is a personal project.
      const field = allFields[fieldId];

      // Validate the field name
      const nameError = validateName(field.name);
      if (nameError) {
        prev.validationError = {
          ...field,
          errorType: BlueprintFieldErrorTypes.NAME,
          errorMessage: nameError,
        };
        return prev;
      }

      // Validate that the name is not a duplicate on this branch-level of the tree.
      if (prev.nameValues.indexOf(field.name) !== -1) {
        prev.validationError = {
          ...field,
          errorType: BlueprintFieldErrorTypes.NAME,
          errorMessage: 'name is already taken on this level',
        };
        return prev;
      } else {
        prev.nameValues = prev.nameValues.concat(field.name);
      }

      // Validate field arrayOf if its an array.
      if (field.type === BlueprintFieldTypes.ARRAY) {
        if (!field.arrayOf) {
          prev.validationError = {
            ...field,
            errorType: BlueprintFieldErrorTypes.CHILDREN,
            errorMessage: 'arrays must contain a child field',
          };
          return prev;
        }

        // Recursive dive into the arrayOf.
        const arrayOfError = validateFields([field.arrayOf], allFields);
        if (arrayOfError) {
          prev.validationError = arrayOfError;
          return prev;
        }
      }
      // Validate field children if its an object.
      else if (field.type === BlueprintFieldTypes.OBJECT) {
        if (!field.children || !field.children.length) {
          prev.validationError = {
            ...field,
            errorType: BlueprintFieldErrorTypes.CHILDREN,
            errorMessage: 'objects must contain children fields',
          };
          return prev;
        }

        // Recursive dive into the children.
        const childrenError = validateFields(field.children, allFields);
        if (childrenError) {
          prev.validationError = childrenError;
          return prev;
        }
      }

      return prev;
    },
    { validationError: false, nameValues: [] },
  );

  return validationError;
};

const useValidateBlueprintFields = () => {
  const allFields = useBlueprintAllFields();
  const rootFields = useBlueprintRootFields();

  if (!rootFields.length) {
    return 'At least one field is required, use the Add Field button.' as string;
  }

  const errorMessage = validateFields(rootFields, allFields);
  if (errorMessage) {
    return errorMessage;
  }

  return false;
};

export default useValidateBlueprintFields;
