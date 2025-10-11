import './bootstrap';
import Route from "./router";
import { Web3 } from './Web3';

let result = await Web3;
let data = await result;

let contract = data.contract;
let accounts = data.accounts;


let AddProductEl = select('#addProduct');
let productinfo = select('.productinfo');
let TableEl = select('.product-status');
let RequestInfoEl = select('.requestinfo');
let RetailerAddProduct = select('.product');
let VerifyBtn = select('.verify-btn');
let VerificationValue = select('#verify');
let table = select('.product-verified-info');
let checkoutProduct = select('.checkout-product-name');
let checkoutPrice = select('.checkout-product-price');
let quantityEl = select('.quantity');
let totalAmountEl = select('.total-amount');
let verifyCardEl = select('.verify-card');

// select any element
function select(selectquery){
    return document.querySelector(selectquery);
}


// Add Product
async function AddProduct(title,description,price,unit,userID) {

    await contract.methods.uploadProduct(title,description,price,unit,userID).send({ from: accounts[0] });
    
    alert('Product stored successfully!');
}


// validate price field
let priceEl = select('#price');

if(priceEl){
    priceEl.addEventListener('keyup',function(e){
        let value = e.target.value;

        select('#priceError').textContent = '';

        if (value === '' || Number(value) <= 0) {
        select('#priceError').textContent = 'Price must be greater than 0.';
        e.target.value = ''; // clear invalid input
        } else {
        select('#priceError').textContent = '';
        }


        if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
        select('#priceError').textContent = 'Only positive numbers allowed.';
        
        }
        
    }); 
}


if(AddProductEl){
    AddProductEl.addEventListener('submit',function(e){
        e.preventDefault();

        let form = new FormData(this);

        select('#titleError').textContent = '';
        select('#descriptionError').textContent = '';

        // Validate
        if(form.get('title') === '' ){
            select('#titleError').textContent = "This field is required";
            return;
        }else if(form.get('description') === ''){
            select('#descriptionError').textContent = "This field is required";
            return;
        }else if(form.get('price') === ''){
            select('#priceError').textContent = "This field is required";
            return;
        }

        
        
        AddProduct(form.get('title'),form.get('description'),form.get('price'),form.get('unit'),authUserId);
        
    });
}


// Load product to farmer
async function GetProduct() {
    let TotalProduct = await contract.methods.productCounter().call();
    TotalProduct = Number(TotalProduct);

    
    productinfo.textContent = " ";
    for(let i = 1; i <= TotalProduct;i++){
        let product = await contract.methods.getProduct(i).call();

        
        if(Number(product.userID) !== authUserId){
            continue;
        }
        
        let inspection = '';
        let ConfirmButton;
        let ProductStatus = 'Pending';

        if(Number(product.status) > 0 && !Number(product.rejected)){
            inspection = "Approved";
        }else if(Number(product.rejected) == 1){
            inspection = "Rejected";
        }else{
            inspection = "Pending";
        }

        if(Number(product.status) == 3){
            ConfirmButton = `<Button class='btn btn-success confirm-sell'  data-product='${Number(product.id)}'>Confirm</Button>`;
        }else{
            ConfirmButton = " ";
        }

        if(Number(product.status) == 4){
            ProductStatus = "Sold";
        }else if(Number(product.rejected)){
            ProductStatus = "Rejected";
        }else{
            ProductStatus = "Pending";
        }

        let html = `
        <tr>
            <td>${i}</td>
            <td>${product.uniqueCode}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.txid}</td>
            <td>${product.price}</td>
            <td>${product.unit}</td>
            <td>${inspection}</td>
            <td>${product.retailer}</td>
            <td>${product.logistic}</td>
            <td>${ProductStatus}</td>
            <td>
                ${ConfirmButton}
            </td>
        </tr>
    `;
        
        productinfo.insertAdjacentHTML('beforeend',html);
    }

}

Route('/status',GetProduct);





// Confirm product sell
async function ConfirmSell(productId) {
    await contract.methods.confirmSell(productId).send({ from: accounts[0] });
    window.location.reload();
}

// Confirm product approval
async function ApproveProduct(productId,uniqueId) {
    await contract.methods.approveProduct(productId,uniqueId).send({ from: accounts[0] });
    window.location.reload();
}

// Rejct product approval
async function RejectProduct(productId) {
    await contract.methods.rejectProduct(productId).send({ from: accounts[0] });
    window.location.reload();
}



if(TableEl){
    TableEl.addEventListener('click',function(e){
        let productId = e.target.dataset?.product;
       
        if(e.target.classList.contains('confirm-sell')){
            ConfirmSell(productId);
        }else if(e.target.classList.contains('confirm-product')){
            
            let uniqueId = generateUUID();


            ApproveProduct(Number(productId),uniqueId);
        }else if(e.target.classList.contains('reject-product')){
            RejectProduct(productId);
        }

        
    });
}

// Generate UID
function generateUUID() {
  return ([1e7]+-1e3).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}



// Load Data in admin request page
async function GetRequest() {
    let TotalProduct = await contract.methods.productCounter().call();
    TotalProduct = Number(TotalProduct);

    
    RequestInfoEl.textContent = " ";
    for(let i = 1; i <= TotalProduct;i++){
        let product = await contract.methods.getProduct(i).call();

        let inspection = '';
        let ConfirmButton;
        let RejectButton;


        if(Number(product.status) > 0 && !Number(product.rejected)){
            inspection = "Approved";
        }else if(Number(product.rejected)){
            inspection = "Rejected";
        }else{
            inspection = "Pending";
        }

        if(Number(product.status) == 0 && !Number(product.rejected)){
            ConfirmButton = `<Button class='btn btn-success confirm-product'  data-product='${Number(product.id)}'>Confirm</Button>`;
            RejectButton = `<Button class='btn btn-danger reject-product'  data-product='${Number(product.id)}'>Reject</Button>`;
        }else{
            ConfirmButton = " ";
            RejectButton = " ";
        }

        let html = `
        <tr>
            <td>${i}</td>
            <td>${product.uniqueCode}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${inspection}</td>
            
            <td>
                ${ConfirmButton}
                ${RejectButton}
            </td>
        </tr>
    `;
        
        RequestInfoEl.insertAdjacentHTML('beforeend',html);
    }

}

Route('/request',GetRequest);

// Load Data in retailer page
async function GetRetailerProduct() {
    let TotalProduct = await contract.methods.productCounter().call();
    TotalProduct = Number(TotalProduct);

    
    RetailerAddProduct.textContent = " ";
    
    for(let i = 1; i <= TotalProduct;i++){
        let product = await contract.methods.getProduct(i).call();
        
        let inspection = '';
        let ConfirmButton;

        if(Number(product.status) != 1){
            continue;
        }

        // <button class="btn btn-primary retailer-request" data-product=${Number(product.id)}>Buy</button>
        let html = `

        <div class="col-md-3">
            <div class="card card-body">
                <h5>${product.name}</h5>
                <hr>
                <p class="mb-1">${product.description}</p>
                <hr>
                <p class="fs-3">${product.price} Tk/ ${product.unit}</p>
                <a class="btn btn-primary" href="checkout?pid=${Number(product.id)}">Buy</a>
            </div>
        </div>
    `;
        
        RetailerAddProduct.insertAdjacentHTML('beforeend',html);
    }

}
Route('/products',GetRetailerProduct);

// Load Single Product
async function GetSingleRetailerProduct(pid) {
    let product = await contract.methods.getProduct(pid).call();

    checkoutProduct.textContent = product.name;
    checkoutPrice.textContent = product.price;
    totalAmountEl.value = quantityEl.value* Number(product.price);

    console.log(product);
}

Route('/checkout',GetSingleRetailerProduct,(new URLSearchParams(window.location.search).get('pid')));

// Send Retailer Request
async function SendRetailerRequest(paraObj) {
    
    try{
        await contract.methods.requestToBuy(paraObj.pid,paraObj.txid,paraObj.quantity).send({ from: accounts[0] });
        window.location.href="/products";
    }catch(err){
        window.alert(err);
        window.location.href="/products";
    }
}


if(RetailerAddProduct){
    RetailerAddProduct.addEventListener('click',function(e){
        if(e.target.classList.contains('retailer-request')){
            let productId = e.target.dataset.product;

            SendRetailerRequest(productId);
        }
    });
}

Route('/success',SendRetailerRequest,{txid:new URLSearchParams(window.location.search).get('txid'),pid:new URLSearchParams(window.location.search).get('pid'), quantity:new URLSearchParams(window.location.search).get('quantity')});



// Load Data in logistics page
async function GetLogisticProduct() {
    let TotalProduct = await contract.methods.productCounter().call();
    TotalProduct = Number(TotalProduct);

    
    RetailerAddProduct.textContent = " ";
    
    for(let i = 1; i <= TotalProduct;i++){
        let product = await contract.methods.getProduct(i).call();
        
        if(Number(product.status) != 2){
            continue;
        }

        let html = `
        <div class="col-md-3">
            <div class="card card-body">
                <h5>${product.name}</h5>
                <hr>
                <p class="mb-1">Quantity: ${product.description}</p>
                <hr>
                <p class="fs-3">${product.price} Tk/ ${product.unit}</p>
                
                <button class="btn btn-primary logistic-request" data-product=${Number(product.id)}>Request</button>
            </div>
        </div>
        `;
        
        RetailerAddProduct.insertAdjacentHTML('beforeend',html);
    }

}

Route('/logistics/products',GetLogisticProduct);



// Send Logistic Request
async function LogisticRequest(productId) {
    await contract.methods.requestLogistics(productId).send({ from: accounts[0] });
    window.location.reload();
}

if(RetailerAddProduct){
    RetailerAddProduct.addEventListener('click',function(e){
        if(e.target.classList.contains('logistic-request')){
            let product = e.target.dataset.product;

            LogisticRequest(product);
        }
    });
}



// Product Verification
if(verifyCardEl){

    verifyCardEl.style.display = 'none';
}

async function Verify(key){
    
    try{
         let product = await contract.methods.getProductByKey(key).call();

         let html = `
            <tr>
                <th>Title</th>
                <td>${product.name}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>${product.quantity}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>${product.price} TK/${product.unit}</td>
            </tr>
            <tr>
                <th>Sold Date</th>
                <td>${new Date(Number(product.soldDate) * 1000).toLocaleString()}</td>
            </tr>
            `;

            verifyCardEl.style.display = 'block';
            table.textContent = " ";
            table.insertAdjacentHTML('beforeend',html);
    }catch(error){
        let html = `Not Found`;

        verifyCardEl.style.display = 'block';
        table.textContent = " ";
        table.insertAdjacentHTML('beforeend',html);
    }
    
    
}

if(VerifyBtn){
    VerifyBtn.addEventListener('click',function(e){
        e.preventDefault();
        let id = VerificationValue.value;
        
        
        Verify(id);
    });
}


// Quantity Control
if(quantityEl){
    quantityEl.addEventListener('input',function(){
        if(this.value <= 0){
            this.value = 1;
        }

        totalAmountEl.value = checkoutPrice.textContent * this.value;
    });
}
