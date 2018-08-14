
function hoge (e) {

  document.getElementById('test').innerText = e.data;

}

window.addEventListener("message", hoge, true);
