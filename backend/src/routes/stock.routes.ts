import { Router } from 'express';
import StockController from '../controllers/StockController';

const stockRoutes = Router();
const stockController = new StockController();

stockRoutes.get('/', stockController.getAll);

export default stockRoutes;
