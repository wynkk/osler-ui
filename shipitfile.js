
var Async = require('async');

module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  // require('shipit-shared')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/osler-ui',
      deployTo: '~/code/osler-ui',
      repositoryUrl: 'https://github.com/10pearls/GuestMetrics-Node.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 3,
      // key: '/path/to/key',
      shallowClone: true
    },
    qa: {
      servers: 'ubuntu@ec2-54-211-192-158.compute-1.amazonaws.com',
      key: '/var/www/keys/GuestMetrics-dev.pem',
      branch: 'develop'
    },
    staging: {
      servers: 'ubuntu@ec2-54-204-156-226.compute-1.amazonaws.com',
      key: '/var/www/keys/GuestMetrics-staging.pem',
      branch: 'dev-master'
    },
    production: {
      branch: 'master'
    }
  });
  
  /**
  * Execute the remote script to start the server
  */
  shipit.task('start-server', function startServer(done) {
    // shipit.log();
    // Start the server here.
    Async.series({
      exportEnvironment: function exportEnvironment(callback) {
        shipit.remote('export NODE_ENV=' + shipit.environment, callback);
      },
      stopExistingProcesses: function stopExistingProcesses(callback) {
        return callback();
      },
    }, function result(err, result) {
      if (err) return done(err);
      shipit.remote('/bin/sh -c ~/guestmetrics/current/bin/start.sh');
    });
    // return shipit.remote('/bin/sh -c ~/guestmetrics/current/bin/start.sh');
  });
  
  /**
  * Once `cleaned`, restart the server or start it.
  */
  shipit.on('cleaned', function startApp() {
    shipit.start('start-server');
  });
};