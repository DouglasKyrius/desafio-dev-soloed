import { Router } from 'express';
import stockRoutes from './stock.routes';

const routes = Router();

const prefixRoutes = '/api/v1';

routes.get('/', (req, res) => {
  res.send({ message: 'API Soloed_ Store' });
});

routes.get(prefixRoutes, (req, res) => {
  res.send({ message: 'API V1.0' });
});

routes.use(`${prefixRoutes}/stock`, stockRoutes);

export default routes;
