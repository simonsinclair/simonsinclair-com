export const GA_TRACKING_ID = 'UA-128283216-1';

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  } catch (err) {
    console.error('gtag.pageview error', err);
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
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

export default { GA_TRACKING_ID, pageview, event };
