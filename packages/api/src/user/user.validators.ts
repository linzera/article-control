import { checkSchema } from 'express-validator';
import { CreditCardBodyArg } from 'user/user.dto';
import userRepository from 'user/user.repository';

export const createUserValidationMiddleware = checkSchema({
  email: {
    isEmail: {
      bail: true,
    },
    custom: {
      options: async (value: string) => {
        const data = await userRepository.getUserByEmail(value);

        if (data?.email) {
          return Promise.reject('Email já cadastrado');
        }
      },
    },
  },
  name: {
    isLength: {
      options: {
        min: 3,
      },
    },
  },
  password: {
    isStrongPassword: {
      options: {
        minLength: 3,
        minNumbers: 3,
        minSymbols: 1,
        returnScore: true,
      },
    },
  },
  'creditCard.number': {
    isLength: {
      options: {
        max: 16,
        min: 16,
      },
    },
  },
  'creditCard.expiry': {
    isLength: {
      options: {
        max: 5,
        min: 5,
      },
    },
  },
  'creditCard.cvc': {
    isLength: {
      options: {
        max: 3,
        min: 3,
      },
    },
  },
  role: {
    matches: {
      options: [/\b(?:REVIEWER|SUBMITTER)\b/],
    },
  },
  phone: {
    isMobilePhone: {
      errorMessage: 'Número de telefone inválido',
    },
  },
  company: {
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'O nome da empresa precisa ter no mínimo 3 caracteres',
    },
  },
  'address.street': {
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'O nome da rua precisa ter no mínimo 3 caracteres',
    },
  },
  'address.city': {
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'O nome da cidade precisa ter no mínimo 3 caracteres',
    },
  },
  'address.zipCode': {
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'O código postal precisa ter no mínimo 3 caracteres',
    },
  },
  'address.state': {
    isLength: {
      options: {
        min: 3,
      },
      errorMessage: 'O nome do estado precisa ter no mínimo 3 caracteres',
    },
  },
});
