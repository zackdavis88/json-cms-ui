import { BLUEPRINT_NAME_UPDATE } from 'src/store/actions/index';

const updateName = (name: string) => {
  return {
    type: BLUEPRINT_NAME_UPDATE,
    name,
  };
};

export default updateName;
