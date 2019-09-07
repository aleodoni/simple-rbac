import { Op } from 'sequelize';

import User from '../models/User';
import Role from '../models/Role';
// import Resource from '../models/Resource';
import UserValidator from '../validators/UserValidator';

class UserController {
  async index(req, res) {
    const user = await User.findByPk(req.userId, {
      attributes: ['id', 'username', 'email'],
      include: [
        {
          model: Role,
          attributes: ['id', 'name', 'desc'],
          through: {
            attributes: [],
          },
          // through: {
          //   attributes: ['id', 'name', 'desc'],
          // },
          // include: [
          //   {
          //     model: Resource,
          //     attributes: ['id', 'name', 'desc'],
          //     through: {
          //       attributes: [
          //         'id',
          //         'can_add',
          //         'can_edit',
          //         'can_delete',
          //         'can_view',
          //       ],
          //     },
          //   },
          // ],
        },
      ],
    });

    return res.json(user);
  }

  async store(req, res) {
    const validator = new UserValidator();

    if (!(await validator.validate(req, validator.schemaCreate))) {
      return res.status(400).json({ error: validator.errors });
    }

    const userExists = await User.findOne({
      where: {
        [Op.or]: [{ email: req.body.email }, { username: req.body.username }],
      },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    const { id, username, email } = await User.create(req.body);

    return res.json({
      id,
      username,
      email,
    });
  }

  async update(req, res) {
    const validator = new UserValidator();

    if (!(await validator.validate(req, validator.schemaUpdate))) {
      return res.status(400).json({ error: validator.errors });
    }

    const { email, oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (email !== user.email) {
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ error: 'User already exists.' });
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(410).json({ error: 'Password does not match' });
    }

    const { id, username } = await user.update(req.body);

    return res.json({
      id,
      username,
      email,
    });
  }
}

export default new UserController();
