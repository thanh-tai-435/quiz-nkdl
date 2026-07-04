# Trắc nghiệm chương 2 - Mô hình hóa dữ liệu cho Cloud Warehousing

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide2.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Kimball và Dimensional Design trong kỷ nguyên Cloud

**Câu 1.** Trong kỷ nguyên Cloud, phương pháp luận Kimball vẫn duy trì triết lý cốt lõi nào?

A. Chỉ lưu dữ liệu phi cấu trúc  
B. User-centric trong thiết kế dữ liệu  
C. Không cần xác định Grain, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Loại bỏ hoàn toàn Dimensions  

**Câu 2.** Trong quy trình Dimensional Design 4 bước, bước nào thường được xem là quan trọng nhất để bảo đảm tính chính xác của Fact Table?

A. Chỉ chọn công cụ BI  
B. Xóa toàn bộ dữ liệu lịch sử  
C. Xác định Grain của dữ liệu  
D. Chọn màu giao diện dashboard  

**Câu 3.** Grain trong thiết kế Fact Table mô tả điều gì?

A. Loại file dùng để xuất báo cáo  
B. Số lượng người dùng truy cập hệ thống  
C. Màu sắc của biểu đồ phân tích, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Mức độ chi tiết của mỗi dòng dữ liệu trong bảng Fact  

**Câu 4.** Conformed Dimensions giúp doanh nghiệp đạt mục tiêu nào?

A. Single Version of Truth trên toàn hệ thống  
B. Loại bỏ tất cả Fact Tables  
C. Tăng số lượng Join sai logic  
D. Mỗi phòng ban tự định nghĩa dữ liệu khác nhau  

**Câu 5.** Tác động của kiến trúc tách rời Compute/Storage lên thiết kế dữ liệu là gì?

A. Không thể lưu dữ liệu thô, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. Không cần chuẩn hóa quá mức chỉ để tiết kiệm dung lượng  
C. Không hỗ trợ phục hồi dữ liệu theo phiên bản  
D. Bắt buộc chuẩn hóa mọi bảng về 3NF  

**Câu 6.** Vì sao Cloud DWH thường khuyến khích sử dụng Flat Tables hoặc Wide Tables trong một số tình huống?

A. Để buộc mọi dữ liệu trở thành JSON  
B. Để ngăn BI truy vấn dữ liệu  
C. Để giảm số phép Join và tăng hiệu năng phân tích/huấn luyện  
D. Để làm mất dữ liệu lịch sử  

**Câu 7.** Denormalization trong Cloud Data Warehouse có lợi ích chính nào?

A. Chỉ phù hợp với hệ thống OLTP truyền thống  
B. Loại bỏ nhu cầu kiểm soát nhất quán dữ liệu  
C. Luôn làm dữ liệu chính xác hơn mà không cần quản trị  
D. Tận dụng columnar scanning và giảm độ phức tạp SQL  

**Câu 8.** Trong Data Mesh, tương lai của Kimball có xu hướng chuyển giao điều gì?

A. Quyền thiết kế mô hình từ IT trung tâm sang Domain  
B. Toàn bộ dữ liệu về file Excel cá nhân, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
C. Mọi Fact Table thành dữ liệu không cấu trúc  
D. Quyền truy cập dữ liệu từ Domain về duy nhất DBA  

### B. Micro-partitioning và Clustering

**Câu 9.** Micro-partitioning trong Cloud DWH chủ yếu nhằm mục tiêu nào?

A. Ngăn hệ thống dùng columnar storage  
B. Chia dữ liệu thành các phân vùng nhỏ có metadata để tối ưu quét dữ liệu  
C. Chỉ phục vụ giao dịch OLTP đơn lẻ, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Sao chép toàn bộ bảng thành nhiều bản vật lý thủ công  

**Câu 10.** Data Pruning hoạt động dựa trên ý tưởng nào?

A. Xóa dữ liệu cũ khỏi hệ thống  
B. Chỉ dùng cho dữ liệu không có metadata  
C. Bỏ qua các micro-partition không liên quan đến điều kiện truy vấn  
D. Đọc toàn bộ dữ liệu bất kể điều kiện lọc  

**Câu 11.** Clustering trong Cloud Warehouse giúp tối ưu mạnh nhất cho loại truy vấn nào?

A. Truy vấn không liên quan đến dữ liệu  
B. Truy vấn chỉ đọc metadata hệ thống  
C. Truy vấn không có điều kiện nào, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Range queries hoặc truy vấn lọc theo các cột thường dùng  

**Câu 12.** Clustering Depth đo điều gì?

A. Mức độ chồng lấn giữa các micro-partitions  
B. Số dòng bị xóa khỏi Fact Table  
C. Số lượng người dùng BI, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Số lượng bảng Dimension trong schema  

**Câu 13.** Clustering Depth càng thấp thường hàm ý điều gì?

A. Dữ liệu càng kém tổ chức  
B. Hiệu suất truy vấn càng cao  
C. Bắt buộc phải bỏ Cloud DWH  
D. Hệ thống càng khó prune dữ liệu  

**Câu 14.** Tự động Re-clustering có ý nghĩa gì?

A. Chỉ dùng để mã hóa dữ liệu  
B. Xóa toàn bộ dữ liệu không phổ biến  
C. Hệ thống tự sắp xếp lại dữ liệu ngầm mà không làm gián đoạn truy vấn  
D. Người dùng phải tắt toàn bộ kho dữ liệu để sắp xếp lại  

### C. Fact Tables nâng cao

**Câu 15.** Transaction Fact Table lưu dữ liệu ở mức nào?

A. Chỉ metadata của hệ thống, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. Chỉ dữ liệu đã được dự báo bởi AI  
C. Chỉ dữ liệu tổng hợp theo tháng  
D. Atomic level, ghi từng sự kiện riêng lẻ khi xảy ra  

**Câu 16.** Loại Fact Table nào thường có số lượng dòng lớn nhất trong kho dữ liệu?

A. Transaction Fact Table  
B. Accumulating Snapshot Fact Table  
C. Factless Fact Table luôn luôn nhỏ nhất  
D. Periodic Snapshot Fact Table  

**Câu 17.** Periodic Snapshot Fact Table phù hợp với mục tiêu nào?

A. Xử lý quan hệ nhiều-nhiều, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Lưu trạng thái của một quy trình tại các thời điểm định kỳ  
C. Chỉ lưu khóa nghiệp vụ trong Fact  
D. Chỉ ghi lại một sự kiện duy nhất khi xảy ra  

**Câu 18.** Accumulating Snapshot Fact Table dùng để làm gì?

A. Thay thế toàn bộ Dimension Tables  
B. Chỉ phục vụ truy vấn range query  
C. Theo dõi tiến độ của quy trình có nhiều giai đoạn  
D. Lưu dữ liệu web log bán cấu trúc trong một cột  

**Câu 19.** Lead time trong Accumulating Snapshot thường dùng để đo điều gì?

A. Số lần dữ liệu bị nén, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Độ sâu clustering của micro-partitions  
C. Số lượng cột trong bảng Dimension  
D. Khoảng thời gian giữa các bước của một quy trình  

**Câu 20.** Factless Fact Table dùng để lưu gì?

A. Sự kiện không có số liệu đo lường rõ ràng  
B. Chỉ dữ liệu bị lỗi, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
C. Chỉ dữ liệu JSON lồng nhau  
D. Chỉ các chỉ số KPI tổng hợp  

**Câu 21.** Bridge Table thường dùng để giải quyết vấn đề nào?

A. Mã hóa PII trong cột nhạy cảm  
B. Quan hệ nhiều-nhiều giữa Fact và Dimension  
C. Tạo Feature Store cho ML, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Data Pruning trong micro-partition  

### D. Dimension Tables và Slowly Changing Dimensions

**Câu 22.** Surrogate Key được khuyến nghị trong Dimension Table vì lý do nào?

A. Làm tăng phụ thuộc vào Natural Key  
B. Chỉ dùng để lưu dữ liệu phi cấu trúc  
C. Đảm bảo tính độc lập giữa kho dữ liệu và hệ thống nguồn  
D. Luôn thay thế mọi chỉ số kinh doanh  

**Câu 23.** Natural Key khác Surrogate Key ở điểm nào?

A. Surrogate Key luôn thay đổi theo tên khách hàng  
B. Cả hai luôn giống hệt nhau, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Natural Key luôn là số tự tăng của kho dữ liệu  
D. Natural Key đến từ nghiệp vụ/hệ thống nguồn, Surrogate Key do kho dữ liệu tạo ra  

**Câu 24.** SCD Type 1 xử lý thay đổi dữ liệu bằng cách nào?

A. Cập nhật trực tiếp và ghi đè dữ liệu cũ  
B. Kết hợp Type 1, 2 và 3  
C. Tách bảng Current và History  
D. Luôn tạo dòng lịch sử mới với Start_Date và End_Date  

**Câu 25.** SCD Type 2 thường dùng các cột nào để hỗ trợ báo cáo point-in-time?

A. Variant_Key, Json_Path, Flatten_Index  
B. Start_Date, End_Date, Is_Current  
C. Train, Validation, Test  
D. Cluster_Depth, Partition_ID, Query_ID  

**Câu 26.** SCD Type 3 lưu vết thay đổi theo cách nào?

A. Chỉ dùng cho dữ liệu streaming  
B. Lưu lịch sử trong bảng blockchain  
C. Lưu giá trị cũ/mới trong các cột riêng  
D. Xóa toàn bộ dữ liệu cũ  

**Câu 27.** SCD Type 4 có đặc điểm nào?

A. Chỉ dùng cho dữ liệu không cần lịch sử  
B. Bỏ toàn bộ bảng lịch sử, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
C. Ghi đè dữ liệu cũ trực tiếp  
D. Tách Current Table và History Table để bảng chính gọn hơn  

**Câu 28.** SCD Type 5 phù hợp để quản lý loại thuộc tính nào?

A. Rapidly Changing Attributes thông qua Mini-dimension và logic Type 1  
B. Chỉ dữ liệu đã tổng hợp ở Gold, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
C. Dữ liệu chỉ có một dòng duy nhất  
D. Thuộc tính không bao giờ thay đổi  

**Câu 29.** Junk Dimension dùng để làm gì?

A. Tách Current Table khỏi History Table, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Gom nhóm các flag và mã trạng thái rời rạc để giảm số lượng Join  
C. Tạo chỉ mục vector cho semantic search  
D. Lưu dữ liệu khách hàng dạng JSON lồng nhau  

**Câu 30.** Degenerate Dimension là gì?

A. Một loại micro-partition  
B. Dimension chỉ dùng trong tầng Bronze  
C. Khóa nghiệp vụ lưu trực tiếp trong Fact Table mà không cần bảng chiều riêng  
D. Dimension có tất cả thuộc tính Rapidly Changing  

**Câu 31.** Mini-dimension có tác dụng nào?

A. Thay thế mọi Fact Table, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Chỉ dùng cho Object Storage  
C. Xóa toàn bộ thuộc tính lịch sử  
D. Tách các thuộc tính thay đổi nhanh để tránh Dimension Table phình to  

**Câu 32.** Role-playing Dimension là gì?

A. Một Dimension Table được sử dụng cho nhiều vai trò trong cùng một Fact  
B. Một kỹ thuật flatten mảng JSON  
C. Một loại Metric Catalog, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Một Fact Table không có số đo  

### E. Medallion Architecture

**Câu 33.** Tầng Bronze trong Medallion Architecture chủ yếu làm gì?

A. Chỉ lưu dữ liệu đã được join sạch  
B. Tiếp nhận dữ liệu gốc, thô, gần như chưa biến đổi  
C. Chỉ phục vụ dashboard cuối cùng, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Chỉ chứa KPI đã phê duyệt nghiệp vụ  

**Câu 34.** Schema-on-read phù hợp nhất với tầng nào?

A. Metric Catalog  
B. Semantic Layer  
C. Bronze  
D. Gold  

**Câu 35.** Immutability ở tầng Bronze giúp ích điều gì?

A. Chỉ cho phép dữ liệu đã tổng hợp, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. Xóa dữ liệu nguồn ngay sau khi nạp  
C. Không bao giờ cần lưu metadata nạp dữ liệu  
D. Có thể reprocess dữ liệu khi logic nghiệp vụ thay đổi  

**Câu 36.** Tầng Silver có đặc điểm nào?

A. Làm sạch, chuẩn hóa, join nguồn dữ liệu và giữ atomic data đáng tin cậy  
B. Chỉ chứa dashboard và báo cáo cuối cùng  
C. Không cần kiểm tra chất lượng dữ liệu  
D. Chỉ chứa dữ liệu chưa xử lý, ma khong can metadata, catalog hoac buoc kiem chung bo sung  

**Câu 37.** Delta Lake hoặc Iceberg ở tầng Silver giúp đảm bảo điều gì?

A. Chỉ dùng để tạo biểu đồ  
B. Tính toàn vẹn dữ liệu ACID trong quá trình biến đổi  
C. Chỉ tăng số lượng bản sao dữ liệu  
D. Xóa bỏ nhu cầu schema, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 38.** Tầng Gold trong Medallion Architecture là tầng nào?

A. Tầng chỉ lưu log ingestion  
B. Tầng chỉ chứa dữ liệu lỗi  
C. Consumption Layer, sẵn sàng cho quyết định và BI  
D. Raw Layer chứa dữ liệu thô  

**Câu 39.** Dữ liệu tầng Gold thường được tổ chức theo mô hình nào?

A. Chỉ bảng tạm không phê duyệt  
B. Chỉ key-value không có schema  
C. Chỉ file nhị phân không truy vấn được  
D. Star Schema hoặc Wide Tables  

**Câu 40.** Data Mart ở tầng Gold giúp gì?

A. Thiết kế riêng cho bộ phận chuyên môn để tăng tốc phản hồi người dùng cuối  
B. Chỉ lưu dữ liệu Bronze gốc, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
C. Thay thế hoàn toàn Feature Store  
D. Làm dữ liệu mất tính thống nhất  

### F. Semantic Layer và Metric Catalog

**Câu 41.** Semantic Layer trong Data Lakehouse đóng vai trò gì?

A. Bảng lịch sử cho SCD Type 4  
B. Lớp trung gian trừu tượng hóa cấu trúc dữ liệu vật lý cho người dùng kinh doanh  
C. Công cụ xóa metadata, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Nơi lưu duy nhất dữ liệu thô từ API  

**Câu 42.** Semantic Layer giúp giảm rủi ro nào?

A. Không thể tạo KPI  
B. Không thể phân quyền dữ liệu  
C. Người dùng tự Join sai logic hoặc hiểu sai tên bảng/cột kỹ thuật  
D. Dữ liệu luôn bị mất trong tầng Bronze  

**Câu 43.** Silo logic xảy ra khi nào?

A. Người dùng chỉ xem một dashboard duy nhất  
B. Data Catalog có đầy đủ lineage, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Mọi chỉ số được định nghĩa tập trung  
D. Mỗi công cụ BI hoặc phòng ban có cách tính chỉ số khác nhau  

**Câu 44.** Metric Catalog tập trung có chức năng chính nào?

A. Định nghĩa công thức tính toán mọi chỉ số kinh doanh tại một nơi duy nhất  
B. Chỉ dùng để tạo khóa Surrogate  
C. Thay thế toàn bộ Fact Tables, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
D. Chỉ lưu dữ liệu thô chưa làm sạch  

**Câu 45.** Lineage trong Metric Catalog giúp gì?

A. Giấu công thức tính toán khỏi người dùng  
B. Truy vết chỉ số từ báo cáo cuối cùng ngược về bảng dữ liệu gốc  
C. Tự động chuyển JSON thành video  
D. Xóa lịch sử thay đổi chỉ số, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  

**Câu 46.** Semantic Layer hỗ trợ AI Agents bằng cách nào?

A. Chỉ cho phép truy vấn thủ công bằng Excel  
B. Loại bỏ metadata ngữ nghĩa  
C. Cung cấp bản đồ tri thức để AI hiểu cấu trúc và ý nghĩa dữ liệu doanh nghiệp  
D. Buộc AI trả lời không cần dữ liệu nội bộ  

**Câu 47.** RAG trong Semantic Layer giúp giảm hiện tượng nào của AI?

A. Clustering Depth  
B. Schema Drift, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
C. Data Pruning  
D. Hallucination/ảo tưởng khi trả lời về số liệu  

### G. Semi-structured Data, VARIANT và Materialization

**Câu 48.** Dữ liệu bán cấu trúc hiện đại thường có dạng nào?

A. JSON, Parquet, nested arrays và key-value linh hoạt  
B. Chỉ ảnh không có metadata, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
C. Chỉ dữ liệu tổng hợp theo tháng  
D. Chỉ bảng quan hệ cố định tuyệt đối  

**Câu 49.** Schema Drift gây khó khăn vì lý do nào?

A. Là chỉ số đo clustering, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Cấu trúc dữ liệu thay đổi, khó duy trì bảng quan hệ truyền thống  
C. Dữ liệu không bao giờ thay đổi cấu trúc  
D. Chỉ xảy ra ở dữ liệu đã tổng hợp Gold  

**Câu 50.** Kiểu dữ liệu VARIANT cho phép điều gì?

A. Chỉ lưu số nguyên làm khóa Dimension  
B. Xóa bỏ khả năng truy vấn dữ liệu lồng nhau  
C. Lưu toàn bộ tài liệu bán cấu trúc trong một cột duy nhất  
D. Chỉ lưu KPI đã phê duyệt  

**Câu 51.** Flattening dùng để làm gì?

A. Ghi đè dữ liệu lịch sử trong SCD Type 1  
B. Tạo khóa Surrogate cho Dimension  
C. Tính Clustering Depth, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Chuyển mảng lồng nhau thành các dòng dữ liệu riêng biệt để phân tích  

**Câu 52.** Một lợi ích của truy vấn VARIANT trong Cloud DW là gì?

A. Có thể Join dữ liệu bán cấu trúc với dữ liệu quan hệ trong cùng câu SQL  
B. Không thể truy cập trường lồng nhau  
C. Không tận dụng được metadata, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Bắt buộc ETL toàn bộ trước khi nạp  

**Câu 53.** Khi một trường trong cột VARIANT được truy vấn thường xuyên, chiến lược tốt là gì?

A. Không cho người dùng truy vấn nữa  
B. Materialize thành cột vật lý riêng  
C. Xóa trường đó khỏi dữ liệu, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Đưa toàn bộ bảng về Bronze  

**Câu 54.** Virtual Views trong xử lý VARIANT có vai trò gì?

A. Sao chép vật lý toàn bộ dữ liệu mỗi lần truy vấn  
B. Chỉ dùng cho SCD Type 2  
C. Cung cấp giao diện bảng quan hệ mà không cần thay đổi lưu trữ gốc  
D. Xóa bỏ dữ liệu bán cấu trúc  

### H. Schema cho Data Mining và huấn luyện AI

**Câu 55.** BI Schema và AI Schema khác nhau ở điểm nào?

A. BI không bao giờ dùng KPI, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. AI chỉ cần dữ liệu tổng hợp, BI cần dữ liệu raw nhất  
C. Cả hai luôn giống nhau hoàn toàn  
D. BI tập trung tóm tắt xu hướng, AI cần dữ liệu chi tiết để học đặc trưng  

**Câu 56.** Vì sao huấn luyện AI thường ưu tiên Wide Tables?

A. Giảm chi phí Join khi huấn luyện mô hình  
B. Chỉ phục vụ báo cáo tĩnh, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
C. Bắt buộc dữ liệu mất hết ngữ cảnh  
D. Không thể lưu thêm feature mới  

**Câu 57.** Lưu dữ liệu theo Time-series giúp mô hình AI học gì?

A. Màu sắc biểu đồ dashboard  
B. Chuỗi hành vi của thực thể theo thời gian  
C. Chỉ metadata ingestion, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
D. Chỉ số Clustering Depth  

**Câu 58.** Feature Engineering trực tiếp tại Lakehouse có lợi ích nào?

A. Không dùng được SQL chuẩn  
B. Buộc xuất toàn bộ dữ liệu sang Python trước mọi xử lý  
C. Tính feature phức tạp ngay tại nơi lưu trữ, giảm di chuyển dữ liệu lớn  
D. Làm sai khác logic giữa lúc học và lúc dự báo  

**Câu 59.** Point-in-time Correctness nhằm tránh vấn đề nào?

A. Schema Drift trong JSON  
B. Natural Key trong Dimension  
C. Clustering Depth thấp, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Data Leakage, tức mô hình dùng thông tin chưa tồn tại tại thời điểm dự báo  

**Câu 60.** Feature Store trong bối cảnh AI Schema có vai trò gì?

A. Quản lý phiên bản và chia sẻ đặc trưng giữa các đội phát triển AI  
B. Thay thế hoàn toàn Semantic Layer  
C. Chỉ là nơi lưu raw log không biến đổi  
D. Chỉ dùng để xóa dữ liệu lịch sử, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  

## Đáp án và giải thích ngắn

1. B - Kimball vẫn giữ tư duy thiết kế hướng người dùng/nghiệp vụ.
2. C - Grain quyết định mỗi dòng Fact biểu diễn mức chi tiết nào.
3. D - Grain là độ chi tiết của sự kiện/số đo trong Fact Table.
4. A - Conformed Dimensions giúp thống nhất cách hiểu dữ liệu toàn doanh nghiệp.
5. B - Cloud storage rẻ và compute tách rời làm giảm áp lực chuẩn hóa quá mức.
6. C - Flat/Wide Tables giảm Join, có lợi cho BI và AI.
7. D - Denormalization tận dụng quét cột và làm SQL đơn giản hơn.
8. A - Data Mesh trao quyền mô hình hóa cho các domain nghiệp vụ.
9. B - Micro-partitioning chia dữ liệu nhỏ kèm metadata để tối ưu truy vấn.
10. C - Data Pruning bỏ qua phân vùng không liên quan.
11. D - Clustering hữu ích với range/filter queries.
12. A - Clustering Depth đo độ chồng lấn giữa các micro-partitions.
13. B - Depth thấp nghĩa là dữ liệu tổ chức tốt, prune hiệu quả.
14. C - Auto re-clustering tự sắp xếp lại dữ liệu nền.
15. D - Transaction Fact ghi sự kiện ở mức atomic.
16. A - Vì ghi từng sự kiện nên Transaction Fact thường nhiều dòng nhất.
17. B - Periodic Snapshot lưu trạng thái định kỳ.
18. C - Accumulating Snapshot theo dõi quy trình nhiều bước.
19. D - Lead time là thời gian giữa các bước xử lý.
20. A - Factless Fact lưu sự kiện không có measure rõ ràng.
21. B - Bridge Table xử lý quan hệ nhiều-nhiều.
22. C - Surrogate Key tách kho dữ liệu khỏi biến động khóa nguồn.
23. D - Natural Key đến từ hệ thống nguồn, Surrogate Key do DWH sinh ra.
24. A - Type 1 ghi đè, không giữ lịch sử.
25. B - Type 2 dùng Start_Date, End_Date, Is_Current cho lịch sử.
26. C - Type 3 giữ giá trị cũ/mới ở các cột riêng.
27. D - Type 4 tách bảng hiện tại và bảng lịch sử.
28. A - Type 5 hỗ trợ thuộc tính thay đổi nhanh.
29. B - Junk Dimension gom cờ/trạng thái nhỏ để giảm Join.
30. C - Degenerate Dimension là khóa nghiệp vụ nằm trong Fact.
31. D - Mini-dimension tách thuộc tính thay đổi nhanh.
32. A - Role-playing Dimension là một bảng chiều dùng nhiều vai trò.
33. B - Bronze là điểm đổ bộ dữ liệu thô.
34. C - Schema-on-read phù hợp với dữ liệu thô ở Bronze.
35. D - Immutability giúp tái xử lý khi logic thay đổi.
36. A - Silver làm sạch, chuẩn hóa, tích hợp nhưng vẫn giữ độ chi tiết.
37. B - Delta/Iceberg hỗ trợ ACID trong biến đổi dữ liệu.
38. C - Gold là Consumption Layer cho BI/quyết định.
39. D - Gold thường dùng Star Schema hoặc Wide Tables.
40. A - Data Mart tối ưu cho nhu cầu từng bộ phận.
41. B - Semantic Layer che giấu phức tạp kỹ thuật cho người dùng kinh doanh.
42. C - Nó giảm rủi ro hiểu sai dữ liệu và Join sai.
43. D - Silo logic là mỗi nơi tính chỉ số một kiểu.
44. A - Metric Catalog định nghĩa metric tập trung.
45. B - Lineage truy vết metric về dữ liệu gốc.
46. C - Semantic Layer là bản đồ tri thức cho AI Agents.
47. D - RAG giúp AI trả lời dựa trên dữ liệu có kiểm chứng, giảm hallucination.
48. A - Semi-structured data thường là JSON/Parquet với nested arrays/key-value.
49. B - Schema Drift làm cấu trúc thay đổi khó cố định schema quan hệ.
50. C - VARIANT lưu tài liệu bán cấu trúc trong một cột.
51. D - Flattening biến mảng lồng nhau thành dòng riêng.
52. A - Cloud DW cho phép join bán cấu trúc và quan hệ bằng SQL.
53. B - Trường truy vấn nhiều nên materialize để tăng tốc.
54. C - Virtual Views cho người dùng thấy dạng bảng mà không đổi storage gốc.
55. D - BI tóm tắt xu hướng, AI cần chi tiết để học.
56. A - Wide Tables giảm Join khi train model.
57. B - Time-series giúp AI học chuỗi hành vi.
58. C - Feature Engineering tại Lakehouse giảm di chuyển dữ liệu và tận dụng compute.
59. D - Point-in-time Correctness tránh data leakage.
60. A - Feature Store quản lý phiên bản, chia sẻ và tái sử dụng feature.

