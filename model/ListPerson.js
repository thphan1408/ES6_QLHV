import { Students } from '../model/Student.js'
import { Employee } from '../model/Employee.js'
import { Customer } from '../model/Customer.js'
import { Person } from '../model/Person.js'
const getElements = (selector) => document.querySelector(selector)

// Quản Lý Employee, Student, Customer
class ListPerson {
  constructor() {
    this.arrStudents = []
    this.arrEmployee = []
    this.arrCustomer = []
    this.arrTotal = []
  }

  // add person
  addPerson(nguoiDung, person) {
    if (nguoiDung === 'hocVien') {
      this.arrStudents.push(person)
    } else if (nguoiDung === 'nhanVien') {
      this.arrEmployee.push(person)
    } else if (nguoiDung === 'khachHang') {
      this.arrCustomer.push(person)
    }
  }

  // Xử lý tìm người dùng
  findPerson(arr, ma) {
    return arr.findIndex((item) => item.ma === ma)
  }

  // Xử lý xoá người dùng theo mảng
  deletePerson(arr, ma) {
    const index = this.findPerson(arr, ma)
    arr.splice(index, 1)
  }
}

export default ListPerson

