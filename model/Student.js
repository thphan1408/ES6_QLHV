import { Person } from "../model/Person.js";

export class Students extends Person {
  constructor(_hoTen, _diaChi, _ma, _email, _nguoiDung, _toan, _ly, _hoa) {
    super(_hoTen, _diaChi, _ma, _email, _nguoiDung);
    this.toan = _toan;
    this.ly = _ly;
    this.hoa = _hoa;
  }

  //   Tính điểm trung bình
  tinhDTB(){
    return ((this.toan + this.ly + this.hoa) / 3).toFixed(2);
  }
}
