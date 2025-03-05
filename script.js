document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn gửi form mặc định

    try {
      validateForm(); // Gọi hàm kiểm tra dữ liệu nhập
      window.location.href = "404.html"; // Chuyển hướng khi hợp lệ
    } catch (error) {
      alert(error.message); // Hiển thị thông báo lỗi
    }
  });
});

// Hàm kiểm tra form đăng ký
function validateForm() {
  let firstName = document.getElementById("inputname1").value.trim();
  let lastName = document.getElementById("inputname2").value.trim();
  let email = document.getElementById("inputEmail4").value.trim();
  let birthDate = document.getElementById("inputdate").value;
  let studentID = document.getElementById("inputid").value.trim();
  let studentClass = document.getElementById("inputclass").value.trim();
  let agreeCheck = document.getElementById("gridCheck").checked;

  // Kiểm tra các trường có bị trống không
  if (!firstName || !lastName || !email || !birthDate || !studentID || !studentClass) {
    throw new Error("Vui lòng điền đầy đủ thông tin!");
  }

  // Kiểm tra định dạng email
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    throw new Error("Email không hợp lệ!");
  }

  // Kiểm tra năm sinh (phải lớn hơn 1900 và nhỏ hơn năm hiện tại)
  let birthYear = new Date(birthDate).getFullYear();
  let currentYear = new Date().getFullYear();
  if (birthYear < 1900 || birthYear > currentYear) {
    throw new Error("Năm sinh không hợp lệ!");
  }

  // Kiểm tra checkbox đồng ý điều khoản
  if (!agreeCheck) {
    throw new Error("Bạn cần đồng ý với điều khoản!");
  }
}

// Hàm kiểm tra bài làm trước khi nộp
function checkAnswers() {
  try {
    let answerText = document.getElementById("exampleFormControlTextarea10").value.trim();

    if (!answerText) {
      throw new Error("Bạn chưa nhập câu trả lời!");
    }

    alert("Nộp bài thành công!");
  } catch (error) {
    alert(error.message); // Hiển thị lỗi nếu có
  }
}
