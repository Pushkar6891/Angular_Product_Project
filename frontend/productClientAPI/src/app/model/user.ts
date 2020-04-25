export class User {
  uname: String;
  mobile: String;
  age: number;
  gender: String;

  constructor(uname: string,
    mobile: string,
    age: number,
    gender: string) {
    this.uname = uname;
    this.mobile = mobile;
    this.age = age;
    this.gender = gender;

  }
}
