import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Clubs = new Mongo.Collection('clubs');
export { Clubs as default };

Clubs.schema = new SimpleSchema({
  clubName: {
    type: String,
    label: 'Club name',
    max: 200,
  },
  creator: {
    type: Object,
    label: 'Club master',
    autoValue() {
      return this.userId;
    },
  },
  member: {
    type: Array,
    label: 'Club member',
    optional: true,
  },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue() {
      return new Date();
    },
  },
    // TODO: Clubs ausformulieren
}, {
  clean: {
    filter: true,
    autoConvert: true,
    removeEmptyStrings: true,
    trimStrings: true,
    getAutoValues: true,
    removeNullsFromArrays: true,
  },
});

Clubs.attachSchema(Clubs.schema);
