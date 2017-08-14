import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question').then(function(results) {
        return results.sortBy('timestamp'); }),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    createAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    }
  }
});
