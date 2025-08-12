// script.js
document.querySelectorAll(".likeButton").forEach(button => {
  const postId = button.getAttribute("data-post");
  let count = 0;

  button.addEventListener("click", () => {
    count++;
    document.getElementById(`likeCount${postId}`).textContent = count;

    // Optional: Add a message or animation here
    console.log(`Post ${postId} liked ${count} times`);
  });
});