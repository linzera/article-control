import prisma from 'config/db';
import creditCardType from 'credit-card-type';
import { CreateUserDTO } from './user.dto';

const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      email: true,
    },
  });
};

const createUser = async ({
  email,
  company,
  name,
  phone,
  address,
  creditCard,
  role,
}: CreateUserDTO) => {
  return prisma.user.create({
    data: {
      email,
      company,
      name,
      phone,
      creditCards: {
        create: {
          ...creditCard,
          brand: creditCardType(creditCard.number)[0].type,
        },
      },
      address: {
        create: {
          ...address,
        },
      },
      profile: {
        create: {
          role,
        },
      },
    },
  });
};

export default { getUserByEmail, createUser };
