const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "You got my love too😘";
  gif.src = "https://media1.tenor.com/m/cy-2Hwy0XdMAAAAC/jessica-rabbit-roger-rabbit.gif";
});

noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  
  const maxX = wrapperRect.width- noBtnRect.width;
  const maxY = wrapperRect.height- noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX+ "px";
  noBtn.style.top = randomY+ "px";
});