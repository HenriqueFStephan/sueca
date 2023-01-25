
class Deck {

    constructor(deck, usedCards){
        this.deck = [['a', '&#9829'], ['2', '&#9829'], ['3', '&#9829'], ['4', '&#9829'], ['5', '&#9829'], ['6', '&#9829'], ['7', '&#9829'], ['8', '&#9829'], ['9', '&#9829'], ['10', '&#9829'], ['j', '&#9829'], ['q', '&#9829'], ['k', '&#9829'],
        ['a', '&#9824'], ['2', '&#9824'], ['3', '&#9824'], ['4', '&#9824'], ['5', '&#9824'], ['6', '&#9824'], ['7', '&#9824'], ['8', '&#9824'], ['9', '&#9824'], ['10', '&#9824'], ['j', '&#9824'], ['q', '&#9824'], ['k', '&#9824'],
        ['a', '&#9830'], ['2', '&#9830'], ['3', '&#9830'], ['4', '&#9830'], ['5', '&#9830'], ['6', '&#9830'], ['7', '&#9830'], ['8', '&#9830'], ['9', '&#9830'], ['10', '&#9830'], ['j', '&#9830'], ['q', '&#9830'], ['k', '&#9830'],
        ['a', '&#9827'], ['2', '&#9827'], ['3', '&#9827'], ['4', '&#9827'], ['5', '&#9827'], ['6', '&#9827'], ['7', '&#9827'], ['8', '&#9827'], ['9', '&#9827'], ['10', '&#9827'], ['j', '&#9827'], ['q', '&#9827'], ['k', '&#9827'],
        'joker', 'joker'];
        this.usedCards = [];
    }
    resetDeck() {
        this.deck = [['a', '&#9829'], ['2', '&#9829'], ['3', '&#9829'], ['4', '&#9829'], ['5', '&#9829'], ['6', '&#9829'], ['7', '&#9829'], ['8', '&#9829'], ['9', '&#9829'], ['10', '&#9829'], ['j', '&#9829'], ['q', '&#9829'], ['k', '&#9829'],
        ['a', '&#9824'], ['2', '&#9824'], ['3', '&#9824'], ['4', '&#9824'], ['5', '&#9824'], ['6', '&#9824'], ['7', '&#9824'], ['8', '&#9824'], ['9', '&#9824'], ['10', '&#9824'], ['j', '&#9824'], ['q', '&#9824'], ['k', '&#9824'],
        ['a', '&#9830'], ['2', '&#9830'], ['3', '&#9830'], ['4', '&#9830'], ['5', '&#9830'], ['6', '&#9830'], ['7', '&#9830'], ['8', '&#9830'], ['9', '&#9830'], ['10', '&#9830'], ['j', '&#9830'], ['q', '&#9830'], ['k', '&#9830'],
        ['a', '&#9827'], ['2', '&#9827'], ['3', '&#9827'], ['4', '&#9827'], ['5', '&#9827'], ['6', '&#9827'], ['7', '&#9827'], ['8', '&#9827'], ['9', '&#9827'], ['10', '&#9827'], ['j', '&#9827'], ['q', '&#9827'], ['k', '&#9827'],
        'joker', 'joker'];
        this.usedCards = [];
    }

    draw() {
        buttom.innerHTML = 'draw'
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

class Card {
    valoresPossiveis = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'joker'];
    nipesPossiveis = ['&#9829', '&#9824', '&#9830', '&#9827'];
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
        this.innerTemplate(value, nipe, 'main')
        }
        
    innerTemplate(value, nipe, local) {
        let body = document.getElementById(`${local}`);
        switch (value) {
            case 'a':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateA5329" class="template"><div class="a" style="visibility: hidden;">${nipe}</div><div class="b" style="visibility: hidden;">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g" style="visibility: hidden;">${nipe}</div><div class="h" style="visibility: hidden;">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '2':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateA5329" class="template"><div class="a" style="visibility: hidden;">${nipe}</div><div class="b" style="visibility: hidden;">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g" style="visibility: hidden;">${nipe}</div><div class="h" style="visibility: hidden;">${nipe}</div><div class="i">${nipe}</div><div class="j">${nipe}</div><div class="k" style="visibility: hidden;">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '3':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateA5329" class="template"><div class="a" style="visibility: hidden;">${nipe}</div><div class="b" style="visibility: hidden;">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g" style="visibility: hidden;">${nipe}</div><div class="h" style="visibility: hidden;">${nipe}</div><div class="i">${nipe}</div><div class="j">${nipe}</div><div class="k">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '4':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k" style="visibility: hidden;">${nipe}</div><div class="l" style="visibility: hidden;">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '5':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateA5329" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g">${nipe}</div><div class="h">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '6':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k" style="visibility: hidden;">${nipe}</div><div class="l" style="visibility: hidden;">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '7':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div><div class="l" style="visibility: hidden;">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '8':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div><div class="l">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '9':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="template105" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="g">${nipe}</div><div class="h">${nipe}</div><div class="i">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case '10':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="template105" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="g">${nipe}</div><div class="h">${nipe}</div><div class="i">${nipe}</div><div class="j">${nipe}</div></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case 'j':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateJ" class="template"></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case 'q':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateQ" class="template"></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case 'k':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"><p id="pValue">${value}</p><p id="nipe">${nipe}</p></div><div id="templateK" class="template"></div><div id="outerLetterEnd"><p>${value}</p><p id="nipe">${nipe}</p></div></div>`
                break;
            case 'joker':
                body.innerHTML = `<div id="outerTemplate"><div id="outerLetter"></div><div id="templateJoker" class="template"></div><div id="outerLetterEnd"></div></div>`
                break;
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
    if (buttom.innerHTML == 'Shuffle') {
        deck.resetDeck();
    }
});



const regras = {'a': '1 shot',
                '2': '2 shots',
                '3': '3 shots',
                '4': 'Verdade, Desafio ou Shot',
                '5': 'Eu fui para a lua e levei...',
                '6': 'Coloca regra',
                '7': 'Continência',
                '8': 'Espelho',
                '9': 'Tirar regra',
                '10': 'Jogo do pi',
                'j': 'Homens bebem',
                'q': 'Mulheres bebem',
                'k': 'Não-Binários bebem',
                'joker': 'SE FUDEU, beba 2 shots'}

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
                      'k': 'todos os não-binários bebem',
                      'joker': 'Já ta explicado'}

function exibiRegra(value) {
    let regra = document.createElement('p');
    regra.setAttribute('class', 'regra');
    regra.innerHTML = `${regras[value]}`;
    let local = document.getElementById('main');
    local.appendChild(regra);
    let n = 1
    regra.addEventListener('click', function() {
        regra.innerHTML = `${regrasLongas[value]}`;
    })
}

