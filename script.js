document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            const targetId = this.getAttribute("href");

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* ==========================================
       ACTIVE NAVIGATION WHILE SCROLLING
    ========================================== */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    });

});
/* =====================================================
   EXPERTISE / BUSINESS DETAILS
===================================================== */

function openDetails(title, subtitle, description) {

    const modal = document.getElementById("detailsModal");

    document.getElementById("detailsTitle").textContent = title;

    document.getElementById("detailsSubtitle").textContent = subtitle;

    document.getElementById("detailsDescription").textContent = description;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeDetails() {

    const modal = document.getElementById("detailsModal");

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeDetails();
    }

});