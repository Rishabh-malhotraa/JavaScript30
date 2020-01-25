const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#FBF2D2', '#819975', '#DE6D43', '#424846', '#F6CDE6', '#FFE5BC', '#DDF9D9', '#ADD9FE', '#FCD2A8', '#EC6778', '#007D75', '#529A86'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {

    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    //var random = shuffle(numbers);

    let random = Math.floor(Math.random() * colors.length)
    console.log(random);
    bodyBcg.style.backgroundColor = colors[random];
}