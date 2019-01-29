import './sass/custom.scss';
import './sass/utility.scss';

const manageLikes = () => {
    let likes = document.querySelector("[data-likes]");
    let heart = document.querySelector("[data-heart]");
    likes.innerHTML = likes.dataset.likes;
    heart.addEventListener("click", () => {
        likes.innerHTML = likes.dataset.likes + 1;
    })
}

manageLikes();