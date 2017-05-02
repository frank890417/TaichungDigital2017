php artisan config:clear
php artisan route:clear
php artisan clear-compiled
php artisan cache:clear

chmod -R 777 app/storage

composer dump-autoload

php artisan config:cache
php artisan route:cache
php artisan optimize --force
gulp --production

