export const decodeHexString = (hex) => {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
};

export const getSalutationFromDate = (date) => {
  const currentHour = date.getHours();
  let greeting = 'Good evening';

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 17) {
    greeting = 'Good afternoon';
  }

  return greeting;
};

export default { decodeHexString, getSalutationFromDate };
