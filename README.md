# Target :
Develop an e-commerce website with inventory, sales functionality with card payment, administrative and client privileges, etc.
A supplier portal  for  inventory and Orders tracking and a bank for all entities to track their balances. 

# Video Presentation :


<a href="https://youtu.be/o91aPjKT2c0">
   <img src="https://i.ibb.co/WyH628G/ZZScreenshot-from-2022-10-08-02-11-25.png" alt="https://youtu.be/o91aPjKT2c0"  border="1">
</a>


# Languages 
-  **M**ongoDb - **E**xpress.js - **R**eact.js - **N**ode.js -



# PDF Presentation
- https://pdfhost.io/v/BXQmeOFNl_Ecommerce

# Key Points 
- 3 Sections. created An **E-Commerce(Client+Admin), A Supplier and A Bank** Site with MERN. 
- Implemented Interconnecting **API's** of the 3 sections
##API : 
<a href="https://ibb.co/album/gMJ08G">
   <img src="https://i.ibb.co/1rxV91g/api-details.png" alt=""  border="1">
</a>

- **Stripe-Fronted** for payments
- **MongoDB** for Database,used 4 Collections for whole project.

- Order Tracking 
- User can see **3 States** of Products "ordered" , "under shipment " and "Shipped"
- Admin must approve every order manually and forware to 'Supplier'
- Suppliers see **2 States** , 'order arrvied' or 'order delivered'

- Admin can **Add new Product** with **varients** and varients price.
- Every SALES transaction : <br/>

   **==>>** User Checkout using **Online payment**
   **==>>** **Admin Approves** and Gets SUBTOTAL in his account.
   **==>>** Forwards Order to **Suppliers and keeps** 20% Incentive 
   **==>>** Supplier accepts and Order status is 'delivered' 
 
- Every **User/Admin/Suppliers** can check their Bank Balance in **Bank Server**
- Product **Click and View ** Details
- Purchase Diagram : 
 <a href="https://ibb.co/album/gMJ08G">
   <img src="https://i.ibb.co/cvtpgrq/purchase-diagram.png" alt=""  border="1">
   </a>

# How To Run This Project :
**1.** Clone this repository into your local machine. <br/>
**2.** Open a terminal by pressing `Crtl+Alt+T` and install the client side dependencies by running this command ```npm install``` <br/>
   in following directories :
   
   
    frontend/client
    frontend/bank
    frontend/supplier
  
    backend/server_bank
    backend/server_ecommerce
    backend/server_supplier
   
If there's any problem in **Step: 2** try ```sudo npm install``` <br/>
These commands will install all the necessary node modules for this project.

<a href="https://i.ibb.co/FDkWMCh/Screenshot-from-2022-10-07-19-38-37.png"><img src="https://i.ibb.co/FDkWMCh/Screenshot-from-2022-10-07-19-38-37.png" alt="HOW TO INSTALL DEP" border="0"></a>

**3.** Now open  3 terminals & run the command ```nodemon```  in following directories :
   
    backend/server_bank
    backend/server_ecommerce
    backend/server_supplier
    
The backend is now up and running

**4.** Now open  3 terminals & run the command ```npm start``` in following directories :
   
    frontend/client
    frontend/bank
    frontend/supplier
    
The frontend is now up and running

<a href="https://i.ibb.co/XWzcVZ6/Screenshot-from-2022-10-07-19-43-54.png"><img src="https://i.ibb.co/XWzcVZ6/Screenshot-from-2022-10-07-19-43-54.png" alt="HOW TO RUN" border="0"></a>

The whole project should be running now on different ports of `localhost`
