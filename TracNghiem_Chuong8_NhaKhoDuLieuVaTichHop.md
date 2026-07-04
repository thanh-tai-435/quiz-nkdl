# Trắc nghiệm chương 8 - Generative BI & AI-Driven Insights

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide8.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Từ Descriptive Analytics sang Actionable Analytics

**Câu 1.** Phân tích truyền thống (Descriptive Analytics) chủ yếu trả lời câu hỏi nào?

A. Dữ liệu nào cần đưa vào Object Table?  
B. Nên hành động gì ngay bây giờ?  
C. Mô hình nào tự động gửi báo cáo?  
D. Điều gì đã xảy ra?  

**Câu 2.** Đặc điểm của phân tích truyền thống theo slide là gì?

A. Dữ liệu tĩnh, độ trễ cao và phụ thuộc con người ra quyết định  
B. Luôn đưa ra hành động tức thì  
C. Không cần báo cáo quá khứ  
D. Luôn dự báo bằng AI tại kho dữ liệu  

**Câu 3.** Phân tích hiện đại (Actionable Analytics) dùng AI để làm gì?

A. Chỉ lưu báo cáo quá khứ  
B. Dự báo và đề xuất hành động ngay tại kho dữ liệu  
C. Chỉ tạo dashboard tĩnh  
D. Xóa dữ liệu phi cấu trúc  

**Câu 4.** Mục tiêu của Actionable Analytics là gì?

A. Không cho phép người dùng ra quyết định  
B. Làm insight chậm hơn  
C. Biến insight thành giá trị kinh doanh và hành động tức thì  
D. Giữ dữ liệu ở dạng tĩnh  

**Câu 5.** BigQuery ML trong slide được nêu như ví dụ cho khả năng nào?

A. Chỉ lưu dữ liệu ảnh  
B. Chỉ tạo câu hỏi tự nhiên  
C. Chỉ làm file backup  
D. Ứng dụng AI để dự báo và đề xuất hành động trong kho dữ liệu  

**Câu 6.** BigQuery Object Tables cho phép phân tích trực tiếp loại dữ liệu nào thông qua SQL?

A. Hình ảnh, PDF, Audio và Video  
B. Chỉ dữ liệu số nguyên  
C. Chỉ bảng quan hệ truyền thống  
D. Chỉ dữ liệu đã tổng hợp theo tháng  

**Câu 7.** Lợi ích của phân tích dữ liệu phi cấu trúc trực tiếp trong Warehouse là gì?

A. Bắt buộc di chuyển dữ liệu ra ngoài  
B. Bảo mật tập trung, quản trị thống nhất và khai thác dữ liệu tiềm ẩn  
C. Không truy vấn được bằng SQL  
D. Không thể kết hợp với Vertex AI  

**Câu 8.** Theo slide, dữ liệu phi cấu trúc chiếm khoảng bao nhiêu dữ liệu tiềm ẩn của doanh nghiệp?

A. 100% dữ liệu đã có cấu trúc  
B. 10%  
C. 80%  
D. 25%  

**Câu 9.** Ví dụ `NKDL_TH_8.1.ipynb` minh họa điều gì?

A. Tạo DBSCAN clustering  
B. Tạo Model Registry  
C. Quản lý Row-level Security  
D. Chuyển dữ liệu không cấu trúc thành bán cấu trúc/cấu trúc  

### B. Semantic Search và Vector Search

**Câu 10.** Embeddings dùng để làm gì?

A. Chuyển văn bản/hình ảnh thành vector mang ý nghĩa ngữ nghĩa  
B. Tạo dashboard bar chart  
C. Xóa dữ liệu phi cấu trúc  
D. Chỉ nén dữ liệu warehouse  

**Câu 11.** Vector trong Semantic Search đại diện cho điều gì?

A. Một dòng dữ liệu bị lỗi  
B. Chuỗi số có ý nghĩa ngữ nghĩa để máy tính so sánh  
C. Một câu lệnh SQL thủ công  
D. Một cột bị mask  

**Câu 12.** Vector Index trong kho dữ liệu dùng để làm gì?

A. Chỉ lưu PDF dưới dạng ảnh  
B. Tạo khóa chính cho bảng quan hệ  
C. Tìm kiếm hàng triệu bản ghi tương đồng rất nhanh  
D. Tự động xóa dữ liệu cũ  

**Câu 13.** IVFFLAT trong slide là ví dụ của gì?

A. Row-level Security  
B. Pub/Sub system  
C. Dashboard action  
D. Vector Index  

**Câu 14.** Semantic Match khác keyword search ở điểm nào?

A. Tìm theo ý nghĩa thay vì từ khóa chính xác  
B. Không phù hợp cho tài liệu pháp lý  
C. Chỉ tìm chuỗi ký tự giống hệt  
D. Không dùng embeddings  

**Câu 15.** Ứng dụng phù hợp của Semantic Match là gì?

A. Chỉ tạo audit log  
B. Gợi ý sản phẩm và tra cứu tài liệu pháp lý phức tạp  
C. Chỉ tính tổng doanh thu tháng  
D. Chỉ xóa dữ liệu duplicate  

**Câu 16.** Vì sao Vector Search quan trọng trong Generative BI?

A. Thay thế hoàn toàn mọi dữ liệu doanh nghiệp  
B. Chỉ dùng để vẽ biểu đồ  
C. Giúp tìm ngữ cảnh tương đồng để AI trả lời sát dữ liệu  
D. Không cần kho dữ liệu  

### C. RAG cho Business Data

**Câu 17.** RAG là viết tắt của gì?

A. Report Automation Governance  
B. Real-time Analytics Gateway  
C. Relational Aggregation Graph  
D. Retrieval-Augmented Generation  

**Câu 18.** RAG cho dữ liệu doanh nghiệp giúp AI trả lời dựa trên gì?

A. Kho dữ liệu tin cậy của doanh nghiệp  
B. Kiến thức chung chung trên Internet בלבד  
C. Chỉ prompt của người dùng  
D. Dữ liệu ngẫu nhiên không kiểm chứng  

**Câu 19.** Bước Ingestion trong RAG làm gì?

A. LLM tổng hợp câu trả lời  
B. Chuyển tài liệu vào Object Tables  
C. Tạo vector từ chunks  
D. Tìm ngữ cảnh liên quan  

**Câu 20.** Bước Embedding trong RAG làm gì?

A. Gửi thông báo khuyến mãi  
B. Tạo dashboard storytelling  
C. Băm nhỏ tài liệu thành chunks và tạo vector  
D. Chọn biểu đồ Line chart  

**Câu 21.** Bước Retrieval trong RAG làm gì?

A. Xóa câu hỏi của người dùng  
B. Tạo dữ liệu phi cấu trúc mới  
C. Chỉ lưu dữ liệu thô  
D. Tìm kiếm ngữ cảnh liên quan qua Vector Search khi có câu hỏi  

**Câu 22.** Bước Generation trong RAG làm gì?

A. LLM tổng hợp và trả lời dựa trên ngữ cảnh vừa tìm được  
B. Chia dữ liệu thành Object Tables  
C. Chỉ sinh SQL truy vấn  
D. Tạo vector index  

**Câu 23.** RAG giúp giảm hiện tượng nào?

A. Kafka partitioning  
B. Hallucination  
C. Row-level filtering  
D. Data masking  

**Câu 24.** Vì sao RAG giảm hallucination?

A. Cho mô hình trả lời hoàn toàn tự do  
B. Không dùng dữ liệu doanh nghiệp  
C. Ép mô hình dùng dữ liệu nội bộ đã kiểm chứng  
D. Không dùng retrieval  

**Câu 25.** Ứng dụng thực tế của RAG trong slide là gì?

A. Chỉ tạo bảng pivot  
B. Chỉ xóa dữ liệu cũ  
C. Chỉ phân cụm K-Means  
D. Chatbot nội bộ HR, tra cứu quy trình, hỗ trợ khách hàng đa kênh  

### D. Generative BI và Conversational BI

**Câu 26.** Generative BI giúp dân chủ hóa dữ liệu bằng cách nào?

A. Cho người dùng kinh doanh hỏi dữ liệu bằng ngôn ngữ tự nhiên  
B. Bắt buộc mọi người phải viết SQL phức tạp  
C. Chỉ xuất dữ liệu ra CSV  
D. Chỉ cho Data Engineer xem báo cáo  

**Câu 27.** Lợi ích trực tiếp của Generative BI là gì?

A. Tăng rào cản kỹ thuật SQL  
B. Giảm phần lớn thời gian tạo báo cáo  
C. Không hỗ trợ người dùng kinh doanh  
D. Không thể kết hợp với BI tools  

**Câu 28.** Chat-with-your-data loại bỏ rào cản nào?

A. Nhu cầu semantic layer  
B. Rào cản bảo mật dữ liệu  
C. Rào cản kỹ thuật SQL  
D. Nhu cầu dữ liệu tin cậy  

**Câu 29.** Công nghệ nền của Generative BI theo slide là gì?

A. Chỉ dùng FTP truyền thống  
B. Chỉ dùng Excel macro  
C. Chỉ dùng OLTP database  
D. Kết hợp BI Tools như Looker/Tableau với LLM như Gemini/ChatGPT  

**Câu 30.** Natural Query trong Conversational BI nghĩa là gì?

A. Người dùng đặt câu hỏi bằng ngôn ngữ tự nhiên  
B. Hệ thống tự động xóa câu hỏi  
C. Người dùng chỉ viết SQL thủ công  
D. Hệ thống chỉ đọc file ảnh  

**Câu 31.** Auto-SQL trong Conversational BI làm gì?

A. Người dùng tự viết SQL không hỗ trợ  
B. LLM biên dịch câu hỏi ngữ nghĩa thành SQL chuẩn xác, tối ưu và an toàn  
C. Chỉ tạo vector embedding  
D. Chỉ chọn màu biểu đồ  

**Câu 32.** Instant Insight trong workflow Conversational BI là gì?

A. Chỉ tạo prompt cho LLM  
B. Chỉ lưu kết quả vào archive  
C. Tự động truy xuất dữ liệu và chọn biểu đồ phù hợp để hiển thị kết quả  
D. Chỉ trả lời bằng văn bản không có dữ liệu  

**Câu 33.** Ví dụ “Hiển thị top 5 sản phẩm có doanh thu cao nhất quý 3” thuộc bước nào?

A. Data Masking  
B. Zero-copy Sharing  
C. Kafka Streaming  
D. Natural Query  

**Câu 34.** Một yêu cầu quan trọng với Auto-SQL là gì?

A. SQL sinh ra phải chuẩn xác, tối ưu và an toàn  
B. Không cần dựa trên dữ liệu thật  
C. SQL sinh ra càng khó đọc càng tốt  
D. Không cần kiểm soát quyền truy cập  

### E. Real-time Insights và Streaming

**Câu 35.** Real-time Insights dùng công nghệ nào để xử lý dữ liệu luồng?

A. Chỉ báo cáo batch cuối năm  
B. Streaming API với công cụ như Dataflow/Kafka  
C. Chỉ dùng spreadsheet offline  
D. Chỉ gửi email thủ công  

**Câu 36.** Mục tiêu của phân tích streaming là gì?

A. Không cho hệ thống tự động hành động  
B. Tăng độ trễ báo cáo  
C. Xử lý hàng triệu sự kiện mỗi giây để phản ứng tức thì  
D. Chỉ phân tích dữ liệu quá khứ tĩnh  

**Câu 37.** Ứng dụng cốt lõi của Real-time Insights là gì?

A. Chỉ lưu ảnh PDF  
B. Chỉ masking số điện thoại  
C. Chỉ tạo Business Glossary  
D. Phát hiện gian lận thẻ, định giá động, quản trị chuỗi cung ứng  

**Câu 38.** Zero Latency trong slide nhấn mạnh điều gì?

A. Hành động tự động ngay khi dữ liệu vừa phát sinh  
B. Chờ tổng hợp cuối tháng rồi hành động  
C. Chỉ hỏi bằng ngôn ngữ tự nhiên  
D. Chỉ lưu dữ liệu nhưng không xử lý  

**Câu 39.** Pub/Sub kết hợp Continuous Queries giúp gì?

A. Chỉ tạo dashboard tĩnh  
B. Cho phép doanh nghiệp thực hiện hành động tự động khi dữ liệu phát sinh  
C. Chỉ tạo vector index  
D. Chỉ làm RAG retrieval  

**Câu 40.** Ví dụ khách rời giỏ hàng được gửi khuyến mãi cá nhân hóa minh họa điều gì?

A. Chỉ báo cáo quá khứ  
B. Model Versioning  
C. Quyết định tức thời tại điểm chạm  
D. K-anonymity  

**Câu 41.** Apache Kafka trong chương này liên quan đến chủ đề nào?

A. Feature Store  
B. Column-level Masking  
C. Business Glossary  
D. Phân tích dữ liệu luồng/streaming  

### F. Data Storytelling và Dashboard thông minh

**Câu 42.** Cấu trúc Data Storytelling trong slide gồm gì?

A. Bối cảnh, Vấn đề, Giải pháp, Hành động  
B. Bronze, Silver, Gold, Archive  
C. Query, Mask, Share, Delete  
D. Train, Test, Deploy, Drift  

**Câu 43.** Trực quan hóa thông minh dùng màu sắc và vị trí để làm gì?

A. Tăng số lượng bảng vật lý  
B. Dẫn dắt sự chú ý vào các Key Metrics  
C. Làm dashboard khó đọc hơn  
D. Ẩn toàn bộ dữ liệu  

**Câu 44.** Gen AI trong dashboard thông minh có thể làm gì?

A. Chỉ xóa biểu đồ cũ  
B. Chỉ chạy Kafka cluster  
C. Tự động viết đoạn giải thích văn bản cho dashboard  
D. Chỉ tạo row-level security  

**Câu 45.** Alerting & Actions trong dashboard thông minh nghĩa là gì?

A. Dashboard không liên quan nghiệp vụ  
B. Dashboard chỉ để xem, không có hành động  
C. Dashboard chỉ lưu ảnh tĩnh  
D. Dashboard có nút lệnh kích hoạt quy trình nghiệp vụ như writeback to CRM  

**Câu 46.** Data Storytelling có giá trị gì theo slide?

A. Tăng khả năng ghi nhớ và thuyết phục so với con số khô khan  
B. Làm giảm khả năng hiểu dữ liệu  
C. Không cần bối cảnh  
D. Chỉ dành cho Data Engineer  

**Câu 47.** Theo slide, dữ liệu trình bày dưới dạng câu chuyện có khả năng ghi nhớ/thuyết phục cao hơn bao nhiêu so với con số khô khan?

A. 1000%  
B. 65%  
C. 5%  
D. 20%  

**Câu 48.** Data Storytelling là cầu nối giữa những bộ phận nào?

A. HR và bảo vệ  
B. Kafka và FTP  
C. IT/Data và Business/Chiến lược  
D. Storage và CPU vật lý  

**Câu 49.** Key Metrics trong dashboard thông minh là gì?

A. Các file âm thanh  
B. Các dòng dữ liệu bị xóa  
C. Các prompt lỗi  
D. Các chỉ số then chốt cần thu hút sự chú ý  

### G. Agentic BI và AI Agents

**Câu 50.** Agentic BI mô tả tương lai nào?

A. AI Agents trở thành chuyên viên phân tích tự hành  
B. Business user phải viết SQL toàn bộ  
C. AI chỉ là trợ lý hỏi-đáp đơn giản mãi mãi  
D. Dashboard chỉ là ảnh tĩnh  

**Câu 51.** AI Agents trong Agentic BI không chỉ dừng lại ở vai trò nào?

A. Chuyên viên phân tích tự hành  
B. Trợ lý hỏi-đáp  
C. Hệ thống theo dõi mục tiêu  
D. Bộ phát hiện xu hướng ẩn  

**Câu 52.** Một năng lực cốt lõi của AI Agents là gì?

A. Chỉ khóa tài khoản người dùng  
B. Chỉ xóa dữ liệu phi cấu trúc  
C. Tự động theo dõi mục tiêu kinh doanh  
D. Chỉ tạo bản sao dữ liệu  

**Câu 53.** AI Agents có thể tự lập kế hoạch gì?

A. Kế hoạch xóa warehouse  
B. Kế hoạch bỏ qua dữ liệu  
C. Kế hoạch giảm governance  
D. Kế hoạch phân tích  

**Câu 54.** AI Agents có thể truy vấn gì theo slide?

A. Kho dữ liệu  
B. Chỉ file PDF offline  
C. Chỉ email cá nhân  
D. Chỉ ảnh dashboard  

**Câu 55.** AI Agents có thể phát hiện điều gì?

A. Chỉ lỗi chính tả  
B. Xu hướng ẩn  
C. Chỉ mật khẩu yếu  
D. Chỉ số dòng trong slide  

**Câu 56.** AI Agents có thể chủ động gửi gì?

A. Mật khẩu truy cập warehouse  
B. Bản sao dữ liệu thô cho mọi người  
C. Báo cáo đề xuất chiến lược  
D. Dữ liệu chưa kiểm chứng  

**Câu 57.** Lợi ích của Agentic BI là gì?

A. Bắt buộc người dùng hỏi từng câu nhỏ  
B. Không cho phép tự động hóa  
C. Chỉ hỗ trợ báo cáo quá khứ  
D. Giảm nhu cầu con người phải ra lệnh liên tục cho từng phân tích  

**Câu 58.** Agentic BI khác Conversational BI ở điểm nào?

A. Agentic BI chủ động phân tích/đề xuất, còn Conversational BI chủ yếu phản hồi câu hỏi  
B. Conversational BI tự lập kế hoạch chiến lược tốt hơn Agentic BI  
C. Agentic BI không dùng dữ liệu  
D. Hai khái niệm hoàn toàn là database storage  

**Câu 59.** Một điều kiện quan trọng để Agentic BI hoạt động tốt là gì?

A. Không cần dữ liệu doanh nghiệp  
B. Có kho dữ liệu, metadata/ngữ nghĩa và cơ chế truy vấn đáng tin cậy  
C. Không cần quyền truy cập  
D. Chỉ cần dashboard tĩnh  

**Câu 60.** Chuỗi năng lực hợp lý của AI Agent trong chương 8 là gì?

A. Chỉ chờ người dùng viết SQL rồi hiển thị lỗi  
B. Xóa dữ liệu, tắt BI, bỏ qua mục tiêu, gửi file rỗng  
C. Theo dõi mục tiêu, lập kế hoạch phân tích, truy vấn dữ liệu, phát hiện xu hướng, gửi đề xuất  
D. Chỉ tạo ảnh minh họa không phân tích  

## Đáp án và giải thích ngắn

1. D - Descriptive analytics trả lời “điều gì đã xảy ra”.
2. A - Slide mô tả dữ liệu tĩnh, độ trễ cao, phụ thuộc con người.
3. B - Actionable analytics dùng AI để predict/prescribe.
4. C - Mục tiêu là biến insight thành hành động tức thì.
5. D - BigQuery ML là ví dụ AI ngay trong kho dữ liệu.
6. A - Object Tables phân tích image/PDF/audio/video bằng SQL.
7. B - Lợi ích là bảo mật, quản trị tập trung và khai thác dữ liệu ẩn.
8. C - Slide nêu 80% dữ liệu tiềm ẩn là phi cấu trúc.
9. D - Ví dụ minh họa chuyển unstructured sang semi-structured/structured.
10. A - Embeddings biến dữ liệu thành vector ngữ nghĩa.
11. B - Vector là chuỗi số biểu diễn ý nghĩa.
12. C - Vector index giúp tìm tương đồng rất nhanh.
13. D - IVFFLAT là ví dụ vector index.
14. A - Semantic match tìm theo nghĩa.
15. B - Phù hợp recommendation và legal document search.
16. C - Vector Search cung cấp ngữ cảnh liên quan cho AI.
17. D - RAG là Retrieval-Augmented Generation.
18. A - RAG dựa trên dữ liệu tin cậy của doanh nghiệp.
19. B - Ingestion đưa tài liệu vào Object Tables.
20. C - Embedding chia chunks và tạo vector.
21. D - Retrieval tìm ngữ cảnh qua Vector Search.
22. A - Generation dùng LLM trả lời theo ngữ cảnh.
23. B - RAG giảm hallucination.
24. C - RAG ép dùng dữ liệu nội bộ kiểm chứng.
25. D - HR chatbot, tra cứu quy trình, hỗ trợ khách hàng là ví dụ.
26. A - Generative BI cho hỏi bằng ngôn ngữ tự nhiên.
27. B - Giảm thời gian tạo báo cáo.
28. C - Loại bỏ rào cản SQL.
29. D - Kết hợp BI tools và LLM.
30. A - Natural Query là câu hỏi tự nhiên.
31. B - Auto-SQL sinh SQL chuẩn/tối ưu/an toàn.
32. C - Instant Insight truy xuất và chọn visual phù hợp.
33. D - Câu tiếng Việt đó là Natural Query.
34. A - Auto-SQL phải chính xác, tối ưu, an toàn.
35. B - Streaming API với Dataflow/Kafka.
36. C - Streaming xử lý sự kiện nhanh để phản ứng tức thì.
37. D - Fraud detection, dynamic pricing, supply chain.
38. A - Zero latency là hành động ngay khi dữ liệu phát sinh.
39. B - Pub/Sub + continuous queries kích hoạt hành động tự động.
40. C - Đây là quyết định tức thời tại điểm chạm.
41. D - Kafka thuộc streaming/real-time insights.
42. A - Storytelling gồm bối cảnh, vấn đề, giải pháp, hành động.
43. B - Màu/vị trí dẫn chú ý đến key metrics.
44. C - Gen AI tự viết narrative cho dashboard.
45. D - Dashboard có thể kích hoạt workflow/writeback.
46. A - Storytelling tăng ghi nhớ/thuyết phục.
47. B - Slide nêu cao hơn 65%.
48. C - Là cầu nối IT/Data và Business.
49. D - Key metrics là chỉ số then chốt.
50. A - Agentic BI hướng đến analyst tự hành.
51. B - Không chỉ là trợ lý hỏi-đáp.
52. C - AI Agent có thể theo dõi mục tiêu kinh doanh.
53. D - Có thể lập kế hoạch phân tích.
54. A - Có thể truy vấn kho dữ liệu.
55. B - Có thể phát hiện xu hướng ẩn.
56. C - Có thể gửi báo cáo đề xuất chiến lược.
57. D - Giảm nhu cầu ra lệnh liên tục.
58. A - Agentic chủ động hơn Conversational BI.
59. B - Cần dữ liệu, metadata/ngữ nghĩa và truy vấn tin cậy.
60. C - Đây là chuỗi năng lực đúng theo slide.
