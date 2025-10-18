const hamburger = document.querySelector(".hamburger");
const mainContent = document.querySelector(".main-content");
const sidebar = document.getElementById("sidebar");
const overLay = document.querySelector(".overlay");
const overlayButton = document.querySelector(".overlay-close-btn");

hamburger.addEventListener("click", () => {
  if (window.innerWidth >= 998) {
    sidebar.classList.toggle("close");
    mainContent.classList.toggle("close");
  } else {
    sidebar.classList.toggle("open");
    mainContent.classList.toggle("open");
    overLay.classList.toggle("show");
  }
});

function closeSidebar() {
  sidebar.classList.remove("open");
  mainContent.classList.remove("open");
  overLay.classList.remove("show");
}

overLay.addEventListener("click", closeSidebar);
overlayButton.addEventListener("click", closeSidebar);

window.addEventListener("resize", () => {
  if (window.innerWidth >= 998) {
    sidebar.classList.remove("open");
  } else {
    sidebar.classList.remove("close");
  }
});

// Tab switching
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

// Close sidebar when clicking outside on mobile
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Find the sub-navigation item within the clicked item
    const subNavItem = item.querySelector(".sub-nav-item");

    // Toggle the 'active' class on the main clicked item
    item.classList.toggle("active");

    // If a sub-nav exists, toggle its 'active' class to hide/show it
    if (subNavItem) {
      subNavItem.classList.toggle("active");
    }
  });
});
