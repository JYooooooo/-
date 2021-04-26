const trun = document.querySelector('.trun');
const trunRound = document.querySelector('.trun-round');
const content = document.querySelector('.content');
let flag = 0;
trunRound.addEventListener("click", function () {
  /*现在只会写这种 */
  if (flag == 0) {
    this.style.transform = "translateX(70px)";
    content.classList.add("rota");
    flag = 1;
  } else {
    this.style.transform = "translateX(0px)";
    content.classList.remove("rota");
    flag = 0;
  }

})