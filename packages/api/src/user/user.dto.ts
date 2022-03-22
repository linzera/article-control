import { Prisma, Role } from '@prisma/client';

export type CreditCardBodyArg = {
  number?: string;
  expiry?: string;
  cvc?: string;
};

export interface CreateUserDTO
  extends Omit<
    Prisma.UserCreateInput,
    'id' | 'articles' | 'profile' | 'reviews' | 'creditCards' | 'address'
  > {
  creditCard: {
    cvc: string;
    expiry: string;
    number: string;
  };
  address: {
    street: string;
    zipCode: string;
    city: string;
    state: string;
  };
  role: Role;
}
