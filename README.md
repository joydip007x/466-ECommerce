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
3. Now open another terminal, go to the `backend/server_ecommerce`  and `backend/server_bank` and `backend/server_supplier` directory and run the command in each directory : 
```
nodemon
```
The backend is now up and running

4. For the client frontend, go to the `frontend/client`  and `frontend/bank` and `frontend/supplier` directory and run this in each directory
```
npm start
```


The whole project should be running now on different ports of `localhost`
