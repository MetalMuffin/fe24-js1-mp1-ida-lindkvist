for(let i=0; i<5; i++){
    const h1 = document.createElement('h1');
    document.body.appendChild(h1);
    h1.innerText = `Rad ${i+1}`;

    const newHue = 120 + i * 20;
    
    h1.style.backgroundColor = `hsl(${newHue}, 90%, 85%)`;
    h1.style.color = `hsl(240, 90%, 70%)`;
    h1.style.textAlign = 'center';
    h1.style.fontSize = `${(i + 1) * 10}px`;
}


// Del 2

// Första container
const container = document.createElement('div');
document.body.appendChild(container);

container.classList.add('container')

// Tre boxar i den stora containern
const box1 = document.createElement('div');
container.appendChild(box1);
box1.classList.add('box1')


const box2 = document.createElement('div');
container.appendChild(box2);
box2.classList.add('box2')


const box3 = document.createElement('div');
container.appendChild(box3);
box3.classList.add('box3')

// Loop 1 i box1
for(let i=0; i<10; i++){
    const div1 = document.createElement('div');
    div1.innerText = i;
    box1.appendChild(div1);
    div1.style.width = '70px'

    if(i==4){
        div1.style.backgroundColor = 'hsl(240, 70%, 80%)';
        div1.style.color = 'white'
    }
    else if (i%2==0){
        div1.style.backgroundColor = 'black'
        div1.style.color = 'white'
    }
    else {
        div1.style.backgroundColor = 'white'
    }
    
}

//Loop 2 i box2
for(let i=9; i>=0; i--){
    const div2 = document.createElement('div');
    div2.innerText = i;
    box2.appendChild(div2);
    div2.style.width = '70px'

    if (i%2==0){
        div2.style.backgroundColor = 'black'
        div2.style.color = 'white'
    }

    else {
        div2.style.backgroundColor = 'white'
    }

    if(i==8){
        div2.style.backgroundColor = 'hsl(240, 70%, 80%)';
        div2.style.color = 'white'
    }

}

//Loop 3 i box3
const number = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio']
for(let i=0; i<number.length; i++){
    const div3 = document.createElement('div');
    div3.innerText = number[i];
    box3.appendChild(div3);
    div3.style.width = '70px'

    if (i%2==0){
        div3.style.backgroundColor = 'black'
        div3.style.color = 'white'
    }

    else {
        div3.style.backgroundColor = 'white'
    }

    if(i==5){
        div3.style.backgroundColor = 'hsl(240, 70%, 80%)';
        div3.style.color = 'white'
    }
}

// En loop som loopar 3 gånger
//skapar en box per loop
//och har en forloop som loopar 10 gånger som skapar 10 divar