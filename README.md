# TravelLinx - Hotel Booking System

# Team Members:

1. Akhil Apparaju
2. Akshara Narayana
3. Avinash Pakala
4. Sharan Santosh Rachamalla

# Tech Stack:

Frontend - ReactJS

Backend - NodeJS

Database - MongoDB

Deployment - AWS

# Tools Used :

- Wireframes: Figma

- Backend Deployment : AWS

- Version Control: Git

# Steps to test and run the application

1. Clone the repository
   git clone https://github.com/apparajuakhil/TravelLinx.git
2. For Backend
   Inside backend folder, run npm i then run node app.js
3. For Frontend
   Inside frontend folder, run npm install then npm start

4. The web application opens in the default browser

# Design Decision:

**Strategy design pattern.**
Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable. We have used strategy design pattern for the Dynamic pricing of rooms.We have considered different types of days that a customer or a user can book room like weekdays, weekends and Holidays.

**Chain of Responsibility design pattern**
Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.Chain of Responsibility design pattern for booking the rooms. The rooms can be booked based on the user’s choice.

**Singleton design pattern**
Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.Singleton design pattern for the validation.

**Application Level:**
**Admin Features:**

1. View all Bookings
2. View all Users
3. View all Hotels
4. Alter Bookings
5. Alter Users
6. Alter Hotels

**User Features:**

1. Register/ Login
2. Search for Hotel
3. Select the booking Date along with the amenities
4. View Booking
5. Update booking
6. Delete booking
7. View Reward Points
8. View Services
9. Dynamic Pricing 
