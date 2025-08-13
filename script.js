const likeButtons = document.querySelectorAll(".likeBtn");
const likeCounts = document.querySelectorAll(".likeCount");

likeButtons.forEach((btn, index) => {
  let count = 0;
  btn.addEventListener("click", () => {
    count++;
    likeCounts[index].textContent = `Likes: ${count}`;
  });
});