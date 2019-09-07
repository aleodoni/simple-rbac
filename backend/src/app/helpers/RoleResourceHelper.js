import Role from '../models/Role';
import Resource from '../models/Resource';
import RoleResource from '../models/RoleResource';

class RoleResourceHelper {
  async checkRoleValid(req, res) {
    const { role_id } = req.body;

    const roleValid = await Role.findByPk(role_id);

    if (!roleValid) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    return true;
  }

  async checkResourceValid(req, res) {
    const { resource_id } = req.body;

    const resourceValid = await Resource.findByPk(resource_id);

    if (!resourceValid) {
      return res.status(400).json({ error: 'Invalid resource' });
    }

    return true;
  }

  async checkRoleResource(req, res) {
    const roleResource = await RoleResource.findByPk(req.params.id);

    if (!roleResource) {
      return res.status(400).json({ error: 'Role/Resource not found' });
    }

    return roleResource;
  }
}

export default RoleResourceHelper;
