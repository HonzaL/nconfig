
module.exports = {
  default: {
    db: {type: 'postgres', url: "postgres://pg:pg/tmp"},
    path: {
      server: '/server',
      client: '/client'
    },
    port: 3000,
    app: {nic: [15, 12, 16]}
  },
  development: {
    app: {ko: 'lik', je: 12, ho: {din: 'ky', ne: 0}},
    db: {url: "postgres://pg:pg/tmp-dev"},
    port: 8090,
    pokus: 'ok',
    path: {
      root: '/roooooooot'
    }
  }
}
