let showProjectsBoolean = false;
let x = document.getElementById("projects_div");

function showProjects() {
    showProjectsBoolean = !showProjectsBoolean;
    
    if (showProjectsBoolean) { 
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
    
    return showProjectsBoolean;
}





