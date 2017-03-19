import { Template } from 'meteor/templating';

import './searchResultPage.html';

import '../components/searchBar';


Template.searchResultPage.helpers({
  tester: 'Hallo Welt',
});
