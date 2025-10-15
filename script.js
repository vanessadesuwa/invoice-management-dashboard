function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}

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
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");

  if (
    window.innerWidth <= 768 &&
    !sidebar.contains(event.target) &&
    event.target !== hamburger
  ) {
    sidebar.classList.remove("open");
  }
});
