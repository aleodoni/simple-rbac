// import Localizacao from '../models/Localizacao';
// import Pavimento from '../models/Pavimento';
// import RoleValidator from '../validators/RoleValidator';
import Role from '../models/Role';
import Resource from '../models/Resource';

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

export default new RoleController();
