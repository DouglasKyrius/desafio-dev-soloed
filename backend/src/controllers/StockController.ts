import { Request, Response } from 'express';

// DATA
import dataPath from '../data/stock.json';

class StockController {
  public async getAll(
    _: Request,
    response: Response,
  ): Promise<Response> {
    return response.json(dataPath);
  }
}

export default StockController;
