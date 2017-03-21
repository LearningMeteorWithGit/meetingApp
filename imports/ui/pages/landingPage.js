import { Articles } from '../../api/editoral/articles';
import './landingPage.html';
import '../components/searchBar';

Template.landingPage.helpers({
  articles(){
    Articles.find({});
  }
});
