# Duong iu Minh Anh rat nhiu ♡

Website tình yêu mini được xây dựng bằng HTML, CSS và JavaScript thuần.

## Trải nghiệm của Minh Anh
Khi mở website, Minh Anh sẽ được chào đón bằng lời nhắn thân mật. Nhấn **Bắt đầu nhé, em yêu** để lần lượt trả lời các câu hỏi; hoàn thành tất cả sẽ mở khóa bức thư tình bí mật. Các mục thư và bất ngờ khác sẽ xuất hiện sau khi mở thư.

## Chạy website
1. Giải nén thư mục.
2. Mở thư mục `Duong-Love-Minh-Anh` bằng VS Code.
3. Cài extension **Live Server** nếu chưa có.
4. Nhấn chuột phải vào `index.html` → **Open with Live Server**.

## Cá nhân hóa trước tiên
Mở `js/app.js` để cá nhân hóa website:
- Ngày bắt đầu yêu hiện được đặt là `2026-06-28`; bộ đếm cập nhật ngày, giờ, phút và giây theo thời gian thực.
- Vào ngày `2026-11-17`, trang mở đầu bằng lời chúc sinh nhật, sau đó dẫn đến quiz sinh nhật và lá thư riêng ở phần thưởng cuối quiz.
- Để xem thử luồng sinh nhật trước ngày đó, thêm `?birthday=preview` vào địa chỉ trang, ví dụ `http://localhost:5500/?birthday=preview`.
- Chỉnh nội dung `letters.reward` để viết bức thư làm phần thưởng.
- Sửa mảng `questions` theo câu chuyện thật của hai bạn.

Bạn cũng có thể sửa nội dung các thư khác trong đối tượng `letters`.

## Thêm nhạc
Website thử tự phát bài MP3 có sẵn trong thư mục `music/` khi mở trang. Một số trình duyệt chặn tự phát âm thanh; khi đó hãy chạm vào nút **Chạm để bật nhạc** trên thanh đầu trang hoặc chạm vào trang một lần.

## Lưu ý
- Đây là bản frontend đầu tiên; dữ liệu chưa đồng bộ giữa các thiết bị.
- Giai đoạn tiếp theo có thể tích hợp Supabase để lưu trữ và đồng bộ dữ liệu.
