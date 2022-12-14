// Bài 1: TÍnh tiền lương nhân viên


var date = document.getElementById('input-date');// so ngay

const price = 100000;// tien luong 1 ngay


var luong = document.getElementById('price');
date.addEventListener('keyup', function () {
    luong.innerHTML = date.value * price;
})





// Bài 2: Tính giá trị trung bình
var inputFloat1 = document.getElementById('input-float1');
var inputFloat2 = document.getElementById('input-float2');
var inputFloat3 = document.getElementById('input-float3');
var inputFloat4 = document.getElementById('input-float4');
var inputFloat5 = document.getElementById('input-float5');
var trungbinh = document.getElementById('trungbinh');

inputFloat1.onkeyup = function () {
    trungbinh.innerHTML = parseFloat((inputFloat1.value + inputFloat2.value + inputFloat3.value + inputFloat4.value + inputFloat5.value) / 5);
}
inputFloat2.onkeyup = function () {
    trungbinh.innerHTML = parseFloat((inputFloat1.value + inputFloat2.value + inputFloat3.value + inputFloat4.value + inputFloat5.value) / 5);
}
inputFloat3.onkeyup = function () {
    trungbinh.innerHTML = parseFloat((inputFloat1.value + inputFloat2.value + inputFloat3.value + inputFloat4.value + inputFloat5.value) / 5);
}
inputFloat4.onkeyup = function () {
    trungbinh.innerHTML = parseFloat((inputFloat1.value + inputFloat2.value + inputFloat3.value + inputFloat4.value + inputFloat5.value) / 5);
}
inputFloat5.onkeyup = function () {
    trungbinh.innerHTML = parseFloat((inputFloat1.value + inputFloat2.value + inputFloat3.value + inputFloat4.value + inputFloat5.value) / 5);
}


// Bài 3: Quy đổi tiền

var inputusd = document.getElementById('input-usd');// nhap usd

const vnd = 23500;// tien doi usd


var outputvnd = document.getElementById('output-vnd');
inputusd.addEventListener('keyup', function () {
    outputvnd.innerHTML = inputusd.value * vnd;
})


// Bài 4: Tính diện tích, chu vi hình chữ nhật
var inputdai = document.getElementById('input-dai');// nhap dai
var inputrong = document.getElementById('input-rong');// nhap rong



var outputdientich = document.getElementById('output-dientich');
var outputchuvi = document.getElementById('output-chuvi');
inputdai.addEventListener('keyup', function () {
    outputdientich.innerHTML = inputdai.value * inputrong.value;
    outputchuvi.innerHTML = (inputdai.value + inputrong.value) * 2;
})
inputrong.addEventListener('keyup', function () {
    outputdientich.innerHTML = inputdai.value * inputrong.value;
    outputchuvi.innerHTML = (inputdai.value + inputrong.value) * 2;
})
// Bài 5: Tính tổng 2 ký số
var number = document.getElementById('input-number');
var sumer=document.getElementById('output-sum');

number.addEventListener('keyup', function () {
    sumer.innerHTML=Math.floor(number.value/10)+(number.value%10);
})