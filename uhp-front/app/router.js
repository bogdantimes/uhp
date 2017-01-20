import Ember from "ember";
import config from "./config/environment";

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('profile', {path: '/profile/:id'});
  this.route('dashboard');
  this.route('login');
});

export default Router;
