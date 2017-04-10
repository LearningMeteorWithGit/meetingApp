import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Articles = new Mongo.Collection('articles');

Articles.schema = new SimpleSchema({
  title: {
    type: String,
    label: 'Article title',
  },
  content: {
    type: String,
    label: 'Article Content',
  },
  // TODO More distinguish*y is needed.
});

console.log(Articles.find().fetch());


Articles.attachSchema(Articles.schema);
