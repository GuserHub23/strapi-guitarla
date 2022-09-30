module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccpmbg6n6mporokeltk0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_w86k'),
      user: env('DATABASE_USERNAME', 'guser'),
      password: env('DATABASE_PASSWORD', 'ErRjdQcUQconUzTTvbNe0U8GBReDUVnl'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
