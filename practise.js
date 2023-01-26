const btn = document.querySelector(".btn1");
const remove = document.querySelector(".btn2");

const onbuttonClick = function () {
  console.log("hello a u click me!");
};

btn.addEventListener("click", onbuttonClick);

remove.addEventListener("click", () => {
  btn.removeEventListener("click", onbuttonClick);
});
