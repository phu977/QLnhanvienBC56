



document.querySelector('#btnHienThi').onclick = function(){
    var nhanvien = new NhanVien();
    nhanvien.maNhanVien = document.querySelector('#maNhanVien').value;
    nhanvien.tenNhanVien = document.querySelector('#tenNhanVien').value;
    nhanvien.heSoChucVu = document.querySelector('#chucVu').value;
    nhanvien.luongCoBan = document.querySelector('#luongCoBan').value;
    nhanvien.soGioLam = document.querySelector('#soGioLam').value;
    // truy xuất thẻ option bên trong querySelector
    var slChucVu = document.querySelector('#chucVu');
    //.options: Lấy ra mảng thẻ option bên trong select đó
    //.selectedIndex: lấy ra vị trí thẻ option được chọn
    nhanvien.chucVu = slChucVu[slChucVu.selectedIndex].innerHTML;
    console.log(nhanvien);
    document.querySelector('#output-maNhanVien').innerHTML = nhanvien.maNhanVien;
    document.querySelector('#output-tenNhanVien').innerHTML = nhanvien.tenNhanVien;
    document.querySelector('#output-chucVu').innerHTML = nhanvien.chucVu;
    document.querySelector('#output-tongLuong').innerHTML = nhanvien.tongLuong().toLocaleString();
}