function getQueryParameter(name) {
  return new URLSearchParams(window.location.search).get(name);
}
console.log(getQueryParameter("phone"));

const image = document.getElementById("image");
const text = document.getElementById("text");
switch (getQueryParameter("phone")) {
  case 1:
    image.src = "../../Images/S10.svg";
    text.value = "Samsung Galaxy S10";
    break;
  case 2:
    image.src = "../../Images/S10+.svg";
    text.value = "Samsung Galaxy S10+";
    break;
  case 3:
    image.src = "../../Images/S10e.svg";
    text.value = "Samsung Galaxy S10e (beyond0lte)";
    break;
  case 4:
    image.src = "../../Images/X12pro.svg";
    text.value = "Xiaomi 12 pro (zeus)";
    break;
  case 5:
    image.src = "../../Images/Xmi6x.svg";
    text.value = "Xiaomi mi6x (wayne)";
    break;
  case 6:
    image.src = "../../Images/XRnote124g.svg";
    text.value = "Xiaomi Redmi Note 12 (4G)";
    break;
  case 7:
    image.src = "../../Images/XRnote125g.svg";
    text.value = "Xiaomi Redmi Note 12 (5G)";
    break;
  case 8:
    image.src = "../../Images/Xpocox5.svg";
    text.value = "Xiaomi Poco x5 (5G)";
    break;
  case 9:
    image.src = "../../Images/Gpixel6.svg";
    text.value = "Google pixel 6";
    break;
  case 10:
    image.src = "../../Images/Gpixel6pro.svg";
    text.value = "Google pixel 6 pro";
    break;
}
