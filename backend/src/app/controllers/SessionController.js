import jwt from 'jsonwebtoken';

import User from '../models/User';
import Role from '../models/Role';
import SessionValidator from '../validators/SessionValidator';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const validator = new SessionValidator();

    if (!(await validator.validate(req))) {
      return res.status(400).json({ error: validator.errors });
    }

    const { password, username } = req.body;

    const user = await User.findOne({
      where: { username },
      include: [
        {
          model: Role,
          attributes: ['name', 'desc'],
          through: { attributes: [] },
        },
      ],
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, email, Roles: roles } = user;

    return res.json({
      user: {
        id,
        username,
        email,
      },
      token: jwt.sign({ id, roles }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
