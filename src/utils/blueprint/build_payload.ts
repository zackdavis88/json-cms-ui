import {
  BlueprintField,
  BlueprintPayload,
  BlueprintPayloadField,
  BlueprintFieldTypes,
} from 'src/store/actions';

interface AllFields {
  [key: BlueprintField['id']]: BlueprintField;
}

const reduceFields = (fieldsArray: BlueprintField['id'][], allFields: AllFields) => {
  return fieldsArray.reduce<BlueprintPayload['fields']>((prev, fieldId) => {
    const field = allFields[fieldId];
    const payloadField: BlueprintPayloadField = {
      id: field.id,
      name: field.name,
      type: field.type,
      isRequired: field.isRequired,
      isInteger: field.isInteger,
      min: field.min || undefined,
      max: field.max || undefined,
      regex: field.regex || undefined,
    };

    if (field.type === BlueprintFieldTypes.ARRAY) {
      payloadField.arrayOf = reduceFields([field.arrayOf], allFields)[0];
    } else if (field.type === BlueprintFieldTypes.OBJECT) {
      payloadField.fields = reduceFields(field.children, allFields);
    }

    prev = prev.concat(payloadField);
    return prev;
  }, []);
};

type BuildPayload = (
  name: string,
  fieldsArray: BlueprintField['id'][],
  allFields: AllFields,
) => BlueprintPayload;

const buildPayload: BuildPayload = (name, fieldsArray, allFields) => {
  return {
    name,
    fields: reduceFields(fieldsArray, allFields),
  };
};

export default buildPayload;
