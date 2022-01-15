#!/usr/bin/env bash

# Precompile assets
bundle exec rails assets:precompile

# Wait for database to be ready
until nc -z -v -w30 $MYSQL_HOST $MYSQL_PORT; do
    echo 'Waiting for MySQL...'
    sleep 1
done
echo "MySQL is up and running!"

# If the database exists, migrate. Otherwise setup (create and migrate)
bundle exec rails db:migrate 2>/dev/null || bundle exec rails db:create db:migrate
echo "MySQL database has been created & migrated!"

# Remove a potentially pre-existing server.pid for Rails.
rm -f tmp/pids/server.pid

# Run the Rails server
bundle exec rails server -b 0.0.0.0 -p 3001