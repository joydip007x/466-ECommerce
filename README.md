# How To Run This Project :
1. Clone this repository into your local machine.
2. Open a terminal by pressing `Crtl+Alt+T` and install the client side dependencies by running the following commands
   ```
    cd frontend/client
    npm install
    cd ../bank
    npm install
    cd ../supplier
    npm install
    cd ../../backend/server_bank
    npm install
    cd ../server_ecommerce
    npm install
    cd ../server_supplier
    npm install
    ```
These commands will install all the necessary node modules for this project.
3. Now open another terminal, go to the `backend/server_ecommerce` directory and run the command
```
nodemon
```
4. Open another terminal, go to the `backend/server_bank` directory and run the command
```
nodemon
```
5. In another terminal, go to the `backend/server_supplier` directory and run the command
```
nodemon
```
The backend is now up and running
6. For the client frontend, go to the `frontend/client` directory and run 
```
npm start
```
6. For the bank frontend, go to the `frontend/bank` directory and run 
```
npm start
```
6. For the supplier frontend, go to the `frontend/supplier` directory and run 
```
npm start
```

The whole project should be running now on different ports of `localhost`