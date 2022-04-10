/*
    Pixel Configuration File
    Brandon Asuncion <me@brandonasuncion.tech>
*/

(function(window) {
    "use strict";

    // Pixel Settings
    var Pixel = {
        PIXEL_SERVER: location.origin.replace(/^http/, 'ws'),
        CANVAS_WIDTH: 50, // The width and height must be the same as the values set for the server
        CANVAS_HEIGHT: 50,
        CANVAS_INITIAL_ZOOM: 20,
        CANVAS_MIN_ZOOM: 10,
        CANVAS_MAX_ZOOM: 40,
        CANVAS_COLORS: ["#eeeeee", "#ff0000", "#ff8800", "#fff000", "#88ff00", "#000fff", "#8800ff", "#cc9933", "#3366cc", "#000000"],
        CANVAS_ELEMENT_ID: "pixelCanvas",

        // optional onload()
        onload: function() {
            toastr["info"]("Select a color with the 1 - 9 keys\r\nPress 0 to erase", "Instructions");
            setTimeout(function() {
                toastr["info"]("Keep in mind, each pixel costs 5 devcash.", "Price: 5 Devcash");
            }, 4000);
            setTimeout(function() {
                toastr["info"]("MAKE SURE YOU ARE CONNECTED TO GNOSIS CHAIN", "Important");
            }, 8000);
            setTimeout(function() {
                toastr["info"]("Press \"a\" to approve Devcash", "Approve Devcash");
            }, 12000);
            setTimeout(function() {
                toastr["info"]("Most importantly, have fun! Full sourcecode is on GitHub.");
            }, 16000);
        }
    };

    var Contract = {
      provider: null,
      DevcashContractAddress: "0x248E081e3C9e738D7C1ded5d471069dcf4Fd9B15",
      DevcashContractABI: [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "balanceOf",
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
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],
      DevcashContract: null,
      PlaceContractAddress: "0x57eF7aFeC35e3FB921B73ea7eC60caDB5981b198",
      PlaceContractABI: [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_devcash",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newFee",
				"type": "uint256"
			}
		],
		"name": "feeChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "colour",
				"type": "string"
			}
		],
		"name": "placed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "changeFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "changeOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_feeRecipient",
				"type": "address"
			}
		],
		"name": "changefeeRecipient",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devcash",
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
		"name": "feeRecipient",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "colour",
				"type": "string"
			}
		],
		"name": "place",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
],
      PlaceContract: null,
      signer: null,
    };
    window.Contract = Contract;
    window.Pixel = Pixel;

    // toastr Notifications
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-center",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "100",
        "timeOut": "3500",
        "extendedTimeOut": "100",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

})(window);
