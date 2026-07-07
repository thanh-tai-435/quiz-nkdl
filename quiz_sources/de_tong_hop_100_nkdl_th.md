# De tong hop 100 cau NKDL&TH

Nguon: De_Thi_100_Cau_NKDL_TH_TongHop.md, tong hop tu slide va tu khoa mon hoc.

## Cau hoi

### Tong hop on thi

**Cau 1.** Trong mo hinh dimensional, Fact Table duoc hieu dung nhat la gi?

A. Bang chua mo ta van ban dai ve khach hang  
B. Bang chua cac phep do nghiep vu tai mot grain xac dinh, kem khoa ngoai den dimension  
C. Bang chi dung de luu cau hinh ETL  
D. Bang tam trong qua trinh staging  

**Cau 2.** Bang fact nao phu hop nhat de luu moi giao dich ban hang phat sinh tai POS?

A. Factless fact  
B. Periodic snapshot fact  
C. Transaction fact  
D. Accumulating snapshot fact  

**Cau 3.** Neu can luu so du tai khoan cuoi moi ngay cho tung khach hang, loai fact phu hop nhat la:

A. Periodic snapshot fact  
B. Transaction fact  
C. Bridge table  
D. Junk dimension  

**Cau 4.** Bang fact theo doi cac moc "tao don - dong goi - giao hang - thanh toan" tren cung mot don hang thuong la:

A. Factless fact  
B. Dimension Type 2  
C. Transaction fact  
D. Accumulating snapshot fact  

**Cau 5.** Bang ghi nhan su kien "sinh vien tham gia lop hoc" nhung khong co measure so hoc ro rang la:

A. Periodic snapshot fact  
B. Factless fact  
C. Accumulating snapshot fact  
D. Snowflake schema  

**Cau 6.** Phat bieu nao phan biet dung Dimension Table va Fact Table?

A. Dimension luu measure, Fact luu mo ta  
B. Dimension chi co khoa ngoai, Fact chi co khoa chinh  
C. Dimension mo ta "ai/cai gi/o dau/khi nao", Fact luu so lieu do luong  
D. Dimension khong bao gio thay doi  

**Cau 7.** Bridge Table thuong duoc dung khi:

A. Can ma hoa cot PII  
B. Can chia du lieu thanh micro-partition  
C. Can lap lich pipeline  
D. Can xu ly quan he nhieu-nhieu giua fact va dimension  

**Cau 8.** "Grain" cua Fact Table la:

A. Muc chi tiet ma moi dong trong fact bieu dien  
B. Tong so cot trong bang  
C. Dinh dang file luu tru  
D. Kich thuoc warehouse compute  

**Cau 9.** Measure "doanh thu" trong fact ban hang thuong la:

A. Non-additive  
B. Additive  
C. Chi dung lam khoa ngoai  
D. Chi xuat hien trong dimension  

**Cau 10.** Ma don hang nam trong fact, khong co bang dimension rieng, thuong duoc xem la:

A. Bridge key  
B. Conformed dimension  
C. Degenerate dimension  
D. Clustering key  

**Cau 11.** Data Fabric nhan manh nhat vao dieu gi?

A. Thay the toan bo data warehouse bang file CSV  
B. Chi quan tri du lieu trong mot database don le  
C. Tang toc do thuat toan Apriori  
D. Lop ket noi, ao hoa, metadata va governance tren nhieu nguon du lieu  

**Cau 12.** Bucket Policy trong object storage gan nhat voi:

A. Hang doi FIFO cua BFS  
B. Cong thuc tinh entropy  
C. Khoa gom cum trong K-means  
D. Chinh sach truy cap o muc bucket/container  

**Cau 13.** Micro-partitioning trong Snowflake/Cloud DWH giup toi uu truy van chu yeu bang cach:

A. Ep moi truy van chay tren mot CPU  
B. Chia bang thanh phan vung nho co metadata min/max de pruning  
C. Xoa het cot khong can thiet khoi schema  
D. Chuyen moi bang thanh document store  

**Cau 14.** Clustering Key nen duoc chon dua tren:

A. Cot co ten ngan nhat  
B. Cot chi dung de hien thi  
C. Cot thuong nam trong dieu kien loc/range query va co kha nang pruning tot  
D. Cot co nhieu NULL nhat  

**Cau 15.** Clustering Depth cang thap thuong ham y:

A. Truy van kem hieu qua hon  
B. Schema drift nang hon  
C. Can xoa bang va tao lai  
D. Micro-partition it chong lan hon, pruning tot hon  

**Cau 16.** Storage Mirroring trong Zero-ETL noi ve:

A. Tao macro Jinja  
B. Tinh entropy cua tap du lieu  
C. Sinh candidate itemset  
D. Nhan ban du lieu lien tuc o tang storage sang warehouse/lakehouse  

**Cau 17.** Apache Airflow duoc dung chu yeu de:

A. Thay the Fact Table  
B. Lap lich, dieu phoi, giam sat workflow bang DAG  
C. Tinh Lift cho luat ket hop  
D. Tim duong di DFS  

**Cau 18.** Snowflake Schema Evolution/Snowflake Evolution giai quyet van de:

A. Tat ca cac luat ket hop deu lift > 1  
B. Clustering depth luon bang 0  
C. Schema drift nhu them cot, thay doi cau truc khi nap du lieu  
D. Chi muc vector bi loi  

**Cau 19.** CLM - Column-level Masking dung de:

A. Loc dong theo vung mien  
B. Tao micro-batch  
C. Tinh PageRank  
D. Che/an/ma hoa gia tri cot nhay cam tuy ngu canh truy cap  

**Cau 20.** Jinja trong dbt duoc dung de:

A. Duyet do thi bang stack  
B. Thay the SQL bang ngon ngu do hoa  
C. Luu tru file tren S3  
D. Viet logic mau hoa SQL, macro, ref/source va dieu kien bien dich  

**Cau 21.** Trong dbt, `ref('orders')` thuong co vai tro:

A. Tao random seed  
B. Tham chieu model khac va giup dbt xay dung lineage/dependency  
C. Ma hoa cot PII  
D. Sinh FP-tree  

**Cau 22.** Macro Jinja trong dbt phu hop nhat khi:

A. Chi can chay mot cau SELECT duy nhat, khong lap lai  
B. Can tao BFS queue  
C. Can tai su dung logic SQL lap lai nhieu noi  
D. Can thay doi kich thuoc micro-partition bang tay  

**Cau 23.** Khi dbt compile model co Jinja, ket qua cuoi cung gui den warehouse la:

A. File PowerPoint  
B. Ma Python da dong goi  
C. GraphML  
D. SQL sau khi render Jinja  

**Cau 24.** Trong ELT cloud-native, dbt thuong dam nhan phan:

A. Xay dung bucket policy  
B. Thay the object storage  
C. Thiet ke thuat toan PageRank  
D. Transform du lieu trong warehouse/lakehouse bang SQL-first  

**Cau 25.** DAG trong Airflow bat buoc la:

A. Do thi vo huong co chu trinh  
B. Do thi co huong khong chu trinh  
C. Bang fact khong khoa ngoai  
D. Tap frequent itemset  

**Cau 26.** Neu co 9 item pho bien don le trong L1, so candidate itemset size 2 ban dau la:

A. 18  
B. 27  
C. 36  
D. 81  

**Cau 27.** Neu L1 co 12 item pho bien don le, so cap candidate C2 toi da truoc khi dem support la:

A. 24  
B. 48  
C. 60  
D. 66  

**Cau 28.** L1 = {A,B,C,D,E,F}. Neu cap {B,E} va {C,F} bi loai do rang buoc domain truoc khi dem, so C2 con lai la:

A. 13  
B. 14  
C. 15  
D. 17  

**Cau 29.** Neu co 8 item pho bien don le, sau khi sinh C2 co 6 cap bi prune do rÃ ng buá»™c, so cap con lai la:

A. 20  
B. 22  
C. 24  
D. 28  

**Cau 30.** Cong thuc tong quat so candidate 2-itemset tu m item pho bien don le la:

A. m^2  
B. m(m-1)/2  
C. 2m-1  
D. m!  

**Cau 31.** Tap du lieu co 3 lop voi ty le (1/2, 1/4, 1/4). Entropy log2 la:

A. 1.00  
B. 1.25  
C. 1.50  
D. 2.00  

**Cau 32.** Tap S co 10 mau: lop A=5, B=3, C=2. Entropy xap xi:

A. 0.971  
B. 1.485  
C. 1.922  
D. 2.322  

**Cau 33.** Tap S co 16 mau chia deu 4 lop. Entropy log2 bang:

A. 0  
B. 1  
C. 1.5  
D. 2  

**Cau 34.** Tap S co 20 mau: A=18, B=1, C=1. Entropy xap xi gan nhat:

A. 2.000  
B. 1.000  
C. 1.585  
D. 0.569  

**Cau 35.** Entropy cua tap du lieu mot lop duy nhat la:

A. 0  
B. 0.5  
C. 1  
D. Khong xac dinh  

**Cau 36.** Equal-width binning chia khoang [min, max] thanh k bin co do rong:

A. k/(max-min)  
B. (max-min)/k  
C. max/k  
D. min/k  

**Cau 37.** Du lieu co min=10, max=70, k=4. Do rong moi bin theo equal-width la:

A. 10  
B. 12  
C. 15  
D. 20  

**Cau 38.** Voi min=0, max=100, k=5, gia tri 63 thuoc bin nao neu dung cac khoang [0,20), [20,40), [40,60), [60,80), [80,100]?

A. Bin 2  
B. Bin 3  
C. Bin 4  
D. Bin 5  

**Cau 39.** Du lieu [4, 8, 15, 16, 23, 42], k=3, equal-width co width:

A. 12.67  
B. 14.00  
C. 15.33  
D. 19.00  

**Cau 40.** Muc tieu chinh cua binning trong tien xu ly la:

A. Thay the moi khoa ngoai  
B. Tang so lop trong classification  
C. Tao PageRank  
D. Lam muot/roi rac hoa du lieu, giam anh huong nhieu  

**Cau 41.** Chuoi gia [80, 86, 82, 84, 88], SMA voi k=3 tai ngay 5 la:

A. 82.0  
B. 84.0  
C. 84.7  
D. 86.0  

**Cau 42.** Chuoi [10, 12, 15, 11, 14, 16], SMA k=4 tai thoi diem 6 la:

A. 13.25  
B. 14.00  
C. 14.25  
D. 15.00  

**Cau 43.** Voi chuoi [5, 7, 9, 11, 13], SMA k=2 tai thoi diem 4 la:

A. 8  
B. 9  
C. 10  
D. 12  

**Cau 44.** SMA thuong giup:

A. Phat hien khoa ngoai  
B. Lam muot bien dong ngan han trong chuoi thoi gian  
C. Tao candidate itemset  
D. Bao mat bucket  

**Cau 45.** Neu SMA k qua lon so voi chu ky bien dong ngan han, ket qua thuong:

A. Nhay hon du lieu goc  
B. Khong thay doi gi  
C. Muot hon nhung co do tre lon hon  
D. Tro thanh entropy  

**Cau 46.** Trong 1.000 giao dich, count(X)=250, count(Y)=400, count(X va Y)=120. Support cua luat X -> Y la:

A. 0.48  
B. 0.25  
C. 0.30  
D. 0.12  

**Cau 47.** Voi du lieu cau 46, Confidence cua X -> Y la:

A. 0.12  
B. 0.30  
C. 0.40  
D. 0.48  

**Cau 48.** Voi du lieu cau 46, Lift cua X -> Y la:

A. 0.75  
B. 1.00  
C. 1.20  
D. 2.00  

**Cau 49.** Neu Lift(X -> Y) = 1, cach dien giai dung nhat la:

A. Support bang 0  
B. X lam giam kha nang Y  
C. Luat bat buoc dung 100%  
D. X va Y co quan he doc lap theo xac suat  

**Cau 50.** Trong 500 giao dich, count(A)=80, count(B)=125, count(A va B)=40. Confidence A -> B la:

A. 0.08  
B. 0.32  
C. 0.50  
D. 1.60  

**Cau 51.** Voi du lieu cau 50, Lift A -> B la:

A. 0.50  
B. 1.00  
C. 1.60  
D. 2.00  

**Cau 52.** Luat co support cao nhung confidence thap co nghia gan dung nhat:

A. X va Y chac chan la cung mot item  
B. Luat co lift vo cuc  
C. Y khong bao gio xuat hien  
D. Tap X va Y cung xuat hien kha nhieu, nhung X khong du manh de du doan Y  

**Cau 53.** Mot buoc "join" trong Apriori tu L2 sang C3 chi ghep:

A. Cac rule co confidence thap  
B. Moi itemset bat ky voi moi transaction  
C. Cac item co support bang 0  
D. Hai itemset co cung hau to/kho tien to phu hop va khac item cuoi  

**Cau 54.** Nguyen ly Apriori noi rang:

A. Lift luon bang confidence  
B. Neu itemset khong pho bien thi moi superset deu pho bien  
C. Chi can dem support mot lan cho tat ca kich thuoc  
D. Neu itemset khong pho bien thi moi superset cua no cung khong pho bien  

**Cau 55.** Cho L2 = {AB, AC, AD, BC, BD}. Candidate ABC co duoc giu sau prune khong?

A. Khong, vi AB thieu  
B. Khong, vi AC thieu  
C. Co, vi AB, AC, BC deu nam trong L2  
D. Khong, vi BD khong lien quan  

**Cau 56.** Cho L2 = {AB, AC, AD, BC, CD}. Candidate ACD:

A. Duoc giu vi co AC, AD, CD  
B. Bi loai vi thieu AC  
C. Bi loai vi thieu AD  
D. Bi loai vi thieu CD  

**Cau 57.** FP-Growth khac Apriori chu yeu o diem:

A. FP-Growth khong can du lieu giao dich  
B. FP-Growth dung FP-tree de nen CSDL va khai thac mau, giam sinh candidate  
C. FP-Growth chi tinh entropy  
D. FP-Growth chi dung cho chuoi thoi gian  

**Cau 58.** Trong FP-tree, cac item trong transaction thuong duoc sap xep theo:

A. PageRank giam dan  
B. Bang chu cai bat buoc  
C. Gia ban tang dan  
D. Tan suat pho bien giam dan sau khi loc minsup  

**Cau 59.** Buoc tao conditional pattern base trong FP-Growth dung de:

A. Tim cac duong tien to dan den mot item hau to  
B. Tinh clustering depth  
C. Tao bucket policy  
D. Render Jinja macro  

**Cau 60.** Neu minsup count = 3 va count({A,B,C}) = 2, Apriori se:

A. Giu ABC vi co 3 item  
B. Giu ABC neu lift > 1  
C. Loai ABC vi khong dat minsup  
D. Chuyen ABC thanh dimension  

**Cau 61.** PageRank voi damping d=0.85, N=4. Neu node P nhan link tu A co PR(A)=0.25, out(A)=2 va B co PR(B)=0.25, out(B)=1, PR(P) sau mot vong la:

A. 0.0375  
B. 0.35625  
C. 0.4625  
D. 0.85  

**Cau 62.** Trong PageRank, thanh phan (1-d)/N bieu dien:

A. Support cua mot link  
B. So canh ra cua node  
C. Entropy cua trang web  
D. Xac suat teleport/nhay ngau nhien phan bo deu  

**Cau 63.** Do thi co 3 node, d=0.85, khoi tao PR moi node = 1/3. X co incoming tu Y va Z, moi node Y,Z co outdegree=1. PR(X) vong 1 la:

A. 0.3333  
B. 0.6167  
C. 0.9000  
D. 1.0000  

**Cau 64.** Neu mot node co outdegree = 0 trong PageRank, cach xu ly pho bien la:

A. Xoa toan bo do thi  
B. Cho node do tro thanh fact table  
C. Phan phoi PR cua dangling node cho tat ca node hoac xu ly theo teleport  
D. Dat PR tat ca node bang 0  

**Cau 65.** PageRank cao thuong cho thay:

A. Node la bucket policy  
B. Node co entropy bang 0  
C. Node co it lien ket nhat bat ke ngu canh  
D. Trang/node duoc nhieu node quan trong tro den  

**Cau 66.** CPT/CPT+ trong du doan chuoi thuong dung de:

A. Du doan item/su kien ke tiep dua tren cac chuoi da quan sat  
B. Tao clustering key trong Snowflake  
C. Tinh SMA  
D. Lap lich DAG  

**Cau 67.** Trong CPT+, "compression" va cau truc chi muc giup:

A. Tang so candidate C2  
B. Giam bo nho va tang toc truy xuat mau chuoi  
C. Xoa tat ca chuoi ngan  
D. Chuyen chuoi thanh factless fact  

**Cau 68.** Cho chuoi huan luyen S1=<A,B,C,D>, S2=<A,B,E,D>, S3=<A,B,C>. Neu prefix hien tai <A,B>, ung vien tiep theo co tan suat cao nhat la:

A. A  
B. B  
C. C  
D. D  

**Cau 69.** Neu cac chuoi phu hop voi prefix hien tai cho cac phan tiep theo: X xuat hien 4 lan, Y xuat hien 4 lan, Z xuat hien 2 lan. Neu dung quy tac tie-break theo thu tu tu dien, du doan la:

A. X  
B. Y  
C. Z  
D. Khong the du doan  

**Cau 70.** Diem manh cua CPT/CPT+ so voi Markov bac co dinh trong mot so bai toan la:

A. Chi nhin mot phan tu gan nhat  
B. Khai thac ngu canh chuoi dai/linh hoat hon  
C. Khong can du lieu huan luyen  
D. Chi du doan gia tri lien tuc  

**Cau 71.** BFS su dung cau truc du lieu nao?

A. Stack - LIFO  
B. Queue - FIFO  
C. Heap bat buoc  
D. Hash chi doc  

**Cau 72.** DFS su dung pho bien:

A. Queue - FIFO  
B. Micro-partition  
C. Stack - LIFO hoac de quy  
D. Bucket policy  

**Cau 73.** Vá»›i do thi vo huong co canh: A-B, A-C, B-D, B-E, C-F. BFS tu A, xet ke theo thu tu alphabet, thu tu tham la:

A. A, B, C, D, E, F  
B. A, C, B, F, E, D  
C. A, B, D, E, C, F  
D. A, F, C, E, D, B  

**Cau 74.** Vá»›i do thi cau 73, DFS tu A, xet ke alphabet, thu tu tham la:

A. A, B, C, D, E, F  
B. A, B, D, E, C, F  
C. A, C, F, B, E, D  
D. A, F, C, B, D, E  

**Cau 75.** BFS phu hop hon DFS khi can:

A. Tim duong di ngan nhat theo so canh trong do thi khong trong so  
B. Tinh entropy nhieu lop  
C. Sinh macro dbt  
D. Nen FP-tree  

**Cau 76.** DFS phu hop khi:

A. Can duyet sau mot nhanh, phat hien thanh phan lien thong/chu trinh  
B. Can chia equal-width bin  
C. Can tinh support  
D. Can chon clustering key  

**Cau 77.** Do phuc tap BFS/DFS tren do thi bieu dien danh sach ke la:

A. O(V)  
B. O(E)  
C. O(V+E)  
D. O(VE^2)  

**Cau 78.** Knowledge Graph luu tru uu tien:

A. Quan he giua cac thuc the nhu thanh phan hang nhat  
B. Chi so SMA cua gia vang  
C. Candidate itemset size 2  
D. Cac file PDF  

**Cau 79.** Data Mesh khac Data Fabric chu yeu vi Data Mesh:

A. Chi la cong thuc tinh Lift  
B. Tap trung domain ownership, data as a product va federated governance  
C. Chi chay trong mot bucket  
D. Bat buoc dung DFS  

**Cau 80.** Lakehouse khac Data Fabric o diem:

A. Lakehouse tap trung hop nhat ha tang lake va warehouse; Fabric tap trung ket noi/ao hoa da nguon  
B. Lakehouse chi dung cho BFS  
C. Fabric chi luu transaction fact  
D. Hai khai niem hoan toan dong nghia  

**Cau 81.** Schema Evolution quan trong trong pipeline vi:

A. Du lieu nguon co the them cot/doi kieu, pipeline can thich ung an toan  
B. Entropy luon tang theo thoi gian  
C. BFS khong the dung queue  
D. Fact table khong can grain  

**Cau 82.** Trong medallion architecture, Bronze thuong luu:

A. KPI da tong hop cho CEO  
B. Du lieu tho/gan nguyen trang tu nguon  
C. Chi semantic layer  
D. Chi PageRank  

**Cau 83.** Silver layer thuong lam:

A. Lam sach, chuan hoa, tich hop du lieu  
B. Xoa het metadata  
C. Tao bucket policy  
D. Thay the Airflow  

**Cau 84.** Gold layer thuong phuc vu:

A. Du lieu tho chua validate  
B. File log tam  
C. BI/AI/KPI va mo hinh phan tich da san sang dung  
D. Chi so outdegree  

**Cau 85.** Semantic Layer/Metric Catalog giup:

A. Thong nhat dinh nghia KPI va logic nghiep vu giua cac cong cu  
B. Tang entropy  
C. Giam support  
D. Doi DFS thanh BFS  

**Cau 86.** Predicate Pushdown co y nghia:

A. Dua dieu kien loc xuong gan nguon/luu tru de giam du lieu phai quet/keo ve  
B. Tao tat ca itemset  
C. Che so dien thoai  
D. Tinh SMA k=3  

**Cau 87.** Object Storage khac file system truyen thong o diem thuong gap:

A. Dung key/object, metadata, API, flat namespace hon la thu muc vat ly chat che  
B. Khong the ma hoa  
C. Chi luu duoc bang fact  
D. Bat buoc dung SQL JOIN  

**Cau 88.** Decoupling compute/storage giup:

A. Mo rong tinh toan va luu tru doc lap, toi uu chi phi pay-as-you-go  
B. Lam entropy bang 0  
C. Loai bo nhu cau governance  
D. Khong can schema  

**Cau 89.** Data Observability khong chi bao loi ma con giup:

A. Biet du lieu loi o dau/vi sao qua freshness, volume, schema, lineage...  
B. Tao transaction ID  
C. Tinh C(12,2)  
D. Sap xep DFS  

**Cau 90.** CDC log-based uu viet hon query-based trong nhieu tinh huong vi:

A. Doc log giao dich gan real-time, it gay tai va bat duoc thay doi/delete tot hon  
B. Luon quet full table moi phut  
C. Khong can he nguon  
D. Chi dung cho PageRank  

**Cau 91.** Cho transaction:

A. 2  
B. 3  
C. 4  
D. 5  

**Cau 92.** Voi du lieu cau 91, confidence {A,B}->{C} la:

A. 1/5  
B. 2/3  
C. 3/4  
D. 1  

**Cau 93.** Voi du lieu cau 91, support cua rule {A,B}->{C} la:

A. 0.2  
B. 0.4  
C. 0.6  
D. 0.8  

**Cau 94.** Voi du lieu cau 91, P(C)=4/5. Lift cua {A,B}->{C} la:

A. 0.833  
B. 1.000  
C. 1.250  
D. 1.667  

**Cau 95.** Cho data values [2, 4, 5, 9, 12, 14, 18, 20], equal-width k=3 tren [2,20]. Width la 6; neu bin la [2,8), [8,14), [14,20], so phan tu moi bin la:

A. 3,2,3  
B. 2,3,3  
C. 3,3,2  
D. 4,2,2  

**Cau 96.** Cho chuoi [21, 19, 24, 28, 26, 30, 32], SMA k=3 tai thoi diem 7 la:

A. 28.0  
B. 29.3  
C. 30.0  
D. 31.0  

**Cau 97.** Tap du lieu 30 mau co 3 lop: 15, 10, 5. Entropy log2 xap xi:

A. 1.459  
B. 1.585  
C. 1.250  
D. 0.918  

**Cau 98.** Neu L1 co 15 item, C2 co 105 cap. Sau dem support, chi 30 cap pho bien. Ket luan dung la:

A. L2 co 105 itemset  
B. L2 co 30 itemset va cac cap con lai bi loai khoi buoc sinh C3  
C. Khong the sinh C3  
D. Tat ca C2 deu frequent  

**Cau 99.** Trong thiet ke fact, loi nghiem trong nhat la:

A. Khong xac dinh grain ro rang truoc khi them dimensions va facts  
B. Dat ten cot bang tieng Anh  
C. Co khoa ngoai den dimension  
D. Co measure so  

**Cau 100.** Mot pipeline hien dai can nap file moi, transform SQL, test schema, va lap lich phu thuoc. Bo cong cu/khai niem phu hop nhat la:

A. Equal-width binning, DFS, CLM  
B. Object storage/Snowpipe hoac ingest, dbt, tests, Airflow DAG  
C. PageRank, CPT+, entropy  
D. Bridge table, SMA, Lift  

## Dap an

1. B - Dap an dung la B.
2. C - Dap an dung la C.
3. A - Dap an dung la A.
4. D - Dap an dung la D.
5. B - Dap an dung la B.
6. C - Dap an dung la C.
7. D - Dap an dung la D.
8. A - Dap an dung la A.
9. B - Dap an dung la B.
10. C - Dap an dung la C.
11. D - Dap an dung la D.
12. D - Dap an dung la D.
13. B - Dap an dung la B.
14. C - Dap an dung la C.
15. D - Dap an dung la D.
16. D - Dap an dung la D.
17. B - Dap an dung la B.
18. C - Dap an dung la C.
19. D - Dap an dung la D.
20. D - Dap an dung la D.
21. B - Dap an dung la B.
22. C - Dap an dung la C.
23. D - Dap an dung la D.
24. D - Dap an dung la D.
25. B - Dap an dung la B.
26. C - Dap an dung la C.
27. D - Dap an dung la D.
28. A - Dap an dung la A.
29. B - Dap an dung la B.
30. B - Dap an dung la B.
31. C - Dap an dung la C.
32. B - Dap an dung la B.
33. D - Dap an dung la D.
34. D - Dap an dung la D.
35. A - Dap an dung la A.
36. B - Dap an dung la B.
37. C - Dap an dung la C.
38. C - Dap an dung la C.
39. A - Dap an dung la A.
40. D - Dap an dung la D.
41. C - Dap an dung la C.
42. B - Dap an dung la B.
43. C - Dap an dung la C.
44. B - Dap an dung la B.
45. C - Dap an dung la C.
46. D - Dap an dung la D.
47. D - Dap an dung la D.
48. C - Dap an dung la C.
49. D - Dap an dung la D.
50. C - Dap an dung la C.
51. C - Dap an dung la C.
52. D - Dap an dung la D.
53. D - Dap an dung la D.
54. D - Dap an dung la D.
55. C - Dap an dung la C.
56. A - Dap an dung la A.
57. B - Dap an dung la B.
58. D - Dap an dung la D.
59. A - Dap an dung la A.
60. C - Dap an dung la C.
61. B - Dap an dung la B.
62. D - Dap an dung la D.
63. B - Dap an dung la B.
64. C - Dap an dung la C.
65. D - Dap an dung la D.
66. A - Dap an dung la A.
67. B - Dap an dung la B.
68. C - Dap an dung la C.
69. A - Dap an dung la A.
70. B - Dap an dung la B.
71. B - Dap an dung la B.
72. C - Dap an dung la C.
73. A - Dap an dung la A.
74. B - Dap an dung la B.
75. A - Dap an dung la A.
76. A - Dap an dung la A.
77. C - Dap an dung la C.
78. A - Dap an dung la A.
79. B - Dap an dung la B.
80. A - Dap an dung la A.
81. A - Dap an dung la A.
82. B - Dap an dung la B.
83. A - Dap an dung la A.
84. C - Dap an dung la C.
85. A - Dap an dung la A.
86. A - Dap an dung la A.
87. A - Dap an dung la A.
88. A - Dap an dung la A.
89. A - Dap an dung la A.
90. A - Dap an dung la A.
91. B - Dap an dung la B.
92. B - Dap an dung la B.
93. B - Dap an dung la B.
94. A - Dap an dung la A.
95. A - Dap an dung la A.
96. B - Dap an dung la B.
97. A - Dap an dung la A.
98. B - Dap an dung la B.
99. A - Dap an dung la A.
100. B - Dap an dung la B.
