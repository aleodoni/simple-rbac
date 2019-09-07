import * as Yup from 'yup';

class RoleResourceValidator {
  constructor() {
    this.init();
    this.errors = [];
  }

  init() {
    this.schemaCreate = Yup.object().shape({
      role_id: Yup.number().required(),
      resource_id: Yup.number().required(),
      can_add: Yup.boolean().required(),
      can_edit: Yup.boolean().required(),
      can_delete: Yup.boolean().required(),
      can_view: Yup.boolean().required(),
    });

    this.schemaUpdate = Yup.object().shape({
      can_add: Yup.boolean().required(),
      can_edit: Yup.boolean().required(),
      can_delete: Yup.boolean().required(),
      can_view: Yup.boolean().required(),
    });
  }

  async validate(req, schema) {
    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (e) {
      this.errors = e.errors;
      return false;
    }
    return true;
  }
}

export default RoleResourceValidator;
