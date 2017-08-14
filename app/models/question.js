import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  question: DS.attr(),
  notes: DS.attr(),
  image: DS.attr(),
  timestamp: DS.attr(),
  answers: DS.hasMany('answer', { async: true})
});
