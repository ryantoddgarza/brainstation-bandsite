// shows
//

let scheduleArray = [
  {
    'date': 'Mon Dec 17 2018',
    'venue': 'Ronald Lane',
    'city': 'San Fancisco, CA',
    'link': '',
  },
  {
    'date': 'Tue Jul 18 2019',
    'venue': 'Pier 3 East',
    'city': 'San Fancisco, CA',
    'link': '',
  },
  {
    'date': 'Fri Jul 22 2019',
    'venue': 'View Loungue',
    'city': 'San Fancisco, CA',
    'link': '',
  },
  {
    'date': 'Sat Aug 12 2019',
    'venue': 'Hyatt Agency',
    'city': 'San Fancisco, CA',
    'link': '',
  },
  {
    'date': 'Fri Sep 05 2019',
    'venue': 'Moscow Center',
    'city': 'San Fancisco, CA',
    'link': '',
  },
  {
    'date': 'Wed Aug 11 2019',
    'venue': 'Pres Club',
    'city': 'San Fancisco, CA',
    'link': '',
  },
];

// create a new element
const newEl = (tag) => {
  return document.createElement(tag);
}

// scaffold a schedule row
const makeScheduleRow = () => {
  const scheduleWrapper = document.querySelector('#scheduleWrapper');
  const row = newEl('div');
  const divider = newEl('div');
  const date = newEl('div');
  const venue = newEl('div');
  const city= newEl('div');
  const button = newEl('button');

  scheduleWrapper.appendChild(row).classList.add('schedule__row');
  scheduleWrapper.appendChild(divider).classList.add('divider');

  row.appendChild(date).classList.add('schedule__date');
  row.appendChild(venue).classList.add('schedule__venue');
  row.appendChild(city).classList.add('schedule__location');
  row.appendChild(button).classList.add('schedule__button');
}

// fill row from `scheduleArray`
const displayShow = (n) => {
  const date = document.querySelectorAll('.schedule__date');
  const venue = document.querySelectorAll('.schedule__venue');
  const city = document.querySelectorAll('.schedule__location');

  date[n].innerText = scheduleArray[n].date;
  venue[n].innerText = scheduleArray[n].venue;
  city[n].innerText = scheduleArray[n].city;
}

// populate the DOM
const populateSchedule = () => {
  for (let i = 0; i < scheduleArray.length; i++) {
    displayShow(i);
  }
}

// load existing shows on load
const loadSchedule = (i) => {
  scheduleArray.forEach(() => {
    makeScheduleRow();
  });

  populateSchedule();
}

window.onload = loadSchedule();

