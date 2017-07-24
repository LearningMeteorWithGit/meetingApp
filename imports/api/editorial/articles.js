import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Articles = new Mongo.Collection('articles');

if ( Meteor.isServer ) {
  Articles._ensureIndex( { title: 1, content: 1 } );
}

Articles.schema = new SimpleSchema({
  'title': {
    type: String,
    label: 'Articles title',
  },
  'content': {
    type: String,
    label: 'Articles Content',
  },
  // TODO More distinguish*y is needed.
});

Articles.attachSchema(Articles.schema);
