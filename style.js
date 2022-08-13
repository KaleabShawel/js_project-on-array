const header = document.getElementById('style');
 header.style.color='#A28089';

 const body = document.getElementById('message');
 body.style.fontStyle='italic';
 body.style.fontSize=300;
 
 const button = document.getElementById('see-review');
 button.addEventListener('click', function(){
     const review = document.getElementById('review');
     if (review.classList.contains('d-none')){
     review.classList.remove('d-none');
     button.textContent = 'Close Review';
 }
 else {
    review.classList.add('d-none');
    button.textContent='SEE-Review';
 }
});