import { BlueprintPayload, BlueprintField, BlueprintFieldTypes } from 'src/store/actions';

interface ReduceAPIBlueprintOutput {
  rootFields: BlueprintField['id'][];
  fields: {
    [key: BlueprintField['id']]: BlueprintField;
  };
}

type ReduceAPIBlueprint = (
  fields: BlueprintPayload['fields'],
  parentId?: BlueprintField['id'],
) => ReduceAPIBlueprintOutput;
export const reduceAPIBlueprint: ReduceAPIBlueprint = (fields, parentId = '') => {
  return fields.reduce<ReduceAPIBlueprintOutput>(
    (prev, field) => {
      const fieldId = field.id;
      prev.rootFields = prev.rootFields.concat(fieldId);

      prev.fields[fieldId] = {
        id: fieldId,
        parentId,
        name: field.name,
        type: field.type,
        isRequired: field.isRequired || false,
        isInteger: field.isInteger || false,
        min: field.min || 0,
        max: field.max || 0,
        regex: field.regex || '',
        arrayOf: '',
        children: [],
      };

      const arrayOfField = field.arrayOf;
      if (field.type === BlueprintFieldTypes.ARRAY && arrayOfField) {
        prev.fields[fieldId].arrayOf = arrayOfField.id;
        const { fields: reducedArrayOf } = reduceAPIBlueprint([arrayOfField], fieldId);
        prev.fields = {
          ...prev.fields,
          ...reducedArrayOf,
        };
      }

      const childrenFields = field.fields;
      if (field.type === BlueprintFieldTypes.OBJECT && childrenFields) {
        const { rootFields: children, fields: reducedChildrenFields } =
          reduceAPIBlueprint(childrenFields, fieldId);
        prev.fields[fieldId].children = children;
        prev.fields = {
          ...prev.fields,
          ...reducedChildrenFields,
        };
      }

      return prev;
    },
    {
      rootFields: [],
      fields: {},
    },
  );
};
