# Trắc nghiệm chương 9 - Tích hợp dữ liệu đa mô hình và Cơ sở dữ liệu hiện đại

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide9.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Polyglot Persistence và tích hợp NoSQL vào DW

**Câu 1.** Polyglot Persistence là gì?

A. Áp dụng đồng thời nhiều công nghệ lưu trữ như SQL và NoSQL trong cùng một kiến trúc  
B. Chuyển toàn bộ dữ liệu về Blockchain  
C. Chỉ sử dụng một cơ sở dữ liệu quan hệ cho mọi loại dữ liệu  
D. Loại bỏ Data Warehouse để thay bằng file CSV  

**Câu 2.** Triết lý cốt lõi của Polyglot Persistence là gì?

A. Mọi hệ thống đều phải dùng RDBMS  
B. Không có một cơ sở dữ liệu duy nhất tối ưu cho mọi loại tác vụ  
C. NoSQL luôn thay thế hoàn toàn SQL  
D. Dữ liệu càng phi cấu trúc càng không cần quản trị  

**Câu 3.** Trong kiến trúc Polyglot Persistence, RDBMS thường phù hợp nhất với loại dữ liệu nào?

A. Vector embedding nhiều chiều  
B. Phiên đăng nhập tạm thời cần truy xuất cực nhanh  
C. Dữ liệu giao dịch cốt lõi cần tính toàn vẹn ACID  
D. Log byte/hex từ Blockchain  

**Câu 4.** Document Store trong NoSQL phù hợp với trường hợp nào?

A. Bảng giao dịch cần khóa ngoại nghiêm ngặt  
B. Root hash của Merkle Tree  
C. Hàng đợi FIFO của thuật toán BFS  
D. Hồ sơ thực thể có cấu trúc thay đổi liên tục  

**Câu 5.** Key-Value Store thường được dùng cho mục đích nào?

A. Caching và lưu phiên làm việc  
B. Duyệt ontology nhiều tầng  
C. Chuẩn hóa timestamp về UTC  
D. Dịch truy vấn SQL thành Cypher  

**Câu 6.** Microservices Storage trong tích hợp NoSQL vào DW nhấn mạnh điều gì?

A. Tất cả dịch vụ dùng chung một bảng vật lý  
B. Mỗi tầng lưu trữ được cô lập sau dịch vụ độc lập và giao tiếp qua API  
C. Xóa lớp API để truy cập trực tiếp cơ sở dữ liệu  
D. Chỉ cho phép truy vấn batch vào cuối ngày  

**Câu 7.** Theo slide, CAP Theorem trong kiến trúc này thường dẫn tới lựa chọn nào ở các tầng NoSQL vệ tinh?

A. Không cần xét đến tính sẵn sàng  
B. Bắt buộc mọi tầng đều Strong Consistency như kho trung tâm  
C. Chấp nhận Eventual Consistency để đổi lấy tốc độ và tính sẵn sàng  
D. Luôn bỏ qua tính nhất quán dữ liệu  

**Câu 8.** Kho dữ liệu trung tâm trong mô hình này cần ưu tiên điều gì?

A. Lưu dữ liệu không có schema duy nhất  
B. Chỉ lưu dữ liệu cache  
C. Không cần kiểm soát giao dịch  
D. Strong Consistency  

**Câu 9.** Hybrid Schema Mapping dùng Data Pipeline để làm gì?

A. Trích xuất và làm phẳng các trường động từ NoSQL thành bảng phục vụ OLAP  
B. Tạo queue cho BFS  
C. Mã hóa mọi bản ghi thành hash SHA-256  
D. Sao chép dữ liệu sang DR Region  

### B. Knowledge Graphs

**Câu 10.** Knowledge Graph sử dụng cấu trúc nào để biểu diễn thực thể và quan hệ?

A. Rows và Partitions duy nhất  
B. Nodes và Edges  
C. Blocks và Transactions  
D. Vectors và Quantizers  

**Câu 11.** Tư duy Relationship-First trong Knowledge Graph có nghĩa là gì?

A. Quan hệ chỉ được tính tạm bằng JOIN khi truy vấn  
B. Không lưu quan hệ giữa dữ liệu  
C. Quan hệ được lưu trực tiếp như thực thể hạng nhất  
D. Chỉ lưu quan hệ trong file log  

**Câu 12.** Knowledge Graph giúp hệ thống hiểu tốt hơn điều gì?

A. Địa chỉ IP của máy chủ dự phòng  
B. Số chữ số thập phân của Wei  
C. Kích thước RAM của cache  
D. Ngữ cảnh hệ thống và các mối quan hệ phức tạp  

**Câu 13.** Entity Disambiguation là kỹ thuật gì?

A. Nhận diện và hợp nhất các thực thể trùng lặp hoặc viết sai định dạng  
B. Nén vector để đưa chỉ mục vào RAM  
C. Chuyển đơn vị Wei sang Ether  
D. Đẩy điều kiện WHERE xuống nguồn dữ liệu  

**Câu 14.** Semantic Labeling trong Knowledge Graph thường dựa vào gì?

A. RPO để đo dữ liệu mất mát  
B. Ontology để định nghĩa quan hệ giữa các thực thể  
C. ABI để giải mã log Blockchain  
D. Query Hint để ép trình tối ưu  

**Câu 15.** Graph Traversal N-degree có giá trị chính trong bài toán nào?

A. Chỉ định kiểu dữ liệu số nguyên lớn  
B. Tăng tốc phiên đăng nhập  
C. Tìm mối liên kết ngầm phục vụ phát hiện gian lận hoặc đứt gãy chuỗi cung ứng  
D. Lưu cache kết quả dashboard  

**Câu 16.** BFS là thuật toán duyệt đồ thị theo cách nào?

A. Duyệt ngẫu nhiên các cạnh  
B. Duyệt sâu một nhánh đến khi cụt đường  
C. Chỉ duyệt node có trọng số lớn nhất  
D. Duyệt từng cấp độ, mở rộng theo chiều ngang  

**Câu 17.** BFS thường sử dụng cấu trúc dữ liệu nào?

A. Queue - FIFO  
B. Stack - LIFO  
C. Merkle Tree  
D. Hash Table bất biến  

**Câu 18.** DFS là thuật toán duyệt đồ thị theo cách nào?

A. Chỉ tìm các node lân cận gần nhất  
B. Đi sâu theo một nhánh đến khi cụt đường rồi quay lui  
C. Luôn duyệt đồng thời tất cả node cùng cấp  
D. Chỉ dùng trong dữ liệu quan hệ  

**Câu 19.** DFS thường sử dụng cấu trúc dữ liệu nào?

A. Queue - FIFO  
B. Vector Index IVF  
C. Stack - LIFO hoặc đệ quy  
D. Global Catalog  

**Câu 20.** BFS trong Knowledge Graph phù hợp nhất với nhiệm vụ nào?

A. Nén vector embedding  
B. Khám phá chuỗi liên kết rất sâu trong một nhánh  
C. Đồng bộ dữ liệu bất đồng bộ xuyên quốc gia  
D. Tìm các thực thể liên quan gần nhất hoặc đường đi ngắn nhất  

**Câu 21.** DFS trong Knowledge Graph phù hợp nhất với nhiệm vụ nào?

A. Khám phá quan hệ sâu, duyệt ontology và xây dựng taxonomy  
B. Tìm node gần nhất theo từng cấp  
C. Giải mã log bằng ABI  
D. Đẩy predicate xuống nguồn dữ liệu  

### C. Vector Embeddings và Vector Indexing

**Câu 22.** Vector Embeddings là gì?

A. Bảng khóa ngoại trong RDBMS  
B. Chuỗi số thực biểu diễn dữ liệu phi cấu trúc sau khi được mô hình AI chuyển đổi  
C. Mã băm gốc của Merkle Tree  
D. Giao thức truy cập node Blockchain  

**Câu 23.** Vector Embeddings thường được tạo thông qua loại mô hình nào?

A. Stored procedure của SQL Server  
B. Cơ chế failover DNS  
C. AI hoặc Deep Learning  
D. Smart Contract kiểm toán  

**Câu 24.** Đặc điểm hình học quan trọng của vector embedding là gì?

A. Mọi vector đều có đúng 3 chiều  
B. Vector chỉ lưu dữ liệu số nguyên  
C. Vector không thể so sánh bằng khoảng cách  
D. Các thực thể tương đồng về ý nghĩa nằm gần nhau trong không gian toán học  

**Câu 25.** Theo slide, vector thường có số chiều trong khoảng nào?

A. 768 đến 1536 chiều  
B. 8 đến 16 chiều  
C. 2 đến 4 chiều  
D. 10.000 đến 1.000.000 chiều cố định  

**Câu 26.** Semantic Search thay thế cách tìm kiếm nào?

A. Automated Failover  
B. Keyword Matching thô  
C. Microservices Storage  
D. Data Anchoring  

**Câu 27.** Thách thức hiệu năng khi quét hàng triệu vector nhiều chiều là gì?

A. Không thể dùng RDBMS cho giao dịch  
B. Không thể lưu timestamp UTC  
C. Quá tải CPU do Curse of Dimensionality  
D. Không thể tạo Root Hash  

**Câu 28.** ANN trong Vector Indexing là viết tắt của gì?

A. Automated Network Normalization  
B. Asynchronous Node Notation  
C. Audit Non-repudiation Number  
D. Approximate Nearest Neighbor  

**Câu 29.** HNSW hoạt động theo hướng nào?

A. Xây dựng cấu trúc đồ thị phân cấp để tìm láng giềng gần nhất rất nhanh  
B. Dịch SQL thành RPC  
C. Gom hash log thành Merkle Root  
D. Sao chép dữ liệu sang vùng DR  

**Câu 30.** IVF trong Vector Indexing dùng kỹ thuật gì?

A. Duyệt sâu ontology bằng Stack  
B. Phân cụm không gian vector thành các phân vùng để thu hẹp phạm vi tìm kiếm  
C. Tách dữ liệu giao dịch thành bảng ACID  
D. Ghi Root Hash lên Smart Contract  

**Câu 31.** Quantization trong Vector Indexing nhằm mục tiêu gì?

A. Biến vector thành dữ liệu on-chain  
B. Tăng số chiều vector lên vô hạn  
C. Nén kích thước lưu trữ vector để đưa chỉ mục vào RAM hiệu quả hơn  
D. Xóa mọi thông tin ngữ nghĩa khỏi vector  

### D. Blockchain, On-chain Data và Metadata Audit Logs

**Câu 32.** Dữ liệu on-chain bao gồm thông tin nào?

A. Chỉ các báo cáo dashboard tĩnh  
B. Chỉ dữ liệu cache phiên làm việc  
C. Chỉ ontology của Knowledge Graph  
D. Lịch sử giao dịch, số dư tài khoản và trạng thái thực thi Smart Contract  

**Câu 33.** Đặc điểm kỹ thuật của dữ liệu thô trên Blockchain là gì?

A. Minh bạch nhưng ở dạng byte/hex phi cấu trúc và phân tán trên nhiều node  
B. Chỉ lưu trong một máy chủ trung tâm  
C. Luôn ở dạng bảng quan hệ chuẩn hóa sẵn  
D. Không thể truy vết lịch sử  

**Câu 34.** Mục tiêu phân tích dữ liệu on-chain trong BI/Fintech là gì?

A. Thay thế Knowledge Graph bằng cache  
B. Chuyển dòng dữ liệu phi cấu trúc từ Blockchain về dạng bảng quan hệ  
C. Loại bỏ toàn bộ lịch sử giao dịch  
D. Chỉ lưu dữ liệu dưới dạng hình ảnh  

**Câu 35.** Node Ingestion trong Blockchain ETL là gì?

A. Duyệt ontology bằng DFS  
B. Chia vector thành Voronoi cells  
C. Kết nối liên tục với node Blockchain qua RPC để bắt các block mới sinh  
D. Nhân bản dữ liệu sang Secondary Region  

**Câu 36.** Event Decoding sử dụng ABI để làm gì?

A. Tạo queue FIFO cho BFS  
B. Tính RTO và RPO  
C. Ước tính chi phí CPU/I-O  
D. Dịch chuỗi Hex trong Logs thành tên hàm và tham số cụ thể  

**Câu 37.** Data Normalization trong Blockchain ETL bao gồm việc nào?

A. Chuyển Wei sang Ether và đồng bộ timestamp về UTC  
B. Đổi Edge thành Node  
C. Xóa toàn bộ Smart Contract  
D. Đẩy WHERE xuống Graph Database  

**Câu 38.** Vấn đề của Audit Logs trong hệ thống truyền thống là gì?

A. Log không liên quan đến Metadata  
B. DBA có thể sửa đổi hoặc xóa log để che dấu vết gian lận  
C. Log luôn bất biến tuyệt đối  
D. Log chỉ có thể lưu trong Vector Database  

**Câu 39.** Blockchain được dùng cho Metadata Audit Logs vì lý do nào?

A. Là bộ nhớ cache nhanh nhất  
B. Là thuật toán tìm đường đi ngắn nhất  
C. Là sổ cái bất biến, độc lập và khó bị thao túng  
D. Là trình tối ưu hóa truy vấn đa mô hình  

**Câu 40.** Giá trị cốt lõi của Immutable Audit Logs là gì?

A. Giảm tính kiểm toán  
B. Tăng độ trễ truy vấn  
C. Bỏ qua mọi thay đổi dữ liệu  
D. Non-repudiation và minh bạch cho Metadata  

**Câu 41.** Vì sao hệ thống không lưu toàn bộ dữ liệu thô lên Blockchain khi làm Audit Logs?

A. Để tiết kiệm chi phí và bảo mật thông tin  
B. Vì Blockchain không thể lưu hash  
C. Vì dữ liệu thô không bao giờ thay đổi  
D. Vì Smart Contract chỉ dùng cho BFS  

**Câu 42.** Cryptographic Hashing trong Data Anchoring dùng để làm gì?

A. Chọn Broadcast Join hay Hash Join  
B. Băm dữ liệu thay đổi thành chuỗi đại diện duy nhất như SHA-256  
C. Tạo phiên đăng nhập Key-Value  
D. Dịch SQL sang Cypher  

**Câu 43.** Merkle Tree trong quản lý Audit Logs có vai trò gì?

A. Điều phối failover sang vùng dự phòng  
B. Lưu toàn bộ dữ liệu thô lên chuỗi  
C. Gom nhiều mã băm log thành một Merkle Root Hash  
D. Tạo vector embedding nhiều chiều  

**Câu 44.** Anchoring trong Data Integrity là gì?

A. Tìm node gần nhất bằng HNSW  
B. Lưu session bằng Key-Value Store  
C. Trích xuất cột động từ NoSQL thành bảng  
D. Ghi nhận Root Hash lên Blockchain thông qua Smart Contract  

### E. Federated Querying và Query Optimization

**Câu 45.** Federated Querying cho phép điều gì?

A. Một câu SQL lấy và liên kết dữ liệu từ nhiều nền tảng khác nhau mà không cần di chuyển dữ liệu thô  
B. Bắt buộc ETL toàn bộ dữ liệu về một nơi trước khi truy vấn  
C. Chỉ truy vấn dữ liệu đã lưu trên Blockchain  
D. Chỉ truy vấn một bảng trong một RDBMS  

**Câu 46.** Zero-Copy Architecture trong Federated Querying nhấn mạnh điều gì?

A. Chỉ dùng dữ liệu batch cuối tháng  
B. Giữ dữ liệu tại nguồn và chỉ lấy kết quả khi cần  
C. Không cần connector với nguồn dữ liệu  
D. Sao chép mọi dữ liệu về một kho trung tâm  

**Câu 47.** Lợi ích kinh tế của Federated Querying là gì?

A. Làm mất khả năng truy vấn dữ liệu mới  
B. Buộc mọi nguồn đổi sang cùng một hệ quản trị  
C. Tiết kiệm chi phí lưu trữ và hỗ trợ truy cập dữ liệu thời gian thực  
D. Luôn tăng chi phí lưu trữ  

**Câu 48.** Connector/Wrapper Engines như Presto, Trino hoặc BigQuery Omni có vai trò gì?

A. Thực hiện failover vùng chính sang vùng phụ  
B. Tạo hash SHA-256 cho Audit Logs  
C. Chỉ lưu cache phiên làm việc  
D. Tiếp nhận SQL tổng và dịch sang ngôn ngữ hoặc giao thức của từng nguồn  

**Câu 49.** Khi truy vấn Graph trong Federated Querying, SQL tổng có thể được dịch thành gì?

A. Cypher  
B. RPO  
C. FIFO  
D. Wei  

**Câu 50.** Global Catalog trong Federated Querying dùng để làm gì?

A. Tính khoảng cách giữa các embedding  
B. Duy trì từ điển dữ liệu chung để biết cột nằm ở nguồn nào  
C. Tự động xóa Audit Logs  
D. Nén vector bằng Product Quantization  

**Câu 51.** Predicate Pushdown là gì?

A. Ghi Root Hash lên Blockchain  
B. Tạo ontology cho Knowledge Graph  
C. Đẩy điều kiện lọc WHERE xuống cơ sở dữ liệu nguồn để giảm dữ liệu truyền về  
D. Kéo toàn bộ dữ liệu thô về máy trung tâm trước khi lọc  

**Câu 52.** Vì sao tối ưu hóa truy vấn đa mô hình khó hơn truy vấn một hệ thống đơn lẻ?

A. Vì không có câu lệnh SQL tổng  
B. Vì dữ liệu không bao giờ qua mạng  
C. Vì mọi nguồn luôn có thống kê giống nhau  
D. Optimizer thiếu thống kê đầy đủ về kích thước và chỉ mục của hệ thống đối tác  

**Câu 53.** Hậu quả có thể xảy ra khi kế hoạch truy vấn đa mô hình kém là gì?

A. Nghẽn cổ chai đường truyền mạng hoặc tràn RAM máy chủ trung tâm  
B. Tự động giảm số chiều vector  
C. Cải thiện RTO về 0 trong mọi trường hợp  
D. Tăng tính bất biến của log  

**Câu 54.** Mục tiêu của Multi-model Query Optimization là gì?

A. Xóa vai trò của Global Catalog  
B. Xây dựng execution plan thông minh, điều phối thứ tự lấy dữ liệu từ các nguồn  
C. Biến tất cả quan hệ thành file CSV  
D. Lưu mọi dữ liệu vào Key-Value Store  

**Câu 55.** Cost-Based Optimizer trong slide phân tích chi phí dựa trên hai nhóm nào?

A. Số node BFS và số edge DFS duy nhất  
B. Số smart contract và số ví cá nhân  
C. Chi phí tính toán tại chỗ và chi phí vận chuyển dữ liệu qua mạng  
D. Số người dùng và màu giao diện dashboard  

**Câu 56.** Broadcast Join phù hợp khi nào theo tinh thần slide?

A. Khi chỉ cần ghi log lên Blockchain  
B. Khi không có kết nối mạng  
C. Khi mọi bảng đều cực lớn và phải băm cả hai bảng  
D. Khi kéo bảng nhỏ sang máy chủ chứa bảng lớn là hợp lý hơn  

**Câu 57.** Query Hints được dùng để làm gì?

A. Ép hệ thống thực thi theo ý đồ kiến trúc khi thiếu thông tin thống kê  
B. Tạo Vector Embedding bằng Deep Learning  
C. Chuyển Wei sang Ether  
D. Mã hóa dữ liệu bằng SHA-256  

### F. High Availability và Disaster Recovery

**Câu 58.** Trong hệ thống tích hợp SQL + NoSQL + Graph + Blockchain, vì sao HA/DR quan trọng?

A. Vì HA/DR chỉ dùng cho hệ thống đơn giản  
B. Một thành phần lỗi có thể làm tê liệt toàn bộ chuỗi cung ứng dữ liệu  
C. Vì dữ liệu đa mô hình không cần khôi phục  
D. Vì hệ thống càng phức tạp thì không bao giờ lỗi  

**Câu 59.** RTO (Recovery Time Objective) là gì?

A. Số chiều của vector embedding  
B. Chi phí vận chuyển dữ liệu qua mạng  
C. Thời gian tối đa chấp nhận để khôi phục hệ thống hoạt động trở lại sau sự cố  
D. Lượng dữ liệu tối đa chấp nhận bị mất  

**Câu 60.** RPO (Recovery Point Objective) là gì?

A. Số node cần duyệt trong BFS  
B. Số hash gom vào một Merkle Root  
C. Thời gian tối đa để người dùng đăng nhập  
D. Lượng dữ liệu tối đa chấp nhận bị mất trong quá trình xảy ra sự cố  

## Đáp án và giải thích

1. A - Polyglot Persistence là dùng nhiều công nghệ lưu trữ trong một kiến trúc để xử lý nhiều dạng dữ liệu.
2. B - Slide nhấn mạnh "One size does not fit all": không có CSDL duy nhất tối ưu cho mọi tác vụ.
3. C - RDBMS phù hợp dữ liệu giao dịch cốt lõi cần ACID và tính toàn vẹn cao.
4. D - Document Store phù hợp hồ sơ thực thể thay đổi schema thường xuyên.
5. A - Key-Value Store hay dùng cho cache và session vì truy xuất nhanh.
6. B - Microservices Storage cô lập tầng lưu trữ sau dịch vụ độc lập, giao tiếp bằng API.
7. C - NoSQL vệ tinh có thể chấp nhận Eventual Consistency để đạt tốc độ và availability.
8. D - Kho trung tâm vẫn phải giữ Strong Consistency để bảo đảm độ tin cậy phân tích.
9. A - Hybrid Schema Mapping làm phẳng trường động từ NoSQL thành bảng phục vụ OLAP.
10. B - Knowledge Graph biểu diễn thực thể bằng node và quan hệ bằng edge.
11. C - Relationship-First coi quan hệ là dữ liệu hạng nhất, không chỉ là kết quả JOIN tạm thời.
12. D - Graph giúp hệ thống hiểu ngữ cảnh và duyệt quan hệ phức tạp.
13. A - Entity Disambiguation hợp nhất các thực thể trùng hoặc sai định dạng giữa nguồn.
14. B - Semantic Labeling dùng ontology để gán nhãn và định nghĩa quan hệ.
15. C - Graph Traversal N-degree tìm liên kết ngầm, hữu ích trong gian lận và chuỗi cung ứng.
16. D - BFS duyệt theo từng cấp, mở rộng theo chiều ngang.
17. A - BFS dùng Queue theo nguyên tắc FIFO.
18. B - DFS đi sâu theo một nhánh, gặp cụt đường thì quay lui.
19. C - DFS dùng Stack LIFO hoặc đệ quy.
20. D - BFS phù hợp tìm thực thể gần, gợi ý gần và đường đi ngắn nhất.
21. A - DFS phù hợp khám phá sâu, duyệt ontology và taxonomy.
22. B - Vector embedding là chuỗi số thực biểu diễn dữ liệu phi cấu trúc.
23. C - Embedding thường được tạo bởi mô hình AI/Deep Learning.
24. D - Các thực thể tương đồng nằm gần nhau trong không gian vector.
25. A - Slide nêu vector thường có 768 đến 1536 chiều.
26. B - Semantic Search thay thế tìm kiếm từ khóa thô.
27. C - Quét vector nhiều chiều gây quá tải CPU do Curse of Dimensionality.
28. D - ANN là Approximate Nearest Neighbor.
29. A - HNSW dùng cấu trúc đồ thị phân cấp để tìm láng giềng gần nhanh.
30. B - IVF phân cụm không gian vector thành các vùng để giảm phạm vi tìm kiếm.
31. C - Quantization nén vector/chỉ mục để tiết kiệm bộ nhớ và tăng hiệu năng.
32. D - On-chain data gồm giao dịch, số dư và trạng thái thực thi Smart Contract.
33. A - Dữ liệu thô Blockchain minh bạch nhưng phi cấu trúc, dạng byte/hex và phân tán.
34. B - Mục tiêu là đưa dữ liệu on-chain về dạng bảng cho BI/Fintech.
35. C - Node Ingestion kết nối node qua RPC để bắt block mới.
36. D - ABI giúp giải mã log hex thành tên hàm và tham số.
37. A - Normalization đổi đơn vị như Wei sang Ether và chuẩn hóa timestamp UTC.
38. B - Trong hệ thống truyền thống, DBA có thể sửa/xóa log nếu không có cơ chế bất biến.
39. C - Blockchain phù hợp vì sổ cái bất biến, độc lập và khó thao túng.
40. D - Immutable Audit Logs bảo đảm không thể phủ nhận và minh bạch metadata.
41. A - Không lưu dữ liệu thô lên Blockchain để tiết kiệm chi phí và bảo mật.
42. B - Hashing tạo chuỗi đại diện duy nhất cho dữ liệu thay đổi.
43. C - Merkle Tree gom nhiều hash log thành một Root Hash.
44. D - Anchoring ghi Root Hash lên Blockchain qua Smart Contract.
45. A - Federated Querying cho phép truy vấn nhiều nguồn bằng một SQL mà không cần di chuyển dữ liệu thô.
46. B - Zero-Copy giữ dữ liệu tại nguồn và chỉ lấy kết quả cần thiết.
47. C - Lợi ích là giảm lưu trữ trùng lặp và truy cập gần thời gian thực.
48. D - Connector/Wrapper dịch SQL tổng sang ngôn ngữ hoặc giao thức của từng nguồn.
49. A - Với Graph, truy vấn có thể được dịch sang Cypher.
50. B - Global Catalog cho biết dữ liệu/cột nằm ở nguồn nào.
51. C - Predicate Pushdown đẩy điều kiện WHERE xuống nguồn để lọc sớm.
52. D - Optimizer khó tối ưu vì thiếu thống kê từ các hệ thống đối tác.
53. A - Kế hoạch kém có thể gây nghẽn mạng hoặc tràn RAM trung tâm.
54. B - Mục tiêu là chọn execution plan tốt và thứ tự lấy dữ liệu hợp lý.
55. C - Cost-Based Optimizer xét chi phí CPU/I-O tại nguồn và chi phí truyền dữ liệu qua mạng.
56. D - Broadcast Join hợp lý khi bảng nhỏ có thể gửi sang nơi chứa bảng lớn.
57. A - Query Hints giúp định hướng optimizer khi thiếu thống kê.
58. B - Hệ thống đa mô hình có nhiều mắt xích, lỗi một thành phần có thể làm đứt toàn chuỗi dữ liệu.
59. C - RTO là thời gian tối đa chấp nhận để khôi phục dịch vụ.
60. D - RPO là lượng dữ liệu tối đa chấp nhận bị mất khi xảy ra sự cố.
