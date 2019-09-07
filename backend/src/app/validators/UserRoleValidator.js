import * as Yup from 'yup';

class UserRoleValidator {
  constructor() {
    this.init();
    this.errors = [];
  }

  init() {
    this.schema = Yup.object().shape({
      user_id: Yup.number().required(),
      role_id: Yup.number().required(),
    });
  }

  async validate(req) {
    try {
      await this.schema.validate(req.body, { abortEarly: false });
    } catch (e) {
      this.errors = e.errors;
      return false;
    }
    return true;
  }
}

export default UserRoleValidator;
