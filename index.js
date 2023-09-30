let productImg = document.getElementById('product-img');
const myList = document.querySelector('.links');
const listItems = myList.querySelectorAll('.nail');

function show(){
    productImg.src = './images/ngh-logo.png';
}

function show2(){
    productImg.src = './images/refill.JPG';
}

function show3(){
    productImg.src = './images/frenchie.jpg';
}

function show4(){
    productImg.src = './images/ctips.JPG';
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

function validatePhoneNumber(input) {
    const phoneNumber = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    const phoneNumberPattern = /^[0][6-8][0-9]{8}$/; // South African mobile number pattern
    
    if (phoneNumberPattern.test(phoneNumber)) {
      input.setCustomValidity(''); // Valid input
    } else {
      input.setCustomValidity('Please enter a valid South African phone number'); // Invalid input
    }
}
  

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener('click', function() {

    for (let j = 0; j < listItems.length; j++) {
      listItems[j].classList.remove('active');
    }
    
    this.classList.add('active');
  });
}




