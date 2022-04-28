import { Button, HStack, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export interface AddressData {
  street: string;
  city: string;
  zipCode: string;
  state: string;
}

type Props = {
  setStep: (addressData: AddressData) => void;
};

const AddressStep = ({ setStep }: Props) => {
  const { register, handleSubmit } = useForm<AddressData>({
    reValidateMode: 'onChange',
  });

  const onSubmit = (addressData: AddressData) => {
    setStep(addressData);
  };

  return (
    <>
      <Input placeholder="Rua" {...register('street')} />
      <Input inputMode="numeric" placeholder="CEP" {...register('zipCode')} />
      <HStack>
        <Input placeholder="Estado" {...register('state')} />
        <Input placeholder="Cidade" {...register('city')} />
      </HStack>
      <Button onClick={handleSubmit(onSubmit)}>Continuar</Button>
    </>
  );
};
export default AddressStep;
