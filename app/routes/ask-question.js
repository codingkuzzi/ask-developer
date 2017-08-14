import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      //console.log(this);
      //this.sendAction('createQuestion', params);
        newQuestion.save();
        this.transitionTo('index');
    } //end of createQuestion action
  } //end of actions
});
