// Import Packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import Layout
import '../../ui/layouts/master';

// Import Pages
import '../../ui/pages/landingPage';
import '../../ui/pages/searchResultPage';

// Import components
import '../../ui/components/sideNav';

FlowRouter.route('/', {
  name: 'LandingPage',
  action() {
    BlazeLayout.render('master', { content: 'landingPage', sideNav: 'sideNav' });
  },
});

FlowRouter.route('/searchResult', {
  name: 'SearchResult',
  action() {
    BlazeLayout.render('master', { content: 'searchResultPage', sideNav: 'sideNav' });
  },
});
