
    document.addEventListener("DOMContentLoaded", function() {
        const openCreatePageBtn = document.getElementById("openCreatePageBtn");
        const closeCreatePageBtn = document.getElementById("closeCreatePageBtn");
        const createbtn = document.getElementById("createbtn")
        const createbtn1 = document.getElementById("createbtn1")
        const createPage = document.getElementById("createPage");
        const fullscreenBtn = document.getElementById("fullscreenBtn");
        const openLoginPageBtn = document.getElementById("openLoginPageBtn");
        const closeLoginPageBtn = document.getElementById("closeLoginPageBtn");
        const loginPage = document.getElementById("loginPage");
    
        openCreatePageBtn.addEventListener("click", function() {
            createPage.style.display = "flex";
        });
    
        closeCreatePageBtn.addEventListener("click", function() {
            createPage.style.display = "none";
        });

        createbtn.addEventListener("click", function() {
            createPage.style.display = "flex";
        });

        createbtn1.addEventListener("click", function() {
            createPage.style.display = "flex";
            loginPage.style.display= "none"
        });

        fullscreenBtn.addEventListener("click", function() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else {
                document.exitFullscreen();
            }
        });

        openLoginPageBtn.addEventListener("click", function() {
            loginPage.style.display = "flex";
            createPage.style.display= "none"
        });
    
        closeLoginPageBtn.addEventListener("click", function() {
            loginPage.style.display = "none";
        });

    });
    