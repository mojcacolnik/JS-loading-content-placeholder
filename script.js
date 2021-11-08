const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile-img");
const authorName = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bgs_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://source.unsplash.com/random/250x150" alt="" />';

  title.innerHTML = "Lorem Ipsum";
  excerpt.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. laboriosamsimilique!";
  profileImg.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';

  authorName.innerHTML = "John Doe";
  date.innerHTML = "Nov 08, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bgs_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
