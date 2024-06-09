document.querySelector(".scroll-container").addEventListener("scroll", () => {
  const info = document.querySelector(".info");
  const scrollPosition = document.querySelector(".scroll-container").scrollTop;

  if (scrollPosition > 100) {
    // Adjust the value to your needs
    info.textContent = "This is the new information after scrolling.";
    info.style.backgroundColor = "lightcoral";
  } else {
    info.textContent = "This is the initial information.";
    info.style.backgroundColor = "lightblue";
  }
});
