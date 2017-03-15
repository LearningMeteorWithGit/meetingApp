import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Clubs = new Mongo.Collection("clubs");

Clubs.schema = new SimpleSchema({
    clubName: {
      type: String,
      label: "Club name",
      max: 200
    },
    creator: {
      type: Object,
      label: "Club master"
    },
    member: {
      type: Array
      label: "Club member"
    },
    // TODO: Clubs ausformulieren
});
