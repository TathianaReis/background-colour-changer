const colorPicker = document.querySelector('input[type="color"]');
const colorTextValue = document.querySelector('.colour-text');
const randomBtn = document.getElementById('btnChangeColour');

console.log(colorPicker.value);

const changeBgColour = (bgColour) => {
  document.body.style.backgroundColor = bgColour;
  colorTextValue.value = bgColour;
  colorPicker.value = bgColour;
};

const generateColour = () => {
  hexcode = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
  changeBgColour(hexcode);
};

randomBtn.addEventListener('click', generateColour);
colorPicker.addEventListener('input', function () {
  changeBgColour(colorPicker.value);
});
