// ====== MUSIC PLAYER (DropBox / MP3 direct link) ======
let bgMusic = null;

// Hàm này được gọi khi mở hộp quà
function playMusic(url) {
  if (!url) return;
  try {
    // Nếu là link Dropbox thì đổi dl=0 thành dl=1 để phát trực tiếp
    if (url.includes("dropbox.com")) {
      url = url.replace("dl=0", "dl=1");
    }

    // Nếu đã có nhạc đang chạy thì dừng lại
    if (bgMusic) {
      bgMusic.pause();
      bgMusic = null;
    }

    // Tạo audio mới
    bgMusic = new Audio(url);
    bgMusic.volume = 0.8;
    bgMusic.loop = true; // nhạc lặp lại
    bgMusic.play().catch(err => {
      console.log("Không thể tự phát (trình duyệt chặn autoplay):", err);
    });
  } catch (e) {
    console.log("Lỗi phát nhạc:", e);
  }
}

// Dừng nhạc
function stopMusic() {
  if (bgMusic) {
    bgMusic.pause();
    bgMusic = null;
  }
}
