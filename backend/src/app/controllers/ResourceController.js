// import Localizacao from '../models/Localizacao';
// import Pavimento from '../models/Pavimento';
// import RoleValidator from '../validators/RoleValidator';
import Resource from '../models/Resource';
// import Role from '../models/Role';

class ResourceController {
  async index(req, res) {
    const resources = await Resource.findAll({
      attributes: ['id', 'name', 'desc'],
    });

    return res.json(resources);
  }

  // async store(req, res) {
  //   const validator = new LocalizacaoValidator();

  //   if (!(await validator.validate(req))) {
  //     return res.status(400).json({ error: validator.errors });
  //   }

  //   const { id, nome } = await Localizacao.create(req.body);

  //   return res.json({
  //     id,
  //     nome,
  //   });
  // }

  // async update(req, res) {
  //   const validator = new LocalizacaoValidator();

  //   if (!(await validator.validate(req))) {
  //     return res.status(400).json({ error: validator.errors });
  //   }

  //   const localizacao = await Localizacao.findByPk(req.params.id);

  //   if (!localizacao) {
  //     return res.status(400).json({ error: 'Localização não encontrada' });
  //   }

  //   await localizacao.update(req.body);

  //   return res.json(localizacao);
  // }

  // async delete(req, res) {
  //   const localizacao = await Localizacao.findByPk(req.params.id);

  //   if (!localizacao) {
  //     return res.status(400).json({ error: 'Localização não encontrada' });
  //   }

  //   await localizacao.destroy();

  //   return res.send();
  // }
}

export default new ResourceController();
