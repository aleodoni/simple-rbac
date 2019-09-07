// import Localizacao from '../models/Localizacao';
// import Pavimento from '../models/Pavimento';
import ResourceValidator from '../validators/ResourceValidator';
import Resource from '../models/Resource';
// import Role from '../models/Role';

class ResourceController {
  async index(req, res) {
    const resources = await Resource.findAll({
      attributes: ['id', 'name', 'desc'],
    });

    return res.json(resources);
  }

  async store(req, res) {
    const validator = new ResourceValidator();

    if (!(await validator.validate(req))) {
      return res.status(400).json({ error: validator.errors });
    }

    const { id, name, desc } = await Resource.create(req.body);

    return res.json({
      id,
      name,
      desc,
    });
  }

  async update(req, res) {
    const validator = new ResourceValidator();

    if (!(await validator.validate(req))) {
      return res.status(400).json({ error: validator.errors });
    }

    const resource = await Resource.findByPk(req.params.id);

    if (!resource) {
      return res.status(400).json({ error: 'Resource not found' });
    }

    const { name, desc } = await resource.update(req.body);

    return res.json({ name, desc });
  }

  async delete(req, res) {
    const resource = await Resource.findByPk(req.params.id);

    if (!resource) {
      return res.status(400).json({ error: 'Resource not found' });
    }

    await resource.destroy();

    return res.send();
  }
}

export default new ResourceController();
