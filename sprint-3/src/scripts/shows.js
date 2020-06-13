// shows
//

let scheduleArray = [
  {
    'date': 'Mon Dec 17 2018',
    'venue': 'Ronald Lane',
    'city': 'San Fancisco, CA',
  },
  {
    'date': 'Tue Jul 18 2019',
    'venue': 'Pier 3 East',
    'city': 'San Fancisco, CA',
  },
  {
    'date': 'Fri Jul 22 2019',
    'venue': 'View Loungue',
    'city': 'San Fancisco, CA',
  },
  {
    'date': 'Sat Aug 12 2019',
    'venue': 'Hyatt Agency',
    'city': 'San Fancisco, CA',
  },
  {
    'date': 'Fri Sep 05 2019',
    'venue': 'Moscow Center',
    'city': 'San Fancisco, CA',
  },
  {
    'date': 'Wed Aug 11 2019',
    'venue': 'Pres Club',
    'city': 'San Fancisco, CA',
  },
];

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
  venue.innerText = arr.venue;
  row.appendChild(city).classList.add('schedule__location');
  city.innerText = arr.city;
  row.appendChild(button).classList.add('schedule__button');
}

const iterateReturn = (arr) => {
  arr.forEach((currentValue, i) => {
    addEvent(scheduleArray[i]);
  });
};

window.onload = iterateReturn(scheduleArray);
