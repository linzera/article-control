import { Router } from 'express';

import eventController from './event.controller';

const eventRoutes = Router();

eventRoutes.get('/', eventController.getEvents);
eventRoutes.post('/', eventController.createEvent);

export default eventRoutes;
