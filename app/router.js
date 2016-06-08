import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('albums', function() {
    this.route('new');
    this.route('album', { path: '/:album_id' }, function() {
      this.route('edit');
    });
  });

  this.route('songs', function() {
    this.route('new');
    this.route('song', { path: '/:song_id' }, function() {
      this.route('edit');
    });
  });

  this.route('people', function() {
    this.route('new');
    this.route('person', { path: '/:person_id' }, function() {
      this.route('edit');
    });
  });

});

export default Router;
