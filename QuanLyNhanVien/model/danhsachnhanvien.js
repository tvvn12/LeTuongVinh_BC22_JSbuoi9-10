function DanhSachNhanVien(){
    this.arr= [];
    this.ThemNhanVien = function(nhanVien){
        this.arr.push(nhanVien);
    }

    this.timViTriSinhVien =function(TaiKhoanNhanVien){
        var index =-1;
    
        for(var i=0; i<this.arr.length; i++){
            var ViTriNhanVien = this.arr[i];    
            if(ViTriNhanVien.taiKhoan==TaiKhoanNhanVien){
                index = i;
                break;
            }
        }
         return index;
      }

      this._xoaNhanVien = function(TaiKhoanCuaNhanVien){
          var index = this.timViTriSinhVien(TaiKhoanCuaNhanVien);

        if(index !== -1){
            this.arr.splice(index, 1);
        }
      }
      this._suaNhanVien =function(idNhanVien){
          var index = this.timViTriSinhVien(idNhanVien);
          if(index !== -1){
              var TatCaThongTinCuaNhanVien = this.arr[index];
              return TatCaThongTinCuaNhanVien;
          }
          return null;

      }
      this.capNhatNhanVien = function(idNhanVienCapNhat){
          var index = this.timViTriSinhVien(idNhanVienCapNhat.taiKhoan);
          if(index !== -1){
              this.arr[index] = idNhanVienCapNhat;
          }
      }
      this.searchNhanVien =function(key){

        var mangTimKiem =[];
        for(var i=0;i<this.arr.length;i++){
            var indexCuaNhanVien = this.arr[i];
            if(indexCuaNhanVien.xepLoaiNhanVien.toLowerCase().indexOf(key.toLowerCase()) !==-1){
                mangTimKiem.push(indexCuaNhanVien);
            }
        }
        return mangTimKiem;

      }
}