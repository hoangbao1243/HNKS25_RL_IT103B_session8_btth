const hangDoi = ['30A-111', '29B-222', '51C-333'];
console.log('Hàng đợi ban đầu:', hangDoi);

hangDoi.push('43D-444');
console.log('Sau khi thêm xe mới:', hangDoi);

hangDoi.splice(1, 0, '14A-999');
console.log('Sau khi chèn xe ưu tiên:', hangDoi);

const xeVaoSac = hangDoi.shift();
console.log('Xe vào sạc:', xeVaoSac);
console.log('Hàng đợi còn lại:', hangDoi);

const kwhList = [30, 45, 25];
const donGia = 4500;
let tongDoanhThu = 0;

for (let i = 0; i < kwhList.length; i++) {
  tongDoanhThu += kwhList[i] * donGia;
}

console.log('Tổng doanh thu ca trực:', tongDoanhThu, 'VNĐ');