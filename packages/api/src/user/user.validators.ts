import { body, checkSchema } from 'express-validator';

type CreditCardBodyArg = {
  number?: string;
  expiry?: string;
  cvc?: string;
};

export default checkSchema({
  email: {
    isEmail: {
      bail: true,
    },
  },
  name: {
    isLength: {
      options: {
        min: 3,
      },
    },
  },
  creditCard: {
    custom: {
      options: (value, { req, location, path }) => {
        const creditCard = value as CreditCardBodyArg;

        if (creditCard.number && creditCard.expiry && creditCard.cvc) {
          return true;
        }
      },
    },
  },
});
