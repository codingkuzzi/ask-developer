import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    //saveRental3(params) {
     // var newRental = this.store.createRecord('rental', params);
     // newRental.save();
     // this.transitionTo('index');
   // },
    createAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('question');
    }
  }
});
