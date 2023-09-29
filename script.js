const cbox = document.getElementById('cbox');

let url = '';
function f() {
  cbox.scrollIntoView();
  cbox.innerHTML = '';
  fetch(url) 
  .then(r => r.json())
  .then(d => {
   
    for(var key in d) {
      const e = document.createElement('p');
      e.innerHTML = key.replaceAll('_', ' ') + ': ' + `<span>${d[key]}</span>`;
      cbox.append(e);
    }
  });
}