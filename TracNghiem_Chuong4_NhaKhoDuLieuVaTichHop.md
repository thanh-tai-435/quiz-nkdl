# Trắc nghiệm chương 4 - Tiền xử lý dữ liệu học thuật

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide4.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, và các điểm dễ ra câu hỏi phân biệt.

## Câu hỏi

### A. Chất lượng dữ liệu

**Câu 1.** Accuracy trong chất lượng dữ liệu mô tả điều gì?

A. Mức độ dữ liệu mô tả đúng thực thể/thực tế  
B. Tỷ lệ dữ liệu bị khuyết  
C. Độ trễ của dữ liệu  
D. Số lượng bản ghi trong bảng  

**Câu 2.** Completeness là gì?

A. Tỷ lệ dữ liệu không bị khuyết hoặc missing  
B. Sự đồng bộ định dạng giữa các nguồn  
C. Khả năng truy vấn theo thời gian thực  
D. Mức độ dữ liệu bị nhiễu  

**Câu 3.** Consistency trong chất lượng dữ liệu nhấn mạnh điều gì?

A. Sự đồng bộ logic và định dạng giữa các nguồn dữ liệu  
B. Dữ liệu luôn đến ngay lập tức  
C. Dữ liệu có nhiều bản ghi nhất  
D. Dữ liệu chỉ chứa số nguyên  

**Câu 4.** Timeliness liên quan trực tiếp đến yếu tố nào?

A. Độ trễ của dữ liệu  
B. Số lượng thuộc tính trong bảng  
C. Độ rộng của bin  
D. Số chiều trong PCA  

**Câu 5.** Nguyên lý quan trọng của chất lượng dữ liệu là gì?

A. Dữ liệu sai lệch sẽ tạo ra tri thức sai lệch  
B. Chỉ cần nhiều dữ liệu là đủ, chất lượng không quan trọng  
C. Dữ liệu thiếu luôn tốt cho mô hình định lượng  
D. Dữ liệu trễ không ảnh hưởng tín hiệu thị trường  

**Câu 6.** Cross-field Validation dùng để làm gì?

A. Kiểm tra quy tắc logic liên thuộc tính  
B. Tạo biểu đồ từ dữ liệu  
C. Nén dữ liệu bằng histogram  
D. Phân cụm dữ liệu bằng centroid  

**Câu 7.** Trong ví dụ chấm điểm tín dụng, thiếu thông tin hồ sơ là vấn đề thuộc chiều chất lượng nào?

A. Completeness  
B. Timeliness  
C. Clustering  
D. Decimal Scaling  

**Câu 8.** Trong ví dụ chấm điểm tín dụng, ngày tất toán nợ bị lệch định dạng là vấn đề thuộc chiều chất lượng nào?

A. Consistency  
B. Volume  
C. Entropy  
D. Concept Hierarchy  

### B. Noise, Outliers và tích hợp dữ liệu

**Câu 9.** Noise trong dữ liệu là gì?

A. Sai số ngẫu nhiên hoặc biến động không mong muốn làm ẩn tín hiệu thật  
B. Tập dữ liệu đã được làm sạch hoàn toàn  
C. Thuộc tính đã được rời rạc hóa  
D. Bản ghi đại diện centroid  

**Câu 10.** Binning trong xử lý noise có tác dụng gì?

A. Chia dữ liệu thành các khoảng và thay giá trị bằng đại diện của bin để làm mượt  
B. Tạo cây phân cấp khái niệm  
C. Trích xuất đặc trưng từ văn bản  
D. Tính Information Gain  

**Câu 11.** Regression trong xử lý noise được dùng để làm gì?

A. Khớp dữ liệu bằng hàm toán học và loại bỏ thành phần nhiễu  
B. Chỉ chia dữ liệu thành các nhóm nhãn  
C. Xóa toàn bộ outlier bằng tay  
D. Mã hóa dữ liệu thành vector embedding  

**Câu 12.** Theo phương pháp Z-Score, điểm dữ liệu thường được xem là outlier tiềm năng khi nào?

A. |Z| > 3  
B. |Z| = 0  
C. Z luôn nhỏ hơn 1  
D. Z bằng giá trị trung bình  

**Câu 13.** IQR được tính dựa trên những phân vị nào?

A. Q1 25% và Q3 75%  
B. Min và Max  
C. Mean và Mode  
D. Standard và Diamond  

**Câu 14.** Ngưỡng outlier theo IQR thường là gì?

A. Nhỏ hơn Q1 - 1.5 x IQR hoặc lớn hơn Q3 + 1.5 x IQR  
B. Nằm đúng giữa Q1 và Q3  
C. Bằng trung bình cộng của dữ liệu  
D. Luôn bằng 0  

**Câu 15.** Moving Average trong ví dụ giám sát gian lận thẻ được dùng để làm gì?

A. Làm mượt biến động chi tiêu nhỏ hằng ngày  
B. Tạo khóa định danh khách hàng  
C. Rời rạc hóa hạn mức tín dụng  
D. Xây dựng Concept Hierarchy  

**Câu 16.** Entity Resolution là gì?

A. Xác định các bản ghi từ nhiều nguồn cùng biểu diễn một thực thể  
B. Chuẩn hóa dữ liệu về khoảng [0,1]  
C. Tạo bin có độ rộng bằng nhau  
D. Trích xuất sentiment từ văn bản  

**Câu 17.** Metadata Resolution dùng để xử lý trường hợp nào?

A. Các thuộc tính khác tên nhưng cùng ý nghĩa  
B. Các bản ghi có Z-score quá lớn  
C. Các điểm dữ liệu cần thay bằng centroid  
D. Các dữ liệu cần chia thành Gold/Silver  

**Câu 18.** Độ đo Jaccard dùng để làm gì?

A. So sánh mức độ trùng lặp giữa hai tập hợp  
B. Chuẩn hóa dữ liệu theo độ lệch chuẩn  
C. Tính trung bình động  
D. Xác định số chữ số decimal scaling  

**Câu 19.** Công thức Jaccard giữa hai tập A và B là gì?

A. |A giao B| / |A hợp B|  
B. |A hợp B| / |A giao B|  
C. Mean / Standard Deviation  
D. Max - Min  

**Câu 20.** Deduplication nhằm mục tiêu gì?

A. Loại bỏ bản ghi trùng lặp sau tích hợp để tạo Golden Record  
B. Làm tăng số lượng bản ghi trùng  
C. Tạo nhiễu cho dữ liệu  
D. Xóa toàn bộ dữ liệu mới  

**Câu 21.** Conflict Handling trong tích hợp dữ liệu xử lý vấn đề nào?

A. Hai nguồn cung cấp giá trị khác nhau cho cùng một trường  
B. Dữ liệu đã được chuẩn hóa hoàn toàn  
C. Không có bản ghi nào trùng nhau  
D. Mọi nguồn đều có cùng định dạng  

**Câu 22.** Fuzzy Matching phù hợp với tình huống nào?

A. Xác định trùng khớp thực thể khi thông tin không hoàn toàn giống nhau  
B. Chia dải giá trị thành N khoảng bằng nhau  
C. Tính Z-score cho dữ liệu ngoại lai  
D. Chọn đặc trưng bằng Information Gain  

### C. Transformation, Smoothing và Aggregation

**Câu 23.** Simple Moving Average (SMA) là gì?

A. Trung bình của dữ liệu trong một cửa sổ trượt  
B. Phân phối tần suất thay cho dữ liệu chi tiết  
C. Tập hợp các vector riêng lớn nhất  
D. Tỷ lệ dữ liệu không bị khuyết  

**Câu 24.** Trong SMA, tham số k thường biểu thị điều gì?

A. Kích thước cửa sổ, số giá trị gần nhất được lấy để tính trung bình  
B. Số chiều của PCA  
C. Số nhóm equal-width binning  
D. Số bản ghi bị trùng lặp  

**Câu 25.** Với dữ liệu 80, 86, 82 và k = 3, SMA ngày 3 bằng bao nhiêu?

A. 82.7  
B. 84.0  
C. 84.7  
D. 80.0  

**Câu 26.** Data Aggregation là gì?

A. Kết hợp bản ghi chi tiết thành tóm tắt cấp cao  
B. Xóa dữ liệu bị thiếu  
C. Tách văn bản thành embedding  
D. Ghi dữ liệu thô vào Bronze  

**Câu 27.** Data Cubes trong OLAP hỗ trợ điều gì?

A. Phân tích dữ liệu theo nhiều chiều và nhiều mức tổng hợp  
B. Chỉ phát hiện outlier bằng Z-score  
C. Chỉ chuẩn hóa dữ liệu về [0,1]  
D. Chỉ xử lý văn bản phi cấu trúc  

**Câu 28.** Granularity trong aggregation là gì?

A. Mức độ chi tiết/tổng hợp được lựa chọn cho dữ liệu  
B. Mức độ nhiễu của bản ghi  
C. Độ lệch chuẩn của biến  
D. Số lần chạy thuật toán PCA  

**Câu 29.** Golden Cross trong ví dụ phân tích kỹ thuật thường liên quan đến gì?

A. Sử dụng các đường Moving Average như MA-50 và MA-200  
B. Loại bỏ missing value bằng imputation  
C. Tính Jaccard giữa hai tập kỹ năng  
D. Xây dựng Gold Layer trong Lakehouse  

**Câu 30.** Candlesticks theo khung 1 giờ là ví dụ của kỹ thuật nào?

A. Aggregation dữ liệu giao dịch chi tiết  
B. Entity Resolution  
C. Decimal Scaling  
D. Feature Selection  

### D. Data Reduction và Numerosity

**Câu 31.** Dimensionality Reduction nhằm mục tiêu gì?

A. Loại bỏ thuộc tính dư thừa/không tương quan để giảm độ phức tạp  
B. Tăng số lượng thuộc tính càng nhiều càng tốt  
C. Chỉ thêm nhiễu vào dữ liệu  
D. Xóa dữ liệu thô khỏi hệ thống  

**Câu 32.** PCA là viết tắt của gì?

A. Principal Component Analysis  
B. Predictive Customer Aggregation  
C. Primary Cluster Assignment  
D. Parallel Concept Architecture  

**Câu 33.** Thành phần chính trong PCA liên quan đến yếu tố nào?

A. Vector riêng ứng với trị riêng lớn nhất của covariance matrix  
B. Bản ghi bị thiếu trong bảng  
C. Các nhãn Standard, Silver, Gold  
D. Các key-value trong JSON  

**Câu 34.** PCA giúp giải quyết vấn đề nào?

A. Curse of Dimensionality  
B. Schema Drift  
C. Hard Delete  
D. Golden Record Conflict  

**Câu 35.** Numerosity Reduction nghĩa là gì?

A. Giảm số lượng dữ liệu biểu diễn nhưng vẫn giữ thông tin quan trọng  
B. Tăng bản ghi trùng lặp  
C. Chỉ đổi tên cột  
D. Loại bỏ mọi thuộc tính phân loại  

**Câu 36.** Regression Models trong Numerosity Reduction thay thế dữ liệu lớn bằng gì?

A. Các tham số của một mô hình toán học đơn giản  
B. Các nhãn định danh Standard/Silver  
C. Các bản sao dữ liệu thô  
D. Các cột bị missing  

**Câu 37.** Sampling trong giảm số lượng dữ liệu dùng để làm gì?

A. Chọn tập đại diện để khai phá trên dữ liệu Big Data  
B. Chia thuộc tính liên tục thành khoảng  
C. Tính Z-score cho từng điểm  
D. Gộp thực thể bằng Jaccard  

**Câu 38.** Stratified Sampling có ý nghĩa gì?

A. Lấy mẫu phân tầng để giữ tính đại diện của các nhóm  
B. Lấy ngẫu nhiên duy nhất một bản ghi  
C. Chỉ chọn các outlier lớn nhất  
D. Chỉ chọn dữ liệu bị thiếu  

**Câu 39.** Histogram trong Numerosity Reduction đại diện dữ liệu bằng gì?

A. Phân phối tần suất  
B. Vector embedding  
C. Golden Record  
D. Concept Hierarchy  

**Câu 40.** Clustering trong Numerosity Reduction thay thế nhóm điểm tương đồng bằng gì?

A. Giá trị centroid đại diện  
B. Giá trị missing  
C. Mã vùng chi nhánh  
D. Cột schema mới  

### E. Discretization và Concept Hierarchy

**Câu 41.** Discretization là gì?

A. Chia thuộc tính liên tục thành các khoảng hoặc nhãn định danh  
B. Chuẩn hóa dữ liệu về trung bình 0  
C. Tìm bản ghi trùng lặp  
D. Tạo vector embedding từ văn bản  

**Câu 42.** Equal-width Binning chia dữ liệu như thế nào?

A. Chia dải giá trị thành N khoảng có độ rộng bằng nhau  
B. Chia mỗi bin có số bản ghi bằng nhau  
C. Chia theo entropy thấp nhất  
D. Chia theo sentiment của văn bản  

**Câu 43.** Equal-frequency Binning phù hợp với loại dữ liệu nào?

A. Dữ liệu lệch (skewed) vì mỗi bin có số bản ghi bằng nhau  
B. Dữ liệu luôn phân phối đều tuyệt đối  
C. Dữ liệu chỉ có một giá trị  
D. Dữ liệu không có bản ghi  

**Câu 44.** Với min = 10, max = 70, N = 3, độ rộng bin bằng bao nhiêu?

A. 20  
B. 30  
C. 60  
D. 10  

**Câu 45.** Concept Hierarchy là gì?

A. Tổ chức thuộc tính theo tầng bậc từ cụ thể đến tổng quát  
B. Chỉ lưu dữ liệu ở dạng vector  
C. Xóa mọi cấp độ tổng hợp  
D. Tạo bản ghi trùng lặp  

**Câu 46.** Multi-level Mining cho phép điều gì?

A. Khai phá luật kết hợp ở nhiều mức trừu tượng khác nhau  
B. Chỉ khai phá duy nhất ở mức bản ghi chi tiết  
C. Chỉ chuẩn hóa dữ liệu bằng Min-Max  
D. Chỉ phát hiện outlier bằng IQR  

**Câu 47.** Drill-down dữ liệu giúp người dùng làm gì?

A. Tìm nguyên nhân gốc rễ của vấn đề  
B. Xóa sạch dữ liệu lịch sử  
C. Tăng nhiễu cho mô hình  
D. Tự động tạo missing values  

**Câu 48.** Chuyển số dư tài khoản thành nhóm Standard, Silver, Gold, Diamond là ví dụ của gì?

A. Rời rạc hóa  
B. Entity Resolution  
C. Z-score Normalization  
D. Regression Smoothing  

### F. Normalization

**Câu 49.** Min-Max Normalization thường ánh xạ dữ liệu về khoảng nào?

A. Một khoảng cố định, thường là [0,1]  
B. Luôn về khoảng [-100,100]  
C. Luôn về giá trị trung bình ban đầu  
D. Luôn về số nguyên âm  

**Câu 50.** Với min = 10, max = 110, giá trị 60 chuẩn hóa Min-Max về [0,1] bằng bao nhiêu?

A. 0.5  
B. 0.6  
C. 0.4  
D. 1.0  

**Câu 51.** Decimal Scaling chuẩn hóa bằng cách nào?

A. Di chuyển phần thập phân dựa trên giá trị tuyệt đối lớn nhất  
B. Trừ trung bình và chia độ lệch chuẩn  
C. Chia dữ liệu thành các bin bằng nhau  
D. Dùng Jaccard để so sánh tập hợp  

**Câu 52.** Z-Score Normalization dựa trên yếu tố nào?

A. Trung bình và độ lệch chuẩn  
B. Min và Max duy nhất  
C. Q1 và Q3 duy nhất  
D. Số lượng nhóm phân khúc  

**Câu 53.** Ưu điểm của Z-Score Normalization là gì?

A. Hiệu quả khi có nhiều ngoại lai hoặc không biết trước Min/Max  
B. Chỉ dùng được khi dữ liệu không có outlier  
C. Không phù hợp với thuật toán dựa trên khoảng cách  
D. Luôn làm mất mọi thông tin thống kê  

**Câu 54.** Vì sao chuẩn hóa quan trọng với thuật toán dựa trên khoảng cách?

A. Tránh biến có thang đo lớn lấn át biến khác  
B. Tăng số lượng bản ghi missing  
C. Bắt buộc tạo dữ liệu trùng lặp  
D. Loại bỏ toàn bộ biến nhỏ  

### G. Feature Engineering và Mining tri thức

**Câu 55.** Feature Construction là gì?

A. Tạo thuộc tính mới từ thuộc tính cũ để làm nổi bật tín hiệu nghiệp vụ  
B. Xóa mọi thuộc tính có ý nghĩa  
C. Chỉ chuyển dữ liệu thành file PDF  
D. Chỉ tìm bản ghi trùng lặp  

**Câu 56.** Feature Selection dùng để làm gì?

A. Giữ lại các thuộc tính có sức mạnh phân loại tốt nhất  
B. Tăng toàn bộ thuộc tính bất kể nhiễu  
C. Chỉ chuẩn hóa dữ liệu về [0,1]  
D. Chỉ làm mượt chuỗi thời gian  

**Câu 57.** Information Gain thường được dùng trong bối cảnh nào?

A. Lựa chọn thuộc tính có khả năng phân loại tốt  
B. Tính Moving Average  
C. Tạo Golden Record  
D. Chuyển số dư thành nhóm khách hàng  

**Câu 58.** Entropy đo điều gì trong khai phá dữ liệu?

A. Mức độ hỗn loạn/không thuần nhất của dữ liệu  
B. Độ rộng của một bin  
C. Độ trễ của dữ liệu  
D. Số lượng centroid  

**Câu 59.** AI-based Extraction trong Feature Engineering dùng để làm gì?

A. Trích xuất đặc trưng từ dữ liệu phi cấu trúc bằng mô hình AI/ngôn ngữ  
B. Chỉ phát hiện hard delete  
C. Chỉ tính Z-score của số liệu  
D. Chỉ nhóm chi nhánh theo khu vực  

**Câu 60.** Embeddings trong Feature Engineering có vai trò gì?

A. Chuyển thực thể rời rạc thành vector đa chiều để tính độ tương đồng  
B. Chia dữ liệu thành các bin bằng nhau  
C. Tạo bản ghi trùng lặp  
D. Xác định độ trễ của dữ liệu  

## Đáp án và giải thích ngắn

1. A - Accuracy đo dữ liệu có phản ánh đúng thực thể hay không.
2. A - Completeness nói về mức đầy đủ, không thiếu/null.
3. A - Consistency là nhất quán logic và định dạng giữa nguồn.
4. A - Timeliness là độ kịp thời/độ trễ dữ liệu.
5. A - Dữ liệu sai dẫn đến tri thức và quyết định sai.
6. A - Cross-field Validation kiểm tra quy tắc giữa các trường.
7. A - Thiếu thông tin là vấn đề Completeness.
8. A - Lệch định dạng giữa nguồn là Consistency.
9. A - Noise là biến động ngẫu nhiên che tín hiệu thật.
10. A - Binning làm mượt bằng đại diện trong khoảng.
11. A - Regression khớp xu hướng toán học để loại nhiễu.
12. A - Ngưỡng phổ biến là |Z| > 3.
13. A - IQR = Q3 - Q1, dựa trên 75% và 25%.
14. A - Ngoài Q1 - 1.5IQR hoặc Q3 + 1.5IQR là outlier.
15. A - Moving Average làm mượt biến động nhỏ.
16. A - Entity Resolution hợp nhất nhận diện cùng thực thể.
17. A - Metadata Resolution ánh xạ thuộc tính khác tên cùng nghĩa.
18. A - Jaccard đo độ trùng lặp tập hợp.
19. A - Jaccard = giao / hợp.
20. A - Deduplication tạo hồ sơ duy nhất/Golden Record.
21. A - Conflict Handling xử lý giá trị mâu thuẫn giữa nguồn.
22. A - Fuzzy Matching dùng khi thông tin gần giống nhưng không khớp tuyệt đối.
23. A - SMA là trung bình trong cửa sổ trượt.
24. A - k là số quan sát gần nhất trong cửa sổ.
25. A - (80 + 86 + 82) / 3 = 82.7.
26. A - Aggregation biến chi tiết thành tổng hợp.
27. A - Data Cubes hỗ trợ phân tích đa chiều.
28. A - Granularity là mức độ chi tiết/tổng hợp.
29. A - Golden Cross liên quan đến giao cắt các đường MA.
30. A - Candlesticks là tổng hợp tick data theo khung thời gian.
31. A - Dimensionality Reduction giảm số thuộc tính dư thừa.
32. A - PCA là Principal Component Analysis.
33. A - PCA chọn hướng/vector riêng có trị riêng lớn.
34. A - PCA giảm Curse of Dimensionality.
35. A - Numerosity Reduction giảm số lượng biểu diễn dữ liệu.
36. A - Regression Models thay dữ liệu bằng tham số mô hình.
37. A - Sampling chọn mẫu đại diện.
38. A - Stratified Sampling giữ đại diện theo tầng/nhóm.
39. A - Histogram dùng phân phối tần suất.
40. A - Clustering đại diện nhóm bằng centroid.
41. A - Discretization biến liên tục thành khoảng/nhãn.
42. A - Equal-width chia khoảng có độ rộng bằng nhau.
43. A - Equal-frequency tốt cho dữ liệu lệch.
44. A - Width = (70 - 10) / 3 = 20.
45. A - Concept Hierarchy tổ chức từ cụ thể đến tổng quát.
46. A - Multi-level Mining khai phá ở nhiều mức.
47. A - Drill-down giúp tìm nguyên nhân gốc.
48. A - Chuyển số dư thành nhóm là rời rạc hóa.
49. A - Min-Max thường đưa về [0,1].
50. A - (60 - 10) / (110 - 10) = 0.5.
51. A - Decimal Scaling dịch dấu thập phân theo max tuyệt đối.
52. A - Z-score dùng mean và standard deviation.
53. A - Z-score hữu ích khi có outlier hoặc không rõ min/max.
54. A - Chuẩn hóa tránh thang đo lớn chi phối khoảng cách.
55. A - Feature Construction tạo thuộc tính mới có ý nghĩa.
56. A - Feature Selection giữ đặc trưng mạnh, bỏ nhiễu.
57. A - Information Gain hỗ trợ chọn thuộc tính phân loại tốt.
58. A - Entropy đo sự hỗn loạn/không thuần nhất.
59. A - AI-based Extraction lấy feature từ dữ liệu phi cấu trúc.
60. A - Embeddings biểu diễn thực thể thành vector để so sánh ngữ nghĩa/tương đồng.
