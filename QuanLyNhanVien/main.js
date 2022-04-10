var danhsachnhanvien = new DanhSachNhanVien();
function getEle(id){
   return document.getElementById(id);
};
getLocalStorage();
// TaoBang(danhsachnhanvien.arr);
console.log(danhsachnhanvien.arr);

function LayThongTinNhanVien(){
    var taiKhoan= getEle("tknv").value;
    var tenNV= getEle("name").value;
    var email =getEle("email").value;
    var matKhau= getEle("password").value;
    var ngayLam= getEle("datepicker").value;
    var luongCB= getEle("luongCB").value;
    var chucVu= getEle("chucvu").value;
    var gioLam= getEle("gioLam").value;
   
    var nhanvien = new NhanVien(taiKhoan,
        tenNV,
        email,
        matKhau,
        ngayLam,
        luongCB,
        chucVu,
        gioLam);
        nhanvien.tinhLuong();
        nhanvien.xepLoai();
        return nhanvien;

        
        
};
getEle("btnThemNV").addEventListener("click",function(){
    var nhanVien = LayThongTinNhanVien();
    danhsachnhanvien.ThemNhanVien(nhanVien);
    // TaoBang(danhsachnhanvien.arr);
    setLocalStorage();
    // console.log(danhsachnhanvien.arr);
});
function TaoBang(nhanVienArr){
    var content ="";
    for(var i=0;i<nhanVienArr.length;i++){
        var arrNhanVien = nhanVienArr[i];
        content +=`
        <tr>
        <td>${arrNhanVien.taiKhoan} </td>
        <td>${arrNhanVien.hoVaTen} </td>
        <td>${arrNhanVien.email} </td>
        <td>${arrNhanVien.ngayLam} </td>
        <td>${arrNhanVien.chucVu} </td>
        <td>${arrNhanVien.tongLuong}</td>
        <td> ${arrNhanVien.xepLoaiNhanVien}</td>
        <td> chưa làm</td>
        </tr>
        `;
    }
    getEle("tableDanhSach").innerHTML = content;

 }

function setLocalStorage(){
    var dataString = JSON.stringify(danhsachnhanvien.arr);
    localStorage.setItem("DanhSachNhanVien", dataString);

}
function getLocalStorage(){
    var data= localStorage.getItem("DanhSachNhanVien");
    if(data){
        var dataJSon =JSON.parse(data);
        danhsachnhanvien.arr = dataJSon;
        TaoBang(danhsachnhanvien.arr);
    }
}

