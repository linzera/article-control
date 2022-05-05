import prisma from 'config/db';
import { Request, Response } from 'express';

const getEvents = async (req: Request, res: Response) => {
  const data = await prisma.event.findMany({
    orderBy: {
      reviewLimitDate: 'desc',
    },
    take: 10,
  });

  res.json(data);
};

const createEvent = async (req: Request, res: Response) => {
  const {
    name,
    description,
    startAt,
    endAt,
    submissionLimitDate,
    reviewLimitDate,
  } = req.body;

  const data = await prisma.event.create({
    data: {
      name,
      description,
      startAt: new Date(startAt),
      endAt: new Date(endAt),
      submissionLimitDate: new Date(submissionLimitDate),
      reviewLimitDate: new Date(reviewLimitDate),
    },
  });

  res.json(data);
};

export default {
  getEvents,
  createEvent,
};
