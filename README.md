# Luyện trắc nghiệm Nhà kho dữ liệu và tích hợp

Mini web app luyện trắc nghiệm 9 chương, hỗ trợ chọn từng chương, tạo đề tổng hợp 30 câu rải đều giữa các chương, luyện câu sai, câu chưa làm và dark mode.

## Chạy local

```powershell
python -m http.server 8008 --bind 127.0.0.1
```

Mở:

```text
http://127.0.0.1:8008/quiz-app/
```

## Deploy GitHub Pages

Sau khi push repo lên GitHub, vào `Settings` -> `Pages`, chọn branch `main` và folder `/root`.

Đường dẫn app sẽ có dạng:

```text
https://<username>.github.io/<repo-name>/quiz-app/
```
