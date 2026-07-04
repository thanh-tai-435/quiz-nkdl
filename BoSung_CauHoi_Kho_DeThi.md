# Bổ sung câu hỏi khó - Nhà kho dữ liệu và tích hợp

File này bổ sung các câu hỏi dễ gây nhầm lẫn, tập trung vào phân biệt khái niệm gần giống nhau và các điểm thường bị hỏi bẫy.

## Câu hỏi

### Chương 1

**Câu 1.** Điểm khác biệt cốt lõi giữa Data Lake và Lakehouse là gì?

A. Lakehouse bổ sung quản trị bảng, ACID và khả năng phân tích kiểu warehouse trên dữ liệu lake  
B. Data Lake luôn có schema-on-write còn Lakehouse luôn không có schema  
C. Lakehouse chỉ lưu dữ liệu quan hệ, không lưu dữ liệu phi cấu trúc  
D. Data Lake luôn nhanh hơn Lakehouse trong mọi truy vấn  

**Câu 2.** Data Fabric và Data Mesh dễ bị nhầm vì đều nói về dữ liệu phân tán. Điểm phân biệt đúng nhất là gì?

A. Fabric thiên về lớp kết nối/metadata thống nhất, Mesh thiên về ownership theo domain  
B. Fabric luôn thay thế hoàn toàn Lakehouse, Mesh chỉ dùng cho hệ thống nhỏ  
C. Mesh là công cụ ảo hóa dữ liệu, Fabric là mô hình tổ chức nhân sự  
D. Cả hai đều yêu cầu gom toàn bộ dữ liệu về một kho vật lý duy nhất  

**Câu 3.** Zero-copy Cloning trong Snowflake không có nghĩa là gì?

A. Tạo bản sao logic mà không nhân bản toàn bộ dữ liệu vật lý ngay lập tức  
B. Tạo môi trường test/dev nhanh hơn và tiết kiệm dung lượng  
C. Tạo thêm một bản copy vật lý đầy đủ của toàn bộ bảng ngay khi clone  
D. Tận dụng metadata và cơ chế copy-on-write  

**Câu 4.** Compute/Storage Decoupling giúp tối ưu chi phí vì lý do nào?

A. Có thể scale compute độc lập với dung lượng lưu trữ  
B. Bắt buộc mọi truy vấn phải chạy trên một máy chủ duy nhất  
C. Xóa bỏ hoàn toàn nhu cầu tối ưu truy vấn  
D. Không cần lưu metadata cho dữ liệu  

**Câu 5.** Active Metadata khác metadata truyền thống ở điểm nào?

A. Có thể được phân tích và kích hoạt tự động để hỗ trợ vận hành dữ liệu  
B. Chỉ là tài liệu mô tả tĩnh do người dùng nhập tay  
C. Không liên quan đến lineage hoặc data catalog  
D. Chỉ dùng để lưu kích thước file  

### Chương 2

**Câu 6.** Grain trong Fact Table nếu xác định sai sẽ gây hậu quả nào?

A. Dữ liệu bị đếm sai hoặc không thể tổng hợp đúng theo nghiệp vụ  
B. Dimension Table tự động biến thành Fact Table  
C. SCD Type 2 không cần khóa thay thế nữa  
D. Semantic Layer không cần Metric Catalog  

**Câu 7.** Conformed Dimension quan trọng nhất khi nào?

A. Khi nhiều Data Mart cần dùng chung một cách hiểu về cùng thực thể  
B. Khi mỗi bộ phận muốn tự định nghĩa metric khác nhau hoàn toàn  
C. Khi dữ liệu chỉ tồn tại trong một bảng duy nhất  
D. Khi không cần tích hợp báo cáo giữa các miền  

**Câu 8.** SCD Type 1 khác SCD Type 2 ở điểm nào?

A. Type 1 ghi đè giá trị cũ, Type 2 lưu lịch sử bằng nhiều phiên bản dòng  
B. Type 1 luôn lưu ngày hiệu lực, Type 2 luôn xóa lịch sử  
C. Type 1 chỉ dùng cho Fact Table, Type 2 chỉ dùng cho Bridge Table  
D. Type 1 tạo bảng history riêng, Type 2 dùng cột previous value  

**Câu 9.** Bridge Table thường cần khi nào?

A. Khi có quan hệ nhiều-nhiều giữa Fact và Dimension  
B. Khi cần lưu số liệu giao dịch đơn lẻ  
C. Khi dimension không có khóa chính  
D. Khi mọi thuộc tính đều ổn định theo thời gian  

**Câu 10.** Semantic Layer giúp AI Agent giảm rủi ro gì?

A. Diễn giải sai metric hoặc sinh SQL sai do thiếu ngữ nghĩa nghiệp vụ  
B. Không thể tạo file PDF từ dashboard  
C. Không thể lưu dữ liệu dạng JSON trong VARIANT  
D. Không thể chạy truy vấn batch  

### Chương 3

**Câu 11.** ELT phù hợp với cloud hơn ETL truyền thống vì lý do nào?

A. Cloud warehouse có khả năng xử lý mạnh để transform trực tiếp tại nơi lưu dữ liệu  
B. ELT luôn loại bỏ hoàn toàn kiểm thử dữ liệu  
C. ELT bắt buộc transform trước khi load  
D. ELT không thể dùng cho dữ liệu AI/ML  

**Câu 12.** Log-based CDC thường ít tác động hệ thống nguồn hơn Query-based CDC vì sao?

A. Nó đọc transaction log thay vì quét bảng định kỳ  
B. Nó yêu cầu khóa toàn bộ bảng nguồn  
C. Nó chỉ chạy batch cuối tháng  
D. Nó không ghi nhận delete/update  

**Câu 13.** Zero-ETL không đồng nghĩa với điều gì?

A. Tích hợp gần thời gian thực, giảm pipeline thủ công  
B. Không còn cần quản trị schema, chất lượng và quyền truy cập  
C. Giảm độ trễ đồng bộ dữ liệu  
D. Hạn chế việc viết pipeline ETL trung gian  

**Câu 14.** DAG trong orchestration phải acyclic để tránh vấn đề nào?

A. Vòng lặp phụ thuộc khiến pipeline không thể xác định thứ tự chạy  
B. Mất khả năng lưu dữ liệu theo partition  
C. Không thể dùng SQL trong dbt  
D. Không thể lưu log chạy job  

**Câu 15.** Watermark trong streaming chủ yếu xử lý tình huống nào?

A. Dữ liệu đến trễ so với thời gian sự kiện  
B. Dữ liệu bị thiếu khóa chính trong dimension  
C. Dữ liệu có nhiều cột JSON  
D. Dữ liệu cần mã hóa bằng SHA-256  

### Chương 4

**Câu 16.** Accuracy và Consistency khác nhau thế nào?

A. Accuracy đo đúng với thực tế, Consistency đo đồng nhất giữa nguồn/định dạng  
B. Accuracy đo tốc độ cập nhật, Consistency đo số dòng bị null  
C. Accuracy chỉ dùng cho văn bản, Consistency chỉ dùng cho số  
D. Hai khái niệm này hoàn toàn giống nhau  

**Câu 17.** Outlier không phải lúc nào cũng nên xóa vì sao?

A. Nó có thể là tín hiệu quan trọng như gian lận hoặc bất thường nghiệp vụ  
B. Nó luôn là lỗi nhập liệu  
C. Nó không ảnh hưởng mô hình thống kê  
D. Nó chỉ xuất hiện trong dữ liệu văn bản  

**Câu 18.** Jaccard Similarity phù hợp nhất để so sánh gì?

A. Độ tương đồng giữa hai tập phần tử  
B. Khoảng cách chuẩn hóa Min-Max  
C. Phương sai của PCA  
D. Độ trễ của dữ liệu streaming  

**Câu 19.** Stratified Sampling tốt hơn random sampling đơn giản khi nào?

A. Khi cần đảm bảo mỗi nhóm/lớp quan trọng đều được đại diện  
B. Khi chỉ muốn lấy dòng đầu tiên của bảng  
C. Khi dữ liệu không có bất kỳ nhóm nào  
D. Khi muốn loại bỏ toàn bộ outlier  

**Câu 20.** Z-score Normalization đặc biệt hữu ích khi nào?

A. Khi cần chuẩn hóa theo trung bình và độ lệch chuẩn  
B. Khi muốn ánh xạ mọi giá trị đúng vào khoảng 0-1  
C. Khi muốn biến dữ liệu số thành category  
D. Khi muốn tạo ontology  

### Chương 5

**Câu 21.** Lift > 1 trong luật kết hợp thể hiện điều gì?

A. X và Y xuất hiện cùng nhau nhiều hơn kỳ vọng nếu độc lập  
B. X và Y hoàn toàn không liên quan  
C. X làm giảm xác suất xuất hiện của Y  
D. Support luôn bằng 100%  

**Câu 22.** Apriori dựa trên nguyên lý nào để cắt tỉa candidate?

A. Nếu một itemset không phổ biến thì mọi superset của nó cũng không phổ biến  
B. Nếu một itemset không phổ biến thì mọi superset chắc chắn phổ biến  
C. Mọi itemset đều phải được giữ lại đến cuối  
D. Chỉ cần xét itemset có đúng 1 phần tử  

**Câu 23.** FP-Growth thường nhanh hơn Apriori vì sao?

A. Không sinh candidate quá nhiều, dùng FP-tree nén dữ liệu  
B. Không cần đọc dữ liệu giao dịch  
C. Chỉ tính confidence, không tính support  
D. Chỉ áp dụng cho bài toán classification  

**Câu 24.** ID3 và C4.5 khác nhau ở điểm nào?

A. ID3 dùng Information Gain, C4.5 dùng Gain Ratio và xử lý tốt hơn thuộc tính liên tục/missing  
B. ID3 là clustering, C4.5 là association rule  
C. ID3 dùng Bayes, C4.5 dùng K-Means  
D. Hai thuật toán này hoàn toàn giống nhau  

**Câu 25.** DBSCAN phù hợp hơn K-Means trong trường hợp nào?

A. Cụm có hình dạng bất kỳ và có nhiễu/outlier  
B. Mọi cụm đều hình cầu và kích thước bằng nhau  
C. Cần chọn chính xác số cụm k trước khi chạy  
D. Dữ liệu chỉ có thuộc tính phân loại  

### Chương 6

**Câu 26.** In-Database ML giảm rủi ro bảo mật vì sao?

A. Dữ liệu không cần di chuyển ra khỏi warehouse để huấn luyện  
B. Mọi mô hình đều không cần kiểm thử  
C. Người dùng không cần phân quyền dữ liệu  
D. Model Registry không còn cần thiết  

**Câu 27.** `ML.EVALUATE` và `ML.PREDICT` khác nhau thế nào?

A. `ML.EVALUATE` đánh giá mô hình, `ML.PREDICT` tạo dự đoán trên dữ liệu mới  
B. Cả hai đều chỉ dùng để tạo bảng dimension  
C. `ML.EVALUATE` huấn luyện mô hình, `ML.PREDICT` xóa mô hình  
D. `ML.EVALUATE` chỉ dùng cho streaming, `ML.PREDICT` chỉ dùng cho batch  

**Câu 28.** Feature Store giúp tránh vấn đề nào?

A. Các nhóm tự tính feature khác nhau dẫn tới sai lệch train/serve  
B. Không thể lưu dữ liệu dạng bảng  
C. Không thể tạo dashboard BI  
D. Không thể dùng SQL  

**Câu 29.** Concept Drift khác Data Drift ở điểm nào?

A. Concept Drift là quan hệ giữa feature và nhãn thay đổi, Data Drift là phân phối dữ liệu đầu vào thay đổi  
B. Concept Drift chỉ là lỗi thiếu dữ liệu, Data Drift chỉ là lỗi dashboard  
C. Hai khái niệm này giống nhau hoàn toàn  
D. Data Drift chỉ xảy ra trong Graph Database  

**Câu 30.** UDF Deployment của mô hình ML có lợi ích nào?

A. Cho phép gọi mô hình như hàm trong SQL để scoring trực tiếp  
B. Bắt buộc xuất dữ liệu ra máy cá nhân  
C. Không thể quản lý phiên bản mô hình  
D. Chỉ dùng cho dữ liệu ảnh  

### Chương 7

**Câu 31.** Row-level Security và Column-level Masking khác nhau thế nào?

A. RLS lọc dòng được xem, CLM che/ẩn giá trị ở cột nhạy cảm  
B. RLS mã hóa file, CLM tạo Data Mart  
C. RLS chỉ dùng cho AI Act, CLM chỉ dùng cho CDC  
D. Hai cơ chế này không liên quan đến bảo mật dữ liệu  

**Câu 32.** Differential Privacy đánh đổi giữa hai yếu tố nào?

A. Mức bảo vệ riêng tư và độ hữu ích/chính xác của kết quả phân tích  
B. Số lượng dashboard và số lượng user  
C. Số cột và số dòng trong Fact Table  
D. RTO và RPO  

**Câu 33.** K-anonymity có thể vẫn chưa đủ vì sao?

A. Có thể còn rủi ro suy luận nếu nhóm tương đương quá đồng nhất hoặc bị liên kết ngoài  
B. Nó không liên quan đến dữ liệu cá nhân  
C. Nó luôn bảo vệ tuyệt đối trong mọi trường hợp  
D. Nó chỉ dùng để tăng tốc SQL  

**Câu 34.** Data Catalog khác Business Glossary ở điểm nào?

A. Catalog quản lý metadata/tìm kiếm dữ liệu, Glossary chuẩn hóa thuật ngữ nghiệp vụ  
B. Catalog chỉ lưu mô hình ML, Glossary chỉ lưu file âm thanh  
C. Catalog thay thế hoàn toàn bảo mật dữ liệu  
D. Hai khái niệm này không liên quan đến governance  

**Câu 35.** Human-in-the-loop quan trọng trong AI Governance vì sao?

A. Giữ con người tham gia giám sát quyết định quan trọng của AI  
B. Loại bỏ hoàn toàn trách nhiệm của con người  
C. Bắt buộc mọi quyết định đều do AI tự xử lý  
D. Chỉ dùng để tăng tốc truy vấn  

### Chương 8

**Câu 36.** RAG giảm hallucination bằng cách nào?

A. Buộc mô hình sinh câu trả lời dựa trên ngữ cảnh truy xuất từ nguồn dữ liệu liên quan  
B. Xóa toàn bộ dữ liệu doanh nghiệp trước khi hỏi  
C. Chỉ dựa vào trí nhớ nội bộ của LLM  
D. Không cần embedding hoặc retrieval  

**Câu 37.** Semantic Search khác keyword search ở điểm nào?

A. Tìm theo ý nghĩa/ngữ cảnh, không chỉ trùng từ khóa  
B. Chỉ tìm được chuỗi ký tự giống hệt  
C. Không dùng vector hoặc embedding  
D. Chỉ dùng cho bảng số liệu đã chuẩn hóa  

**Câu 38.** Conversational BI vẫn cần Semantic Layer vì sao?

A. Để ánh xạ ngôn ngữ tự nhiên sang metric, quan hệ và định nghĩa nghiệp vụ đúng  
B. Để người dùng không cần dữ liệu  
C. Để dashboard không cần quyền truy cập  
D. Để xóa bỏ kiểm thử SQL  

**Câu 39.** Real-time Insights khác dashboard batch ở điểm nào?

A. Phân tích và phản ứng trên dữ liệu mới đến gần như tức thời  
B. Chỉ tổng hợp dữ liệu cuối tháng  
C. Không cần streaming hoặc event pipeline  
D. Không thể kích hoạt hành động tự động  

**Câu 40.** Agentic BI khác Chat-with-your-data ở điểm nào?

A. Agent có thể lập kế hoạch, truy vấn, phát hiện bất thường và đề xuất/hành động chủ động  
B. Agent chỉ trả lời câu hỏi một lần rồi dừng  
C. Chat-with-your-data luôn tự động ra quyết định thay người dùng  
D. Agentic BI không cần governance  

### Chương 9

**Câu 41.** Polyglot Persistence không nên hiểu là gì?

A. Chọn công nghệ lưu trữ phù hợp từng loại dữ liệu/tác vụ  
B. Dùng thật nhiều database bất kể nhu cầu để hệ thống phức tạp hơn  
C. Kết hợp SQL, NoSQL, Graph, Vector hoặc Blockchain khi có lý do kiến trúc  
D. Chấp nhận nhiều mô hình dữ liệu trong một hệ thống tích hợp  

**Câu 42.** Knowledge Graph ưu tiên Relationship-First nghĩa là gì?

A. Quan hệ được lưu và truy vấn như thành phần trung tâm của mô hình  
B. Mọi quan hệ đều phải tính bằng JOIN tại thời điểm truy vấn  
C. Không cần ontology hoặc semantic labeling  
D. Chỉ lưu dữ liệu dưới dạng vector  

**Câu 43.** HNSW và IVF đều giải quyết vấn đề gì?

A. Tăng tốc tìm kiếm láng giềng gần trong không gian vector nhiều chiều  
B. Tạo Audit Log bất biến  
C. Chuyển Wei sang Ether  
D. Định nghĩa RTO/RPO  

**Câu 44.** Vì sao Audit Logs nên dùng hash/Merkle Root thay vì lưu thô toàn bộ dữ liệu lên Blockchain?

A. Giảm chi phí, bảo mật dữ liệu gốc và vẫn kiểm chứng được tính toàn vẹn  
B. Vì hash làm mất hoàn toàn khả năng kiểm chứng  
C. Vì Blockchain không thể lưu bất kỳ bằng chứng nào  
D. Vì Merkle Root chỉ dùng cho BFS  

**Câu 45.** Predicate Pushdown trong Federated Querying giúp gì?

A. Lọc dữ liệu ngay tại nguồn để giảm dữ liệu truyền về trung tâm  
B. Kéo toàn bộ dữ liệu thô về trước rồi mới lọc  
C. Tạo thêm bản sao vật lý của mọi bảng  
D. Tắt Global Catalog  

## Đáp án

1. A - Lakehouse thêm lớp quản trị bảng và ACID trên nền dữ liệu lake.
2. A - Fabric thiên về kết nối/metadata, Mesh thiên về domain ownership.
3. C - Zero-copy không tạo bản sao vật lý đầy đủ ngay lập tức.
4. A - Compute và storage scale độc lập nên tối ưu chi phí tốt hơn.
5. A - Active Metadata có thể kích hoạt tự động trong vận hành dữ liệu.
6. A - Grain sai làm sai logic đếm, tổng hợp và phân tích.
7. A - Conformed Dimension tạo cách hiểu thống nhất giữa nhiều Data Mart.
8. A - Type 1 ghi đè, Type 2 lưu lịch sử bằng nhiều dòng/phiên bản.
9. A - Bridge Table xử lý quan hệ nhiều-nhiều.
10. A - Semantic Layer cung cấp ngữ nghĩa metric cho AI Agent.
11. A - ELT tận dụng sức mạnh xử lý trong cloud warehouse.
12. A - Log-based CDC đọc transaction log nên ít quét bảng nguồn.
13. B - Zero-ETL vẫn cần governance, schema và data quality.
14. A - DAG có chu trình sẽ gây vòng lặp phụ thuộc.
15. A - Watermark xử lý late-arriving events.
16. A - Accuracy là đúng với thực tế, Consistency là đồng nhất giữa nguồn.
17. A - Outlier có thể là tín hiệu nghiệp vụ quan trọng.
18. A - Jaccard đo độ tương đồng giữa hai tập.
19. A - Stratified Sampling giữ đại diện cho các nhóm quan trọng.
20. A - Z-score dựa trên mean và standard deviation.
21. A - Lift > 1 nghĩa là X và Y có liên hệ dương.
22. A - Apriori dùng tính chất downward closure.
23. A - FP-Growth dùng FP-tree và giảm sinh candidate.
24. A - C4.5 cải tiến ID3 bằng Gain Ratio và xử lý liên tục/missing tốt hơn.
25. A - DBSCAN phù hợp cụm hình dạng bất kỳ và có nhiễu.
26. A - In-Database ML giữ dữ liệu trong warehouse.
27. A - EVALUATE đánh giá, PREDICT dự đoán.
28. A - Feature Store chuẩn hóa feature giữa train và serve.
29. A - Data Drift là input thay đổi, Concept Drift là quan hệ feature-label thay đổi.
30. A - UDF giúp scoring trực tiếp trong SQL.
31. A - RLS lọc dòng, CLM che cột.
32. A - Differential Privacy đánh đổi privacy và utility.
33. A - K-anonymity vẫn có rủi ro suy luận/liên kết.
34. A - Catalog quản metadata, Glossary chuẩn thuật ngữ nghiệp vụ.
35. A - Human-in-the-loop giữ con người trong vòng giám sát.
36. A - RAG grounding câu trả lời bằng dữ liệu truy xuất.
37. A - Semantic Search tìm theo ý nghĩa.
38. A - Semantic Layer giúp dịch đúng metric và business logic.
39. A - Real-time Insights phản ứng gần tức thời.
40. A - Agentic BI chủ động hơn Conversational BI.
41. B - Polyglot Persistence không phải dùng nhiều DB một cách tùy tiện.
42. A - Knowledge Graph coi quan hệ là trung tâm.
43. A - HNSW và IVF tăng tốc nearest-neighbor search.
44. A - Hash/Merkle Root giảm chi phí và vẫn kiểm chứng toàn vẹn.
45. A - Predicate Pushdown giảm dữ liệu truyền qua mạng.
