import prisma from 'config/db';
import { Request, Response } from 'express';

const getMyArticles = async (req: Request, res: Response) => {
  //@ts-ignore
  const { email } = req.user as { userId?: string };

  try {
    const articles = await prisma.article.findMany({
      where: {
        User: {
          email,
        },
      },
      include: {
        Event: {
          select: {
            name: true,
          },
        },
      },
      take: 10,
    });

    res.json(articles);
  } catch (e) {
    console.log(e);
    res.send(500);
  }
};

const submitArticle = async (req: Request, res: Response) => {
  //@ts-ignore
  const { email } = req.user as { userId?: string };

  const { eventId, uri, abstract } = req.body;

  const data = await prisma.article.create({
    data: {
      abstract,
      uri,
      Event: {
        connect: {
          id: eventId,
        },
      },
      User: {
        connect: {
          email,
        },
      },
    },
  });

  res.json(data);
};

export default {
  getMyArticles,
  submitArticle,
};
