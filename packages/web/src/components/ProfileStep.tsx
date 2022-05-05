import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, HStack, Input, Select, IconButton } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import useSignUpContext, { SignUpStep } from '../context/SignUpContext';

export interface ProfileData {
  name: string;
  phone: string;
  job: string;
  email: string;
  password: string;
  role: string;
}

const ProfileStep = ({ onBackPress }: any) => {
  const { onProfileSubmit, setStep, form } = useSignUpContext();
  const { register, handleSubmit, setValue } = useForm<ProfileData>({
    reValidateMode: 'onChange',
    defaultValues: form.profile,
  });

  const onSubmit = (profileData: ProfileData) => {
    onProfileSubmit(profileData);
    setStep(SignUpStep.ADDRESS);
  };

  return (
    <>
      <IconButton
        width={8}
        aria-label="seta_esquerda"
        icon={<ChevronLeftIcon />}
        onClick={onBackPress}
      />
      <HStack>
        <Input placeholder="Nome" {...register('name')} />
        <Input
          inputMode="numeric"
          placeholder="Telefone"
          {...register('phone')}
        />
      </HStack>
      <Input placeholder="Local de emprego" {...register('job')} />
      <Input placeholder="Email" {...register('email')} />
      <Input type="password" placeholder="Senha" {...register('password')} />
      <Select
        placeholder="Selecione seu tipo de conta"
        onChange={(e) => setValue('role', e.target.value)}
      >
        <option value="SUBMITTER">Escritor</option>
        <option value="REVIEWER">Revisor</option>
      </Select>
      <Button onClick={handleSubmit(onSubmit)}>Continuar</Button>
    </>
  );
};

export default ProfileStep;
