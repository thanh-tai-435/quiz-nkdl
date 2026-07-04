# Trắc nghiệm chương 9 - Tích hợp dữ liệu đa mô hình và Cơ sở dữ liệu hiện đại

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide9.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Polyglot Persistence và tích hợp NoSQL vào DW

**Câu 1.** Polyglot Persistence là gì?

A. Áp dụng đồng thời nhiều công nghệ lưu trữ như SQL và NoSQL trong cùng một kiến trúc  
B. Chỉ sử dụng một cơ sở dữ liệu quan hệ cho mọi loại dữ liệu  
C. Chuyển toàn bộ dữ liệu về Blockchain  
D. Loại bỏ Data Warehouse để thay bằng file CSV  

**Câu 2.** Triết lý cốt lõi của Polyglot Persistence là gì?

A. Không có một cơ sở dữ liệu duy nhất tối ưu cho mọi loại tác vụ  
B. Mọi hệ thống đều phải dùng RDBMS  
C. NoSQL luôn thay thế hoàn toàn SQL  
D. Dữ liệu càng phi cấu trúc càng không cần quản trị  

**Câu 3.** Trong kiến trúc Polyglot Persistence, RDBMS thường phù hợp nhất với loại dữ liệu nào?

A. Dữ liệu giao dịch cốt lõi cần tính toàn vẹn ACID  
B. Phiên đăng nhập tạm thời cần truy xuất cực nhanh  
C. Vector embedding nhiều chiều  
D. Log byte/hex từ Blockchain  

**Câu 4.** Document Store trong NoSQL phù hợp với trường hợp nào?

A. Hồ sơ thực thể có cấu trúc thay đổi liên tục  
B. Bảng giao dịch cần khóa ngoại nghiêm ngặt  
C. Root hash của Merkle Tree  
D. Hàng đợi FIFO của thuật toán BFS  

**Câu 5.** Key-Value Store thường được dùng cho mục đích nào?

A. Caching và lưu phiên làm việc  
B. Chuẩn hóa timestamp về UTC  
C. Duyệt ontology nhiều tầng  
D. Dịch truy vấn SQL thành Cypher  

**Câu 6.** Microservices Storage trong tích hợp NoSQL vào DW nhấn mạnh điều gì?

A. Mỗi tầng lưu trữ được cô lập sau dịch vụ độc lập và giao tiếp qua API  
B. Tất cả dịch vụ dùng chung một bảng vật lý  
C. Xóa lớp API để truy cập trực tiếp cơ sở dữ liệu  
D. Chỉ cho phép truy vấn batch vào cuối ngày  

**Câu 7.** Theo slide, CAP Theorem trong kiến trúc này thường dẫn tới lựa chọn nào ở các tầng NoSQL vệ tinh?

A. Chấp nhận Eventual Consistency để đổi lấy tốc độ và tính sẵn sàng  
B. Bắt buộc mọi tầng đều Strong Consistency như kho trung tâm  
C. Không cần xét đến tính sẵn sàng  
D. Luôn bỏ qua tính nhất quán dữ liệu  

**Câu 8.** Kho dữ liệu trung tâm trong mô hình này cần ưu tiên điều gì?

A. Strong Consistency  
B. Lưu dữ liệu không có schema duy nhất  
C. Chỉ lưu dữ liệu cache  
D. Không cần kiểm soát giao dịch  

**Câu 9.** Hybrid Schema Mapping dùng Data Pipeline để làm gì?

A. Trích xuất và làm phẳng các trường động từ NoSQL thành bảng phục vụ OLAP  
B. Mã hóa mọi bản ghi thành hash SHA-256  
C. Tạo queue cho BFS  
D. Sao chép dữ liệu sang DR Region  

### B. Knowledge Graphs

**Câu 10.** Knowledge Graph sử dụng cấu trúc nào để biểu diễn thực thể và quan hệ?

A. Nodes và Edges  
B. Blocks và Transactions  
C. Rows và Partitions duy nhất  
D. Vectors và Quantizers  

**Câu 11.** Tư duy Relationship-First trong Knowledge Graph có nghĩa là gì?

A. Quan hệ được lưu trực tiếp như thực thể hạng nhất  
B. Quan hệ chỉ được tính tạm bằng JOIN khi truy vấn  
C. Không lưu quan hệ giữa dữ liệu  
D. Chỉ lưu quan hệ trong file log  

**Câu 12.** Knowledge Graph giúp hệ thống hiểu tốt hơn điều gì?

A. Ngữ cảnh hệ thống và các mối quan hệ phức tạp  
B. Số chữ số thập phân của Wei  
C. Địa chỉ IP của máy chủ dự phòng  
D. Kích thước RAM của cache  

**Câu 13.** Entity Disambiguation là kỹ thuật gì?

A. Nhận diện và hợp nhất các thực thể trùng lặp hoặc viết sai định dạng  
B. Nén vector để đưa chỉ mục vào RAM  
C. Chuyển đơn vị Wei sang Ether  
D. Đẩy điều kiện WHERE xuống nguồn dữ liệu  

**Câu 14.** Semantic Labeling trong Knowledge Graph thường dựa vào gì?

A. Ontology để định nghĩa quan hệ giữa các thực thể  
B. ABI để giải mã log Blockchain  
C. RPO để đo dữ liệu mất mát  
D. Query Hint để ép trình tối ưu  

**Câu 15.** Graph Traversal N-degree có giá trị chính trong bài toán nào?

A. Tìm mối liên kết ngầm phục vụ phát hiện gian lận hoặc đứt gãy chuỗi cung ứng  
B. Chỉ định kiểu dữ liệu số nguyên lớn  
C. Tăng tốc phiên đăng nhập  
D. Lưu cache kết quả dashboard  

**Câu 16.** BFS là thuật toán duyệt đồ thị theo cách nào?

A. Duyệt từng cấp độ, mở rộng theo chiều ngang  
B. Duyệt sâu một nhánh đến khi cụt đường  
C. Duyệt ngẫu nhiên các cạnh  
D. Chỉ duyệt node có trọng số lớn nhất  

**Câu 17.** BFS thường sử dụng cấu trúc dữ liệu nào?

A. Queue - FIFO  
B. Stack - LIFO  
C. Merkle Tree  
D. Hash Table bất biến  

**Câu 18.** DFS là thuật toán duyệt đồ thị theo cách nào?

A. Đi sâu theo một nhánh đến khi cụt đường rồi quay lui  
B. Luôn duyệt đồng thời tất cả node cùng cấp  
C. Chỉ tìm các node lân cận gần nhất  
D. Chỉ dùng trong dữ liệu quan hệ  

**Câu 19.** DFS thường sử dụng cấu trúc dữ liệu nào?

A. Stack - LIFO hoặc đệ quy  
B. Queue - FIFO  
C. Vector Index IVF  
D. Global Catalog  

**Câu 20.** BFS trong Knowledge Graph phù hợp nhất với nhiệm vụ nào?

A. Tìm các thực thể liên quan gần nhất hoặc đường đi ngắn nhất  
B. Khám phá chuỗi liên kết rất sâu trong một nhánh  
C. Nén vector embedding  
D. Đồng bộ dữ liệu bất đồng bộ xuyên quốc gia  

**Câu 21.** DFS trong Knowledge Graph phù hợp nhất với nhiệm vụ nào?

A. Khám phá quan hệ sâu, duyệt ontology và xây dựng taxonomy  
B. Tìm node gần nhất theo từng cấp  
C. Giải mã log bằng ABI  
D. Đẩy predicate xuống nguồn dữ liệu  

### C. Vector Embeddings và Vector Indexing

**Câu 22.** Vector Embeddings là gì?

A. Chuỗi số thực biểu diễn dữ liệu phi cấu trúc sau khi được mô hình AI chuyển đổi  
B. Bảng khóa ngoại trong RDBMS  
C. Mã băm gốc của Merkle Tree  
D. Giao thức truy cập node Blockchain  

**Câu 23.** Vector Embeddings thường được tạo thông qua loại mô hình nào?

A. AI hoặc Deep Learning  
B. Cơ chế failover DNS  
C. Stored procedure của SQL Server  
D. Smart Contract kiểm toán  

**Câu 24.** Đặc điểm hình học quan trọng của vector embedding là gì?

A. Các thực thể tương đồng về ý nghĩa nằm gần nhau trong không gian toán học  
B. Mọi vector đều có đúng 3 chiều  
C. Vector chỉ lưu dữ liệu số nguyên  
D. Vector không thể so sánh bằng khoảng cách  

**Câu 25.** Theo slide, vector thường có số chiều trong khoảng nào?

A. 768 đến 1536 chiều  
B. 2 đến 4 chiều  
C. 8 đến 16 chiều  
D. 10.000 đến 1.000.000 chiều cố định  

**Câu 26.** Semantic Search thay thế cách tìm kiếm nào?

A. Keyword Matching thô  
B. Automated Failover  
C. Microservices Storage  
D. Data Anchoring  

**Câu 27.** Thách thức hiệu năng khi quét hàng triệu vector nhiều chiều là gì?

A. Quá tải CPU do Curse of Dimensionality  
B. Không thể lưu timestamp UTC  
C. Không thể dùng RDBMS cho giao dịch  
D. Không thể tạo Root Hash  

**Câu 28.** ANN trong Vector Indexing là viết tắt của gì?

A. Approximate Nearest Neighbor  
B. Automated Network Normalization  
C. Asynchronous Node Notation  
D. Audit Non-repudiation Number  

**Câu 29.** HNSW hoạt động theo hướng nào?

A. Xây dựng cấu trúc đồ thị phân cấp để tìm láng giềng gần nhất rất nhanh  
B. Gom hash log thành Merkle Root  
C. Dịch SQL thành RPC  
D. Sao chép dữ liệu sang vùng DR  

**Câu 30.** IVF trong Vector Indexing dùng kỹ thuật gì?

A. Phân cụm không gian vector thành các phân vùng để thu hẹp phạm vi tìm kiếm  
B. Duyệt sâu ontology bằng Stack  
C. Tách dữ liệu giao dịch thành bảng ACID  
D. Ghi Root Hash lên Smart Contract  

**Câu 31.** Quantization trong Vector Indexing nhằm mục tiêu gì?

A. Nén kích thước lưu trữ vector để đưa chỉ mục vào RAM hiệu quả hơn  
B. Tăng số chiều vector lên vô hạn  
C. Biến vector thành dữ liệu on-chain  
D. Xóa mọi thông tin ngữ nghĩa khỏi vector  

### D. Blockchain, On-chain Data và Metadata Audit Logs

**Câu 32.** Dữ liệu on-chain bao gồm thông tin nào?

A. Lịch sử giao dịch, số dư tài khoản và trạng thái thực thi Smart Contract  
B. Chỉ các báo cáo dashboard tĩnh  
C. Chỉ dữ liệu cache phiên làm việc  
D. Chỉ ontology của Knowledge Graph  

**Câu 33.** Đặc điểm kỹ thuật của dữ liệu thô trên Blockchain là gì?

A. Minh bạch nhưng ở dạng byte/hex phi cấu trúc và phân tán trên nhiều node  
B. Luôn ở dạng bảng quan hệ chuẩn hóa sẵn  
C. Chỉ lưu trong một máy chủ trung tâm  
D. Không thể truy vết lịch sử  

**Câu 34.** Mục tiêu phân tích dữ liệu on-chain trong BI/Fintech là gì?

A. Chuyển dòng dữ liệu phi cấu trúc từ Blockchain về dạng bảng quan hệ  
B. Loại bỏ toàn bộ lịch sử giao dịch  
C. Thay thế Knowledge Graph bằng cache  
D. Chỉ lưu dữ liệu dưới dạng hình ảnh  

**Câu 35.** Node Ingestion trong Blockchain ETL là gì?

A. Kết nối liên tục với node Blockchain qua RPC để bắt các block mới sinh  
B. Duyệt ontology bằng DFS  
C. Chia vector thành Voronoi cells  
D. Nhân bản dữ liệu sang Secondary Region  

**Câu 36.** Event Decoding sử dụng ABI để làm gì?

A. Dịch chuỗi Hex trong Logs thành tên hàm và tham số cụ thể  
B. Tính RTO và RPO  
C. Tạo queue FIFO cho BFS  
D. Ước tính chi phí CPU/I-O  

**Câu 37.** Data Normalization trong Blockchain ETL bao gồm việc nào?

A. Chuyển Wei sang Ether và đồng bộ timestamp về UTC  
B. Đổi Edge thành Node  
C. Xóa toàn bộ Smart Contract  
D. Đẩy WHERE xuống Graph Database  

**Câu 38.** Vấn đề của Audit Logs trong hệ thống truyền thống là gì?

A. DBA có thể sửa đổi hoặc xóa log để che dấu vết gian lận  
B. Log luôn bất biến tuyệt đối  
C. Log không liên quan đến Metadata  
D. Log chỉ có thể lưu trong Vector Database  

**Câu 39.** Blockchain được dùng cho Metadata Audit Logs vì lý do nào?

A. Là sổ cái bất biến, độc lập và khó bị thao túng  
B. Là bộ nhớ cache nhanh nhất  
C. Là thuật toán tìm đường đi ngắn nhất  
D. Là trình tối ưu hóa truy vấn đa mô hình  

**Câu 40.** Giá trị cốt lõi của Immutable Audit Logs là gì?

A. Non-repudiation và minh bạch cho Metadata  
B. Tăng độ trễ truy vấn  
C. Giảm tính kiểm toán  
D. Bỏ qua mọi thay đổi dữ liệu  

**Câu 41.** Vì sao hệ thống không lưu toàn bộ dữ liệu thô lên Blockchain khi làm Audit Logs?

A. Để tiết kiệm chi phí và bảo mật thông tin  
B. Vì Blockchain không thể lưu hash  
C. Vì dữ liệu thô không bao giờ thay đổi  
D. Vì Smart Contract chỉ dùng cho BFS  

**Câu 42.** Cryptographic Hashing trong Data Anchoring dùng để làm gì?

A. Băm dữ liệu thay đổi thành chuỗi đại diện duy nhất như SHA-256  
B. Dịch SQL sang Cypher  
C. Chọn Broadcast Join hay Hash Join  
D. Tạo phiên đăng nhập Key-Value  

**Câu 43.** Merkle Tree trong quản lý Audit Logs có vai trò gì?

A. Gom nhiều mã băm log thành một Merkle Root Hash  
B. Tạo vector embedding nhiều chiều  
C. Lưu toàn bộ dữ liệu thô lên chuỗi  
D. Điều phối failover sang vùng dự phòng  

**Câu 44.** Anchoring trong Data Integrity là gì?

A. Ghi nhận Root Hash lên Blockchain thông qua Smart Contract  
B. Trích xuất cột động từ NoSQL thành bảng  
C. Tìm node gần nhất bằng HNSW  
D. Lưu session bằng Key-Value Store  

### E. Federated Querying và Query Optimization

**Câu 45.** Federated Querying cho phép điều gì?

A. Một câu SQL lấy và liên kết dữ liệu từ nhiều nền tảng khác nhau mà không cần di chuyển dữ liệu thô  
B. Chỉ truy vấn một bảng trong một RDBMS  
C. Bắt buộc ETL toàn bộ dữ liệu về một nơi trước khi truy vấn  
D. Chỉ truy vấn dữ liệu đã lưu trên Blockchain  

**Câu 46.** Zero-Copy Architecture trong Federated Querying nhấn mạnh điều gì?

A. Giữ dữ liệu tại nguồn và chỉ lấy kết quả khi cần  
B. Sao chép mọi dữ liệu về một kho trung tâm  
C. Không cần connector với nguồn dữ liệu  
D. Chỉ dùng dữ liệu batch cuối tháng  

**Câu 47.** Lợi ích kinh tế của Federated Querying là gì?

A. Tiết kiệm chi phí lưu trữ và hỗ trợ truy cập dữ liệu thời gian thực  
B. Luôn tăng chi phí lưu trữ  
C. Làm mất khả năng truy vấn dữ liệu mới  
D. Buộc mọi nguồn đổi sang cùng một hệ quản trị  

**Câu 48.** Connector/Wrapper Engines như Presto, Trino hoặc BigQuery Omni có vai trò gì?

A. Tiếp nhận SQL tổng và dịch sang ngôn ngữ hoặc giao thức của từng nguồn  
B. Chỉ lưu cache phiên làm việc  
C. Tạo hash SHA-256 cho Audit Logs  
D. Thực hiện failover vùng chính sang vùng phụ  

**Câu 49.** Khi truy vấn Graph trong Federated Querying, SQL tổng có thể được dịch thành gì?

A. Cypher  
B. Wei  
C. RPO  
D. FIFO  

**Câu 50.** Global Catalog trong Federated Querying dùng để làm gì?

A. Duy trì từ điển dữ liệu chung để biết cột nằm ở nguồn nào  
B. Nén vector bằng Product Quantization  
C. Tự động xóa Audit Logs  
D. Tính khoảng cách giữa các embedding  

**Câu 51.** Predicate Pushdown là gì?

A. Đẩy điều kiện lọc WHERE xuống cơ sở dữ liệu nguồn để giảm dữ liệu truyền về  
B. Kéo toàn bộ dữ liệu thô về máy trung tâm trước khi lọc  
C. Ghi Root Hash lên Blockchain  
D. Tạo ontology cho Knowledge Graph  

**Câu 52.** Vì sao tối ưu hóa truy vấn đa mô hình khó hơn truy vấn một hệ thống đơn lẻ?

A. Optimizer thiếu thống kê đầy đủ về kích thước và chỉ mục của hệ thống đối tác  
B. Vì mọi nguồn luôn có thống kê giống nhau  
C. Vì dữ liệu không bao giờ qua mạng  
D. Vì không có câu lệnh SQL tổng  

**Câu 53.** Hậu quả có thể xảy ra khi kế hoạch truy vấn đa mô hình kém là gì?

A. Nghẽn cổ chai đường truyền mạng hoặc tràn RAM máy chủ trung tâm  
B. Tăng tính bất biến của log  
C. Tự động giảm số chiều vector  
D. Cải thiện RTO về 0 trong mọi trường hợp  

**Câu 54.** Mục tiêu của Multi-model Query Optimization là gì?

A. Xây dựng execution plan thông minh, điều phối thứ tự lấy dữ liệu từ các nguồn  
B. Lưu mọi dữ liệu vào Key-Value Store  
C. Biến tất cả quan hệ thành file CSV  
D. Xóa vai trò của Global Catalog  

**Câu 55.** Cost-Based Optimizer trong slide phân tích chi phí dựa trên hai nhóm nào?

A. Chi phí tính toán tại chỗ và chi phí vận chuyển dữ liệu qua mạng  
B. Số người dùng và màu giao diện dashboard  
C. Số node BFS và số edge DFS duy nhất  
D. Số smart contract và số ví cá nhân  

**Câu 56.** Broadcast Join phù hợp khi nào theo tinh thần slide?

A. Khi kéo bảng nhỏ sang máy chủ chứa bảng lớn là hợp lý hơn  
B. Khi mọi bảng đều cực lớn và phải băm cả hai bảng  
C. Khi không có kết nối mạng  
D. Khi chỉ cần ghi log lên Blockchain  

**Câu 57.** Query Hints được dùng để làm gì?

A. Ép hệ thống thực thi theo ý đồ kiến trúc khi thiếu thông tin thống kê  
B. Mã hóa dữ liệu bằng SHA-256  
C. Chuyển Wei sang Ether  
D. Tạo Vector Embedding bằng Deep Learning  

### F. High Availability và Disaster Recovery

**Câu 58.** Trong hệ thống tích hợp SQL + NoSQL + Graph + Blockchain, vì sao HA/DR quan trọng?

A. Một thành phần lỗi có thể làm tê liệt toàn bộ chuỗi cung ứng dữ liệu  
B. Vì hệ thống càng phức tạp thì không bao giờ lỗi  
C. Vì HA/DR chỉ dùng cho hệ thống đơn giản  
D. Vì dữ liệu đa mô hình không cần khôi phục  

**Câu 59.** RTO (Recovery Time Objective) là gì?

A. Thời gian tối đa chấp nhận để khôi phục hệ thống hoạt động trở lại sau sự cố  
B. Lượng dữ liệu tối đa chấp nhận bị mất  
C. Chi phí vận chuyển dữ liệu qua mạng  
D. Số chiều của vector embedding  

**Câu 60.** RPO (Recovery Point Objective) là gì?

A. Lượng dữ liệu tối đa chấp nhận bị mất trong quá trình xảy ra sự cố  
B. Thời gian tối đa để người dùng đăng nhập  
C. Số node cần duyệt trong BFS  
D. Số hash gom vào một Merkle Root  

## Đáp án và giải thích

1. A - Polyglot Persistence là dùng nhiều công nghệ lưu trữ trong một kiến trúc để xử lý nhiều dạng dữ liệu.
2. A - Slide nhấn mạnh "One size does not fit all": không có CSDL duy nhất tối ưu cho mọi tác vụ.
3. A - RDBMS phù hợp dữ liệu giao dịch cốt lõi cần ACID và tính toàn vẹn cao.
4. A - Document Store phù hợp hồ sơ thực thể thay đổi schema thường xuyên.
5. A - Key-Value Store hay dùng cho cache và session vì truy xuất nhanh.
6. A - Microservices Storage cô lập tầng lưu trữ sau dịch vụ độc lập, giao tiếp bằng API.
7. A - NoSQL vệ tinh có thể chấp nhận Eventual Consistency để đạt tốc độ và availability.
8. A - Kho trung tâm vẫn phải giữ Strong Consistency để bảo đảm độ tin cậy phân tích.
9. A - Hybrid Schema Mapping làm phẳng trường động từ NoSQL thành bảng phục vụ OLAP.
10. A - Knowledge Graph biểu diễn thực thể bằng node và quan hệ bằng edge.
11. A - Relationship-First coi quan hệ là dữ liệu hạng nhất, không chỉ là kết quả JOIN tạm thời.
12. A - Graph giúp hệ thống hiểu ngữ cảnh và duyệt quan hệ phức tạp.
13. A - Entity Disambiguation hợp nhất các thực thể trùng hoặc sai định dạng giữa nguồn.
14. A - Semantic Labeling dùng ontology để gán nhãn và định nghĩa quan hệ.
15. A - Graph Traversal N-degree tìm liên kết ngầm, hữu ích trong gian lận và chuỗi cung ứng.
16. A - BFS duyệt theo từng cấp, mở rộng theo chiều ngang.
17. A - BFS dùng Queue theo nguyên tắc FIFO.
18. A - DFS đi sâu theo một nhánh, gặp cụt đường thì quay lui.
19. A - DFS dùng Stack LIFO hoặc đệ quy.
20. A - BFS phù hợp tìm thực thể gần, gợi ý gần và đường đi ngắn nhất.
21. A - DFS phù hợp khám phá sâu, duyệt ontology và taxonomy.
22. A - Vector embedding là chuỗi số thực biểu diễn dữ liệu phi cấu trúc.
23. A - Embedding thường được tạo bởi mô hình AI/Deep Learning.
24. A - Các thực thể tương đồng nằm gần nhau trong không gian vector.
25. A - Slide nêu vector thường có 768 đến 1536 chiều.
26. A - Semantic Search thay thế tìm kiếm từ khóa thô.
27. A - Quét vector nhiều chiều gây quá tải CPU do Curse of Dimensionality.
28. A - ANN là Approximate Nearest Neighbor.
29. A - HNSW dùng cấu trúc đồ thị phân cấp để tìm láng giềng gần nhanh.
30. A - IVF phân cụm không gian vector thành các vùng để giảm phạm vi tìm kiếm.
31. A - Quantization nén vector/chỉ mục để tiết kiệm bộ nhớ và tăng hiệu năng.
32. A - On-chain data gồm giao dịch, số dư và trạng thái thực thi Smart Contract.
33. A - Dữ liệu thô Blockchain minh bạch nhưng phi cấu trúc, dạng byte/hex và phân tán.
34. A - Mục tiêu là đưa dữ liệu on-chain về dạng bảng cho BI/Fintech.
35. A - Node Ingestion kết nối node qua RPC để bắt block mới.
36. A - ABI giúp giải mã log hex thành tên hàm và tham số.
37. A - Normalization đổi đơn vị như Wei sang Ether và chuẩn hóa timestamp UTC.
38. A - Trong hệ thống truyền thống, DBA có thể sửa/xóa log nếu không có cơ chế bất biến.
39. A - Blockchain phù hợp vì sổ cái bất biến, độc lập và khó thao túng.
40. A - Immutable Audit Logs bảo đảm không thể phủ nhận và minh bạch metadata.
41. A - Không lưu dữ liệu thô lên Blockchain để tiết kiệm chi phí và bảo mật.
42. A - Hashing tạo chuỗi đại diện duy nhất cho dữ liệu thay đổi.
43. A - Merkle Tree gom nhiều hash log thành một Root Hash.
44. A - Anchoring ghi Root Hash lên Blockchain qua Smart Contract.
45. A - Federated Querying cho phép truy vấn nhiều nguồn bằng một SQL mà không cần di chuyển dữ liệu thô.
46. A - Zero-Copy giữ dữ liệu tại nguồn và chỉ lấy kết quả cần thiết.
47. A - Lợi ích là giảm lưu trữ trùng lặp và truy cập gần thời gian thực.
48. A - Connector/Wrapper dịch SQL tổng sang ngôn ngữ hoặc giao thức của từng nguồn.
49. A - Với Graph, truy vấn có thể được dịch sang Cypher.
50. A - Global Catalog cho biết dữ liệu/cột nằm ở nguồn nào.
51. A - Predicate Pushdown đẩy điều kiện WHERE xuống nguồn để lọc sớm.
52. A - Optimizer khó tối ưu vì thiếu thống kê từ các hệ thống đối tác.
53. A - Kế hoạch kém có thể gây nghẽn mạng hoặc tràn RAM trung tâm.
54. A - Mục tiêu là chọn execution plan tốt và thứ tự lấy dữ liệu hợp lý.
55. A - Cost-Based Optimizer xét chi phí CPU/I-O tại nguồn và chi phí truyền dữ liệu qua mạng.
56. A - Broadcast Join hợp lý khi bảng nhỏ có thể gửi sang nơi chứa bảng lớn.
57. A - Query Hints giúp định hướng optimizer khi thiếu thống kê.
58. A - Hệ thống đa mô hình có nhiều mắt xích, lỗi một thành phần có thể làm đứt toàn chuỗi dữ liệu.
59. A - RTO là thời gian tối đa chấp nhận để khôi phục dịch vụ.
60. A - RPO là lượng dữ liệu tối đa chấp nhận bị mất khi xảy ra sự cố.
