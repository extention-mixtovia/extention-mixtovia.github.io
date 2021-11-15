var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');:Récupérer l'id de l'élément btnClose.

btnPopup.addEventListener('click',openMoadl);

btnClose.addEventListener('click',closeModal);

function openMoadl() {
overlay.style.display='block';
}

function closeModal() {
overlay.style.display='none';
}
