import React from 'react';
import { ActionButtons, NewUserInputs } from './components';
import { SignUpFormLayout } from './layout';
import { useDispatchCreateUser, useDispatchShowNotification } from 'src/hooks';
import { useUserLoading } from './hooks';

interface FormInputState {
  value: string;
  error: string;
}

interface SignUpFormProps {
  onBackClick: () => void;
}

const SignUpForm = ({ onBackClick }: SignUpFormProps) => {
  const [username, setUsername] = React.useState<FormInputState>({
    value: '',
    error: '',
  });
  const [password, setPassword] = React.useState<FormInputState>({
    value: '',
    error: '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState<FormInputState>({
    value: '',
    error: '',
  });
  const requestLoading = useUserLoading();
  const createUser = useDispatchCreateUser();
  const showNotification = useDispatchShowNotification();
  const hasNoInputValues = !(username.value && password.value && confirmPassword.value);
  const hasInputError = !!(username.error || password.error || confirmPassword.error);
  const submitDisabled = hasNoInputValues || hasInputError || requestLoading;

  const onSubmit = async () => {
    // Stop processing submit if password inputs do not match.
    if (confirmPassword.value !== password.value) {
      return setConfirmPassword({
        ...confirmPassword,
        error: 'password inputs do not match',
      });
    }

    const response = await createUser(username.value, password.value);
    const { status, body } = response;

    if (status !== 200 && body.error) {
      if (body.error.startsWith('username')) {
        return setUsername({ ...username, error: body.error });
      } else if (body.error.startsWith('password')) {
        return setPassword({ ...password, error: body.error });
      }
    }

    if (body.message) {
      showNotification(body.message, 'success');
    }
    onBackClick();
  };

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setUsername({ value: event.target.value, error: '' });
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword({ value: event.target.value, error: '' });
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setConfirmPassword({ value: event.target.value, error: '' });
  };

  return (
    <SignUpFormLayout onSubmit={onSubmit}>
      <NewUserInputs
        username={{ ...username, onChange: handleUsernameChange }}
        password={{ ...password, onChange: handlePasswordChange }}
        confirmPassword={{ ...confirmPassword, onChange: handleConfirmPasswordChange }}
      />
      <ActionButtons submitDisabled={submitDisabled} onBackClick={onBackClick} />
    </SignUpFormLayout>
  );
};

export default SignUpForm;
