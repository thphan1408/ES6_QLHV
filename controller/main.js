import ListPerson from '../model/ListPerson.js'
import { Employee } from '../model/Employee.js'
import { Students } from '../model/Student.js'
import { Customer } from '../model/Customer.js'

const getElements = (selector) => document.querySelector(selector)
const listPerson = new ListPerson()

//default value // nhớ kh
const getInfoPerson = (isCheckTrung = true) => {
  let isValid = true
  const ma = getElements('#ma').value
  const hoTen = getElements('#hoTen').value
  const diaChi = getElements('#diaChi').value
  const email = getElements('#email').value
  const loaiNguoiDung = getElements('#nguoiDung').value

  if (loaiNguoiDung === 'hocVien') {
    const toan = +getElements('#diemToan').value
    const ly = +getElements('#diemLy').value
    const hoa = +getElements('#diemHoa').value
    const person = new Students(
      ma,
      hoTen,
      diaChi,
      email,
      loaiNguoiDung,
      toan,
      ly,
      hoa
    )

    isValid = isCheckTrung
      ? kiemTraTrung(
          person.ma,
          listPerson.arrStudents,
          '#invalidID',
          'Mã đã tồn tại'
        ) &&
        kiemTraRong(person.ma, '#invalidID', 'Mã không được để trống') &&
        kiemTraDoDai(person.ma, 4, 6, '#invalidID', 'Độ dài từ 4 - 6 ký tự')
      : kiemTraRong(person.ma, '#invalidID', 'Mã không được để trống') &&
        kiemTraDoDai(person.ma, 4, 6, '#invalidID', 'Độ dài từ 4 - 6 ký tự')

    isValid &= kiemTraRong(
      person.hoTen,
      '#invalidTen',
      'Tên không được để trống'
    )

    isValid &= kiemTraRong(
      person.diaChi,
      '#invalidDiaChi',
      'Địa chỉ không được để trống'
    )

    isValid &=
      kiemTraRong(person.email, '#invalidEmail', 'Email không được để trống') &&
      kiemTraEmail(person.email, '#invalidEmail', 'Email không hợp lệ')

    isValid &=
      checkEmptyNum(
        person.toan,
        '#invalidDiemToan',
        'Điểm toán không được để trống'
      ) &&
      kiemTraSo(person.toan, '#invalidDiemToan', 'Điểm toán phải là số') &&
      kiemTraMinMax(
        person.toan,
        0,
        10,
        '#invalidDiemToan',
        'Điểm số phải từ 0 - 10'
      )

    isValid &=
      checkEmptyNum(
        person.ly,
        '#invalidDiemLy',
        'Điểm ly không được để trống'
      ) &&
      kiemTraSo(person.ly, '#invalidDiemLy', 'Điểm lý phải là số') &&
      kiemTraMinMax(
        person.ly,
        0,
        10,
        '#invalidDiemLy',
        'Điểm số phải từ 0 - 10'
      )

    isValid &=
      checkEmptyNum(
        person.hoa,
        '#invalidDiemHoa',
        'Điểm hóa không được để trống'
      ) &&
      kiemTraSo(person.hoa, '#invalidDiemHoa', 'Điểm hóa phải là số') &&
      kiemTraMinMax(
        person.hoa,
        0,
        10,
        '#invalidDiemHoa',
        'Điểm số phải từ 0 - 10'
      )

    return isValid ? person : undefined
  } else if (loaiNguoiDung === 'nhanVien') {
    const soNgayLam = +getElements('#soNgayLam').value
    const luongNgay = +getElements('#luongNgay').value
    const person = new Employee(
      ma,
      hoTen,
      diaChi,
      email,
      loaiNguoiDung,
      soNgayLam,
      luongNgay
    )

    isValid = isCheckTrung
      ? kiemTraTrung(
          person.ma,
          listPerson.arrEmployee,
          '#invalidID',
          'Mã đã tồn tại'
        ) &&
        kiemTraRong(person.ma, '#invalidID', 'Mã không được để trống') &&
        kiemTraDoDai(person.ma, 4, 6, '#invalidID', 'Độ dài từ 4 - 6 ký tự')
      : kiemTraRong(person.ma, '#invalidID', 'Mã không được để trống') &&
        kiemTraDoDai(person.ma, 4, 6, '#invalidID', 'Độ dài từ 4 - 6 ký tự')

    isValid &= kiemTraRong(
      person.hoTen,
      '#invalidTen',
      'Tên không được để trống'
    )

    isValid &= kiemTraRong(
      person.diaChi,
      '#invalidDiaChi',
      'Địa chỉ không được để trống'
    )

    isValid &=
      kiemTraRong(person.email, '#invalidEmail', 'Email không được để trống') &&
      kiemTraEmail(person.email, '#invalidEmail', 'Email không hợp lệ')

    isValid &=
      checkEmptyNum(
        person.soNgayLam,
        '#invalidSoNgayLam',
        'Số ngày làm không được để trống'
      ) &&
      kiemTraSo(person.soNgayLam, '#invalidSoNgayLam', 'Số ngày làm phải là số')

    isValid &=
      checkEmptyNum(
        person.luongNgay,
        '#invalidLuongNgay',
        'Lương ngày không được để trống'
      ) &&
      kiemTraSo(person.luongNgay, '#invalidLuongNgay', 'Lương ngày phải là số')

    return isValid ? person : undefined
  } else if (loaiNguoiDung === 'khachHang') {
    const tenCty = getElements('#tenCty').value
    const hoaDon = +getElements('#hoaDon').value
    const danhGia = getElements('#danhGia').value
    const person = new Customer(
      ma,
      hoTen,
      diaChi,
      email,
      loaiNguoiDung,
      tenCty,
      hoaDon,
      danhGia
    )

    isValid = isCheckTrung
      ? kiemTraTrung(
          person.ma,
          listPerson.arrCustomer,
          '#invalidID',
          'Mã đã tồn tại'
        ) &&
        kiemTraRong(person.ma, '#invalidID', 'Mã không được để trống') &&
        kiemTraDoDai(person.ma, 4, 6, '#invalidID', 'Độ dài từ 4 - 6 ký tự')
      : kiemTraRong(person.ma, '#invalidID', 'Mã không được để trống') &&
        kiemTraDoDai(person.ma, 4, 6, '#invalidID', 'Độ dài từ 4 - 6 ký tự')

    isValid &= kiemTraRong(
      person.hoTen,
      '#invalidTen',
      'Tên không được để trống'
    )

    isValid &= kiemTraRong(
      person.diaChi,
      '#invalidDiaChi',
      'Địa chỉ không được để trống'
    )

    isValid &=
      kiemTraRong(person.email, '#invalidEmail', 'Email không được để trống') &&
      kiemTraEmail(person.email, '#invalidEmail', 'Email không hợp lệ')

    isValid &= kiemTraRong(
      person.tenCty,
      '#invalidTenCty',
      'Tên công ty không được để trống'
    )

    isValid &=
      checkEmptyNum(
        person.hoaDon,
        '#invalidHD',
        'Số hóa đơn không được để trống'
      ) && kiemTraSo(person.hoaDon, '#invalidHD', 'Số hóa đơn phải là số')

    isValid &= kiemTraRong(
      person.danhGia,
      '#invalidDanhGia',
      'Đánh giá không được để trống'
    )
    return isValid ? person : undefined
  }
}

// clear input
const clearInput = () => {
  const loaiNguoiDung = getElements('#nguoiDung').value

  if (loaiNguoiDung === '') {
    getElements('#ma').value = ''
    getElements('#hoTen').value = ''
    getElements('#diaChi').value = ''
    getElements('#email').value = ''
    getElements('#nguoiDung').value = ''
  } else if (loaiNguoiDung === 'hocVien') {
    getElements('#ma').value = ''
    getElements('#hoTen').value = ''
    getElements('#diaChi').value = ''
    getElements('#email').value = ''
    // getElements("#nguoiDung").value = "";
    getElements('#diemToan').value = ''
    getElements('#diemLy').value = ''
    getElements('#diemHoa').value = ''
  } else if (loaiNguoiDung === 'nhanVien') {
    getElements('#ma').value = ''
    getElements('#hoTen').value = ''
    getElements('#diaChi').value = ''
    getElements('#email').value = ''
    // getElements("#nguoiDung").value = "";
    getElements('#soNgayLam').value = ''
    getElements('#luongNgay').value = ''
  } else if (loaiNguoiDung === 'khachHang') {
    getElements('#ma').value = ''
    getElements('#hoTen').value = ''
    getElements('#diaChi').value = ''
    getElements('#email').value = ''
    // getElements("#nguoiDung").value = "";
    getElements('#tenCty').value = ''
    getElements('#hoaDon').value = ''
    getElements('#danhGia').value = ''
  }
  clearDiv()
}

const clearDiv = () => {
  const loaiNguoiDung = getElements('#nguoiDung').value

  getElements('#invalidID').innerHTML = ''
  getElements('#invalidTen').innerHTML = ''
  getElements('#invalidDiaChi').innerHTML = ''
  getElements('#invalidEmail').innerHTML = ''
  if (loaiNguoiDung === 'hocVien') {
    getElements('#invalidDiemToan').innerHTML = ''
    getElements('#invalidDiemLy').innerHTML = ''
    getElements('#invalidDiemHoa').innerHTML = ''
  } else if (loaiNguoiDung === 'nhanVien') {
    getElements('#invalidSoNgayLam').innerHTML = ''
    getElements('#invalidLuongNgay').innerHTML = ''
  } else if (loaiNguoiDung === 'khachHang') {
    getElements('#invalidTenCty').innerHTML = ''
    getElements('#invalidHD').innerHTML = ''
    getElements('#invalidDanhGia').innerHTML = ''
  }
}

// Render table
const renderTable = () => {
  getElements('#tbodyTotal').innerHTML = ''
  const loaiNguoiDung = getElements('#nguoiDung').value
  getElements('#sort').disabled = false

  if (loaiNguoiDung === '') {
    getElements('#alert').style.display = 'block'
    getElements('#sort').disabled = true
    getElements('.table').style.display = 'none'
  } else if (loaiNguoiDung === 'hocVien') {
    const td = `
    <tr class="bg-warning text-white">
      <th>Mã</th>
      <th>Họ tên</th>
      <th>Địa chỉ</th>
      <th>Email</th>
      <th>Loại người dùng</th>
      <th>Điểm toán</th>
      <th>Điểm lý</th>
      <th>Điểm hóa</th>
      <th>Điểm trung bình</th>
      <th></th>
    </tr>
    `

    getElements('#theadTotal').innerHTML = td
    getElements('#tbodyTotal').innerHTML = ''
    renderPerson(listPerson.arrStudents)
    getElements('#alert').style.display = 'none'
    getElements('.table').style.display = 'table'
  } else if (loaiNguoiDung === 'nhanVien') {
    const td = `
    <tr class="bg-warning text-white">
      <th>Mã</th>
      <th>Họ tên</th>
      <th>Địa chỉ</th>
      <th>Email</th>
      <th>Loại người dùng</th>
      <th>Số ngày làm</th>
      <th>Lương ngày</th>
      <th>Tổng lương</th>
      <th></th>
    </tr>
      `
    getElements('#theadTotal').innerHTML = td
    getElements('#tbodyTotal').innerHTML = ''
    renderPerson(listPerson.arrEmployee)
    getElements('#alert').style.display = 'none'
    getElements('.table').style.display = 'table'
  } else if (loaiNguoiDung === 'khachHang') {
    const td = `
    <tr class="bg-warning text-white"> 
      <th>Mã</th>
      <th>Họ tên</th>
      <th>Địa chỉ</th>
      <th>Email</th>
      <th>Loại người dùng</th>
      <th>Tên công ty</th>
      <th>Số hóa đơn</th>
      <th>Đánh giá</th>
      <th></th>
    </tr>
      `

    getElements('#theadTotal').innerHTML = td
    getElements('#tbodyTotal').innerHTML = ''
    renderPerson(listPerson.arrCustomer)
    getElements('#alert').style.display = 'none'
    getElements('.table').style.display = 'table'
  }
}

// Render person
const renderPerson = (arr) => {
  const loaiNguoiDung = getElements('#nguoiDung').value
  let contentHTML = ''
  arr.map((item) => {
    contentHTML += `
        <tr>
          <td>${item.ma}</td>
          <td>${item.hoTen}</td>
          <td>${item.diaChi}</td>
          <td>${item.email}</td>
          <td>${item.mapNguoiDung()}</td>
          ${
            loaiNguoiDung === 'hocVien'
              ? `<td>${item.toan}</td>
                <td>${item.ly}</td>
                <td>${item.hoa}</td>
                <td>${item.tinhDTB()}</td>`
              : loaiNguoiDung === 'nhanVien'
              ? `<td>${item.soNgayLam}</td>
                <td>${item.luongNgay}</td>
                <td>${item.tinhLuong()}</td>`
              : loaiNguoiDung === 'khachHang'
              ? `<td>${item.tenCty}</td>
                <td>${item.hoaDon}</td>
                <td>${item.danhGia}</td>`
              : ''
          }
          <td>
            <button class="btn btn-danger" onclick="deletePerson('${
              item.ma
            }','${item.nguoiDung}')">Xóa</button>
            <button class="btn btn-warning" onclick="editPerson('${item.ma}','${
      item.nguoiDung
    }')">Sửa</button>
          </td>
        </tr>`
  })
  getElements('#tbodyTotal').innerHTML = contentHTML
}

getElements('#btnThem').onclick = () => {
  getElements('#btnCapNhat').style.display = 'none'
  getElements('#btnThemMoi').style.display = 'block'
  getElements('#ma').disabled = false
  getElements('#addPersonLabel').style.display = 'block'
  getElements('#updatePersonLabel').style.display = 'none'
  clearInput()
}

getElements('#btnThemMoi').onclick = () => {
  const loaiNguoiDung = getElements('#nguoiDung').value
  const person = getInfoPerson()

  if (loaiNguoiDung === '') {
    getElements('#btnClose').click()
  }
  if (person) {
    listPerson.arrTotal.push(person)
    if (loaiNguoiDung === 'hocVien') {
      listPerson.addPerson(loaiNguoiDung, person)
      setLocal(listPerson.arrStudents, 'dshv')
      renderPerson(listPerson.arrStudents)
    } else if (loaiNguoiDung === 'nhanVien') {
      listPerson.addPerson(loaiNguoiDung, person)
      setLocal(listPerson.arrEmployee, 'dsnv')
      renderPerson(listPerson.arrEmployee)
    } else if (loaiNguoiDung === 'khachHang') {
      listPerson.addPerson(loaiNguoiDung, person)
      setLocal(listPerson.arrCustomer, 'dskh')
      renderPerson(listPerson.arrCustomer)
    }
    getElements('#btnClose').click()
  }

  renderTable()
}

window.deletePerson = (ma, loaiNguoiDung) => {
  // xóa mảng tổng
  // const index = listPerson.arrTotal.findIndex((x) => x.ma === ma);
  // listPerson.arrTotal.splice(index, 1);

  // xóa mảng riêng
  if (loaiNguoiDung === 'hocVien') {
    listPerson.deletePerson(listPerson.arrStudents, ma)
    setLocal(listPerson.arrStudents, 'dshv')
    // console.log(listPerson.arrStudents)
    renderPerson(listPerson.arrStudents)
  } else if (loaiNguoiDung === 'nhanVien') {
    listPerson.deletePerson(listPerson.arrEmployee, ma)
    setLocal(listPerson.arrEmployee, 'dsnv')
    renderPerson(listPerson.arrEmployee)
  } else if (loaiNguoiDung === 'khachHang') {
    listPerson.deletePerson(listPerson.arrCustomer, ma)
    setLocal(listPerson.arrCustomer, 'dskh')
    renderPerson(listPerson.arrCustomer)
  }

  renderTable()
}

window.editPerson = (ma, loaiNguoiDung) => {
  clearDiv()
  if (loaiNguoiDung === 'hocVien') {
    const index = listPerson.arrStudents.findIndex((x) => x.ma === ma)
    const person = listPerson.arrStudents[index]
    getElements('#ma').value = person.ma
    getElements('#ma').disabled = true
    getElements('#hoTen').value = person.hoTen
    getElements('#diaChi').value = person.diaChi
    getElements('#email').value = person.email
    // getElements('#nguoiDung').value =
    getElements('#diemToan').value = person.toan
    getElements('#diemLy').value = person.ly
    getElements('#diemHoa').value = person.hoa
  } else if (loaiNguoiDung === 'nhanVien') {
    const index = listPerson.arrEmployee.findIndex((x) => x.ma === ma)
    const person = listPerson.arrEmployee[index]
    getElements('#ma').value = person.ma
    getElements('#ma').disabled = true
    getElements('#hoTen').value = person.hoTen
    getElements('#diaChi').value = person.diaChi
    getElements('#email').value = person.email
    // getElements('#nguoiDung').value =
    getElements('#soNgayLam').value = person.soNgayLam
    getElements('#luongNgay').value = person.luongNgay
  } else if (loaiNguoiDung === 'khachHang') {
    const index = listPerson.arrCustomer.findIndex((x) => x.ma === ma)
    const person = listPerson.arrCustomer[index]
    getElements('#ma').value = person.ma
    getElements('#ma').disabled = true
    getElements('#hoTen').value = person.hoTen
    getElements('#diaChi').value = person.diaChi
    getElements('#email').value = person.email
    // getElements('#nguoiDung').value =
    getElements('#tenCty').value = person.tenCty
    getElements('#hoaDon').value = person.hoaDon
    getElements('#danhGia').value = person.danhGia
  }
  $('#exampleModal').modal('show')
  getElements('#btnThemMoi').style.display = 'none'
  getElements('#addPersonLabel').style.display = 'none'
  getElements('#updatePersonLabel').style.display = 'block'
  getElements('#btnCapNhat').style.display = 'block'
}

getElements('#btnCapNhat').onclick = () => {
  const loaiNguoiDung = getElements('#nguoiDung').value
  const person = getInfoPerson(false)
  if (!person) {
    return false
  } else {
    if (loaiNguoiDung === 'hocVien') {
      const index = listPerson.arrStudents.findIndex((x) => x.ma === person.ma)
      listPerson.arrStudents[index] = person
      setLocal(listPerson.arrStudents, 'dshv')
      renderPerson(listPerson.arrStudents)
    } else if (loaiNguoiDung === 'nhanVien') {
      const index = listPerson.arrEmployee.findIndex((x) => x.ma === person.ma)
      listPerson.arrEmployee[index] = person
      setLocal(listPerson.arrEmployee, 'dsnv')
      renderPerson(listPerson.arrEmployee)
    } else if (loaiNguoiDung === 'khachHang') {
      const index = listPerson.arrCustomer.findIndex((x) => x.ma === person.ma)
      listPerson.arrCustomer[index] = person
      setLocal(listPerson.arrCustomer, 'dskh')
      renderPerson(listPerson.arrCustomer)
    }
    getElements('#btnClose').click()
  }
}

const setLocal = (arr, key) => {
  let data = JSON.stringify(arr)
  localStorage.setItem(key, data)
}

const getLocal = () => {
  const data = localStorage.getItem('dshv')
  const data2 = localStorage.getItem('dsnv')
  const data3 = localStorage.getItem('dskh')

  let parseData = JSON.parse(data)
  let parseData2 = JSON.parse(data2)
  let parseData3 = JSON.parse(data3)

  if (data) {
    // lặp dữ liệu trên local
    for (let i = 0; i < parseData.length; i++) {
      let x = parseData[i]
      const y = new Students(
        x.ma,
        x.hoTen,
        x.diaChi,
        x.email,
        x.nguoiDung,
        x.toan,
        x.ly,
        x.hoa
      )
      listPerson.arrStudents.push(y)
      // listPerson.arrTotal.push(y)
    } // end for
  }
  if (data2) {
    for (let i = 0; i < parseData2.length; i++) {
      let x = parseData2[i]
      const c = new Employee(
        x.ma,
        x.hoTen,
        x.diaChi,
        x.email,
        x.nguoiDung,
        x.soNgayLam,
        x.luongNgay
      )
      listPerson.arrEmployee.push(c)
      // listPerson.arrTotal.push(y)
    } // end for
  }
  if (data3) {
    for (let i = 0; i < parseData3.length; i++) {
      let x = parseData3[i]
      const d = new Customer(
        x.ma,
        x.hoTen,
        x.diaChi,
        x.email,
        x.nguoiDung,
        x.tenCty,
        x.hoaDon,
        x.danhGia
      )
      listPerson.arrCustomer.push(d)
      // listPerson.arrTotal.push(y)
    } // end for
  }
}

let sort = () => {
  const sort = getElements('#sort').value
  const loaiNguoiDung = getElements('#nguoiDung').value

  if (loaiNguoiDung === '') {
    return false
  } else if (loaiNguoiDung === 'hocVien') {
    if (sort === 'default') {
      renderPerson([...listPerson.arrStudents])
    } else if (sort === 'tang') {
      let sort = [...listPerson.arrStudents].sort((a, b) => {
        return a.hoTen.localeCompare(b.hoTen)
      })
      renderPerson(sort)
    } else if (sort === 'giam') {
      let sort = [...listPerson.arrStudents].sort((a, b) => {
        return b.hoTen.localeCompare(a.hoTen)
      })
      renderPerson(sort)
    }
  } else if (loaiNguoiDung === 'nhanVien') {
    if (sort === 'default') {
      renderPerson([...listPerson.arrEmployee])
    } else if (sort === 'tang') {
      let sort = [...listPerson.arrEmployee].sort((a, b) => {
        return a.hoTen.localeCompare(b.hoTen)
      })
      renderPerson(sort)
    } else if (sort === 'giam') {
      let sort = [...listPerson.arrEmployee].sort((a, b) => {
        return b.hoTen.localeCompare(a.hoTen)
      })
      renderPerson(sort)
    }
  } else if (loaiNguoiDung === 'khachHang') {
    if (sort === 'default') {
      renderPerson([...listPerson.arrCustomer])
    } else if (sort === 'tang') {
      let sort = [...listPerson.arrCustomer].sort((a, b) => {
        return a.hoTen.localeCompare(b.hoTen)
      })
      renderPerson(sort)
    } else if (sort === 'giam') {
      let sort = [...listPerson.arrCustomer].sort((a, b) => {
        return b.hoTen.localeCompare(a.hoTen)
      })
      renderPerson(sort)
    }
  }
}

// chọn loại người dùng và render table
getElements('#nguoiDung').onchange = renderTable

getElements('#sort').onchange = sort

getLocal()
