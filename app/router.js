import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact');
  this.route('questions');
  this.route('ask-question');
  this.route('question', {path: '/question/:question_id'});
  this.route('edit-question', {path: '/edit-question/:question_id'});
});

export default Router;
