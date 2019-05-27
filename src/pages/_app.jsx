import App from 'next/app';
import Router from 'next/router';

// import * as gtag from '../lib/gtag';

// Router.events.on('routeChangeComplete', url => gtag.pageview(url));
Router.events.on('routeChangeComplete', url => console.log('gtag.pageview', url));

export default App;
