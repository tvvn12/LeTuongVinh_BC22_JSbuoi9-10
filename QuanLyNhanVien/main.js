var danhsachnhanvien = new DanhSachNhanVien();
var validation = new Validation();
function getEle(id) {
  return document.getElementById(id);
}
getLocalStorage();
// TaoBang(danhsachnhanvien.arr);
// console.log(danhsachnhanvien.arr);

function LayThongTinNhanVien() {
  var taiKhoan = getEle("tknv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var matKhau = getEle("password").value;
  var ngayLam = getEle("datepicker").value;
  var luongCB = getEle("luongCB").value;
  var chucVu = getEle("chucvu").value;
  var gioLam = getEle("gioLam").value;
  var isValid = true;
  isValid &=
    validation.KiemTraRong(taiKhoan, "tbTKNV", "(*)Không được bỏ trống") &&
    validation.KiemTraDoDaiKyTu(
      taiKhoan,
      "tbTKNV",
      "(*) Tài khoản tối đa 4 - 6 ký số",
      4,
      6
    );
  isValid &=
    validation.KiemTraRong(tenNV, "tbTen", "(*)Không được bỏ trống") &&
    validation.KiemTraChuoiKyTu(tenNV, "tbTen", "(*) Sai định dạng");
  isValid &=
    validation.KiemTraRong(email, "tbEmail", "(*)Không được bỏ trống") &&
    validation.KiemTraEmail(
      email,
      "tbEmail",
      "(*)Email phải đúng định dạng vd: ten@gmail.com"
    );
  isValid &=
    validation.KiemTraRong(matKhau, "tbMatKhau", "(*)Không được bỏ trống") &&
    validation.KiemTraMatKhau(
      matKhau,
      "tbMatKhau",
      "(*) chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt"
    ) &&
    validation.KiemTraDoDaiKyTu(
      matKhau,
      "tbMatKhau",
      "(*) mật Khẩu từ 6-10 ký tự",
      6,
      10
    );
  isValid &=
    validation.KiemTraRong(ngayLam, "tbNgay", "(*)Không được bỏ trống") &&
    validation.KiemTraDinhDangNgay(
      ngayLam,
      "tbNgay",
      "(*)ngày sai vd:mm/dd/yyyy"
    );
  isValid &=
    validation.KiemTraRong(luongCB, "tbLuongCB", "(*)Không được bỏ trống") &&
    validation.KiemTraLuongVaNgayLam(
      luongCB,
      "tbLuongCB",
      "(*)Lương cơ bản 1 000 000 - 20 000 000",
      1000000,
      20000000
    );
  isValid &= validation.KiemTraRongSelectBox(
    "tbChucVu",
    "(*)Không được bỏ trống"
  );
  isValid &=
    validation.KiemTraRong(gioLam, "tbGiolam", "(*)Không được bỏ trống") &&
    validation.KiemTraLuongVaNgayLam(
      gioLam,
      "tbGiolam",
      "(*) Số giờ làm trong tháng 80 - 200 giờ",
      80,
      200
    );
  if (!isValid) return null;
  var nhanvien = new NhanVien(
    taiKhoan,
    tenNV,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );
  nhanvien.tinhLuong();
  nhanvien.xepLoai();
  return nhanvien;
}
getEle("btnThemNV").addEventListener("click", function () {
  var nhanVien = LayThongTinNhanVien();
  if (nhanVien) {
    danhsachnhanvien.ThemNhanVien(nhanVien);
    TaoBang(danhsachnhanvien.arr);
    setLocalStorage();
  }
  // console.log(danhsachnhanvien.arr);
});
function TaoBang(nhanVienArr) {
  var content = "";
  for (var i = 0; i < nhanVienArr.length; i++) {
    var arrNhanVien = nhanVienArr[i];
    content += `
        <tr>
        <td>${arrNhanVien.taiKhoan} </td>
        <td>${arrNhanVien.hoVaTen} </td>
        <td>${arrNhanVien.email} </td>
        <td>${arrNhanVien.ngayLam} </td>
        <td>${arrNhanVien.chucVu} </td>
        <td>${arrNhanVien.tongLuong}</td>
        <td> ${arrNhanVien.xepLoaiNhanVien}</td>
        <td>
            <button class="btn btn-danger" onclick="xoa(${arrNhanVien.taiKhoan})" type="button">Xóa</button>
            <button class="btn btn-info" onclick="sua(${arrNhanVien.taiKhoan})" type="button"  data-toggle="modal"
            data-target="#myModal" >Sửa</button>
        </td>
        </tr>
        `;
  }
  getEle("tableDanhSach").innerHTML = content;
}
function sua(idNhanVien){
    getEle("btnThemNV").style.display="none";
    var SuaThongTinNhanVien = danhsachnhanvien._suaNhanVien(idNhanVien);
    if(SuaThongTinNhanVien){
    taiKhoan = getEle("tknv").value = SuaThongTinNhanVien.taiKhoan;
    tenNV = getEle("name").value = SuaThongTinNhanVien.hoVaTen;
    email = getEle("email").value = SuaThongTinNhanVien.email;
    matKhau = getEle("password").value = SuaThongTinNhanVien.matKhau;
    ngayLam = getEle("datepicker").value = SuaThongTinNhanVien.ngayLam;
    luongCB = getEle("luongCB").value = SuaThongTinNhanVien.luongCoBan;
    chucVu = getEle("chucvu").value = SuaThongTinNhanVien.chucVu;
    gioLam = getEle("gioLam").value = SuaThongTinNhanVien.gioLam;
    }
    
}
getEle("btnCapNhat").addEventListener("click", function(){
   var latLaiDuLieuMoiTaiTheInputDeCapNhat = LayThongTinNhanVien();
   danhsachnhanvien.capNhatNhanVien(latLaiDuLieuMoiTaiTheInputDeCapNhat);
   TaoBang(danhsachnhanvien.arr);
   setLocalStorage();
})
function xoa(id){
  danhsachnhanvien._xoaNhanVien(id);
  TaoBang(danhsachnhanvien.arr);
  setLocalStorage();
}
function setLocalStorage() {
  var dataString = JSON.stringify(danhsachnhanvien.arr);
  localStorage.setItem("DanhSachNhanVien", dataString);
}
function getLocalStorage() {
  var data = localStorage.getItem("DanhSachNhanVien");
  if (data) {
    var dataJSon = JSON.parse(data);
    danhsachnhanvien.arr = dataJSon;
    TaoBang(danhsachnhanvien.arr);
  }
}

getEle("searchName").addEventListener("keyup", function(){
 var tuNhapVaoTheInput = getEle("searchName").value;
 var TimKiemThongTinNhanVien = danhsachnhanvien.searchNhanVien(tuNhapVaoTheInput);
 TaoBang(TimKiemThongTinNhanVien);
})
