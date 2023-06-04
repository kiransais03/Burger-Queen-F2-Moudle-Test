
//JSON Data File URl
let endpoint =`https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json`;


//GetMenu Fucntion 
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
    console.log("JSON Data");
    console.log(result);
    return result;
 }
    catch(error) {
        console.log(error);
    }
}


{/* <div class="add-remove">
 <img src="" class="remove">
<input type="text" style="width:20px;text-align:center;font-size:20px;" disabled value="0">
 <img src="" class="add">
</div> */}



//Take Order Function

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
    }
    await orderpromise;
    console.log("Take Order");
    console.log(orderpromise);
    return orderpromise;
}
catch(error) {
    console.log(error);
}
}



//Order Preparation Function

async function orderPrep() {
    try{
   let prepareprom = new Promise ((resolve)=>{setTimeout(() => preparing(resolve),1500)});

   async function preparing(resolve) {
    let object = {order_status:true,paid:false};
    resolve(object);
}
await prepareprom;
console.log("Order Prep");
console.log(prepareprom);
return prepareprom;
}
catch(error) {
    console.log(error);
}
}


//Payment Order Function

async function payOrder(object) {
try {
    let paymentprom= new Promise((resolve)=>{setTimeout(()=>payment(resolve),1000)});

    function payment(resolve) {
        object={order_status:true,paid:true};
        resolve(object);
    }
    await paymentprom;
    console.log("Pay Order");
    console.log(paymentprom);
    return paymentprom;
}
catch(error) {
    console.log(error);
}
}



//ThankYou Function
async function thankyouFnc(payment) {
    try{
    if(payment) {
        alert("Thankyou for eating with us today!");
    }
}
catch(error) {
    console.log(error);
}
}




//Functions Exceution Process Step By Step
async function pageload() {
    let itemdata=await getMenu();

    let order=await takeOrder(itemdata);

    let orderPrepared = await orderPrep();
    // console.log(orderPrepared);

    let payment = await payOrder(orderPrepared);
    // console.log(payment);

    let thanks = await thankyouFnc(payment);
    console.log("Success Food Order Completed");
}

pageload();
