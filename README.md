# code_man_non
Luyen Giai Thuat Toan

Bài số 1
Alice và Bob mỗi người đã tạo ra một vấn đề cho Glams. Một người đã đánh giá hai cái thử thách này, chấm điểm theo thang điểm từ 1 đến 100 cho ba mục: vấn đề rõ ràng, độc đáo và khó khăn.

* Đánh giá cho thử thách của Alice gồm các phần tử sau: a = (a[0], a[1], a[2]) và đánh giá cho thử  thách của Bob gồm các phần tử sau: b = (b[0], b[1], b [2]).

* Nhiệm vụ là tìm điểm so sánh của họ bằng cách so sánh a[0] với b[0], a[1] với b[1] và a[2] với b[2].

 Nếu a[i] > b[i] thì Alice được thưởng 1 điểm.
 Nếu a[i] < b[i] thì Bob được thưởng 1 điểm.
 Nếu a[i] = b[i] thì không ai nhận được điểm.
 Điểm so sánh là tổng số điểm mà một người đạt được.
 Cho a và b, xác định điểm so sánh tương ứng của họ.

* Ví dụ

 a = [1, 2, 3]
 b = [3, 2, 1]

Đối với các phần tử *0*, Bob được thưởng một điểm vì a[0] .
Đối với các phần tử bằng nhau a[1] và b[1], không kiếm được điểm nào.
Cuối cùng, đối với phần tử 2, a[2] > b[2] nên Alice nhận được một điểm.
Mảng trả về là [1, 1] với điểm đầu tiên của Alice và điểm thứ hai của Bob.

* Tiến trình thực hiện

Tạo một hàm có tên là compareTriplets để thực hiện.

so sánh các phần tử có các vị trí tương ứng với nhau:
 Là số nguyên: a[0 1 2]: Xếp hạng thử thách của Alice
 Là số nguyên: b[0 1 2]: Xếp hạng thử thách của Bob

* Trả về (kết quả)

 Kết quả là 1 mảng gồm 2 phần tử là số nguyên: Điểm của Alice là ở vị trí đầu tiên và điểm của Bob là ở vị trí thứ hai.

* Định dạng đầu vào

Dòng đầu tiên chứa 3 số nguyên cách nhau bằng dấu cách a[0], a[1] và a[2], các giá trị tương ứng với các phần tử của a.
Dòng thứ hai chứa 3 số nguyên cách nhau bằng dấu cách b[0], b[1] và b[2], các giá trị tương ứng với các phần tử của b.

* Điều kiện

 1 ≤ a[i] ≤ 100
 1 ≤ b[i] ≤ 100

* Mẫu đầu ra 0
 5 6 7
 3 6 10

* Mẫu đầu ra 0
 1 1

* Mẫu đầu ra 1
 17 28 30
 99 16 8

* Mẫu đầu ra 1
 2 1

bai so 2

Cho một mảng gồm các phần tử là số nguyên, tính tỷ lệ các phần tử trong mảng đó có số là số dương, số số là âm hoặc là bằng 0. Kết quả là một số thập phân và có 6 chữ số sau dấu thập phân.
* Lưu ý: Các kết quả nên có 6 chữ số nằm sau dấu thập phân, ví dụ: 0.123456.

 Ví dụ: Mảng = [1, 1, 0, -1, -1]

Mảng trên gồm có 5 phần tử, hai phần tử là số dương, hai phần tử là số âm và một phần tử bằng 0. Tỉ lệ của mảng được tính như sau: hai số dương là ⅖ = 0.400000, hai số âm là ⅖ = 0.400000 và bằng 0 là ⅕ = 0.200000. Kết quả cụ thể như sau:

 0.400000
 0.400000
 0.200000

* Tiến trình thực hiện:
Tạo một hàm có tên là plusMinusZero.
Hàm plusMinusZero có các tham số là một mảng gồm các sô nguyên.

* Kết quả:
Kết quả là các dòng riêng biệt, là một số thập phân và có 6 chữ số sau dấu thập phân, được sắp xếp như sau:
 Dòng đầu tiên là tỉ lệ các số dương.
 Dòng thứ hai là tỉ lệ các số âm.
 Dòng thử ba là tỉ lệ các số bằng 0

* Định dạng đầu vào:
Là các số nguyên, và cách nhau bằng dấu cách.

* Điều kiện: 0 < n ≤ 100 -100 ≤ arr[i] ≤ 100

* Định dạng đầu ra:
Kết quả gồm là ba dòng, mỗi dòng là số thập phân và có 6 chữ sau dấu thập phân:
 -Dòng đầu tiên là kết quả tỷ lệ của các số dương
 -Dòng thứ hai là kết quả tỷ lệ của các số âm
 -Dòng thứ ba là kết quả tỷ lệ của các số bằng 0

* Ví dụ mẫu: 6 -4 3 -9 0 4 1

* Kết quả của ví dụ mẫu: 0.500000 0.333333 0.166667
