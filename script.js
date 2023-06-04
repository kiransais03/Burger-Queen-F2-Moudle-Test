
let endpoint =`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;

async function getMenu(){
    try {
    let response = await fetch(endpoint);
    let result = await response.json();
    let itemslistdiv = document.getElementsByClassName("items-list")[0];
    
    for(let i=0;i<result.length;i++)
    {
      let id=result[i].id;
      let imgurl = result[i].imgSrc;
      let itemname=result[i].name;
      let price = result[i].price;
      let division = document.createElement('div');
      division.className="item-div";
      division.innerHTML=`<div class="idno">${id}</div>
                    <div class="img-name">
                       <img class="item-image" src="${imgurl}" alt="item">
                       <div class="item-name">${itemname}</div>             
                    </div>
                    <div class="item-price">${price}$</div>`;
     
     itemslistdiv.append(division); 
    }
    console.log(result);
    return result;
 }
    catch(error) {
        console.log(error);
    }
}

// getMenu();


{/* <div class="add-remove">
 <img src="" class="remove">
<input type="text" style="width:20px;text-align:center;font-size:20px;" disabled value="0">
 <img src="" class="add">
</div> */}

async function takeOrder(result) {
    try {
     let orderpromise = new Promise((resolve)=>{setTimeout(()=>ordering(resolve),2500)});

     function ordering(resolve) {
     
        let rightcart=document.getElementsByClassName("right-cart")[0];
        let additems = document.createElement("div");
        additems.className="cart";

        for(let i=0;i<3;i++)
        {
            let randomid=parseInt(Math.random()*25);
            let id=result[randomid].id;
            let imgurl = result[randomid].imgSrc;
            let itemname=result[randomid].name;
            let price = result[randomid].price;
            let div = document.createElement("div");
            div.className="card-item";
            div.innerHTML=`<div class="s-no">${i+1}.</div><div class="idno">${id}</div>
            <div class="img-name">
               <img class="item-image" src="${imgurl}" alt="item">
               <div class="item-name">${itemname}</div>             
            </div>
            <div class="item-price">${price}$</div>`;

            additems.append(div);
        }
        rightcart.append(additems);

       resolve();
       console.log(orderpromise);
       return orderpromise;
    }
}
catch(error) {
    console.log(error);
}
}

async function orderPrep() {
    try{
   let prepareprom = new Promise ((resolve)=>{setTimeout(() => preparing(resolve),1500)});

   function preparing(resolve) {
    let object = {order_status:true,paid:false};
    resolve(object);
}
return prepareprom;
}
catch(error) {
    console.log(error);
}
}

async function payOrder(object) {
try {
    let paymentprom= new Promise((resolve)=>{setTimeout(()=>payment(resolve),1000)});

    function payment(resolve) {
        object={order_status:true,paid:true};
        resolve(object);
    }
    return paymentprom;
}
catch(error) {
    console.log(error);
}
}


async function thankyouFnc(payment) {
    try{
    if(payment) {
        alert("Thankyou for eating with us today!");
        console.log("Success");
    }
}
catch(error) {
    console.log(error);
}
}


async function pageload() {
    let itemdata=await getMenu();

    let order=await takeOrder(itemdata);

    let orderPrepared = await orderPrep();
    // console.log(orderPrepared);

    let payment = await payOrder(orderPrepared);
    // console.log(payment);

    let thanks = await thankyouFnc(payment);
}

pageload();




































































// // getMenu() function
// async function getMenu() {
//     try {
//         const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
//         const menuData = await response.json();

//         // Displaying food items to the user
//         console.log('Menu:', menuData);

//         // Get the container element
//         const container = document.getElementById('menu-container');

//         // Loop through the menu items
//         menuData.forEach(item => {
//             // Create a new div for each menu item
//             const menuItem = document.createElement('div');
//             menuItem.classList.add('menu-item');

//             // Create an image element
//             const image = document.createElement('img');
//             image.src = item.imgSrc;
//             image.alt = item.name;

//             // Create a heading element for the menu item name
//             const name = document.createElement('h3');
//             name.textContent = item.name;

//             // Create a paragraph element for the menu item price
//             const price = document.createElement('p');
//             price.textContent = 'Price: ' + item.price;

//             // Append the image, name, and price elements to the menu item div
//             menuItem.appendChild(image);
//             menuItem.appendChild(name);
//             menuItem.appendChild(price);

//             // Append the menu item div to the container
//             container.appendChild(menuItem);

//         });
//         return menuData;
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }



// function takeOrder(menu) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             const ordersContainer = document.getElementById('orders-container');
//             //const menuContainer = document.getElementById('menu-container');
//             ordersContainer.innerHTML = ''; // Clear previous orders
//             //menuContainer.innerHTML = ''; // Clear menu items


//             const orders = [];
//       for (let i = 0; i < 3; i++) {
//         const randomIndex = Math.floor(Math.random() * menu.length);
//         const order = menu[randomIndex];
//         orders.push(order);

//         const orderItem = document.createElement('div');
//         orderItem.classList.add('order-item');

//         const image = document.createElement('img');
//         image.src = order.imgSrc;
//         image.alt = order.name;

//         const name = document.createElement('h3');
//         name.textContent = order.name;

//         const price = document.createElement('p');
//         price.textContent = 'Price: ' + order.price;

//         orderItem.appendChild(image);
//         orderItem.appendChild(name);
//         orderItem.appendChild(price);

//         ordersContainer.appendChild(orderItem);
//       }

//             resolve(orders);
//         }, 2500);
//     });
// }




// // orderPrep() function
// function orderPrep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = {
//                 order_status: true,
//                 paid: false,
//             };
//             if (orderStatus.order_status && !orderStatus.paid) {
//                 resolve(orderStatus);
//             } else {
//                 reject(new Error("Failed to prepare the order."));
//             }
//         }, 1500);
//     });
// }

// // payOrder() function
// function payOrder() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const orderStatus = {
//                 order_status: true,
//                 paid: true,
//             };
//             if (orderStatus.order_status && orderStatus.paid) {
//                 resolve(orderStatus);
//             } else {
//                 reject(new Error("Failed to process the payment."));
//             }
//         }, 1000);
//     });
// }

// // thankyouFnc() function
// function thankyouFnc() {
//     alert('Thank you for eating with us today!');
// }

// // Execute the restaurant flow when the screen loads
// window.onload = async function () {
//     const menuData = await getMenu();
//     // console.log('Menu:', menuData);

//     const order = await takeOrder(menuData);
//     console.log('Order:', order);

//     const orderStatus = await orderPrep();
//     console.log('Order Status:', orderStatus);

//     const paidOrder = await payOrder();
//     console.log('Order Status:', paidOrder);

//     thankyouFnc();
// };
