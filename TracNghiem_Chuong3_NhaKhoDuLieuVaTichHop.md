# Trắc nghiệm chương 3 - Tích hợp dữ liệu và Pipeline tự động

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide3.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. ETL truyền thống và Cloud-Native ELT

**Câu 1.** Hạn chế lớn của ETL truyền thống là gì?

A. Phải xử lý/biến đổi dữ liệu trước khi nạp vào kho đích  
B. Luôn hỗ trợ schema-on-read linh hoạt  
C. Không cần pipeline trung gian  
D. Luôn tối ưu cho dữ liệu thô phục vụ AI/ML  

**Câu 2.** Cloud-Native ELT khác ETL truyền thống ở điểm nào?

A. Nạp dữ liệu thô vào Lake/Warehouse trước, sau đó biến đổi tại chỗ  
B. Luôn biến đổi dữ liệu ở server riêng trước khi nạp  
C. Không dùng sức mạnh tính toán của Cloud  
D. Không lưu được dữ liệu thô  

**Câu 3.** In-place Transform trong ELT nghĩa là gì?

A. Biến đổi dữ liệu trực tiếp trong Cloud Data Warehouse/Lakehouse  
B. Xuất dữ liệu sang máy cá nhân để xử lý  
C. Chỉ biến đổi dữ liệu bằng Excel  
D. Không cho phép dùng SQL  

**Câu 4.** Schema-on-read trong ELT có ý nghĩa gì?

A. Định nghĩa cấu trúc dữ liệu tại thời điểm truy vấn  
B. Bắt buộc định nghĩa schema nghiêm ngặt trước khi nạp  
C. Không cần metadata  
D. Chỉ áp dụng cho OLTP  

**Câu 5.** Vì sao ELT phù hợp hơn với AI/ML?

A. Lưu được dữ liệu thô để phục vụ nhiều cách khai thác và huấn luyện sau này  
B. Chỉ lưu dữ liệu tổng hợp cuối tháng  
C. Loại bỏ hoàn toàn dữ liệu lịch sử  
D. Không cho phép truy xuất dữ liệu gốc  

**Câu 6.** Lợi ích kinh tế/kỹ thuật của ELT là gì?

A. Tận dụng xử lý song song của Cloud để chạy SQL nhanh  
B. Tăng chi phí truyền dữ liệu sang máy chủ riêng  
C. Bắt buộc bảo trì nhiều server vật lý  
D. Không hỗ trợ Data Lineage  

**Câu 7.** Medallion Architecture trong ELT thường giúp điều gì?

A. Minh bạch luồng dữ liệu và hỗ trợ Data Lineage qua Bronze, Silver, Gold  
B. Xóa bỏ mọi tầng xử lý dữ liệu  
C. Chỉ lưu dữ liệu ở tầng Gold  
D. Không cần kiểm soát chất lượng dữ liệu  

### B. Change Data Capture và Zero-ETL

**Câu 8.** Change Data Capture (CDC) là gì?

A. Nhóm kỹ thuật nhận diện và nắm bắt thay đổi từ CSDL nguồn  
B. Kỹ thuật chỉ dùng để xóa dữ liệu cũ  
C. Công cụ tạo dashboard tĩnh  
D. Quy trình chỉ nạp dữ liệu mỗi cuối năm  

**Câu 9.** CDC thường quản lý những thao tác dữ liệu nào?

A. INSERT, UPDATE và DELETE  
B. SELECT, JOIN và GROUP BY  
C. COMMIT, ROLLBACK và GRANT  
D. CHART, FILTER và SORT  

**Câu 10.** Log-based CDC hoạt động bằng cách nào?

A. Đọc trực tiếp từ redo logs hoặc transaction logs  
B. Liên tục quét toàn bộ bảng bằng truy vấn SQL  
C. Chụp màn hình dashboard định kỳ  
D. Chỉ đọc dữ liệu từ file CSV xuất tay  

**Câu 11.** Ưu điểm của Log-based CDC so với Query-based CDC là gì?

A. Tải hệ thống nhẹ hơn và ghi nhận thay đổi chính xác hơn  
B. Luôn gây nặng hệ thống hơn  
C. Không phát hiện được bản ghi bị xóa  
D. Chỉ chạy theo batch mỗi tháng  

**Câu 12.** Query-based CDC có hạn chế nào?

A. Khó phát hiện hard delete và dễ bỏ sót nếu dữ liệu đổi quá nhanh  
B. Luôn đạt real-time mili giây  
C. Đọc trực tiếp transaction log  
D. Không cần viết SQL  

**Câu 13.** Ứng dụng thực tế của CDC là gì?

A. Live dashboards, cloud migration zero-downtime, audit trails, fraud detection  
B. Chỉ đổi màu biểu đồ  
C. Chỉ lưu file backup offline  
D. Chỉ tạo dữ liệu giả  

**Câu 14.** Debezium là nền tảng CDC nổi bật dựa trên hệ sinh thái nào?

A. Apache Kafka Connect  
B. Microsoft Word  
C. Tableau Desktop  
D. GitHub Issues  

**Câu 15.** Zero-ETL Integration được hiểu là gì?

A. Tích hợp dữ liệu trực tiếp mà không cần xây dựng code pipeline trung gian  
B. Không tích hợp dữ liệu nữa  
C. Chỉ dùng ETL thủ công  
D. Xóa toàn bộ dữ liệu nguồn trước khi phân tích  

**Câu 16.** Một đặc điểm của Zero-ETL là gì?

A. Tự động mapping và đồng bộ cấu trúc từ nguồn đến đích  
B. Yêu cầu viết lại toàn bộ pipeline bằng tay  
C. Chỉ hoạt động với dữ liệu cực bẩn cần làm sạch phức tạp  
D. Luôn không có SLA từ nhà cung cấp Cloud  

**Câu 17.** Hạn chế đáng chú ý của Zero-ETL là gì?

A. Rủi ro vendor lock-in và không phù hợp với dữ liệu nguồn bẩn, biến đổi phức tạp  
B. Luôn phù hợp với mọi dữ liệu bất kể chất lượng  
C. Không có nguy cơ chi phí ẩn  
D. Không phụ thuộc hệ sinh thái Cloud  

### C. Orchestration, DAG và công cụ điều phối

**Câu 18.** Orchestration trong Data Pipeline đóng vai trò gì?

A. Điều phối các tác vụ, phụ thuộc, lịch chạy, retry và cảnh báo  
B. Chỉ lưu dữ liệu raw ở Bronze  
C. Thay thế hoàn toàn CDC  
D. Chỉ tạo màu cho dashboard  

**Câu 19.** DAG trong orchestration là viết tắt của gì?

A. Directed Acyclic Graph  
B. Data Archive Gateway  
C. Distributed Analytics Grid  
D. Dynamic Aggregation Guide  

**Câu 20.** Tính chất Directed trong DAG nghĩa là gì?

A. Dòng công việc đi theo một chiều xác định từ đầu vào đến đầu ra  
B. Pipeline có thể chạy vòng lặp vô hạn  
C. Tác vụ không có thứ tự  
D. Mọi tác vụ đều bị xóa sau khi chạy  

**Câu 21.** Tính chất Acyclic trong DAG giúp tránh vấn đề nào?

A. Vòng lặp vô hạn gây treo pipeline  
B. Mất dữ liệu do schema drift  
C. Vendor lock-in trong Zero-ETL  
D. Hard delete trong CDC  

**Câu 22.** Ví dụ nào đúng về quản lý phụ thuộc trong DAG?

A. Tầng Gold chỉ chạy sau khi tầng Silver hoàn tất  
B. Tầng Gold chạy trước khi có dữ liệu nguồn  
C. Mọi tác vụ luôn chạy ngẫu nhiên  
D. Không cần kiểm tra trạng thái tác vụ trước  

**Câu 23.** Task-centric orchestration tập trung vào điều gì?

A. Giám sát tác vụ đang chạy  
B. Quản lý tài sản dữ liệu được tạo ra  
C. Chỉ kiểm soát Metric Catalog  
D. Chỉ phát hiện Data Drift  

**Câu 24.** Asset-centric orchestration tập trung vào điều gì?

A. Tài sản dữ liệu nào được tạo ra, trạng thái và lineage của chúng  
B. Chỉ trạng thái CPU của server  
C. Chỉ thứ tự màu dashboard  
D. Chỉ số lượng file PDF  

**Câu 25.** Apache Airflow thường được mô tả là gì?

A. Công cụ orchestration tiêu chuẩn công nghiệp, có nhiều thư viện kết nối  
B. CSDL vector cho semantic search  
C. Công cụ chỉ để tạo ảnh  
D. Dịch vụ Zero-ETL độc quyền  

**Câu 26.** Dagster và Prefect được nhấn mạnh vì điều gì?

A. Thế hệ công cụ điều phối mới, tối ưu hóa lập trình Python  
B. Chỉ dùng để lưu dữ liệu thô  
C. Không hỗ trợ pipeline  
D. Không thể tích hợp CI/CD  

### D. Batch, Streaming, Snowpipe, Spark và Lambda/Kappa

**Câu 27.** Batch ingestion phù hợp với trường hợp nào?

A. Hệ thống chấp nhận độ trễ cao như báo cáo cuối ngày hoặc tính lương  
B. Chống gian lận thẻ cần phản ứng tức thời  
C. Gợi ý sản phẩm real-time bắt buộc độ trễ thấp  
D. Sự kiện cần xử lý ngay khi phát sinh  

**Câu 28.** Continuous Streaming phù hợp nhất với hệ thống nào?

A. Hệ thống yêu cầu SLA độ trễ cực thấp hoặc thời gian thực  
B. Báo cáo tổng hợp cuối năm  
C. Tác vụ chỉ chạy khi người dùng xuất Excel  
D. Lưu trữ archive không truy cập  

**Câu 29.** Snowpipe tự động nạp dữ liệu khi nào?

A. Khi file vừa xuất hiện trên Cloud Storage  
B. Chỉ khi DBA chạy lệnh thủ công mỗi tháng  
C. Khi dashboard được đổi màu  
D. Khi dữ liệu đã bị xóa khỏi nguồn  

**Câu 30.** Micro-batch trong Snowpipe nghĩa là gì?

A. Chia dữ liệu thành các lô nhỏ liên tục thay vì chờ gom lô lớn  
B. Chỉ nạp một lần duy nhất trong năm  
C. Không dùng Cloud Storage  
D. Luôn xử lý từng byte riêng lẻ không theo lô  

**Câu 31.** Exactly-once trong Spark Structured Streaming đảm bảo điều gì?

A. Dữ liệu không bị xử lý lặp lại hoặc thất thoát  
B. Dữ liệu luôn bị nhân đôi để an toàn  
C. Không cần checkpointing  
D. Chỉ chạy với dữ liệu batch  

**Câu 32.** Windowing trong streaming dùng để làm gì?

A. Tính toán aggregate theo khung thời gian như mỗi 5 phút  
B. Nén dữ liệu thành file zip  
C. Ghi đè schema của bảng nguồn  
D. Chỉ dùng để tạo giao diện người dùng  

**Câu 33.** Watermarks hỗ trợ vấn đề nào?

A. Xử lý bản ghi đến trễ mà không làm nghẽn luồng chính  
B. Xóa dữ liệu bị duplicate trong dimension  
C. Tạo macro Jinja  
D. Quản lý Git branch  

**Câu 34.** Checkpointing trong streaming giúp gì?

A. Phục hồi từ điểm xảy ra sự cố  
B. Xóa toàn bộ lịch sử xử lý  
C. Chỉ lưu báo cáo cuối cùng  
D. Không liên quan đến fault tolerance  

**Câu 35.** Kiến trúc Lambda có đặc điểm nào?

A. Duy trì song song luồng Batch và Speed/Streaming  
B. Chỉ dùng một luồng Streaming duy nhất  
C. Không có rủi ro sai lệch dữ liệu  
D. Luôn dễ bảo trì hơn Kappa  

**Câu 36.** Kiến trúc Kappa khác Lambda ở điểm nào?

A. Chỉ dùng một luồng Streaming để xử lý cả dữ liệu thực và lịch sử  
B. Bắt buộc duy trì hai codebase khác nhau  
C. Không hỗ trợ dữ liệu thời gian thực  
D. Chỉ phù hợp với báo cáo cuối ngày  

### E. dbt, Jinja, Testing và Lineage

**Câu 37.** dbt (Data Build Tool) giúp Data Engineer làm việc giống nhóm nào hơn?

A. Software Engineer với versioning, modularization, testing  
B. Nhân viên nhập liệu thủ công  
C. Người dùng không có quy trình code  
D. Chỉ nhóm thiết kế giao diện  

**Câu 38.** Triết lý SQL-first của dbt nghĩa là gì?

A. Chuyển đổi logic nghiệp vụ bằng SQL thuần túy, dễ tiếp cận  
B. Cấm dùng SQL trong Data Warehouse  
C. Chỉ viết pipeline bằng ảnh  
D. Chỉ xử lý bằng file Excel  

**Câu 39.** Tích hợp Git trong dbt giúp gì?

A. Quản lý phiên bản mã nguồn và làm việc nhóm  
B. Tự động xóa lịch sử thay đổi  
C. Thay thế database  
D. Chỉ lưu dashboard ảnh  

**Câu 40.** Jinja trong dbt có vai trò gì?

A. Templating engine bổ sung cấu trúc điều khiển vào SQL tĩnh  
B. Công cụ nạp dữ liệu CDC  
C. Dịch vụ lưu trữ object  
D. Hệ thống phân quyền row-level  

**Câu 41.** Macro trong dbt dùng để làm gì?

A. Đóng gói đoạn SQL lặp lại thành hàm để tái sử dụng  
B. Tạo bản ghi CDC từ redo log  
C. Tự động khóa tài khoản người dùng  
D. Chuyển batch thành stream  

**Câu 42.** Schema Tests trong dbt thường kiểm tra điều gì?

A. Điều kiện cơ bản như cột rỗng hoặc trùng lặp  
B. Chỉ kiểm tra màu dashboard  
C. Chỉ kiểm tra CPU server  
D. Chỉ kiểm tra số lượng slide  

**Câu 43.** Singular Tests trong dbt là gì?

A. Câu lệnh SQL riêng để kiểm tra quy tắc nghiệp vụ đặc thù  
B. Một loại CDC log-based  
C. Cách chạy streaming window  
D. Công cụ nén dữ liệu  

**Câu 44.** CI/CD trong dbt pipeline giúp đảm bảo điều gì?

A. Chỉ đưa code vào vận hành khi toàn bộ test pass  
B. Bỏ qua kiểm thử để triển khai nhanh hơn  
C. Không cần Git  
D. Không cần Data Contracts  

**Câu 45.** Visual Lineage trong dbt có tác dụng gì?

A. Vẽ quan hệ đầu vào/đầu ra của từng bảng để hiểu nguồn gốc dữ liệu  
B. Tạo biểu đồ marketing không liên quan dữ liệu  
C. Xóa comment khỏi mã nguồn  
D. Chỉ thay đổi tên schema theo môi trường  

### F. Schema Evolution và Schema Drift

**Câu 46.** Schema Drift là gì?

A. Sự thay đổi cấu trúc đột ngột ở dữ liệu nguồn như thêm/xóa cột, đổi kiểu  
B. Số lượng bản ghi giảm do archive  
C. Độ trễ trong streaming  
D. Một loại macro SQL  

**Câu 47.** Hậu quả của Schema Drift là gì?

A. Downstream pipeline, báo cáo hoặc dashboard có thể ngừng hoạt động  
B. Luôn làm dashboard nhanh hơn  
C. Không ảnh hưởng mô hình AI  
D. Không cần cảnh báo sớm  

**Câu 48.** Silent Loss trong Schema Drift là gì?

A. Dữ liệu mới xuất hiện nhưng bị loại bỏ ngầm vì kho không nhận diện cột mới  
B. Dữ liệu bị mã hóa có chủ đích  
C. Dữ liệu được nhân bản thành nhiều bản sao  
D. Dữ liệu stream đến đúng hạn  

**Câu 49.** Schema Evolution giúp hệ thống như thế nào?

A. Tự động thích ứng với thay đổi cấu trúc mà không phá vỡ logic truy vấn hiện tại  
B. Ngăn mọi nguồn dữ liệu thay đổi  
C. Chỉ xóa bảng cũ  
D. Không cần versioning  

**Câu 50.** Auto-column addition trong Schema Evolution nghĩa là gì?

A. Tự nhận diện và mở rộng thêm cột khi nguồn phát sinh thuộc tính  
B. Tự xóa cột mới khỏi nguồn  
C. Tự đổi mọi cột thành ảnh  
D. Tự tắt pipeline  

**Câu 51.** Backward Compatibility nghĩa là gì?

A. Code xử lý cũ vẫn đọc được cấu trúc dữ liệu mới  
B. Dữ liệu cũ hoạt động với code mới  
C. Cả tương thích ngược và xuôi  
D. Không cần quản trị thay đổi  

**Câu 52.** Full Compatibility nghĩa là gì?

A. Kết hợp tương thích ngược và tương thích xuôi để bảo vệ luồng dữ liệu  
B. Chỉ code cũ đọc dữ liệu mới  
C. Chỉ dữ liệu cũ chạy với code mới  
D. Không cho rollback schema  

**Câu 53.** Công cụ/chuẩn nào hỗ trợ Schema Evolution?

A. Apache Iceberg, Delta Lake, Schema Registry, Fivetran Auto-sync  
B. Chỉ Microsoft Paint  
C. Chỉ PowerPoint  
D. Chỉ trình duyệt web  

### G. Data Observability

**Câu 54.** Data Observability là gì?

A. Khả năng theo dõi và hiểu sức khỏe dữ liệu từ đầu nguồn đến đích  
B. Chỉ báo động server CPU cao  
C. Chỉ là tạo dashboard đẹp  
D. Chỉ dùng cho dữ liệu batch  

**Câu 55.** Observability khác Monitoring ở điểm nào?

A. Monitoring báo lỗi, Observability giải thích vì sao lỗi và lỗi ở đâu  
B. Observability chỉ báo lỗi mà không phân tích nguyên nhân  
C. Monitoring luôn truy vết lineage tốt hơn  
D. Hai khái niệm hoàn toàn không liên quan dữ liệu  

**Câu 56.** Freshness trong Data Observability đo điều gì?

A. Dữ liệu có được cập nhật đúng hạn theo SLA hay không  
B. Số lượng cột trong schema  
C. Độ sâu của DAG  
D. Số dòng code Jinja  

**Câu 57.** Volume trong Data Observability giúp phát hiện gì?

A. Số bản ghi nạp vào tăng vọt hoặc giảm bất thường so với lịch sử  
B. Cấu trúc bảng bị đổi kiểu dữ liệu  
C. Nguồn gốc của một bản ghi lỗi  
D. Công thức tính KPI  

**Câu 58.** Distribution trong Data Observability theo dõi điều gì?

A. Tham số thống kê của tập dữ liệu có nằm trong ngưỡng an toàn không  
B. Tác vụ nào chạy trước trong DAG  
C. File vừa xuất hiện trên Cloud Storage  
D. Mã SQL nào được macro sinh ra  

**Câu 59.** Lineage trong Observability giúp gì khi phát hiện bản ghi lỗi?

A. Truy vết chính xác nguồn phát sinh lỗi  
B. Chỉ tăng số lượng cảnh báo giả  
C. Xóa toàn bộ bảng nguồn  
D. Tắt mọi pipeline downstream  

**Câu 60.** MTTR trong bối cảnh Data Observability liên quan đến điều gì?

A. Thời gian trung bình để khắc phục/phục hồi khi xảy ra sự cố dữ liệu  
B. Số lượng macro trong dbt  
C. Mức độ tương thích schema  
D. Tần suất nạp batch  

## Đáp án và giải thích ngắn

1. A - ETL truyền thống thường biến đổi trước khi nạp, kém linh hoạt với Cloud.
2. A - ELT nạp raw data trước rồi transform tại nơi lưu trữ/tính toán Cloud.
3. A - In-place Transform là xử lý ngay trong DWH/Lakehouse.
4. A - Schema-on-read định nghĩa schema khi truy vấn.
5. A - Raw data giữ lại nhiều giá trị cho AI/ML.
6. A - ELT tận dụng compute song song của Cloud.
7. A - Bronze/Silver/Gold giúp minh bạch và truy vết lineage.
8. A - CDC bắt các thay đổi từ CSDL nguồn.
9. A - CDC theo dõi INSERT/UPDATE/DELETE.
10. A - Log-based CDC đọc log giao dịch/redo logs.
11. A - Log-based nhẹ hơn và chính xác hơn query-based.
12. A - Query-based dễ bỏ sót hard delete và thay đổi nhanh.
13. A - CDC dùng nhiều trong dashboard live, migration, audit, fraud.
14. A - Debezium hoạt động dựa trên Kafka Connect.
15. A - Zero-ETL giảm nhu cầu pipeline code trung gian.
16. A - Zero-ETL tự động mapping/đồng bộ cấu trúc.
17. A - Zero-ETL có rủi ro lock-in và kém phù hợp dữ liệu bẩn/phức tạp.
18. A - Orchestration điều phối thứ tự, phụ thuộc, lịch và retry.
19. A - DAG là Directed Acyclic Graph.
20. A - Directed nghĩa là luồng đi theo hướng xác định.
21. A - Acyclic tránh vòng lặp vô hạn.
22. A - Gold phụ thuộc Silver là ví dụ pipeline dependency.
23. A - Task-centric tập trung tác vụ đang chạy.
24. A - Asset-centric tập trung tài sản dữ liệu và lineage.
25. A - Airflow là công cụ orchestration phổ biến.
26. A - Dagster/Prefect là thế hệ mới thân thiện Python.
27. A - Batch hợp với độ trễ cao.
28. A - Streaming hợp với low-latency/real-time.
29. A - Snowpipe tự nạp khi file xuất hiện trên Cloud Storage.
30. A - Micro-batch chia lô nhỏ liên tục.
31. A - Exactly-once tránh xử lý lặp hoặc mất dữ liệu.
32. A - Windowing tính toán theo cửa sổ thời gian.
33. A - Watermarks xử lý late data.
34. A - Checkpointing giúp phục hồi từ điểm lỗi.
35. A - Lambda duy trì batch và speed layer.
36. A - Kappa đơn giản hóa bằng một streaming pipeline.
37. A - dbt đưa quy trình data transformation gần với software engineering.
38. A - SQL-first dùng SQL làm ngôn ngữ chính cho transform.
39. A - Git hỗ trợ versioning và collaboration.
40. A - Jinja thêm templating vào SQL.
41. A - Macro tái sử dụng SQL lặp lại.
42. A - Schema tests kiểm tra rỗng/trùng lặp/ràng buộc cơ bản.
43. A - Singular tests kiểm tra rule nghiệp vụ bằng SQL riêng.
44. A - CI/CD chỉ deploy khi test pass.
45. A - Visual Lineage cho thấy phụ thuộc giữa bảng/model.
46. A - Schema Drift là thay đổi cấu trúc nguồn.
47. A - Drift có thể phá downstream pipeline/dashboard.
48. A - Silent Loss là dữ liệu mới bị bỏ qua ngầm.
49. A - Schema Evolution giúp thích ứng an toàn với schema mới.
50. A - Auto-column addition tự thêm cột khi nguồn có thuộc tính mới.
51. A - Backward compatibility là code cũ đọc được cấu trúc mới.
52. A - Full compatibility kết hợp backward và forward.
53. A - Iceberg/Delta/Registry/Fivetran đều hỗ trợ thay đổi schema.
54. A - Observability theo dõi sức khỏe dữ liệu end-to-end.
55. A - Observability đi xa hơn monitoring vì giải thích nguyên nhân/vị trí lỗi.
56. A - Freshness đo dữ liệu có cập nhật đúng hạn không.
57. A - Volume phát hiện số bản ghi bất thường.
58. A - Distribution kiểm tra thống kê dữ liệu trong ngưỡng.
59. A - Lineage truy vết nguồn lỗi.
60. A - MTTR là thời gian trung bình để khắc phục sự cố.
