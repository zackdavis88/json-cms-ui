import React from 'react';
import { Form } from 'src/components';
import {
  useUserLoading,
  useDispatchChangePassword,
  useDispatchShowNotification,
} from 'src/hooks';
import { PasswordInputs, ActionButtons } from './components';

interface ChangePasswordFormProps {
  handleModalClose: () => void;
}

interface FormInputState {
  value: string;
  error: string;
}

const ChangePasswordForm = ({ handleModalClose }: ChangePasswordFormProps) => {
  const [currentPassword, setCurrentPassword] = React.useState<FormInputState>({
    value: '',
    error: '',
  });
  const [newPassword, setNewPassword] = React.useState<FormInputState>({
    value: '',
    error: '',
  });
  const [confirmPassword, setConfirmPassword] = React.useState<FormInputState>({
    value: '',
    error: '',
  });
  const requestLoading = useUserLoading();
  const changePassword = useDispatchChangePassword();
  const showNotification = useDispatchShowNotification();

  const hasNoInputValues = !(
    currentPassword.value &&
    newPassword.value &&
    confirmPassword.value
  );
  const hasInputError = !!(
    currentPassword.error ||
    newPassword.error ||
    confirmPassword.error
  );
  const submitDisabled = hasNoInputValues || hasInputError || requestLoading;

  const handleCurrentPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setCurrentPassword({ value: event.target.value, error: '' });
  };

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setNewPassword({ value: event.target.value, error: '' });
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setConfirmPassword({ value: event.target.value, error: '' });
  };

  const handleSubmit = async () => {
    if (confirmPassword.value !== newPassword.value) {
      return setConfirmPassword({
        ...confirmPassword,
        error: 'password inputs do not match',
      });
    }

    const response = await changePassword(currentPassword.value, newPassword.value);
    const { status, body } = response;
    if (status !== 200 && body?.error) {
      if (body.error.startsWith('current')) {
        return setCurrentPassword({ ...currentPassword, error: body.error });
      } else if (body.error.startsWith('password')) {
        return setNewPassword({ ...newPassword, error: body.error });
      }
    }

    if (body?.message) {
      showNotification(body.message, 'success');
    }
    handleModalClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <PasswordInputs
        currentPassword={{ ...currentPassword, onChange: handleCurrentPasswordChange }}
        newPassword={{ ...newPassword, onChange: handleNewPasswordChange }}
        confirmPassword={{ ...confirmPassword, onChange: handleConfirmPasswordChange }}
      />
      <ActionButtons submitDisabled={submitDisabled} handleCancel={handleModalClose} />
    </Form>
  );
};

export default ChangePasswordForm;
