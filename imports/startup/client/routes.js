// Import Packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import Layout
import '../../ui/layouts/master.js';

// Import Pages
import '../../ui/pages/landingPage.js'

// Import components
import '../../ui/components/sideNav.js'

FlowRouter.route('/', {
  name: 'LandingPage',
  action() {
    BlazeLayout.render('master', {content: 'landingPage', sideNav: 'sideNav'});
  },
});
