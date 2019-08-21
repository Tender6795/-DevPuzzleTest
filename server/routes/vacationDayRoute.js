import express from 'express';
import * as VacationDayController from '../controllers/vacationDayController';
 import dateValidator from '../middlewares/dateValidator';

const router = express.Router();

router.post('/vacationDay',dateValidator, VacationDayController.create)
      .get('/vacationDay', VacationDayController.getAll);


export default router;