
class Deck {

    constructor(deck, usedCards){
        this.deck = [['a', 'copas'], ['2', 'copas'], ['3', 'copas'], ['4', 'copas'], ['5', 'copas'], ['6', 'copas'], ['7', 'copas'], ['8', 'copas'], ['9', 'copas'], ['10', 'copas'], ['j', 'copas'], ['q', 'copas'], ['k', 'copas'],
        ['a', 'espada'], ['2', 'espada'], ['3', 'espada'], ['4', 'espada'], ['5', 'espada'], ['6', 'espada'], ['7', 'espada'], ['8', 'espada'], ['9', 'espada'], ['10', 'espada'], ['j', 'espada'], ['q', 'espada'], ['k', 'espada'],
        ['a', 'ouro'], ['2', 'ouro'], ['3', 'ouro'], ['4', 'ouro'], ['5', 'ouro'], ['6', 'ouro'], ['7', 'ouro'], ['8', 'ouro'], ['9', 'ouro'], ['10', 'ouro'], ['j', 'ouro'], ['q', 'ouro'], ['k', 'ouro'],
        ['a', 'paus'], ['2', 'paus'], ['3', 'paus'], ['4', 'paus'], ['5', 'paus'], ['6', 'paus'], ['7', 'paus'], ['8', 'paus'], ['9', 'paus'], ['10', 'paus'], ['j', 'paus'], ['q', 'paus'], ['k', 'paus'],
        'joker', 'joker'];
        this.usedCards = [];
    }
    resetDeck() {
        this.deck = [['a', 'copas'], ['2', 'copas'], ['3', 'copas'], ['4', 'copas'], ['5', 'copas'], ['6', 'copas'], ['7', 'copas'], ['8', 'copas'], ['9', 'copas'], ['10', 'copas'], ['j', 'copas'], ['q', 'copas'], ['k', 'copas'],
        ['a', 'espada'], ['2', 'espada'], ['3', 'espada'], ['4', 'espada'], ['5', 'espada'], ['6', 'espada'], ['7', 'espada'], ['8', 'espada'], ['9', 'espada'], ['10', 'espada'], ['j', 'espada'], ['q', 'espada'], ['k', 'espada'],
        ['a', 'ouro'], ['2', 'ouro'], ['3', 'ouro'], ['4', 'ouro'], ['5', 'ouro'], ['6', 'ouro'], ['7', 'ouro'], ['8', 'ouro'], ['9', 'ouro'], ['10', 'ouro'], ['j', 'ouro'], ['q', 'ouro'], ['k', 'ouro'],
        ['a', 'paus'], ['2', 'paus'], ['3', 'paus'], ['4', 'paus'], ['5', 'paus'], ['6', 'paus'], ['7', 'paus'], ['8', 'paus'], ['9', 'paus'], ['10', 'paus'], ['j', 'paus'], ['q', 'paus'], ['k', 'paus'],
        'joker', 'joker'];
        this.usedCards = [];
    }

    draw() {
        if (this.deck.length >= 1) {
            let card = new Card;
            let prosseguir = false;
            card.random();
            for (let i in this.deck) {
                if (this.deck[i].includes(card.valor)) {
                    if (this.deck[i].includes(card.nipe)) {
                        prosseguir = true
                        {break}
                    }else if (this.deck[i] == 'joker') {
                        console.log('oi');
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
                        }else if (card.valor == 'joker') {
                            this.deck.splice(i, 1)
                            card.displayCard(card.valor, card.nipe);
                        }
                    }
                }
                console.log(this.deck.length); 
                return [card.valor, card.nipe];
            }
        }else {
            const cardSlot = document.getElementById('cardSlot');
            cardSlot.innerHTML = ''
            let newCard = document.createElement('div');
            cardSlot.appendChild(newCard);
            newCard.innerHTML = 'Acabou o Baralho, Reembaralhe';
            const buttom = document.getElementById('draw');
            buttom.innerHTML = 'Embaralhar';
            
            };
        };
}

class Card {
    valoresPossiveis = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'joker'];
    nipesPossiveis = ['copas', 'espada', 'ouro', 'paus'];
    valor;
    nipe;
    constructor(valor, nipe) {
        this.valor = valor;
        this.nipe = nipe;
        this.valoresPossiveis = this.valoresPossiveis;
        this.nipesPossiveis = this.nipesPossiveis;
    }
    random() {
        this.valor = choose(this.valoresPossiveis);
        if (this.valor == 'joker') {
            return this.valor;
        }
        else {
            this.nipe = choose(this.nipesPossiveis);
            return [this.valor, this.nipe];
        }
    }

    displayCard(value, nipe) {
        const cardSlot = document.getElementById('cardSlot');
        cardSlot.innerHTML = ''
        let newCard = document.createElement('div');
        cardSlot.appendChild(newCard);
        if (value == 'joker') {
            newCard.innerHTML = `<h3>${value}</h3>`
        }else {
            newCard.innerHTML = `<h3>${value}</h3><h4>${nipe}</h4>`
        }
    }
}


function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

let deck = new Deck;
let card = new Card;

const buttom = document.getElementById('draw');

buttom.addEventListener('click', function() {
    deck.draw();
    if (buttom.innerHTML == 'Embaralhr');
        console.log('ue');
        deck.resetDeck();
})
