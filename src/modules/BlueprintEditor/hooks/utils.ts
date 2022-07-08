type ValidateName = (name: string) => string;
export const validateName: ValidateName = (name) => {
  // Validation is lighter on the client because we have some input restrictions in place.
  // I dont think its necessarily the safest to skimp on validation but this is a personal
  // project, I am not planning for anything crazy like Man-In-The-Middle attacks.
  // eslint-disable-next-line quotes
  const regex = new RegExp("^[A-Za-z0-9-_+=&^%$#*@!|(){}?.,<>;':/ ]+$");
  if (!name || !name.length) {
    return 'name is required';
  }

  if (!regex.test(name)) {
    return 'name contains invalid characters';
  }

  return '';
};
