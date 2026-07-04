# Trắc nghiệm chương 7 - Quản trị, Bảo mật và Đạo đức dữ liệu

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide7.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Data Governance và AI Act

**Câu 1.** Theo slide, AI Act phân cấp hệ thống AI thành bao nhiêu mức độ rủi ro?

A. 4 mức  
B. 2 mức  
C. 6 mức  
D. 10 mức  

**Câu 2.** Mục tiêu chính của việc phân cấp rủi ro trong AI Act là gì?

A. Bảo vệ người dùng  
B. Tăng số lượng mô hình AI  
C. Loại bỏ mọi hệ thống dữ liệu  
D. Thay thế hoàn toàn con người  

**Câu 3.** Theo slide, các doanh nghiệp MIS & Fintech cần thiết lập quản trị dữ liệu nghiêm ngặt từ đâu đến đâu?

A. Từ khâu Ingestion đến vận hành  
B. Chỉ ở giai đoạn dashboard  
C. Chỉ khi mô hình đã lỗi  
D. Chỉ ở khâu marketing  

**Câu 4.** Ba trụ cột bắt buộc trong Data Governance theo AI Act gồm gì?

A. Transparency, Human Oversight, Data Quality  
B. Speed, Storage, Compression  
C. Batch, Stream, Archive  
D. SQL, Python, Excel  

**Câu 5.** Unacceptable Risk trong AI Act được hiểu là gì?

A. Mức rủi ro bị cấm hoàn toàn  
B. Mức rủi ro tự do vận hành  
C. Mức chỉ cần dán nhãn  
D. Mức không cần quản trị  

**Câu 6.** Ví dụ nào thuộc Unacceptable Risk theo slide?

A. Chấm điểm công dân xã hội hoặc AI thao túng hành vi dưới ngưỡng nhận thức  
B. Bộ lọc spam  
C. AI trong trò chơi điện tử  
D. Chatbot có dán nhãn rõ ràng  

**Câu 7.** High Risk trong AI Act cần cách xử lý nào?

A. Kiểm soát nghiêm ngặt  
B. Cấm mọi trường hợp  
C. Không cần ghi nhật ký  
D. Tự do vận hành hoàn toàn  

**Câu 8.** Ví dụ nào thuộc High Risk theo slide?

A. AI trong Fintech đánh giá điểm tín dụng hoặc tuyển dụng nhân sự  
B. Bộ lọc spam  
C. Trò chơi điện tử thông thường  
D. Nén dữ liệu bảng  

**Câu 9.** Transparent/Limited Risk yêu cầu điều gì?

A. Dán nhãn rõ ràng  
B. Cấm tuyệt đối  
C. Không cần thông báo cho người dùng  
D. Chỉ cần tăng tốc truy vấn  

**Câu 10.** Minimal Risk trong slide phù hợp với ví dụ nào?

A. Bộ lọc Spam hoặc AI trong trò chơi điện tử  
B. Chấm điểm công dân xã hội  
C. AI đánh giá tín dụng Fintech  
D. AI quản trị hạ tầng thiết yếu  

**Câu 11.** Nghĩa vụ Data Quality đối với AI rủi ro cao yêu cầu dữ liệu huấn luyện/kiểm thử như thế nào?

A. Đại diện, không chứa sai sót hệ thống và kiểm soát được bias  
B. Càng thiếu càng tốt  
C. Không cần kiểm thử  
D. Chỉ dùng dữ liệu một nhóm duy nhất  

**Câu 12.** Technical Documentation trong AI rủi ro cao yêu cầu lưu trữ gì?

A. Kiến trúc hệ thống và luồng dữ liệu để phục vụ thanh tra  
B. Chỉ ảnh giao diện người dùng  
C. Chỉ tên mô hình  
D. Chỉ điểm số cuối cùng  

**Câu 13.** Traceability trong hệ thống AI rủi ro cao yêu cầu điều gì?

A. Tự động ghi nhật ký để theo dõi và kiểm toán vòng đời vận hành  
B. Xóa log sau mỗi lần chạy  
C. Không lưu lại thay đổi  
D. Chỉ lưu dữ liệu đã tổng hợp  

### B. Automated Data Lineage

**Câu 14.** Automated Data Lineage là gì?

A. Khả năng ghi nhận toàn diện flow dữ liệu từ nguồn, qua biến đổi, đến mô hình AI  
B. Chỉ là công cụ vẽ biểu đồ marketing  
C. Chỉ là mã hóa dữ liệu cấp cột  
D. Chỉ là xóa dữ liệu sau khi dùng  

**Câu 15.** Trong kiến trúc Medallion, lineage theo dõi dữ liệu qua các tầng nào?

A. Bronze, Silver, Gold  
B. Hot, Cool, Archive  
C. Public, Private, Secret  
D. Dev, Test, Prod  

**Câu 16.** Giá trị cốt lõi của lineage với kiểm toán viên và kỹ sư dữ liệu là gì?

A. Hiểu mô hình AI lấy dữ liệu từ đâu và bị biến đổi bởi SQL nào  
B. Che giấu nguồn dữ liệu khỏi người dùng  
C. Xóa toàn bộ lịch sử biến đổi  
D. Chỉ tăng kích thước dữ liệu  

**Câu 17.** Data Source trong luồng quan sát 360 độ ghi nhận gì?

A. Metadata từ CRM, ERP, Web Logs  
B. Chỉ kết quả dự báo cuối cùng  
C. Chỉ quyền truy cập IAM  
D. Chỉ dữ liệu đã ẩn danh  

**Câu 18.** Transformation trong lineage có thể trích xuất gì?

A. Mã SQL từ dbt hoặc Spark để xem logic làm sạch  
B. Mật khẩu người dùng  
C. File ảnh dashboard  
D. Chỉ dữ liệu bị xóa  

**Câu 19.** Data Quality Check trong lineage ghi nhận gì?

A. Các bài test dữ liệu như đúng định dạng, không Null, không trùng lặp  
B. Chỉ số điểm tín dụng  
C. Chỉ màu sắc dashboard  
D. Chỉ chi phí lưu trữ  

**Câu 20.** Impact Analysis trong Automated Lineage giúp gì?

A. Cảnh báo model AI ở tầng Gold bị ảnh hưởng khi bảng Bronze đổi schema  
B. Xóa bảng Bronze khi thay đổi schema  
C. Không cần kiểm tra mô hình downstream  
D. Tự động bỏ qua mọi thay đổi dữ liệu  

**Câu 21.** Data Trust trong pipeline tốt yêu cầu chứng minh điều gì?

A. Dữ liệu nguyên bản và sạch trước khi đưa vào mô hình học máy  
B. Dữ liệu không cần nguồn gốc  
C. Dữ liệu càng thiếu càng tốt  
D. Mô hình không cần kiểm toán  

### C. Fine-grained Security và Secure Data Sharing

**Câu 22.** Row-level Security (RLS) là gì?

A. Bộ lọc động cấp dòng dựa trên danh tính/ngữ cảnh người truy cập  
B. Ẩn một phần dữ liệu trong cột PII  
C. Sao chép file ra ngoài tổ chức  
D. Thêm nhiễu ngẫu nhiên vào kết quả  

**Câu 23.** Ví dụ đúng về RLS là gì?

A. Nhân viên vùng A chỉ xem dữ liệu khách hàng vùng A  
B. Số điện thoại hiển thị dạng 091xxxx888  
C. Xóa dòng dữ liệu cá nhân dị biệt  
D. Tạo Business Glossary  

**Câu 24.** Column-level Masking (CLM) là gì?

A. Ẩn hoặc mã hóa một phần dữ liệu nhạy cảm mà không đổi cấu trúc bảng  
B. Lọc dòng theo vùng của nhân viên  
C. Dùng Semantic Search để tìm bảng  
D. Tạo báo cáo compliance  

**Câu 25.** Ví dụ đúng về CLM là gì?

A. Số điện thoại hiển thị dạng 091xxxx888  
B. Nhân viên vùng A chỉ xem khách vùng A  
C. AI tự động thêm nhiễu vào báo cáo  
D. Kích hoạt báo động đỏ  

**Câu 26.** Trade-off giữa bảo mật và hiệu năng thể hiện ở điểm nào?

A. Mã hóa bảng lớn có thể làm tăng độ trễ truy vấn  
B. Bảo mật luôn làm truy vấn nhanh hơn  
C. Bảo mật không ảnh hưởng hệ thống bao giờ  
D. Chỉ xảy ra với dữ liệu đã xóa  

**Câu 27.** Bài học MIS về bảo mật dữ liệu trong slide là gì?

A. Không được đánh đổi bảo mật bằng hiệu năng vận hành thời gian thực  
B. Nên bỏ bảo mật để tăng tốc  
C. Nên sao chép mọi dữ liệu ra FTP  
D. Không cần kiểm soát quyền  

**Câu 28.** Mô hình ETL/FTP truyền thống trong chia sẻ dữ liệu có rủi ro nào?

A. Tốn lưu trữ và dễ lộ bí mật từ các bản sao  
B. Không sinh bản sao nào  
C. Kiểm soát quyền tập trung tốt hơn zero-copy  
D. Luôn thời gian thực  

**Câu 29.** Zero-copy Data Sharing cho phép điều gì?

A. Nhiều hệ thống/người dùng truy cập dữ liệu tại một nguồn duy nhất qua metadata  
B. Sao chép dữ liệu ra nhiều file FTP  
C. Không cần cấp quyền truy cập  
D. Tạo dữ liệu giả thay dữ liệu thật  

**Câu 30.** Trong Zero-copy Data Sharing, đối tác xem dữ liệu như thế nào?

A. Xem tại chỗ, không cần sao chép byte dữ liệu nào  
B. Tải toàn bộ bản sao về máy cá nhân  
C. Nhận dữ liệu qua email định kỳ  
D. Chỉ xem ảnh chụp màn hình  

**Câu 31.** Khi dừng hợp tác trong Zero-copy Sharing, tổ chức chủ quản làm gì?

A. Revoke access trên Cloud để đối tác không còn thấy dữ liệu  
B. Đi thu hồi từng file đã gửi đi  
C. Không thể ngừng chia sẻ  
D. Xóa toàn bộ warehouse  

**Câu 32.** So với ETL truyền thống, Secure Data Sharing Zero-copy có ưu điểm nào?

A. Live hơn, kiểm soát quyền tập trung hơn và không nhân bản chi phí lưu trữ  
B. Trễ hơn và tốn gấp đôi tài nguyên  
C. Rủi ro bản sao lưu lạc cao hơn  
D. Không dùng được IAM  

### D. Anonymization và Differential Privacy

**Câu 33.** Differential Privacy trong slide dựa trên triết lý nào?

A. Kết quả phân tích gần như không đổi dù có hay không có dữ liệu cá nhân  
B. Báo cáo phải tiết lộ từng cá nhân  
C. Không cần thêm nhiễu  
D. Phải trả về dữ liệu thô  

**Câu 34.** Cơ chế bơm nhiễu chủ động nhằm mục tiêu gì?

A. Hòa lẫn thông tin cá nhân vào cộng đồng để giảm khả năng định danh  
B. Làm báo cáo chính xác tuyệt đối mọi trường hợp  
C. Tăng khả năng re-identification  
D. Xóa toàn bộ dữ liệu phân tích  

**Câu 35.** Epsilon trong Differential Privacy dùng để làm gì?

A. Kiểm soát và đo lường đánh đổi giữa an toàn thông tin và giá trị phân tích  
B. Chọn số cụm K-Means  
C. Định nghĩa khóa chính bảng  
D. Chọn cột trong Semantic Search  

**Câu 36.** Khi Epsilon thấp, điều gì thường xảy ra?

A. Bảo mật cao hơn nhưng độ chính xác/utility giảm  
B. Bảo mật thấp hơn nhưng báo cáo tốt hơn  
C. Không ảnh hưởng privacy  
D. Không cần thêm nhiễu  

**Câu 37.** Khi Epsilon cao, điều gì thường xảy ra?

A. Báo cáo hữu dụng hơn nhưng rủi ro bảo mật danh tính cao hơn  
B. Privacy đạt tối đa tuyệt đối  
C. Utility luôn bằng 0  
D. Không còn trade-off  

**Câu 38.** K-anonymity nghĩa là gì?

A. Mỗi cá nhân không thể bị phân biệt với ít nhất k-1 cá nhân khác  
B. Mỗi dòng dữ liệu phải là duy nhất  
C. Mỗi người có đúng k tài khoản  
D. Mọi dữ liệu phải bị xóa  

**Câu 39.** Quasi-identifiers là gì?

A. Các cột không nhạy cảm riêng lẻ nhưng khi kết hợp có thể tái định danh  
B. Các cột luôn vô dụng  
C. Các khóa mã hóa không thể phân tích  
D. Các dashboard không có dữ liệu  

**Câu 40.** Generalization trong K-anonymity là gì?

A. Biến giá trị cụ thể thành khoảng/tổng quát hơn  
B. Xóa hẳn dòng dữ liệu dị biệt  
C. Tạo bản sao dữ liệu  
D. Tăng Epsilon vô hạn  

**Câu 41.** Suppression trong K-anonymity là gì?

A. Xóa hẳn dòng dữ liệu quá dị biệt để tránh lộ bí mật  
B. Biến 23 tuổi thành nhóm 20-30 tuổi  
C. Tự động tìm bảng bằng ngôn ngữ tự nhiên  
D. Ghi nhận SQL transformation  

**Câu 42.** Optimal Balance trong privacy nghĩa là gì?

A. Cân bằng giữa tuân thủ bảo mật và giữ đủ độ chính xác cho Data Science  
B. Tối đa hóa privacy bất kể dữ liệu vô dụng  
C. Tối đa hóa utility bất kể lộ danh tính  
D. Không cần quan tâm privacy loss  

### E. Metadata, Cataloging và Đạo đức AI

**Câu 43.** Data Swamp là tình huống nào?

A. Dữ liệu mở rộng quá nhanh, khó biết dữ liệu sạch nằm ở đâu  
B. Dữ liệu đã được catalog hoàn hảo  
C. Dữ liệu có lineage đầy đủ  
D. Dữ liệu chỉ còn một bảng duy nhất  

**Câu 44.** AI-driven Data Catalog làm gì?

A. Tự động thu thập và phân loại metadata từ toàn bộ hệ thống  
B. Xóa metadata để giảm phức tạp  
C. Chỉ lưu dữ liệu thô không phân loại  
D. Chỉ tạo báo cáo bias  

**Câu 45.** AI Catalog có thể tự động nhận diện loại cột nào để gắn nhãn bảo mật?

A. Email, số thẻ tín dụng hoặc PII  
B. Chỉ cột không có dữ liệu  
C. Chỉ cột màu giao diện  
D. Chỉ cột thứ tự slide  

**Câu 46.** Semantic Search trong AI Data Catalog cho phép gì?

A. Tìm bảng dữ liệu bằng ngôn ngữ tự nhiên  
B. Chỉ tìm bằng tên bảng chính xác  
C. Xóa bảng không dùng  
D. Mã hóa cột PII  

**Câu 47.** Trust Score trong Data Catalog đánh giá gì?

A. Chất lượng bảng dựa trên tần suất sử dụng và lịch sử kiểm định chất lượng  
B. Mức độ đẹp của dashboard  
C. Số lượng người đăng nhập  
D. Kích thước file PDF  

**Câu 48.** Business Glossary do lớp nào định nghĩa?

A. Governance Layer  
B. Data Engineer Layer  
C. Runtime Layer  
D. Encryption Layer  

**Câu 49.** Mục tiêu của Business Glossary là gì?

A. Thống nhất khái niệm kinh doanh giữa các phòng ban  
B. Lưu kiểu dữ liệu INT64/FLOAT64  
C. Chỉ ghi tần suất cập nhật dữ liệu  
D. Chỉ tạo immutable log  

**Câu 50.** Technical Metadata do lớp nào quản lý?

A. Data Engineer Layer  
B. Governance Layer  
C. Business User Layer  
D. Legal Layer  

**Câu 51.** Technical Metadata thường lưu gì?

A. Kiểu dữ liệu, schema, freshness, owner kỹ thuật  
B. Định nghĩa Churn nghiệp vụ duy nhất  
C. Fairness constraints  
D. Quyết định vay vốn cuối cùng  

**Câu 52.** Bản chất của Bias trong AI theo slide là gì?

A. Bias nằm trong dữ liệu lịch sử do con người thu thập, AI học và khuếch đại nó  
B. AI tự sinh ra định kiến từ hư không  
C. Bias không liên quan dữ liệu  
D. Bias luôn làm mô hình chính xác hơn  

**Câu 53.** Pre-processing để khử bias tác động vào đâu?

A. Tập dữ liệu Gold trước khi học, như resampling hoặc gán trọng số  
B. Kết quả đầu ra sau dự báo  
C. Loss function trong thuật toán  
D. Compliance report  

**Câu 54.** In-processing để khử bias làm gì?

A. Thêm Fairness Constraints trực tiếp vào Loss Function  
B. Chỉ đổi ngưỡng dự báo sau khi model chạy  
C. Chỉ lấy mẫu lại dữ liệu Gold  
D. Chỉ tạo audit trail  

**Câu 55.** Post-processing để khử bias làm gì?

A. Điều chỉnh kết quả đầu ra/ngưỡng quyết định cho từng nhóm  
B. Thay đổi dữ liệu Gold trước khi học  
C. Thêm constraint vào loss function  
D. Xóa metadata kỹ thuật  

**Câu 56.** Human-in-the-loop yêu cầu gì?

A. Quyết định cuối cùng ảnh hưởng quyền lợi công dân phải có con người phê duyệt  
B. AI tự quyết mọi hồ sơ không cần người  
C. Không cần giải trình lý do  
D. Chỉ áp dụng với dữ liệu không nhạy cảm  

**Câu 57.** Explainable AI yêu cầu mô hình không được như thế nào?

A. Không được là black box không giải trình được  
B. Không được có dữ liệu đầu vào  
C. Không được có log  
D. Không được dùng governance  

### F. Auditing và Compliance

**Câu 58.** Continuous Auditing khác audit truyền thống ở điểm nào?

A. Theo dõi tự động hạ tầng dữ liệu theo thời gian thực 24/7  
B. Chỉ kiểm toán hàng quý/hàng năm bằng con người  
C. Không phát hiện hành vi bất thường  
D. Không tạo báo cáo tuân thủ  

**Câu 59.** Quy trình audit tự động gồm các bước nào?

A. Monitor, Detect, Alert, Report  
B. Bronze, Silver, Gold, Archive  
C. Train, Validate, Test, Deploy  
D. Insert, Update, Delete, Select  

**Câu 60.** Privacy Audit Trail theo dõi điều gì?

A. Mức hao hụt ngân sách quyền riêng tư Epsilon theo thời gian  
B. Chỉ số doanh thu hàng tháng  
C. Số lượng dashboard được xem  
D. Số lượng bảng trong Bronze  

## Đáp án và giải thích ngắn

1. A - Slide nêu AI Act phân thành 4 mức rủi ro.
2. A - Mục tiêu là bảo vệ người dùng.
3. A - Governance cần từ Ingestion đến vận hành.
4. A - Ba trụ cột là Transparency, Human Oversight, Data Quality.
5. A - Unacceptable Risk bị cấm hoàn toàn.
6. A - Chấm điểm công dân xã hội là ví dụ bị cấm.
7. A - High Risk phải kiểm soát nghiêm ngặt.
8. A - Đánh giá tín dụng/tuyển dụng là high-risk.
9. A - Limited risk cần dán nhãn rõ ràng.
10. A - Spam filter/game AI thuộc Minimal Risk.
11. A - Data Quality phải đại diện, sạch lỗi hệ thống và kiểm soát bias.
12. A - Documentation lưu kiến trúc và data flow.
13. A - Traceability yêu cầu log để audit vòng đời.
14. A - Lineage ghi flow dữ liệu end-to-end.
15. A - Medallion gồm Bronze, Silver, Gold.
16. A - Lineage trả lời dữ liệu đến từ đâu và biến đổi thế nào.
17. A - Data Source ghi metadata từ CRM/ERP/Web Logs.
18. A - Transformation trích SQL từ dbt/Spark.
19. A - Quality Check ghi test dữ liệu.
20. A - Impact Analysis cảnh báo ảnh hưởng downstream.
21. A - Data Trust cần chứng minh dữ liệu sạch/nguyên bản.
22. A - RLS là bảo mật cấp dòng theo user context.
23. A - Vùng A chỉ xem vùng A là RLS.
24. A - CLM che/mã hóa dữ liệu nhạy cảm cấp cột.
25. A - Mask số điện thoại là CLM.
26. A - Mã hóa dữ liệu lớn có thể tăng latency.
27. A - Bảo mật cần tối ưu, không hy sinh realtime operation.
28. A - ETL/FTP tạo bản sao, tăng chi phí và rủi ro lộ lọt.
29. A - Zero-copy cho truy cập cùng nguồn qua metadata.
30. A - Đối tác xem tại chỗ, không copy dữ liệu.
31. A - Revoke access giải quyết mất kiểm soát sau chia sẻ.
32. A - Zero-copy live hơn, tập trung quyền, ít nhân bản chi phí.
33. A - Differential privacy làm kết quả ít phụ thuộc vào cá nhân đơn lẻ.
34. A - Thêm nhiễu để giảm re-identification.
35. A - Epsilon đo trade-off privacy và utility.
36. A - Epsilon thấp bảo mật hơn nhưng giảm utility.
37. A - Epsilon cao tăng utility nhưng tăng privacy risk.
38. A - K-anonymity che một cá nhân giữa ít nhất k-1 người khác.
39. A - Quasi-identifier có thể tái định danh khi kết hợp.
40. A - Generalization biến cụ thể thành tổng quát/khoảng.
41. A - Suppression xóa dòng quá dị biệt.
42. A - Optimal balance cân bằng pháp lý và độ chính xác.
43. A - Data Swamp là dữ liệu nhiều nhưng khó tìm dữ liệu sạch.
44. A - AI Catalog tự thu thập/phân loại metadata.
45. A - PII như email/thẻ tín dụng cần gắn nhãn bảo mật.
46. A - Semantic Search tìm bằng ngôn ngữ tự nhiên.
47. A - Trust Score phản ánh chất lượng/tin cậy của bảng.
48. A - Business Glossary do Governance Layer định nghĩa.
49. A - Mục tiêu là thống nhất ngôn ngữ kinh doanh.
50. A - Technical Metadata do Data Engineer Layer quản lý.
51. A - Technical metadata gồm type, schema, freshness, owner.
52. A - AI học bias từ dữ liệu lịch sử.
53. A - Pre-processing tác động dữ liệu trước huấn luyện.
54. A - In-processing thêm fairness constraints vào loss.
55. A - Post-processing chỉnh output/threshold.
56. A - Human-in-the-loop cần phê duyệt người khi ảnh hưởng quyền lợi.
57. A - Explainable AI không được là black box.
58. A - Continuous auditing theo dõi real-time 24/7.
59. A - Quy trình gồm Monitor, Detect, Alert, Report.
60. A - Privacy Audit Trail theo dõi Epsilon privacy budget loss.
