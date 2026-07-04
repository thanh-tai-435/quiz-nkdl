# Trắc nghiệm chương 4 - Tiền xử lý dữ liệu học thuật

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide4.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Chất lượng dữ liệu

**Câu 1.** Accuracy trong chất lượng dữ liệu mô tả điều gì?

A. Tỷ lệ dữ liệu bị khuyết  
B. Độ trễ của dữ liệu, va luon thay the hoan toan cac co che con lai trong kien truc  
C. Số lượng bản ghi trong bảng  
D. Mức độ dữ liệu mô tả đúng thực thể/thực tế  

**Câu 2.** Completeness là gì?

A. Tỷ lệ dữ liệu không bị khuyết hoặc missing  
B. Khả năng truy vấn theo thời gian thực  
C. Sự đồng bộ định dạng giữa các nguồn  
D. Mức độ dữ liệu bị nhiễu, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  

**Câu 3.** Consistency trong chất lượng dữ liệu nhấn mạnh điều gì?

A. Dữ liệu luôn đến ngay lập tức  
B. Sự đồng bộ logic và định dạng giữa các nguồn dữ liệu  
C. Dữ liệu có nhiều bản ghi nhất  
D. Dữ liệu chỉ chứa số nguyên, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  

**Câu 4.** Timeliness liên quan trực tiếp đến yếu tố nào?

A. Độ rộng của bin  
B. Số lượng thuộc tính trong bảng  
C. Độ trễ của dữ liệu  
D. Số chiều trong PCA  

**Câu 5.** Nguyên lý quan trọng của chất lượng dữ liệu là gì?

A. Chỉ cần nhiều dữ liệu là đủ, chất lượng không quan trọng  
B. Dữ liệu thiếu luôn tốt cho mô hình định lượng  
C. Dữ liệu trễ không ảnh hưởng tín hiệu thị trường  
D. Dữ liệu sai lệch sẽ tạo ra tri thức sai lệch  

**Câu 6.** Cross-field Validation dùng để làm gì?

A. Kiểm tra quy tắc logic liên thuộc tính  
B. Nén dữ liệu bằng histogram  
C. Tạo biểu đồ từ dữ liệu, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
D. Phân cụm dữ liệu bằng centroid  

**Câu 7.** Trong ví dụ chấm điểm tín dụng, thiếu thông tin hồ sơ là vấn đề thuộc chiều chất lượng nào?

A. Timeliness  
B. Completeness  
C. Clustering  
D. Decimal Scaling  

**Câu 8.** Trong ví dụ chấm điểm tín dụng, ngày tất toán nợ bị lệch định dạng là vấn đề thuộc chiều chất lượng nào?

A. Entropy  
B. Volume  
C. Consistency  
D. Concept Hierarchy  

### B. Noise, Outliers và tích hợp dữ liệu

**Câu 9.** Noise trong dữ liệu là gì?

A. Tập dữ liệu đã được làm sạch hoàn toàn  
B. Thuộc tính đã được rời rạc hóa  
C. Bản ghi đại diện centroid, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
D. Sai số ngẫu nhiên hoặc biến động không mong muốn làm ẩn tín hiệu thật  

**Câu 10.** Binning trong xử lý noise có tác dụng gì?

A. Chia dữ liệu thành các khoảng và thay giá trị bằng đại diện của bin để làm mượt  
B. Tạo cây phân cấp khái niệm  
C. Trích xuất đặc trưng từ văn bản  
D. Tính Information Gain, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  

**Câu 11.** Regression trong xử lý noise được dùng để làm gì?

A. Xóa toàn bộ outlier bằng tay, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Khớp dữ liệu bằng hàm toán học và loại bỏ thành phần nhiễu  
C. Chỉ chia dữ liệu thành các nhóm nhãn  
D. Mã hóa dữ liệu thành vector embedding  

**Câu 12.** Theo phương pháp Z-Score, điểm dữ liệu thường được xem là outlier tiềm năng khi nào?

A. |Z| = 0  
B. Z luôn nhỏ hơn 1  
C. |Z| > 3  
D. Z bằng giá trị trung bình  

**Câu 13.** IQR được tính dựa trên những phân vị nào?

A. Mean và Mode  
B. Min và Max  
C. Standard và Diamond  
D. Q1 25% và Q3 75%  

**Câu 14.** Ngưỡng outlier theo IQR thường là gì?

A. Nhỏ hơn Q1 - 1.5 x IQR hoặc lớn hơn Q3 + 1.5 x IQR  
B. Nằm đúng giữa Q1 và Q3  
C. Bằng trung bình cộng của dữ liệu  
D. Luôn bằng 0, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  

**Câu 15.** Moving Average trong ví dụ giám sát gian lận thẻ được dùng để làm gì?

A. Rời rạc hóa hạn mức tín dụng  
B. Làm mượt biến động chi tiêu nhỏ hằng ngày  
C. Tạo khóa định danh khách hàng  
D. Xây dựng Concept Hierarchy, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  

**Câu 16.** Entity Resolution là gì?

A. Chuẩn hóa dữ liệu về khoảng [0,1]  
B. Tạo bin có độ rộng bằng nhau  
C. Xác định các bản ghi từ nhiều nguồn cùng biểu diễn một thực thể  
D. Trích xuất sentiment từ văn bản  

**Câu 17.** Metadata Resolution dùng để xử lý trường hợp nào?

A. Các điểm dữ liệu cần thay bằng centroid  
B. Các bản ghi có Z-score quá lớn, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Các dữ liệu cần chia thành Gold/Silver  
D. Các thuộc tính khác tên nhưng cùng ý nghĩa  

**Câu 18.** Độ đo Jaccard dùng để làm gì?

A. So sánh mức độ trùng lặp giữa hai tập hợp  
B. Chuẩn hóa dữ liệu theo độ lệch chuẩn  
C. Tính trung bình động, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
D. Xác định số chữ số decimal scaling  

**Câu 19.** Công thức Jaccard giữa hai tập A và B là gì?

A. Mean / Standard Deviation  
B. |A giao B| / |A hợp B|  
C. |A hợp B| / |A giao B|  
D. Max - Min  

**Câu 20.** Deduplication nhằm mục tiêu gì?

A. Làm tăng số lượng bản ghi trùng  
B. Tạo nhiễu cho dữ liệu  
C. Loại bỏ bản ghi trùng lặp sau tích hợp để tạo Golden Record  
D. Xóa toàn bộ dữ liệu mới  

**Câu 21.** Conflict Handling trong tích hợp dữ liệu xử lý vấn đề nào?

A. Không có bản ghi nào trùng nhau, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Dữ liệu đã được chuẩn hóa hoàn toàn  
C. Mọi nguồn đều có cùng định dạng  
D. Hai nguồn cung cấp giá trị khác nhau cho cùng một trường  

**Câu 22.** Fuzzy Matching phù hợp với tình huống nào?

A. Xác định trùng khớp thực thể khi thông tin không hoàn toàn giống nhau  
B. Tính Z-score cho dữ liệu ngoại lai, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
C. Chia dải giá trị thành N khoảng bằng nhau  
D. Chọn đặc trưng bằng Information Gain  

### C. Transformation, Smoothing và Aggregation

**Câu 23.** Simple Moving Average (SMA) là gì?

A. Phân phối tần suất thay cho dữ liệu chi tiết  
B. Trung bình của dữ liệu trong một cửa sổ trượt  
C. Tập hợp các vector riêng lớn nhất  
D. Tỷ lệ dữ liệu không bị khuyết, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  

**Câu 24.** Trong SMA, tham số k thường biểu thị điều gì?

A. Số nhóm equal-width binning  
B. Số chiều của PCA  
C. Kích thước cửa sổ, số giá trị gần nhất được lấy để tính trung bình  
D. Số bản ghi bị trùng lặp  

**Câu 25.** Với dữ liệu 80, 86, 82 và k = 3, SMA ngày 3 bằng bao nhiêu?

A. 84.0  
B. 84.7  
C. 80.0  
D. 82.7  

**Câu 26.** Data Aggregation là gì?

A. Kết hợp bản ghi chi tiết thành tóm tắt cấp cao  
B. Tách văn bản thành embedding  
C. Xóa dữ liệu bị thiếu, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
D. Ghi dữ liệu thô vào Bronze  

**Câu 27.** Data Cubes trong OLAP hỗ trợ điều gì?

A. Chỉ phát hiện outlier bằng Z-score  
B. Phân tích dữ liệu theo nhiều chiều và nhiều mức tổng hợp  
C. Chỉ chuẩn hóa dữ liệu về [0,1], voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Chỉ xử lý văn bản phi cấu trúc  

**Câu 28.** Granularity trong aggregation là gì?

A. Độ lệch chuẩn của biến  
B. Mức độ nhiễu của bản ghi  
C. Mức độ chi tiết/tổng hợp được lựa chọn cho dữ liệu  
D. Số lần chạy thuật toán PCA  

**Câu 29.** Golden Cross trong ví dụ phân tích kỹ thuật thường liên quan đến gì?

A. Loại bỏ missing value bằng imputation  
B. Tính Jaccard giữa hai tập kỹ năng, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
C. Xây dựng Gold Layer trong Lakehouse  
D. Sử dụng các đường Moving Average như MA-50 và MA-200  

**Câu 30.** Candlesticks theo khung 1 giờ là ví dụ của kỹ thuật nào?

A. Aggregation dữ liệu giao dịch chi tiết  
B. Decimal Scaling, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
C. Entity Resolution  
D. Feature Selection  

### D. Data Reduction và Numerosity

**Câu 31.** Dimensionality Reduction nhằm mục tiêu gì?

A. Tăng số lượng thuộc tính càng nhiều càng tốt  
B. Loại bỏ thuộc tính dư thừa/không tương quan để giảm độ phức tạp  
C. Chỉ thêm nhiễu vào dữ liệu, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Xóa dữ liệu thô khỏi hệ thống  

**Câu 32.** PCA là viết tắt của gì?

A. Primary Cluster Assignment  
B. Predictive Customer Aggregation  
C. Principal Component Analysis  
D. Parallel Concept Architecture  

**Câu 33.** Thành phần chính trong PCA liên quan đến yếu tố nào?

A. Các key-value trong JSON, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Các nhãn Standard, Silver, Gold  
C. Bản ghi bị thiếu trong bảng  
D. Vector riêng ứng với trị riêng lớn nhất của covariance matrix  

**Câu 34.** PCA giúp giải quyết vấn đề nào?

A. Curse of Dimensionality  
B. Golden Record Conflict  
C. Hard Delete, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Schema Drift  

**Câu 35.** Numerosity Reduction nghĩa là gì?

A. Chỉ đổi tên cột, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
B. Giảm số lượng dữ liệu biểu diễn nhưng vẫn giữ thông tin quan trọng  
C. Loại bỏ mọi thuộc tính phân loại  
D. Tăng bản ghi trùng lặp  

**Câu 36.** Regression Models trong Numerosity Reduction thay thế dữ liệu lớn bằng gì?

A. Các cột bị missing  
B. Các bản sao dữ liệu thô  
C. Các tham số của một mô hình toán học đơn giản  
D. Các nhãn định danh Standard/Silver  

**Câu 37.** Sampling trong giảm số lượng dữ liệu dùng để làm gì?

A. Tính Z-score cho từng điểm  
B. Gộp thực thể bằng Jaccard, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Chia thuộc tính liên tục thành khoảng  
D. Chọn tập đại diện để khai phá trên dữ liệu Big Data  

**Câu 38.** Stratified Sampling có ý nghĩa gì?

A. Lấy mẫu phân tầng để giữ tính đại diện của các nhóm  
B. Chỉ chọn dữ liệu bị thiếu, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
C. Chỉ chọn các outlier lớn nhất  
D. Lấy ngẫu nhiên duy nhất một bản ghi  

**Câu 39.** Histogram trong Numerosity Reduction đại diện dữ liệu bằng gì?

A. Golden Record, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Phân phối tần suất  
C. Concept Hierarchy  
D. Vector embedding  

**Câu 40.** Clustering trong Numerosity Reduction thay thế nhóm điểm tương đồng bằng gì?

A. Cột schema mới  
B. Mã vùng chi nhánh  
C. Giá trị centroid đại diện  
D. Giá trị missing  

### E. Discretization và Concept Hierarchy

**Câu 41.** Discretization là gì?

A. Tìm bản ghi trùng lặp, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Tạo vector embedding từ văn bản  
C. Chuẩn hóa dữ liệu về trung bình 0  
D. Chia thuộc tính liên tục thành các khoảng hoặc nhãn định danh  

**Câu 42.** Equal-width Binning chia dữ liệu như thế nào?

A. Chia dải giá trị thành N khoảng có độ rộng bằng nhau  
B. Chia theo sentiment của văn bản  
C. Chia theo entropy thấp nhất, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
D. Chia mỗi bin có số bản ghi bằng nhau  

**Câu 43.** Equal-frequency Binning phù hợp với loại dữ liệu nào?

A. Dữ liệu chỉ có một giá trị  
B. Dữ liệu lệch (skewed) vì mỗi bin có số bản ghi bằng nhau  
C. Dữ liệu không có bản ghi, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Dữ liệu luôn phân phối đều tuyệt đối  

**Câu 44.** Với min = 10, max = 70, N = 3, độ rộng bin bằng bao nhiêu?

A. 10  
B. 60  
C. 20  
D. 30  

**Câu 45.** Concept Hierarchy là gì?

A. Xóa mọi cấp độ tổng hợp  
B. Tạo bản ghi trùng lặp, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Chỉ lưu dữ liệu ở dạng vector  
D. Tổ chức thuộc tính theo tầng bậc từ cụ thể đến tổng quát  

**Câu 46.** Multi-level Mining cho phép điều gì?

A. Khai phá luật kết hợp ở nhiều mức trừu tượng khác nhau  
B. Chỉ chuẩn hóa dữ liệu bằng Min-Max  
C. Chỉ phát hiện outlier bằng IQR, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
D. Chỉ khai phá duy nhất ở mức bản ghi chi tiết  

**Câu 47.** Drill-down dữ liệu giúp người dùng làm gì?

A. Tự động tạo missing values  
B. Tìm nguyên nhân gốc rễ của vấn đề  
C. Tăng nhiễu cho mô hình, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Xóa sạch dữ liệu lịch sử  

**Câu 48.** Chuyển số dư tài khoản thành nhóm Standard, Silver, Gold, Diamond là ví dụ của gì?

A. Z-score Normalization  
B. Regression Smoothing  
C. Rời rạc hóa  
D. Entity Resolution  

### F. Normalization

**Câu 49.** Min-Max Normalization thường ánh xạ dữ liệu về khoảng nào?

A. Luôn về số nguyên âm, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Luôn về giá trị trung bình ban đầu  
C. Luôn về khoảng [-100,100]  
D. Một khoảng cố định, thường là [0,1]  

**Câu 50.** Với min = 10, max = 110, giá trị 60 chuẩn hóa Min-Max về [0,1] bằng bao nhiêu?

A. 0.5  
B. 0.4  
C. 1.0  
D. 0.6  

**Câu 51.** Decimal Scaling chuẩn hóa bằng cách nào?

A. Dùng Jaccard để so sánh tập hợp, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Di chuyển phần thập phân dựa trên giá trị tuyệt đối lớn nhất  
C. Chia dữ liệu thành các bin bằng nhau  
D. Trừ trung bình và chia độ lệch chuẩn  

**Câu 52.** Z-Score Normalization dựa trên yếu tố nào?

A. Q1 và Q3 duy nhất  
B. Số lượng nhóm phân khúc  
C. Trung bình và độ lệch chuẩn  
D. Min và Max duy nhất  

**Câu 53.** Ưu điểm của Z-Score Normalization là gì?

A. Luôn làm mất mọi thông tin thống kê, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Không phù hợp với thuật toán dựa trên khoảng cách  
C. Chỉ dùng được khi dữ liệu không có outlier  
D. Hiệu quả khi có nhiều ngoại lai hoặc không biết trước Min/Max  

**Câu 54.** Vì sao chuẩn hóa quan trọng với thuật toán dựa trên khoảng cách?

A. Tránh biến có thang đo lớn lấn át biến khác  
B. Bắt buộc tạo dữ liệu trùng lặp  
C. Loại bỏ toàn bộ biến nhỏ, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Tăng số lượng bản ghi missing  

### G. Feature Engineering và Mining tri thức

**Câu 55.** Feature Construction là gì?

A. Chỉ tìm bản ghi trùng lặp, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
B. Tạo thuộc tính mới từ thuộc tính cũ để làm nổi bật tín hiệu nghiệp vụ  
C. Chỉ chuyển dữ liệu thành file PDF  
D. Xóa mọi thuộc tính có ý nghĩa  

**Câu 56.** Feature Selection dùng để làm gì?

A. Chỉ chuẩn hóa dữ liệu về [0,1]  
B. Chỉ làm mượt chuỗi thời gian  
C. Giữ lại các thuộc tính có sức mạnh phân loại tốt nhất  
D. Tăng toàn bộ thuộc tính bất kể nhiễu  

**Câu 57.** Information Gain thường được dùng trong bối cảnh nào?

A. Chuyển số dư thành nhóm khách hàng  
B. Tạo Golden Record, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Tính Moving Average  
D. Lựa chọn thuộc tính có khả năng phân loại tốt  

**Câu 58.** Entropy đo điều gì trong khai phá dữ liệu?

A. Mức độ hỗn loạn/không thuần nhất của dữ liệu  
B. Số lượng centroid, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
C. Độ trễ của dữ liệu  
D. Độ rộng của một bin  

**Câu 59.** AI-based Extraction trong Feature Engineering dùng để làm gì?

A. Chỉ tính Z-score của số liệu  
B. Trích xuất đặc trưng từ dữ liệu phi cấu trúc bằng mô hình AI/ngôn ngữ  
C. Chỉ nhóm chi nhánh theo khu vực  
D. Chỉ phát hiện hard delete, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 60.** Embeddings trong Feature Engineering có vai trò gì?

A. Xác định độ trễ của dữ liệu  
B. Tạo bản ghi trùng lặp  
C. Chuyển thực thể rời rạc thành vector đa chiều để tính độ tương đồng  
D. Chia dữ liệu thành các bin bằng nhau  

## Đáp án và giải thích ngắn

1. D - Accuracy đo dữ liệu có phản ánh đúng thực thể hay không.
2. A - Completeness nói về mức đầy đủ, không thiếu/null.
3. B - Consistency là nhất quán logic và định dạng giữa nguồn.
4. C - Timeliness là độ kịp thời/độ trễ dữ liệu.
5. D - Dữ liệu sai dẫn đến tri thức và quyết định sai.
6. A - Cross-field Validation kiểm tra quy tắc giữa các trường.
7. B - Thiếu thông tin là vấn đề Completeness.
8. C - Lệch định dạng giữa nguồn là Consistency.
9. D - Noise là biến động ngẫu nhiên che tín hiệu thật.
10. A - Binning làm mượt bằng đại diện trong khoảng.
11. B - Regression khớp xu hướng toán học để loại nhiễu.
12. C - Ngưỡng phổ biến là |Z| > 3.
13. D - IQR = Q3 - Q1, dựa trên 75% và 25%.
14. A - Ngoài Q1 - 1.5IQR hoặc Q3 + 1.5IQR là outlier.
15. B - Moving Average làm mượt biến động nhỏ.
16. C - Entity Resolution hợp nhất nhận diện cùng thực thể.
17. D - Metadata Resolution ánh xạ thuộc tính khác tên cùng nghĩa.
18. A - Jaccard đo độ trùng lặp tập hợp.
19. B - Jaccard = giao / hợp.
20. C - Deduplication tạo hồ sơ duy nhất/Golden Record.
21. D - Conflict Handling xử lý giá trị mâu thuẫn giữa nguồn.
22. A - Fuzzy Matching dùng khi thông tin gần giống nhưng không khớp tuyệt đối.
23. B - SMA là trung bình trong cửa sổ trượt.
24. C - k là số quan sát gần nhất trong cửa sổ.
25. D - (80 + 86 + 82) / 3 = 82.7.
26. A - Aggregation biến chi tiết thành tổng hợp.
27. B - Data Cubes hỗ trợ phân tích đa chiều.
28. C - Granularity là mức độ chi tiết/tổng hợp.
29. D - Golden Cross liên quan đến giao cắt các đường MA.
30. A - Candlesticks là tổng hợp tick data theo khung thời gian.
31. B - Dimensionality Reduction giảm số thuộc tính dư thừa.
32. C - PCA là Principal Component Analysis.
33. D - PCA chọn hướng/vector riêng có trị riêng lớn.
34. A - PCA giảm Curse of Dimensionality.
35. B - Numerosity Reduction giảm số lượng biểu diễn dữ liệu.
36. C - Regression Models thay dữ liệu bằng tham số mô hình.
37. D - Sampling chọn mẫu đại diện.
38. A - Stratified Sampling giữ đại diện theo tầng/nhóm.
39. B - Histogram dùng phân phối tần suất.
40. C - Clustering đại diện nhóm bằng centroid.
41. D - Discretization biến liên tục thành khoảng/nhãn.
42. A - Equal-width chia khoảng có độ rộng bằng nhau.
43. B - Equal-frequency tốt cho dữ liệu lệch.
44. C - Width = (70 - 10) / 3 = 20.
45. D - Concept Hierarchy tổ chức từ cụ thể đến tổng quát.
46. A - Multi-level Mining khai phá ở nhiều mức.
47. B - Drill-down giúp tìm nguyên nhân gốc.
48. C - Chuyển số dư thành nhóm là rời rạc hóa.
49. D - Min-Max thường đưa về [0,1].
50. A - (60 - 10) / (110 - 10) = 0.5.
51. B - Decimal Scaling dịch dấu thập phân theo max tuyệt đối.
52. C - Z-score dùng mean và standard deviation.
53. D - Z-score hữu ích khi có outlier hoặc không rõ min/max.
54. A - Chuẩn hóa tránh thang đo lớn chi phối khoảng cách.
55. B - Feature Construction tạo thuộc tính mới có ý nghĩa.
56. C - Feature Selection giữ đặc trưng mạnh, bỏ nhiễu.
57. D - Information Gain hỗ trợ chọn thuộc tính phân loại tốt.
58. A - Entropy đo sự hỗn loạn/không thuần nhất.
59. B - AI-based Extraction lấy feature từ dữ liệu phi cấu trúc.
60. C - Embeddings biểu diễn thực thể thành vector để so sánh ngữ nghĩa/tương đồng.

