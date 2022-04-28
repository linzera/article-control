import { Button, HStack, Input } from '@chakra-ui/react';
import { useState } from 'react';
import PaymentCard from 'react-payment-card-component';

export interface CreditCardData {
  cvc: string;
  expiry: string;
  name: string;
  number: string;
}

const CreditCardStep = () => {
  const [flipped, setFlipped] = useState(false);

  const onCVCBlur = () => setFlipped(false);

  const onCVCFocus = () => setFlipped(true);

  return (
    <>
      <PaymentCard
        brand="visa"
        number="4111111111111111"
        cvv="202"
        holderName="Owen Lars"
        expiration="12/20"
        flipped={flipped}
      />
      <Input placeholder="Número do cartão" />
      <Input placeholder="Nome do titular" />
      <HStack>
        <Input placeholder="Data de expiração" />
        <Input placeholder="CVC" onBlur={onCVCBlur} onFocus={onCVCFocus} />
      </HStack>
      <Button>Finalizar cadastro</Button>
    </>
  );
};
export default CreditCardStep;
