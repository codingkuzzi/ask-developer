import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createQuestion() {
      var date = new Date();
      var dMonth = date.getMonth()+1;
      var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
      var params = {
        author: this.get('author'),
        title: this.get('inputTitle'),
        question: this.get('inputQuestion'),
        notes: this.get('inputNotes'),
        image: this.get('inputImageUrl'),
        timestamp: dateString
      };
    //  console.log(this);
      this.sendAction('createQuestion', params);
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index', {reload: true});
    }, //end of createQuestion action
  } //end of actions
});
