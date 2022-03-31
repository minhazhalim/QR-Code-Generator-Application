const wrapper = document.querySelector('.wrapper');
const button = wrapper.querySelector('.form button');
const input = wrapper.querySelector('.form input');
const image = wrapper.querySelector('.qr-code img');
let preValue;
button.addEventListener('click',() => {
     let qrValue = input.value.trim();
     if(!qrValue || preValue === qrValue) return;
     preValue = qrValue;
     button.innerText = 'Generating QR Code.....';
     image.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
     image.addEventListener('load',() => {
          wrapper.classList.add('active');
          button.innerText = 'Generate QR Code';
     });
});
input.addEventListener('keyup',() => {
     if(!input.value.trim()){
          wrapper.classList.remove('active');
          preValue = "";
     }
});