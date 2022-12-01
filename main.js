const add = document.querySelector('.add');
const pDiv =document.querySelector('.pDiv');
const imgDiv = document.querySelector('.imgDiv')
const mainDiv = document.querySelector('.mainDiv')
const inputText = document.querySelector('.input-text');
const input = document.querySelector('.input');
const sortIcon = document.querySelector('sort-icon')


add.addEventListener('click', limit);
inputText.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        limit()
        add.click()
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
    if (pDiv.childElementCount == 5 || inputText.value == '') {
    return
}
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
            if (pDiv.childElementCount == 0) {
                input.style.display = 'block';
            }
        })
})

const sortDown = document.querySelector('.sort-icon svg:first-child');
const sortUp = document.querySelector('.sort-icon svg:last-child')
sortDown.addEventListener('click', function () {
    this.style.display = 'none';
    sortUp.style.display = 'inline';
    const tasks = [...document.querySelectorAll('.pDiv p')];
    tasks.sort((a, b) => { return parseInt(b.innerText) - parseInt(a.innerText) });
    pDiv.replaceChildren(...pDiv.children, ...tasks)
});
sortUp.addEventListener('click', function () {
    this.style.display = 'none';
    sortDown.style.display = 'inline';
    const tasks = [...document.querySelectorAll('.pText')];
    tasks.sort((a, b) => { return parseInt(a.innerText) - parseInt(b.innerText) });
    pDiv.replaceChildren(...pDiv.children, ...tasks)
})