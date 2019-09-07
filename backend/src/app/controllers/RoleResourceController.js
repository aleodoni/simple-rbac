import RoleResourceValidator from '../validators/RoleResourceValidator';
import RoleResource from '../models/RoleResource';
import RoleResourceHelper from '../helpers/RoleResourceHelper';

class RoleResourceController {
  async store(req, res) {
    const validator = new RoleResourceValidator();

    const helper = new RoleResourceHelper();

    if (!(await validator.validate(req, validator.schemaCreate))) {
      return res.status(400).json({ error: validator.errors });
    }

    helper.checkRoleValid(req, res);

    helper.checkResourceValid(req, res);

    try {
      const {
        id,
        role_id,
        resource_id,
        can_add,
        can_edit,
        can_delete,
        can_view,
      } = await RoleResource.create(req.body);

      return res.json({
        id,
        role_id,
        resource_id,
        can_add,
        can_edit,
        can_delete,
        can_view,
      });
    } catch (err) {
      return res.status(400).json({ error: 'Role/Resource already exists' });
    }
  }

  async update(req, res) {
    const validator = new RoleResourceValidator();

    if (!(await validator.validate(req, validator.schemaUpdate))) {
      return res.status(400).json({ error: validator.errors });
    }

    const roleResource = await RoleResource.findByPk(req.params.id);

    if (!roleResource) {
      return res.status(400).json({ error: 'Role/Resource not found' });
    }

    await roleResource.update(req.body);

    return res.json({
      roleResource,
    });
  }

  async delete(req, res) {
    const roleResource = await RoleResource.findByPk(req.params.id);

    if (!roleResource) {
      return res.status(400).json({ error: 'Role/Resource not found' });
    }

    await roleResource.destroy();

    return res.send();
  }
}

export default new RoleResourceController();
