# Trắc nghiệm chương 7 - Quản trị, Bảo mật và Đạo đức dữ liệu

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide7.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Data Governance và AI Act

**Câu 1.** Theo slide, AI Act phân cấp hệ thống AI thành bao nhiêu mức độ rủi ro?

A. 2 mức  
B. 6 mức  
C. 4 mức  
D. 10 mức  

**Câu 2.** Mục tiêu chính của việc phân cấp rủi ro trong AI Act là gì?

A. Loại bỏ mọi hệ thống dữ liệu  
B. Tăng số lượng mô hình AI  
C. Thay thế hoàn toàn con người  
D. Bảo vệ người dùng  

**Câu 3.** Theo slide, các doanh nghiệp MIS & Fintech cần thiết lập quản trị dữ liệu nghiêm ngặt từ đâu đến đâu?

A. Từ khâu Ingestion đến vận hành  
B. Chỉ ở giai đoạn dashboard  
C. Chỉ khi mô hình đã lỗi  
D. Chỉ ở khâu marketing  

**Câu 4.** Ba trụ cột bắt buộc trong Data Governance theo AI Act gồm gì?

A. Batch, Stream, Archive  
B. Transparency, Human Oversight, Data Quality  
C. Speed, Storage, Compression  
D. SQL, Python, Excel  

**Câu 5.** Unacceptable Risk trong AI Act được hiểu là gì?

A. Mức rủi ro tự do vận hành  
B. Mức chỉ cần dán nhãn  
C. Mức rủi ro bị cấm hoàn toàn  
D. Mức không cần quản trị  

**Câu 6.** Ví dụ nào thuộc Unacceptable Risk theo slide?

A. AI trong trò chơi điện tử  
B. Bộ lọc spam  
C. Chatbot có dán nhãn rõ ràng  
D. Chấm điểm công dân xã hội hoặc AI thao túng hành vi dưới ngưỡng nhận thức  

**Câu 7.** High Risk trong AI Act cần cách xử lý nào?

A. Kiểm soát nghiêm ngặt  
B. Cấm mọi trường hợp  
C. Không cần ghi nhật ký  
D. Tự do vận hành hoàn toàn  

**Câu 8.** Ví dụ nào thuộc High Risk theo slide?

A. Nén dữ liệu bảng  
B. AI trong Fintech đánh giá điểm tín dụng hoặc tuyển dụng nhân sự  
C. Trò chơi điện tử thông thường  
D. Bộ lọc spam  

**Câu 9.** Transparent/Limited Risk yêu cầu điều gì?

A. Không cần thông báo cho người dùng  
B. Chỉ cần tăng tốc truy vấn  
C. Dán nhãn rõ ràng  
D. Cấm tuyệt đối  

**Câu 10.** Minimal Risk trong slide phù hợp với ví dụ nào?

A. AI quản trị hạ tầng thiết yếu  
B. AI đánh giá tín dụng Fintech  
C. Chấm điểm công dân xã hội  
D. Bộ lọc Spam hoặc AI trong trò chơi điện tử  

**Câu 11.** Nghĩa vụ Data Quality đối với AI rủi ro cao yêu cầu dữ liệu huấn luyện/kiểm thử như thế nào?

A. Đại diện, không chứa sai sót hệ thống và kiểm soát được bias  
B. Không cần kiểm thử  
C. Chỉ dùng dữ liệu một nhóm duy nhất  
D. Càng thiếu càng tốt  

**Câu 12.** Technical Documentation trong AI rủi ro cao yêu cầu lưu trữ gì?

A. Chỉ điểm số cuối cùng  
B. Kiến trúc hệ thống và luồng dữ liệu để phục vụ thanh tra  
C. Chỉ tên mô hình  
D. Chỉ ảnh giao diện người dùng  

**Câu 13.** Traceability trong hệ thống AI rủi ro cao yêu cầu điều gì?

A. Không lưu lại thay đổi  
B. Chỉ lưu dữ liệu đã tổng hợp  
C. Tự động ghi nhật ký để theo dõi và kiểm toán vòng đời vận hành  
D. Xóa log sau mỗi lần chạy  

### B. Automated Data Lineage

**Câu 14.** Automated Data Lineage là gì?

A. Chỉ là xóa dữ liệu sau khi dùng  
B. Chỉ là mã hóa dữ liệu cấp cột  
C. Chỉ là công cụ vẽ biểu đồ marketing  
D. Khả năng ghi nhận toàn diện flow dữ liệu từ nguồn, qua biến đổi, đến mô hình AI  

**Câu 15.** Trong kiến trúc Medallion, lineage theo dõi dữ liệu qua các tầng nào?

A. Bronze, Silver, Gold  
B. Public, Private, Secret  
C. Dev, Test, Prod  
D. Hot, Cool, Archive  

**Câu 16.** Giá trị cốt lõi của lineage với kiểm toán viên và kỹ sư dữ liệu là gì?

A. Chỉ tăng kích thước dữ liệu  
B. Hiểu mô hình AI lấy dữ liệu từ đâu và bị biến đổi bởi SQL nào  
C. Xóa toàn bộ lịch sử biến đổi  
D. Che giấu nguồn dữ liệu khỏi người dùng  

**Câu 17.** Data Source trong luồng quan sát 360 độ ghi nhận gì?

A. Chỉ quyền truy cập IAM  
B. Chỉ dữ liệu đã ẩn danh  
C. Metadata từ CRM, ERP, Web Logs  
D. Chỉ kết quả dự báo cuối cùng  

**Câu 18.** Transformation trong lineage có thể trích xuất gì?

A. Chỉ dữ liệu bị xóa  
B. File ảnh dashboard  
C. Mật khẩu người dùng  
D. Mã SQL từ dbt hoặc Spark để xem logic làm sạch  

**Câu 19.** Data Quality Check trong lineage ghi nhận gì?

A. Các bài test dữ liệu như đúng định dạng, không Null, không trùng lặp  
B. Chỉ chi phí lưu trữ  
C. Chỉ màu sắc dashboard  
D. Chỉ số điểm tín dụng  

**Câu 20.** Impact Analysis trong Automated Lineage giúp gì?

A. Không cần kiểm tra mô hình downstream  
B. Cảnh báo model AI ở tầng Gold bị ảnh hưởng khi bảng Bronze đổi schema  
C. Tự động bỏ qua mọi thay đổi dữ liệu  
D. Xóa bảng Bronze khi thay đổi schema  

**Câu 21.** Data Trust trong pipeline tốt yêu cầu chứng minh điều gì?

A. Mô hình không cần kiểm toán  
B. Dữ liệu càng thiếu càng tốt  
C. Dữ liệu nguyên bản và sạch trước khi đưa vào mô hình học máy  
D. Dữ liệu không cần nguồn gốc  

### C. Fine-grained Security và Secure Data Sharing

**Câu 22.** Row-level Security (RLS) là gì?

A. Sao chép file ra ngoài tổ chức  
B. Thêm nhiễu ngẫu nhiên vào kết quả  
C. Ẩn một phần dữ liệu trong cột PII  
D. Bộ lọc động cấp dòng dựa trên danh tính/ngữ cảnh người truy cập  

**Câu 23.** Ví dụ đúng về RLS là gì?

A. Nhân viên vùng A chỉ xem dữ liệu khách hàng vùng A  
B. Tạo Business Glossary  
C. Xóa dòng dữ liệu cá nhân dị biệt  
D. Số điện thoại hiển thị dạng 091xxxx888  

**Câu 24.** Column-level Masking (CLM) là gì?

A. Dùng Semantic Search để tìm bảng  
B. Ẩn hoặc mã hóa một phần dữ liệu nhạy cảm mà không đổi cấu trúc bảng  
C. Tạo báo cáo compliance  
D. Lọc dòng theo vùng của nhân viên  

**Câu 25.** Ví dụ đúng về CLM là gì?

A. Kích hoạt báo động đỏ  
B. AI tự động thêm nhiễu vào báo cáo  
C. Số điện thoại hiển thị dạng 091xxxx888  
D. Nhân viên vùng A chỉ xem khách vùng A  

**Câu 26.** Trade-off giữa bảo mật và hiệu năng thể hiện ở điểm nào?

A. Bảo mật không ảnh hưởng hệ thống bao giờ  
B. Chỉ xảy ra với dữ liệu đã xóa  
C. Bảo mật luôn làm truy vấn nhanh hơn  
D. Mã hóa bảng lớn có thể làm tăng độ trễ truy vấn  

**Câu 27.** Bài học MIS về bảo mật dữ liệu trong slide là gì?

A. Không được đánh đổi bảo mật bằng hiệu năng vận hành thời gian thực  
B. Không cần kiểm soát quyền  
C. Nên sao chép mọi dữ liệu ra FTP  
D. Nên bỏ bảo mật để tăng tốc  

**Câu 28.** Mô hình ETL/FTP truyền thống trong chia sẻ dữ liệu có rủi ro nào?

A. Kiểm soát quyền tập trung tốt hơn zero-copy  
B. Tốn lưu trữ và dễ lộ bí mật từ các bản sao  
C. Luôn thời gian thực  
D. Không sinh bản sao nào  

**Câu 29.** Zero-copy Data Sharing cho phép điều gì?

A. Tạo dữ liệu giả thay dữ liệu thật  
B. Không cần cấp quyền truy cập  
C. Nhiều hệ thống/người dùng truy cập dữ liệu tại một nguồn duy nhất qua metadata  
D. Sao chép dữ liệu ra nhiều file FTP  

**Câu 30.** Trong Zero-copy Data Sharing, đối tác xem dữ liệu như thế nào?

A. Nhận dữ liệu qua email định kỳ  
B. Chỉ xem ảnh chụp màn hình  
C. Tải toàn bộ bản sao về máy cá nhân  
D. Xem tại chỗ, không cần sao chép byte dữ liệu nào  

**Câu 31.** Khi dừng hợp tác trong Zero-copy Sharing, tổ chức chủ quản làm gì?

A. Revoke access trên Cloud để đối tác không còn thấy dữ liệu  
B. Không thể ngừng chia sẻ  
C. Xóa toàn bộ warehouse  
D. Đi thu hồi từng file đã gửi đi  

**Câu 32.** So với ETL truyền thống, Secure Data Sharing Zero-copy có ưu điểm nào?

A. Không dùng được IAM  
B. Live hơn, kiểm soát quyền tập trung hơn và không nhân bản chi phí lưu trữ  
C. Rủi ro bản sao lưu lạc cao hơn  
D. Trễ hơn và tốn gấp đôi tài nguyên  

### D. Anonymization và Differential Privacy

**Câu 33.** Differential Privacy trong slide dựa trên triết lý nào?

A. Không cần thêm nhiễu  
B. Phải trả về dữ liệu thô  
C. Kết quả phân tích gần như không đổi dù có hay không có dữ liệu cá nhân  
D. Báo cáo phải tiết lộ từng cá nhân  

**Câu 34.** Cơ chế bơm nhiễu chủ động nhằm mục tiêu gì?

A. Xóa toàn bộ dữ liệu phân tích  
B. Tăng khả năng re-identification  
C. Làm báo cáo chính xác tuyệt đối mọi trường hợp  
D. Hòa lẫn thông tin cá nhân vào cộng đồng để giảm khả năng định danh  

**Câu 35.** Epsilon trong Differential Privacy dùng để làm gì?

A. Kiểm soát và đo lường đánh đổi giữa an toàn thông tin và giá trị phân tích  
B. Định nghĩa khóa chính bảng  
C. Chọn cột trong Semantic Search  
D. Chọn số cụm K-Means  

**Câu 36.** Khi Epsilon thấp, điều gì thường xảy ra?

A. Không cần thêm nhiễu  
B. Bảo mật cao hơn nhưng độ chính xác/utility giảm  
C. Không ảnh hưởng privacy  
D. Bảo mật thấp hơn nhưng báo cáo tốt hơn  

**Câu 37.** Khi Epsilon cao, điều gì thường xảy ra?

A. Utility luôn bằng 0  
B. Không còn trade-off  
C. Báo cáo hữu dụng hơn nhưng rủi ro bảo mật danh tính cao hơn  
D. Privacy đạt tối đa tuyệt đối  

**Câu 38.** K-anonymity nghĩa là gì?

A. Mọi dữ liệu phải bị xóa  
B. Mỗi người có đúng k tài khoản  
C. Mỗi dòng dữ liệu phải là duy nhất  
D. Mỗi cá nhân không thể bị phân biệt với ít nhất k-1 cá nhân khác  

**Câu 39.** Quasi-identifiers là gì?

A. Các cột không nhạy cảm riêng lẻ nhưng khi kết hợp có thể tái định danh  
B. Các khóa mã hóa không thể phân tích  
C. Các dashboard không có dữ liệu  
D. Các cột luôn vô dụng  

**Câu 40.** Generalization trong K-anonymity là gì?

A. Tăng Epsilon vô hạn  
B. Biến giá trị cụ thể thành khoảng/tổng quát hơn  
C. Tạo bản sao dữ liệu  
D. Xóa hẳn dòng dữ liệu dị biệt  

**Câu 41.** Suppression trong K-anonymity là gì?

A. Tự động tìm bảng bằng ngôn ngữ tự nhiên  
B. Ghi nhận SQL transformation  
C. Xóa hẳn dòng dữ liệu quá dị biệt để tránh lộ bí mật  
D. Biến 23 tuổi thành nhóm 20-30 tuổi  

**Câu 42.** Optimal Balance trong privacy nghĩa là gì?

A. Không cần quan tâm privacy loss  
B. Tối đa hóa utility bất kể lộ danh tính  
C. Tối đa hóa privacy bất kể dữ liệu vô dụng  
D. Cân bằng giữa tuân thủ bảo mật và giữ đủ độ chính xác cho Data Science  

### E. Metadata, Cataloging và Đạo đức AI

**Câu 43.** Data Swamp là tình huống nào?

A. Dữ liệu mở rộng quá nhanh, khó biết dữ liệu sạch nằm ở đâu  
B. Dữ liệu chỉ còn một bảng duy nhất  
C. Dữ liệu có lineage đầy đủ  
D. Dữ liệu đã được catalog hoàn hảo  

**Câu 44.** AI-driven Data Catalog làm gì?

A. Chỉ lưu dữ liệu thô không phân loại  
B. Tự động thu thập và phân loại metadata từ toàn bộ hệ thống  
C. Chỉ tạo báo cáo bias  
D. Xóa metadata để giảm phức tạp  

**Câu 45.** AI Catalog có thể tự động nhận diện loại cột nào để gắn nhãn bảo mật?

A. Chỉ cột thứ tự slide  
B. Chỉ cột màu giao diện  
C. Email, số thẻ tín dụng hoặc PII  
D. Chỉ cột không có dữ liệu  

**Câu 46.** Semantic Search trong AI Data Catalog cho phép gì?

A. Xóa bảng không dùng  
B. Mã hóa cột PII  
C. Chỉ tìm bằng tên bảng chính xác  
D. Tìm bảng dữ liệu bằng ngôn ngữ tự nhiên  

**Câu 47.** Trust Score trong Data Catalog đánh giá gì?

A. Chất lượng bảng dựa trên tần suất sử dụng và lịch sử kiểm định chất lượng  
B. Kích thước file PDF  
C. Số lượng người đăng nhập  
D. Mức độ đẹp của dashboard  

**Câu 48.** Business Glossary do lớp nào định nghĩa?

A. Runtime Layer  
B. Governance Layer  
C. Encryption Layer  
D. Data Engineer Layer  

**Câu 49.** Mục tiêu của Business Glossary là gì?

A. Chỉ tạo immutable log  
B. Chỉ ghi tần suất cập nhật dữ liệu  
C. Thống nhất khái niệm kinh doanh giữa các phòng ban  
D. Lưu kiểu dữ liệu INT64/FLOAT64  

**Câu 50.** Technical Metadata do lớp nào quản lý?

A. Business User Layer  
B. Legal Layer  
C. Governance Layer  
D. Data Engineer Layer  

**Câu 51.** Technical Metadata thường lưu gì?

A. Kiểu dữ liệu, schema, freshness, owner kỹ thuật  
B. Quyết định vay vốn cuối cùng  
C. Fairness constraints  
D. Định nghĩa Churn nghiệp vụ duy nhất  

**Câu 52.** Bản chất của Bias trong AI theo slide là gì?

A. Bias không liên quan dữ liệu  
B. Bias nằm trong dữ liệu lịch sử do con người thu thập, AI học và khuếch đại nó  
C. Bias luôn làm mô hình chính xác hơn  
D. AI tự sinh ra định kiến từ hư không  

**Câu 53.** Pre-processing để khử bias tác động vào đâu?

A. Compliance report  
B. Loss function trong thuật toán  
C. Tập dữ liệu Gold trước khi học, như resampling hoặc gán trọng số  
D. Kết quả đầu ra sau dự báo  

**Câu 54.** In-processing để khử bias làm gì?

A. Chỉ lấy mẫu lại dữ liệu Gold  
B. Chỉ tạo audit trail  
C. Chỉ đổi ngưỡng dự báo sau khi model chạy  
D. Thêm Fairness Constraints trực tiếp vào Loss Function  

**Câu 55.** Post-processing để khử bias làm gì?

A. Điều chỉnh kết quả đầu ra/ngưỡng quyết định cho từng nhóm  
B. Thêm constraint vào loss function  
C. Xóa metadata kỹ thuật  
D. Thay đổi dữ liệu Gold trước khi học  

**Câu 56.** Human-in-the-loop yêu cầu gì?

A. Chỉ áp dụng với dữ liệu không nhạy cảm  
B. Quyết định cuối cùng ảnh hưởng quyền lợi công dân phải có con người phê duyệt  
C. Không cần giải trình lý do  
D. AI tự quyết mọi hồ sơ không cần người  

**Câu 57.** Explainable AI yêu cầu mô hình không được như thế nào?

A. Không được có log  
B. Không được dùng governance  
C. Không được là black box không giải trình được  
D. Không được có dữ liệu đầu vào  

### F. Auditing và Compliance

**Câu 58.** Continuous Auditing khác audit truyền thống ở điểm nào?

A. Không tạo báo cáo tuân thủ  
B. Không phát hiện hành vi bất thường  
C. Chỉ kiểm toán hàng quý/hàng năm bằng con người  
D. Theo dõi tự động hạ tầng dữ liệu theo thời gian thực 24/7  

**Câu 59.** Quy trình audit tự động gồm các bước nào?

A. Monitor, Detect, Alert, Report  
B. Insert, Update, Delete, Select  
C. Bronze, Silver, Gold, Archive  
D. Train, Validate, Test, Deploy  

**Câu 60.** Privacy Audit Trail theo dõi điều gì?

A. Chỉ số doanh thu hàng tháng  
B. Mức hao hụt ngân sách quyền riêng tư Epsilon theo thời gian  
C. Số lượng bảng trong Bronze  
D. Số lượng dashboard được xem  

## Đáp án và giải thích ngắn

1. C - Slide nêu AI Act phân thành 4 mức rủi ro.
2. D - Mục tiêu là bảo vệ người dùng.
3. A - Governance cần từ Ingestion đến vận hành.
4. B - Ba trụ cột là Transparency, Human Oversight, Data Quality.
5. C - Unacceptable Risk bị cấm hoàn toàn.
6. D - Chấm điểm công dân xã hội là ví dụ bị cấm.
7. A - High Risk phải kiểm soát nghiêm ngặt.
8. B - Đánh giá tín dụng/tuyển dụng là high-risk.
9. C - Limited risk cần dán nhãn rõ ràng.
10. D - Spam filter/game AI thuộc Minimal Risk.
11. A - Data Quality phải đại diện, sạch lỗi hệ thống và kiểm soát bias.
12. B - Documentation lưu kiến trúc và data flow.
13. C - Traceability yêu cầu log để audit vòng đời.
14. D - Lineage ghi flow dữ liệu end-to-end.
15. A - Medallion gồm Bronze, Silver, Gold.
16. B - Lineage trả lời dữ liệu đến từ đâu và biến đổi thế nào.
17. C - Data Source ghi metadata từ CRM/ERP/Web Logs.
18. D - Transformation trích SQL từ dbt/Spark.
19. A - Quality Check ghi test dữ liệu.
20. B - Impact Analysis cảnh báo ảnh hưởng downstream.
21. C - Data Trust cần chứng minh dữ liệu sạch/nguyên bản.
22. D - RLS là bảo mật cấp dòng theo user context.
23. A - Vùng A chỉ xem vùng A là RLS.
24. B - CLM che/mã hóa dữ liệu nhạy cảm cấp cột.
25. C - Mask số điện thoại là CLM.
26. D - Mã hóa dữ liệu lớn có thể tăng latency.
27. A - Bảo mật cần tối ưu, không hy sinh realtime operation.
28. B - ETL/FTP tạo bản sao, tăng chi phí và rủi ro lộ lọt.
29. C - Zero-copy cho truy cập cùng nguồn qua metadata.
30. D - Đối tác xem tại chỗ, không copy dữ liệu.
31. A - Revoke access giải quyết mất kiểm soát sau chia sẻ.
32. B - Zero-copy live hơn, tập trung quyền, ít nhân bản chi phí.
33. C - Differential privacy làm kết quả ít phụ thuộc vào cá nhân đơn lẻ.
34. D - Thêm nhiễu để giảm re-identification.
35. A - Epsilon đo trade-off privacy và utility.
36. B - Epsilon thấp bảo mật hơn nhưng giảm utility.
37. C - Epsilon cao tăng utility nhưng tăng privacy risk.
38. D - K-anonymity che một cá nhân giữa ít nhất k-1 người khác.
39. A - Quasi-identifier có thể tái định danh khi kết hợp.
40. B - Generalization biến cụ thể thành tổng quát/khoảng.
41. C - Suppression xóa dòng quá dị biệt.
42. D - Optimal balance cân bằng pháp lý và độ chính xác.
43. A - Data Swamp là dữ liệu nhiều nhưng khó tìm dữ liệu sạch.
44. B - AI Catalog tự thu thập/phân loại metadata.
45. C - PII như email/thẻ tín dụng cần gắn nhãn bảo mật.
46. D - Semantic Search tìm bằng ngôn ngữ tự nhiên.
47. A - Trust Score phản ánh chất lượng/tin cậy của bảng.
48. B - Business Glossary do Governance Layer định nghĩa.
49. C - Mục tiêu là thống nhất ngôn ngữ kinh doanh.
50. D - Technical Metadata do Data Engineer Layer quản lý.
51. A - Technical metadata gồm type, schema, freshness, owner.
52. B - AI học bias từ dữ liệu lịch sử.
53. C - Pre-processing tác động dữ liệu trước huấn luyện.
54. D - In-processing thêm fairness constraints vào loss.
55. A - Post-processing chỉnh output/threshold.
56. B - Human-in-the-loop cần phê duyệt người khi ảnh hưởng quyền lợi.
57. C - Explainable AI không được là black box.
58. D - Continuous auditing theo dõi real-time 24/7.
59. A - Quy trình gồm Monitor, Detect, Alert, Report.
60. B - Privacy Audit Trail theo dõi Epsilon privacy budget loss.
