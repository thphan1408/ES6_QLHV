import { Person } from "../model/Person.js";

export class Employee extends Person {
  constructor(_hoTen, _diaChi, _ma, _email, _nguoiDung, _soNgayLam, _luongNgay) {
    super(_hoTen, _diaChi, _ma, _email, _nguoiDung);
    this.soNgayLam = _soNgayLam;
    this.luongNgay = _luongNgay;
  }

  tinhLuong(){
    return this.soNgayLam * this.luongNgay;
  }
}

