const body = document.getElementById('body');
nipes = ['&#9829', '&#9824', '&#9830', '&#9827'];

function innerTemplate(value, nipe, local) {
    const body = document.getElementById(`${local}`);
    switch (value) {
        case 'a':
            body.innerHTML = `<div id="templateA5329" class="template"><div class="a" style="visibility: hidden;">${nipe}</div><div class="b" style="visibility: hidden;">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g" style="visibility: hidden;">${nipe}</div><div class="h" style="visibility: hidden;">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div></div>`
            break;
        case '2':
            body.innerHTML = `<div id="templateA5329" class="template"><div class="a" style="visibility: hidden;">${nipe}</div><div class="b" style="visibility: hidden;">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g" style="visibility: hidden;">${nipe}</div><div class="h" style="visibility: hidden;">${nipe}</div><div class="i">${nipe}</div><div class="j">${nipe}</div><div class="k" style="visibility: hidden;">${nipe}</div></div>`
            break;
        case '3':
            body.innerHTML = `<div id="templateA5329" class="template"><div class="a" style="visibility: hidden;">${nipe}</div><div class="b" style="visibility: hidden;">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g" style="visibility: hidden;">${nipe}</div><div class="h" style="visibility: hidden;">${nipe}</div><div class="i">${nipe}</div><div class="j">${nipe}</div><div class="k">${nipe}</div></div>`
            break;
        case '4':
            body.innerHTML = `<div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k" style="visibility: hidden;">${nipe}</div><div class="l" style="visibility: hidden;">${nipe}</div></div>`
            break;
        case '5':
            body.innerHTML = `<div id="templateA5329" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c" style="visibility: hidden;">${nipe}</div><div class="d" style="visibility: hidden;">${nipe}</div><div class="e" style="visibility: hidden;">${nipe}</div><div class="f" style="visibility: hidden;">${nipe}</div><div class="g">${nipe}</div><div class="h">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div></div>`
            break;
        case '6':
            body.innerHTML = `<div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k" style="visibility: hidden;">${nipe}</div><div class="l" style="visibility: hidden;">${nipe}</div></div>`
            break;
        case '7':
            body.innerHTML = `<div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div><div class="l" style="visibility: hidden;">${nipe}</div></div>`
            break;
        case '8':
            body.innerHTML = `<div id="template4678" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="i" style="visibility: hidden;">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div><div class="k">${nipe}</div><div class="l">${nipe}</div></div>`
            break;
        case '9':
            body.innerHTML = `<div id="template105" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="g">${nipe}</div><div class="h">${nipe}</div><div class="i">${nipe}</div><div class="j" style="visibility: hidden;">${nipe}</div></div>`
            break;
        case '10':
            body.innerHTML = `<div id="template105" class="template"><div class="a">${nipe}</div><div class="b">${nipe}</div><div class="c">${nipe}</div><div class="d">${nipe}</div><div class="e">${nipe}</div><div class="f">${nipe}</div><div class="g">${nipe}</div><div class="h">${nipe}</div><div class="i">${nipe}</div><div class="j">${nipe}</div></div>`
            break;
        case 'j':
            body.innerHTML = `<div id="templateJ" class="template"></div>`
            break;
        case 'q':
            body.innerHTML = `<div id="templateQ" class="template"></div>`
            break;
        case 'k':
            body.innerHTML = `<div id="templateK" class="template"></div>`
            break;
        }
}

innerTemplate('10', '&#9830', 'body')

