
module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  // require('shipit-shared')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/osler-ui',
      deployTo: '~/code/osler-ui',
      repositoryUrl: 'https://github.com/wynkk/osler-ui.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 3,
      // key: '/path/to/key',
      shallowClone: true
    },
    demo: {
      servers: 'deploy@demo.wynkk.co',
      // key: '/var/www/keys/GuestMetrics-dev.pem',
      branch: 'master'
    }
  });
};