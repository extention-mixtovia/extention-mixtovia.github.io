var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}
var btnClose = document.getElementById('btnClose');:Récupérer l'id de l'élément btnClose.
btnClose.addEventListener('click',closeModal);:récupèrer l'évenement clic et déclenche la fonction closeModal
function closeModal() {
overlay.style.display='none';
}
