# Trắc nghiệm chương 5 - Thuật toán Khai thác dữ liệu cốt lõi

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide5.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, công thức dễ ra thi và các điểm phân biệt thuật toán.

## Câu hỏi

### A. Association Rules: Support, Confidence và Lift

**Câu 1.** Association Rule dùng để làm gì?

A. Phát hiện mối quan hệ thống kê hoặc mẫu ẩn giữa các item/sự kiện  
B. Chỉ chuẩn hóa dữ liệu về khoảng [0,1]  
C. Chỉ phân cụm dữ liệu theo mật độ  
D. Chỉ phát hiện điểm ngoại lai  

**Câu 2.** Một luật kết hợp thường có dạng nào?

A. X ⇒ Y  
B. X + Y = 0  
C. X / Y = Z-score  
D. X < Y < Z  

**Câu 3.** Trong luật X ⇒ Y, X được gọi là gì?

A. Antecedent hoặc tiền đề  
B. Consequent hoặc hậu đề  
C. Outlier  
D. Centroid  

**Câu 4.** Trong luật X ⇒ Y, Y được gọi là gì?

A. Consequent hoặc hậu đề  
B. Antecedent hoặc tiền đề  
C. Support count  
D. FP-tree  

**Câu 5.** Support của luật X ⇒ Y đo điều gì?

A. Tần suất xuất hiện đồng thời của X và Y trong toàn bộ giao dịch  
B. Xác suất Y xảy ra khi X đã xảy ra  
C. Mức độ phụ thuộc so với xác suất Y ngẫu nhiên  
D. Số cụm cần dùng trong DBSCAN  

**Câu 6.** Công thức Support của luật X ⇒ Y là gì?

A. Số giao dịch chứa cả X và Y / Tổng số giao dịch  
B. Sup(X ∩ Y) / Sup(X)  
C. Conf(X ⇒ Y) / P(Y)  
D. P(X) / P(Y)  

**Câu 7.** Confidence của luật X ⇒ Y đo điều gì?

A. Xác suất hậu đề Y xảy ra khi tiền đề X xảy ra  
B. Tần suất X và Y cùng xuất hiện trên toàn bộ dữ liệu  
C. Số lần thuật toán quét CSDL  
D. Độ rộng của bán kính Eps  

**Câu 8.** Công thức Confidence của X ⇒ Y là gì?

A. Sup(X ∩ Y) / Sup(X)  
B. Sup(X ∩ Y) / Tổng giao dịch  
C. Conf(X ⇒ Y) / P(Y)  
D. P(X) x P(Y)  

**Câu 9.** Lift của luật X ⇒ Y phản ánh điều gì?

A. Khả năng Y xảy ra khi X xảy ra so với xác suất Y xảy ra ngẫu nhiên  
B. Số lượng giao dịch chứa X  
C. Độ sâu của cây quyết định  
D. Số cụm trong K-Means  

**Câu 10.** Công thức Lift thường dùng là gì?

A. Conf(X ⇒ Y) / P(Y)  
B. Sup(X ∩ Y) / Sup(X)  
C. Số giao dịch chứa X / Tổng giao dịch  
D. P(Y) / Conf(X ⇒ Y)  

**Câu 11.** Nếu Lift > 1 thì diễn giải đúng là gì?

A. X làm tăng khả năng xảy ra Y, quan hệ tích cực  
B. X và Y độc lập hoàn toàn  
C. X làm giảm khả năng xảy ra Y  
D. Luật luôn bị loại bỏ  

**Câu 12.** Nếu Lift = 1 thì diễn giải đúng là gì?

A. X và Y độc lập, không có tác động lẫn nhau  
B. X làm tăng mạnh Y  
C. X làm giảm mạnh Y  
D. Confidence luôn bằng 0  

**Câu 13.** Nếu Lift < 1 thì diễn giải đúng là gì?

A. X làm giảm khả năng xảy ra Y, quan hệ tiêu cực  
B. X làm tăng khả năng xảy ra Y  
C. X và Y chắc chắn luôn đi cùng nhau  
D. Luật có Confidence bằng 100%  

**Câu 14.** Với 1000 giao dịch, 262 giao dịch chứa cả X và Y, Support bằng bao nhiêu?

A. 0.262  
B. 0.926  
C. 1.52  
D. 0.61  

**Câu 15.** Với count(X) = 283 và count(X ∩ Y) = 262, Confidence của X ⇒ Y xấp xỉ bao nhiêu?

A. 0.926  
B. 0.262  
C. 0.610  
D. 1.520  

**Câu 16.** Với Confidence = 0.926 và P(Y) = 0.61, Lift xấp xỉ bao nhiêu?

A. 1.52  
B. 0.61  
C. 0.262  
D. 0.75  

**Câu 17.** Trong ví dụ cd → e, Confidence = count({c,d,e}) / count({c,d}) = 3/4. Giá trị này bằng bao nhiêu?

A. 0.75  
B. 0.375  
C. 1.5  
D. 0.5  

**Câu 18.** Nếu Support của luật thấp hơn minsup thì thường xử lý thế nào?

A. Loại bỏ luật vì quá hiếm  
B. Luôn giữ lại vì luật càng hiếm càng tốt  
C. Tăng Confidence lên 100% tự động  
D. Chuyển luật thành cụm DBSCAN  

### B. Apriori và Frequent Itemset

**Câu 19.** Frequent Itemset là gì?

A. Tập item thường xuyên xuất hiện cùng nhau trong dữ liệu  
B. Điểm dữ liệu nằm xa các điểm khác  
C. Tâm cụm ảo của K-Means  
D. Thuộc tính được chọn bởi Gain Ratio  

**Câu 20.** Minimum Support dùng để làm gì?

A. Lọc bỏ các itemset xuất hiện quá ít  
B. Chọn bán kính lân cận cho DBSCAN  
C. Chọn thuộc tính trong C4.5  
D. Tính xác suất hậu nghiệm trong Bayes  

**Câu 21.** Một itemset được coi là frequent nếu điều kiện nào đúng?

A. support ≥ minsup  
B. support < minsup  
C. Lift = 1 luôn luôn  
D. Confidence = 0  

**Câu 22.** Trong 10.000 hợp đồng, 2.000 hợp đồng có cả hai loại bảo hiểm. Support bằng bao nhiêu?

A. 20%  
B. 2%  
C. 80%  
D. 200%  

**Câu 23.** Nếu I có 5 item, số tập con không rỗng có thể có là bao nhiêu?

A. 31  
B. 25  
C. 10  
D. 5  

**Câu 24.** Itemset kích thước k nghĩa là gì?

A. Itemset chứa k item  
B. Itemset xuất hiện k lần đúng bằng  
C. Itemset có Confidence bằng k  
D. Itemset có Lift bằng k  

**Câu 25.** Support count của một itemset X là gì?

A. Số giao dịch chứa X  
B. Số thuộc tính trong X chia cho tổng item  
C. Xác suất Y khi X xảy ra  
D. Độ sâu của FP-tree  

**Câu 26.** Bài toán khai thác tập phổ biến yêu cầu liệt kê những itemset nào?

A. Các itemset có support lớn hơn hoặc bằng minsup  
B. Các itemset có support thấp hơn minsup  
C. Chỉ các itemset có đúng 1 item  
D. Chỉ các itemset có Lift = 1  

**Câu 27.** Tính chất Apriori 1 phát biểu điều gì?

A. Nếu X ⊆ Y thì support(Y) ≤ support(X)  
B. Nếu X ⊆ Y thì support(Y) luôn lớn hơn support(X)  
C. Support không liên quan đến quan hệ tập con  
D. Mọi itemset đều có support bằng nhau  

**Câu 28.** Tính chất Apriori 2 phát biểu điều gì?

A. Nếu một tập con của Y không phổ biến thì Y cũng không phổ biến  
B. Nếu một tập con không phổ biến thì Y chắc chắn phổ biến  
C. Mọi tập cha của itemset không phổ biến đều phổ biến  
D. Không thể loại bỏ ứng viên bằng tập con  

**Câu 29.** Mục đích chính của Apriori là gì?

A. Tìm tất cả itemset phổ biến từ CSDL giao dịch  
B. Phân loại dữ liệu bằng Gain Ratio  
C. Phân cụm dữ liệu bằng medoid  
D. Phát hiện outlier bằng Gaussian  

**Câu 30.** Input chính của thuật toán Apriori gồm gì?

A. minsup và cơ sở dữ liệu giao dịch  
B. Eps và MinPts  
C. Mean và Mode  
D. Gain Ratio và Null Weight  

**Câu 31.** Output chính của Apriori là gì?

A. Tất cả itemset phổ biến  
B. Dendrogram  
C. Các điểm Core/Border/Noise  
D. Cây Naive Bayes Network  

**Câu 32.** Trong Apriori, bước tạo ứng viên kích thước 2 thường dựa trên gì?

A. Kết hợp các itemset phổ biến kích thước 1  
B. Chọn ngẫu nhiên mọi outlier  
C. Dùng Gain Ratio  
D. Dùng Eps và MinPts  

**Câu 33.** Vì sao Apriori có thể tốn kém?

A. Tạo nhiều ứng viên và phải quét CSDL nhiều lần  
B. Chỉ cần duyệt CSDL 2 lần  
C. Không sinh ứng viên  
D. Nén dữ liệu bằng FP-tree  

### C. FP-Growth

**Câu 34.** FP-Growth khắc phục hạn chế chính nào của Apriori?

A. Giảm số lần quét CSDL và tránh sinh quá nhiều ứng viên  
B. Không thể tìm frequent itemset  
C. Bắt buộc dùng Gain Ratio  
D. Chỉ dùng cho phân cụm mật độ  

**Câu 35.** FP-Growth thường chỉ cần duyệt CSDL bao nhiêu lần để xây dựng dữ liệu nén?

A. 2 lần  
B. 10 lần  
C. 1 lần cho mỗi itemset ứng viên  
D. Không cần duyệt lần nào  

**Câu 36.** FP-tree là gì?

A. Cấu trúc cây nén lưu item và quan hệ giữa các item trong CSDL giao dịch  
B. Cây quyết định dùng Gain Ratio  
C. Cây phân cấp concept hierarchy  
D. Cây dùng để phát hiện outlier thống kê  

**Câu 37.** Trong FP-Growth, các item thường được sắp theo thứ tự nào trước khi đưa vào FP-tree?

A. Giảm dần theo support count  
B. Tăng dần theo alphabet bắt buộc  
C. Ngẫu nhiên mỗi lần chạy  
D. Theo kích thước chuỗi ký tự  

**Câu 38.** Với minsupportcount = 3 trong ví dụ FP-Growth, các item đơn lẻ giữ lại là gì?

A. F, C, A, B, M, P  
B. D, G, I, H, J, K  
C. E, N, S, D, G, I  
D. Tất cả item đều giữ lại  

**Câu 39.** Bước nào thuộc quy trình FP-Growth?

A. Xây dựng FP-tree, tạo Conditional Pattern Base, tính count và lọc theo minsup  
B. Chọn Eps và MinPts rồi tìm Core  
C. Tính Information Gain và post-pruning  
D. Giả định Gaussian rồi tìm tail probability  

**Câu 40.** Conditional Pattern Base trong FP-Growth dùng để làm gì?

A. Khai thác các mẫu điều kiện liên quan đến item đang xét  
B. Chọn bán kính lân cận  
C. Tạo trọng số xác suất cho giá trị Null  
D. Chọn medoid thật  

**Câu 41.** Lý do FP-Growth tiết kiệm bộ nhớ hơn Apriori là gì?

A. Dữ liệu được nén trong FP-tree, số nút ít hơn nhiều so với giao dịch ban đầu  
B. Nó lưu mọi ứng viên có thể trong bảng phẳng  
C. Nó không dùng bất kỳ cấu trúc dữ liệu nào  
D. Nó chỉ chạy trên dữ liệu có 1 giao dịch  

### D. Classification: ID3, C4.5 và Bayes

**Câu 42.** ID3 chọn thuộc tính phân chia bằng tiêu chí nào?

A. Information Gain  
B. Gain Ratio  
C. Eps  
D. Lift  

**Câu 43.** C4.5 chọn thuộc tính phân chia bằng tiêu chí nào?

A. Gain Ratio  
B. Information Gain tuyệt đối như ID3  
C. Support count  
D. MinPts  

**Câu 44.** ID3 hỗ trợ loại dữ liệu nào theo slide?

A. Chỉ dữ liệu rời rạc/categorical  
B. Cả rời rạc và liên tục  
C. Chỉ dữ liệu ảnh  
D. Chỉ dữ liệu outlier  

**Câu 45.** C4.5 có ưu điểm nào so với ID3?

A. Hỗ trợ dữ liệu liên tục, xử lý Null bằng trọng số xác suất và có post-pruning  
B. Không hỗ trợ Null  
C. Không có cơ chế cắt tỉa  
D. Chỉ dùng dữ liệu categorical  

**Câu 46.** ID3 dễ gặp vấn đề nào hơn C4.5?

A. Overfitting do cây sâu và không có cơ chế cắt tỉa  
B. Không chọn được thuộc tính categorical  
C. Không tính được Information Gain  
D. Không tạo được cây quyết định  

**Câu 47.** Naive Bayes phân loại đối tượng dựa trên gì?

A. Xác suất đối tượng thuộc từng nhóm dựa trên các đặc trưng  
B. Khoảng cách đến medoid thật  
C. Bán kính Eps  
D. Support của itemset  

**Câu 48.** Giả định “Naive” trong Naive Bayes là gì?

A. Các thuộc tính độc lập hoàn toàn với nhau khi biết nhãn lớp  
B. Mọi thuộc tính phụ thuộc hoàn toàn theo cây  
C. Dữ liệu không cần nhãn lớp  
D. Các điểm dữ liệu luôn nằm trong một cụm  

**Câu 49.** Naive Bayes Network giúp gì?

A. Mô hình hóa quan hệ phụ thuộc giữa nhiều biến, khắc phục nhược điểm độc lập naive  
B. Ép mọi biến độc lập tuyệt đối hơn  
C. Tạo FP-tree cho itemset  
D. Chọn số cụm K tự động  

### E. Clustering

**Câu 50.** K-Means dùng loại tâm cụm nào?

A. Mean, trọng tâm ảo  
B. Medoid, điểm thật  
C. Core point  
D. Border point  

**Câu 51.** K-Medoids dùng loại tâm cụm nào?

A. Medoid, một điểm dữ liệu thật  
B. Mean, trọng tâm ảo  
C. Gain Ratio  
D. FP-tree node  

**Câu 52.** K-Means có nhược điểm chính nào?

A. Nhạy cảm với nhiễu/outliers  
B. Không chạy được với dữ liệu lớn  
C. Luôn chậm hơn K-Medoids  
D. Chỉ dùng cho mọi loại dữ liệu  

**Câu 53.** K-Medoids có ưu điểm nào so với K-Means?

A. Chống nhiễu tốt hơn  
B. Luôn nhanh hơn trên dữ liệu lớn  
C. Chỉ dùng cho dữ liệu numerical  
D. Không dùng điểm thật  

**Câu 54.** K-Modes là biến thể phù hợp cho loại dữ liệu nào?

A. Dữ liệu phân loại, thay mean bằng mode  
B. Dữ liệu chỉ có outlier  
C. Dữ liệu transaction dùng support  
D. Dữ liệu Bayesian Network  

**Câu 55.** K-Prototypes phù hợp với loại dữ liệu nào?

A. Dữ liệu hỗn hợp, kết hợp K-Means và K-Modes  
B. Chỉ dữ liệu văn bản  
C. Chỉ dữ liệu missing  
D. Chỉ dữ liệu hình ảnh  

**Câu 56.** DBSCAN định nghĩa cụm theo nguyên lý nào?

A. Vùng có mật độ điểm dày đặc, ngăn cách bởi vùng mật độ thấp  
B. Luôn chọn trước số cụm K  
C. Luôn dùng mean làm tâm cụm  
D. Luôn xây dựng dendrogram  

**Câu 57.** Hai tham số quyết định trong DBSCAN là gì?

A. Eps và MinPts  
B. Support và Confidence  
C. Information Gain và Gain Ratio  
D. Mean và Mode  

**Câu 58.** Điểm Core trong DBSCAN là gì?

A. Điểm có ít nhất MinPts điểm trong bán kính Eps  
B. Điểm nằm trong Eps của Core nhưng không đủ MinPts  
C. Điểm không thuộc cụm nào  
D. Điểm có Lift > 1  

**Câu 59.** Hierarchical Clustering có đặc điểm nào?

A. Xây dựng dendrogram bằng cách gộp dần hoặc chia dần cụm  
B. Chia không gian thành ô lưới để xử lý cực nhanh  
C. Không có cấu trúc tầng bậc  
D. Chỉ dùng Eps và MinPts  

**Câu 60.** Outlier Detection distance-based xác định outlier như thế nào?

A. Đối tượng nằm cách xa hầu hết các điểm dữ liệu khác  
B. Điểm có xác suất cao nhất trong phân phối  
C. Itemset có support cao hơn minsup  
D. Thuộc tính có Gain Ratio cao nhất  

## Đáp án và giải thích ngắn

1. A - Luật kết hợp tìm quan hệ/mẫu ẩn giữa các item.
2. A - Association rule có dạng X ⇒ Y.
3. A - X là tiền đề, còn gọi là Antecedent.
4. A - Y là hậu đề, còn gọi là Consequent.
5. A - Support đo độ phổ biến của X và Y cùng xuất hiện.
6. A - Support = count(X ∩ Y) / tổng giao dịch.
7. A - Confidence đo khả năng Y xảy ra khi X xảy ra.
8. A - Confidence = Sup(X ∩ Y) / Sup(X).
9. A - Lift so sánh xác suất có điều kiện với xác suất nền của Y.
10. A - Lift = Confidence / P(Y).
11. A - Lift > 1 là quan hệ tích cực.
12. A - Lift = 1 biểu thị độc lập.
13. A - Lift < 1 là quan hệ tiêu cực.
14. A - 262 / 1000 = 0.262.
15. A - 262 / 283 ≈ 0.926.
16. A - 0.926 / 0.61 ≈ 1.52.
17. A - 3/4 = 0.75.
18. A - Dưới minsup thì luật/itemset quá hiếm.
19. A - Frequent itemset xuất hiện thường xuyên cùng nhau.
20. A - Minimum Support lọc itemset ít xuất hiện.
21. A - Frequent nếu support ≥ minsup.
22. A - 2000 / 10000 = 20%.
23. A - 2^5 - 1 = 31.
24. A - Kích thước k nghĩa là có k item.
25. A - Support count là số giao dịch chứa itemset.
26. A - Khai thác tập phổ biến liệt kê itemset đạt minsup.
27. A - Support giảm hoặc giữ nguyên khi mở rộng tập item.
28. A - Tập con không phổ biến thì tập cha cũng không phổ biến.
29. A - Apriori tìm frequent itemsets.
30. A - Apriori cần minsup và transaction database.
31. A - Output là các itemset phổ biến.
32. A - Ứng viên size 2 sinh từ frequent 1-itemsets.
33. A - Apriori tốn vì sinh nhiều ứng viên và quét nhiều lần.
34. A - FP-Growth giảm quét CSDL và không sinh ứng viên khổng lồ.
35. A - FP-Growth thường duyệt CSDL 2 lần.
36. A - FP-tree là cây nén giao dịch.
37. A - Item được sắp giảm dần theo support count.
38. A - Với minsupportcount = 3, giữ F, C, A, B, M, P.
39. A - Đây là các bước chính của FP-Growth.
40. A - Conditional Pattern Base dùng khai thác mẫu điều kiện.
41. A - FP-tree nén dữ liệu nên tiết kiệm bộ nhớ.
42. A - ID3 dùng Information Gain.
43. A - C4.5 dùng Gain Ratio.
44. A - ID3 chỉ hỗ trợ categorical trong bảng so sánh.
45. A - C4.5 xử lý tốt hơn: numeric, null, post-pruning.
46. A - ID3 dễ overfit vì cây sâu và không pruning.
47. A - Naive Bayes chọn lớp có xác suất cao nhất.
48. A - Giả định naive là độc lập có điều kiện theo lớp.
49. A - Bayesian Network mô hình hóa phụ thuộc giữa biến.
50. A - K-Means dùng mean làm tâm ảo.
51. A - K-Medoids dùng medoid là điểm thật.
52. A - K-Means nhạy cảm với outlier.
53. A - K-Medoids chống nhiễu tốt hơn.
54. A - K-Modes dùng cho categorical data.
55. A - K-Prototypes dùng cho dữ liệu hỗn hợp.
56. A - DBSCAN dựa trên mật độ.
57. A - DBSCAN dùng Eps và MinPts.
58. A - Core có ít nhất MinPts trong Eps.
59. A - Hierarchical tạo dendrogram theo gộp/chia cụm.
60. A - Distance-based outlier nằm xa phần lớn điểm khác.
