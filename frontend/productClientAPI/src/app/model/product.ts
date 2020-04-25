export class Product {
  id: number;
  pname: String;
  price: number;
  grade: String;

  constructor(id: number, pname: string, price: number, grade: string) {
    this.id = id;
    this.pname = pname;
    this.price = price;
    this.grade = grade;

  }
}
