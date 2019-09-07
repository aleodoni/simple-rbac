import UserRoleValidator from '../validators/UserRoleValidator';
import UserRole from '../models/UserRole';
import User from '../models/User';
import Role from '../models/Role';

class UserRoleController {
  async store(req, res) {
    const validator = new UserRoleValidator();

    if (!(await validator.validate(req))) {
      return res.status(400).json({ error: validator.errors });
    }

    /**
     * Check user_id is valid
     */
    const { user_id } = req.body;

    const checkUser = User.findByPk(user_id);

    if (!checkUser) {
      return res.status(400).json({ error: 'User not valid' });
    }

    /**
     * Check role_id is valid
     */
    const { role_id } = req.body;

    const checkRole = Role.findByPk(role_id);

    if (!checkRole) {
      return res.status(400).json({ error: 'Role not valid' });
    }

    try {
      const { id } = await UserRole.create(req.body);

      return res.json({
        id,
        user_id,
        role_id,
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: 'User/Role already exists' });
    }
  }

  async delete(req, res) {
    const userRole = await UserRole.findByPk(req.params.id);

    if (!userRole) {
      return res.status(400).json({ error: 'User/Role not found' });
    }

    await userRole.destroy();

    return res.send();
  }
}

export default new UserRoleController();
