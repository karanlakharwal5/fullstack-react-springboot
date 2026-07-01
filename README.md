# Full Stack Web Application with React & Spring Boot


## How to(after you have cloned the repo):
### Frontend
- Go to store-ui and run 'npm install'. It will check the package.json and install the dependencies.
- Use the below command to run MySQL as a dockerized container. You will need to update the mounted volume path to suit your needs.
  docker run -p 3306:3306 --name store-database -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=store-db -v /Users/karan.lakharwal/store_database:/var/lib/mysql -d mysql 
- You will then have to connect to the database(say using sqlectron) and run the schema.sql and data.sql scripts to populate the tables.  
  Files are located at: store/src/main/resources/sql/
- Run `npm run dev` to start the react app.

### Backend
- Run the StoreApplication app in your IDE.


Modules implemented so far:
## 🚀 Project Modules
- [x] Product Listing Page
- [x] Migrate styling from CSS to Tailwind
- [x] Calling backend api to list Products
- [x] Searching and Sorting Product Listings
- [x] Add Dark Mode to UI
- [x] Migrate from H2db to MySQL
- [ ] API Integration (In Progress)
- [ ] React Routing
- [ ] Adding more robust functionalities into Spring app
- [ ] Implement shopping cart with React Context API
- [ ] Securing App with Spring Security
- [ ] Spring Security Authentication with database
- [ ] Implementing Authorization with Spring Security
- [ ] more to be added