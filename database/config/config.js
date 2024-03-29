module.exports = {
  "development": {
    "username": "postgres",
    "password": null,
    "database": "postgres3",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "port":5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "docker":{
    "username": "postgres",
    "password": "postgres",
    "database": "postgres",
    // "host": "backend-service",
    "host": "db",
    "port": 5432,
    "dialect": "postgres"
  }
};
