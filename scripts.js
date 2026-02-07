const projects = {
  project1: {
    title: "CubeSat Variable Emissivity Device",
    description:
      "Designed and tested an electrochromic-based variable emissivity device for CubeSat thermal control.",
    images: [
      "assets/project1/img1.jpg",
      "assets/project1/img2.jpg"
    ]
  },
  project2: {
    title: "Custom UAV Design",
    description:
      "Built and iteratively improved a UAV platform through crash testing, redesign, and validation.",
    images: [
      "assets/project2/img1.jpg",
      "assets/project2/img2.jpg"
    ]
  }
};

function openProject(key) {
  const project = projects[key];
  let html = `<h2>${project.title}</h2><p>${project.description}</p>`;
  project.images.forEach(img => {
    html += `<img src="${img}" style="width:100%; margin-top:15px;">`;
  });
  document.getElementById("modal-body").innerHTML = html;
  document.getElementById("project-modal").style.display = "block";
}

function closeProject() {
  document.getElementById("project-modal").style.display = "none";
}
