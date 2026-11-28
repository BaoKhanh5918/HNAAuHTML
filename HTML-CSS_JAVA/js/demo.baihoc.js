"use strict";
const STORAGE_KEY = "EMPLOYEES DATA";
function validateEmployeeInput(maNV, soDienThoai){
    let isValid = true;
    if (soDienThoai.length<10){
        const message = "Số điện thoại không hợp lệ! Vui lòng thử lại";
        console.log(message);
        isValid = false;
    }
    console.log(`[${STORAGE_KEY}] Kiểm tra mã ${maNV} : ${isValid}`);
    return isValid;
}
// validateEmployeeInput("002", "0090909");

const btnSearch = document.getElementById("btnSearch");
console.log(btnSearch);