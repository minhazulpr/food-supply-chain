    const contractAddress = '0x21618390cdeaaed925098b1db8858cb8861e13f6';

    const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "logistic",
				"type": "address"
			}
		],
		"name": "LogisticRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uniqueCode",
				"type": "string"
			}
		],
		"name": "ProductApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "producer",
				"type": "address"
			}
		],
		"name": "ProductCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "ProductSold",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "retailer",
				"type": "address"
			}
		],
		"name": "RetailerRequested",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "shortCode",
				"type": "string"
			}
		],
		"name": "approveProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "confirmSell",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "getProduct",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "uniqueCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "txid",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "producer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "inspector",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "retailer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "logistic",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "soldDate",
						"type": "uint256"
					},
					{
						"internalType": "enum FoodChain.ProductStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "rejected",
						"type": "uint8"
					}
				],
				"internalType": "struct FoodChain.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "key",
				"type": "string"
			}
		],
		"name": "getProductByKey",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "quantity",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "uniqueCode",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "txid",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "producer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "inspector",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "retailer",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "logistic",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "soldDate",
						"type": "uint256"
					},
					{
						"internalType": "enum FoodChain.ProductStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "rejected",
						"type": "uint8"
					}
				],
				"internalType": "struct FoodChain.Product",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCounter",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "uniqueCode",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "txid",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "producer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "inspector",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "retailer",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "logistic",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "soldDate",
				"type": "uint256"
			},
			{
				"internalType": "enum FoodChain.ProductStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "rejected",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "rejectProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			}
		],
		"name": "requestLogistics",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "txid",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "requestToBuy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "uploadProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


export {contractAddress, contractABI};