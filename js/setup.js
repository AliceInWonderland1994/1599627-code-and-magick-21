'use strict';

var userDialog = document.querySelector('.setup');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var MAX_WIZARDS_COUNT = 4;

var showUserDialog = function () {
  userDialog.classList.remove('hidden');
};

var showSetupSimilar = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var generateWizard = function(name, coatColor, eyesColor) {
  return {name, coatColor, eyesColor};
};

var getRandomNumber = function(max) {
  return Math.floor(Math.random() * max);
}

var generateRandomData = function () {
  var wNIndex = getRandomNumber(WIZARD_NAMES.length);
  var wSIndex = getRandomNumber(WIZARD_SURNAMES.length);
  var cCIndex = getRandomNumber(COAT_COLOR.length);
  var eCIndex = getRandomNumber(EYES_COLOR.length);
  var data = {
    name: WIZARD_NAMES[wNIndex] + ' ' + WIZARD_SURNAMES[wSIndex],
    coatColor: COAT_COLOR[cCIndex],
    eyesColor: EYES_COLOR[eCIndex]
  };

  return data;
};

var generateRandomWizard = function () {
  var {name, coatColor, eyesColor} = generateRandomData();
  return generateWizard(name, coatColor, eyesColor);
};

var fillWizardsArray = function () {
  var wArray = [];

  for (var i = 0; i < MAX_WIZARDS_COUNT; i++) {
    wArray.push(generateRandomWizard());
  }
  return wArray;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent =  wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill =  wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var drawWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizards = fillWizardsArray();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

showUserDialog();
drawWizards();
showSetupSimilar();




