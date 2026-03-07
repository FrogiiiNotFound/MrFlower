class UserDto {
  public user_id: string;
  public name: string;
  public email: string;

  constructor(model: any) {
    this.user_id = model.user_id;
    this.name = model.name;
    this.email = model.email;
  }
}

export default UserDto;
