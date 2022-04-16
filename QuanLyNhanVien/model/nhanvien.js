function NhanVien(
  _taiKhoan,
  _hoVaTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLam
) {
  this.taiKhoan = _taiKhoan;
  this.hoVaTen = _hoVaTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = 0;
  this.xepLoaiNhanVien ="";
  this.tinhLuong = function () {
    if (this.chucVu === "Sếp") {
      this.tongLuong = parseInt(this.luongCoBan) * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = parseInt(this.luongCoBan) * 2;
    } else if (this.chucVu === "Nhân viên") {
      this.tongLuong = parseInt(this.luongCoBan) * 1;
    }
  };
  this.xepLoai =function(){
      if(this.gioLam >=192){
        this.xepLoaiNhanVien= "Nhân viên xuất sắc";
      }else if(this.gioLam >=176){
        this.xepLoaiNhanVien= "Nhân viên giỏi";
      }else if(this.gioLam >=160){
        this.xepLoaiNhanVien= "Nhân viên khá";
      }
      else if(this.gioLam <160){
        this.xepLoaiNhanVien= "Nhân viên trung bình";
      }
  }
  
}
