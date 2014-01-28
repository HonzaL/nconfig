# NConfig

NConfig is a configutration utility for Node.js application.

## Installation


   $ npm install nconfig

## Usage

```javascript
   var config = require('nconfig')(options)
```

where `options` (not necessary) object may contains:

* `file` (optional) - path to configutration file [default to ./config/config.js] 
* `env` (optional) - evironment [default to `process.env.NODE_ENV || 'development'`]

## Example

Configuration file example

```javascript
var rootPath = process.cwd()

module.exports = {
    default: {
        db: {
            mongo: "mongodb://192.168.2.8/main",
            postgres: "postgres://postgres:postgres@localhost/main"
        },
        path: {
            root: rootPath,
            server: rootPath + '/server'
        },
        app: {
            name: 'Example configuration file application'
        },
        allow: [12, 18, 589]
    },
    development: {
        db: {
            postgres: "postgres://postgres:postgres1@localhost/main_dev"
        }
        app: {
            name: 'Example configuration file application - development environment'
        },
        allow: [12, 589]
    }
}
```

Rules of merging:
* object - addition
* array (list) - overwrite