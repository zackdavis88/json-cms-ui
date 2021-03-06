import React from 'react';
import { ActionButtons, CredentialInputs } from './components';
import { LoginFormLayout } from './layout';
import { useDispatchAuthenticate } from 'src/hooks';
import { useAuthLoading } from './hooks';
import { useRouter } from 'next/router';
import { ROUTES } from 'src/constants';

interface LoginFormProps {
  onSignUpClick: () => void;
}

const LoginForm = ({ onSignUpClick }: LoginFormProps) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [apiError, setApiError] = React.useState<string>('');
  const authIsLoading = useAuthLoading();
  const authenticate = useDispatchAuthenticate();
  const router = useRouter();
  const submitDisabled = !(username && password) || authIsLoading;

  const handleUsernameChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (apiError) {
      setApiError('');
    }
    setUsername(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (apiError) {
      setApiError('');
    }
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    if (apiError) {
      setApiError('');
    }
    const response = await authenticate(username, password);
    const { status, body } = response;
    if (status !== 200 && body.error) {
      return setApiError(body.error);
    }

    let returnRoute = ROUTES.HOME;
    if (typeof router.query.returnRoute === 'string') {
      returnRoute = router.query.returnRoute;
    }

    const returnQuery = { ...router.query };
    delete returnQuery.returnRoute;

    router.push({ pathname: returnRoute, query: returnQuery });
  };

  return (
    <LoginFormLayout onSubmit={onSubmit} error={apiError}>
      <CredentialInputs
        username={{ value: username, onChange: handleUsernameChange }}
        password={{ value: password, onChange: handlePasswordChange }}
      />
      <ActionButtons submitDisabled={submitDisabled} onSignUpClick={onSignUpClick} />
    </LoginFormLayout>
  );
};

export default LoginForm;
