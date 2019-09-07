import RoleValidator from '../validators/RoleValidator';
import Resource from '../models/Resource';
import Role from '../models/Role';

class RoleController {
  async index(req, res) {
    const roles = await Role.findAll({
      attributes: ['id', 'name', 'desc'],
      include: [
        {
          model: Resource,
          attributes: ['name', 'desc'],
          through: {
            attributes: ['can_add', 'can_edit', 'can_delete', 'can_view'],
          },
        },
      ],
    });

    return res.json(roles);
  }

  async store(req, res) {
    const validator = new RoleValidator();

    if (!(await validator.validate(req))) {
      return res.status(400).json({ error: validator.errors });
    }

    const { id, name, desc } = await Role.create(req.body);

    return res.json({
      id,
      name,
      desc,
    });
  }

  async update(req, res) {
    const validator = new RoleValidator();

    if (!(await validator.validate(req))) {
      return res.status(400).json({ error: validator.errors });
    }

    const role = await Role.findByPk(req.params.id);

    if (!role) {
      return res.status(400).json({ error: 'Role not found' });
    }

    const { id, name, desc } = await role.update(req.body);

    return res.json({ id, name, desc });
  }

  async delete(req, res) {
    const role = await Role.findByPk(req.params.id);

    if (!role) {
      return res.status(400).json({ error: 'Role not found' });
    }

    await role.destroy();

    return res.send();
  }
}

export default new RoleController();
