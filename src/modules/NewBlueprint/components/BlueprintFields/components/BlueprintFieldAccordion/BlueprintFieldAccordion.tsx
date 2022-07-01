import React from 'react';
import { Accordion, SelectChangeEvent } from '@mui/material';
import { AccordionSummary, AccordionDetails } from './components';
import { BlueprintFieldTypes } from 'src/store/actions';
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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateBlueprintField({
      ...field,
      name: event.target.value.trim(),
    });
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

  return (
    <Accordion defaultExpanded TransitionProps={{ unmountOnExit: true }}>
      <AccordionSummary id={field.id} name={field.name} type={field.type} />
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
