function kiemTra() {
  var hoTen = document.frYKien.hoTen.value;
  var tuoi = document.frYKien.tuoi.value;
  var gioiTinh = document.frYKien.gioiTinh.value;
  var diaChi = document.frYKien.diaChi.value;
  var tinh = document.frYKien.tinh.value;
  var checkbox = document.frYKien.soThich;
  var st = document.getElementById("st");
  var noiDung = document.frYKien.noiDung.value;
  var soThich = "";
  if (hoTen == "") {
    alert("Nhập họ tên");
    document.frYKien.hoTen.focus();
    return false;
  } else if (hoTen.length < 8) {
    alert("Họ tên ít nhất 8 ký tự");
    document.frYKien.hoTen.focus();
    return false;
  }
  if (tuoi == "") {
    alert("Nhập tuổi");
    document.frYKien.tuoi.focus();
    return false;
  } else if (tuoi < 15) {
    alert("Tuổi phải từ 15 trở lên");
    document.frYKien.tuoi.focus();
    return false;
  }
  if (gioiTinh == "chon") {
    alert("Chọn giới tính");
    return false;
  }
  if (diaChi == "") {
    alert("Nhập dịa chỉ");
    document.frYKien.diaChi.focus();
    return false;
  }
  if (tinh == "chon") {
    alert("Chọn tỉnh");
    return false;
  }
  if (st.checked == false) {
    alert("Chọn ít nhất 1 sở thích");
    return false;
  }
  if (noiDung == "") {
    alert("Nhập nội dung bạn muốn góp ý");
    document.frYKien.noiDung.focus();
    return false;
  }
  alert("Gửi thành công! Xin cám ơn");
  for (var i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      soThich += checkbox[i].value + ",";
    }
  }
  var inForMaTion =
    "?hoTen=" +
    encodeURIComponent(hoTen) +
    "&tuoi=" +
    encodeURIComponent(tuoi) +
    "&gioiTinh=" +
    encodeURIComponent(gioiTinh) +
    "&diaChi=" +
    encodeURIComponent(diaChi) +
    "&tinh=" +
    encodeURIComponent(tinh) +
    "&soThich=" +
    encodeURIComponent(soThich) +
    "&noiDung=" +
    encodeURIComponent(noiDung);
  window.location.href = "information.html" + inForMaTion;
}
