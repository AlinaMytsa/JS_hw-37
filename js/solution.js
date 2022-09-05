( function () {
  'use strict';

  const ulElem = document.getElementById('ulId');

  const attributes = ulElem.attributes;

  const attributesArr = [];

  for (let attr of attributes) {
    const attributeValue = attr.value;
    attributesArr.push(attributeValue);
  }

  const attributesArrOfNames = [];

  for (let attr of attributes) {
    const attributesNames = attr.name;
    attributesArrOfNames.push(attributesNames);

  }
  console.log(attributesArrOfNames);

  const lastLi = document.querySelector('li:last-child');
  lastLi.textContent = 'Привет, меня зовут Алина';

  const firstLi = document.querySelector('li:first-child');
  firstLi.setAttribute('data-my-name', 'Alina');

  ulElem.removeAttribute('data-dog-tail');

})()

