let deferentMonth = 0,
    dateEl = document.getElementById("date"),
    prevEl = document.getElementById('prev'),
    nextEl = document.getElementById('next'),
    daysEl = document.getElementById("days");

const months = [
  'Январь',"Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];

create();

prevEl.addEventListener("click", prev);
nextEl.addEventListener("click", next);

function prev() {
  deferentMonth--;
  create();
}
function next() {
  deferentMonth++;
  create();
}

function create() {
  let d = new Date();
  d.setMonth(d.getMonth() + deferentMonth);
  let year = d.getFullYear(),
      month = d.getMonth(),
      dayCount = (new Date(year, month + 1, 0)).getDate(),
      dayStart = (new Date(year, month, 1)).getDay();
      
      if (dayStart === 0){
          dayStart = 7;
      }
  
   let today = null;
   
      if (deferentMonth === 0) {
        today = d.getDate();
      }
      printDate(d);
      generate(dayCount, today, dayStart);
}

function generate(count, today, start) {
  let html = '';
  
  for (let i = 1; i < start; i++) {
    html += '<div class="day other"></div>';
  }
  
  for (let i = 1; i <= count; i++) {
    let cl = 'day';
      if (i === today) {
        cl += ' today'
      }
     html += `<div class="${cl}"> ${i} </div>`;
  }
 daysEl.innerHTML = html;
}

function printDate(d) {
  dateEl.innerHTML = d.getFullYear() + " " + months[d.getMonth()];
}

