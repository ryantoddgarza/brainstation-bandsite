// shows
//

// Dynamically create the schedule header
class ShowsHeader {
  constructor(dates, venue, location) {
    this.dates = dates;
    this.venue - venue;
    this.location = location;
  }
  render() {
    return `
      <div class="schedule__row schedule__header">
        <div class="schedule__date"></div>
        <div class="schedule__venue"></div>
        <div class="schedule__location"></div>
      </div>
    `;
  }
}

const scheduleWrapper = document.getElementById('scheduleWrapper');
const showsHeader = new ShowsHeader();
scheduleWrapper.innerHTML = showsHeader.render();

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
  // const scheduleWrapper = document.getElementById('scheduleWrapper');
  const row = newEl('div');
  const divider = newEl('div');
  const date = newEl('div');
  const venue = newEl('div');
  const city= newEl('div');
  const button = newEl('button');

  const formattedDate = arr.date.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

  scheduleWrapper.appendChild(row).classList.add('schedule__row');
  scheduleWrapper.appendChild(divider).classList.add('divider');

  row.appendChild(date).classList.add('schedule__date');
  date.innerText = formattedDate;
  row.appendChild(venue).classList.add('schedule__venue');
  venue.innerText = arr.place;
  row.appendChild(city).classList.add('schedule__location');
  city.innerText = arr.location;
  row.appendChild(button).classList.add('schedule__button');
}

