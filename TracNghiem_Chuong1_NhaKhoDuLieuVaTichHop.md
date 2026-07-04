# Trắc nghiệm chương 1 - Chiến lược & Kiến trúc dữ liệu hiện đại

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide1.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Từ RDBMS truyền thống đến AI-Native Lakehouse

**Câu 1.** Trong thập niên 1980s, RDBMS chủ yếu tập trung phục vụ loại tác vụ nào?

A. Huấn luyện mô hình AI quy mô lớn  
B. Giao dịch đơn lẻ OLTP  
C. Lưu trữ dữ liệu phi cấu trúc trên S3  
D. Truy vấn liên kết đa nguồn dữ liệu  

**Câu 2.** Data Warehouse nổi lên trong thập niên 1990s chủ yếu để phục vụ mục tiêu nào?

A. Báo cáo quản trị và phân tích OLAP  
B. Lưu trữ video, âm thanh, văn bản thô  
C. Tự động gán nhãn dữ liệu nhạy cảm  
D. Tạo Data Product theo từng miền nghiệp vụ  

**Câu 3.** Làn sóng Data Lake trong thập niên 2010s gắn với đặc điểm nào?

A. Chỉ lưu dữ liệu đã chuẩn hóa theo schema cố định  
B. Lưu trữ dữ liệu thô quy mô lớn trên Hadoop/S3  
C. Loại bỏ hoàn toàn nhu cầu Object Storage  
D. Chỉ phục vụ OLTP tốc độ cao  

**Câu 4.** Lakehouse xuất hiện trong thập niên 2020s nhằm hợp nhất hai yếu tố nào?

A. Tính tin cậy của SQL và tính linh hoạt của Data Lake  
B. OLTP và giao diện người dùng  
C. Mạng xã hội và IoT  
D. IAM Policies và Bucket Policies  

**Câu 5.** Xu hướng AI-Native trong kiến trúc dữ liệu hiện nay có ý nghĩa gần nhất là gì?

A. Chỉ dùng dữ liệu dạng bảng quan hệ  
B. Hỗ trợ AI ngay từ tầng lưu trữ và quản trị dữ liệu  
C. Loại bỏ hoàn toàn metadata  
D. Không cần bảo mật dữ liệu vì AI tự xử lý  

**Câu 6.** Open Table Formats như Iceberg và Delta Lake được nhấn mạnh vì lý do nào?

A. Trở thành tiêu chuẩn kết nối trong hệ sinh thái Lakehouse  
B. Chỉ dùng để mã hóa dữ liệu khi truyền qua mạng  
C. Thay thế hoàn toàn mọi công cụ BI  
D. Là hệ quản trị CSDL quan hệ truyền thống  

**Câu 7.** Tư duy dữ liệu hiện đại chuyển từ "lưu trữ để báo cáo" sang hướng nào?

A. Lưu trữ để xóa dữ liệu nhanh hơn  
B. Lưu trữ để dự báo và hành động  
C. Lưu trữ để giảm hoàn toàn nhu cầu phân tích  
D. Lưu trữ để tránh dùng AI  

**Câu 8.** Hạn chế "Scale-out nghẽn cổ chai" của RDBMS truyền thống thể hiện điều gì?

A. RDBMS rất dễ mở rộng ngang với chi phí thấp  
B. Mở rộng theo chiều ngang khó khăn và đắt đỏ  
C. RDBMS không cần mở rộng khi có Big Data  
D. Scale-out chỉ liên quan đến giao diện báo cáo  

**Câu 9.** Schema-on-write trong RDBMS truyền thống thường gây hạn chế nào?

A. Dữ liệu phải có cấu trúc nghiêm ngặt trước khi nạp  
B. Dữ liệu có thể lưu tự do không cần cấu trúc  
C. Dữ liệu luôn được tự động phân loại bởi AI  
D. Dữ liệu không cần kiểm soát chất lượng  

**Câu 10.** Vì sao RDBMS truyền thống thường không tối ưu cho Big Data phi cấu trúc?

A. Vì chỉ xử lý tốt dữ liệu dạng video  
B. Vì không tối ưu cho dữ liệu như video, văn bản, âm thanh  
C. Vì không có khả năng lưu bảng quan hệ  
D. Vì chỉ chạy được trên Object Storage  

**Câu 11.** Native Vector trong AI-Native Lakehouse dùng để làm gì?

A. Lưu trữ và truy vấn Vector Embeddings trực tiếp cho LLMs  
B. Sao lưu dữ liệu sang nhiều vùng địa lý  
C. Chỉ định quyền truy cập vào bucket  
D. Tự động tắt cụm compute khi rảnh  

**Câu 12.** Feature Store trong AI-Native Lakehouse có vai trò chính nào?

A. Quản lý và tái sử dụng các đặc trưng cho mô hình ML  
B. Lưu trữ bản sao file để khôi phục  
C. Chỉ dùng để chạy truy vấn SQL truyền thống  
D. Thay thế hoàn toàn Data Catalog  

**Câu 13.** Khả năng Streaming thời gian thực trong Lakehouse nghĩa là gì?

A. Chỉ phân tích dữ liệu sau khi chờ tổng hợp cuối tháng  
B. Nạp và phân tích dữ liệu ngay khi vừa phát sinh  
C. Không cho phép dữ liệu thay đổi theo thời gian  
D. Chỉ dùng cho dữ liệu đã lưu trong tape archive  

**Câu 14.** Lý do doanh nghiệp cần chuyển đổi sang kiến trúc dữ liệu hiện đại là gì?

A. Tăng độ trễ từ dữ liệu đến quyết định  
B. Tăng Time-to-Insight bằng cách giảm độ trễ ra quyết định  
C. Bắt buộc duy trì song song Lake và Warehouse  
D. Giảm khả năng truy vết dòng đời dữ liệu  

**Câu 15.** "Sẵn sàng cho Generative AI" trong slide được hiểu là gì?

A. Cung cấp dữ liệu sạch làm nhiên liệu cho các tác nhân AI  
B. Không cần dữ liệu vì mô hình AI tự biết mọi thứ  
C. Chỉ lưu dữ liệu ở dạng PDF  
D. Không cần kiểm toán dữ liệu cho AI  

### B. Modern Data Warehouse trên Cloud

**Câu 16.** SaaS trong Modern Data Warehouse nghĩa là gì?

A. Hệ thống được cung cấp dưới dạng dịch vụ phần mềm  
B. Hệ thống bắt buộc tự mua server vật lý  
C. Chỉ là định dạng file nén  
D. Một loại metadata động  

**Câu 17.** Zero Management nhấn mạnh điều gì?

A. Tăng tối đa việc cấu hình thủ công  
B. Giảm tối đa việc cấu hình, cài đặt và bảo trì hạ tầng  
C. Không cần người dùng truy vấn dữ liệu  
D. Không cần quản trị bảo mật  

**Câu 18.** Elasticity trong Cloud Data Warehouse là khả năng nào?

A. Co giãn tài nguyên tính toán nhanh chóng  
B. Sao chép dữ liệu sang tape  
C. Chỉ cho phép một người dùng truy vấn  
D. Cố định tài nguyên trong nhiều năm  

**Câu 19.** Pay-as-you-go có ý nghĩa tài chính nào?

A. Trả tiền trước cho 5 năm dung lượng ổ cứng  
B. Chỉ trả tiền cho tài nguyên thực sự sử dụng  
C. Trả phí bản quyền cố định như RDBMS truyền thống  
D. Không theo dõi chi phí vận hành  

**Câu 20.** High Concurrency trong Modern Data Warehouse đề cập đến điều gì?

A. Hỗ trợ nhiều người dùng truy vấn đồng thời mà không suy giảm hiệu năng đáng kể  
B. Chỉ cho phép một truy vấn tại một thời điểm  
C. Chỉ dùng cho dữ liệu archive  
D. Chỉ xử lý dữ liệu phi cấu trúc  

**Câu 21.** Lợi ích loại bỏ CAPEX khi chuyển sang Cloud là gì?

A. Không cần đầu tư lớn ban đầu vào phần cứng và phòng máy  
B. Phải mua toàn bộ server trước khi triển khai  
C. Không còn chi phí vận hành nào  
D. Không cần kiểm soát ngân sách  

**Câu 22.** Auto-suspend giúp quản lý chi phí bằng cách nào?

A. Tắt cụm tính toán khi không có truy vấn  
B. Tự động nhân đôi số máy chủ mọi lúc  
C. Xóa metadata khỏi hệ thống  
D. Chuyển mọi dữ liệu sang Hot Storage  

**Câu 23.** Dùng Parquet/ORC trong tối ưu hóa dữ liệu nạp nhằm mục tiêu gì?

A. Giảm phí lưu trữ nhờ định dạng nén hiệu quả  
B. Tăng trùng lặp dữ liệu  
C. Bắt buộc chuyển về file văn bản thô  
D. Ngăn không cho truy vấn dữ liệu  

**Câu 24.** Theo slide, Snowflake nổi bật ở điểm nào?

A. Tách rời Compute/Storage và chia sẻ dữ liệu an toàn  
B. Chỉ chạy trên máy chủ vật lý nội bộ  
C. Không hỗ trợ mở rộng tức thì  
D. Không có mô hình multi-cluster compute  

**Câu 25.** Azure Synapse Analytics được mô tả là nền tảng có khả năng nào?

A. Hợp nhất SQL, Spark và tích hợp dữ liệu trong một môi trường  
B. Chỉ lưu trữ object không truy vấn được  
C. Chỉ phục vụ mạng xã hội  
D. Chỉ thay thế IAM Policies  

### C. Data Fabric và Active Metadata

**Câu 26.** Triết lý "tấm vải dữ liệu" của Data Fabric là gì?

A. Kết nối các nguồn dữ liệu rời rạc thành một thể thống nhất  
B. Tập trung xóa mọi nguồn dữ liệu cũ  
C. Chỉ lưu dữ liệu trong một bảng duy nhất  
D. Chỉ phân quyền theo từng file PDF  

**Câu 27.** Virtualization trong Data Fabric cho phép điều gì?

A. Truy cập dữ liệu tại nguồn mà không cần sao chép  
B. Luôn sao chép toàn bộ dữ liệu về một kho trung tâm  
C. Xóa bỏ metadata  
D. Chỉ xử lý dữ liệu đã tổng hợp Gold  

**Câu 28.** Abstraction Layer trong Data Fabric có tác dụng gì?

A. Che giấu sự phức tạp của hạ tầng bên dưới với người dùng cuối  
B. Làm người dùng phải tự cấu hình mọi nguồn dữ liệu  
C. Tăng phụ thuộc vào từng hệ thống rời rạc  
D. Chỉ dùng để nén file Parquet  

**Câu 29.** Active Metadata khác metadata truyền thống ở điểm nào?

A. Metadata không còn tĩnh mà có khả năng hành động  
B. Metadata bị loại bỏ khỏi kiến trúc  
C. Metadata chỉ dùng để lưu màu sắc giao diện  
D. Metadata không liên quan đến bảo mật  

**Câu 30.** AI-Driven Analysis trong Active Metadata dùng AI để làm gì?

A. Đề xuất tối ưu hóa các đường ống dữ liệu  
B. Tự động xóa Data Catalog  
C. Chỉ sinh báo cáo dạng PDF  
D. Thay thế toàn bộ dữ liệu nguồn  

**Câu 31.** Knowledge Graph trong Data Fabric phục vụ mục tiêu nào?

A. Xây dựng bản đồ quan hệ ngữ nghĩa giữa các thực thể kinh doanh  
B. Lưu file backup dưới dạng object lock  
C. Tự động tăng số lượng CPU  
D. Xóa các sản phẩm dữ liệu theo miền  

**Câu 32.** Data Catalog là gì?

A. Thư viện chứa thông tin và vị trí của các nguồn dữ liệu  
B. Một lớp tính toán GPU cho AI  
C. Một định dạng bảng như Delta Lake  
D. Một chính sách xóa dữ liệu cũ  

**Câu 33.** Data Virtualization Engine trong Data Fabric cho phép điều gì?

A. Chạy truy vấn liên kết Federated Query  
B. Chỉ lưu dữ liệu đã aggregate  
C. Mã hóa dữ liệu in-transit bằng TLS  
D. Tự động tạo Virtual Warehouse trong Snowflake  

**Câu 34.** Thách thức lớn của Data Fabric là gì?

A. Phụ thuộc lớn vào chất lượng metadata  
B. Không thể kết nối dữ liệu đa nguồn  
C. Không thể dùng trong môi trường hybrid-cloud  
D. Luôn rẻ hơn mọi giải pháp khác  

### D. Data Mesh

**Câu 35.** Data Mesh chuyển quyền quyết định dữ liệu từ đâu sang đâu?

A. Từ IT trung tâm sang các đơn vị kinh doanh/domain  
B. Từ người dùng sang ổ cứng vật lý  
C. Từ Cloud sang tape archive  
D. Từ AI sang Data Catalog  

**Câu 36.** Domain Ownership trong Data Mesh nghĩa là gì?

A. Các đơn vị nghiệp vụ sở hữu và vận hành dữ liệu của chính mình  
B. Mọi dữ liệu do một nhóm IT trung tâm độc quyền quản lý  
C. Dữ liệu không có chủ sở hữu  
D. Chỉ nhà cung cấp Cloud sở hữu dữ liệu  

**Câu 37.** Data as a Product yêu cầu dữ liệu được nhìn nhận như thế nào?

A. Như một sản phẩm phục vụ người dùng khác  
B. Như file tạm không cần chất lượng  
C. Như dữ liệu không cần tài liệu hướng dẫn  
D. Như dữ liệu chỉ dùng nội bộ một người  

**Câu 38.** Self-serve Platform trong Data Mesh là gì?

A. Nền tảng chung để các domain tự triển khai và vận hành dữ liệu  
B. Kho lưu trữ lạnh cho dữ liệu pháp lý  
C. Chính sách bucket cho object storage  
D. Công cụ chỉ dùng để tạo slide  

**Câu 39.** Federated Governance trong Data Mesh nhấn mạnh điều gì?

A. Quản trị chung qua tiêu chuẩn kết nối và bảo mật thống nhất  
B. Mỗi domain tùy ý đặt chuẩn riêng, không cần liên thông  
C. Không cần quản trị dữ liệu  
D. Chỉ quản trị chi phí lưu trữ archive  

**Câu 40.** Một Data Product tốt cần đặc điểm nào?

A. Discoverable, Addressable, Trustworthy, Interoperable  
B. Khó tìm kiếm, không tài liệu, không SLA  
C. Chỉ tồn tại dưới dạng dữ liệu thô không kiểm tra  
D. Không phân quyền truy cập  

**Câu 41.** Thách thức điển hình khi triển khai Data Mesh là gì?

A. Các đơn vị kinh doanh có thể thiếu kỹ năng Data Engineering  
B. Không cần nền tảng tự phục vụ  
C. Luôn giảm chi phí Cloud trong mọi trường hợp  
D. Không bao giờ xảy ra xung đột định nghĩa chỉ số  

### E. Unified Lakehouse, Object Storage, Compute/Storage Decoupling

**Câu 42.** Vì sao Lakehouse được xem là tương lai?

A. Hợp nhất dữ liệu có cấu trúc và phi cấu trúc tại một nơi  
B. Chỉ dùng cho OLTP truyền thống  
C. Không hỗ trợ Machine Learning  
D. Bắt buộc phụ thuộc vào một nhà cung cấp duy nhất  

**Câu 43.** ACID trong Lakehouse nhấn mạnh điều gì?

A. Giao dịch dữ liệu tin cậy như cơ sở dữ liệu quan hệ  
B. Chỉ là tên một dịch vụ Cloud  
C. Chỉ dùng để nén file  
D. Không liên quan đến toàn vẹn dữ liệu  

**Câu 44.** Delta Lake trong Open Table Formats nổi bật với khả năng nào?

A. Time Travel và ACID cho dữ liệu trên Lake  
B. Chỉ lưu trữ ảnh tĩnh  
C. Không hỗ trợ dữ liệu lớn  
D. Không hỗ trợ truy vấn lịch sử  

**Câu 45.** Apache Iceberg được mô tả phù hợp với điểm nào?

A. Định dạng bảng hiện đại, hỗ trợ hiệu năng cao và schema evolution  
B. Dịch vụ SaaS chỉ để gửi email  
C. Chính sách IAM của AWS  
D. Công cụ trực quan hóa slide  

**Câu 46.** Trong Medallion Architecture, Bronze Layer thường chứa gì?

A. Dữ liệu thô, giữ nguyên định dạng từ nguồn  
B. Dữ liệu tổng hợp sẵn cho báo cáo kinh doanh  
C. Chỉ dữ liệu đã dùng cho dashboard BI  
D. Chỉ metadata động  

**Câu 47.** Silver Layer trong Medallion Architecture thường phục vụ điều gì?

A. Dữ liệu đã làm sạch, hợp nhất, chuẩn hóa và có thể phục vụ Data Science  
B. Dữ liệu chưa qua xử lý, giữ nguyên mọi lỗi  
C. Chỉ là tầng xóa dữ liệu cũ  
D. Chỉ dành cho Object Lock  

**Câu 48.** Gold Layer thường phù hợp nhất với mục tiêu nào?

A. Báo cáo kinh doanh, BI và AI nhờ dữ liệu tổng hợp sẵn sàng sử dụng  
B. Lưu file tạm chưa xử lý  
C. Chỉ làm nơi chứa dữ liệu lỗi  
D. Chỉ chứa cấu hình mạng  

**Câu 49.** So sánh đúng nhất giữa Lakehouse, Fabric và Mesh là gì?

A. Lakehouse tập trung hạ tầng/hiệu năng, Fabric tập trung kết nối/ảo hóa, Mesh tập trung con người/tổ chức  
B. Cả ba đều chỉ là tên gọi khác của RDBMS  
C. Fabric chỉ phù hợp khi không có metadata  
D. Mesh chỉ giải quyết vấn đề định dạng file  

**Câu 50.** Khi nào nên ưu tiên Data Fabric?

A. Khi dữ liệu phân tán rộng, khó di chuyển và cần kết nối nhanh qua lớp metadata/ảo hóa  
B. Khi dữ liệu tập trung sẵn, quy mô nhỏ và chỉ cần đơn giản hóa hạ tầng  
C. Khi không cần tích hợp hệ thống cũ  
D. Khi mọi phòng ban không cần chia sẻ dữ liệu  

**Câu 51.** Khi nào nên ưu tiên Data Mesh?

A. Khi tổ chức lớn, IT không thể hiểu hết nhu cầu các domain và muốn tăng tự chủ dữ liệu  
B. Khi chỉ có một nhóm nhỏ và dữ liệu chưa phân tán  
C. Khi không cần Data Product  
D. Khi muốn loại bỏ trách nhiệm chất lượng dữ liệu của domain  

**Câu 52.** Object Storage khác hệ thống thư mục truyền thống ở điểm nào?

A. Quản lý dữ liệu trong không gian phẳng và truy cập object bằng key  
B. Bắt buộc lưu theo cây thư mục cứng như file system cổ điển  
C. Không có metadata  
D. Không truy cập được qua API  

**Câu 53.** Metadata phong phú trong Object Storage cho phép điều gì?

A. Gán các cặp key-value tùy chỉnh để phân loại dữ liệu  
B. Xóa bỏ mọi thông tin mô tả object  
C. Chỉ định số CPU cho truy vấn SQL  
D. Tạo SLA cho Data Mesh  

**Câu 54.** Archive/Glacier Storage Tier phù hợp nhất cho dữ liệu nào?

A. Dữ liệu lưu trữ lâu dài, ít truy cập, cần chi phí thấp nhưng chấp nhận lấy ra lâu  
B. Dữ liệu truy cập hàng ngày cần độ trễ thấp  
C. Dữ liệu streaming real-time  
D. Dữ liệu cache tạm thời của CPU  

**Câu 55.** Intelligent Tiering giúp tối ưu chi phí bằng cách nào?

A. AI theo dõi thói quen truy cập và tự chuyển dữ liệu giữa các tầng  
B. Cố định mọi dữ liệu ở Hot Storage  
C. Xóa mọi object sau một ngày  
D. Tắt toàn bộ metadata  

**Câu 56.** Mã hóa In-Transit thường dùng cơ chế nào trong slide?

A. TLS  
B. SLA  
C. OTF  
D. OLAP  

**Câu 57.** Nguyên lý tách rời Compute và Storage nghĩa là gì?

A. Lưu trữ và tính toán ở các nơi khác nhau, có thể mở rộng độc lập  
B. CPU và ổ cứng luôn phải mua cùng nhau  
C. Dữ liệu chỉ tồn tại trong RAM  
D. Không thể dùng nhiều cụm compute trên cùng dữ liệu  

**Câu 58.** Lợi ích lớn của mô hình decoupled là gì?

A. Có thể tăng compute mà không cần tăng dung lượng lưu trữ tương ứng  
B. Phải mua thêm ổ cứng mỗi khi tăng CPU  
C. Dữ liệu mất khi compute bị lỗi  
D. Không phù hợp với Cloud  

**Câu 59.** Predicate Pushdown trong kiến trúc decoupled nhằm mục tiêu gì?

A. Chỉ đưa các cột và dòng cần thiết từ storage về compute để giảm tải mạng  
B. Luôn đọc toàn bộ dữ liệu về CPU  
C. Tự động sao lưu dữ liệu sang nhiều vùng  
D. Tạo bản sao dữ liệu không tốn dung lượng  

**Câu 60.** Zero-copy Cloning trong Snowflake có ý nghĩa nào?

A. Tạo bản sao dữ liệu cho thử nghiệm mà không tốn thêm dung lượng đĩa đáng kể  
B. Sao chép toàn bộ dữ liệu thành nhiều bản vật lý  
C. Xóa dữ liệu gốc trước khi thử nghiệm  
D. Chỉ dùng để mã hóa dữ liệu khi truyền  

## Đáp án và giải thích ngắn

1. B - RDBMS thời kỳ đầu tập trung vào OLTP, tức giao dịch đơn lẻ.
2. A - Data Warehouse phục vụ báo cáo quản trị và phân tích OLAP.
3. B - Data Lake gắn với lưu dữ liệu thô quy mô lớn trên Hadoop/S3.
4. A - Lakehouse kết hợp độ tin cậy SQL với tính linh hoạt của Lake.
5. B - AI-Native hỗ trợ AI ngay từ tầng lưu trữ/quản trị.
6. A - Iceberg, Delta Lake là các Open Table Formats quan trọng trong Lakehouse.
7. B - Tư duy chuyển sang lưu trữ để dự báo và hành động.
8. B - RDBMS truyền thống khó và đắt khi scale-out.
9. A - Schema-on-write yêu cầu cấu trúc dữ liệu trước khi nạp.
10. B - RDBMS không tối ưu cho dữ liệu phi cấu trúc như video, văn bản, âm thanh.
11. A - Native Vector phục vụ lưu và truy vấn Vector Embeddings cho LLMs.
12. A - Feature Store quản lý, tái sử dụng feature cho ML.
13. B - Streaming cho phép nạp và phân tích dữ liệu ngay khi phát sinh.
14. B - Time-to-Insight là giảm độ trễ từ dữ liệu đến quyết định.
15. A - Generative AI cần dữ liệu sạch làm nhiên liệu.
16. A - SaaS là cung cấp hệ thống dưới dạng dịch vụ phần mềm.
17. B - Zero Management giảm gánh nặng cấu hình, cài đặt, bảo trì.
18. A - Elasticity là co giãn tài nguyên nhanh chóng.
19. B - Pay-as-you-go chỉ trả cho phần sử dụng.
20. A - High Concurrency là hỗ trợ nhiều truy vấn/người dùng đồng thời.
21. A - Loại bỏ CAPEX nghĩa là không cần đầu tư lớn ban đầu.
22. A - Auto-suspend tắt compute khi không có truy vấn.
23. A - Parquet/ORC giúp nén và giảm chi phí lưu trữ.
24. A - Snowflake nổi bật ở compute/storage decoupling và data sharing.
25. A - Synapse hợp nhất SQL, Spark và tích hợp dữ liệu.
26. A - Data Fabric kết nối nguồn dữ liệu rời rạc thành thể thống nhất.
27. A - Virtualization cho phép truy cập tại nguồn, giảm sao chép.
28. A - Abstraction Layer che giấu phức tạp hạ tầng.
29. A - Active Metadata là metadata có khả năng hành động.
30. A - AI phân tích metadata để tối ưu pipeline.
31. A - Knowledge Graph biểu diễn quan hệ ngữ nghĩa giữa thực thể kinh doanh.
32. A - Data Catalog chứa thông tin và vị trí nguồn dữ liệu.
33. A - Data Virtualization Engine hỗ trợ Federated Query.
34. A - Data Fabric phụ thuộc mạnh vào chất lượng metadata.
35. A - Data Mesh chuyển quyền từ IT trung tâm sang domain/đơn vị kinh doanh.
36. A - Domain Ownership là domain sở hữu và vận hành dữ liệu của mình.
37. A - Data as a Product xem dữ liệu như sản phẩm có người dùng.
38. A - Self-serve Platform giúp domain tự triển khai trên nền tảng chung.
39. A - Federated Governance quản trị qua chuẩn thống nhất.
40. A - Data Product cần dễ tìm, có địa chỉ, đáng tin cậy và liên thông.
41. A - Domain có thể thiếu kỹ năng Data Engineering.
42. A - Lakehouse hợp nhất dữ liệu có cấu trúc và phi cấu trúc.
43. A - ACID đảm bảo giao dịch và toàn vẹn dữ liệu.
44. A - Delta Lake nổi bật với Time Travel và ACID.
45. A - Iceberg hỗ trợ hiệu năng cao và thay đổi schema linh hoạt.
46. A - Bronze giữ dữ liệu thô từ nguồn.
47. A - Silver là dữ liệu đã làm sạch/chuẩn hóa, phù hợp Data Science.
48. A - Gold là dữ liệu tổng hợp, sẵn sàng cho BI/AI.
49. A - Đây là phân biệt cốt lõi giữa ba kiến trúc.
50. A - Fabric phù hợp khi dữ liệu phân tán và cần lớp kết nối/ảo hóa.
51. A - Mesh phù hợp tổ chức lớn, cần tự chủ theo domain.
52. A - Object Storage dùng flat namespace và key.
53. A - Metadata key-value giúp phân loại object.
54. A - Archive/Glacier dành cho lưu lâu, rẻ, truy xuất chậm.
55. A - Intelligent Tiering tự chuyển tầng theo thói quen truy cập.
56. A - TLS bảo vệ dữ liệu khi truyền qua mạng.
57. A - Decoupling tách compute và storage để mở rộng độc lập.
58. A - Có thể tăng CPU/compute mà không phải tăng storage.
59. A - Predicate Pushdown giảm lượng dữ liệu truyền từ storage về compute.
60. A - Zero-copy Cloning tạo môi trường thử nghiệm không tốn thêm dung lượng đáng kể.
