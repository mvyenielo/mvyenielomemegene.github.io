"use strict"

document.addEventListener("DOMContentLoaded", function() {
  const formElement = document.querySelector("#memegen");
  const imgUrlInput = document.querySelector('input[name="imgURL"]');
  const topTextInput = document.querySelector('input[name="topText"]');
  const bottomTextInput = document.querySelector('input[name="bottomText"]');
  const result = document.querySelector('#result');

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const memeImg = document.createElement('img');
    memeImg.src = imgUrlInput.value;
    memeImg.classList.add('memeImg');

    const top = document.createElement('div');
    top.innerText = topTextInput.value;
    top.classList.add('textTop');

    const bottom = document.createElement('div');
    bottom.classList.add('textBottom');
    bottom.innerText = bottomTextInput.value;

    const memeBox = document.createElement('div');
    memeBox.classList.add('memeBox');

    memeBox.appendChild(top);
    memeBox.appendChild(bottom);
    memeBox.appendChild(memeImg);

    result.appendChild(memeBox);

    imgUrlInput.value = '';
    topTextInput.value = '';
    bottomTextInput.value = '';

    memeBox.addEventListener('click', function() {
      memeImg.remove();
      top.remove();
      bottom.remove();
      memeBox.remove();
    });
  });
});

