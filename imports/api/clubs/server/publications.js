/* eslint-disable prefer-arrow-callback */
import { Meteor } from 'meteor/meteor';

import { Clubs } from '../clubs';

Meteor.publish('clubs.public', function listPublicClubs() {
  return Clubs.find({
    public: true,
  });
});
