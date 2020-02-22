import './styles.css';
import dataApi from './fetchCountries';
import countryListItemTemplate from './template.hbs';
import justCountryList from './countries-name-list.hbs';
import PNotify from '../node_modules/pnotify/dist/es/PNotify.js';
import '../node_modules/pnotify/dist/es/PNotifyButtons.js';
import '../node_modules/pnotify/dist/PNotifyBrightTheme.css';
var debounce = require('lodash.debounce');
const countryList = document.querySelector('.country-list');
const choiseInput = document.querySelector('#input-id');
choiseInput.addEventListener('input', debounce(makeMarkUp, 500));

function makeMarkUp(event) {
  dataApi(event.target.value, buildResult);
  console.log(event.target.value);
}

function buildResult(array) {
  if (array.length <= 10 && array.length > 1) {
    const list = buildJustCountriesList(array);
    insertListItems(list);
    PNotify.closeAll();
  } else if (array.length === 1) {
    const list = buildListItemMarkup(array);
    insertListItems(list);
    PNotify.success({
      title: 'Success!',
      text: 'That thing that you were trying to do worked.',
    });
    PNotify.closeAll();
  } else if (array.length > 10) {
    countryList.innerHTML = '';
    PNotify.error({
      title: 'Dhou!',
      text: 'Too much counties',
    });
    PNotify.closeAll();
  }
}

function buildListItemMarkup(item) {
  return countryListItemTemplate(item);
}

function buildJustCountriesList(item) {
  return justCountryList(item);
}

function insertListItems(item) {
  countryList.innerHTML = item;
}
