const generateForm = document.getElementById('generate-form');
const qrCode = document.getElementById('qrcode');
const generateQRCode = (url,size) => {
     const qrcode = new QRCode('qrcode',{
          text: url,
          width: size,
          height: size,
     });
};
const clearUI = () => {
     qrCode.innerHTML = "";
     const saveLink = document.getElementById('save-link');
     if(saveLink) saveLink.remove();
}
const showSpinner = () => {
     const spinner = document.getElementById('spinner');
     spinner.style.display = 'block';
}
const hideSpinner = () => {
     const spinner = document.getElementById('spinner');
     spinner.style.display = 'none';
}
hideSpinner();
const createSaveButton = (saveURL) => {
     const a = document.createElement('a');
     a.id = 'save-link';
     a.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold m-auto my-5 py-2 rounded w-1/3';
     a.href = saveURL;
     a.download = 'qrcode';
     a.innerHTML = 'Save Image';
     document.getElementById('generated').appendChild(a);
}
const onGenerateSubmit = (event) => {
     event.preventDefault();
     clearUI();
     const url = document.getElementById('url').value;
     const size = document.getElementById('size').value;
     if(url === ""){
          alert('Please Enter a URL');
     }else{
          showSpinner();
          setTimeout(() => {
               hideSpinner();
               generateQRCode(url,size);
               setTimeout(() => {
                    const img = qrCode.querySelector('img').src;
                    createSaveButton(img);
               },50);
          },1000);
     }
};
generateForm.addEventListener('submit',onGenerateSubmit);