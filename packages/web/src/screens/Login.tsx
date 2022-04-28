import { Box, Center, Image } from '@chakra-ui/react';

import loginBackdrop from '../assets/logo_backdrop.png';
import LoginCard from '../components/LoginCard';
import LoginForm from '../components/LoginForm';
import { StringParam, useQueryParam } from 'use-query-params';
import SignUpForm from '../components/SignUpForm';

export enum Form {
  LOGIN = 'login',
  SIGNUP = 'cadastro',
}

const Login = () => {
  const [form, setForm] = useQueryParam('auth', StringParam);

  function onFormChange(form: Form) {
    setForm(form);
  }

  return (
    <Center bg="gray.300" h="100vh" color="white">
      <Box w="120vh" d="flex" bg="white" color="black" borderRadius="12">
        <LoginCard borderLeftRadius="10">
          {form === Form.SIGNUP ? (
            <SignUpForm onFormChange={onFormChange} />
          ) : (
            <LoginForm onFormChange={onFormChange} />
          )}
        </LoginCard>
        <LoginCard>
          <Image borderRightRadius="10" src={loginBackdrop} />
        </LoginCard>
      </Box>
    </Center>
  );
};

export default Login;
