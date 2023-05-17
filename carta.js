 export class Carta{

    static possibleValues = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'Joker'];
    static possibleNipes = ['♤', '♡', '♢', '♧'];

    constructor(nipe, value, id){
        this.nipe = nipe
        this.value = value
        this.id = `${this.value}${this.nipe}`
    }

    get nipeCarta() {
        return this.nipe
    }

    get valueCarta() {
        return this.value
    }

    get idCarta() {
        return this.id
    }

    set nipeCarta(nipeCarta) {
        this.nipe = nipeCarta
    }

    set valueCarta(valueCarta) {
        this.value = valueCarta
    }

    set idCarta(idCarta) {
        this.id = idCarta
    }


    randomCard() {
        const v = Carta.possibleValues[Math.floor(Math.random()*Carta.possibleValues.length)]
        const n = (v === 'Joker') ? '' : Carta.possibleNipes[Math.floor(Math.random() * Carta.possibleNipes.length)];
        const interpoler = Math.floor(Math.random()*1000)
        this.value = v
        this.nipe = n
        this.id = `${v}${n}${interpoler}`
    }

    displayCard(local, height, backSideUp=false) {
        const parent = document.getElementById(local)
        const container = document.createElement('div')
        parent.style.perspective = '400px'
        container.style.height = `${height}`
        container.style.width = `calc(${height}/1.56)`
        container.style.position = 'absolute'
        container.style.transformStyle = 'preserve-3d'
        container.classList.add('displayedCard')

        const frontSide = document.createElement('div')
        frontSide.setAttribute('class', 'cardLimits')
        frontSide.setAttribute('id', `${this.id}`)
        frontSide.setAttribute('style', `display: flex;
                                    flex-direction: column;
                                    background-color: rgb(40, 40, 40);
                                    height:${height};
                                    width:calc(${height}/1.56);
                                    border-radius: 5%;
                                    color: rgb(187, 194, 204);
                                    justify-content: space-around;
                                    align-items: center;
                                    font-size: calc(${height}/7.5);
                                    position: absolute;
                                    backface-visibility: hidden;`)
        const valueUp = document.createElement('p')
        valueUp.setAttribute('class', 'cardValue')
        valueUp.innerHTML= `${this.value}`
        const valueDown = document.createElement('p')
        valueDown.setAttribute('class', 'cardDown')
        valueDown.setAttribute('style', 'rotate: 180deg')
        valueDown.innerHTML = `${this.value}`
        const inner = document.createElement('div')
        inner.setAttribute('class', 'nipe')
        inner.setAttribute('style', `display: flex;
                                    height: calc(${height}*0.63);
                                    width: calc(${height}*0.40);
                                    border: calc(${height}/5) rgb(187, 194, 204) solid;
                                    align-items: center;
                                    justify-content: center;
                                    border-width: calc(${height}/150) 0px calc(${height}/150) 0px;
                                    font-size: calc(${height}/3);
                                    border-radius: calc(${height}/30);
                                    background-color: rgb(50, 50, 50);`) //deixar com cor diferente?                                    
        inner.innerHTML = `${this.nipe}`
        frontSide.appendChild(valueUp)
        frontSide.appendChild(inner)
        frontSide.appendChild(valueDown)
        const backSide = document.createElement('div')
        backSide.style.backgroundColor = 'rgb(50, 50, 50)'
        backSide.style.display = 'flex'
        backSide.style.flexDirection = 'column'
        backSide.style.justifyContent = 'center'
        backSide.style.alignContent = 'center'
        backSide.style.position = 'absolute'
        backSide.innerHTML = 'JOGOS DA MANGA'
        backSide.style.position = 'absolute'
        backSide.style.height =  `${height}`
        backSide.style.width =  `calc(${height}/1.56)`
        backSide.style.backfaceVisibility = 'hidden'
        backSide.style.color = 'RGB(200,200,200)'
        //backSide.style.border = '0.01px solid white' Deixar melhor
        backSide.style.borderRadius = '5%'
        backSide.style.textAlign = 'center'
        backSide.setAttribute('class', 'backSide')
        parent.appendChild(container)
        container.appendChild(frontSide)
        container.appendChild(backSide)
        if (backSideUp) {
            frontSide.style.transform = 'rotateY(180deg)'
        }else {
            backSide.style.transform = 'rotateY(180deg)'
        }
    }

    moveRotateCard(x, y, z, rotateX, rotateY, rotateZ, scale, time) {
        return new Promise((resolve) => {
          let card = document.getElementById(`${this.id}`)
          card.parentElement.style.transition = `all ${time}`
      
          for (let i = 0; i < 10; i++) {
            setTimeout(() => {
              card.parentElement.style.transform = `translateX(${x}) translateY(${y}) translateZ(${z}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`
              if (i === 9) {
                resolve()
              }
            }, i * 100)
          }
        })
      }
      

    moveRotateCardPreset(x, y, z, rotateX, rotateY, rotateZ, scale, time) {
        let card = document.getElementById(`${this.id}`)
        card.parentElement.style.transition = `all ${time}`
        card.parentElement.style.transform = `translateX(${x}) translateY(${y}) translateZ(${z}) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`

    }
}



