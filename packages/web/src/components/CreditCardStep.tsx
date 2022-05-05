import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Button, HStack, IconButton, Input } from '@chakra-ui/react';
import React, { useState } from 'react';
import PaymentCard from 'react-payment-card-component';
import useSignUpContext, { SignUpStep } from '../context/SignUpContext';

export interface CreditCardData {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
}

const CreditCardStep = () => {
  const { setStep, isLoadingSubmit, onCreditCardSubmit, onSubmit, form } =
    useSignUpContext();
  const [flipped, setFlipped] = useState(false);
  const [cardData, setCardData] = useState<CreditCardData>(form.cardData);

  const onCVCBlur = () => setFlipped(false);

  const onCVCFocus = () => setFlipped(true);

  function onChange(e: React.SyntheticEvent<HTMLInputElement>) {
    setCardData({ ...cardData, [e.currentTarget.name]: e.currentTarget.value });
  }

  return (
    <>
      <IconButton
        width={8}
        aria-label="seta_esquerda"
        icon={<ChevronLeftIcon />}
        onClick={() => setStep(SignUpStep.ADDRESS)}
      />
      <PaymentCard
        number={cardData.number}
        cvv={cardData.cvc}
        holderName={cardData.name}
        expiration={cardData.expiry}
        flipped={flipped}
      />
      <Input
        max={16}
        name="number"
        placeholder="Número do cartão"
        onChange={onChange}
      />
      <Input name="name" placeholder="Nome do titular" onChange={onChange} />
      <HStack>
        <Input
          name="expiry"
          placeholder="Data de expiração"
          onChange={onChange}
        />
        <Input
          name="cvc"
          placeholder="CVC"
          onBlur={onCVCBlur}
          onFocus={onCVCFocus}
          onChange={onChange}
        />
      </HStack>
      <Button
        isLoading={isLoadingSubmit}
        onClick={() => {
          onCreditCardSubmit(cardData);
          onSubmit();
        }}
      >
        Finalizar cadastro
      </Button>
    </>
  );
};
export default CreditCardStep;
