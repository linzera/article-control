import { Stack, Box, Progress } from '@chakra-ui/react';
import { useState } from 'react';
import { Form } from '../screens/Login';
import AddressStep, { AddressData } from './AddressStep';
import ProfileStep, { ProfileData } from './ProfileStep';
import CreditCardStep from './CreditCardStep';

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

interface SignUpData {
  profile?: ProfileData;
  address?: AddressData;
}

const SignUpForm = ({ onFormChange }: Props) => {
  const [step, setStep] = useState(SignUpStep.PROFILE);

  const [signUpData, setSignUpData] = useState<SignUpData>({});

  const renderStep = () => {
    switch (step) {
      case SignUpStep.PROFILE:
        return (
          <ProfileStep
            setStep={(profileData) => {
              setStep(SignUpStep.ADDRESS);
              setSignUpData({ ...signUpData, profile: profileData });
            }}
          />
        );
      case SignUpStep.ADDRESS:
        return (
          <AddressStep
            setStep={(addressData) => {
              setStep(SignUpStep.CREDIT_CARD);
              setSignUpData({ ...signUpData, address: addressData });
            }}
          />
        );
      case SignUpStep.CREDIT_CARD:
        return <CreditCardStep />;
    }
  };

  return (
    <>
      <Stack w="60%" spacing={6}>
        {renderStep()}
      </Stack>
    </>
  );
};

export default SignUpForm;
