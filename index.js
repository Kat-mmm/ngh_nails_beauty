let productImg = document.getElementById('product-img');
const myList = document.querySelector('.links');
const listItems = myList.querySelectorAll('.nail');


function show(){
    productImg.src = './images/pb.jpg';
}

function show2(){
    productImg.src = './images/ombre.jpg';
}

function show3(){
    productImg.src = './images/frenchie.jpg';
}

function show4(){
    productImg.src = './images/plain-c.jpg';
}

function show5(){
    productImg.src = './images/acr-over.jpg';
}

function show6(){
    productImg.src = './images/pedi.jpeg';
}

function show7(){
    productImg.src = './images/soak.jpg';
}

function show8(){
    productImg.src = './images/male-nails.jpeg';
}

function show9(){
    productImg.src = './images/art.jpg';
}

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {

    for (let j = 0; j < listItems.length; j++) {
      listItems[j].classList.remove('active');
    }
    
    this.classList.add('active');
  });
}


