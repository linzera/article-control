import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { FieldError, useForm } from 'react-hook-form';
import authentication from '../services/authentication';
import { Form } from '../screens/Login';
import { useNavigate } from 'react-router-dom';

type SubmitArgs = {
  email: string;
  password: string;
};

function getErrorMessage(fieldError: FieldError) {
  switch (fieldError.type) {
    case 'minLength':
      return 'A senha deve ter no mínimo 3 caracteres';
    case 'required':
      return 'O campo é obrigatório';
    case 'pattern':
      return 'O email é inválido';
  }
}

type Props = {
  onFormChange: (form: Form) => void;
};

const LoginForm = ({ onFormChange }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitArgs>({
    reValidateMode: 'onChange',
  });

  const navigate = useNavigate();

  const toast = useToast();

  const { isLoading, mutate } = useMutation(
    ({ email, password }: SubmitArgs) => authentication.login(email, password),
    {
      onSuccess: (res) => {
        localStorage.setItem('userToken', res.data.accessToken);
        navigate('/');
      },
      onError: (err) => {
        if ((err as any).response.data.error) {
          toast({
            title: (err as any).response.data.error,
            status: 'error',
            position: 'top',
          });
        }
      },
    }
  );

  const onSubmit = async (args: SubmitArgs) => mutate(args);

  const isEmailError = !!errors.email;
  const isPasswordError = !!errors.password;

  return (
    <Stack w="60%" spacing={6}>
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          Bem vindo
        </Text>
        <Text opacity="0.5">Para começar, digite suas credenciais.</Text>
      </Box>

      <FormControl isInvalid={isEmailError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {isEmailError && (
          <FormErrorMessage>{getErrorMessage(errors.email!)}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={isPasswordError}>
        <FormLabel htmlFor="password">Senha</FormLabel>
        <Input
          type="password"
          {...register('password', { required: true, minLength: 3 })}
        />
        {isPasswordError && (
          <FormErrorMessage>
            {getErrorMessage(errors.password!)}
          </FormErrorMessage>
        )}
      </FormControl>

      <Button
        disabled={isLoading}
        isLoading={isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        Entrar
      </Button>

      <Text d="flex" flexDirection="row">
        Não tem uma conta?{' '}
        <Text
          onClick={() => onFormChange(Form.SIGNUP)}
          ml="1"
          fontWeight="bold"
        >
          cadastre-se!
        </Text>
      </Text>
    </Stack>
  );
};

export default LoginForm;
