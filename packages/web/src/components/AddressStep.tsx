import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Input } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import useSignUpContext, { SignUpStep } from '../context/SignUpContext';

export interface AddressData {
  street: string;
  city: string;
  zipCode: string;
  state: string;
}

const AddressStep = () => {
  const { form, onAddressSubmit, setStep } = useSignUpContext();

  const { register, handleSubmit } = useForm<AddressData>({
    reValidateMode: 'onChange',
    defaultValues: form.address,
  });

  const onSubmit = (addressData: AddressData) => {
    onAddressSubmit(addressData);
    setStep(SignUpStep.CREDIT_CARD);
  };

  return (
    <>
      <IconButton
        width={8}
        aria-label="seta_esquerda"
        icon={<ChevronLeftIcon />}
        onClick={() => setStep(SignUpStep.PROFILE)}
      />
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
