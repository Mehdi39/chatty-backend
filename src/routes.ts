import { authRoutes } from '@auth/routes/authRoutes';
import { Application, Request, Response, NextFunction } from 'express';

const BASE_PATH = '/api/v1/';

export default (app: Application) => {
  const routes = () => {
    app.use(BASE_PATH, authRoutes.routes());
  };
  routes();
};
