class RolesUtil {
  init(roles) {
    this.roles = roles;
  }

  canAccess() {
    if (!this.roles) {
      return false;
    }
    this.roles.map(role => {
      console.log(role);
      return true;
    });
    return true;
  }
}

export default RolesUtil;
