// Import Packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import Layout
import '../../ui/layouts/body';

// Import Pages
import '../../ui/pages/landingPage/landingPage';
import '../../ui/pages/member/memberContent';

// Import components
//import '../../ui/components/navigation/sideNav';
import '../../ui/components/navigation/search';


FlowRouter.route('/', {
  name: 'LandingPage',
  action() {
    BlazeLayout.render('master', { content: 'landingPage', sideNav: 'sideNav' });
  },
});

FlowRouter.route('/member', {
  name: 'Member',
  action() {
    BlazeLayout.render('master', { content: 'memberContent', sideNav: 'sideNav' });
  },
});
