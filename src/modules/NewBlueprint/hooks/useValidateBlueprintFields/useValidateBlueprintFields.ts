import { useBlueprintAllFields, useBlueprintRootFields } from 'src/hooks';
import {
  BlueprintField,
  BlueprintFieldErrorTypes,
  BlueprintFieldTypes,
} from 'src/store/actions';
import { validateName } from 'src/modules/NewBlueprint/hooks/utils';

type FieldArray = BlueprintField['id'][];
type AllFields = {
  [key: BlueprintField['id']]: BlueprintField;
};
type BlueprintFieldError = BlueprintField | false;

type ValidateFields = (fields: FieldArray, allFields: AllFields) => BlueprintFieldError;
const validateFields: ValidateFields = (fields, allFields) => {
  const fieldError = fields.reduce<BlueprintFieldError>((prev, fieldId) => {
    // Bailing out of checks if we found an error.
    if (prev) {
      return prev;
    }

    // Little bit lighter validation compared to the API. Prolly not smart, but this is a personal project.
    const field = allFields[fieldId];

    // Validate the field name
    const nameError = validateName(field.name);
    if (nameError) {
      return {
        ...field,
        errorType: BlueprintFieldErrorTypes.NAME,
        errorMessage: nameError,
      };
    }

    // Validate field arrayOf if its an array.
    if (field.type === BlueprintFieldTypes.ARRAY) {
      if (!field.arrayOf) {
        return {
          ...field,
          errorType: BlueprintFieldErrorTypes.CHILDREN,
          errorMessage: 'arrays must contain children fields',
        };
      }

      // Recursive dive into the arrayOf.
      return validateFields([field.arrayOf], allFields);
    }
    // Validate field children if its an object.
    else if (field.type === BlueprintFieldTypes.OBJECT) {
      if (!field.children || !field.children.length) {
        return {
          ...field,
          errorType: BlueprintFieldErrorTypes.CHILDREN,
          errorMessage: 'objects must contain children fields',
        };
      }

      // Recursive dive into the children.
      return validateFields(field.children, allFields);
    }

    return prev;
  }, false);

  return fieldError;
};

const useValidateBlueprintFields = () => {
  const fields = useBlueprintAllFields();
  const rootFields = useBlueprintRootFields();

  const errorMessage = validateFields(rootFields, fields);
  if (errorMessage) {
    return errorMessage;
  }

  return false;
};

export default useValidateBlueprintFields;
