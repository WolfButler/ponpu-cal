const modeToggle = document.querySelector('.mode-toggle');
const htmlElement = document.documentElement; // เลือก element <html>

modeToggle.addEventListener('click', function(e) {
    e.preventDefault();

    // อ่านค่า attribute data-bs-theme ปัจจุบัน
    const currentTheme = htmlElement.getAttribute('data-bs-theme');

    // ตรวจสอบค่า theme ปัจจุบันแล้วสลับ
    if (currentTheme === 'dark') {
        // ถ้าเป็น dark อยู่ ให้เปลี่ยนเป็น light
        htmlElement.setAttribute('data-bs-theme', 'light');
        document.body.classList.toggle('dark-mode');
        // หรือถ้าต้องการให้กลับไปใช้ default (light) โดยการลบ attribute ออก:
        // htmlElement.removeAttribute('data-bs-theme');
    } else {
        // ถ้าเป็น light หรือยังไม่ได้ตั้งค่า ให้เปลี่ยนเป็น dark
        htmlElement.setAttribute('data-bs-theme', 'dark');
        document.body.classList.toggle('dark-mode');
    }
});