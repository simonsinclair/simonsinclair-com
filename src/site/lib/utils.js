const decodeHexString = (hex) => {
  let string = '';
  for (let i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url, GA_ID) => {
  try {
    window.gtag('config', GA_ID, {
      page_path: url,
    });
  } catch (err) {
    console.error('gtag.pageview error', err);
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({
  action, category, label, value,
}) => {
  try {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  } catch (err) {
    console.error('gtag.event error', err);
  }
};

module.exports = { decodeHexString, pageview, event };
