//import { Meteor } from 'meteor/meteor';
import { Clubs } from '../clubs';
Meteor.publish('clubs.public', function listPublicClubs() {
  return Clubs.find({'public': true});
});

Meteor.publish('clubs.byName', function listClubsByName(name){
  return Clubs.find({"name":name});
});

/*
Meteor.publish( 'clubs', function( search ) {
  // let query      = {},
  //     projection = { limit: 10, sort: { name: 1 } };

  let query = {};

  if ( search ) {
    let regex = new RegExp( search, 'i' );

    query = {
      $or: [
        { name: regex },
        { description: regex },
        { createdAt: regex }
      ]
    };

  //  projection.limit = 100;
  }

  let query3 = Clubs.find(query);

  console.log("------------------------- " + JSON.stringify(query3));

  return Clubs.find( query );
});
// Meteor.publish('clubs', function(){
//   return Clubs.find();
// });
*/
