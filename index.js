import './sass/custom.scss';
import './sass/utility.scss';

const manageLikes = () => {
    let likes = document.querySelector("[data-likes]");
    likes.innerHTML = likes.dataset.likes;
}

manageLikes();