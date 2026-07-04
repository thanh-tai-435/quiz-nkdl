# Trắc nghiệm chương 6 - In-Database Machine Learning và MLOps

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide6.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. In-Database Machine Learning

**Câu 1.** In-Database ML nhấn mạnh cách tiếp cận nào?

A. Không dùng dữ liệu trong kho dữ liệu, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Giữ dữ liệu tại chỗ và đưa thuật toán ML vào thực thi trong Data Warehouse  
C. Luôn xuất dữ liệu ra máy chủ ML riêng trước khi huấn luyện  
D. Chỉ huấn luyện mô hình trên file Excel  

**Câu 2.** Hạn chế của cách tiếp cận ML truyền thống trong slide là gì?

A. Không cần di chuyển dữ liệu  
B. Luôn chạy trực tiếp trong DWH  
C. Tốn băng thông, trễ thời gian và tăng nguy cơ bảo mật  
D. Tự động đảm bảo governance tập trung  

**Câu 3.** Ưu điểm chính của In-Database ML là gì?

A. Bắt buộc cấu hình cụm Hadoop phức tạp  
B. Tăng nhu cầu sao chép dữ liệu ra ngoài  
C. Làm mất khả năng phân quyền dữ liệu, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Loại bỏ độ trễ và chi phí dịch chuyển dữ liệu  

**Câu 4.** In-Database ML hỗ trợ Data Governance vì sao?

A. Dữ liệu và mô hình được quản trị tập trung trong hạ tầng kho dữ liệu  
B. Dữ liệu được gửi tự do qua Internet  
C. Không cần kiểm soát truy cập, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
D. Mọi người đều có toàn quyền dùng mô hình  

**Câu 5.** Scalability trong In-Database ML dựa vào yếu tố nào?

A. Dashboard BI tĩnh, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Tính toán song song quy mô lớn và khả năng tự động mở rộng của DWH  
C. Máy cá nhân của từng Data Scientist  
D. File CSV tách rời ngoài hệ thống  

**Câu 6.** Governance trong In-Database ML liên quan đến cơ chế nào?

A. Chỉ chia sẻ mật khẩu admin  
B. Chỉ phân quyền qua email thủ công  
C. RBAC, phân quyền dùng mô hình giống phân quyền bảng dữ liệu  
D. Không kiểm soát ai dùng mô hình  

**Câu 7.** Simplicity của In-Database ML thể hiện ở đâu?

A. Chỉ chạy mô hình bằng thao tác thủ công  
B. Bắt buộc xây pipeline ML hoàn toàn tách biệt  
C. Không thể tự động hóa quy trình, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Mô hình tích hợp trực tiếp vào ELT pipelines có sẵn  

**Câu 8.** Điểm khác biệt quan trọng giữa cách cũ và In-Database ML là gì?

A. Cách cũ di chuyển dữ liệu ra ngoài, cách mới giữ dữ liệu tại chỗ  
B. Cách cũ bảo mật hơn vì gửi dữ liệu qua Internet  
C. Cách mới không thể huấn luyện mô hình  
D. Cách mới không dùng Data Warehouse, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  

### B. Machine Learning Concepts

**Câu 9.** Supervised Learning huấn luyện mô hình trên loại dữ liệu nào?

A. Dữ liệu bị xóa nhãn  
B. Labeled Data  
C. Unlabeled Data  
D. Dữ liệu không có thuộc tính  

**Câu 10.** Classification là bài toán gì?

A. Dự đoán giá trị số liên tục  
B. Tìm bản ghi dị biệt  
C. Dự đoán nhãn danh mục  
D. Phân cụm theo tương tự  

**Câu 11.** Regression là bài toán gì?

A. Chỉ gom cụm dữ liệu, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Dự đoán nhãn danh mục  
C. Chỉ phát hiện outlier  
D. Dự đoán giá trị số liên tục  

**Câu 12.** Unsupervised Learning dùng để làm gì?

A. Khám phá cấu trúc ẩn từ Unlabeled Data  
B. Chỉ chạy bằng CREATE MODEL  
C. Huấn luyện trên nhãn đã biết  
D. Chỉ tính ROC-AUC, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  

**Câu 13.** Clustering thuộc nhóm nào?

A. Supervised Learning  
B. Unsupervised Learning  
C. Model Registry  
D. SQL DDL, va luon thay the hoan toan cac co che con lai trong kien truc  

**Câu 14.** Anomaly Detection dùng để làm gì?

A. Chỉ phân quyền RBAC  
B. Dự đoán nhãn danh mục cố định  
C. Tìm kiếm các bản ghi dị biệt trong hệ thống  
D. Chỉ tạo hàm UDF  

**Câu 15.** Trong slide, CPT+ liên quan chủ yếu đến loại bài toán nào?

A. Mã hóa dữ liệu trong DWH  
B. Hyperparameter tuning tự động  
C. Quản lý Model Registry, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Sequence prediction/dự đoán phần tử kế tiếp trong chuỗi  

**Câu 16.** Trong CPT+, chú ý về mẫu số trong phép ước lượng là gì?

A. Mẫu số là số nhánh chứa chuỗi hậu tố  
B. Mẫu số là số dòng trong Model Registry  
C. Mẫu số luôn là tổng số bảng trong DWH  
D. Mẫu số là số thư viện Python  

**Câu 17.** PageRank trong slide là ví dụ liên quan đến gì?

A. Chuẩn hóa dữ liệu về [0,1], voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
B. Tính điểm/xếp hạng nút dựa trên liên kết trong đồ thị  
C. Huấn luyện mô hình bằng UDF  
D. Chọn feature trong Feature Store  

**Câu 18.** Vòng lặp PageRank thường dừng khi nào?

A. Khi ROC-AUC bằng 0  
B. Khi mọi dữ liệu bị xóa khỏi đồ thị  
C. Khi độ chênh lệch giữa hai vòng lặp liên tiếp đạt ngưỡng epsilon  
D. Khi không còn thư viện Python  

### C. Huấn luyện mô hình bằng SQL

**Câu 19.** BigQuery ML cho phép làm gì?

A. Chỉ viết mã Python phức tạp ngoài DWH  
B. Chỉ tạo dashboard không có mô hình  
C. Không thể dự báo trên bảng mới, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Xây dựng mô hình ML bằng cú pháp SQL chuẩn  

**Câu 20.** Câu lệnh `CREATE MODEL` trong BigQuery ML dùng để làm gì?

A. Khởi tạo và bắt đầu huấn luyện mô hình  
B. Gọi mô hình để dự báo  
C. Trích xuất chỉ số đánh giá  
D. Xóa Feature Store, ma khong can metadata, catalog hoac buoc kiem chung bo sung  

**Câu 21.** `ML.EVALUATE` dùng để làm gì?

A. Huấn luyện mô hình mới, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Trích xuất chỉ số đánh giá như ROC-AUC, F1-Score  
C. Gọi mô hình dự báo trên bảng mới  
D. Biên dịch Python thành SQL  

**Câu 22.** `ML.PREDICT` dùng để làm gì?

A. Tự động tạo Feature Store  
B. Tạo Model Registry  
C. Gọi mô hình để dự báo trên dữ liệu mới  
D. Gán quyền RBAC  

**Câu 23.** LOGISTIC_REG trong BigQuery ML thường phù hợp với loại bài toán nào?

A. Clustering không giám sát  
B. Data Drift monitoring  
C. Model Registry  
D. Classification  

**Câu 24.** LINEAR_REG trong BigQuery ML thường phù hợp với loại bài toán nào?

A. Regression  
B. Classification danh mục  
C. Anomaly Detection bằng Cortex  
D. Sandboxing Python  

**Câu 25.** Snowflake Cortex ML Functions cung cấp điều gì?

A. Chỉ nơi lưu trữ model version  
B. Các hàm học máy đóng gói sẵn, tự động tối ưu cho bài toán doanh nghiệp  
C. Chỉ công cụ vẽ dashboard, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Chỉ cơ chế phân quyền RBAC  

**Câu 26.** Forecasting trong Snowflake Cortex dùng cho bài toán nào?

A. Phân quyền người dùng  
B. Xây dựng FP-tree  
C. Dự báo chuỗi thời gian như doanh số, tồn kho  
D. Xóa dữ liệu nhạy cảm  

**Câu 27.** Anomaly Detection trong Snowflake Cortex dùng để làm gì?

A. Tự động tạo Git repository  
B. Tính F1-Score cho classification  
C. Chỉ dự báo doanh số, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Phát hiện điểm dữ liệu bất thường  

**Câu 28.** Cortex AI & LLM Integration cho phép làm gì bằng SQL?

A. Gọi LLM để tóm tắt văn bản hoặc phân tích cảm xúc từ dữ liệu text thô  
B. Chỉ copy dữ liệu ra server ngoài  
C. Không thể xử lý văn bản, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
D. Chỉ chạy các phép JOIN truyền thống  

### D. Python/R trong kho dữ liệu

**Câu 29.** Snowpark là gì?

A. Một metric đánh giá classification  
B. Thư viện API dạng DataFrame cho Python/R/Scala, thực thi bên trong Snowflake  
C. Một loại Model Registry, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Một công cụ chỉ dùng để tạo dashboard  

**Câu 30.** Cơ chế Push-down trong Snowpark nghĩa là gì?

A. Dữ liệu thô bị đẩy ra ngoài Internet  
B. Mọi truy vấn bị chạy trên máy cá nhân  
C. Mã Python được biên dịch thành SQL tối ưu chạy song song trong kho dữ liệu  
D. Mã Python bị cấm chạy trong DWH  

**Câu 31.** Zero Data Movement trong Snowpark nhấn mạnh điều gì?

A. Không dùng Data Warehouse  
B. Luôn sao chép toàn bộ dữ liệu ra máy ML riêng  
C. Không cần dữ liệu để huấn luyện  
D. Không dịch chuyển dữ liệu thô ra ngoài  

**Câu 32.** Tích hợp Anaconda trong runtime environment giúp gì?

A. Gọi trực tiếp nhiều thư viện như scikit-learn, numpy, pandas, scipy  
B. Xóa mọi thư viện Python khỏi hệ thống, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
C. Chỉ chạy SQL thuần, không có thư viện  
D. Không cho Data Scientist dùng package  

**Câu 33.** Secure Sandbox dùng để làm gì?

A. Tăng quyền admin cho mọi script, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Cô lập mã Python/R an toàn, ngăn mã độc xâm nhập hạ tầng dữ liệu  
C. Cho phép mã độc truy cập bảng dữ liệu  
D. Xóa toàn bộ runtime environment  

**Câu 34.** Python Worksheets hỗ trợ điều gì?

A. Chỉ gửi email kết quả mô hình  
B. Chỉ tạo cột nhãn phân loại  
C. Viết, chạy thử và trực quan hóa mã Python trực tiếp trên Web UI của DWH  
D. Chỉ quản lý Model Drift  

### E. Feature Store

**Câu 35.** Feature Engineering thường chiếm phần nào trong công việc ML?

A. Chỉ một lần cuối khi deploy  
B. Không đáng kể  
C. Chỉ sau khi mô hình đã production  
D. Phần lớn thời gian  

**Câu 36.** Nếu không quản lý feature tập trung, rủi ro nào có thể xảy ra?

A. Các phòng ban tính toán trùng lặp hoặc sai lệch logic  
B. Không cần lineage, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
C. Feature tự động nhất quán tuyệt đối  
D. Không thể dùng lại feature  

**Câu 37.** Feature Store là gì?

A. Nơi lưu duy nhất model logs không có feature  
B. Kho/thư viện tập trung quản lý, lưu trữ và phân phối feature đã tính sẵn  
C. Công cụ chỉ để phân quyền RBAC  
D. Một hàm UDF dự báo, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  

**Câu 38.** Một lợi ích của Feature Store là Discovery, nghĩa là gì?

A. Chỉ ẩn feature khỏi người dùng  
B. Tự động xóa feature cũ  
C. Dễ tìm và tái sử dụng đặc trưng  
D. Tắt Data Lineage  

**Câu 39.** Consistency trong Feature Store giúp đảm bảo điều gì?

A. Mỗi đội tự tính feature theo cách khác nhau  
B. Không cần công thức tính feature, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Feature luôn bị thay đổi ngẫu nhiên  
D. Feature được tính nhất quán giữa các đội/mô hình  

**Câu 40.** Lineage trong Feature Store giúp gì?

A. Truy vết nguồn gốc dữ liệu/logic tạo feature  
B. Không thể audit feature  
C. Xóa phiên bản dữ liệu  
D. Chỉ tạo dashboard, ma khong can metadata, catalog hoac buoc kiem chung bo sung  

### F. MLOps và Model Drift

**Câu 41.** MLOps là gì?

A. Chỉ là công cụ vẽ biểu đồ  
B. Áp dụng tư duy DevOps vào ML để tự động hóa và quản lý vòng đời mô hình  
C. Chỉ là một thuật toán classification  
D. Chỉ dùng để tạo bảng SQL, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 42.** Model Registry dùng để làm gì?

A. Chỉ chạy Hyperparameter Tuning  
B. Lưu toàn bộ dữ liệu thô không có model  
C. Lưu trữ tập trung mô hình đã huấn luyện và quản lý trạng thái mô hình  
D. Chỉ phân tích sentiment  

**Câu 43.** Trạng thái mô hình trong Model Registry có thể gồm gì?

A. Chỉ có một trạng thái duy nhất là production  
B. Chỉ có trạng thái bị xóa  
C. Chỉ trạng thái raw data  
D. Đang phát triển, đã phê duyệt, đã hạ tải  

**Câu 44.** Model Versioning cần gắn phiên bản mô hình với những gì?

A. Data Version và mã nguồn tạo ra mô hình  
B. Chỉ màu dashboard, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
C. Chỉ tên người dùng cuối  
D. Chỉ loại trình duyệt  

**Câu 45.** Mục tiêu của Model Versioning là gì?

A. Làm mất dấu phiên bản mô hình  
B. Đảm bảo khả năng tái lập kiểm thử  
C. Không thể rollback  
D. Không cần quản lý dữ liệu huấn luyện  

**Câu 46.** Model Drift là gì?

A. Việc dùng SQL để train model  
B. Tăng tốc tự động của DWH  
C. Suy giảm hiệu năng/độ chính xác mô hình sau khi đưa vào thực tế  
D. Tạo UDF trong DWH  

**Câu 47.** Data Drift là gì?

A. Quan hệ giữa feature và nhãn thay đổi  
B. Mã Python được biên dịch thành SQL, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Feature được lưu vào Feature Store  
D. Phân phối dữ liệu đầu vào thực tế thay đổi so với dữ liệu huấn luyện  

**Câu 48.** Concept Drift là gì?

A. Mối quan hệ giữa thuộc tính đầu vào và nhãn mục tiêu bị thay đổi  
B. Phân phối đầu vào thay đổi nhưng quan hệ nhãn giữ nguyên  
C. Dữ liệu không được di chuyển ra ngoài  
D. Tự động chọn thuật toán tốt nhất, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  

**Câu 49.** Giải pháp cho Model Drift trong slide là gì?

A. Xóa toàn bộ dữ liệu production  
B. Giám sát tự động và kích hoạt Auto-retraining khi độ chính xác tụt dưới ngưỡng  
C. Không cần theo dõi mô hình sau khi deploy  
D. Chỉ đổi tên mô hình, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  

### G. AutoML và UDF Deployment

**Câu 50.** AutoML là gì?

A. Chỉ là một model registry  
B. Chỉ là một lệnh SELECT  
C. Tự động hóa chuỗi quy trình xây dựng mô hình ML  
D. Chỉ là một loại dữ liệu VARIANT  

**Câu 51.** AutoML giúp giảm điều gì?

A. Toàn bộ dữ liệu huấn luyện  
B. Nhu cầu đánh giá mô hình, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
C. Mọi kiểm soát governance  
D. Thao tác thử sai lặp đi lặp lại của con người  

**Câu 52.** Automated Feature Engineering trong AutoML làm gì?

A. Tự động lựa chọn và biến đổi các đặc trưng hữu ích  
B. Tự động xóa mọi feature  
C. Chỉ lưu feature vào dashboard  
D. Chỉ chạy UDF dự báo, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  

**Câu 53.** AutoML có thể tự động thử nghiệm điều gì?

A. Nhiều file PDF khác nhau, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Nhiều thuật toán khác nhau để chọn thuật toán tốt nhất  
C. Nhiều mật khẩu admin khác nhau  
D. Nhiều tên bảng ngẫu nhiên  

**Câu 54.** Hyperparameter Tuning trong AutoML nhằm mục tiêu gì?

A. Xóa dữ liệu huấn luyện  
B. Tắt Model Registry  
C. Tối ưu hiệu năng mô hình  
D. Chỉ gọi LLM qua SQL  

**Câu 55.** UDF là viết tắt của gì?

A. Unlabeled Data Format  
B. Unified Data Factory  
C. Universal Drift Feature  
D. User-Defined Function  

**Câu 56.** Triển khai mô hình dưới dạng UDF nghĩa là gì?

A. Đóng gói mô hình đã phê duyệt thành hàm tự định nghĩa ngay trong DWH  
B. Gửi mô hình ra ngoài bằng API bắt buộc  
C. Chỉ lưu mô hình trong file local, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Không cho người dùng gọi mô hình  

**Câu 57.** Scoring on-the-fly với UDF cho phép điều gì?

A. Không thể dùng câu lệnh SELECT  
B. Dự báo thời gian thực trên từng dòng dữ liệu đang truy vấn  
C. Chỉ dự báo sau khi xuất toàn bộ dữ liệu sang CSV  
D. Chỉ chạy batch mỗi năm, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  

**Câu 58.** Người dùng gọi mô hình UDF như thế nào theo slide?

A. Viết code API phức tạp bắt buộc  
B. Truy cập trực tiếp máy chủ ML vật lý  
C. Thực thi một câu lệnh SELECT bình thường  
D. Tải mô hình về máy cá nhân  

**Câu 59.** Lợi ích của đóng gói mô hình thành UDF là gì?

A. Tách mô hình khỏi dữ liệu và governance  
B. Làm mô hình không thể audit, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Không hỗ trợ dự báo thời gian thực  
D. Biến mô hình ML thành lệnh SQL trực quan, dễ dùng trong DWH  

**Câu 60.** Chuỗi hợp lý từ huấn luyện đến vận hành mô hình trong chương 6 là gì?

A. Huấn luyện/đánh giá, phê duyệt, đăng ký/versioning, triển khai UDF, giám sát drift  
B. Xóa Feature Store, bỏ đánh giá, đưa thẳng production  
C. Triển khai UDF trước, sau đó mới huấn luyện, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
D. Chỉ tạo dashboard, không cần model lifecycle  

## Đáp án và giải thích ngắn

1. B - In-Database ML giữ dữ liệu trong DWH và đưa thuật toán đến nơi dữ liệu ở.
2. C - Cách cũ tốn băng thông, trễ và rủi ro bảo mật do di chuyển dữ liệu.
3. D - Lợi ích chính là giảm/loại chi phí và độ trễ di chuyển dữ liệu.
4. A - Dữ liệu/mô hình vẫn nằm trong vùng quản trị tập trung.
5. B - DWH có compute song song và tự mở rộng.
6. C - RBAC giúp quản lý quyền dùng mô hình như quyền dùng bảng.
7. D - Mô hình có thể gắn vào ELT pipelines hiện có.
8. A - Khác biệt lớn là data movement.
9. B - Supervised Learning cần dữ liệu có nhãn.
10. C - Classification dự đoán nhãn.
11. D - Regression dự đoán số liên tục.
12. A - Unsupervised tìm cấu trúc ẩn từ dữ liệu không nhãn.
13. B - Clustering là unsupervised.
14. C - Anomaly Detection tìm bản ghi dị biệt.
15. D - CPT+ được trình bày trong bối cảnh dự đoán chuỗi.
16. A - Slide nhấn mạnh mẫu số là số nhánh chứa hậu tố.
17. B - PageRank là xếp hạng node theo cấu trúc liên kết.
18. C - Lặp đến khi sai khác giữa hai vòng nhỏ hơn epsilon.
19. D - BigQuery ML cho phép train bằng SQL.
20. A - CREATE MODEL khởi tạo/huấn luyện.
21. B - ML.EVALUATE trả chỉ số đánh giá.
22. C - ML.PREDICT gọi mô hình để dự báo.
23. D - Logistic regression thường dùng cho classification.
24. A - Linear regression dùng cho regression.
25. B - Cortex có hàm ML đóng gói sẵn.
26. C - Forecasting dự báo chuỗi thời gian.
27. D - Anomaly Detection phát hiện điểm bất thường.
28. A - Cortex AI/LLM gọi mô hình ngôn ngữ bằng SQL.
29. B - Snowpark là API DataFrame chạy trong Snowflake.
30. C - Push-down biên dịch code thành SQL tối ưu.
31. D - Zero Data Movement là không đưa dữ liệu thô ra ngoài.
32. A - Anaconda giúp dùng thư viện phổ biến không cần cài thủ công.
33. B - Sandbox cô lập code an toàn.
34. C - Python Worksheets cho viết/chạy/visualize Python trên Web UI.
35. D - Feature Engineering thường chiếm nhiều thời gian ML.
36. A - Không quản lý tập trung dễ trùng lặp và sai logic.
37. B - Feature Store lưu và phân phối feature dùng lại.
38. C - Discovery là dễ tìm/tái sử dụng feature.
39. D - Consistency bảo đảm công thức feature thống nhất.
40. A - Lineage truy vết nguồn và logic feature.
41. B - MLOps áp dụng DevOps vào vòng đời ML.
42. C - Model Registry lưu và quản lý trạng thái mô hình.
43. D - Các trạng thái gồm phát triển, phê duyệt, hạ tải.
44. A - Versioning gắn model với data version và source code.
45. B - Mục tiêu là tái lập kiểm thử.
46. C - Model Drift là suy giảm hiệu năng sau triển khai.
47. D - Data Drift là phân phối input thay đổi.
48. A - Concept Drift là quan hệ input-label thay đổi.
49. B - Giám sát và auto-retraining khi accuracy giảm.
50. C - AutoML tự động hóa quá trình xây mô hình.
51. D - AutoML giảm thử sai thủ công.
52. A - Automated Feature Engineering chọn/biến đổi feature.
53. B - AutoML thử nhiều thuật toán.
54. C - Hyperparameter tuning tối ưu hiệu năng.
55. D - UDF là User-Defined Function.
56. A - Model được đóng gói thành hàm trong DWH.
57. B - UDF scoring trả dự báo theo từng dòng truy vấn.
58. C - Người dùng gọi qua SELECT bình thường.
59. D - UDF làm mô hình dễ dùng như SQL.
60. A - Đây là vòng đời hợp lý từ train đến deploy và monitor.

