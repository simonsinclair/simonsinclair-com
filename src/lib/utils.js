export const hexToString = (hex) => {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
};

export const getGreetingFromDate = (date) => {
  const currentHour = date.getHours();
  let greeting = 'Hello';

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 15) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  return greeting;
};

export default { hexToString, getGreetingFromDate };
