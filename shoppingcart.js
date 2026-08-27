
let total = 0;
function Shopping()
{
    let Food = document.getElementById("food").value;
    let Price = (document.getElementById("price").value);
    
     if((Food == "")|| (Price == ""))
    {
	document.getElementById("store").innerHTML="Please enter both food and price.";  
        return;  
    }

    Price = Number(Price);
    let store = document.getElementById("store");
    
    let element = document.createElement("div");
    element.className = "item";
    element.innerHTML = Food + " - ₹ " + Price;

    store.appendChild(element);
    
    let btn = document.createElement("button");
    btn.onclick = function()
    {
	this.parentElement.remove();
        total = total - Price;
         document.getElementById("total").innerHTML="Total" + "     - ₹" + total;

    }
    btn.innerHTML = "REMOVE";
    element.appendChild(btn);

    total = total + Price;


    document.getElementById("food").value="";
    document.getElementById("price").value="";
    
    document.getElementById("line").innerHTML="<hr>";
    document.getElementById("total").innerHTML="Total" + "     - ₹" + total;
}

