const intervalo = setInterval(() => {
  const header = document.querySelector("._3auIg");
  let desativado = true;
  if (header) {
    clearInterval(intervalo);

    const button = document.createElement("button");
    button.innerHTML = "2x";
    button.classList.add("botaoVel");
    header.appendChild(button);

    button.addEventListener("click", () => {
      if (desativado) {
        const audio = document.querySelectorAll("audio");
        audio.forEach((audios) => {
          audios.playbackRate = 2;
        });
        desativado = false;
      } else {
        const audio = document.querySelectorAll("audio");
        audio.forEach((audios) => {
          audios.playbackRate = 1;
        });
        desativado = true;
      }
    });
  }
}, 1000);
