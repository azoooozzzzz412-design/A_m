window.addEventListener("load", () => {
    document.body.classList.add("page-loaded");

    const contactBox = document.querySelector(".contact-box");
    if (contactBox) {
        contactBox.classList.add("show");
    }

    animateOnScroll();
});

// زر الهيرو → سكرول ناعم
const heroBtn = document.querySelector(".hero-btn");
if (heroBtn) {
    heroBtn.onclick = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };
}

// عدّاد الأرقام
const nums = document.querySelectorAll(".num");

nums.forEach(num => {
    let start = 0;
    const end = parseInt(num.getAttribute("data-target"));
    const speed = 20;

    const counter = setInterval(() => {
        if (start < end) {
            start++;
            num.textContent = start;
        } else {
            clearInterval(counter);
        }
    }, speed);
});

// عناصر الأنيميشن
const animatedElements = document.querySelectorAll(
    ".section, .card, .feature, .stat, .hero-title, .hero-desc, .section-title"
);

function animateOnScroll() {
    animatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);

// EmailJS
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.send("service_j5wqpcb", "template_mmfhcfl", {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }).then(() => {
            alert("تم إرسال رسالتك بنجاح يا عز!");
        }, (error) => {
            alert("حدث خطأ أثناء الإرسال");
        });
    });
}
