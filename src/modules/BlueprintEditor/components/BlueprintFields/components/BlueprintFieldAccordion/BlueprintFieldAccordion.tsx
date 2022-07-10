import React from 'react';
import { Accordion, SelectChangeEvent } from '@mui/material';
import { AccordionSummary, AccordionDetails } from './components';
import { BlueprintFieldTypes, BlueprintFieldErrorTypes } from 'src/store/actions';
import {
  useDispatchUpdateBlueprintField,
  useDispatchRemoveBlueprintField,
  useDispatchUpdateBlueprintFieldView,
  useBlueprintField,
} from 'src/hooks';

interface BlueprintFieldAccordionProps {
  fieldId: string;
}

const BlueprintFieldAccordion = ({ fieldId }: BlueprintFieldAccordionProps) => {
  const updateBlueprintField = useDispatchUpdateBlueprintField();
  const removeBlueprintField = useDispatchRemoveBlueprintField();
  const updateBlueprintFieldView = useDispatchUpdateBlueprintFieldView();
  const field = useBlueprintField(fieldId);

  if (!field) {
    return null;
  }

  const fieldHasError = !!field.errorType;
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedField = { ...field, name: event.target.value.trim() };
    if (updatedField.errorType === BlueprintFieldErrorTypes.NAME) {
      delete updatedField.errorType;
      delete updatedField.errorMessage;
    }
    updateBlueprintField(updatedField);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    updateBlueprintField({
      ...field,
      type: event.target.value as BlueprintFieldTypes,
    });
  };

  const handleIsRequiredChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateBlueprintField({
      ...field,
      isRequired: event.target.checked,
    });
  };

  const handleIsIntegerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateBlueprintField({
      ...field,
      isInteger: event.target.checked,
    });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const max = Number(event.target.value) < 0 ? 0 : Number(event.target.value);
    const min = max < field.min ? max : field.min;
    updateBlueprintField({
      ...field,
      min,
      max,
    });
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const min = Number(event.target.value) < 0 ? 0 : Number(event.target.value);
    const max = min > field.max ? min : field.max;
    updateBlueprintField({
      ...field,
      min,
      max,
    });
  };

  const handleRegexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateBlueprintField({
      ...field,
      regex: event.target.value,
    });
  };

  const handleFieldRemoveClick = () => {
    removeBlueprintField(field);
  };

  const handleFieldViewChange = () => {
    updateBlueprintFieldView(field.id);
  };

  const handleExpandAccordion = (_event: never, isExpanded: boolean) => {
    updateBlueprintField({
      ...field,
      isExpanded,
    });
  };

  return (
    <Accordion
      defaultExpanded
      TransitionProps={{ unmountOnExit: true }}
      expanded={field.isExpanded}
      onChange={handleExpandAccordion}
    >
      <AccordionSummary
        id={field.id}
        name={field.name}
        type={field.type}
        hasError={fieldHasError}
      />
      <AccordionDetails
        field={field}
        onFieldRemoveClick={handleFieldRemoveClick}
        onNameChange={handleNameChange}
        onTypeChange={handleTypeChange}
        onIsRequiredChange={handleIsRequiredChange}
        onIsIntegerChange={handleIsIntegerChange}
        onMaxChange={handleMaxChange}
        onMinChange={handleMinChange}
        onRegexChange={handleRegexChange}
        onFieldViewChange={handleFieldViewChange}
      />
    </Accordion>
  );
};

export default BlueprintFieldAccordion;
