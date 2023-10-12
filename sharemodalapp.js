const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
//modal open function
const openmodal=()=>{
    console.log('modal is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
};
//modal close function
const closemodal=()=>{
    console.log('modal is close');
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
};