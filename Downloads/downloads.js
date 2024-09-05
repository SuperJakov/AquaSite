const input = document.querySelector(".search");

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
input.addEventListener("keyup", search);
// Initial search
search();

phoneNum = null;
function more(phone) {
  phone = phoneNum;
  document.open("./More/index.html");
  export {phoneNum};
}
