window.onload = function () {
  var params = new URLSearchParams(window.location.search);
  var hoTen = params.get("hoTen");
  var tuoi = params.get("tuoi");
  var gioiTinh = params.get("gioiTinh");
  var diaChi = params.get("diaChi");
  var tinh = params.get("tinh");
  var soThich = params.get("soThich");
  var noiDung = params.get("noiDung");
  document.getElementById("hoTen").innerHTML =
    "<p><b>Họ tên: </b>" + hoTen + "</p>";
  document.getElementById("tuoi").innerHTML =
    "<p><b>Tuổi: </b>" + tuoi + "</p>";
  document.getElementById("gioiTinh").innerHTML =
    "<p><b>Giới tính: </b>" + gioiTinh + "</p>";
  document.getElementById("diaChi").innerHTML =
    "<p><b>Địa chỉ: </b>" + diaChi + "</p>";
  document.getElementById("tinh").innerHTML =
    "<p><b>Tỉnh: </b>" + tinh + "</p>";
  document.getElementById("soThich").innerHTML =
    "<p><b>Sở thích: </b>" + soThich + "</p>";
  document.getElementById("noiDung").innerHTML =
    "<p><b>Nội dung: </b>" + noiDung + "</p>";
};
