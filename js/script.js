let blockquote = document.querySelector(".blockquote");
let spinner = `<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

const generateQuote = () => {
    blockquote.innerHTML = spinner;
    // let data = await fetch('https://rohsikdnan.github.io/quote-generator/quotes.json');
    // let quotes = await data.json();
    setTimeout(() => {
        let i = Math.floor(Math.random() * quotes.length);
        blockquote.innerHTML = `<p>${quotes[i].quote}</p><span class="blockquote-footer">${quotes[i].author}</span>`;
    }, 500);
}

document.getElementById('generateBtn').addEventListener('click', generateQuote);
generateQuote();


// const generateQuote = () => {
//     blockquote.innerHTML = spinner;
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'quotes.json', true);
//     xhr.responseType = 'json';
//     xhr.send();

//     xhr.onload = function () {
//         if (xhr.status === 200) {
//             let data = xhr.response;
//             let i = Math.floor(Math.random() * data.length);
//             blockquote.innerHTML = `<p>${data[i].quote}</p><span class="blockquote-footer">${data[i].author}</span>`;
//         }
//     };
// }

document.getElementById('generateBtn').addEventListener('click', generateQuote);
generateQuote();