# Trắc nghiệm chương 5 - Thuật toán Khai thác dữ liệu cốt lõi

Nguồn: `Slides/NhaKhoDuLieuVaTichHop_Slide5.pdf`.

Trọng tâm: các khái niệm quan trọng, các ý được nhấn mạnh màu xanh dương/gạch chân trong slide, công thức dễ ra thi và các điểm phân biệt thuật toán.

## Câu hỏi

### A. Association Rules: Support, Confidence và Lift

**Câu 1.** Association Rule dùng để làm gì?

A. Phát hiện mối quan hệ thống kê hoặc mẫu ẩn giữa các item/sự kiện  
B. Chỉ phân cụm dữ liệu theo mật độ  
C. Chỉ phát hiện điểm ngoại lai  
D. Chỉ chuẩn hóa dữ liệu về khoảng [0,1]  

**Câu 2.** Một luật kết hợp thường có dạng nào?

A. X < Y < Z  
B. X ⇒ Y  
C. X / Y = Z-score  
D. X + Y = 0  

**Câu 3.** Trong luật X ⇒ Y, X được gọi là gì?

A. Outlier  
B. Centroid  
C. Antecedent hoặc tiền đề  
D. Consequent hoặc hậu đề  

**Câu 4.** Trong luật X ⇒ Y, Y được gọi là gì?

A. FP-tree  
B. Support count  
C. Antecedent hoặc tiền đề  
D. Consequent hoặc hậu đề  

**Câu 5.** Support của luật X ⇒ Y đo điều gì?

A. Tần suất xuất hiện đồng thời của X và Y trong toàn bộ giao dịch  
B. Số cụm cần dùng trong DBSCAN  
C. Mức độ phụ thuộc so với xác suất Y ngẫu nhiên  
D. Xác suất Y xảy ra khi X đã xảy ra  

**Câu 6.** Công thức Support của luật X ⇒ Y là gì?

A. Conf(X ⇒ Y) / P(Y)  
B. Số giao dịch chứa cả X và Y / Tổng số giao dịch  
C. P(X) / P(Y)  
D. Sup(X ∩ Y) / Sup(X)  

**Câu 7.** Confidence của luật X ⇒ Y đo điều gì?

A. Độ rộng của bán kính Eps  
B. Số lần thuật toán quét CSDL  
C. Xác suất hậu đề Y xảy ra khi tiền đề X xảy ra  
D. Tần suất X và Y cùng xuất hiện trên toàn bộ dữ liệu  

**Câu 8.** Công thức Confidence của X ⇒ Y là gì?

A. Conf(X ⇒ Y) / P(Y)  
B. P(X) x P(Y)  
C. Sup(X ∩ Y) / Tổng giao dịch  
D. Sup(X ∩ Y) / Sup(X)  

**Câu 9.** Lift của luật X ⇒ Y phản ánh điều gì?

A. Khả năng Y xảy ra khi X xảy ra so với xác suất Y xảy ra ngẫu nhiên  
B. Số cụm trong K-Means  
C. Độ sâu của cây quyết định  
D. Số lượng giao dịch chứa X  

**Câu 10.** Công thức Lift thường dùng là gì?

A. Số giao dịch chứa X / Tổng giao dịch  
B. Conf(X ⇒ Y) / P(Y)  
C. P(Y) / Conf(X ⇒ Y)  
D. Sup(X ∩ Y) / Sup(X)  

**Câu 11.** Nếu Lift > 1 thì diễn giải đúng là gì?

A. Luật luôn bị loại bỏ  
B. X làm giảm khả năng xảy ra Y  
C. X làm tăng khả năng xảy ra Y, quan hệ tích cực  
D. X và Y độc lập hoàn toàn  

**Câu 12.** Nếu Lift = 1 thì diễn giải đúng là gì?

A. X làm giảm mạnh Y  
B. Confidence luôn bằng 0  
C. X làm tăng mạnh Y  
D. X và Y độc lập, không có tác động lẫn nhau  

**Câu 13.** Nếu Lift < 1 thì diễn giải đúng là gì?

A. X làm giảm khả năng xảy ra Y, quan hệ tiêu cực  
B. Luật có Confidence bằng 100%  
C. X và Y chắc chắn luôn đi cùng nhau  
D. X làm tăng khả năng xảy ra Y  

**Câu 14.** Với 1000 giao dịch, 262 giao dịch chứa cả X và Y, Support bằng bao nhiêu?

A. 1.52  
B. 0.262  
C. 0.61  
D. 0.926  

**Câu 15.** Với count(X) = 283 và count(X ∩ Y) = 262, Confidence của X ⇒ Y xấp xỉ bao nhiêu?

A. 1.520  
B. 0.610  
C. 0.926  
D. 0.262  

**Câu 16.** Với Confidence = 0.926 và P(Y) = 0.61, Lift xấp xỉ bao nhiêu?

A. 0.262  
B. 0.75  
C. 0.61  
D. 1.52  

**Câu 17.** Trong ví dụ cd → e, Confidence = count({c,d,e}) / count({c,d}) = 3/4. Giá trị này bằng bao nhiêu?

A. 0.75  
B. 1.5  
C. 0.5  
D. 0.375  

**Câu 18.** Nếu Support của luật thấp hơn minsup thì thường xử lý thế nào?

A. Chuyển luật thành cụm DBSCAN  
B. Loại bỏ luật vì quá hiếm  
C. Tăng Confidence lên 100% tự động  
D. Luôn giữ lại vì luật càng hiếm càng tốt  

### B. Apriori và Frequent Itemset

**Câu 19.** Frequent Itemset là gì?

A. Tâm cụm ảo của K-Means  
B. Thuộc tính được chọn bởi Gain Ratio  
C. Tập item thường xuyên xuất hiện cùng nhau trong dữ liệu  
D. Điểm dữ liệu nằm xa các điểm khác  

**Câu 20.** Minimum Support dùng để làm gì?

A. Tính xác suất hậu nghiệm trong Bayes  
B. Chọn thuộc tính trong C4.5  
C. Chọn bán kính lân cận cho DBSCAN  
D. Lọc bỏ các itemset xuất hiện quá ít  

**Câu 21.** Một itemset được coi là frequent nếu điều kiện nào đúng?

A. support ≥ minsup  
B. Lift = 1 luôn luôn  
C. Confidence = 0  
D. support < minsup  

**Câu 22.** Trong 10.000 hợp đồng, 2.000 hợp đồng có cả hai loại bảo hiểm. Support bằng bao nhiêu?

A. 200%  
B. 20%  
C. 80%  
D. 2%  

**Câu 23.** Nếu I có 5 item, số tập con không rỗng có thể có là bao nhiêu?

A. 10  
B. 5  
C. 31  
D. 25  

**Câu 24.** Itemset kích thước k nghĩa là gì?

A. Itemset có Lift bằng k  
B. Itemset có Confidence bằng k  
C. Itemset xuất hiện k lần đúng bằng  
D. Itemset chứa k item  

**Câu 25.** Support count của một itemset X là gì?

A. Số giao dịch chứa X  
B. Độ sâu của FP-tree  
C. Số thuộc tính trong X chia cho tổng item  
D. Xác suất Y khi X xảy ra  

**Câu 26.** Bài toán khai thác tập phổ biến yêu cầu liệt kê những itemset nào?

A. Các itemset có support thấp hơn minsup  
B. Các itemset có support lớn hơn hoặc bằng minsup  
C. Chỉ các itemset có Lift = 1  
D. Chỉ các itemset có đúng 1 item  

**Câu 27.** Tính chất Apriori 1 phát biểu điều gì?

A. Mọi itemset đều có support bằng nhau  
B. Nếu X ⊆ Y thì support(Y) luôn lớn hơn support(X)  
C. Nếu X ⊆ Y thì support(Y) ≤ support(X)  
D. Support không liên quan đến quan hệ tập con  

**Câu 28.** Tính chất Apriori 2 phát biểu điều gì?

A. Nếu một tập con không phổ biến thì Y chắc chắn phổ biến  
B. Không thể loại bỏ ứng viên bằng tập con  
C. Mọi tập cha của itemset không phổ biến đều phổ biến  
D. Nếu một tập con của Y không phổ biến thì Y cũng không phổ biến  

**Câu 29.** Mục đích chính của Apriori là gì?

A. Tìm tất cả itemset phổ biến từ CSDL giao dịch  
B. Phân loại dữ liệu bằng Gain Ratio  
C. Phát hiện outlier bằng Gaussian  
D. Phân cụm dữ liệu bằng medoid  

**Câu 30.** Input chính của thuật toán Apriori gồm gì?

A. Gain Ratio và Null Weight  
B. minsup và cơ sở dữ liệu giao dịch  
C. Eps và MinPts  
D. Mean và Mode  

**Câu 31.** Output chính của Apriori là gì?

A. Dendrogram  
B. Cây Naive Bayes Network  
C. Tất cả itemset phổ biến  
D. Các điểm Core/Border/Noise  

**Câu 32.** Trong Apriori, bước tạo ứng viên kích thước 2 thường dựa trên gì?

A. Dùng Eps và MinPts  
B. Chọn ngẫu nhiên mọi outlier  
C. Dùng Gain Ratio  
D. Kết hợp các itemset phổ biến kích thước 1  

**Câu 33.** Vì sao Apriori có thể tốn kém?

A. Tạo nhiều ứng viên và phải quét CSDL nhiều lần  
B. Chỉ cần duyệt CSDL 2 lần  
C. Nén dữ liệu bằng FP-tree  
D. Không sinh ứng viên  

### C. FP-Growth

**Câu 34.** FP-Growth khắc phục hạn chế chính nào của Apriori?

A. Chỉ dùng cho phân cụm mật độ  
B. Giảm số lần quét CSDL và tránh sinh quá nhiều ứng viên  
C. Không thể tìm frequent itemset  
D. Bắt buộc dùng Gain Ratio  

**Câu 35.** FP-Growth thường chỉ cần duyệt CSDL bao nhiêu lần để xây dựng dữ liệu nén?

A. 10 lần  
B. Không cần duyệt lần nào  
C. 2 lần  
D. 1 lần cho mỗi itemset ứng viên  

**Câu 36.** FP-tree là gì?

A. Cây dùng để phát hiện outlier thống kê  
B. Cây quyết định dùng Gain Ratio  
C. Cây phân cấp concept hierarchy  
D. Cấu trúc cây nén lưu item và quan hệ giữa các item trong CSDL giao dịch  

**Câu 37.** Trong FP-Growth, các item thường được sắp theo thứ tự nào trước khi đưa vào FP-tree?

A. Giảm dần theo support count  
B. Tăng dần theo alphabet bắt buộc  
C. Theo kích thước chuỗi ký tự  
D. Ngẫu nhiên mỗi lần chạy  

**Câu 38.** Với minsupportcount = 3 trong ví dụ FP-Growth, các item đơn lẻ giữ lại là gì?

A. Tất cả item đều giữ lại  
B. F, C, A, B, M, P  
C. D, G, I, H, J, K  
D. E, N, S, D, G, I  

**Câu 39.** Bước nào thuộc quy trình FP-Growth?

A. Chọn Eps và MinPts rồi tìm Core  
B. Giả định Gaussian rồi tìm tail probability  
C. Xây dựng FP-tree, tạo Conditional Pattern Base, tính count và lọc theo minsup  
D. Tính Information Gain và post-pruning  

**Câu 40.** Conditional Pattern Base trong FP-Growth dùng để làm gì?

A. Chọn medoid thật  
B. Chọn bán kính lân cận  
C. Tạo trọng số xác suất cho giá trị Null  
D. Khai thác các mẫu điều kiện liên quan đến item đang xét  

**Câu 41.** Lý do FP-Growth tiết kiệm bộ nhớ hơn Apriori là gì?

A. Dữ liệu được nén trong FP-tree, số nút ít hơn nhiều so với giao dịch ban đầu  
B. Nó chỉ chạy trên dữ liệu có 1 giao dịch  
C. Nó lưu mọi ứng viên có thể trong bảng phẳng  
D. Nó không dùng bất kỳ cấu trúc dữ liệu nào  

### D. Classification: ID3, C4.5 và Bayes

**Câu 42.** ID3 chọn thuộc tính phân chia bằng tiêu chí nào?

A. Gain Ratio  
B. Information Gain  
C. Lift  
D. Eps  

**Câu 43.** C4.5 chọn thuộc tính phân chia bằng tiêu chí nào?

A. MinPts  
B. Information Gain tuyệt đối như ID3  
C. Gain Ratio  
D. Support count  

**Câu 44.** ID3 hỗ trợ loại dữ liệu nào theo slide?

A. Cả rời rạc và liên tục  
B. Chỉ dữ liệu outlier  
C. Chỉ dữ liệu ảnh  
D. Chỉ dữ liệu rời rạc/categorical  

**Câu 45.** C4.5 có ưu điểm nào so với ID3?

A. Hỗ trợ dữ liệu liên tục, xử lý Null bằng trọng số xác suất và có post-pruning  
B. Chỉ dùng dữ liệu categorical  
C. Không hỗ trợ Null  
D. Không có cơ chế cắt tỉa  

**Câu 46.** ID3 dễ gặp vấn đề nào hơn C4.5?

A. Không chọn được thuộc tính categorical  
B. Overfitting do cây sâu và không có cơ chế cắt tỉa  
C. Không tạo được cây quyết định  
D. Không tính được Information Gain  

**Câu 47.** Naive Bayes phân loại đối tượng dựa trên gì?

A. Support của itemset  
B. Khoảng cách đến medoid thật  
C. Xác suất đối tượng thuộc từng nhóm dựa trên các đặc trưng  
D. Bán kính Eps  

**Câu 48.** Giả định “Naive” trong Naive Bayes là gì?

A. Mọi thuộc tính phụ thuộc hoàn toàn theo cây  
B. Các điểm dữ liệu luôn nằm trong một cụm  
C. Dữ liệu không cần nhãn lớp  
D. Các thuộc tính độc lập hoàn toàn với nhau khi biết nhãn lớp  

**Câu 49.** Naive Bayes Network giúp gì?

A. Mô hình hóa quan hệ phụ thuộc giữa nhiều biến, khắc phục nhược điểm độc lập naive  
B. Chọn số cụm K tự động  
C. Ép mọi biến độc lập tuyệt đối hơn  
D. Tạo FP-tree cho itemset  

### E. Clustering

**Câu 50.** K-Means dùng loại tâm cụm nào?

A. Medoid, điểm thật  
B. Mean, trọng tâm ảo  
C. Border point  
D. Core point  

**Câu 51.** K-Medoids dùng loại tâm cụm nào?

A. FP-tree node  
B. Mean, trọng tâm ảo  
C. Medoid, một điểm dữ liệu thật  
D. Gain Ratio  

**Câu 52.** K-Means có nhược điểm chính nào?

A. Không chạy được với dữ liệu lớn  
B. Chỉ dùng cho mọi loại dữ liệu  
C. Luôn chậm hơn K-Medoids  
D. Nhạy cảm với nhiễu/outliers  

**Câu 53.** K-Medoids có ưu điểm nào so với K-Means?

A. Chống nhiễu tốt hơn  
B. Luôn nhanh hơn trên dữ liệu lớn  
C. Không dùng điểm thật  
D. Chỉ dùng cho dữ liệu numerical  

**Câu 54.** K-Modes là biến thể phù hợp cho loại dữ liệu nào?

A. Dữ liệu Bayesian Network  
B. Dữ liệu phân loại, thay mean bằng mode  
C. Dữ liệu chỉ có outlier  
D. Dữ liệu transaction dùng support  

**Câu 55.** K-Prototypes phù hợp với loại dữ liệu nào?

A. Chỉ dữ liệu văn bản  
B. Chỉ dữ liệu hình ảnh  
C. Dữ liệu hỗn hợp, kết hợp K-Means và K-Modes  
D. Chỉ dữ liệu missing  

**Câu 56.** DBSCAN định nghĩa cụm theo nguyên lý nào?

A. Luôn xây dựng dendrogram  
B. Luôn chọn trước số cụm K  
C. Luôn dùng mean làm tâm cụm  
D. Vùng có mật độ điểm dày đặc, ngăn cách bởi vùng mật độ thấp  

**Câu 57.** Hai tham số quyết định trong DBSCAN là gì?

A. Eps và MinPts  
B. Support và Confidence  
C. Mean và Mode  
D. Information Gain và Gain Ratio  

**Câu 58.** Điểm Core trong DBSCAN là gì?

A. Điểm có Lift > 1  
B. Điểm có ít nhất MinPts điểm trong bán kính Eps  
C. Điểm nằm trong Eps của Core nhưng không đủ MinPts  
D. Điểm không thuộc cụm nào  

**Câu 59.** Hierarchical Clustering có đặc điểm nào?

A. Chia không gian thành ô lưới để xử lý cực nhanh  
B. Chỉ dùng Eps và MinPts  
C. Xây dựng dendrogram bằng cách gộp dần hoặc chia dần cụm  
D. Không có cấu trúc tầng bậc  

**Câu 60.** Outlier Detection distance-based xác định outlier như thế nào?

A. Thuộc tính có Gain Ratio cao nhất  
B. Điểm có xác suất cao nhất trong phân phối  
C. Itemset có support cao hơn minsup  
D. Đối tượng nằm cách xa hầu hết các điểm dữ liệu khác  

## Đáp án và giải thích ngắn

1. A - Luật kết hợp tìm quan hệ/mẫu ẩn giữa các item.
2. B - Association rule có dạng X ⇒ Y.
3. C - X là tiền đề, còn gọi là Antecedent.
4. D - Y là hậu đề, còn gọi là Consequent.
5. A - Support đo độ phổ biến của X và Y cùng xuất hiện.
6. B - Support = count(X ∩ Y) / tổng giao dịch.
7. C - Confidence đo khả năng Y xảy ra khi X xảy ra.
8. D - Confidence = Sup(X ∩ Y) / Sup(X).
9. A - Lift so sánh xác suất có điều kiện với xác suất nền của Y.
10. B - Lift = Confidence / P(Y).
11. C - Lift > 1 là quan hệ tích cực.
12. D - Lift = 1 biểu thị độc lập.
13. A - Lift < 1 là quan hệ tiêu cực.
14. B - 262 / 1000 = 0.262.
15. C - 262 / 283 ≈ 0.926.
16. D - 0.926 / 0.61 ≈ 1.52.
17. A - 3/4 = 0.75.
18. B - Dưới minsup thì luật/itemset quá hiếm.
19. C - Frequent itemset xuất hiện thường xuyên cùng nhau.
20. D - Minimum Support lọc itemset ít xuất hiện.
21. A - Frequent nếu support ≥ minsup.
22. B - 2000 / 10000 = 20%.
23. C - 2^5 - 1 = 31.
24. D - Kích thước k nghĩa là có k item.
25. A - Support count là số giao dịch chứa itemset.
26. B - Khai thác tập phổ biến liệt kê itemset đạt minsup.
27. C - Support giảm hoặc giữ nguyên khi mở rộng tập item.
28. D - Tập con không phổ biến thì tập cha cũng không phổ biến.
29. A - Apriori tìm frequent itemsets.
30. B - Apriori cần minsup và transaction database.
31. C - Output là các itemset phổ biến.
32. D - Ứng viên size 2 sinh từ frequent 1-itemsets.
33. A - Apriori tốn vì sinh nhiều ứng viên và quét nhiều lần.
34. B - FP-Growth giảm quét CSDL và không sinh ứng viên khổng lồ.
35. C - FP-Growth thường duyệt CSDL 2 lần.
36. D - FP-tree là cây nén giao dịch.
37. A - Item được sắp giảm dần theo support count.
38. B - Với minsupportcount = 3, giữ F, C, A, B, M, P.
39. C - Đây là các bước chính của FP-Growth.
40. D - Conditional Pattern Base dùng khai thác mẫu điều kiện.
41. A - FP-tree nén dữ liệu nên tiết kiệm bộ nhớ.
42. B - ID3 dùng Information Gain.
43. C - C4.5 dùng Gain Ratio.
44. D - ID3 chỉ hỗ trợ categorical trong bảng so sánh.
45. A - C4.5 xử lý tốt hơn: numeric, null, post-pruning.
46. B - ID3 dễ overfit vì cây sâu và không pruning.
47. C - Naive Bayes chọn lớp có xác suất cao nhất.
48. D - Giả định naive là độc lập có điều kiện theo lớp.
49. A - Bayesian Network mô hình hóa phụ thuộc giữa biến.
50. B - K-Means dùng mean làm tâm ảo.
51. C - K-Medoids dùng medoid là điểm thật.
52. D - K-Means nhạy cảm với outlier.
53. A - K-Medoids chống nhiễu tốt hơn.
54. B - K-Modes dùng cho categorical data.
55. C - K-Prototypes dùng cho dữ liệu hỗn hợp.
56. D - DBSCAN dựa trên mật độ.
57. A - DBSCAN dùng Eps và MinPts.
58. B - Core có ít nhất MinPts trong Eps.
59. C - Hierarchical tạo dendrogram theo gộp/chia cụm.
60. D - Distance-based outlier nằm xa phần lớn điểm khác.
