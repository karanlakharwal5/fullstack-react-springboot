This is the readme for the backend application. I will keep on adding relevant information as I make progess.


**Connecting to the Database:**  
Use the below command to run MySQL as a dockerized container. You will need to update the mounted volume path to suit your needs.  
``docker run -p 3306:3306 --name store-database -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=store-db -v /Users/<name>/store_database:/var/lib/mysql -d mysql``  

You will then have to connect to the database(say using sqlectron) and run the schema.sql and data.sql scripts to populate the tables.  

More info here:
https://github.com/sqlectron/sqlectron - A simple and lightweight SQL client with cross database and platform support.  