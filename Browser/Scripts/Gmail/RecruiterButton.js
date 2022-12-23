/* 
* Bodged (and rather hacky) script to add a recruiter button into Gmail. 
* I use this to politely respond to easily those pesky recruiters who keep sending me the same message over an over! 
*/

let menuBar = null;
let readyInterval;

init = () => {
  readyInterval = setInterval(() => {
    menuBar = document.querySelector('div.amn');
    if (menuBar) {
      clearInterval(readyInterval);

      const button = document.createElement('span');
      button.setAttribute('class', 'ams bkH');
      button.setAttribute('role', 'link');
      button.innerText = 'Recruiter 😏';

      menuBar.appendChild(button);

      button.onclick = () => {
        document.querySelector('[data-tooltip=Reply]').click();
        const info =
          document.querySelectorAll('h3')[2] ?? document.querySelector('h3');
        const name = info.innerText.split(' <')[0];

        let firstName = name.split(' ')[0].split('.')[0];

        let firstArr = [...firstName];
        firstArr[0] = firstName[0].toUpperCase();
        firstName = firstArr.join('');

        const available = '<enter availability here e.g. "in August">';
        const workplace = "Nasa";
        const message = `Hey ${firstName},
              
              Sorry for the rushed response! I'm currently working for ${workplace}, but I'll be available in August; I'll let you know if anything changes.

              In the meantime, if we're not already connected on LinkedIn, please feel free to add me:
              https://www.linkedin.com/in/simplifycomplexity/
              
              Thank you for reaching out 😊. 
              
              Best wishes,
              Kiran`;

        readyInterval = setInterval(() => {
          let textArea = document.querySelector("[role='textbox']");
          if (textArea) {
            textArea.innerText = message;
            clearInterval(readyInterval);

            const deleteDraftBtn = document.querySelector(
              '.oh.J-Z-I.J-J5-Ji.T-I-ax7'
            );
            deleteDraftBtn.onclick = () => {
              init();
            };
          }
        }, 500);
      };
    }
  }, 500);
};

window.addEventListener('popstate', function (event) {
  // The URL changed...
  if (readyInterval) clearInterval(readyInterval);
  init();
});

init();
