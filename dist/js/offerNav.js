const navs = document.querySelectorAll(".li");
const contents = document.querySelectorAll(".offer__details");

navs.forEach((nav) => {
  nav.addEventListener("click", () => {
    removeActiveTab();
    nav.classList.add("active");
    const activeContent = document.querySelector(`#${nav.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveTab() {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
}

function removeActiveContent() {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
}
