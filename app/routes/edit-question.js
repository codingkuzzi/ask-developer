import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    editQuestion(question) {
      var params = {
        author: this.controller.get('author'),
        title: this.controller.get('inputTitle'),
        question: this.controller.get('inputQuestion'),
        notes: this.controller.get('inputNotes'),
        image: this.controller.get('inputImageUrl')

      };

      this.sendAction('editQuestion', question, params);

      question.save();
      this.transitionTo('question', params.question_id, {reload: true});
    }, //end of createQuestion action
  } //end of actions
});
