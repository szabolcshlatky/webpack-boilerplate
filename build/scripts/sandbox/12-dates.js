`use strict`;

/* DATE */

  /* a) Methods */

const now = new Date(); // Creating an object constructor 'new'

console.log(now); // This will return the current date & time.
  
console.log(`getFullYear:`, now.getFullYear()); // This returns the year as number from the Date object's methods.
console.log(`getMonth:`, now.getMonth()); // This returns the month as number, but january would be 0 and etc. because of the 0 based language.
console.log(`getDate:`, now.getDate()); // This returns the day as number.
console.log(`getDay:`, now.getDay()); // This returns the number of the day in the week.
console.log(`getDay:`, now.getHours()); // This returns the hour of the day as a number.
console.log(`getDay:`, now.getMinutes()); // This returns the actual minute as a number.
console.log(`getDay:`, now.getSeconds()); // This returns the second as a number.
  
console.log(now.toDateString()); // This returns a shorten the date as a string.
console.log(now.toTimeString()); // This returns a shorten the time as a string.
console.log(now.toLocaleString()); // This returns a shorten the date / time as a string.
  
  /* b) Timestamps */
const before = new Date(`February 1 2019 07:30:59`);
  
console.log(`Timestamp: milliseconds since 1970 january:`, now.getTime()); // This returns a big number.
console.log(before.getTime);
  
const diff = now.getTime() - before.getTime();
console.log(diff);
  
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);
  
console.log(mins, hours, days);
  
console.log(`The blog was written ${days} ago.`);
  
const timestamp = 1675938474990;
console.log(new Date(timestamp)); // This convert the number (as milliseconds) into date.
  
  /* c) Date-fns */
console.log(dateFns.isToday(now)); // It returns boolean. If I would put millisecond numbers in the () at the declaration of now, it would be false.
console.log(dateFns.format(now, `YYYY`)); // To the second string: https://date-fns.org/v2.29.2/docs/format
console.log(dateFns.format(now, `MMMM`)); // Returns long month name.
console.log(dateFns.format(now, `MMM`)); // Return shorten month name.
console.log(dateFns.format(now, `dddd`)); // Return long day name.
console.log(dateFns.format(now, `Do`)); // Returns ..th day.
console.log(dateFns.format(now, `dddd Do MMMM YYYY`)); // Chained date.
  
const be_for = new Date(`February 1 2019 12:00:00`);
console.log(dateFns.distanceInWords(now, be_for)); // Returns the passed time: over 3 years.
console.log(dateFns.distanceInWords(now, be_for, {addSuffix: true}));  // Returns the passed time: over 3 years ago.