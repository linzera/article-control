import { Stack } from '@chakra-ui/react';
import { Form } from '../screens/Login';
import AddressStep from './AddressStep';
import ProfileStep from './ProfileStep';
import CreditCardStep from './CreditCardStep';
import useSignUpContext from '../context/SignUpContext';

enum SignUpStep {
  PROFILE,
  ADDRESS,
  CREDIT_CARD,
}

type Props = {
  onFormChange: (form: Form) => void;
};

export type StepProps = {
  setStep: () => void;
};

const SignUpForm = ({ onFormChange }: Props) => {
  const { currentStep } = useSignUpContext();

  const renderStep = () => {
    switch (currentStep) {
      case SignUpStep.PROFILE:
        return <ProfileStep onBackPress={() => onFormChange(Form.LOGIN)} />;
      case SignUpStep.ADDRESS:
        return <AddressStep />;
      case SignUpStep.CREDIT_CARD:
        return <CreditCardStep />;
    }
  };

  return (
    <Stack w="70%" spacing={6}>
      {renderStep()}
    </Stack>
  );
};

export default SignUpForm;
