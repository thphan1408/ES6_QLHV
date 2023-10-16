import { Person } from "../model/Person.js";

export class Customer extends Person {
    constructor(_hoTen, _diaChi, _ma, _email, _nguoiDung, _tenCty, _hoaDon, _danhGia) {
        super(_hoTen, _diaChi, _ma, _email, _nguoiDung);
        this.tenCty = _tenCty;
        this.hoaDon = _hoaDon;
        this.danhGia = _danhGia;
    }
}