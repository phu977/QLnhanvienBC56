// tao model 
function NhanVien () {
    this.maNhanVien = '';
    this.tenNhanVien = '';
    this.chucVu = '';
    this.luongCoBan = 0;
    this.soGioLam = 0;
    this.heSoChucVu = 1;
    this.tongLuong = function() {
      var sum = this.luongCoBan*this.soGioLam*this.heSoChucVu;
      return sum;
    }
}