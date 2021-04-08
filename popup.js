window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tabulka a');
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      vytvořitPopup(e);
    });
  });
});

const vytvořitPopup = (e) => {
  const popup = document.createElement('div');
  popup.innerHTML = `<div class="popup"><span class="popup--nadpis">šíření obsahu</span>
  <p>Kliknutím na <b>'souhlasím'</b> potvrzuji, že titulky stahuji pro své osobní účely a nebudu je dále šířit.</p>
  <a id="popup--potvrzení" href="${e.target.getAttribute('href')}" download="${e.target.getAttribute('download')}">souhlasím</a><a href="javascript:void(0)" id="popup--zrušení">zrušit</a></div>`;
  document.body.appendChild(popup);
  popup.className = 'wrapper';
  popup.querySelector('#popup--potvrzení').addEventListener('click', () => {
    popup.remove();
  });
  popup.querySelector('#popup--zrušení').addEventListener('click', () => {
    popup.remove();
  });
};