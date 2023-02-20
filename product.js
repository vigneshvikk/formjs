function login(){ 

    //access data from input

    uname=uname1.value //string
    
    //store data in local storage
    localStorage.setItem("username",uname  )
                        //key    value
    window.location="product.html"
}

// the function done when open the page therefore we set here

// access data from local storage

usernamedisplay=localStorage.getItem("username")
                               //key-string
//innerHTML
unameheading.innerHTML=usernamedisplay

function addProducts(){
    products={pname:pname.value,id:pid.value,price:priceid.value,company:comid.value,expiry:expid.value}
//js object
    if(products.id in localStorage){
        alert("products already exist")
    }else{
                        //we neeed to different key from employee object that is id,if we give same key it will update....we dont like that,we want all employee details
    localStorage.setItem(products.id,JSON.stringify(products))
                        // key      :   value (js object to ls object)
                                     //if we store the employee object in local storage with converting js object to json object
alert("new product added")


    }
}
function viewProducts(){
    window.location="searchsection.html"
}
function logout(){
window.location="index.html"
}


function search(){
    //variable
    keyId=s1.value   //keyId comes from s1.value that is comes from input ....input is string type
    if(keyId in localStorage){
      pdt = JSON.parse(localStorage.getItem(keyId))
                       //acess data from ls to js But its get ls object
                       // .parse convert ls object to js object
    //   console.log(emp);

    result.innerHTML= `
    <h3 class="text-light">Product name ${pdt.pname}</h3>
    <h3 class="text-light" >Product Id ${pdt.id}</h3>
    <h3 class="text-light" >Price ${pdt.price}</h3>
    <h3 class="text-light">Company name ${pdt.company}</h3>
    <h3 class="text-light" >Expiry date ${pdt.expiry}</h3>
    `
    }else{
        result.innerHTML= `<h3 class=text-danger >Product not present</h3>`
        // alert('employee not present')
    }
}