import { BLUEPRINT_NAME_ERROR_UPDATE } from 'src/store/actions/index';

const updateNameError = (nameError: string) => {
  return {
    type: BLUEPRINT_NAME_ERROR_UPDATE,
    nameError,
  };
};

export default updateNameError;
