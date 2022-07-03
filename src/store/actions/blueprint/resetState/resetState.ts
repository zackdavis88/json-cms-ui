import { BLUEPRINT_RESET_STATE } from 'src/store/actions/index';

const resetState = () => {
  return {
    type: BLUEPRINT_RESET_STATE,
  };
};

export default resetState;
