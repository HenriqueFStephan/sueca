import { Carta } from "./carta.js";

class Deck {

    constructor(deck, usedCards){
        this.deck = [['A', '♤'], ['2', '♤'], ['3', '♤'], ['4', '♤'], ['5', '♤'], ['6', '♤'], ['7', '♤'], ['8', '♤'], ['9', '♤'], ['10', '♤'], ['J', '♤'], ['Q', '♤'], ['K', '♤'],
        ['A', '♡'], ['2', '♡'], ['3', '♡'], ['4', '♡'], ['5', '♡'], ['6', '♡'], ['7', '♡'], ['8', '♡'], ['9', '♡'], ['10', '♡'], ['J', '♡'], ['Q', '♡'], ['K', '♡'],
        ['A', '♢'], ['2', '♢'], ['3', '♢'], ['4', '♢'], ['5', '♢'], ['6', '♢'], ['7', '♢'], ['8', '♢'], ['9', '♢'], ['10', '♢'], ['J', '♢'], ['Q', '♢'], ['K', '♢'],
        ['A', '♧'], ['2', '♧'], ['3', '♧'], ['4', '♧'], ['5', '♧'], ['6', '♧'], ['7', '♧'], ['8', '♧'], ['9', '♧'], ['10', '♧'], ['J', '♧'], ['Q', '♧'], ['K', '♧'],
        ['Joker', ' '], ['Joker', '']];
        this.usedCards = [];
    }

    resetDeck() {
        this.deck = [['A', '♤'], ['2', '♤'], ['3', '♤'], ['4', '♤'], ['5', '♤'], ['6', '♤'], ['7', '♤'], ['8', '♤'], ['9', '♤'], ['10', '♤'], ['J', '♤'], ['Q', '♤'], ['K', '♤'],
        ['A', '♡'], ['2', '♡'], ['3', '♡'], ['4', '♡'], ['5', '♡'], ['6', '♡'], ['7', '♡'], ['8', '♡'], ['9', '♡'], ['10', '♡'], ['J', '♡'], ['Q', '♡'], ['K', '♡'],
        ['A', '♢'], ['2', '♢'], ['3', '♢'], ['4', '♢'], ['5', '♢'], ['6', '♢'], ['7', '♢'], ['8', '♢'], ['9', '♢'], ['10', '♢'], ['J', '♢'], ['Q', '♢'], ['K', '♢'],
        ['A', '♧'], ['2', '♧'], ['3', '♧'], ['4', '♧'], ['5', '♧'], ['6', '♧'], ['7', '♧'], ['8', '♧'], ['9', '♧'], ['10', '♧'], ['J', '♧'], ['Q', '♧'], ['K', '♧'],
        ['Joker', ' '], ['Joker', '']];
        this.usedCards = [];
    }

    placeDeck(local, height, random, downSideUp, entrie=0) {
        if (!random) {
            // If random is false, just display the cards in order
            for (let i = 0; i < 54; i++) {
                let card = new Carta(this.deck[i][1], this.deck[i][0], i, downSideUp);
                card.displayCard(local, height, true);
                card.moveRotateCardPreset(`calc(0.2*${i}px)`, `calc(-0.2*${i}px)`, 0, 15, 0, 0, 1, 0);
                entrie += 1
            }
        } else {
            // If random is true, shuffle the deck using the Fisher-Yates algorithm
            let shuffledDeck = [...this.deck];
            for (let i = shuffledDeck.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
            }
    
            // Display the shuffled cards
            for (let i = 0; i < 54; i++) {
                let card = new Carta(shuffledDeck[i][1], shuffledDeck[i][0], i, downSideUp);
                card.displayCard(local, height, true);
                card.moveRotateCardPreset(`calc(0.2*${entrie}px)`, `calc(-0.2*${entrie}px)`, 0, 5, 0, 0, 1, '1s')
                entrie += 1
            }
        }
    }
    

    
    draw() {
        buttom.innerHTML = 'draw'
        if (this.deck.length >= 1) {
            let card = new Carta;
            let prosseguir = false;
            card.random();
            for (let i in this.deck) {
                if (this.deck[i].includes(card.valor)) {
                    if (this.deck[i].includes(card.nipe)) {
                        prosseguir = true
                        {break}
                    }else if (this.deck[i] == 'joker') {
                        prosseguir = true
                        {break}
                    }
                }
            } 
            if (prosseguir != true){
                this.draw();
            }
            else if (prosseguir == true) {
                this.usedCards.push([card.valor, card.nipe]);
                for (let i in this.deck) {
                    if (this.deck[i].includes(card.valor)) {
                        if (this.deck[i].includes(card.nipe)) {
                            this.deck.splice(i, 1)
                            card.displayCard(card.valor, card.nipe);
                            exibiRegra(card.valor);
                        }else if (card.valor == 'joker') {
                            this.deck.splice(i, 1)
                            card.displayCard(card.valor, card.nipe);
                            exibiRegra(card.valor);
                        }
                    }
                }
                return [card.valor, card.nipe];
            }
        }else {
            let cardSlot = document.getElementById('main');
            cardSlot.innerHTML = ''
            let newCard = document.createElement('div');
            cardSlot.appendChild(newCard);
            newCard.innerHTML = 'Acabou o Baralho, Reembaralhe';
            const buttom = document.getElementById('draw');
            buttom.innerHTML = 'Shuffle';
            };
        };
}

const regras = {'A': '1 shot',
                '2': '2 shots',
                '3': '3 shots',
                '4': 'Verdade, Desafio ou Shot',
                '5': 'Eu fui para a lua e levei...',
                '6': 'Coloca regra',
                '7': 'Continência',
                '8': 'Espelho',
                '9': 'Tirar regra',
                '10': 'Jogo do pi',
                'J': 'Homens bebem',
                'Q': 'Mulheres bebem',
                'K': 'Não-Binários bebem',
                'Joker': 'SE FUDEU, beba 2 shots'}

const regrasLongas = {'a': 'O jogador que tirou a carta escolhe 1 pessoa para dar um shot',
                      '2': 'O jogador que tirou a carta distribui 2 shots entre os participantes',
                      '3': 'O jogador que tirou a carta distribui 3 shots entre os participantes',
                      '4': 'Jogue uma rodade de verdade ou desafio, caso não queira jogar, beba 1 shot',
                      '5': 'Jogue uma rodade de fui a lua e levei... O perdedor bebe',
                      '6': 'O jogador escolhe uma regra, qualquer pessoa que quebrar a regra bebe',
                      '7': 'O jogador que tirou a carta pode bater continência a qualquer momento, o último a o imitar bebe',
                      '8': 'Coloque um espelho em um jogador x e um jogador y, toda vez q x beber, y bebe',
                      '9': 'O jogador escolhe uma regra em vigor, esta regra não é mais válida',
                      '10': 'Jogue uma rodada do "Jogo do pi", o perdedor bebe',
                      'j': 'Todos os homens bebem',
                      'q': 'Todas as mulheres bebem',
                      'k': 'Todos os não-binários bebem',
                      'joker': 'Já ta explicado'}

                      
let regra = document.createElement('p');
regra.setAttribute('class', 'regra');
regra.setAttribute('id', 'regra');
function exibiRegra(value) {
    regra.innerHTML = `${regras[value]}`;
    let local = document.getElementById('main');
    local.appendChild(regra);
    regra.addEventListener('click', function() {
        regra.innerHTML = `${regrasLongas[value]}`;
    })
}


function handleClick(event) {
    var clickedElement = event.target.closest('.displayedCard');
    var previousCard = clickedElement.nextSibling;
    let value = clickedElement.firstChild.firstChild.innerHTML
    clickedElement.style.transition = '1s all'
    if (!previousCard){
        clickedElement.style.transform = `translateY(-200px) rotateY(180deg) scale(2)`
    }
    else {
        previousCard.style.transition = '1s all'
        clickedElement.style.transform = `translateY(-200px) rotateY(180deg) scale(2)`
        previousCard.style.transform = `translateY(-200px) translateX(800px) rotateY(180deg) scale(2)`
    }
    exibiRegra(value)
}

// Add the click event listeners to the document
document.addEventListener("click", handleClick);


let deck = new Deck
deck.placeDeck('cardSlot', '20vh', true, true)






