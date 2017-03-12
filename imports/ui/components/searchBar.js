// Import necessary js Packages
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


// Import the corresponding html file
import './searchBar.html'


Template.searchBar.events({
  'submit .searchBar__form': function(event, template){
        // Prevent default browser form submit
      event.preventDefault();

      // Get value from form element
      const target = event.target;
      const text = target.searchString.value;

// TODO: Repleace console.log with acutal searchOutput
     console.log(text);
  }
});
