// /* eslint-disable prefer-arrow-callback */
// import { Meteor } from 'meteor/meteor';
import { Articles } from '../articles';

//Meteor.publish('articles', function(){
//  return Articles.find();
//});

Meteor.publish( 'articles', function(search) {
  check( search, Match.OneOf( String, null, undefined ) );

  let query = {},
      projection = { limit: 10, sort: { title: 1 } };

  if (search) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        { title: regex },
        { content: regex }
      ]
    };

    projection.limit = 100;
  }

  return Articles.find( query, projection );
});
