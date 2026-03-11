// MODUS Script.js

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('main-nav');
    const reveals = document.querySelectorAll('.reveal');

    // 1. Navigation Scroll Effect
    // 스크롤이 일정량 이상 내려가면 투명 배경에서 불투명 배경으로 전환
    const handleScroll = () => {
        if (window.scrollY > 100) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }

        // 2. Scroll Reveal Animation
        // 요소가 화면에 나타날 때 애니메이션 실행
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150; // 요소가 나타날 임계치

            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // 초기 로드 시 한 번 실행 후 스크롤 이벤트 등록
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // 3. Simple Menu Interaction
    // 모바일 메뉴 등 추가적인 인터랙션 정의
    const menuBtn = document.getElementById('menu-toggle');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            // 메뉴 펼침 로직 (필요 시 확장)
            console.log('Mobile Menu Opened');
        });
    }

    // 4. Parallax Effect for Hero
    // 리모와 느낌의 부드러운 이미지 움직임을 위한 로직
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('header img');
        if (heroImg) {
            heroImg.style.transform = `scale(${1.1 + scrolled * 0.0001}) translateY(${scrolled * 0.1}px)`;
        }
    });
});
