/**===== ASIDE =====**/
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++) {

    const a = navList[i].querySelector("a");
    a.addEventListener("click", function() {

        // Remove the "active" class from all sections
        allSection.forEach(section => section.classList.remove("active")); 

        // Add the "active" class to the target section
        const targetSection = document.querySelector(this.getAttribute("href"));
        targetSection.classList.add("active");

        // Remove the "back-section" class from all sections
        allSection.forEach(section => section.classList.remove("back-section")); 

        // Add the "back-section" class to all sections except the active one
        allSection.forEach(section => {
            if (section !== targetSection) {
                section.classList.add("back-section");
            }
        });

        // Remove the "active" class from all navigation links
        navList.forEach(li => li.querySelector("a").classList.remove("active"));

        // Add the "active" class to the clicked navigation link
        this.classList.add("active");

        if (window.innerWidth < 1200) {
            asideSectionToggleBtn(); 
        }
    })
}

