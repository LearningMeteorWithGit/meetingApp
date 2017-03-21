import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Clubs = new Mongo.Collection('clubs');

Clubs.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Club name',
    max: 200,
  },
  // creator: {
  //   type: Object,
  //   label: 'Club master',
  //   autoValue: function autoValueCreator() {
  //     return this.userId;
  //   },
  // },
  // member: {
  //   type: Array,
  //   label: 'Club member',
  //   optional: true,
  // },
  // createdAt: {
  //   type: Date,
  //   label: 'Created At',
  //   autoValue: function autoValueCreatedAt() {
  //     return new Date();
  //   },
  // },
  // public: {
  //   type: Boolean,
  //   label: 'Public Club',
  //   autoValue: function autoValuePublic() {
  //     return true;
  //   },
  // },
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
