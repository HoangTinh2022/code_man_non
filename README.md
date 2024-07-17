# code_man_non
Luyen Giai Thuat Toan

Bài số 1
Alice và Bob mỗi người đã tạo ra một vấn đề cho Glams. Một người đã đánh giá hai cái thử thách này, chấm điểm theo thang điểm từ 1 đến 100 cho ba mục: vấn đề rõ ràng, độc đáo và khó khăn.

* Đánh giá cho thử thách của Alice là bộ ba a = (a[0], a[1], a[2]) và đánh giá cho thử  thách của Bob là bộ ba b = (b[0], b[1], b [2]).

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

* Mô tả chức năng

Hoàn thành hàm so sánh bộ ba trong trình chỉnh sửa bên dưới.

so sánh bộ ba có tham số (s) sau:
 int a[3]: Xếp hạng thử thách của Alice
 int b[3]: Xếp hạng thử thách của Bob

* Trả về

 int[2]: Điểm của Alice ở vị trí đầu tiên và điểm của Bob ở vị trí thứ hai.

* Định dạng đầu vào

Dòng đầu tiên chứa 3 số nguyên cách nhau bằng dấu cách a[0], a[1] và a[2], các giá trị tương ứng trong bộ ba a.
Dòng thứ hai chứa 3 số nguyên cách nhau bằng dấu cách b[0], b[1] và b[2], các giá trị tương ứng trong bộ ba b.

* Hạn chế

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