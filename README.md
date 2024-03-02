# WebTechEcommerce
(updated as of now deployed project is working 99% of the time so please feel free to checkout live link here)
- ### https://web-tech-ecommerce-akfmzjs1p-tanmay-jadavs-projects.vercel.app/

still for reference feel free to visit working video in case above link gives some issue
- https://drive.google.com/file/d/1xrj-BxTOxvC9nisUOO_Pq7N-ZKAKOar9/view?ts=65e31ed8&pli=1

## Description
WebTechEcommerce is a full-stack e-commerce web application built using React.js, Node.js, Express.js, MongoDB, and other technologies. It allows users to browse products, add them to their cart, and make purchases securely.

## Features
- Browse products by category, brand, or price
- Add products to the cart
- Sort products based on price(high-low)
- Filter product based on category, brand and size
- Update cart quantities or remove items
- Admin panel for managing products, orders, and users
- light and dark mode 

## Page Details
- Pages Created
	- first Landing page '/'
	- then all products page where you can click on any product and preview it
	- preview a product page
	- cart where each product seen
	- checkout page (static payment gateway yet to be done left due to time constrain)
- Admin page created 
	- dashboard for admin is on "/admin" (currently no body static)
	- All products page which is linked to database
	- Add product page where images can also be uploaded
	- Edit product details page
	- Delete product functionality
   	- Login page and signup page (left due to time constrain but still working on admin/login)
	


## Technologies Used
- Frontend:
  - React.js
  - Redux (optional, if used for state management)
  - React Router (for routing)
  - Tailwind CSS (for styling)

- Backend:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose ORM)
  - JWT (for authentication)
  - Payment gateway integration (Razorpay not done completely)

## Installation
1. Clone the repository:
   git clone https://github.com/tanmayjadav/WebTechEcommerce.git then 
   - cd frontend 
   - npm i 
   - npm run dev
   now for backend open another terminal
	- cd backend
	- npm i
	- npm run dev
	
