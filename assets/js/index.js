const getElements = (selector) => document.querySelector(selector);

getElements("#nguoiDung").addEventListener("change", () => {
  const nguoiDung = getElements("#nguoiDung").value;
  if (nguoiDung === "") {
    getElements("#HocVien").style.display = "none";
    getElements("#NhanVien").style.display = "none";
    getElements("#khachHang").style.display = "none";
  } else if (nguoiDung === "hocVien") {
    getElements("#HocVien").style.display = "flex";
    getElements("#NhanVien").style.display = "none";
    getElements("#khachHang").style.display = "none";
  } else if (nguoiDung === "nhanVien") {
    getElements("#HocVien").style.display = "none";
    getElements("#NhanVien").style.display = "flex";
    getElements("#khachHang").style.display = "none";
  } else if (nguoiDung === "khachHang") {
    getElements("#HocVien").style.display = "none";
    getElements("#NhanVien").style.display = "none";
    getElements("#khachHang").style.display = "block";
  }

  // console.log(nguoiDung);
});

