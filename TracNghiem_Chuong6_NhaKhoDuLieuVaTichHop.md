# Trắc nghiệm chương 6 - In-Database Machine Learning và MLOps

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide6.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. In-Database Machine Learning

**Câu 1.** In-Database ML nhấn mạnh cách tiếp cận nào?

A. Giữ dữ liệu tại chỗ và đưa thuật toán ML vào thực thi trong Data Warehouse  
B. Luôn xuất dữ liệu ra máy chủ ML riêng trước khi huấn luyện  
C. Chỉ huấn luyện mô hình trên file Excel  
D. Không dùng dữ liệu trong kho dữ liệu  

**Câu 2.** Hạn chế của cách tiếp cận ML truyền thống trong slide là gì?

A. Tốn băng thông, trễ thời gian và tăng nguy cơ bảo mật  
B. Không cần di chuyển dữ liệu  
C. Tự động đảm bảo governance tập trung  
D. Luôn chạy trực tiếp trong DWH  

**Câu 3.** Ưu điểm chính của In-Database ML là gì?

A. Loại bỏ độ trễ và chi phí dịch chuyển dữ liệu  
B. Tăng nhu cầu sao chép dữ liệu ra ngoài  
C. Làm mất khả năng phân quyền dữ liệu  
D. Bắt buộc cấu hình cụm Hadoop phức tạp  

**Câu 4.** In-Database ML hỗ trợ Data Governance vì sao?

A. Dữ liệu và mô hình được quản trị tập trung trong hạ tầng kho dữ liệu  
B. Dữ liệu được gửi tự do qua Internet  
C. Mọi người đều có toàn quyền dùng mô hình  
D. Không cần kiểm soát truy cập  

**Câu 5.** Scalability trong In-Database ML dựa vào yếu tố nào?

A. Tính toán song song quy mô lớn và khả năng tự động mở rộng của DWH  
B. Máy cá nhân của từng Data Scientist  
C. File CSV tách rời ngoài hệ thống  
D. Dashboard BI tĩnh  

**Câu 6.** Governance trong In-Database ML liên quan đến cơ chế nào?

A. RBAC, phân quyền dùng mô hình giống phân quyền bảng dữ liệu  
B. Chỉ chia sẻ mật khẩu admin  
C. Không kiểm soát ai dùng mô hình  
D. Chỉ phân quyền qua email thủ công  

**Câu 7.** Simplicity của In-Database ML thể hiện ở đâu?

A. Mô hình tích hợp trực tiếp vào ELT pipelines có sẵn  
B. Bắt buộc xây pipeline ML hoàn toàn tách biệt  
C. Không thể tự động hóa quy trình  
D. Chỉ chạy mô hình bằng thao tác thủ công  

**Câu 8.** Điểm khác biệt quan trọng giữa cách cũ và In-Database ML là gì?

A. Cách cũ di chuyển dữ liệu ra ngoài, cách mới giữ dữ liệu tại chỗ  
B. Cách cũ bảo mật hơn vì gửi dữ liệu qua Internet  
C. Cách mới không dùng Data Warehouse  
D. Cách mới không thể huấn luyện mô hình  

### B. Machine Learning Concepts

**Câu 9.** Supervised Learning huấn luyện mô hình trên loại dữ liệu nào?

A. Labeled Data  
B. Unlabeled Data  
C. Dữ liệu không có thuộc tính  
D. Dữ liệu bị xóa nhãn  

**Câu 10.** Classification là bài toán gì?

A. Dự đoán nhãn danh mục  
B. Dự đoán giá trị số liên tục  
C. Phân cụm theo tương tự  
D. Tìm bản ghi dị biệt  

**Câu 11.** Regression là bài toán gì?

A. Dự đoán giá trị số liên tục  
B. Dự đoán nhãn danh mục  
C. Chỉ phát hiện outlier  
D. Chỉ gom cụm dữ liệu  

**Câu 12.** Unsupervised Learning dùng để làm gì?

A. Khám phá cấu trúc ẩn từ Unlabeled Data  
B. Huấn luyện trên nhãn đã biết  
C. Chỉ tính ROC-AUC  
D. Chỉ chạy bằng CREATE MODEL  

**Câu 13.** Clustering thuộc nhóm nào?

A. Unsupervised Learning  
B. Supervised Learning  
C. SQL DDL  
D. Model Registry  

**Câu 14.** Anomaly Detection dùng để làm gì?

A. Tìm kiếm các bản ghi dị biệt trong hệ thống  
B. Dự đoán nhãn danh mục cố định  
C. Chỉ tạo hàm UDF  
D. Chỉ phân quyền RBAC  

**Câu 15.** Trong slide, CPT+ liên quan chủ yếu đến loại bài toán nào?

A. Sequence prediction/dự đoán phần tử kế tiếp trong chuỗi  
B. Mã hóa dữ liệu trong DWH  
C. Quản lý Model Registry  
D. Hyperparameter tuning tự động  

**Câu 16.** Trong CPT+, chú ý về mẫu số trong phép ước lượng là gì?

A. Mẫu số là số nhánh chứa chuỗi hậu tố  
B. Mẫu số luôn là tổng số bảng trong DWH  
C. Mẫu số là số dòng trong Model Registry  
D. Mẫu số là số thư viện Python  

**Câu 17.** PageRank trong slide là ví dụ liên quan đến gì?

A. Tính điểm/xếp hạng nút dựa trên liên kết trong đồ thị  
B. Chuẩn hóa dữ liệu về [0,1]  
C. Huấn luyện mô hình bằng UDF  
D. Chọn feature trong Feature Store  

**Câu 18.** Vòng lặp PageRank thường dừng khi nào?

A. Khi độ chênh lệch giữa hai vòng lặp liên tiếp đạt ngưỡng epsilon  
B. Khi mọi dữ liệu bị xóa khỏi đồ thị  
C. Khi ROC-AUC bằng 0  
D. Khi không còn thư viện Python  

### C. Huấn luyện mô hình bằng SQL

**Câu 19.** BigQuery ML cho phép làm gì?

A. Xây dựng mô hình ML bằng cú pháp SQL chuẩn  
B. Chỉ viết mã Python phức tạp ngoài DWH  
C. Chỉ tạo dashboard không có mô hình  
D. Không thể dự báo trên bảng mới  

**Câu 20.** Câu lệnh `CREATE MODEL` trong BigQuery ML dùng để làm gì?

A. Khởi tạo và bắt đầu huấn luyện mô hình  
B. Trích xuất chỉ số đánh giá  
C. Gọi mô hình để dự báo  
D. Xóa Feature Store  

**Câu 21.** `ML.EVALUATE` dùng để làm gì?

A. Trích xuất chỉ số đánh giá như ROC-AUC, F1-Score  
B. Huấn luyện mô hình mới  
C. Gọi mô hình dự báo trên bảng mới  
D. Biên dịch Python thành SQL  

**Câu 22.** `ML.PREDICT` dùng để làm gì?

A. Gọi mô hình để dự báo trên dữ liệu mới  
B. Tạo Model Registry  
C. Tự động tạo Feature Store  
D. Gán quyền RBAC  

**Câu 23.** LOGISTIC_REG trong BigQuery ML thường phù hợp với loại bài toán nào?

A. Classification  
B. Clustering không giám sát  
C. Data Drift monitoring  
D. Model Registry  

**Câu 24.** LINEAR_REG trong BigQuery ML thường phù hợp với loại bài toán nào?

A. Regression  
B. Classification danh mục  
C. Anomaly Detection bằng Cortex  
D. Sandboxing Python  

**Câu 25.** Snowflake Cortex ML Functions cung cấp điều gì?

A. Các hàm học máy đóng gói sẵn, tự động tối ưu cho bài toán doanh nghiệp  
B. Chỉ công cụ vẽ dashboard  
C. Chỉ nơi lưu trữ model version  
D. Chỉ cơ chế phân quyền RBAC  

**Câu 26.** Forecasting trong Snowflake Cortex dùng cho bài toán nào?

A. Dự báo chuỗi thời gian như doanh số, tồn kho  
B. Phân quyền người dùng  
C. Xây dựng FP-tree  
D. Xóa dữ liệu nhạy cảm  

**Câu 27.** Anomaly Detection trong Snowflake Cortex dùng để làm gì?

A. Phát hiện điểm dữ liệu bất thường  
B. Tính F1-Score cho classification  
C. Tự động tạo Git repository  
D. Chỉ dự báo doanh số  

**Câu 28.** Cortex AI & LLM Integration cho phép làm gì bằng SQL?

A. Gọi LLM để tóm tắt văn bản hoặc phân tích cảm xúc từ dữ liệu text thô  
B. Chỉ copy dữ liệu ra server ngoài  
C. Không thể xử lý văn bản  
D. Chỉ chạy các phép JOIN truyền thống  

### D. Python/R trong kho dữ liệu

**Câu 29.** Snowpark là gì?

A. Thư viện API dạng DataFrame cho Python/R/Scala, thực thi bên trong Snowflake  
B. Một loại Model Registry  
C. Một metric đánh giá classification  
D. Một công cụ chỉ dùng để tạo dashboard  

**Câu 30.** Cơ chế Push-down trong Snowpark nghĩa là gì?

A. Mã Python được biên dịch thành SQL tối ưu chạy song song trong kho dữ liệu  
B. Dữ liệu thô bị đẩy ra ngoài Internet  
C. Mọi truy vấn bị chạy trên máy cá nhân  
D. Mã Python bị cấm chạy trong DWH  

**Câu 31.** Zero Data Movement trong Snowpark nhấn mạnh điều gì?

A. Không dịch chuyển dữ liệu thô ra ngoài  
B. Luôn sao chép toàn bộ dữ liệu ra máy ML riêng  
C. Không dùng Data Warehouse  
D. Không cần dữ liệu để huấn luyện  

**Câu 32.** Tích hợp Anaconda trong runtime environment giúp gì?

A. Gọi trực tiếp nhiều thư viện như scikit-learn, numpy, pandas, scipy  
B. Xóa mọi thư viện Python khỏi hệ thống  
C. Chỉ chạy SQL thuần, không có thư viện  
D. Không cho Data Scientist dùng package  

**Câu 33.** Secure Sandbox dùng để làm gì?

A. Cô lập mã Python/R an toàn, ngăn mã độc xâm nhập hạ tầng dữ liệu  
B. Cho phép mã độc truy cập bảng dữ liệu  
C. Tăng quyền admin cho mọi script  
D. Xóa toàn bộ runtime environment  

**Câu 34.** Python Worksheets hỗ trợ điều gì?

A. Viết, chạy thử và trực quan hóa mã Python trực tiếp trên Web UI của DWH  
B. Chỉ gửi email kết quả mô hình  
C. Chỉ tạo cột nhãn phân loại  
D. Chỉ quản lý Model Drift  

### E. Feature Store

**Câu 35.** Feature Engineering thường chiếm phần nào trong công việc ML?

A. Phần lớn thời gian  
B. Không đáng kể  
C. Chỉ một lần cuối khi deploy  
D. Chỉ sau khi mô hình đã production  

**Câu 36.** Nếu không quản lý feature tập trung, rủi ro nào có thể xảy ra?

A. Các phòng ban tính toán trùng lặp hoặc sai lệch logic  
B. Feature tự động nhất quán tuyệt đối  
C. Không cần lineage  
D. Không thể dùng lại feature  

**Câu 37.** Feature Store là gì?

A. Kho/thư viện tập trung quản lý, lưu trữ và phân phối feature đã tính sẵn  
B. Nơi lưu duy nhất model logs không có feature  
C. Công cụ chỉ để phân quyền RBAC  
D. Một hàm UDF dự báo  

**Câu 38.** Một lợi ích của Feature Store là Discovery, nghĩa là gì?

A. Dễ tìm và tái sử dụng đặc trưng  
B. Tự động xóa feature cũ  
C. Chỉ ẩn feature khỏi người dùng  
D. Tắt Data Lineage  

**Câu 39.** Consistency trong Feature Store giúp đảm bảo điều gì?

A. Feature được tính nhất quán giữa các đội/mô hình  
B. Mỗi đội tự tính feature theo cách khác nhau  
C. Không cần công thức tính feature  
D. Feature luôn bị thay đổi ngẫu nhiên  

**Câu 40.** Lineage trong Feature Store giúp gì?

A. Truy vết nguồn gốc dữ liệu/logic tạo feature  
B. Xóa phiên bản dữ liệu  
C. Không thể audit feature  
D. Chỉ tạo dashboard  

### F. MLOps và Model Drift

**Câu 41.** MLOps là gì?

A. Áp dụng tư duy DevOps vào ML để tự động hóa và quản lý vòng đời mô hình  
B. Chỉ là công cụ vẽ biểu đồ  
C. Chỉ là một thuật toán classification  
D. Chỉ dùng để tạo bảng SQL  

**Câu 42.** Model Registry dùng để làm gì?

A. Lưu trữ tập trung mô hình đã huấn luyện và quản lý trạng thái mô hình  
B. Lưu toàn bộ dữ liệu thô không có model  
C. Chỉ chạy Hyperparameter Tuning  
D. Chỉ phân tích sentiment  

**Câu 43.** Trạng thái mô hình trong Model Registry có thể gồm gì?

A. Đang phát triển, đã phê duyệt, đã hạ tải  
B. Chỉ có một trạng thái duy nhất là production  
C. Chỉ có trạng thái bị xóa  
D. Chỉ trạng thái raw data  

**Câu 44.** Model Versioning cần gắn phiên bản mô hình với những gì?

A. Data Version và mã nguồn tạo ra mô hình  
B. Chỉ tên người dùng cuối  
C. Chỉ màu dashboard  
D. Chỉ loại trình duyệt  

**Câu 45.** Mục tiêu của Model Versioning là gì?

A. Đảm bảo khả năng tái lập kiểm thử  
B. Làm mất dấu phiên bản mô hình  
C. Không thể rollback  
D. Không cần quản lý dữ liệu huấn luyện  

**Câu 46.** Model Drift là gì?

A. Suy giảm hiệu năng/độ chính xác mô hình sau khi đưa vào thực tế  
B. Tăng tốc tự động của DWH  
C. Việc dùng SQL để train model  
D. Tạo UDF trong DWH  

**Câu 47.** Data Drift là gì?

A. Phân phối dữ liệu đầu vào thực tế thay đổi so với dữ liệu huấn luyện  
B. Quan hệ giữa feature và nhãn thay đổi  
C. Mã Python được biên dịch thành SQL  
D. Feature được lưu vào Feature Store  

**Câu 48.** Concept Drift là gì?

A. Mối quan hệ giữa thuộc tính đầu vào và nhãn mục tiêu bị thay đổi  
B. Phân phối đầu vào thay đổi nhưng quan hệ nhãn giữ nguyên  
C. Dữ liệu không được di chuyển ra ngoài  
D. Tự động chọn thuật toán tốt nhất  

**Câu 49.** Giải pháp cho Model Drift trong slide là gì?

A. Giám sát tự động và kích hoạt Auto-retraining khi độ chính xác tụt dưới ngưỡng  
B. Không cần theo dõi mô hình sau khi deploy  
C. Xóa toàn bộ dữ liệu production  
D. Chỉ đổi tên mô hình  

### G. AutoML và UDF Deployment

**Câu 50.** AutoML là gì?

A. Tự động hóa chuỗi quy trình xây dựng mô hình ML  
B. Chỉ là một model registry  
C. Chỉ là một lệnh SELECT  
D. Chỉ là một loại dữ liệu VARIANT  

**Câu 51.** AutoML giúp giảm điều gì?

A. Thao tác thử sai lặp đi lặp lại của con người  
B. Nhu cầu đánh giá mô hình  
C. Toàn bộ dữ liệu huấn luyện  
D. Mọi kiểm soát governance  

**Câu 52.** Automated Feature Engineering trong AutoML làm gì?

A. Tự động lựa chọn và biến đổi các đặc trưng hữu ích  
B. Tự động xóa mọi feature  
C. Chỉ lưu feature vào dashboard  
D. Chỉ chạy UDF dự báo  

**Câu 53.** AutoML có thể tự động thử nghiệm điều gì?

A. Nhiều thuật toán khác nhau để chọn thuật toán tốt nhất  
B. Nhiều mật khẩu admin khác nhau  
C. Nhiều file PDF khác nhau  
D. Nhiều tên bảng ngẫu nhiên  

**Câu 54.** Hyperparameter Tuning trong AutoML nhằm mục tiêu gì?

A. Tối ưu hiệu năng mô hình  
B. Xóa dữ liệu huấn luyện  
C. Tắt Model Registry  
D. Chỉ gọi LLM qua SQL  

**Câu 55.** UDF là viết tắt của gì?

A. User-Defined Function  
B. Unified Data Factory  
C. Unlabeled Data Format  
D. Universal Drift Feature  

**Câu 56.** Triển khai mô hình dưới dạng UDF nghĩa là gì?

A. Đóng gói mô hình đã phê duyệt thành hàm tự định nghĩa ngay trong DWH  
B. Gửi mô hình ra ngoài bằng API bắt buộc  
C. Chỉ lưu mô hình trong file local  
D. Không cho người dùng gọi mô hình  

**Câu 57.** Scoring on-the-fly với UDF cho phép điều gì?

A. Dự báo thời gian thực trên từng dòng dữ liệu đang truy vấn  
B. Chỉ dự báo sau khi xuất toàn bộ dữ liệu sang CSV  
C. Không thể dùng câu lệnh SELECT  
D. Chỉ chạy batch mỗi năm  

**Câu 58.** Người dùng gọi mô hình UDF như thế nào theo slide?

A. Thực thi một câu lệnh SELECT bình thường  
B. Viết code API phức tạp bắt buộc  
C. Truy cập trực tiếp máy chủ ML vật lý  
D. Tải mô hình về máy cá nhân  

**Câu 59.** Lợi ích của đóng gói mô hình thành UDF là gì?

A. Biến mô hình ML thành lệnh SQL trực quan, dễ dùng trong DWH  
B. Làm mô hình không thể audit  
C. Tách mô hình khỏi dữ liệu và governance  
D. Không hỗ trợ dự báo thời gian thực  

**Câu 60.** Chuỗi hợp lý từ huấn luyện đến vận hành mô hình trong chương 6 là gì?

A. Huấn luyện/đánh giá, phê duyệt, đăng ký/versioning, triển khai UDF, giám sát drift  
B. Triển khai UDF trước, sau đó mới huấn luyện  
C. Xóa Feature Store, bỏ đánh giá, đưa thẳng production  
D. Chỉ tạo dashboard, không cần model lifecycle  

## Đáp án và giải thích ngắn

1. A - In-Database ML giữ dữ liệu trong DWH và đưa thuật toán đến nơi dữ liệu ở.
2. A - Cách cũ tốn băng thông, trễ và rủi ro bảo mật do di chuyển dữ liệu.
3. A - Lợi ích chính là giảm/loại chi phí và độ trễ di chuyển dữ liệu.
4. A - Dữ liệu/mô hình vẫn nằm trong vùng quản trị tập trung.
5. A - DWH có compute song song và tự mở rộng.
6. A - RBAC giúp quản lý quyền dùng mô hình như quyền dùng bảng.
7. A - Mô hình có thể gắn vào ELT pipelines hiện có.
8. A - Khác biệt lớn là data movement.
9. A - Supervised Learning cần dữ liệu có nhãn.
10. A - Classification dự đoán nhãn.
11. A - Regression dự đoán số liên tục.
12. A - Unsupervised tìm cấu trúc ẩn từ dữ liệu không nhãn.
13. A - Clustering là unsupervised.
14. A - Anomaly Detection tìm bản ghi dị biệt.
15. A - CPT+ được trình bày trong bối cảnh dự đoán chuỗi.
16. A - Slide nhấn mạnh mẫu số là số nhánh chứa hậu tố.
17. A - PageRank là xếp hạng node theo cấu trúc liên kết.
18. A - Lặp đến khi sai khác giữa hai vòng nhỏ hơn epsilon.
19. A - BigQuery ML cho phép train bằng SQL.
20. A - CREATE MODEL khởi tạo/huấn luyện.
21. A - ML.EVALUATE trả chỉ số đánh giá.
22. A - ML.PREDICT gọi mô hình để dự báo.
23. A - Logistic regression thường dùng cho classification.
24. A - Linear regression dùng cho regression.
25. A - Cortex có hàm ML đóng gói sẵn.
26. A - Forecasting dự báo chuỗi thời gian.
27. A - Anomaly Detection phát hiện điểm bất thường.
28. A - Cortex AI/LLM gọi mô hình ngôn ngữ bằng SQL.
29. A - Snowpark là API DataFrame chạy trong Snowflake.
30. A - Push-down biên dịch code thành SQL tối ưu.
31. A - Zero Data Movement là không đưa dữ liệu thô ra ngoài.
32. A - Anaconda giúp dùng thư viện phổ biến không cần cài thủ công.
33. A - Sandbox cô lập code an toàn.
34. A - Python Worksheets cho viết/chạy/visualize Python trên Web UI.
35. A - Feature Engineering thường chiếm nhiều thời gian ML.
36. A - Không quản lý tập trung dễ trùng lặp và sai logic.
37. A - Feature Store lưu và phân phối feature dùng lại.
38. A - Discovery là dễ tìm/tái sử dụng feature.
39. A - Consistency bảo đảm công thức feature thống nhất.
40. A - Lineage truy vết nguồn và logic feature.
41. A - MLOps áp dụng DevOps vào vòng đời ML.
42. A - Model Registry lưu và quản lý trạng thái mô hình.
43. A - Các trạng thái gồm phát triển, phê duyệt, hạ tải.
44. A - Versioning gắn model với data version và source code.
45. A - Mục tiêu là tái lập kiểm thử.
46. A - Model Drift là suy giảm hiệu năng sau triển khai.
47. A - Data Drift là phân phối input thay đổi.
48. A - Concept Drift là quan hệ input-label thay đổi.
49. A - Giám sát và auto-retraining khi accuracy giảm.
50. A - AutoML tự động hóa quá trình xây mô hình.
51. A - AutoML giảm thử sai thủ công.
52. A - Automated Feature Engineering chọn/biến đổi feature.
53. A - AutoML thử nhiều thuật toán.
54. A - Hyperparameter tuning tối ưu hiệu năng.
55. A - UDF là User-Defined Function.
56. A - Model được đóng gói thành hàm trong DWH.
57. A - UDF scoring trả dự báo theo từng dòng truy vấn.
58. A - Người dùng gọi qua SELECT bình thường.
59. A - UDF làm mô hình dễ dùng như SQL.
60. A - Đây là vòng đời hợp lý từ train đến deploy và monitor.
