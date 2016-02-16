/*jshint node:true*/

module.exports = {
  default: {
    db: {type: 'postgres', url: "postgres://pg:pg/tmp"},
    path: {
      server: '/server',
      client: '/client'
    },
    port: 3000,
    app: {numbers: [15, 12, 16]}
  },
  development: {
    app: {ko: 'lik', je: 12, ho: {din: 'ky', ne: 0}},
    db: {url: "postgres://pg:pg/tmp-dev"},
    port: 8090,
    path: {
      root: '/roooooooot'
    }
  },
  test: {
    app: {numbers: [1, 81, 144, 169]},
    db: {url: 'postgres://pg:pg/tmp-test'},
    port: 8091
  }
};
