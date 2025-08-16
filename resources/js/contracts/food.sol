// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract FoodChain {
    enum ProductStatus {
        Created,
        Approved,
        RetailerRequested,
        LogisticRequested,
        Sold
    }

    struct Product {
        uint256 id;
        string name;
        string description;
        uint256 quantity;
        uint256 price;
        string uniqueCode;
        address producer;
        address inspector;
        address retailer;
        address logistic;
        uint256 soldDate;
        ProductStatus status;
        uint8 rejected;
    }

    uint256 public productCounter;
    mapping(uint256 => Product) public products;
    mapping(string => uint256) private codeToProductId;
    mapping(string => bool) private usedUniqueCodes;

    address public owner;

    modifier onlyProducer(uint256 productId) {
        require(products[productId].producer == msg.sender, "Not product producer");
        _;
    }

    modifier onlyInspector() {
        require(msg.sender == owner, "Only inspector/owner allowed");
        _;
    }

    modifier onlyRetailer(uint256 productId) {
        require(products[productId].status == ProductStatus.Approved, "Not approved yet");
        _;
    }

    modifier onlyLogistic(uint256 productId) {
        require(products[productId].status == ProductStatus.RetailerRequested, "Retail request not found");
        _;
    }

    event ProductCreated(uint256 id, address producer);
    event ProductApproved(uint256 id, string uniqueCode);
    event RetailerRequested(uint256 id, address retailer);
    event LogisticRequested(uint256 id, address logistic);
    event ProductSold(uint256 id);

    constructor() {
        owner = msg.sender; // Inspector as contract deployer
    }

    function uploadProduct(string calldata name, string calldata description, uint256 quantity, uint256 price) external {
        productCounter++;
        products[productCounter] = Product({
            id: productCounter,
            name: name,
            description: description,
            quantity: quantity,
            price: price,
            uniqueCode: "",
            producer: msg.sender,
            inspector: address(0),
            retailer: address(0),
            logistic: address(0),
            soldDate: 0,
            rejected:0,
            status: ProductStatus.Created
        });

        emit ProductCreated(productCounter, msg.sender);
    }

    function approveProduct(uint256 productId, string calldata shortCode) external onlyInspector {
        Product storage product = products[productId];
        require(product.status == ProductStatus.Created, "Already approved");
        require(!usedUniqueCodes[shortCode], "Unique code already used");
        
        product.status = ProductStatus.Approved;
        product.uniqueCode = shortCode;
        product.inspector = msg.sender;

        codeToProductId[shortCode] = productId;

        emit ProductApproved(productId, shortCode);
    }

    function rejectProduct(uint256 productId) external onlyInspector {
        Product storage product = products[productId];

        product.rejected = 1;
        product.inspector = msg.sender;

    }

    function requestToBuy(uint256 productId) external onlyRetailer(productId) {
        Product storage product = products[productId];
        product.retailer = msg.sender;
        product.status = ProductStatus.RetailerRequested;

        emit RetailerRequested(productId, msg.sender);
    }

    function requestLogistics(uint256 productId) external onlyLogistic(productId) {
        Product storage product = products[productId];
        product.logistic = msg.sender;
        product.status = ProductStatus.LogisticRequested;

        emit LogisticRequested(productId, msg.sender);
    }

    function confirmSell(uint256 productId) external onlyProducer(productId) {
        Product storage product = products[productId];
        require(product.status == ProductStatus.LogisticRequested, "Waiting for logistics");
        product.status = ProductStatus.Sold;
        product.soldDate = block.timestamp;

        emit ProductSold(productId);
    }

    // Utility functions
    function getProduct(uint256 productId) external view returns (Product memory) {
        return products[productId];
    }

    function getProductByKey(string calldata key) external view returns (Product memory) {
        uint256 productId = codeToProductId[key];
        require(productId != 0, "Product not found");
        return products[productId];
    }
}
