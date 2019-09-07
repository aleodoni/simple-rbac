import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RoleController from './app/controllers/RoleController';
import ResourceController from './app/controllers/ResourceController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/**
 * Rotas sem autenticação
 */

routes.post('/sessions', SessionController.store);

routes.post('/users', UserController.store);

/**
 * Rotas com autenticação
 */
routes.use(authMiddleware);

routes.put('/users/:id', UserController.update);

routes.get('/roles', RoleController.index);
routes.post('/roles', RoleController.store);
routes.put('/roles/:id', RoleController.update);
routes.delete('/roles/:id', RoleController.delete);

routes.get('/resources', ResourceController.index);
routes.post('/resources', ResourceController.store);
routes.put('/resources/:id', ResourceController.update);
routes.delete('/resources/:id', ResourceController.delete);

export default routes;
