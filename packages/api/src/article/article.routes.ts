import { Router } from 'express';
import { authenticateJWT } from 'middlewares/authentication';

import articleController from './article.controller';

const articleRoutes = Router();

articleRoutes.get('/', authenticateJWT, articleController.getMyArticles);
articleRoutes.post('/', authenticateJWT, articleController.submitArticle);

export default articleRoutes;
