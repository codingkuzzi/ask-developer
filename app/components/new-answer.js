import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createAnswer() {
      var date = new Date();
      var dMonth = date.getMonth()+1;
      var dateString = dMonth+'/'+date.getDate()+'/'+date.getFullYear();
      var params = {
        author: this.get('author'),
        answer: this.get('inputAnswer'),
        timestamp: dateString,
        question: this.get('question')
      };

      this.sendAction('createAnswer', params);


    } //end of createComment action
  } //end of actions

});
