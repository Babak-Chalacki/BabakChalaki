const area = document.querySelector(".galaxy");

let amountMeteor = 15;
let amountStar = 200;
let i = 0;
let j = 0;
let k = 0;

function galaxy() {

  while(i < amountMeteor){ // meteor from top
    let drop = document.createElement('i');
    let size = Math.random() * 2 + 0.5;
    let posX = Math.floor(Math.random() * area.offsetWidth);
    let delay = Math.random() * - 20;
    let duration = Math.random() * 20 + 3;

    drop.style.width = size + 'px';
    drop.style.left = posX + 'px';
    drop.style.top = 0;
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    area.appendChild(drop);
    i++;
  }

  while(k < amountMeteor*2){ // meteor from right
    let drop = document.createElement('i');
    let size = Math.random() * 2 + 0.5;
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let delay = Math.random() * -20;
    let duration = Math.random() * 30 + 3;

    drop.style.width = size + 'px';
    drop.style.right = 0;
    drop.style.top = posY + 'px';
    drop.style.animationDelay = delay + 's';
    drop.style.animationDuration = duration + 's';
    area.appendChild(drop);
    k++;
  }

  while(j < amountStar){
    let star = document.createElement('j');
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * area.offsetWidth * 2);
    let posY = Math.floor(Math.random() * area.offsetHeight);
    let delay = Math.random() * 100 + 50;
    let duration = Math.random() * 300 + 15;

    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = posX + 'px';
    star.style.top =  posY + 'px';
    star.style.animationDuration = duration + 's';

    area.appendChild(star);
    j++;
  }
}

galaxy();
