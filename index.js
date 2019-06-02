import './sass/main.scss';

const manageLikes = () => {
    let likeButtons = document.querySelectorAll(".action--like");

    likeButtons.forEach((likeButton) => {
        likeButton.addEventListener('click', function() {
            if(!this.classList.contains('is-liked')) {
                this.classList.add("is-liked");
                let currentCount = parseInt(this.firstChild.nextSibling.dataset.count);
                this.firstChild.nextSibling.dataset.count = currentCount + 1;
            } else {
                this.classList.remove("is-liked");
                let currentCount = parseInt(this.firstChild.nextSibling.dataset.count);
                this.firstChild.nextSibling.dataset.count = currentCount - 1;
            }      
        })
    });
}

manageLikes();