const slides = document.querySelectorAll('.slide')
const btn = document.querySelector('.btn')


for(const slide of slides){
    slide.addEventListener('click',() =>{

        clearActive()

        slide.classList.add('active');
    })
}


function clearActive(){
    slides.forEach(slide => slide.classList.remove('active'));
}

btn.addEventListener('click',() => {
    clearActive();
})