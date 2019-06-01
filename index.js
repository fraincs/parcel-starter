import './sass/main.scss';

/*const manageLikes = () => {
    let likes = document.querySelector("[data-likes]");
    likes.innerHTML = likes.dataset.likes;
}

manageLikes();

const manageComments = () => {
    let comments = document.querySelector("[data-comments]");
    comments.innerHTML = comments.dataset.comments;
}

manageComments();*/

let buttons = document.querySelectorAll(".action");

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        let currentCount = parseInt(this.firstChild.nextSibling.dataset.count);
        this.firstChild.nextSibling.dataset.count = currentCount + 1;
    })
});