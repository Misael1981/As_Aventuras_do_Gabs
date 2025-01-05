/**===== ASIDE =====**/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {

        allSection.forEach(section => section.classList.remove("active")); 

        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.classList.add("active");

        allSection.forEach(section => section.classList.remove("back-section")); 

        allSection.forEach(section => {
            if (section !== targetSection) {
                section.classList.add("back-section");
            }
        });

        navList.forEach(li => li.querySelector("a").classList.remove("active"));

        this.classList.add("active");

        if (window.innerWidth < 1200) {
            asideSectionToggleBtn(); 
        }
    })
}

