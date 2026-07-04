# Trắc nghiệm chương 1 - Chiến lược & Kiến trúc dữ liệu hiện đại

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide1.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Từ RDBMS truyền thống đến AI-Native Lakehouse

**Câu 1.** Trong thập niên 1980s, RDBMS chủ yếu tập trung phục vụ loại tác vụ nào?

A. Giao dịch đơn lẻ OLTP  
B. Huấn luyện mô hình AI quy mô lớn  
C. Truy vấn liên kết đa nguồn dữ liệu  
D. Lưu trữ dữ liệu phi cấu trúc trên S3  

**Câu 2.** Data Warehouse nổi lên trong thập niên 1990s chủ yếu để phục vụ mục tiêu nào?

A. Tạo Data Product theo từng miền nghiệp vụ  
B. Báo cáo quản trị và phân tích OLAP  
C. Lưu trữ video, âm thanh, văn bản thô  
D. Tự động gán nhãn dữ liệu nhạy cảm  

**Câu 3.** Làn sóng Data Lake trong thập niên 2010s gắn với đặc điểm nào?

A. Chỉ lưu dữ liệu đã chuẩn hóa theo schema cố định  
B. Chỉ phục vụ OLTP tốc độ cao  
C. Lưu trữ dữ liệu thô quy mô lớn trên Hadoop/S3  
D. Loại bỏ hoàn toàn nhu cầu Object Storage  

**Câu 4.** Lakehouse xuất hiện trong thập niên 2020s nhằm hợp nhất hai yếu tố nào?

A. IAM Policies và Bucket Policies  
B. OLTP và giao diện người dùng  
C. Mạng xã hội và IoT, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
D. Tính tin cậy của SQL và tính linh hoạt của Data Lake  

**Câu 5.** Xu hướng AI-Native trong kiến trúc dữ liệu hiện nay có ý nghĩa gần nhất là gì?

A. Hỗ trợ AI ngay từ tầng lưu trữ và quản trị dữ liệu  
B. Chỉ dùng dữ liệu dạng bảng quan hệ  
C. Không cần bảo mật dữ liệu vì AI tự xử lý  
D. Loại bỏ hoàn toàn metadata, ma khong can metadata, catalog hoac buoc kiem chung bo sung  

**Câu 6.** Open Table Formats như Iceberg và Delta Lake được nhấn mạnh vì lý do nào?

A. Là hệ quản trị CSDL quan hệ truyền thống  
B. Trở thành tiêu chuẩn kết nối trong hệ sinh thái Lakehouse  
C. Chỉ dùng để mã hóa dữ liệu khi truyền qua mạng  
D. Thay thế hoàn toàn mọi công cụ BI, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 7.** Tư duy dữ liệu hiện đại chuyển từ "lưu trữ để báo cáo" sang hướng nào?

A. Lưu trữ để xóa dữ liệu nhanh hơn  
B. Lưu trữ để giảm hoàn toàn nhu cầu phân tích  
C. Lưu trữ để dự báo và hành động  
D. Lưu trữ để tránh dùng AI  

**Câu 8.** Hạn chế "Scale-out nghẽn cổ chai" của RDBMS truyền thống thể hiện điều gì?

A. RDBMS không cần mở rộng khi có Big Data  
B. RDBMS rất dễ mở rộng ngang với chi phí thấp  
C. Scale-out chỉ liên quan đến giao diện báo cáo  
D. Mở rộng theo chiều ngang khó khăn và đắt đỏ  

**Câu 9.** Schema-on-write trong RDBMS truyền thống thường gây hạn chế nào?

A. Dữ liệu phải có cấu trúc nghiêm ngặt trước khi nạp  
B. Dữ liệu có thể lưu tự do không cần cấu trúc  
C. Dữ liệu luôn được tự động phân loại bởi AI  
D. Dữ liệu không cần kiểm soát chất lượng, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  

**Câu 10.** Vì sao RDBMS truyền thống thường không tối ưu cho Big Data phi cấu trúc?

A. Vì không có khả năng lưu bảng quan hệ  
B. Vì không tối ưu cho dữ liệu như video, văn bản, âm thanh  
C. Vì chỉ xử lý tốt dữ liệu dạng video, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Vì chỉ chạy được trên Object Storage  

**Câu 11.** Native Vector trong AI-Native Lakehouse dùng để làm gì?

A. Sao lưu dữ liệu sang nhiều vùng địa lý  
B. Chỉ định quyền truy cập vào bucket  
C. Lưu trữ và truy vấn Vector Embeddings trực tiếp cho LLMs  
D. Tự động tắt cụm compute khi rảnh  

**Câu 12.** Feature Store trong AI-Native Lakehouse có vai trò chính nào?

A. Chỉ dùng để chạy truy vấn SQL truyền thống  
B. Lưu trữ bản sao file để khôi phục  
C. Thay thế hoàn toàn Data Catalog, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Quản lý và tái sử dụng các đặc trưng cho mô hình ML  

**Câu 13.** Khả năng Streaming thời gian thực trong Lakehouse nghĩa là gì?

A. Nạp và phân tích dữ liệu ngay khi vừa phát sinh  
B. Không cho phép dữ liệu thay đổi theo thời gian  
C. Chỉ phân tích dữ liệu sau khi chờ tổng hợp cuối tháng  
D. Chỉ dùng cho dữ liệu đã lưu trong tape archive  

**Câu 14.** Lý do doanh nghiệp cần chuyển đổi sang kiến trúc dữ liệu hiện đại là gì?

A. Tăng độ trễ từ dữ liệu đến quyết định, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. Tăng Time-to-Insight bằng cách giảm độ trễ ra quyết định  
C. Bắt buộc duy trì song song Lake và Warehouse  
D. Giảm khả năng truy vết dòng đời dữ liệu  

**Câu 15.** "Sẵn sàng cho Generative AI" trong slide được hiểu là gì?

A. Chỉ lưu dữ liệu ở dạng PDF  
B. Không cần dữ liệu vì mô hình AI tự biết mọi thứ  
C. Cung cấp dữ liệu sạch làm nhiên liệu cho các tác nhân AI  
D. Không cần kiểm toán dữ liệu cho AI  

### B. Modern Data Warehouse trên Cloud

**Câu 16.** SaaS trong Modern Data Warehouse nghĩa là gì?

A. Hệ thống bắt buộc tự mua server vật lý  
B. Chỉ là định dạng file nén  
C. Một loại metadata động, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
D. Hệ thống được cung cấp dưới dạng dịch vụ phần mềm  

**Câu 17.** Zero Management nhấn mạnh điều gì?

A. Giảm tối đa việc cấu hình, cài đặt và bảo trì hạ tầng  
B. Không cần người dùng truy vấn dữ liệu  
C. Tăng tối đa việc cấu hình thủ công  
D. Không cần quản trị bảo mật, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  

**Câu 18.** Elasticity trong Cloud Data Warehouse là khả năng nào?

A. Sao chép dữ liệu sang tape, va luon thay the hoan toan cac co che con lai trong kien truc  
B. Co giãn tài nguyên tính toán nhanh chóng  
C. Chỉ cho phép một người dùng truy vấn  
D. Cố định tài nguyên trong nhiều năm  

**Câu 19.** Pay-as-you-go có ý nghĩa tài chính nào?

A. Trả phí bản quyền cố định như RDBMS truyền thống  
B. Trả tiền trước cho 5 năm dung lượng ổ cứng  
C. Chỉ trả tiền cho tài nguyên thực sự sử dụng  
D. Không theo dõi chi phí vận hành  

**Câu 20.** High Concurrency trong Modern Data Warehouse đề cập đến điều gì?

A. Chỉ cho phép một truy vấn tại một thời điểm  
B. Chỉ dùng cho dữ liệu archive, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
C. Chỉ xử lý dữ liệu phi cấu trúc  
D. Hỗ trợ nhiều người dùng truy vấn đồng thời mà không suy giảm hiệu năng đáng kể  

**Câu 21.** Lợi ích loại bỏ CAPEX khi chuyển sang Cloud là gì?

A. Không cần đầu tư lớn ban đầu vào phần cứng và phòng máy  
B. Không còn chi phí vận hành nào  
C. Phải mua toàn bộ server trước khi triển khai  
D. Không cần kiểm soát ngân sách, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  

**Câu 22.** Auto-suspend giúp quản lý chi phí bằng cách nào?

A. Tự động nhân đôi số máy chủ mọi lúc  
B. Tắt cụm tính toán khi không có truy vấn  
C. Xóa metadata khỏi hệ thống, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Chuyển mọi dữ liệu sang Hot Storage  

**Câu 23.** Dùng Parquet/ORC trong tối ưu hóa dữ liệu nạp nhằm mục tiêu gì?

A. Bắt buộc chuyển về file văn bản thô  
B. Tăng trùng lặp dữ liệu  
C. Giảm phí lưu trữ nhờ định dạng nén hiệu quả  
D. Ngăn không cho truy vấn dữ liệu  

**Câu 24.** Theo slide, Snowflake nổi bật ở điểm nào?

A. Chỉ chạy trên máy chủ vật lý nội bộ  
B. Không hỗ trợ mở rộng tức thì, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
C. Không có mô hình multi-cluster compute  
D. Tách rời Compute/Storage và chia sẻ dữ liệu an toàn  

**Câu 25.** Azure Synapse Analytics được mô tả là nền tảng có khả năng nào?

A. Hợp nhất SQL, Spark và tích hợp dữ liệu trong một môi trường  
B. Chỉ lưu trữ object không truy vấn được  
C. Chỉ phục vụ mạng xã hội, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
D. Chỉ thay thế IAM Policies  

### C. Data Fabric và Active Metadata

**Câu 26.** Triết lý "tấm vải dữ liệu" của Data Fabric là gì?

A. Chỉ lưu dữ liệu trong một bảng duy nhất  
B. Kết nối các nguồn dữ liệu rời rạc thành một thể thống nhất  
C. Tập trung xóa mọi nguồn dữ liệu cũ  
D. Chỉ phân quyền theo từng file PDF, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  

**Câu 27.** Virtualization trong Data Fabric cho phép điều gì?

A. Luôn sao chép toàn bộ dữ liệu về một kho trung tâm  
B. Xóa bỏ metadata  
C. Truy cập dữ liệu tại nguồn mà không cần sao chép  
D. Chỉ xử lý dữ liệu đã tổng hợp Gold  

**Câu 28.** Abstraction Layer trong Data Fabric có tác dụng gì?

A. Tăng phụ thuộc vào từng hệ thống rời rạc  
B. Làm người dùng phải tự cấu hình mọi nguồn dữ liệu  
C. Chỉ dùng để nén file Parquet, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Che giấu sự phức tạp của hạ tầng bên dưới với người dùng cuối  

**Câu 29.** Active Metadata khác metadata truyền thống ở điểm nào?

A. Metadata không còn tĩnh mà có khả năng hành động  
B. Metadata bị loại bỏ khỏi kiến trúc, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
C. Metadata chỉ dùng để lưu màu sắc giao diện  
D. Metadata không liên quan đến bảo mật  

**Câu 30.** AI-Driven Analysis trong Active Metadata dùng AI để làm gì?

A. Chỉ sinh báo cáo dạng PDF  
B. Đề xuất tối ưu hóa các đường ống dữ liệu  
C. Tự động xóa Data Catalog, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Thay thế toàn bộ dữ liệu nguồn  

**Câu 31.** Knowledge Graph trong Data Fabric phục vụ mục tiêu nào?

A. Lưu file backup dưới dạng object lock  
B. Tự động tăng số lượng CPU  
C. Xây dựng bản đồ quan hệ ngữ nghĩa giữa các thực thể kinh doanh  
D. Xóa các sản phẩm dữ liệu theo miền  

**Câu 32.** Data Catalog là gì?

A. Một định dạng bảng như Delta Lake  
B. Một lớp tính toán GPU cho AI, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
C. Một chính sách xóa dữ liệu cũ  
D. Thư viện chứa thông tin và vị trí của các nguồn dữ liệu  

**Câu 33.** Data Virtualization Engine trong Data Fabric cho phép điều gì?

A. Chạy truy vấn liên kết Federated Query  
B. Chỉ lưu dữ liệu đã aggregate  
C. Mã hóa dữ liệu in-transit bằng TLS  
D. Tự động tạo Virtual Warehouse trong Snowflake  

**Câu 34.** Thách thức lớn của Data Fabric là gì?

A. Không thể dùng trong môi trường hybrid-cloud  
B. Phụ thuộc lớn vào chất lượng metadata  
C. Không thể kết nối dữ liệu đa nguồn  
D. Luôn rẻ hơn mọi giải pháp khác  

### D. Data Mesh

**Câu 35.** Data Mesh chuyển quyền quyết định dữ liệu từ đâu sang đâu?

A. Từ người dùng sang ổ cứng vật lý  
B. Từ Cloud sang tape archive  
C. Từ IT trung tâm sang các đơn vị kinh doanh/domain  
D. Từ AI sang Data Catalog  

**Câu 36.** Domain Ownership trong Data Mesh nghĩa là gì?

A. Dữ liệu không có chủ sở hữu, ma khong phu thuoc vao ngu canh nghiep vu hay muc tieu phan tich  
B. Mọi dữ liệu do một nhóm IT trung tâm độc quyền quản lý  
C. Chỉ nhà cung cấp Cloud sở hữu dữ liệu  
D. Các đơn vị nghiệp vụ sở hữu và vận hành dữ liệu của chính mình  

**Câu 37.** Data as a Product yêu cầu dữ liệu được nhìn nhận như thế nào?

A. Như một sản phẩm phục vụ người dùng khác  
B. Như dữ liệu không cần tài liệu hướng dẫn  
C. Như file tạm không cần chất lượng  
D. Như dữ liệu chỉ dùng nội bộ một người  

**Câu 38.** Self-serve Platform trong Data Mesh là gì?

A. Kho lưu trữ lạnh cho dữ liệu pháp lý  
B. Nền tảng chung để các domain tự triển khai và vận hành dữ liệu  
C. Chính sách bucket cho object storage  
D. Công cụ chỉ dùng để tạo slide, va luon thay the hoan toan cac co che con lai trong kien truc  

**Câu 39.** Federated Governance trong Data Mesh nhấn mạnh điều gì?

A. Không cần quản trị dữ liệu  
B. Mỗi domain tùy ý đặt chuẩn riêng, không cần liên thông  
C. Quản trị chung qua tiêu chuẩn kết nối và bảo mật thống nhất  
D. Chỉ quản trị chi phí lưu trữ archive  

**Câu 40.** Một Data Product tốt cần đặc điểm nào?

A. Khó tìm kiếm, không tài liệu, không SLA  
B. Chỉ tồn tại dưới dạng dữ liệu thô không kiểm tra  
C. Không phân quyền truy cập, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
D. Discoverable, Addressable, Trustworthy, Interoperable  

**Câu 41.** Thách thức điển hình khi triển khai Data Mesh là gì?

A. Các đơn vị kinh doanh có thể thiếu kỹ năng Data Engineering  
B. Luôn giảm chi phí Cloud trong mọi trường hợp  
C. Không cần nền tảng tự phục vụ, trong moi tinh huong ma khong can xet den dieu kien du lieu cu the  
D. Không bao giờ xảy ra xung đột định nghĩa chỉ số  

### E. Unified Lakehouse, Object Storage, Compute/Storage Decoupling

**Câu 42.** Vì sao Lakehouse được xem là tương lai?

A. Chỉ dùng cho OLTP truyền thống  
B. Hợp nhất dữ liệu có cấu trúc và phi cấu trúc tại một nơi  
C. Không hỗ trợ Machine Learning, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
D. Bắt buộc phụ thuộc vào một nhà cung cấp duy nhất  

**Câu 43.** ACID trong Lakehouse nhấn mạnh điều gì?

A. Chỉ dùng để nén file  
B. Chỉ là tên một dịch vụ Cloud  
C. Giao dịch dữ liệu tin cậy như cơ sở dữ liệu quan hệ  
D. Không liên quan đến toàn vẹn dữ liệu  

**Câu 44.** Delta Lake trong Open Table Formats nổi bật với khả năng nào?

A. Chỉ lưu trữ ảnh tĩnh, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. Không hỗ trợ dữ liệu lớn  
C. Không hỗ trợ truy vấn lịch sử  
D. Time Travel và ACID cho dữ liệu trên Lake  

**Câu 45.** Apache Iceberg được mô tả phù hợp với điểm nào?

A. Định dạng bảng hiện đại, hỗ trợ hiệu năng cao và schema evolution  
B. Chính sách IAM của AWS, ma khong can metadata, catalog hoac buoc kiem chung bo sung  
C. Dịch vụ SaaS chỉ để gửi email  
D. Công cụ trực quan hóa slide  

**Câu 46.** Trong Medallion Architecture, Bronze Layer thường chứa gì?

A. Dữ liệu tổng hợp sẵn cho báo cáo kinh doanh  
B. Dữ liệu thô, giữ nguyên định dạng từ nguồn  
C. Chỉ dữ liệu đã dùng cho dashboard BI  
D. Chỉ metadata động  

**Câu 47.** Silver Layer trong Medallion Architecture thường phục vụ điều gì?

A. Chỉ là tầng xóa dữ liệu cũ  
B. Dữ liệu chưa qua xử lý, giữ nguyên mọi lỗi  
C. Dữ liệu đã làm sạch, hợp nhất, chuẩn hóa và có thể phục vụ Data Science  
D. Chỉ dành cho Object Lock  

**Câu 48.** Gold Layer thường phù hợp nhất với mục tiêu nào?

A. Lưu file tạm chưa xử lý  
B. Chỉ làm nơi chứa dữ liệu lỗi  
C. Chỉ chứa cấu hình mạng, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Báo cáo kinh doanh, BI và AI nhờ dữ liệu tổng hợp sẵn sàng sử dụng  

**Câu 49.** So sánh đúng nhất giữa Lakehouse, Fabric và Mesh là gì?

A. Lakehouse tập trung hạ tầng/hiệu năng, Fabric tập trung kết nối/ảo hóa, Mesh tập trung con người/tổ chức  
B. Cả ba đều chỉ là tên gọi khác của RDBMS, de bo qua cac rang buoc ve chat luong, bao mat va quan tri du lieu  
C. Fabric chỉ phù hợp khi không có metadata  
D. Mesh chỉ giải quyết vấn đề định dạng file  

**Câu 50.** Khi nào nên ưu tiên Data Fabric?

A. Khi không cần tích hợp hệ thống cũ, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
B. Khi dữ liệu phân tán rộng, khó di chuyển và cần kết nối nhanh qua lớp metadata/ảo hóa  
C. Khi dữ liệu tập trung sẵn, quy mô nhỏ và chỉ cần đơn giản hóa hạ tầng  
D. Khi mọi phòng ban không cần chia sẻ dữ liệu  

**Câu 51.** Khi nào nên ưu tiên Data Mesh?

A. Khi chỉ có một nhóm nhỏ và dữ liệu chưa phân tán  
B. Khi không cần Data Product  
C. Khi tổ chức lớn, IT không thể hiểu hết nhu cầu các domain và muốn tăng tự chủ dữ liệu  
D. Khi muốn loại bỏ trách nhiệm chất lượng dữ liệu của domain  

**Câu 52.** Object Storage khác hệ thống thư mục truyền thống ở điểm nào?

A. Không có metadata, voi gia dinh moi nguon du lieu luon dong nhat va chinh xac tuyet doi  
B. Bắt buộc lưu theo cây thư mục cứng như file system cổ điển  
C. Không truy cập được qua API  
D. Quản lý dữ liệu trong không gian phẳng và truy cập object bằng key  

**Câu 53.** Metadata phong phú trong Object Storage cho phép điều gì?

A. Gán các cặp key-value tùy chỉnh để phân loại dữ liệu  
B. Xóa bỏ mọi thông tin mô tả object  
C. Chỉ định số CPU cho truy vấn SQL  
D. Tạo SLA cho Data Mesh, nhu mot quy tac co dinh ap dung giong nhau cho moi he thong  

**Câu 54.** Archive/Glacier Storage Tier phù hợp nhất cho dữ liệu nào?

A. Dữ liệu streaming real-time, voi gia dinh nguoi dung luon hieu dung toan bo ngu nghia du lieu  
B. Dữ liệu lưu trữ lâu dài, ít truy cập, cần chi phí thấp nhưng chấp nhận lấy ra lâu  
C. Dữ liệu truy cập hàng ngày cần độ trễ thấp  
D. Dữ liệu cache tạm thời của CPU  

**Câu 55.** Intelligent Tiering giúp tối ưu chi phí bằng cách nào?

A. Cố định mọi dữ liệu ở Hot Storage  
B. Xóa mọi object sau một ngày  
C. AI theo dõi thói quen truy cập và tự chuyển dữ liệu giữa các tầng  
D. Tắt toàn bộ metadata  

**Câu 56.** Mã hóa In-Transit thường dùng cơ chế nào trong slide?

A. OTF  
B. SLA  
C. OLAP  
D. TLS  

**Câu 57.** Nguyên lý tách rời Compute và Storage nghĩa là gì?

A. Lưu trữ và tính toán ở các nơi khác nhau, có thể mở rộng độc lập  
B. CPU và ổ cứng luôn phải mua cùng nhau  
C. Dữ liệu chỉ tồn tại trong RAM, va co the ap dung truc tiep ma khong can thiet ke pipeline phu hop  
D. Không thể dùng nhiều cụm compute trên cùng dữ liệu  

**Câu 58.** Lợi ích lớn của mô hình decoupled là gì?

A. Dữ liệu mất khi compute bị lỗi  
B. Có thể tăng compute mà không cần tăng dung lượng lưu trữ tương ứng  
C. Không phù hợp với Cloud, va luon thay the hoan toan cac co che con lai trong kien truc  
D. Phải mua thêm ổ cứng mỗi khi tăng CPU  

**Câu 59.** Predicate Pushdown trong kiến trúc decoupled nhằm mục tiêu gì?

A. Tạo bản sao dữ liệu không tốn dung lượng  
B. Tự động sao lưu dữ liệu sang nhiều vùng  
C. Chỉ đưa các cột và dòng cần thiết từ storage về compute để giảm tải mạng  
D. Luôn đọc toàn bộ dữ liệu về CPU  

**Câu 60.** Zero-copy Cloning trong Snowflake có ý nghĩa nào?

A. Chỉ dùng để mã hóa dữ liệu khi truyền  
B. Xóa dữ liệu gốc trước khi thử nghiệm, ma khong can phan biet batch, real-time hay dac diem cua nguon du lieu  
C. Sao chép toàn bộ dữ liệu thành nhiều bản vật lý  
D. Tạo bản sao dữ liệu cho thử nghiệm mà không tốn thêm dung lượng đĩa đáng kể  

## Đáp án và giải thích ngắn

1. A - RDBMS thời kỳ đầu tập trung vào OLTP, tức giao dịch đơn lẻ.
2. B - Data Warehouse phục vụ báo cáo quản trị và phân tích OLAP.
3. C - Data Lake gắn với lưu dữ liệu thô quy mô lớn trên Hadoop/S3.
4. D - Lakehouse kết hợp độ tin cậy SQL với tính linh hoạt của Lake.
5. A - AI-Native hỗ trợ AI ngay từ tầng lưu trữ/quản trị.
6. B - Iceberg, Delta Lake là các Open Table Formats quan trọng trong Lakehouse.
7. C - Tư duy chuyển sang lưu trữ để dự báo và hành động.
8. D - RDBMS truyền thống khó và đắt khi scale-out.
9. A - Schema-on-write yêu cầu cấu trúc dữ liệu trước khi nạp.
10. B - RDBMS không tối ưu cho dữ liệu phi cấu trúc như video, văn bản, âm thanh.
11. C - Native Vector phục vụ lưu và truy vấn Vector Embeddings cho LLMs.
12. D - Feature Store quản lý, tái sử dụng feature cho ML.
13. A - Streaming cho phép nạp và phân tích dữ liệu ngay khi phát sinh.
14. B - Time-to-Insight là giảm độ trễ từ dữ liệu đến quyết định.
15. C - Generative AI cần dữ liệu sạch làm nhiên liệu.
16. D - SaaS là cung cấp hệ thống dưới dạng dịch vụ phần mềm.
17. A - Zero Management giảm gánh nặng cấu hình, cài đặt, bảo trì.
18. B - Elasticity là co giãn tài nguyên nhanh chóng.
19. C - Pay-as-you-go chỉ trả cho phần sử dụng.
20. D - High Concurrency là hỗ trợ nhiều truy vấn/người dùng đồng thời.
21. A - Loại bỏ CAPEX nghĩa là không cần đầu tư lớn ban đầu.
22. B - Auto-suspend tắt compute khi không có truy vấn.
23. C - Parquet/ORC giúp nén và giảm chi phí lưu trữ.
24. D - Snowflake nổi bật ở compute/storage decoupling và data sharing.
25. A - Synapse hợp nhất SQL, Spark và tích hợp dữ liệu.
26. B - Data Fabric kết nối nguồn dữ liệu rời rạc thành thể thống nhất.
27. C - Virtualization cho phép truy cập tại nguồn, giảm sao chép.
28. D - Abstraction Layer che giấu phức tạp hạ tầng.
29. A - Active Metadata là metadata có khả năng hành động.
30. B - AI phân tích metadata để tối ưu pipeline.
31. C - Knowledge Graph biểu diễn quan hệ ngữ nghĩa giữa thực thể kinh doanh.
32. D - Data Catalog chứa thông tin và vị trí nguồn dữ liệu.
33. A - Data Virtualization Engine hỗ trợ Federated Query.
34. B - Data Fabric phụ thuộc mạnh vào chất lượng metadata.
35. C - Data Mesh chuyển quyền từ IT trung tâm sang domain/đơn vị kinh doanh.
36. D - Domain Ownership là domain sở hữu và vận hành dữ liệu của mình.
37. A - Data as a Product xem dữ liệu như sản phẩm có người dùng.
38. B - Self-serve Platform giúp domain tự triển khai trên nền tảng chung.
39. C - Federated Governance quản trị qua chuẩn thống nhất.
40. D - Data Product cần dễ tìm, có địa chỉ, đáng tin cậy và liên thông.
41. A - Domain có thể thiếu kỹ năng Data Engineering.
42. B - Lakehouse hợp nhất dữ liệu có cấu trúc và phi cấu trúc.
43. C - ACID đảm bảo giao dịch và toàn vẹn dữ liệu.
44. D - Delta Lake nổi bật với Time Travel và ACID.
45. A - Iceberg hỗ trợ hiệu năng cao và thay đổi schema linh hoạt.
46. B - Bronze giữ dữ liệu thô từ nguồn.
47. C - Silver là dữ liệu đã làm sạch/chuẩn hóa, phù hợp Data Science.
48. D - Gold là dữ liệu tổng hợp, sẵn sàng cho BI/AI.
49. A - Đây là phân biệt cốt lõi giữa ba kiến trúc.
50. B - Fabric phù hợp khi dữ liệu phân tán và cần lớp kết nối/ảo hóa.
51. C - Mesh phù hợp tổ chức lớn, cần tự chủ theo domain.
52. D - Object Storage dùng flat namespace và key.
53. A - Metadata key-value giúp phân loại object.
54. B - Archive/Glacier dành cho lưu lâu, rẻ, truy xuất chậm.
55. C - Intelligent Tiering tự chuyển tầng theo thói quen truy cập.
56. D - TLS bảo vệ dữ liệu khi truyền qua mạng.
57. A - Decoupling tách compute và storage để mở rộng độc lập.
58. B - Có thể tăng CPU/compute mà không phải tăng storage.
59. C - Predicate Pushdown giảm lượng dữ liệu truyền từ storage về compute.
60. D - Zero-copy Cloning tạo môi trường thử nghiệm không tốn thêm dung lượng đáng kể.

