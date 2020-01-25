const colorBtn2 = document.querySelector('.colorBtn');

colorBtn2.addEventListener('click', createRipple);

function createRipple(e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.pageX - screenLeft - this.offsetLeft - d / 2 + "px";
    circle.style.top = e.pageY - screenTop - this.offsetTop - d / 2 + "px";

    circle.classList.add('ripple');
}