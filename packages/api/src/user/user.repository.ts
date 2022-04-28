import prisma from '../config/db';
import creditCardType from 'credit-card-type';
import bcrypt from 'bcryptjs';
import { CreateUserDTO } from './user.dto';

const getUserByEmail = (email: string) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      email: true,
      password: true,
      profile: {
        select: {
          role: true,
        },
      },
    },
  });
};

const getUserByEmailAndPassword = async (email: string, password: string) => {
  return prisma.user.findFirst({
    where: {
      email,
      password,
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
  password: userRawPassword,
  phone,
  address,
  creditCard,
  role,
}: CreateUserDTO) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(userRawPassword, salt);

  return prisma.user.create({
    data: {
      email,
      company,
      password: hash,
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

export default { getUserByEmail, getUserByEmailAndPassword, createUser };
