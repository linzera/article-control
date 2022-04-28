import { Button, HStack, Input, Select } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export interface ProfileData {
  name: string;
  phone: string;
  job: string;
  email: string;
  password: string;
  role: string;
}

type Props = {
  setStep: (profileData: ProfileData) => void;
};

const ProfileStep = ({ setStep }: Props) => {
  const { register, handleSubmit, setValue } = useForm<ProfileData>({
    reValidateMode: 'onChange',
  });

  const onSubmit = (profileData: ProfileData) => {
    setStep(profileData);
  };

  return (
    <>
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
      <Input placeholder="Senha" {...register('password')} />
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
