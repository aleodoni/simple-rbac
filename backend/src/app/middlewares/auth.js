import jwt from 'jsonwebtoken';
import { promisify } from 'util';

import authConfig from '../../config/auth';
import RolesUtil from './RolesUtil';

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  const [, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    req.userRoles = decoded.roles;

    const rolesUtil = new RolesUtil();
    rolesUtil.init(decoded.roles);
    rolesUtil.canAccess();

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' });
  }
};
