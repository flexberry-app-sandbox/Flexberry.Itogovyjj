docker build --no-cache -f SQL\Dockerfile.PostgreSql -t itogovyjj-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t itogovyjj-java/app ../../..
