function openModal(course) {
    const modal = document.getElementById('courseModal');
    const title = document.getElementById('modalTitle');
    const desc = document.getElementById('modalDescription');
    const subtitle = document.getElementById('modalSubtitle');

    if (course === 'programming') {
        title.innerText = 'برمجة تطبيقات الويب';
        subtitle.innerText = 'تطوير شامل باستخدام HTML, CSS, JS, Laravel';
        desc.innerText = 'تعلم تطوير تطبيقات الويب خطوة بخطوة باستخدام أحدث التقنيات والمنهجيات العملية.';
    } else if (course === 'design') {
        title.innerText = 'تصميم الجرافيك';
        subtitle.innerText = 'احترف فنون التصميم الجرافيكي والبصري';
        desc.innerText = 'احترف فنون التصميم الجرافيكي والبصري باستخدام أشهر البرامج والأدوات المتخصصة.';
    } else if (course === 'marketing') {
        title.innerText = 'التسويق الرقمي';
        subtitle.innerText = 'استراتيجيات التسويق الرقمي الحديثة';
        desc.innerText = 'تعلم استراتيجيات التسويق الرقمي الحديثة وإدارة الحملات الإعلانية بفعالية.';
    } else if (course === 'data') {
        title.innerText = 'تحليل البيانات';
        subtitle.innerText = 'اكتشف عالم البيانات وتعلم كيفية تحليلها';
        desc.innerText = 'اكتشف عالم البيانات وتعلم كيفية تحليلها واستخراج المعلومات القيمة منها.';
    } else if (course === 'ai') {
        title.innerText = 'الذكاء الاصطناعي';
        subtitle.innerText = 'أساسيات الذكاء الاصطناعي والتعلم الآلي';
        desc.innerText = 'تعلم أساسيات الذكاء الاصطناعي والتعلم الآلي وتطبيقاتهما في مختلف المجالات.';
    } else if (course === 'business') {
        title.innerText = 'إدارة الأعمال';
        subtitle.innerText = 'تطوير مهارات القيادة وإدارة الفرق';
        desc.innerText = 'تطوير مهارات القيادة وإدارة الفرق والمشاريع لتحقيق النجاح في عالم الأعمال.';
    }

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('courseModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('courseModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all stat items
document.querySelectorAll('.stat-item').forEach(item => {
    observer.observe(item);
});


// Curriculum toggle functionality
function toggleCurriculum(element) {
    const content = element.nextElementSibling;
    const toggle = element.querySelector('.curriculum-toggle');

    if (content.classList.contains('active')) {
        content.classList.remove('active');
        toggle.style.transform = 'rotate(0deg)';
    } else {
        // Close all other curriculum items
        document.querySelectorAll('.curriculum-content').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.curriculum-toggle').forEach(item => {
            item.style.transform = 'rotate(0deg)';
        });

        // Open current item
        content.classList.add('active');
        toggle.style.transform = 'rotate(180deg)';
    }
}

