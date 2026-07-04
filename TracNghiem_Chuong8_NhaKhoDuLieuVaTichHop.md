# Trắc nghiệm chương 8 - Generative BI & AI-Driven Insights

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide8.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Từ Descriptive Analytics sang Actionable Analytics

**Câu 1.** Phân tích truyền thống (Descriptive Analytics) chủ yếu trả lời câu hỏi nào?

A. Điều gì đã xảy ra?  
B. Nên hành động gì ngay bây giờ?  
C. Mô hình nào tự động gửi báo cáo?  
D. Dữ liệu nào cần đưa vào Object Table?  

**Câu 2.** Đặc điểm của phân tích truyền thống theo slide là gì?

A. Dữ liệu tĩnh, độ trễ cao và phụ thuộc con người ra quyết định  
B. Luôn đưa ra hành động tức thì  
C. Luôn dự báo bằng AI tại kho dữ liệu  
D. Không cần báo cáo quá khứ  

**Câu 3.** Phân tích hiện đại (Actionable Analytics) dùng AI để làm gì?

A. Dự báo và đề xuất hành động ngay tại kho dữ liệu  
B. Chỉ lưu báo cáo quá khứ  
C. Xóa dữ liệu phi cấu trúc  
D. Chỉ tạo dashboard tĩnh  

**Câu 4.** Mục tiêu của Actionable Analytics là gì?

A. Biến insight thành giá trị kinh doanh và hành động tức thì  
B. Làm insight chậm hơn  
C. Giữ dữ liệu ở dạng tĩnh  
D. Không cho phép người dùng ra quyết định  

**Câu 5.** BigQuery ML trong slide được nêu như ví dụ cho khả năng nào?

A. Ứng dụng AI để dự báo và đề xuất hành động trong kho dữ liệu  
B. Chỉ lưu dữ liệu ảnh  
C. Chỉ làm file backup  
D. Chỉ tạo câu hỏi tự nhiên  

**Câu 6.** BigQuery Object Tables cho phép phân tích trực tiếp loại dữ liệu nào thông qua SQL?

A. Hình ảnh, PDF, Audio và Video  
B. Chỉ bảng quan hệ truyền thống  
C. Chỉ dữ liệu đã tổng hợp theo tháng  
D. Chỉ dữ liệu số nguyên  

**Câu 7.** Lợi ích của phân tích dữ liệu phi cấu trúc trực tiếp trong Warehouse là gì?

A. Bảo mật tập trung, quản trị thống nhất và khai thác dữ liệu tiềm ẩn  
B. Bắt buộc di chuyển dữ liệu ra ngoài  
C. Không thể kết hợp với Vertex AI  
D. Không truy vấn được bằng SQL  

**Câu 8.** Theo slide, dữ liệu phi cấu trúc chiếm khoảng bao nhiêu dữ liệu tiềm ẩn của doanh nghiệp?

A. 80%  
B. 10%  
C. 25%  
D. 100% dữ liệu đã có cấu trúc  

**Câu 9.** Ví dụ `NKDL_TH_8.1.ipynb` minh họa điều gì?

A. Chuyển dữ liệu không cấu trúc thành bán cấu trúc/cấu trúc  
B. Tạo DBSCAN clustering  
C. Quản lý Row-level Security  
D. Tạo Model Registry  

### B. Semantic Search và Vector Search

**Câu 10.** Embeddings dùng để làm gì?

A. Chuyển văn bản/hình ảnh thành vector mang ý nghĩa ngữ nghĩa  
B. Xóa dữ liệu phi cấu trúc  
C. Chỉ nén dữ liệu warehouse  
D. Tạo dashboard bar chart  

**Câu 11.** Vector trong Semantic Search đại diện cho điều gì?

A. Chuỗi số có ý nghĩa ngữ nghĩa để máy tính so sánh  
B. Một dòng dữ liệu bị lỗi  
C. Một cột bị mask  
D. Một câu lệnh SQL thủ công  

**Câu 12.** Vector Index trong kho dữ liệu dùng để làm gì?

A. Tìm kiếm hàng triệu bản ghi tương đồng rất nhanh  
B. Tạo khóa chính cho bảng quan hệ  
C. Tự động xóa dữ liệu cũ  
D. Chỉ lưu PDF dưới dạng ảnh  

**Câu 13.** IVFFLAT trong slide là ví dụ của gì?

A. Vector Index  
B. Row-level Security  
C. Dashboard action  
D. Pub/Sub system  

**Câu 14.** Semantic Match khác keyword search ở điểm nào?

A. Tìm theo ý nghĩa thay vì từ khóa chính xác  
B. Chỉ tìm chuỗi ký tự giống hệt  
C. Không dùng embeddings  
D. Không phù hợp cho tài liệu pháp lý  

**Câu 15.** Ứng dụng phù hợp của Semantic Match là gì?

A. Gợi ý sản phẩm và tra cứu tài liệu pháp lý phức tạp  
B. Chỉ tính tổng doanh thu tháng  
C. Chỉ xóa dữ liệu duplicate  
D. Chỉ tạo audit log  

**Câu 16.** Vì sao Vector Search quan trọng trong Generative BI?

A. Giúp tìm ngữ cảnh tương đồng để AI trả lời sát dữ liệu  
B. Thay thế hoàn toàn mọi dữ liệu doanh nghiệp  
C. Không cần kho dữ liệu  
D. Chỉ dùng để vẽ biểu đồ  

### C. RAG cho Business Data

**Câu 17.** RAG là viết tắt của gì?

A. Retrieval-Augmented Generation  
B. Real-time Analytics Gateway  
C. Relational Aggregation Graph  
D. Report Automation Governance  

**Câu 18.** RAG cho dữ liệu doanh nghiệp giúp AI trả lời dựa trên gì?

A. Kho dữ liệu tin cậy của doanh nghiệp  
B. Kiến thức chung chung trên Internet בלבד  
C. Dữ liệu ngẫu nhiên không kiểm chứng  
D. Chỉ prompt của người dùng  

**Câu 19.** Bước Ingestion trong RAG làm gì?

A. Chuyển tài liệu vào Object Tables  
B. Tạo vector từ chunks  
C. Tìm ngữ cảnh liên quan  
D. LLM tổng hợp câu trả lời  

**Câu 20.** Bước Embedding trong RAG làm gì?

A. Băm nhỏ tài liệu thành chunks và tạo vector  
B. Gửi thông báo khuyến mãi  
C. Chọn biểu đồ Line chart  
D. Tạo dashboard storytelling  

**Câu 21.** Bước Retrieval trong RAG làm gì?

A. Tìm kiếm ngữ cảnh liên quan qua Vector Search khi có câu hỏi  
B. Tạo dữ liệu phi cấu trúc mới  
C. Chỉ lưu dữ liệu thô  
D. Xóa câu hỏi của người dùng  

**Câu 22.** Bước Generation trong RAG làm gì?

A. LLM tổng hợp và trả lời dựa trên ngữ cảnh vừa tìm được  
B. Chia dữ liệu thành Object Tables  
C. Tạo vector index  
D. Chỉ sinh SQL truy vấn  

**Câu 23.** RAG giúp giảm hiện tượng nào?

A. Hallucination  
B. Row-level filtering  
C. Data masking  
D. Kafka partitioning  

**Câu 24.** Vì sao RAG giảm hallucination?

A. Ép mô hình dùng dữ liệu nội bộ đã kiểm chứng  
B. Cho mô hình trả lời hoàn toàn tự do  
C. Không dùng retrieval  
D. Không dùng dữ liệu doanh nghiệp  

**Câu 25.** Ứng dụng thực tế của RAG trong slide là gì?

A. Chatbot nội bộ HR, tra cứu quy trình, hỗ trợ khách hàng đa kênh  
B. Chỉ xóa dữ liệu cũ  
C. Chỉ phân cụm K-Means  
D. Chỉ tạo bảng pivot  

### D. Generative BI và Conversational BI

**Câu 26.** Generative BI giúp dân chủ hóa dữ liệu bằng cách nào?

A. Cho người dùng kinh doanh hỏi dữ liệu bằng ngôn ngữ tự nhiên  
B. Bắt buộc mọi người phải viết SQL phức tạp  
C. Chỉ cho Data Engineer xem báo cáo  
D. Chỉ xuất dữ liệu ra CSV  

**Câu 27.** Lợi ích trực tiếp của Generative BI là gì?

A. Giảm phần lớn thời gian tạo báo cáo  
B. Tăng rào cản kỹ thuật SQL  
C. Không thể kết hợp với BI tools  
D. Không hỗ trợ người dùng kinh doanh  

**Câu 28.** Chat-with-your-data loại bỏ rào cản nào?

A. Rào cản kỹ thuật SQL  
B. Rào cản bảo mật dữ liệu  
C. Nhu cầu dữ liệu tin cậy  
D. Nhu cầu semantic layer  

**Câu 29.** Công nghệ nền của Generative BI theo slide là gì?

A. Kết hợp BI Tools như Looker/Tableau với LLM như Gemini/ChatGPT  
B. Chỉ dùng FTP truyền thống  
C. Chỉ dùng OLTP database  
D. Chỉ dùng Excel macro  

**Câu 30.** Natural Query trong Conversational BI nghĩa là gì?

A. Người dùng đặt câu hỏi bằng ngôn ngữ tự nhiên  
B. Người dùng chỉ viết SQL thủ công  
C. Hệ thống chỉ đọc file ảnh  
D. Hệ thống tự động xóa câu hỏi  

**Câu 31.** Auto-SQL trong Conversational BI làm gì?

A. LLM biên dịch câu hỏi ngữ nghĩa thành SQL chuẩn xác, tối ưu và an toàn  
B. Người dùng tự viết SQL không hỗ trợ  
C. Chỉ chọn màu biểu đồ  
D. Chỉ tạo vector embedding  

**Câu 32.** Instant Insight trong workflow Conversational BI là gì?

A. Tự động truy xuất dữ liệu và chọn biểu đồ phù hợp để hiển thị kết quả  
B. Chỉ lưu kết quả vào archive  
C. Chỉ trả lời bằng văn bản không có dữ liệu  
D. Chỉ tạo prompt cho LLM  

**Câu 33.** Ví dụ “Hiển thị top 5 sản phẩm có doanh thu cao nhất quý 3” thuộc bước nào?

A. Natural Query  
B. Data Masking  
C. Kafka Streaming  
D. Zero-copy Sharing  

**Câu 34.** Một yêu cầu quan trọng với Auto-SQL là gì?

A. SQL sinh ra phải chuẩn xác, tối ưu và an toàn  
B. SQL sinh ra càng khó đọc càng tốt  
C. Không cần kiểm soát quyền truy cập  
D. Không cần dựa trên dữ liệu thật  

### E. Real-time Insights và Streaming

**Câu 35.** Real-time Insights dùng công nghệ nào để xử lý dữ liệu luồng?

A. Streaming API với công cụ như Dataflow/Kafka  
B. Chỉ báo cáo batch cuối năm  
C. Chỉ gửi email thủ công  
D. Chỉ dùng spreadsheet offline  

**Câu 36.** Mục tiêu của phân tích streaming là gì?

A. Xử lý hàng triệu sự kiện mỗi giây để phản ứng tức thì  
B. Tăng độ trễ báo cáo  
C. Chỉ phân tích dữ liệu quá khứ tĩnh  
D. Không cho hệ thống tự động hành động  

**Câu 37.** Ứng dụng cốt lõi của Real-time Insights là gì?

A. Phát hiện gian lận thẻ, định giá động, quản trị chuỗi cung ứng  
B. Chỉ lưu ảnh PDF  
C. Chỉ tạo Business Glossary  
D. Chỉ masking số điện thoại  

**Câu 38.** Zero Latency trong slide nhấn mạnh điều gì?

A. Hành động tự động ngay khi dữ liệu vừa phát sinh  
B. Chờ tổng hợp cuối tháng rồi hành động  
C. Chỉ lưu dữ liệu nhưng không xử lý  
D. Chỉ hỏi bằng ngôn ngữ tự nhiên  

**Câu 39.** Pub/Sub kết hợp Continuous Queries giúp gì?

A. Cho phép doanh nghiệp thực hiện hành động tự động khi dữ liệu phát sinh  
B. Chỉ tạo vector index  
C. Chỉ làm RAG retrieval  
D. Chỉ tạo dashboard tĩnh  

**Câu 40.** Ví dụ khách rời giỏ hàng được gửi khuyến mãi cá nhân hóa minh họa điều gì?

A. Quyết định tức thời tại điểm chạm  
B. Chỉ báo cáo quá khứ  
C. K-anonymity  
D. Model Versioning  

**Câu 41.** Apache Kafka trong chương này liên quan đến chủ đề nào?

A. Phân tích dữ liệu luồng/streaming  
B. Column-level Masking  
C. Business Glossary  
D. Feature Store  

### F. Data Storytelling và Dashboard thông minh

**Câu 42.** Cấu trúc Data Storytelling trong slide gồm gì?

A. Bối cảnh, Vấn đề, Giải pháp, Hành động  
B. Bronze, Silver, Gold, Archive  
C. Train, Test, Deploy, Drift  
D. Query, Mask, Share, Delete  

**Câu 43.** Trực quan hóa thông minh dùng màu sắc và vị trí để làm gì?

A. Dẫn dắt sự chú ý vào các Key Metrics  
B. Làm dashboard khó đọc hơn  
C. Ẩn toàn bộ dữ liệu  
D. Tăng số lượng bảng vật lý  

**Câu 44.** Gen AI trong dashboard thông minh có thể làm gì?

A. Tự động viết đoạn giải thích văn bản cho dashboard  
B. Chỉ xóa biểu đồ cũ  
C. Chỉ tạo row-level security  
D. Chỉ chạy Kafka cluster  

**Câu 45.** Alerting & Actions trong dashboard thông minh nghĩa là gì?

A. Dashboard có nút lệnh kích hoạt quy trình nghiệp vụ như writeback to CRM  
B. Dashboard chỉ để xem, không có hành động  
C. Dashboard chỉ lưu ảnh tĩnh  
D. Dashboard không liên quan nghiệp vụ  

**Câu 46.** Data Storytelling có giá trị gì theo slide?

A. Tăng khả năng ghi nhớ và thuyết phục so với con số khô khan  
B. Làm giảm khả năng hiểu dữ liệu  
C. Chỉ dành cho Data Engineer  
D. Không cần bối cảnh  

**Câu 47.** Theo slide, dữ liệu trình bày dưới dạng câu chuyện có khả năng ghi nhớ/thuyết phục cao hơn bao nhiêu so với con số khô khan?

A. 65%  
B. 5%  
C. 20%  
D. 1000%  

**Câu 48.** Data Storytelling là cầu nối giữa những bộ phận nào?

A. IT/Data và Business/Chiến lược  
B. HR và bảo vệ  
C. Storage và CPU vật lý  
D. Kafka và FTP  

**Câu 49.** Key Metrics trong dashboard thông minh là gì?

A. Các chỉ số then chốt cần thu hút sự chú ý  
B. Các dòng dữ liệu bị xóa  
C. Các prompt lỗi  
D. Các file âm thanh  

### G. Agentic BI và AI Agents

**Câu 50.** Agentic BI mô tả tương lai nào?

A. AI Agents trở thành chuyên viên phân tích tự hành  
B. AI chỉ là trợ lý hỏi-đáp đơn giản mãi mãi  
C. Dashboard chỉ là ảnh tĩnh  
D. Business user phải viết SQL toàn bộ  

**Câu 51.** AI Agents trong Agentic BI không chỉ dừng lại ở vai trò nào?

A. Trợ lý hỏi-đáp  
B. Chuyên viên phân tích tự hành  
C. Hệ thống theo dõi mục tiêu  
D. Bộ phát hiện xu hướng ẩn  

**Câu 52.** Một năng lực cốt lõi của AI Agents là gì?

A. Tự động theo dõi mục tiêu kinh doanh  
B. Chỉ xóa dữ liệu phi cấu trúc  
C. Chỉ khóa tài khoản người dùng  
D. Chỉ tạo bản sao dữ liệu  

**Câu 53.** AI Agents có thể tự lập kế hoạch gì?

A. Kế hoạch phân tích  
B. Kế hoạch xóa warehouse  
C. Kế hoạch bỏ qua dữ liệu  
D. Kế hoạch giảm governance  

**Câu 54.** AI Agents có thể truy vấn gì theo slide?

A. Kho dữ liệu  
B. Chỉ email cá nhân  
C. Chỉ file PDF offline  
D. Chỉ ảnh dashboard  

**Câu 55.** AI Agents có thể phát hiện điều gì?

A. Xu hướng ẩn  
B. Chỉ lỗi chính tả  
C. Chỉ mật khẩu yếu  
D. Chỉ số dòng trong slide  

**Câu 56.** AI Agents có thể chủ động gửi gì?

A. Báo cáo đề xuất chiến lược  
B. Bản sao dữ liệu thô cho mọi người  
C. Mật khẩu truy cập warehouse  
D. Dữ liệu chưa kiểm chứng  

**Câu 57.** Lợi ích của Agentic BI là gì?

A. Giảm nhu cầu con người phải ra lệnh liên tục cho từng phân tích  
B. Bắt buộc người dùng hỏi từng câu nhỏ  
C. Không cho phép tự động hóa  
D. Chỉ hỗ trợ báo cáo quá khứ  

**Câu 58.** Agentic BI khác Conversational BI ở điểm nào?

A. Agentic BI chủ động phân tích/đề xuất, còn Conversational BI chủ yếu phản hồi câu hỏi  
B. Agentic BI không dùng dữ liệu  
C. Conversational BI tự lập kế hoạch chiến lược tốt hơn Agentic BI  
D. Hai khái niệm hoàn toàn là database storage  

**Câu 59.** Một điều kiện quan trọng để Agentic BI hoạt động tốt là gì?

A. Có kho dữ liệu, metadata/ngữ nghĩa và cơ chế truy vấn đáng tin cậy  
B. Không cần dữ liệu doanh nghiệp  
C. Không cần quyền truy cập  
D. Chỉ cần dashboard tĩnh  

**Câu 60.** Chuỗi năng lực hợp lý của AI Agent trong chương 8 là gì?

A. Theo dõi mục tiêu, lập kế hoạch phân tích, truy vấn dữ liệu, phát hiện xu hướng, gửi đề xuất  
B. Xóa dữ liệu, tắt BI, bỏ qua mục tiêu, gửi file rỗng  
C. Chỉ chờ người dùng viết SQL rồi hiển thị lỗi  
D. Chỉ tạo ảnh minh họa không phân tích  

## Đáp án và giải thích ngắn

1. A - Descriptive analytics trả lời “điều gì đã xảy ra”.
2. A - Slide mô tả dữ liệu tĩnh, độ trễ cao, phụ thuộc con người.
3. A - Actionable analytics dùng AI để predict/prescribe.
4. A - Mục tiêu là biến insight thành hành động tức thì.
5. A - BigQuery ML là ví dụ AI ngay trong kho dữ liệu.
6. A - Object Tables phân tích image/PDF/audio/video bằng SQL.
7. A - Lợi ích là bảo mật, quản trị tập trung và khai thác dữ liệu ẩn.
8. A - Slide nêu 80% dữ liệu tiềm ẩn là phi cấu trúc.
9. A - Ví dụ minh họa chuyển unstructured sang semi-structured/structured.
10. A - Embeddings biến dữ liệu thành vector ngữ nghĩa.
11. A - Vector là chuỗi số biểu diễn ý nghĩa.
12. A - Vector index giúp tìm tương đồng rất nhanh.
13. A - IVFFLAT là ví dụ vector index.
14. A - Semantic match tìm theo nghĩa.
15. A - Phù hợp recommendation và legal document search.
16. A - Vector Search cung cấp ngữ cảnh liên quan cho AI.
17. A - RAG là Retrieval-Augmented Generation.
18. A - RAG dựa trên dữ liệu tin cậy của doanh nghiệp.
19. A - Ingestion đưa tài liệu vào Object Tables.
20. A - Embedding chia chunks và tạo vector.
21. A - Retrieval tìm ngữ cảnh qua Vector Search.
22. A - Generation dùng LLM trả lời theo ngữ cảnh.
23. A - RAG giảm hallucination.
24. A - RAG ép dùng dữ liệu nội bộ kiểm chứng.
25. A - HR chatbot, tra cứu quy trình, hỗ trợ khách hàng là ví dụ.
26. A - Generative BI cho hỏi bằng ngôn ngữ tự nhiên.
27. A - Giảm thời gian tạo báo cáo.
28. A - Loại bỏ rào cản SQL.
29. A - Kết hợp BI tools và LLM.
30. A - Natural Query là câu hỏi tự nhiên.
31. A - Auto-SQL sinh SQL chuẩn/tối ưu/an toàn.
32. A - Instant Insight truy xuất và chọn visual phù hợp.
33. A - Câu tiếng Việt đó là Natural Query.
34. A - Auto-SQL phải chính xác, tối ưu, an toàn.
35. A - Streaming API với Dataflow/Kafka.
36. A - Streaming xử lý sự kiện nhanh để phản ứng tức thì.
37. A - Fraud detection, dynamic pricing, supply chain.
38. A - Zero latency là hành động ngay khi dữ liệu phát sinh.
39. A - Pub/Sub + continuous queries kích hoạt hành động tự động.
40. A - Đây là quyết định tức thời tại điểm chạm.
41. A - Kafka thuộc streaming/real-time insights.
42. A - Storytelling gồm bối cảnh, vấn đề, giải pháp, hành động.
43. A - Màu/vị trí dẫn chú ý đến key metrics.
44. A - Gen AI tự viết narrative cho dashboard.
45. A - Dashboard có thể kích hoạt workflow/writeback.
46. A - Storytelling tăng ghi nhớ/thuyết phục.
47. A - Slide nêu cao hơn 65%.
48. A - Là cầu nối IT/Data và Business.
49. A - Key metrics là chỉ số then chốt.
50. A - Agentic BI hướng đến analyst tự hành.
51. A - Không chỉ là trợ lý hỏi-đáp.
52. A - AI Agent có thể theo dõi mục tiêu kinh doanh.
53. A - Có thể lập kế hoạch phân tích.
54. A - Có thể truy vấn kho dữ liệu.
55. A - Có thể phát hiện xu hướng ẩn.
56. A - Có thể gửi báo cáo đề xuất chiến lược.
57. A - Giảm nhu cầu ra lệnh liên tục.
58. A - Agentic chủ động hơn Conversational BI.
59. A - Cần dữ liệu, metadata/ngữ nghĩa và truy vấn tin cậy.
60. A - Đây là chuỗi năng lực đúng theo slide.
