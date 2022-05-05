import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AddressData } from '../components/AddressStep';
import { CreditCardData } from '../components/CreditCardStep';
import { ProfileData } from '../components/ProfileStep';

export enum SignUpStep {
  PROFILE,
  ADDRESS,
  CREDIT_CARD,
}

interface SignUpData {
  profile: ProfileData;
  address: AddressData;
  cardData: CreditCardData;
}

export enum Role {
  ADMIN = 'ADMIN',
  REVIEWER = 'REVIEWER',
  SUBMITTER = 'SUBMITTER',
}

interface SignUpContextState {
  form: SignUpData;
  currentStep: SignUpStep;
  isLoadingSubmit: boolean;
  onProfileSubmit: (data: ProfileData) => void;
  onAddressSubmit: (data: AddressData) => void;
  onCreditCardSubmit: (data: CreditCardData) => void;
  setStep: (step: SignUpStep) => void;
  onSubmit: () => void;
}

export const initialState: SignUpContextState = {
  form: {
    address: {
      city: '',
      state: '',
      street: '',
      zipCode: '',
    },
    cardData: {
      cvc: '',
      expiry: '',
      name: '',
      number: '',
    },
    profile: {
      email: '',
      job: '',
      name: '',
      password: '',
      phone: '',
      role: '',
    },
  },
  currentStep: SignUpStep.PROFILE,
  isLoadingSubmit: false,
  onProfileSubmit: (data) => {},
  onAddressSubmit: (data) => {},
  onCreditCardSubmit: (data) => {},
  setStep: (step) => {},
  onSubmit: () => {},
};

const SignUpContext = createContext(initialState);

export const SignUpContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [step, setStep] = useState(SignUpStep.PROFILE);
  const [formData, setFormData] = useState<SignUpData>(initialState.form);
  const [isLoadingSubmit, setLoadingSubmit] = useState(false);

  const navigate = useNavigate();

  function onProfileSubmit(data: ProfileData) {
    setFormData({
      ...formData,
      profile: data,
    });
  }

  function onAddressSubmit(data: AddressData) {
    setFormData({
      ...formData,
      address: data,
    });
  }

  function onCreditCardSubmit(cardData: CreditCardData) {
    setFormData({
      ...formData,
      cardData,
    });
  }

  function onSubmit() {
    setLoadingSubmit(true);
    navigate('/');
  }

  return (
    <SignUpContext.Provider
      value={{
        currentStep: step,
        form: formData,
        isLoadingSubmit: isLoadingSubmit,
        setStep,
        onProfileSubmit,
        onAddressSubmit,
        onCreditCardSubmit,
        onSubmit,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

const useSignUpContext = () => useContext(SignUpContext);

export default useSignUpContext;
