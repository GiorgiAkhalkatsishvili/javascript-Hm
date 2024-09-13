const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const text1 = document.querySelector(".texts")
const text2 = document.querySelector(".texts2");


tab1.addEventListener("click", () => {
  tab1.classList.add("border-tab");
  tab2.classList.remove("border-tab");
  text1.style.display = "block";
  text2.style.display = "none";
})

tab2.addEventListener("click", () => {
  tab2.classList.add("border-tab")
  tab1.classList.remove("border-tab")
  text2.style.display = "block";
  text1.style.display = "none";
})
