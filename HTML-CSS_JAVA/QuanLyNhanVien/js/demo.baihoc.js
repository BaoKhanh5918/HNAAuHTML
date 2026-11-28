// const rawPhone = "    0909090909          ";
// const clearPhone = rawPhone.trim();
// if(clearPhone.length = 10)
//     console.log(`Số điện thoại hợp lệ với ${clearPhone.length} ký tự: ${clearPhone}`);
// else
//     console,log("Số điện thoại không hợp lệ.");


// const seartInputRaw ="   nv123 ";
// const normalizedCode = seartInputRaw.trim().toUpperCase();
// console.log("Mã tiêu chuẩn của nhân viên là:" ,normalizedCode);

const strEmail ="baokhanh@gmail.com";
const hasAtSign = strEmail.includes("@");
const hasDot = strEmail.indexOf(".", strEmail.indexOf("@")) !== -1;
console.log("Email có '@' và dấu '.' sau @", hasAtSign && hasDot)