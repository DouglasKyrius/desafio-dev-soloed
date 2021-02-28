import 'express-async-errors';
import 'reflect-metadata';

import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  return response.status(500).json({ status: 'error', message: err });
});

app.listen(port, () => {
  console.log(`🏃 Servidor rodando em localhost:${port}`);
});
