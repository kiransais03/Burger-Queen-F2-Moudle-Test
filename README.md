# Burger-Queen-F2-Moudle-Test

Project Overview
Task
The goal is to make a real life website for a restaurant and you have to write the script for it.
Mainly 5 tasks are done when you go in a restaurant. You get the menu and then Someone takes your order. Then your order is given to the chef and the chef starts preparing it. Once food is cooked, the food is given to the waiter and the waiter gives the food to you. then you eat it and pay for it.
Make 5 functions
First function - getMenu() -> On the load of the screen run this function and In this function you'll make an call using fetch to get the food items from the JSON and show them to a user - https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json
TakeOrder() - Now assume that the user is ordering and make a functiion called TakeOrder() -This function should return a promise and shoud take 2500 milliseconds to resolve the order. in teh resolve choose any 3 burgers randomly and add them in the object.
orderPrep() - This function also returns a promise and takes 1500 milliseconds to resolve and the resolve should return {order_status:true; paid:false}
payOrder() - This function also returns a promise and tajes 1000 milliseconds to reolve and the resolve returns the object {order_status:true; paid:true}
thankyouFnc() - Once {paid:true} is received, give an alert on the screen saying thankyou for eating with us today!
You need to handle 4 promises back to back and run the last thankyou function one after the other. Use either promise chaining or async await or promise methods to do the following.
So inshort you need to handle 4 promises back to back and run the last thankyou fnc one after the other. use either promise chaining or async await or promise methods to do the following.
Marking Scheme (100 Marks)
getMenu() function: (20 marks)
Making a call to fetch food items from the given JSON
Displaying food items to the user

TakeOrder() function: (15 marks)
Returning a promise:
Resolving the promise after 2500 milliseconds
Selecting 3 random burgers and adding them to the order object

orderPrep() function: (15 marks)
Returning a promise
Resolving the promise after 1500 milliseconds
Returning the object with order_status as true and paid as false

payOrder() function: (15 marks)
Returning a promise
Resolving the promise after 1000 milliseconds
Returning the object with order_status as true and paid as true

thankyouFnc() function: (10 marks)
Displaying an alert message on the screen

Promise handling and chaining: (15 marks)
Properly chaining the promises using either promise chaining, async/await, or promise methods
Ensuring each promise is resolved before proceeding to the next

Error handling: (5 marks)
Properly handling any errors that may occur during promise resolutions
Deployment (5 Marks)
