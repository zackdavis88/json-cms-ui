import React from 'react';
import { Form } from 'src/components';
import { useUserLoading } from 'src/hooks';
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

  return (
    <Form
      onSubmit={() => {
        handleModalClose();
      }}
    >
      <PasswordInputs />
      <ActionButtons submitDisabled={submitDisabled} handleCancel={handleModalClose} />
    </Form>
  );
};

export default ChangePasswordForm;
