// shows
//

// API
const apiURL = 'https://project-1-api.herokuapp.com';
const apikey = 'ba8be611-9724-438e-8b35-ce3ed5727f30';

requestShowdates = () => {
  axios.get(`${apiURL}/showdates?api_key=${apikey}`)
    .then((response) => {
      response.data.forEach((item) => {
        addEvent(item);
      });
    })
    .catch((error) => console.error(`Could not GET ${apiURL}/showdates`));
}

requestShowdates();

// function takes array, creattes and gives values to elements
const addEvent = (arr) => {
  // create a new element
  const newEl = (tag) => {
    return document.createElement(tag);
  }

  // write to DOM
  const scheduleWrapper = document.getElementById('scheduleWrapper');
  const row = newEl('div');
  const divider = newEl('div');
  const date = newEl('div');
  const venue = newEl('div');
  const city= newEl('div');
  const button = newEl('button');

  scheduleWrapper.appendChild(row).classList.add('schedule__row');
  scheduleWrapper.appendChild(divider).classList.add('divider');

  row.appendChild(date).classList.add('schedule__date');
  date.innerText = arr.date;
  row.appendChild(venue).classList.add('schedule__venue');
  venue.innerText = arr.place;
  row.appendChild(city).classList.add('schedule__location');
  city.innerText = arr.location;
  row.appendChild(button).classList.add('schedule__button');
}

