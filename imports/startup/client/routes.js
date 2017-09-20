// Import Packages
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import Layout
import '../../ui/layouts/body';
import '../../ui/layouts/chat_body';

// Import Pages
import '../../ui/pages/landingPage/landingPage';
import '../../ui/pages/member/memberContent';
import '../../ui/pages/clubs/clubChat';

// Import components
//import '../../ui/components/navigation/sideNav';
import '../../ui/components/navigation/search';


FlowRouter.route('/', {
  name: 'LandingPage',
  action() {
    BlazeLayout.render('master', { content: 'landingPage'});
  },
});

FlowRouter.route('/member', {
  name: 'Member',
  action() {
    BlazeLayout.render('master', { content: 'memberContent'});
  },
});

FlowRouter.route('/club/:_id', {
  name: 'Club',
  action(params, queryParams){
    BlazeLayout.render('chat_master', {content: 'clubChat'})
  }
})
