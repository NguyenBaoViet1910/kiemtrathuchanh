// js/app.js

// 1. Thư viện ảnh: Xử lý gallery với ảnh lớn và thumbnails
document.addEventListener('DOMContentLoaded', function() {
    const largeImage = document.getElementById('largeImage');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const newSrc = this.getAttribute('src');
            const newAlt = this.getAttribute('alt');
            largeImage.setAttribute('src', newSrc);
            largeImage.setAttribute('alt', newAlt);
        });
    });
});

// 2. Scroll Effect: Thay đổi header khi cuộn trang
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 3. Animation cho Features Section: Sử dụng Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    console.log('Số lượng feature-items: ', featureItems.length);
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Phần tử đang xuất hiện: ', entry.target);
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    if (featureItems.length > 0) {
        console.log('Bắt đầu quan sát các feature-items');
        featureItems.forEach(item => {
            observer.observe(item);
        });
    } else {
        console.log('Không tìm thấy phần tử .feature-item');
    }
});