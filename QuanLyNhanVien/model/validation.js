function Validation(){
    this.KiemTraRong =function(value,id,mess){
        if(value==""){

            getEle(id).innerHTML = mess;
            getEle(id).style.display = "block";
            return false;
        }
            getEle(id).innerHTML ="";
            getEle(id).style.display = "none";
            return true;


    };
    this.KiemTraRongSelectBox =function(id,mess){
        if(document.getElementById("chucvu").selectedIndex ==0){
            getEle(id).innerHTML = mess;
            getEle(id).style.display = "block";
            return false;
        }else if(document.getElementById("chucvu").selectedIndex !==0){
            getEle(id).innerHTML ="";
            getEle(id).style.display = "none";
            return true;
        }
    }
    this.KiemTraDoDaiKyTu = function(value,id,mess,min,max){
        if(value.length>=min && value.length<=max){
            getEle(id).innerHTML ="";
            getEle(id).style.display = "none";
            return true;
        }
            getEle(id).innerHTML = mess;
            getEle(id).style.display = "block";
            return false;
    };
    this.KiemTraChuoiKyTu = function(value,id,mess){
        var letter ="^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(value.match(letter)){
            getEle(id).innerHTML ="";
            getEle(id).style.display = "none";
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = "block";
        return false;

    };
   
    this.KiemTraEmail= function(value,id,mess){
        var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(letter))
        {
            getEle(id).innerHTML="";
            getEle(id).style.display = "none";
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = "block";
        return false;
    }
    this.KiemTraMatKhau = function(value,id,mess){
        var letter =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if(value.match(letter))
        {
            getEle(id).innerHTML="";
            getEle(id).style.display = "none";
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = "block";
        return false;
    }
    this.KiemTraDinhDangNgay=function(value,id,mess){
        var letter =/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;
        if(value.match(letter))
        {
            getEle(id).innerHTML="";
            getEle(id).style.display = "none";
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = "block";
        return false;
    }
    this.KiemTraLuongVaNgayLam = function(value,id,mess,min,max){
        if(parseInt(value)>= parseInt(min)  && parseInt(value)<=parseInt(max) ) {
            getEle(id).innerHTML="";
            getEle(id).style.display = "none";
            return true;
        }
        getEle(id).innerHTML = mess;
        getEle(id).style.display = "block";
        return false;

    }
}
first() {
    log();
    second() {
     log();
     third() {
     }
    }
   }