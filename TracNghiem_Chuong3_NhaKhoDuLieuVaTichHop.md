# Trắc nghiệm chương 3 - Tích hợp dữ liệu và Pipeline tự động

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide3.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. ETL truyền thống và Cloud-Native ELT

**Câu 1.** Hạn chế lớn của ETL truyền thống là gì?

A. Luôn hỗ trợ schema-on-read linh hoạt  
B. Luôn tối ưu cho dữ liệu thô phục vụ AI/ML  
C. Phải xử lý/biến đổi dữ liệu trước khi nạp vào kho đích  
D. Không cần pipeline trung gian  

**Câu 2.** Cloud-Native ELT khác ETL truyền thống ở điểm nào?

A. Không lưu được dữ liệu thô, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Luôn biến đổi dữ liệu ở server riêng trước khi nạp  
C. Không dùng sức mạnh tính toán của Cloud  
D. Nạp dữ liệu thô vào Lake/Warehouse trước, sau đó biến đổi tại chỗ  

**Câu 3.** In-place Transform trong ELT nghĩa là gì?

A. Biến đổi dữ liệu trực tiếp trong Cloud Data Warehouse/Lakehouse  
B. Không cho phép dùng SQL, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
C. Xuất dữ liệu sang máy cá nhân để xử lý  
D. Chỉ biến đổi dữ liệu bằng Excel  

**Câu 4.** Schema-on-read trong ELT có ý nghĩa gì?

A. Bắt buộc định nghĩa schema nghiêm ngặt trước khi nạp  
B. Định nghĩa cấu trúc dữ liệu tại thời điểm truy vấn  
C. Chỉ áp dụng cho OLTP  
D. Không cần metadata  

**Câu 5.** Vì sao ELT phù hợp hơn với AI/ML?

A. Không cho phép truy xuất dữ liệu gốc  
B. Chỉ lưu dữ liệu tổng hợp cuối tháng  
C. Lưu được dữ liệu thô để phục vụ nhiều cách khai thác và huấn luyện sau này  
D. Loại bỏ hoàn toàn dữ liệu lịch sử  

**Câu 6.** Lợi ích kinh tế/kỹ thuật của ELT là gì?

A. Tăng chi phí truyền dữ liệu sang máy chủ riêng  
B. Không hỗ trợ Data Lineage, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Bắt buộc bảo trì nhiều server vật lý  
D. Tận dụng xử lý song song của Cloud để chạy SQL nhanh  

**Câu 7.** Medallion Architecture trong ELT thường giúp điều gì?

A. Minh bạch luồng dữ liệu và hỗ trợ Data Lineage qua Bronze, Silver, Gold  
B. Không cần kiểm soát chất lượng dữ liệu  
C. Xóa bỏ mọi tầng xử lý dữ liệu  
D. Chỉ lưu dữ liệu ở tầng Gold, ma khong can metadata, catalog hoac buoc kiem chung bo sung  

### B. Change Data Capture và Zero-ETL

**Câu 8.** Change Data Capture (CDC) là gì?

A. Kỹ thuật chỉ dùng để xóa dữ liệu cũ  
B. Nhóm kỹ thuật nhận diện và nắm bắt thay đổi từ CSDL nguồn  
C. Quy trình chỉ nạp dữ liệu mỗi cuối năm  
D. Công cụ tạo dashboard tĩnh, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 9.** CDC thường quản lý những thao tác dữ liệu nào?

A. CHART, FILTER và SORT  
B. SELECT, JOIN và GROUP BY  
C. INSERT, UPDATE và DELETE  
D. COMMIT, ROLLBACK và GRANT  

**Câu 10.** Log-based CDC hoạt động bằng cách nào?

A. Liên tục quét toàn bộ bảng bằng truy vấn SQL  
B. Chỉ đọc dữ liệu từ file CSV xuất tay  
C. Chụp màn hình dashboard định kỳ, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Đọc trực tiếp từ redo logs hoặc transaction logs  

**Câu 11.** Ưu điểm của Log-based CDC so với Query-based CDC là gì?

A. Tải hệ thống nhẹ hơn và ghi nhận thay đổi chính xác hơn  
B. Chỉ chạy theo batch mỗi tháng  
C. Luôn gây nặng hệ thống hơn, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
D. Không phát hiện được bản ghi bị xóa  

**Câu 12.** Query-based CDC có hạn chế nào?

A. Luôn đạt real-time mili giây  
B. Khó phát hiện hard delete và dễ bỏ sót nếu dữ liệu đổi quá nhanh  
C. Không cần viết SQL, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Đọc trực tiếp transaction log  

**Câu 13.** Ứng dụng thực tế của CDC là gì?

A. Chỉ tạo dữ liệu giả  
B. Chỉ đổi màu biểu đồ  
C. Live dashboards, cloud migration zero-downtime, audit trails, fraud detection  
D. Chỉ lưu file backup offline  

**Câu 14.** Debezium là nền tảng CDC nổi bật dựa trên hệ sinh thái nào?

A. Microsoft Word  
B. GitHub Issues, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Tableau Desktop  
D. Apache Kafka Connect  

**Câu 15.** Zero-ETL Integration được hiểu là gì?

A. Tích hợp dữ liệu trực tiếp mà không cần xây dựng code pipeline trung gian  
B. Không tích hợp dữ liệu nữa  
C. Xóa toàn bộ dữ liệu nguồn trước khi phân tích  
D. Chỉ dùng ETL thủ công, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  

**Câu 16.** Một đặc điểm của Zero-ETL là gì?

A. Luôn không có SLA từ nhà cung cấp Cloud  
B. Tự động mapping và đồng bộ cấu trúc từ nguồn đến đích  
C. Yêu cầu viết lại toàn bộ pipeline bằng tay  
D. Chỉ hoạt động với dữ liệu cực bẩn cần làm sạch phức tạp  

**Câu 17.** Hạn chế đáng chú ý của Zero-ETL là gì?

A. Luôn phù hợp với mọi dữ liệu bất kể chất lượng  
B. Không phụ thuộc hệ sinh thái Cloud  
C. Rủi ro vendor lock-in và không phù hợp với dữ liệu nguồn bẩn, biến đổi phức tạp  
D. Không có nguy cơ chi phí ẩn  

### C. Orchestration, DAG và công cụ điều phối

**Câu 18.** Orchestration trong Data Pipeline đóng vai trò gì?

A. Chỉ tạo màu cho dashboard  
B. Chỉ lưu dữ liệu raw ở Bronze  
C. Thay thế hoàn toàn CDC, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
D. Điều phối các tác vụ, phụ thuộc, lịch chạy, retry và cảnh báo  

**Câu 19.** DAG trong orchestration là viết tắt của gì?

A. Directed Acyclic Graph  
B. Data Archive Gateway  
C. Dynamic Aggregation Guide  
D. Distributed Analytics Grid  

**Câu 20.** Tính chất Directed trong DAG nghĩa là gì?

A. Mọi tác vụ đều bị xóa sau khi chạy  
B. Dòng công việc đi theo một chiều xác định từ đầu vào đến đầu ra  
C. Pipeline có thể chạy vòng lặp vô hạn  
D. Tác vụ không có thứ tự, va luon thay the hoan toan cac co che con lai trong kien truc  

**Câu 21.** Tính chất Acyclic trong DAG giúp tránh vấn đề nào?

A. Mất dữ liệu do schema drift  
B. Hard delete trong CDC  
C. Vòng lặp vô hạn gây treo pipeline  
D. Vendor lock-in trong Zero-ETL  

**Câu 22.** Ví dụ nào đúng về quản lý phụ thuộc trong DAG?

A. Không cần kiểm tra trạng thái tác vụ trước  
B. Tầng Gold chạy trước khi có dữ liệu nguồn  
C. Mọi tác vụ luôn chạy ngẫu nhiên, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Tầng Gold chỉ chạy sau khi tầng Silver hoàn tất  

**Câu 23.** Task-centric orchestration tập trung vào điều gì?

A. Giám sát tác vụ đang chạy  
B. Quản lý tài sản dữ liệu được tạo ra  
C. Chỉ phát hiện Data Drift  
D. Chỉ kiểm soát Metric Catalog  

**Câu 24.** Asset-centric orchestration tập trung vào điều gì?

A. Chỉ số lượng file PDF, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
B. Tài sản dữ liệu nào được tạo ra, trạng thái và lineage của chúng  
C. Chỉ trạng thái CPU của server  
D. Chỉ thứ tự màu dashboard  

**Câu 25.** Apache Airflow thường được mô tả là gì?

A. CSDL vector cho semantic search  
B. Dịch vụ Zero-ETL độc quyền  
C. Công cụ orchestration tiêu chuẩn công nghiệp, có nhiều thư viện kết nối  
D. Công cụ chỉ để tạo ảnh  

**Câu 26.** Dagster và Prefect được nhấn mạnh vì điều gì?

A. Không thể tích hợp CI/CD  
B. Chỉ dùng để lưu dữ liệu thô  
C. Không hỗ trợ pipeline, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Thế hệ công cụ điều phối mới, tối ưu hóa lập trình Python  

### D. Batch, Streaming, Snowpipe, Spark và Lambda/Kappa

**Câu 27.** Batch ingestion phù hợp với trường hợp nào?

A. Hệ thống chấp nhận độ trễ cao như báo cáo cuối ngày hoặc tính lương  
B. Sự kiện cần xử lý ngay khi phát sinh, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
C. Chống gian lận thẻ cần phản ứng tức thời  
D. Gợi ý sản phẩm real-time bắt buộc độ trễ thấp  

**Câu 28.** Continuous Streaming phù hợp nhất với hệ thống nào?

A. Báo cáo tổng hợp cuối năm, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Hệ thống yêu cầu SLA độ trễ cực thấp hoặc thời gian thực  
C. Lưu trữ archive không truy cập  
D. Tác vụ chỉ chạy khi người dùng xuất Excel  

**Câu 29.** Snowpipe tự động nạp dữ liệu khi nào?

A. Khi dữ liệu đã bị xóa khỏi nguồn  
B. Chỉ khi DBA chạy lệnh thủ công mỗi tháng  
C. Khi file vừa xuất hiện trên Cloud Storage  
D. Khi dashboard được đổi màu  

**Câu 30.** Micro-batch trong Snowpipe nghĩa là gì?

A. Chỉ nạp một lần duy nhất trong năm  
B. Luôn xử lý từng byte riêng lẻ không theo lô  
C. Không dùng Cloud Storage, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Chia dữ liệu thành các lô nhỏ liên tục thay vì chờ gom lô lớn  

**Câu 31.** Exactly-once trong Spark Structured Streaming đảm bảo điều gì?

A. Dữ liệu không bị xử lý lặp lại hoặc thất thoát  
B. Chỉ chạy với dữ liệu batch  
C. Dữ liệu luôn bị nhân đôi để an toàn  
D. Không cần checkpointing, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  

**Câu 32.** Windowing trong streaming dùng để làm gì?

A. Nén dữ liệu thành file zip, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Tính toán aggregate theo khung thời gian như mỗi 5 phút  
C. Chỉ dùng để tạo giao diện người dùng  
D. Ghi đè schema của bảng nguồn  

**Câu 33.** Watermarks hỗ trợ vấn đề nào?

A. Quản lý Git branch  
B. Xóa dữ liệu bị duplicate trong dimension  
C. Xử lý bản ghi đến trễ mà không làm nghẽn luồng chính  
D. Tạo macro Jinja  

**Câu 34.** Checkpointing trong streaming giúp gì?

A. Xóa toàn bộ lịch sử xử lý  
B. Không liên quan đến fault tolerance  
C. Chỉ lưu báo cáo cuối cùng  
D. Phục hồi từ điểm xảy ra sự cố  

**Câu 35.** Kiến trúc Lambda có đặc điểm nào?

A. Duy trì song song luồng Batch và Speed/Streaming  
B. Luôn dễ bảo trì hơn Kappa, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
C. Chỉ dùng một luồng Streaming duy nhất  
D. Không có rủi ro sai lệch dữ liệu  

**Câu 36.** Kiến trúc Kappa khác Lambda ở điểm nào?

A. Bắt buộc duy trì hai codebase khác nhau  
B. Chỉ dùng một luồng Streaming để xử lý cả dữ liệu thực và lịch sử  
C. Chỉ phù hợp với báo cáo cuối ngày, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Không hỗ trợ dữ liệu thời gian thực  

### E. dbt, Jinja, Testing và Lineage

**Câu 37.** dbt (Data Build Tool) giúp Data Engineer làm việc giống nhóm nào hơn?

A. Chỉ nhóm thiết kế giao diện  
B. Nhân viên nhập liệu thủ công  
C. Software Engineer với versioning, modularization, testing  
D. Người dùng không có quy trình code  

**Câu 38.** Triết lý SQL-first của dbt nghĩa là gì?

A. Cấm dùng SQL trong Data Warehouse  
B. Chỉ xử lý bằng file Excel, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
C. Chỉ viết pipeline bằng ảnh  
D. Chuyển đổi logic nghiệp vụ bằng SQL thuần túy, dễ tiếp cận  

**Câu 39.** Tích hợp Git trong dbt giúp gì?

A. Quản lý phiên bản mã nguồn và làm việc nhóm  
B. Tự động xóa lịch sử thay đổi  
C. Chỉ lưu dashboard ảnh  
D. Thay thế database, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  

**Câu 40.** Jinja trong dbt có vai trò gì?

A. Hệ thống phân quyền row-level  
B. Templating engine bổ sung cấu trúc điều khiển vào SQL tĩnh  
C. Công cụ nạp dữ liệu CDC  
D. Dịch vụ lưu trữ object, va luon thay the hoan toan cac co che con lai trong kien truc  

**Câu 41.** Macro trong dbt dùng để làm gì?

A. Tạo bản ghi CDC từ redo log  
B. Tự động khóa tài khoản người dùng  
C. Đóng gói đoạn SQL lặp lại thành hàm để tái sử dụng  
D. Chuyển batch thành stream  

**Câu 42.** Schema Tests trong dbt thường kiểm tra điều gì?

A. Chỉ kiểm tra CPU server, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Chỉ kiểm tra màu dashboard  
C. Chỉ kiểm tra số lượng slide  
D. Điều kiện cơ bản như cột rỗng hoặc trùng lặp  

**Câu 43.** Singular Tests trong dbt là gì?

A. Câu lệnh SQL riêng để kiểm tra quy tắc nghiệp vụ đặc thù  
B. Một loại CDC log-based  
C. Cách chạy streaming window  
D. Công cụ nén dữ liệu, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  

**Câu 44.** CI/CD trong dbt pipeline giúp đảm bảo điều gì?

A. Không cần Git, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
B. Chỉ đưa code vào vận hành khi toàn bộ test pass  
C. Bỏ qua kiểm thử để triển khai nhanh hơn  
D. Không cần Data Contracts  

**Câu 45.** Visual Lineage trong dbt có tác dụng gì?

A. Tạo biểu đồ marketing không liên quan dữ liệu  
B. Xóa comment khỏi mã nguồn  
C. Vẽ quan hệ đầu vào/đầu ra của từng bảng để hiểu nguồn gốc dữ liệu  
D. Chỉ thay đổi tên schema theo môi trường  

### F. Schema Evolution và Schema Drift

**Câu 46.** Schema Drift là gì?

A. Độ trễ trong streaming  
B. Số lượng bản ghi giảm do archive  
C. Một loại macro SQL, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Sự thay đổi cấu trúc đột ngột ở dữ liệu nguồn như thêm/xóa cột, đổi kiểu  

**Câu 47.** Hậu quả của Schema Drift là gì?

A. Downstream pipeline, báo cáo hoặc dashboard có thể ngừng hoạt động  
B. Luôn làm dashboard nhanh hơn  
C. Không ảnh hưởng mô hình AI  
D. Không cần cảnh báo sớm, ma khong can metadata, catalog hoac buoc kiem chung bo sung  

**Câu 48.** Silent Loss trong Schema Drift là gì?

A. Dữ liệu được nhân bản thành nhiều bản sao  
B. Dữ liệu mới xuất hiện nhưng bị loại bỏ ngầm vì kho không nhận diện cột mới  
C. Dữ liệu bị mã hóa có chủ đích  
D. Dữ liệu stream đến đúng hạn, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 49.** Schema Evolution giúp hệ thống như thế nào?

A. Ngăn mọi nguồn dữ liệu thay đổi  
B. Chỉ xóa bảng cũ  
C. Tự động thích ứng với thay đổi cấu trúc mà không phá vỡ logic truy vấn hiện tại  
D. Không cần versioning  

**Câu 50.** Auto-column addition trong Schema Evolution nghĩa là gì?

A. Tự đổi mọi cột thành ảnh  
B. Tự xóa cột mới khỏi nguồn  
C. Tự tắt pipeline, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Tự nhận diện và mở rộng thêm cột khi nguồn phát sinh thuộc tính  

**Câu 51.** Backward Compatibility nghĩa là gì?

A. Code xử lý cũ vẫn đọc được cấu trúc dữ liệu mới  
B. Cả tương thích ngược và xuôi  
C. Dữ liệu cũ hoạt động với code mới  
D. Không cần quản trị thay đổi, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  

**Câu 52.** Full Compatibility nghĩa là gì?

A. Chỉ code cũ đọc dữ liệu mới  
B. Kết hợp tương thích ngược và tương thích xuôi để bảo vệ luồng dữ liệu  
C. Chỉ dữ liệu cũ chạy với code mới  
D. Không cho rollback schema, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  

**Câu 53.** Công cụ/chuẩn nào hỗ trợ Schema Evolution?

A. Chỉ PowerPoint  
B. Chỉ Microsoft Paint  
C. Apache Iceberg, Delta Lake, Schema Registry, Fivetran Auto-sync  
D. Chỉ trình duyệt web  

### G. Data Observability

**Câu 54.** Data Observability là gì?

A. Chỉ báo động server CPU cao  
B. Chỉ là tạo dashboard đẹp, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Chỉ dùng cho dữ liệu batch  
D. Khả năng theo dõi và hiểu sức khỏe dữ liệu từ đầu nguồn đến đích  

**Câu 55.** Observability khác Monitoring ở điểm nào?

A. Monitoring báo lỗi, Observability giải thích vì sao lỗi và lỗi ở đâu  
B. Monitoring luôn truy vết lineage tốt hơn, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  
C. Observability chỉ báo lỗi mà không phân tích nguyên nhân  
D. Hai khái niệm hoàn toàn không liên quan dữ liệu  

**Câu 56.** Freshness trong Data Observability đo điều gì?

A. Số lượng cột trong schema  
B. Dữ liệu có được cập nhật đúng hạn theo SLA hay không  
C. Độ sâu của DAG, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Số dòng code Jinja  

**Câu 57.** Volume trong Data Observability giúp phát hiện gì?

A. Nguồn gốc của một bản ghi lỗi  
B. Cấu trúc bảng bị đổi kiểu dữ liệu  
C. Số bản ghi nạp vào tăng vọt hoặc giảm bất thường so với lịch sử  
D. Công thức tính KPI  

**Câu 58.** Distribution trong Data Observability theo dõi điều gì?

A. Tác vụ nào chạy trước trong DAG  
B. File vừa xuất hiện trên Cloud Storage  
C. Mã SQL nào được macro sinh ra, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
D. Tham số thống kê của tập dữ liệu có nằm trong ngưỡng an toàn không  

**Câu 59.** Lineage trong Observability giúp gì khi phát hiện bản ghi lỗi?

A. Truy vết chính xác nguồn phát sinh lỗi  
B. Xóa toàn bộ bảng nguồn, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
C. Chỉ tăng số lượng cảnh báo giả  
D. Tắt mọi pipeline downstream  

**Câu 60.** MTTR trong bối cảnh Data Observability liên quan đến điều gì?

A. Số lượng macro trong dbt  
B. Thời gian trung bình để khắc phục/phục hồi khi xảy ra sự cố dữ liệu  
C. Mức độ tương thích schema  
D. Tần suất nạp batch, va luon thay the hoan toan cac co che con lai trong kien truc  

## Đáp án và giải thích ngắn

1. C - ETL truyền thống thường biến đổi trước khi nạp, kém linh hoạt với Cloud.
2. D - ELT nạp raw data trước rồi transform tại nơi lưu trữ/tính toán Cloud.
3. A - In-place Transform là xử lý ngay trong DWH/Lakehouse.
4. B - Schema-on-read định nghĩa schema khi truy vấn.
5. C - Raw data giữ lại nhiều giá trị cho AI/ML.
6. D - ELT tận dụng compute song song của Cloud.
7. A - Bronze/Silver/Gold giúp minh bạch và truy vết lineage.
8. B - CDC bắt các thay đổi từ CSDL nguồn.
9. C - CDC theo dõi INSERT/UPDATE/DELETE.
10. D - Log-based CDC đọc log giao dịch/redo logs.
11. A - Log-based nhẹ hơn và chính xác hơn query-based.
12. B - Query-based dễ bỏ sót hard delete và thay đổi nhanh.
13. C - CDC dùng nhiều trong dashboard live, migration, audit, fraud.
14. D - Debezium hoạt động dựa trên Kafka Connect.
15. A - Zero-ETL giảm nhu cầu pipeline code trung gian.
16. B - Zero-ETL tự động mapping/đồng bộ cấu trúc.
17. C - Zero-ETL có rủi ro lock-in và kém phù hợp dữ liệu bẩn/phức tạp.
18. D - Orchestration điều phối thứ tự, phụ thuộc, lịch và retry.
19. A - DAG là Directed Acyclic Graph.
20. B - Directed nghĩa là luồng đi theo hướng xác định.
21. C - Acyclic tránh vòng lặp vô hạn.
22. D - Gold phụ thuộc Silver là ví dụ pipeline dependency.
23. A - Task-centric tập trung tác vụ đang chạy.
24. B - Asset-centric tập trung tài sản dữ liệu và lineage.
25. C - Airflow là công cụ orchestration phổ biến.
26. D - Dagster/Prefect là thế hệ mới thân thiện Python.
27. A - Batch hợp với độ trễ cao.
28. B - Streaming hợp với low-latency/real-time.
29. C - Snowpipe tự nạp khi file xuất hiện trên Cloud Storage.
30. D - Micro-batch chia lô nhỏ liên tục.
31. A - Exactly-once tránh xử lý lặp hoặc mất dữ liệu.
32. B - Windowing tính toán theo cửa sổ thời gian.
33. C - Watermarks xử lý late data.
34. D - Checkpointing giúp phục hồi từ điểm lỗi.
35. A - Lambda duy trì batch và speed layer.
36. B - Kappa đơn giản hóa bằng một streaming pipeline.
37. C - dbt đưa quy trình data transformation gần với software engineering.
38. D - SQL-first dùng SQL làm ngôn ngữ chính cho transform.
39. A - Git hỗ trợ versioning và collaboration.
40. B - Jinja thêm templating vào SQL.
41. C - Macro tái sử dụng SQL lặp lại.
42. D - Schema tests kiểm tra rỗng/trùng lặp/ràng buộc cơ bản.
43. A - Singular tests kiểm tra rule nghiệp vụ bằng SQL riêng.
44. B - CI/CD chỉ deploy khi test pass.
45. C - Visual Lineage cho thấy phụ thuộc giữa bảng/model.
46. D - Schema Drift là thay đổi cấu trúc nguồn.
47. A - Drift có thể phá downstream pipeline/dashboard.
48. B - Silent Loss là dữ liệu mới bị bỏ qua ngầm.
49. C - Schema Evolution giúp thích ứng an toàn với schema mới.
50. D - Auto-column addition tự thêm cột khi nguồn có thuộc tính mới.
51. A - Backward compatibility là code cũ đọc được cấu trúc mới.
52. B - Full compatibility kết hợp backward và forward.
53. C - Iceberg/Delta/Registry/Fivetran đều hỗ trợ thay đổi schema.
54. D - Observability theo dõi sức khỏe dữ liệu end-to-end.
55. A - Observability đi xa hơn monitoring vì giải thích nguyên nhân/vị trí lỗi.
56. B - Freshness đo dữ liệu có cập nhật đúng hạn không.
57. C - Volume phát hiện số bản ghi bất thường.
58. D - Distribution kiểm tra thống kê dữ liệu trong ngưỡng.
59. A - Lineage truy vết nguồn lỗi.
60. B - MTTR là thời gian trung bình để khắc phục sự cố.

