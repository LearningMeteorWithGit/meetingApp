import { Articles } from '../../../api/editoral/articles';
import './landingPage.html';
import '../../components/navigation/searchBar';


Template.landingPage.onCreated = function(){
  Meteor.subscribe("articles.all");
  // TODO Change to regional/most acitve or somethingelse
  Meteor.subscribe("clubs.public");
};

Template.landingPage.helpers({
  articles(){
    Articles.find({});
  },
  articleCollection(){
    return Articles;
  }
});
