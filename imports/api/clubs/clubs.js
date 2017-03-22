import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

// TODO Comment in if necessary until then hint that this option exist.
SimpleSchema.extendOptions(['autoform']);

export const Clubs = new Mongo.Collection('clubs');

Clubs.Schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Club name',
    max: 200,
  },
  description: {
    type: String,
    label: 'Description of your club',
    max: 1000,
  },
  creator: {
    type: Object,
    label: 'Club master',
    autoValue: function autoValueCreator() {
      return this.userId;
    },
    autoform: {
      type: 'hidden'
    },
  },
  // member: {
  //   type: Array,
  //   label: 'Club member',
  //   optional: true,
  // },
  createdAt: {
    type: Date,
    label: 'Created At',
    autoValue: function autoValueCreatedAt() {
      return new Date();
    },
    autoform: {
      type: 'hidden'
    },
  },
  public: {
    type: Boolean,
    label: 'Public Club',
    autoValue: function autoValuePublic() {
      return true;
    },
    autoform: {
      type: 'hidden'
    },
  }
});

// }, {
//   clean: {
//     filter: true,
//     autoConvert: true,
//     removeEmptyStrings: true,
//     trimStrings: true,
//     getAutoValues: true,
//     removeNullsFromArrays: true,
//   },

Clubs.attachSchema(Clubs.Schema);
