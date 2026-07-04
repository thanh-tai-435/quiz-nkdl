# Trắc nghiệm chương 2 - Mô hình hóa dữ liệu cho Cloud Warehousing

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide2.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Kimball và Dimensional Design trong kỷ nguyên Cloud

**Câu 1.** Trong kỷ nguyên Cloud, phương pháp luận Kimball vẫn duy trì triết lý cốt lõi nào?

A. User-centric trong thiết kế dữ liệu  
B. Loại bỏ hoàn toàn Dimensions  
C. Chỉ lưu dữ liệu phi cấu trúc  
D. Không cần xác định Grain  

**Câu 2.** Trong quy trình Dimensional Design 4 bước, bước nào thường được xem là quan trọng nhất để bảo đảm tính chính xác của Fact Table?

A. Chọn màu giao diện dashboard  
B. Xác định Grain của dữ liệu  
C. Xóa toàn bộ dữ liệu lịch sử  
D. Chỉ chọn công cụ BI  

**Câu 3.** Grain trong thiết kế Fact Table mô tả điều gì?

A. Mức độ chi tiết của mỗi dòng dữ liệu trong bảng Fact  
B. Màu sắc của biểu đồ phân tích  
C. Loại file dùng để xuất báo cáo  
D. Số lượng người dùng truy cập hệ thống  

**Câu 4.** Conformed Dimensions giúp doanh nghiệp đạt mục tiêu nào?

A. Single Version of Truth trên toàn hệ thống  
B. Mỗi phòng ban tự định nghĩa dữ liệu khác nhau  
C. Tăng số lượng Join sai logic  
D. Loại bỏ tất cả Fact Tables  

**Câu 5.** Tác động của kiến trúc tách rời Compute/Storage lên thiết kế dữ liệu là gì?

A. Không cần chuẩn hóa quá mức chỉ để tiết kiệm dung lượng  
B. Bắt buộc chuẩn hóa mọi bảng về 3NF  
C. Không thể lưu dữ liệu thô  
D. Không hỗ trợ phục hồi dữ liệu theo phiên bản  

**Câu 6.** Vì sao Cloud DWH thường khuyến khích sử dụng Flat Tables hoặc Wide Tables trong một số tình huống?

A. Để giảm số phép Join và tăng hiệu năng phân tích/huấn luyện  
B. Để làm mất dữ liệu lịch sử  
C. Để ngăn BI truy vấn dữ liệu  
D. Để buộc mọi dữ liệu trở thành JSON  

**Câu 7.** Denormalization trong Cloud Data Warehouse có lợi ích chính nào?

A. Tận dụng columnar scanning và giảm độ phức tạp SQL  
B. Luôn làm dữ liệu chính xác hơn mà không cần quản trị  
C. Chỉ phù hợp với hệ thống OLTP truyền thống  
D. Loại bỏ nhu cầu kiểm soát nhất quán dữ liệu  

**Câu 8.** Trong Data Mesh, tương lai của Kimball có xu hướng chuyển giao điều gì?

A. Quyền thiết kế mô hình từ IT trung tâm sang Domain  
B. Quyền truy cập dữ liệu từ Domain về duy nhất DBA  
C. Toàn bộ dữ liệu về file Excel cá nhân  
D. Mọi Fact Table thành dữ liệu không cấu trúc  

### B. Micro-partitioning và Clustering

**Câu 9.** Micro-partitioning trong Cloud DWH chủ yếu nhằm mục tiêu nào?

A. Chia dữ liệu thành các phân vùng nhỏ có metadata để tối ưu quét dữ liệu  
B. Sao chép toàn bộ bảng thành nhiều bản vật lý thủ công  
C. Chỉ phục vụ giao dịch OLTP đơn lẻ  
D. Ngăn hệ thống dùng columnar storage  

**Câu 10.** Data Pruning hoạt động dựa trên ý tưởng nào?

A. Bỏ qua các micro-partition không liên quan đến điều kiện truy vấn  
B. Đọc toàn bộ dữ liệu bất kể điều kiện lọc  
C. Xóa dữ liệu cũ khỏi hệ thống  
D. Chỉ dùng cho dữ liệu không có metadata  

**Câu 11.** Clustering trong Cloud Warehouse giúp tối ưu mạnh nhất cho loại truy vấn nào?

A. Range queries hoặc truy vấn lọc theo các cột thường dùng  
B. Truy vấn không có điều kiện nào  
C. Truy vấn chỉ đọc metadata hệ thống  
D. Truy vấn không liên quan đến dữ liệu  

**Câu 12.** Clustering Depth đo điều gì?

A. Mức độ chồng lấn giữa các micro-partitions  
B. Số lượng bảng Dimension trong schema  
C. Số dòng bị xóa khỏi Fact Table  
D. Số lượng người dùng BI  

**Câu 13.** Clustering Depth càng thấp thường hàm ý điều gì?

A. Hiệu suất truy vấn càng cao  
B. Hệ thống càng khó prune dữ liệu  
C. Bắt buộc phải bỏ Cloud DWH  
D. Dữ liệu càng kém tổ chức  

**Câu 14.** Tự động Re-clustering có ý nghĩa gì?

A. Hệ thống tự sắp xếp lại dữ liệu ngầm mà không làm gián đoạn truy vấn  
B. Người dùng phải tắt toàn bộ kho dữ liệu để sắp xếp lại  
C. Chỉ dùng để mã hóa dữ liệu  
D. Xóa toàn bộ dữ liệu không phổ biến  

### C. Fact Tables nâng cao

**Câu 15.** Transaction Fact Table lưu dữ liệu ở mức nào?

A. Atomic level, ghi từng sự kiện riêng lẻ khi xảy ra  
B. Chỉ dữ liệu tổng hợp theo tháng  
C. Chỉ dữ liệu đã được dự báo bởi AI  
D. Chỉ metadata của hệ thống  

**Câu 16.** Loại Fact Table nào thường có số lượng dòng lớn nhất trong kho dữ liệu?

A. Transaction Fact Table  
B. Periodic Snapshot Fact Table  
C. Accumulating Snapshot Fact Table  
D. Factless Fact Table luôn luôn nhỏ nhất  

**Câu 17.** Periodic Snapshot Fact Table phù hợp với mục tiêu nào?

A. Lưu trạng thái của một quy trình tại các thời điểm định kỳ  
B. Chỉ ghi lại một sự kiện duy nhất khi xảy ra  
C. Chỉ lưu khóa nghiệp vụ trong Fact  
D. Xử lý quan hệ nhiều-nhiều  

**Câu 18.** Accumulating Snapshot Fact Table dùng để làm gì?

A. Theo dõi tiến độ của quy trình có nhiều giai đoạn  
B. Lưu dữ liệu web log bán cấu trúc trong một cột  
C. Thay thế toàn bộ Dimension Tables  
D. Chỉ phục vụ truy vấn range query  

**Câu 19.** Lead time trong Accumulating Snapshot thường dùng để đo điều gì?

A. Khoảng thời gian giữa các bước của một quy trình  
B. Số lượng cột trong bảng Dimension  
C. Độ sâu clustering của micro-partitions  
D. Số lần dữ liệu bị nén  

**Câu 20.** Factless Fact Table dùng để lưu gì?

A. Sự kiện không có số liệu đo lường rõ ràng  
B. Chỉ các chỉ số KPI tổng hợp  
C. Chỉ dữ liệu JSON lồng nhau  
D. Chỉ dữ liệu bị lỗi  

**Câu 21.** Bridge Table thường dùng để giải quyết vấn đề nào?

A. Quan hệ nhiều-nhiều giữa Fact và Dimension  
B. Data Pruning trong micro-partition  
C. Mã hóa PII trong cột nhạy cảm  
D. Tạo Feature Store cho ML  

### D. Dimension Tables và Slowly Changing Dimensions

**Câu 22.** Surrogate Key được khuyến nghị trong Dimension Table vì lý do nào?

A. Đảm bảo tính độc lập giữa kho dữ liệu và hệ thống nguồn  
B. Luôn thay thế mọi chỉ số kinh doanh  
C. Chỉ dùng để lưu dữ liệu phi cấu trúc  
D. Làm tăng phụ thuộc vào Natural Key  

**Câu 23.** Natural Key khác Surrogate Key ở điểm nào?

A. Natural Key đến từ nghiệp vụ/hệ thống nguồn, Surrogate Key do kho dữ liệu tạo ra  
B. Natural Key luôn là số tự tăng của kho dữ liệu  
C. Surrogate Key luôn thay đổi theo tên khách hàng  
D. Cả hai luôn giống hệt nhau  

**Câu 24.** SCD Type 1 xử lý thay đổi dữ liệu bằng cách nào?

A. Cập nhật trực tiếp và ghi đè dữ liệu cũ  
B. Luôn tạo dòng lịch sử mới với Start_Date và End_Date  
C. Tách bảng Current và History  
D. Kết hợp Type 1, 2 và 3  

**Câu 25.** SCD Type 2 thường dùng các cột nào để hỗ trợ báo cáo point-in-time?

A. Start_Date, End_Date, Is_Current  
B. Cluster_Depth, Partition_ID, Query_ID  
C. Variant_Key, Json_Path, Flatten_Index  
D. Train, Validation, Test  

**Câu 26.** SCD Type 3 lưu vết thay đổi theo cách nào?

A. Lưu giá trị cũ/mới trong các cột riêng  
B. Xóa toàn bộ dữ liệu cũ  
C. Lưu lịch sử trong bảng blockchain  
D. Chỉ dùng cho dữ liệu streaming  

**Câu 27.** SCD Type 4 có đặc điểm nào?

A. Tách Current Table và History Table để bảng chính gọn hơn  
B. Ghi đè dữ liệu cũ trực tiếp  
C. Chỉ dùng cho dữ liệu không cần lịch sử  
D. Bỏ toàn bộ bảng lịch sử  

**Câu 28.** SCD Type 5 phù hợp để quản lý loại thuộc tính nào?

A. Rapidly Changing Attributes thông qua Mini-dimension và logic Type 1  
B. Thuộc tính không bao giờ thay đổi  
C. Dữ liệu chỉ có một dòng duy nhất  
D. Chỉ dữ liệu đã tổng hợp ở Gold  

**Câu 29.** Junk Dimension dùng để làm gì?

A. Gom nhóm các flag và mã trạng thái rời rạc để giảm số lượng Join  
B. Lưu dữ liệu khách hàng dạng JSON lồng nhau  
C. Tách Current Table khỏi History Table  
D. Tạo chỉ mục vector cho semantic search  

**Câu 30.** Degenerate Dimension là gì?

A. Khóa nghiệp vụ lưu trực tiếp trong Fact Table mà không cần bảng chiều riêng  
B. Dimension có tất cả thuộc tính Rapidly Changing  
C. Dimension chỉ dùng trong tầng Bronze  
D. Một loại micro-partition  

**Câu 31.** Mini-dimension có tác dụng nào?

A. Tách các thuộc tính thay đổi nhanh để tránh Dimension Table phình to  
B. Xóa toàn bộ thuộc tính lịch sử  
C. Thay thế mọi Fact Table  
D. Chỉ dùng cho Object Storage  

**Câu 32.** Role-playing Dimension là gì?

A. Một Dimension Table được sử dụng cho nhiều vai trò trong cùng một Fact  
B. Một Fact Table không có số đo  
C. Một kỹ thuật flatten mảng JSON  
D. Một loại Metric Catalog  

### E. Medallion Architecture

**Câu 33.** Tầng Bronze trong Medallion Architecture chủ yếu làm gì?

A. Tiếp nhận dữ liệu gốc, thô, gần như chưa biến đổi  
B. Chỉ chứa KPI đã phê duyệt nghiệp vụ  
C. Chỉ phục vụ dashboard cuối cùng  
D. Chỉ lưu dữ liệu đã được join sạch  

**Câu 34.** Schema-on-read phù hợp nhất với tầng nào?

A. Bronze  
B. Gold  
C. Metric Catalog  
D. Semantic Layer  

**Câu 35.** Immutability ở tầng Bronze giúp ích điều gì?

A. Có thể reprocess dữ liệu khi logic nghiệp vụ thay đổi  
B. Không bao giờ cần lưu metadata nạp dữ liệu  
C. Xóa dữ liệu nguồn ngay sau khi nạp  
D. Chỉ cho phép dữ liệu đã tổng hợp  

**Câu 36.** Tầng Silver có đặc điểm nào?

A. Làm sạch, chuẩn hóa, join nguồn dữ liệu và giữ atomic data đáng tin cậy  
B. Chỉ chứa dữ liệu chưa xử lý  
C. Chỉ chứa dashboard và báo cáo cuối cùng  
D. Không cần kiểm tra chất lượng dữ liệu  

**Câu 37.** Delta Lake hoặc Iceberg ở tầng Silver giúp đảm bảo điều gì?

A. Tính toàn vẹn dữ liệu ACID trong quá trình biến đổi  
B. Xóa bỏ nhu cầu schema  
C. Chỉ tăng số lượng bản sao dữ liệu  
D. Chỉ dùng để tạo biểu đồ  

**Câu 38.** Tầng Gold trong Medallion Architecture là tầng nào?

A. Consumption Layer, sẵn sàng cho quyết định và BI  
B. Raw Layer chứa dữ liệu thô  
C. Tầng chỉ lưu log ingestion  
D. Tầng chỉ chứa dữ liệu lỗi  

**Câu 39.** Dữ liệu tầng Gold thường được tổ chức theo mô hình nào?

A. Star Schema hoặc Wide Tables  
B. Chỉ file nhị phân không truy vấn được  
C. Chỉ key-value không có schema  
D. Chỉ bảng tạm không phê duyệt  

**Câu 40.** Data Mart ở tầng Gold giúp gì?

A. Thiết kế riêng cho bộ phận chuyên môn để tăng tốc phản hồi người dùng cuối  
B. Làm dữ liệu mất tính thống nhất  
C. Chỉ lưu dữ liệu Bronze gốc  
D. Thay thế hoàn toàn Feature Store  

### F. Semantic Layer và Metric Catalog

**Câu 41.** Semantic Layer trong Data Lakehouse đóng vai trò gì?

A. Lớp trung gian trừu tượng hóa cấu trúc dữ liệu vật lý cho người dùng kinh doanh  
B. Nơi lưu duy nhất dữ liệu thô từ API  
C. Công cụ xóa metadata  
D. Bảng lịch sử cho SCD Type 4  

**Câu 42.** Semantic Layer giúp giảm rủi ro nào?

A. Người dùng tự Join sai logic hoặc hiểu sai tên bảng/cột kỹ thuật  
B. Dữ liệu luôn bị mất trong tầng Bronze  
C. Không thể tạo KPI  
D. Không thể phân quyền dữ liệu  

**Câu 43.** Silo logic xảy ra khi nào?

A. Mỗi công cụ BI hoặc phòng ban có cách tính chỉ số khác nhau  
B. Mọi chỉ số được định nghĩa tập trung  
C. Data Catalog có đầy đủ lineage  
D. Người dùng chỉ xem một dashboard duy nhất  

**Câu 44.** Metric Catalog tập trung có chức năng chính nào?

A. Định nghĩa công thức tính toán mọi chỉ số kinh doanh tại một nơi duy nhất  
B. Chỉ lưu dữ liệu thô chưa làm sạch  
C. Thay thế toàn bộ Fact Tables  
D. Chỉ dùng để tạo khóa Surrogate  

**Câu 45.** Lineage trong Metric Catalog giúp gì?

A. Truy vết chỉ số từ báo cáo cuối cùng ngược về bảng dữ liệu gốc  
B. Xóa lịch sử thay đổi chỉ số  
C. Giấu công thức tính toán khỏi người dùng  
D. Tự động chuyển JSON thành video  

**Câu 46.** Semantic Layer hỗ trợ AI Agents bằng cách nào?

A. Cung cấp bản đồ tri thức để AI hiểu cấu trúc và ý nghĩa dữ liệu doanh nghiệp  
B. Buộc AI trả lời không cần dữ liệu nội bộ  
C. Loại bỏ metadata ngữ nghĩa  
D. Chỉ cho phép truy vấn thủ công bằng Excel  

**Câu 47.** RAG trong Semantic Layer giúp giảm hiện tượng nào của AI?

A. Hallucination/ảo tưởng khi trả lời về số liệu  
B. Data Pruning  
C. Clustering Depth  
D. Schema Drift  

### G. Semi-structured Data, VARIANT và Materialization

**Câu 48.** Dữ liệu bán cấu trúc hiện đại thường có dạng nào?

A. JSON, Parquet, nested arrays và key-value linh hoạt  
B. Chỉ bảng quan hệ cố định tuyệt đối  
C. Chỉ dữ liệu tổng hợp theo tháng  
D. Chỉ ảnh không có metadata  

**Câu 49.** Schema Drift gây khó khăn vì lý do nào?

A. Cấu trúc dữ liệu thay đổi, khó duy trì bảng quan hệ truyền thống  
B. Dữ liệu không bao giờ thay đổi cấu trúc  
C. Chỉ xảy ra ở dữ liệu đã tổng hợp Gold  
D. Là chỉ số đo clustering  

**Câu 50.** Kiểu dữ liệu VARIANT cho phép điều gì?

A. Lưu toàn bộ tài liệu bán cấu trúc trong một cột duy nhất  
B. Chỉ lưu số nguyên làm khóa Dimension  
C. Chỉ lưu KPI đã phê duyệt  
D. Xóa bỏ khả năng truy vấn dữ liệu lồng nhau  

**Câu 51.** Flattening dùng để làm gì?

A. Chuyển mảng lồng nhau thành các dòng dữ liệu riêng biệt để phân tích  
B. Tạo khóa Surrogate cho Dimension  
C. Tính Clustering Depth  
D. Ghi đè dữ liệu lịch sử trong SCD Type 1  

**Câu 52.** Một lợi ích của truy vấn VARIANT trong Cloud DW là gì?

A. Có thể Join dữ liệu bán cấu trúc với dữ liệu quan hệ trong cùng câu SQL  
B. Không thể truy cập trường lồng nhau  
C. Bắt buộc ETL toàn bộ trước khi nạp  
D. Không tận dụng được metadata  

**Câu 53.** Khi một trường trong cột VARIANT được truy vấn thường xuyên, chiến lược tốt là gì?

A. Materialize thành cột vật lý riêng  
B. Xóa trường đó khỏi dữ liệu  
C. Đưa toàn bộ bảng về Bronze  
D. Không cho người dùng truy vấn nữa  

**Câu 54.** Virtual Views trong xử lý VARIANT có vai trò gì?

A. Cung cấp giao diện bảng quan hệ mà không cần thay đổi lưu trữ gốc  
B. Sao chép vật lý toàn bộ dữ liệu mỗi lần truy vấn  
C. Xóa bỏ dữ liệu bán cấu trúc  
D. Chỉ dùng cho SCD Type 2  

### H. Schema cho Data Mining và huấn luyện AI

**Câu 55.** BI Schema và AI Schema khác nhau ở điểm nào?

A. BI tập trung tóm tắt xu hướng, AI cần dữ liệu chi tiết để học đặc trưng  
B. AI chỉ cần dữ liệu tổng hợp, BI cần dữ liệu raw nhất  
C. Cả hai luôn giống nhau hoàn toàn  
D. BI không bao giờ dùng KPI  

**Câu 56.** Vì sao huấn luyện AI thường ưu tiên Wide Tables?

A. Giảm chi phí Join khi huấn luyện mô hình  
B. Bắt buộc dữ liệu mất hết ngữ cảnh  
C. Không thể lưu thêm feature mới  
D. Chỉ phục vụ báo cáo tĩnh  

**Câu 57.** Lưu dữ liệu theo Time-series giúp mô hình AI học gì?

A. Chuỗi hành vi của thực thể theo thời gian  
B. Màu sắc biểu đồ dashboard  
C. Chỉ số Clustering Depth  
D. Chỉ metadata ingestion  

**Câu 58.** Feature Engineering trực tiếp tại Lakehouse có lợi ích nào?

A. Tính feature phức tạp ngay tại nơi lưu trữ, giảm di chuyển dữ liệu lớn  
B. Buộc xuất toàn bộ dữ liệu sang Python trước mọi xử lý  
C. Làm sai khác logic giữa lúc học và lúc dự báo  
D. Không dùng được SQL chuẩn  

**Câu 59.** Point-in-time Correctness nhằm tránh vấn đề nào?

A. Data Leakage, tức mô hình dùng thông tin chưa tồn tại tại thời điểm dự báo  
B. Schema Drift trong JSON  
C. Clustering Depth thấp  
D. Natural Key trong Dimension  

**Câu 60.** Feature Store trong bối cảnh AI Schema có vai trò gì?

A. Quản lý phiên bản và chia sẻ đặc trưng giữa các đội phát triển AI  
B. Chỉ là nơi lưu raw log không biến đổi  
C. Chỉ dùng để xóa dữ liệu lịch sử  
D. Thay thế hoàn toàn Semantic Layer  

## Đáp án và giải thích ngắn

1. A - Kimball vẫn giữ tư duy thiết kế hướng người dùng/nghiệp vụ.
2. B - Grain quyết định mỗi dòng Fact biểu diễn mức chi tiết nào.
3. A - Grain là độ chi tiết của sự kiện/số đo trong Fact Table.
4. A - Conformed Dimensions giúp thống nhất cách hiểu dữ liệu toàn doanh nghiệp.
5. A - Cloud storage rẻ và compute tách rời làm giảm áp lực chuẩn hóa quá mức.
6. A - Flat/Wide Tables giảm Join, có lợi cho BI và AI.
7. A - Denormalization tận dụng quét cột và làm SQL đơn giản hơn.
8. A - Data Mesh trao quyền mô hình hóa cho các domain nghiệp vụ.
9. A - Micro-partitioning chia dữ liệu nhỏ kèm metadata để tối ưu truy vấn.
10. A - Data Pruning bỏ qua phân vùng không liên quan.
11. A - Clustering hữu ích với range/filter queries.
12. A - Clustering Depth đo độ chồng lấn giữa các micro-partitions.
13. A - Depth thấp nghĩa là dữ liệu tổ chức tốt, prune hiệu quả.
14. A - Auto re-clustering tự sắp xếp lại dữ liệu nền.
15. A - Transaction Fact ghi sự kiện ở mức atomic.
16. A - Vì ghi từng sự kiện nên Transaction Fact thường nhiều dòng nhất.
17. A - Periodic Snapshot lưu trạng thái định kỳ.
18. A - Accumulating Snapshot theo dõi quy trình nhiều bước.
19. A - Lead time là thời gian giữa các bước xử lý.
20. A - Factless Fact lưu sự kiện không có measure rõ ràng.
21. A - Bridge Table xử lý quan hệ nhiều-nhiều.
22. A - Surrogate Key tách kho dữ liệu khỏi biến động khóa nguồn.
23. A - Natural Key đến từ hệ thống nguồn, Surrogate Key do DWH sinh ra.
24. A - Type 1 ghi đè, không giữ lịch sử.
25. A - Type 2 dùng Start_Date, End_Date, Is_Current cho lịch sử.
26. A - Type 3 giữ giá trị cũ/mới ở các cột riêng.
27. A - Type 4 tách bảng hiện tại và bảng lịch sử.
28. A - Type 5 hỗ trợ thuộc tính thay đổi nhanh.
29. A - Junk Dimension gom cờ/trạng thái nhỏ để giảm Join.
30. A - Degenerate Dimension là khóa nghiệp vụ nằm trong Fact.
31. A - Mini-dimension tách thuộc tính thay đổi nhanh.
32. A - Role-playing Dimension là một bảng chiều dùng nhiều vai trò.
33. A - Bronze là điểm đổ bộ dữ liệu thô.
34. A - Schema-on-read phù hợp với dữ liệu thô ở Bronze.
35. A - Immutability giúp tái xử lý khi logic thay đổi.
36. A - Silver làm sạch, chuẩn hóa, tích hợp nhưng vẫn giữ độ chi tiết.
37. A - Delta/Iceberg hỗ trợ ACID trong biến đổi dữ liệu.
38. A - Gold là Consumption Layer cho BI/quyết định.
39. A - Gold thường dùng Star Schema hoặc Wide Tables.
40. A - Data Mart tối ưu cho nhu cầu từng bộ phận.
41. A - Semantic Layer che giấu phức tạp kỹ thuật cho người dùng kinh doanh.
42. A - Nó giảm rủi ro hiểu sai dữ liệu và Join sai.
43. A - Silo logic là mỗi nơi tính chỉ số một kiểu.
44. A - Metric Catalog định nghĩa metric tập trung.
45. A - Lineage truy vết metric về dữ liệu gốc.
46. A - Semantic Layer là bản đồ tri thức cho AI Agents.
47. A - RAG giúp AI trả lời dựa trên dữ liệu có kiểm chứng, giảm hallucination.
48. A - Semi-structured data thường là JSON/Parquet với nested arrays/key-value.
49. A - Schema Drift làm cấu trúc thay đổi khó cố định schema quan hệ.
50. A - VARIANT lưu tài liệu bán cấu trúc trong một cột.
51. A - Flattening biến mảng lồng nhau thành dòng riêng.
52. A - Cloud DW cho phép join bán cấu trúc và quan hệ bằng SQL.
53. A - Trường truy vấn nhiều nên materialize để tăng tốc.
54. A - Virtual Views cho người dùng thấy dạng bảng mà không đổi storage gốc.
55. A - BI tóm tắt xu hướng, AI cần chi tiết để học.
56. A - Wide Tables giảm Join khi train model.
57. A - Time-series giúp AI học chuỗi hành vi.
58. A - Feature Engineering tại Lakehouse giảm di chuyển dữ liệu và tận dụng compute.
59. A - Point-in-time Correctness tránh data leakage.
60. A - Feature Store quản lý phiên bản, chia sẻ và tái sử dụng feature.
