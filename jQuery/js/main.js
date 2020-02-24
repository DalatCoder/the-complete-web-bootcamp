
// $(document).keypress(e => {
//     $('h1').text(e.key);
// })
//

document.addEventListener('keypress', e => {
    document.querySelector('h1').textContent += e.key; 
})
