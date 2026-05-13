function goToSettingsPage() {
  const homepageDom = document.querySelector(".homepage");
  const getReadyPomodoro = document.querySelector(".settings-pomodoro");

  homepageDom.style.display = "none";
  getReadyPomodoro.style.display = "block";
}

function backNormal() {
  const homepageDom = document.querySelector(".homepage");
  const getReadyPomodoro = document.querySelector(".settings-pomodoro");

  getReadyPomodoro.style.display = "none";
  homepageDom.style.display = "block";
}

const pomodoroColorState = document.querySelectorAll('[class^="option"]');
const titleH2 = document.querySelector('.options-box h2');
const titleH3 = document.querySelector('.options-box h3');

pomodoroColorState.forEach(opcao => {
    opcao.addEventListener('mouseover', (event) => {
        const newBgColor = event.currentTarget.dataset.backgroundcolor;
        document.body.style.backgroundColor = newBgColor;

        if(newBgColor === "red"){
          titleH2.style.color = "rgba(85, 3, 3, 0.98)";
          titleH3.style.color = "rgba(85, 3, 3, 0.98)";
      }

      if(newBgColor === "yellow"){
          titleH2.style.color = "rgba(86, 86, 1, 0.95)";
          titleH3.style.color = "rgba(86, 86, 1, 0.95)";
      }

      if(newBgColor === "green"){
          titleH2.style.color = "rgba(32, 225, 32, 0.95)";
          titleH3.style.color = "rgba(32, 225, 32, 0.95)";
      }

    });

    opcao.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '';

        titleH2.style.color = '';
        titleH3.style.color = '';
    });
});