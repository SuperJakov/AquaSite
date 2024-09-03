const input = document.getElementById("searchbar");
function search() {
  console.time("Searching...");
  const searchValue = input.value.toLowerCase();

  const phoneElements = document.querySelectorAll(".phone-container");
  phoneElements.forEach((phoneElement) => {
    if (phoneElement.innerHTML.toLowerCase().includes(searchValue)) {
      phoneElement.style.display = "block";
      return;
    }
    phoneElement.style.display = "none";
  });

  console.timeEnd("Searching...");
}
