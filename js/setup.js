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

var generateRandomData = function () {
  var wNIndex = Math.floor(Math.random() * WIZARD_NAMES.length);
  var wSIndex = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  var cCIndex = Math.floor(Math.random() * COAT_COLOR.length);
  var eCIndex = Math.floor(Math.random() * EYES_COLOR.length);
  var data = {
    name: WIZARD_NAMES[wNIndex] + ' ' + WIZARD_SURNAMES[wSIndex],
    coatColor: COAT_COLOR[cCIndex],
    eyesColor: EYES_COLOR[eCIndex]
  };
  WIZARD_NAMES.splice(wNIndex, 1);
  WIZARD_SURNAMES.splice(wSIndex, 1);
  COAT_COLOR.splice(cCIndex, 1);
  EYES_COLOR.splice(eCIndex, 1);

  return data;
};

var fillWizardsArray = function () {
  var wArray = [];

  for (var i = 0; i < MAX_WIZARDS_COUNT; i++) {
    var {name, coatColor, eyesColor} = generateRandomData();
    wArray.push(generateWizard(name, coatColor, eyesColor));

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




