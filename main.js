const add = document.querySelector('.add');
const pDiv =document.querySelector('.pDiv');
const imgDiv = document.querySelector('.imgDiv')
const mainDiv = document.querySelector('.mainDiv')
const inputText = document.querySelector('.input-text');
const input = document.querySelector('.input');


add.addEventListener('click', limit);
inputText.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        limit();
    }
});

function limit(){
  if(pDiv.childElementCount < 4) {
    input.style.display = 'block';
  }
  if (pDiv.childElementCount == 4) {
    input.style.display = 'none'
  }
  else if (pDiv.childElementCount < 4) {
    input.style.display = 'block';
  }



}

add.addEventListener('click', function(){
    const p = document.createElement('p')
    p.classList.add('pText');
    pDiv.appendChild(p);
    p.innerHTML = inputText.value;
    inputText.value = '';
    
  

    const newImg = document.createElement('img');
    newImg.classList.add('newImg');
    newImg.src = '/Icons/GreyDel.svg';
    imgDiv.appendChild(newImg);
    const delIcon = document.querySelectorAll('.newImg')

    delIcon.forEach(el =>
        el.addEventListener('mouseover' ,function(e){
            e.target.src = './Icons/PurpleDel.svg';
        }))
        delIcon.forEach(el =>
            el.addEventListener('mouseout' ,function(e){
            e.target.src = './Icons/GreyDel.svg';
        }))


    newImg.addEventListener('click', function(e) {
            pDiv.removeChild(p);
            imgDiv.removeChild(newImg)
        })
        // if(d== 4) {
        //     inputText.style.display = 'none';
        //   }
        //   if (pDiv.childElementCount == 4) {
        //     input.style.display = 'none'
        //   }
        //   else if (pDiv.childElementCount ==4 ) {
        //     inputText.style.display = 'block';
        //   }



})