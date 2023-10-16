export class Person {
  constructor(_ma, _hoTen, _diaChi, _email, _nguoiDung) {
    this.hoTen = _hoTen;
    this.diaChi = _diaChi;
    this.ma = _ma;
    this.email = _email;
    this.nguoiDung = _nguoiDung;
  }

  mapNguoiDung = () => {
    let result = "";
    switch (this.nguoiDung) {
      case "hocVien":
        result = "Học viên";
        break;
      case "nhanVien":
        result = "Nhân viên";
        break;
      case "khachHang":
        result = "Khách hàng";
        break;
      default:
        result = "-";
        break;
    }
    return result;
  };
}
