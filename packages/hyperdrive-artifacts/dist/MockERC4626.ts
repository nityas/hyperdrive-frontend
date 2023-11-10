export const MockERC4626 = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "contract ERC20Mintable",
          "name": "_asset",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_initialRate",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_admin",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "_isCompetitionMode",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract Authority",
          "name": "newAuthority",
          "type": "address"
        }
      ],
      "name": "AuthorityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "Deposit",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "PublicCapabilityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "indexed": true,
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "RoleCapabilityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "contract Authority",
          "name": "authority",
          "type": "address"
        }
      ],
      "name": "TargetCustomAuthorityUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "UserRoleUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "caller",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "Withdraw",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DOMAIN_SEPARATOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
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
      "inputs": [],
      "name": "asset",
      "outputs": [
        {
          "internalType": "contract ERC20",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "authority",
      "outputs": [
        {
          "internalType": "contract Authority",
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
          "internalType": "address",
          "name": "",
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
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        }
      ],
      "name": "canCall",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "convertToAssets",
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
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "convertToShares",
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
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
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
          "name": "_assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "deposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        }
      ],
      "name": "doesRoleHaveCapability",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        }
      ],
      "name": "doesUserHaveRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRate",
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
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "name": "getRolesWithCapability",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "getTargetCustomAuthority",
      "outputs": [
        {
          "internalType": "contract Authority",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "getUserRoles",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "",
          "type": "bytes4"
        }
      ],
      "name": "isCapabilityPublic",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isCompetitionMode",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "maxDeposit",
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
          "name": "",
          "type": "address"
        }
      ],
      "name": "maxMint",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxRedeem",
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
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "maxWithdraw",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "nonces",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "deadline",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "v",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "r",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "s",
          "type": "bytes32"
        }
      ],
      "name": "permit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewDeposit",
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
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "previewMint",
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
          "name": "shares",
          "type": "uint256"
        }
      ],
      "name": "previewRedeem",
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
          "name": "assets",
          "type": "uint256"
        }
      ],
      "name": "previewWithdraw",
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
          "name": "_shares",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "redeem",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract Authority",
          "name": "newAuthority",
          "type": "address"
        }
      ],
      "name": "setAuthority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setPublicCapability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_rate_",
          "type": "uint256"
        }
      ],
      "name": "setRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bytes4",
          "name": "functionSig",
          "type": "bytes4"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setRoleCapability",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "internalType": "contract Authority",
          "name": "customAuthority",
          "type": "address"
        }
      ],
      "name": "setTargetCustomAuthority",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "role",
          "type": "uint8"
        },
        {
          "internalType": "bool",
          "name": "enabled",
          "type": "bool"
        }
      ],
      "name": "setUserRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalAssets",
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
      "inputs": [],
      "name": "totalSupply",
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
          "name": "amount",
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
          "name": "amount",
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
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_assets",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "_receiver",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x6101206040523480156200001257600080fd5b50604051620027ea380380620027ea833981016040819052620000359162000310565b813081818989898181846001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200007d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000a39190620003c8565b6000620000b1848262000483565b506001620000c0838262000483565b5060ff81166080524660a052620000d662000196565b60c0525050506001600160a01b0392831660e0525050600680548483166001600160a01b0319918216811790925560078054938516939091169290921790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a3505050600c9390935542600d5515156101005250620005cd9350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620001ca91906200054f565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b03811681146200024857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200027357600080fd5b81516001600160401b03808211156200029057620002906200024b565b604051601f8301601f19908116603f01168101908282118183101715620002bb57620002bb6200024b565b81604052838152602092508683858801011115620002d857600080fd5b600091505b83821015620002fc5785820183015181830184015290820190620002dd565b600093810190920192909252949350505050565b60008060008060008060c087890312156200032a57600080fd5b8651620003378162000232565b60208801519096506001600160401b03808211156200035557600080fd5b620003638a838b0162000261565b965060408901519150808211156200037a57600080fd5b506200038989828a0162000261565b945050606087015192506080870151620003a38162000232565b60a08801519092508015158114620003ba57600080fd5b809150509295509295509295565b600060208284031215620003db57600080fd5b815160ff81168114620003ed57600080fd5b9392505050565b600181811c908216806200040957607f821691505b6020821081036200042a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200047e57600081815260208120601f850160051c81016020861015620004595750805b601f850160051c820191505b818110156200047a5782815560010162000465565b5050505b505050565b81516001600160401b038111156200049f576200049f6200024b565b620004b781620004b08454620003f4565b8462000430565b602080601f831160018114620004ef5760008415620004d65750858301515b600019600386901b1c1916600185901b1785556200047a565b600085815260208120601f198616915b828110156200052057888601518255948401946001909101908401620004ff565b50858210156200053f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60008083546200055f81620003f4565b600182811680156200057a57600181146200059057620005c1565b60ff1984168752821515830287019450620005c1565b8760005260208060002060005b85811015620005b85781548a8201529084019082016200059d565b50505082870194505b50929695505050505050565b60805160a05160c05160e051610100516121a06200064a600039600081816104b00152610aba0152600081816103d50152818161072d015281816113d501528181611563015281816116c101528181611759015281816118ab01526119ed01526000610b8101526000610b510152600061038101526121a06000f3fe608060405234801561001057600080fd5b506004361061028a5760003560e01c80637a9e5e4b1161015c578063c53a3985116100ce578063dd62ed3e11610087578063dd62ed3e14610630578063e688747b1461065b578063ea7ca27614610691578063ed0d0efb146106c8578063ef8b30f7146106e8578063f2fde38b146106fb57600080fd5b8063c53a3985146105a5578063c63d75b61461040f578063c6e6f592146105ce578063ce96cb77146105e1578063d505accf146105f4578063d905777e1461060757600080fd5b8063a9059cbb11610120578063a9059cbb14610533578063b3d7f6b914610546578063b460af9414610559578063b70096131461056c578063ba0876521461057f578063bf7e214f1461059257600080fd5b80637a9e5e4b146104d25780637ecebe00146104e55780638da5cb5b1461050557806394bf804d1461051857806395d89b411461052b57600080fd5b806334fcf43711610200578063679aefce116101b9578063679aefce1461044a57806367aff484146104525780636e553f651461046557806370a0823114610478578063728b952b146104985780637a8c63b5146104ab57600080fd5b806334fcf437146103b55780633644e515146103c857806338d52e0f146103d0578063402d267d1461040f5780634b5159da146104245780634cdad5061461043757600080fd5b80630a28a477116102525780630a28a477146103155780630bade8a4146103285780630ea9b75b1461034b57806318160ddd1461036057806323b872dd14610369578063313ce5671461037c57600080fd5b806301e1d1141461028f57806306a36aee146102aa57806306fdde03146102ca57806307a2d13a146102df578063095ea7b3146102f2575b600080fd5b61029761070e565b6040519081526020015b60405180910390f35b6102976102b8366004611c1a565b60096020526000908152604090205481565b6102d26107af565b6040516102a19190611c37565b6102976102ed366004611c85565b61083d565b610305610300366004611c9e565b61086a565b60405190151581526020016102a1565b610297610323366004611c85565b6108d7565b610305610336366004611ce7565b600a6020526000908152604090205460ff1681565b61035e610359366004611d21565b6108f7565b005b61029760025481565b610305610377366004611d68565b6109d8565b6103a37f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a1565b61035e6103c3366004611c85565b610ab8565b610297610b4d565b6103f77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102a1565b61029761041d366004611c1a565b5060001990565b61035e610432366004611da9565b610ba3565b610297610445366004611c85565b610c35565b600c54610297565b61035e610460366004611de0565b610c40565b610297610473366004611e0e565b610d08565b610297610486366004611c1a565b60036020526000908152604090205481565b61035e6104a6366004611e33565b610d1c565b6103057f000000000000000000000000000000000000000000000000000000000000000081565b61035e6104e0366004611c1a565b610da5565b6102976104f3366004611c1a565b60056020526000908152604090205481565b6006546103f7906001600160a01b031681565b610297610526366004611e0e565b610e8f565b6102d2610ea3565b610305610541366004611c9e565b610eb0565b610297610554366004611c85565b610f16565b610297610567366004611e61565b610f35565b61030561057a366004611e98565b610f52565b61029761058d366004611e61565b611050565b6007546103f7906001600160a01b031681565b6103f76105b3366004611c1a565b6008602052600090815260409020546001600160a01b031681565b6102976105dc366004611c85565b611065565b6102976105ef366004611c1a565b611085565b61035e610602366004611edf565b6110a7565b610297610615366004611c1a565b6001600160a01b031660009081526003602052604090205490565b61029761063e366004611e33565b600460209081526000928352604080842090915290825290205481565b610305610669366004611f4d565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61030561069f366004611f80565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102976106d6366004611ce7565b600b6020526000908152604090205481565b6102976106f6366004611c85565b6112eb565b61035e610709366004611c1a565b6112f6565b6000610718611374565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190611fac565b6107aa9190611fdb565b905090565b600080546107bc90611fee565b80601f01602080910402602001604051908101604052809291908181526020018280546107e890611fee565b80156108355780601f1061080a57610100808354040283529160200191610835565b820191906000526020600020905b81548152906001019060200180831161081857829003601f168201915b505050505081565b60025460009080156108615761085c61085461070e565b84908361144e565b610863565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108c59086815260200190565b60405180910390a35060015b92915050565b60025460009080156108615761085c816108ef61070e565b85919061146c565b61090d336000356001600160e01b031916611492565b6109325760405162461bcd60e51b815260040161092990612028565b60405180910390fd5b8015610962576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610989565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516109cb911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610a3457610a0f838261204e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610a5c90849061204e565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061214b83398151915290610aa59087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610b4057610af4336000356001600160e01b031916611492565b610b405760405162461bcd60e51b815260206004820152601b60248201527f4d6f636b455243343632363a206e6f7420617574686f72697a656400000000006044820152606401610929565b610b4861153b565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610b7e576107aa6115cf565b507f000000000000000000000000000000000000000000000000000000000000000090565b610bb9336000356001600160e01b031916611492565b610bd55760405162461bcd60e51b815260040161092990612028565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006108d18261083d565b610c56336000356001600160e01b031916611492565b610c725760405162461bcd60e51b815260040161092990612028565b8015610ca1576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610cc7565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516109cb911515815260200190565b6000610d1261153b565b6108638383611669565b610d32336000356001600160e01b031916611492565b610d4e5760405162461bcd60e51b815260040161092990612028565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610e3a575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610df990339030906001600160e01b03196000351690600401612061565b602060405180830381865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a919061208e565b610e4357600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610e9961153b565b610863838361173f565b600180546107bc90611fee565b33600090815260036020526040812080548391908390610ed190849061204e565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061214b833981519152906108c59086815260200190565b60025460009080156108615761085c610f2d61070e565b84908361146c565b6000610f3f61153b565b610f4a8484846117ce565b949350505050565b6001600160a01b038083166000908152600860205260408120549091168015610fee5760405163b700961360e01b81526001600160a01b0382169063b700961390610fa590889088908890600401612061565b602060405180830381865afa158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe6919061208e565b915050610863565b6001600160e01b031983166000908152600a602052604090205460ff168061104757506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b600061105a61153b565b610f4a8484846118d2565b60025460009080156108615761085c8161107d61070e565b85919061144e565b6001600160a01b0381166000908152600360205260408120546108d19061083d565b428410156110f75760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610929565b60006001611103610b4d565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561120f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906112455750876001600160a01b0316816001600160a01b0316145b6112825760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610929565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006108d182611065565b61130c336000356001600160e01b031916611492565b6113285760405162461bcd60e51b815260040161092990612028565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c546000036113865750600090565b60006113a46301e13380600d544261139e919061204e565b90611a14565b905060006108636113c083600c54611a2990919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114489190611fac565b90611a29565b600082600019048411830215820261146557600080fd5b5091020490565b600082600019048411830215820261148357600080fd5b50910281810615159190040190565b6007546000906001600160a01b0316801580159061151c575060405163b700961360e01b81526001600160a01b0382169063b7009613906114db90879030908890600401612061565b602060405180830381865afa1580156114f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151c919061208e565b80610f4a57506006546001600160a01b03858116911614949350505050565b6000611545611374565b905080156115c85760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156115af57600080fd5b505af11580156115c3573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161160191906120ab565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000611674836112eb565b9050806000036116b45760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610929565b6116e96001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611a3e565b6116f38282611ac8565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36108d1565b600061174a83610f16565b90506117816001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611a3e565b61178b8284611ac8565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611732565b60006117d9846108d7565b9050336001600160a01b03831614611849576001600160a01b0382166000908152600460209081526040808320338452909152902054600019811461184757611822828261204e565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6118538282611b22565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611b84565b6000336001600160a01b03831614611942576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146119405761191b858261204e565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61194b84610c35565b90508060000361198b5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610929565b6119958285611b22565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611b84565b600061086383670de0b6b3a76400008461144e565b60006108638383670de0b6b3a764000061144e565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ac15760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610929565b5050505050565b8060026000828254611ada9190611fdb565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061214b83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611b4a90849061204e565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061214b83398151915290602001611b16565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611bfc5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610929565b50505050565b6001600160a01b0381168114611c1757600080fd5b50565b600060208284031215611c2c57600080fd5b813561086381611c02565b600060208083528351808285015260005b81811015611c6457858101830151858201604001528201611c48565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611c9757600080fd5b5035919050565b60008060408385031215611cb157600080fd5b8235611cbc81611c02565b946020939093013593505050565b80356001600160e01b031981168114611ce257600080fd5b919050565b600060208284031215611cf957600080fd5b61086382611cca565b803560ff81168114611ce257600080fd5b8015158114611c1757600080fd5b600080600060608486031215611d3657600080fd5b611d3f84611d02565b9250611d4d60208501611cca565b91506040840135611d5d81611d13565b809150509250925092565b600080600060608486031215611d7d57600080fd5b8335611d8881611c02565b92506020840135611d9881611c02565b929592945050506040919091013590565b60008060408385031215611dbc57600080fd5b611dc583611cca565b91506020830135611dd581611d13565b809150509250929050565b600080600060608486031215611df557600080fd5b8335611e0081611c02565b9250611d4d60208501611d02565b60008060408385031215611e2157600080fd5b823591506020830135611dd581611c02565b60008060408385031215611e4657600080fd5b8235611e5181611c02565b91506020830135611dd581611c02565b600080600060608486031215611e7657600080fd5b833592506020840135611e8881611c02565b91506040840135611d5d81611c02565b600080600060608486031215611ead57600080fd5b8335611eb881611c02565b92506020840135611ec881611c02565b9150611ed660408501611cca565b90509250925092565b600080600080600080600060e0888a031215611efa57600080fd5b8735611f0581611c02565b96506020880135611f1581611c02565b95506040880135945060608801359350611f3160808901611d02565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f6057600080fd5b611f6983611d02565b9150611f7760208401611cca565b90509250929050565b60008060408385031215611f9357600080fd5b8235611f9e81611c02565b9150611f7760208401611d02565b600060208284031215611fbe57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108d1576108d1611fc5565b600181811c9082168061200257607f821691505b60208210810361202257634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156108d1576108d1611fc5565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6000602082840312156120a057600080fd5b815161086381611d13565b600080835481600182811c9150808316806120c757607f831692505b602080841082036120e657634e487b7160e01b86526022600452602486fd5b8180156120fa576001811461210f5761213c565b60ff198616895284151585028901965061213c565b60008a81526020902060005b868110156121345781548b82015290850190830161211b565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212203ac4bf5534d48c274baf3582cb7063ebdd82f787c0f65766928997cd8907320564736f6c63430008130033",
    "sourceMap": "963:2775:47:-:0;;;1171:442;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1450:6;1476:4;1149:6:98;1157:10;1396:6:47;1406:5;1413:7;1290:5:99;1297:7;1306:6;-1:-1:-1;;;;;1306:15:99;;:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2094:4:100;:12;2101:5;2094:4;:12;:::i;:::-;-1:-1:-1;2116:6:100;:16;2125:7;2116:6;:16;:::i;:::-;-1:-1:-1;2142:20:100;;;;;2192:13;2173:32;;2242:24;:22;:24::i;:::-;2215:51;;-1:-1:-1;;;;;;;;1335:14:99;;::::1;;::::0;-1:-1:-1;;682:5:97;:14;;;;;-1:-1:-1;;;;;;682:14:97;;;;;;;;706:9;:22;;;;;;;;;;;;;;;;744:40;;765:10;;744:40;;682:5;;744:40;799;;-1:-1:-1;;;;;799:40:97;;;816:10;;799:40;;;;;-1:-1:-1;;;1498:5:47::2;:20:::0;;;;1543:15:::2;1528:12;:30:::0;1568:38:::2;;;::::0;-1:-1:-1;963:2775:47;;-1:-1:-1;;;;963:2775:47;5510:446:100;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;6225:25:167;;;;6266:18;;6259:34;;;;5833:14:100;6309:18:167;;;6302:34;5869:13:100;6352:18:167;;;6345:34;5912:4:100;6395:19:167;;;6388:61;6197:19;;5640:295:100;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;14:146:167:-;-1:-1:-1;;;;;104:31:167;;94:42;;84:70;;150:1;147;140:12;84:70;14:146;:::o;165:127::-;226:10;221:3;217:20;214:1;207:31;257:4;254:1;247:15;281:4;278:1;271:15;297:840;351:5;404:3;397:4;389:6;385:17;381:27;371:55;;422:1;419;412:12;371:55;445:13;;-1:-1:-1;;;;;507:10:167;;;504:36;;;520:18;;:::i;:::-;595:2;589:9;563:2;649:13;;-1:-1:-1;;645:22:167;;;669:2;641:31;637:40;625:53;;;693:18;;;713:22;;;690:46;687:72;;;739:18;;:::i;:::-;779:10;775:2;768:22;814:2;806:6;799:18;836:4;826:14;;881:3;876:2;871;863:6;859:15;855:24;852:33;849:53;;;898:1;895;888:12;849:53;920:1;911:10;;930:133;944:2;941:1;938:9;930:133;;;1032:14;;;1028:23;;1022:30;1001:14;;;997:23;;990:63;955:10;;;;930:133;;;1105:1;1083:15;;;1079:24;;;1072:35;;;;1087:6;297:840;-1:-1:-1;;;;297:840:167:o;1142:1103::-;1297:6;1305;1313;1321;1329;1337;1390:3;1378:9;1369:7;1365:23;1361:33;1358:53;;;1407:1;1404;1397:12;1358:53;1439:9;1433:16;1458:46;1498:5;1458:46;:::i;:::-;1572:2;1557:18;;1551:25;1523:5;;-1:-1:-1;;;;;;1625:14:167;;;1622:34;;;1652:1;1649;1642:12;1622:34;1675:61;1728:7;1719:6;1708:9;1704:22;1675:61;:::i;:::-;1665:71;;1782:2;1771:9;1767:18;1761:25;1745:41;;1811:2;1801:8;1798:16;1795:36;;;1827:1;1824;1817:12;1795:36;;1850:63;1905:7;1894:8;1883:9;1879:24;1850:63;:::i;:::-;1840:73;;;1953:2;1942:9;1938:18;1932:25;1922:35;;2002:3;1991:9;1987:19;1981:26;2016:48;2056:7;2016:48;:::i;:::-;2135:3;2120:19;;2114:26;2083:7;;-1:-1:-1;2178:15:167;;2171:23;2159:36;;2149:64;;2209:1;2206;2199:12;2149:64;2232:7;2222:17;;;1142:1103;;;;;;;;:::o;2250:273::-;2318:6;2371:2;2359:9;2350:7;2346:23;2342:32;2339:52;;;2387:1;2384;2377:12;2339:52;2419:9;2413:16;2469:4;2462:5;2458:16;2451:5;2448:27;2438:55;;2489:1;2486;2479:12;2438:55;2512:5;2250:273;-1:-1:-1;;;2250:273:167:o;2528:380::-;2607:1;2603:12;;;;2650;;;2671:61;;2725:4;2717:6;2713:17;2703:27;;2671:61;2778:2;2770:6;2767:14;2747:18;2744:38;2741:161;;2824:10;2819:3;2815:20;2812:1;2805:31;2859:4;2856:1;2849:15;2887:4;2884:1;2877:15;2741:161;;2528:380;;;:::o;3039:545::-;3141:2;3136:3;3133:11;3130:448;;;3177:1;3202:5;3198:2;3191:17;3247:4;3243:2;3233:19;3317:2;3305:10;3301:19;3298:1;3294:27;3288:4;3284:38;3353:4;3341:10;3338:20;3335:47;;;-1:-1:-1;3376:4:167;3335:47;3431:2;3426:3;3422:12;3419:1;3415:20;3409:4;3405:31;3395:41;;3486:82;3504:2;3497:5;3494:13;3486:82;;;3549:17;;;3530:1;3519:13;3486:82;;;3490:3;;;3130:448;3039:545;;;:::o;3760:1352::-;3880:10;;-1:-1:-1;;;;;3902:30:167;;3899:56;;;3935:18;;:::i;:::-;3964:97;4054:6;4014:38;4046:4;4040:11;4014:38;:::i;:::-;4008:4;3964:97;:::i;:::-;4116:4;;4180:2;4169:14;;4197:1;4192:663;;;;4899:1;4916:6;4913:89;;;-1:-1:-1;4968:19:167;;;4962:26;4913:89;-1:-1:-1;;3717:1:167;3713:11;;;3709:24;3705:29;3695:40;3741:1;3737:11;;;3692:57;5015:81;;4162:944;;4192:663;2986:1;2979:14;;;3023:4;3010:18;;-1:-1:-1;;4228:20:167;;;4346:236;4360:7;4357:1;4354:14;4346:236;;;4449:19;;;4443:26;4428:42;;4541:27;;;;4509:1;4497:14;;;;4376:19;;4346:236;;;4350:3;4610:6;4601:7;4598:19;4595:201;;;4671:19;;;4665:26;-1:-1:-1;;4754:1:167;4750:14;;;4766:3;4746:24;4742:37;4738:42;4723:58;4708:74;;4595:201;-1:-1:-1;;;;;4842:1:167;4826:14;;;4822:22;4809:36;;-1:-1:-1;3760:1352:167:o;5117:844::-;5247:3;5276:1;5309:6;5303:13;5339:36;5365:9;5339:36;:::i;:::-;5394:1;5411:18;;;5438:133;;;;5585:1;5580:356;;;;5404:532;;5438:133;-1:-1:-1;;5471:24:167;;5459:37;;5544:14;;5537:22;5525:35;;5516:45;;;-1:-1:-1;5438:133:167;;5580:356;5611:6;5608:1;5601:17;5641:4;5686:2;5683:1;5673:16;5711:1;5725:165;5739:6;5736:1;5733:13;5725:165;;;5817:14;;5804:11;;;5797:35;5860:16;;;;5754:10;;5725:165;;;5729:3;;;5919:6;5914:3;5910:16;5903:23;;5404:532;-1:-1:-1;5952:3:167;;5117:844;-1:-1:-1;;;;;;5117:844:167:o;5966:489::-;963:2775:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b506004361061028a5760003560e01c80637a9e5e4b1161015c578063c53a3985116100ce578063dd62ed3e11610087578063dd62ed3e14610630578063e688747b1461065b578063ea7ca27614610691578063ed0d0efb146106c8578063ef8b30f7146106e8578063f2fde38b146106fb57600080fd5b8063c53a3985146105a5578063c63d75b61461040f578063c6e6f592146105ce578063ce96cb77146105e1578063d505accf146105f4578063d905777e1461060757600080fd5b8063a9059cbb11610120578063a9059cbb14610533578063b3d7f6b914610546578063b460af9414610559578063b70096131461056c578063ba0876521461057f578063bf7e214f1461059257600080fd5b80637a9e5e4b146104d25780637ecebe00146104e55780638da5cb5b1461050557806394bf804d1461051857806395d89b411461052b57600080fd5b806334fcf43711610200578063679aefce116101b9578063679aefce1461044a57806367aff484146104525780636e553f651461046557806370a0823114610478578063728b952b146104985780637a8c63b5146104ab57600080fd5b806334fcf437146103b55780633644e515146103c857806338d52e0f146103d0578063402d267d1461040f5780634b5159da146104245780634cdad5061461043757600080fd5b80630a28a477116102525780630a28a477146103155780630bade8a4146103285780630ea9b75b1461034b57806318160ddd1461036057806323b872dd14610369578063313ce5671461037c57600080fd5b806301e1d1141461028f57806306a36aee146102aa57806306fdde03146102ca57806307a2d13a146102df578063095ea7b3146102f2575b600080fd5b61029761070e565b6040519081526020015b60405180910390f35b6102976102b8366004611c1a565b60096020526000908152604090205481565b6102d26107af565b6040516102a19190611c37565b6102976102ed366004611c85565b61083d565b610305610300366004611c9e565b61086a565b60405190151581526020016102a1565b610297610323366004611c85565b6108d7565b610305610336366004611ce7565b600a6020526000908152604090205460ff1681565b61035e610359366004611d21565b6108f7565b005b61029760025481565b610305610377366004611d68565b6109d8565b6103a37f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016102a1565b61035e6103c3366004611c85565b610ab8565b610297610b4d565b6103f77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016102a1565b61029761041d366004611c1a565b5060001990565b61035e610432366004611da9565b610ba3565b610297610445366004611c85565b610c35565b600c54610297565b61035e610460366004611de0565b610c40565b610297610473366004611e0e565b610d08565b610297610486366004611c1a565b60036020526000908152604090205481565b61035e6104a6366004611e33565b610d1c565b6103057f000000000000000000000000000000000000000000000000000000000000000081565b61035e6104e0366004611c1a565b610da5565b6102976104f3366004611c1a565b60056020526000908152604090205481565b6006546103f7906001600160a01b031681565b610297610526366004611e0e565b610e8f565b6102d2610ea3565b610305610541366004611c9e565b610eb0565b610297610554366004611c85565b610f16565b610297610567366004611e61565b610f35565b61030561057a366004611e98565b610f52565b61029761058d366004611e61565b611050565b6007546103f7906001600160a01b031681565b6103f76105b3366004611c1a565b6008602052600090815260409020546001600160a01b031681565b6102976105dc366004611c85565b611065565b6102976105ef366004611c1a565b611085565b61035e610602366004611edf565b6110a7565b610297610615366004611c1a565b6001600160a01b031660009081526003602052604090205490565b61029761063e366004611e33565b600460209081526000928352604080842090915290825290205481565b610305610669366004611f4d565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b61030561069f366004611f80565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b6102976106d6366004611ce7565b600b6020526000908152604090205481565b6102976106f6366004611c85565b6112eb565b61035e610709366004611c1a565b6112f6565b6000610718611374565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561077c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107a09190611fac565b6107aa9190611fdb565b905090565b600080546107bc90611fee565b80601f01602080910402602001604051908101604052809291908181526020018280546107e890611fee565b80156108355780601f1061080a57610100808354040283529160200191610835565b820191906000526020600020905b81548152906001019060200180831161081857829003601f168201915b505050505081565b60025460009080156108615761085c61085461070e565b84908361144e565b610863565b825b9392505050565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906108c59086815260200190565b60405180910390a35060015b92915050565b60025460009080156108615761085c816108ef61070e565b85919061146c565b61090d336000356001600160e01b031916611492565b6109325760405162461bcd60e51b815260040161092990612028565b60405180910390fd5b8015610962576001600160e01b031982166000908152600b602052604090208054600160ff86161b179055610989565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b151836040516109cb911515815260200190565b60405180910390a3505050565b6001600160a01b03831660009081526004602090815260408083203384529091528120546000198114610a3457610a0f838261204e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b03851660009081526003602052604081208054859290610a5c90849061204e565b90915550506001600160a01b038085166000818152600360205260409081902080548701905551909187169060008051602061214b83398151915290610aa59087815260200190565b60405180910390a3506001949350505050565b7f000000000000000000000000000000000000000000000000000000000000000015610b4057610af4336000356001600160e01b031916611492565b610b405760405162461bcd60e51b815260206004820152601b60248201527f4d6f636b455243343632363a206e6f7420617574686f72697a656400000000006044820152606401610929565b610b4861153b565b600c55565b60007f00000000000000000000000000000000000000000000000000000000000000004614610b7e576107aa6115cf565b507f000000000000000000000000000000000000000000000000000000000000000090565b610bb9336000356001600160e01b031916611492565b610bd55760405162461bcd60e51b815260040161092990612028565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b60006108d18261083d565b610c56336000356001600160e01b031916611492565b610c725760405162461bcd60e51b815260040161092990612028565b8015610ca1576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610cc7565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf2836040516109cb911515815260200190565b6000610d1261153b565b6108638383611669565b610d32336000356001600160e01b031916611492565b610d4e5760405162461bcd60e51b815260040161092990612028565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610e3a575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610df990339030906001600160e01b03196000351690600401612061565b602060405180830381865afa158015610e16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e3a919061208e565b610e4357600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6000610e9961153b565b610863838361173f565b600180546107bc90611fee565b33600090815260036020526040812080548391908390610ed190849061204e565b90915550506001600160a01b0383166000818152600360205260409081902080548501905551339060008051602061214b833981519152906108c59086815260200190565b60025460009080156108615761085c610f2d61070e565b84908361146c565b6000610f3f61153b565b610f4a8484846117ce565b949350505050565b6001600160a01b038083166000908152600860205260408120549091168015610fee5760405163b700961360e01b81526001600160a01b0382169063b700961390610fa590889088908890600401612061565b602060405180830381865afa158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe6919061208e565b915050610863565b6001600160e01b031983166000908152600a602052604090205460ff168061104757506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b600061105a61153b565b610f4a8484846118d2565b60025460009080156108615761085c8161107d61070e565b85919061144e565b6001600160a01b0381166000908152600360205260408120546108d19061083d565b428410156110f75760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610929565b60006001611103610b4d565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa15801561120f573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906112455750876001600160a01b0316816001600160a01b0316145b6112825760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610929565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60006108d182611065565b61130c336000356001600160e01b031916611492565b6113285760405162461bcd60e51b815260040161092990612028565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6000600c546000036113865750600090565b60006113a46301e13380600d544261139e919061204e565b90611a14565b905060006108636113c083600c54611a2990919063ffffffff16565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611424573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114489190611fac565b90611a29565b600082600019048411830215820261146557600080fd5b5091020490565b600082600019048411830215820261148357600080fd5b50910281810615159190040190565b6007546000906001600160a01b0316801580159061151c575060405163b700961360e01b81526001600160a01b0382169063b7009613906114db90879030908890600401612061565b602060405180830381865afa1580156114f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151c919061208e565b80610f4a57506006546001600160a01b03858116911614949350505050565b6000611545611374565b905080156115c85760405163140e25ad60e31b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156115af57600080fd5b505af11580156115c3573d6000803e3d6000fd5b505050505b5042600d55565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600060405161160191906120ab565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6000611674836112eb565b9050806000036116b45760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f53484152455360a81b6044820152606401610929565b6116e96001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333086611a3e565b6116f38282611ac8565b60408051848152602081018390526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d791015b60405180910390a36108d1565b600061174a83610f16565b90506117816001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016333084611a3e565b61178b8284611ac8565b60408051828152602081018590526001600160a01b0384169133917fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d79101611732565b60006117d9846108d7565b9050336001600160a01b03831614611849576001600160a01b0382166000908152600460209081526040808320338452909152902054600019811461184757611822828261204e565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b6118538282611b22565b60408051858152602081018390526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168486611b84565b6000336001600160a01b03831614611942576001600160a01b038216600090815260046020908152604080832033845290915290205460001981146119405761191b858261204e565b6001600160a01b03841660009081526004602090815260408083203384529091529020555b505b61194b84610c35565b90508060000361198b5760405162461bcd60e51b815260206004820152600b60248201526a5a45524f5f41535345545360a81b6044820152606401610929565b6119958285611b22565b60408051828152602081018690526001600160a01b03808516929086169133917ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db910160405180910390a46108636001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168483611b84565b600061086383670de0b6b3a76400008461144e565b60006108638383670de0b6b3a764000061144e565b60006040516323b872dd60e01b81528460048201528360248201528260448201526020600060648360008a5af13d15601f3d1160016000511416171691505080611ac15760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610929565b5050505050565b8060026000828254611ada9190611fdb565b90915550506001600160a01b03821660008181526003602090815260408083208054860190555184815260008051602061214b83398151915291015b60405180910390a35050565b6001600160a01b03821660009081526003602052604081208054839290611b4a90849061204e565b90915550506002805482900390556040518181526000906001600160a01b0384169060008051602061214b83398151915290602001611b16565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d1160016000511416171691505080611bfc5760405162461bcd60e51b815260206004820152600f60248201526e1514905394d1915497d19052531151608a1b6044820152606401610929565b50505050565b6001600160a01b0381168114611c1757600080fd5b50565b600060208284031215611c2c57600080fd5b813561086381611c02565b600060208083528351808285015260005b81811015611c6457858101830151858201604001528201611c48565b506000604082860101526040601f19601f8301168501019250505092915050565b600060208284031215611c9757600080fd5b5035919050565b60008060408385031215611cb157600080fd5b8235611cbc81611c02565b946020939093013593505050565b80356001600160e01b031981168114611ce257600080fd5b919050565b600060208284031215611cf957600080fd5b61086382611cca565b803560ff81168114611ce257600080fd5b8015158114611c1757600080fd5b600080600060608486031215611d3657600080fd5b611d3f84611d02565b9250611d4d60208501611cca565b91506040840135611d5d81611d13565b809150509250925092565b600080600060608486031215611d7d57600080fd5b8335611d8881611c02565b92506020840135611d9881611c02565b929592945050506040919091013590565b60008060408385031215611dbc57600080fd5b611dc583611cca565b91506020830135611dd581611d13565b809150509250929050565b600080600060608486031215611df557600080fd5b8335611e0081611c02565b9250611d4d60208501611d02565b60008060408385031215611e2157600080fd5b823591506020830135611dd581611c02565b60008060408385031215611e4657600080fd5b8235611e5181611c02565b91506020830135611dd581611c02565b600080600060608486031215611e7657600080fd5b833592506020840135611e8881611c02565b91506040840135611d5d81611c02565b600080600060608486031215611ead57600080fd5b8335611eb881611c02565b92506020840135611ec881611c02565b9150611ed660408501611cca565b90509250925092565b600080600080600080600060e0888a031215611efa57600080fd5b8735611f0581611c02565b96506020880135611f1581611c02565b95506040880135945060608801359350611f3160808901611d02565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f6057600080fd5b611f6983611d02565b9150611f7760208401611cca565b90509250929050565b60008060408385031215611f9357600080fd5b8235611f9e81611c02565b9150611f7760208401611d02565b600060208284031215611fbe57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b808201808211156108d1576108d1611fc5565b600181811c9082168061200257607f821691505b60208210810361202257634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b818103818111156108d1576108d1611fc5565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b6000602082840312156120a057600080fd5b815161086381611d13565b600080835481600182811c9150808316806120c757607f831692505b602080841082036120e657634e487b7160e01b86526022600452602486fd5b8180156120fa576001811461210f5761213c565b60ff198616895284151585028901965061213c565b60008a81526020902060005b868110156121345781548b82015290850190830161211b565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212203ac4bf5534d48c274baf3582cb7063ebdd82f787c0f65766928997cd8907320564736f6c63430008130033",
    "sourceMap": "963:2775:47:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2705:140;;;:::i;:::-;;;160:25:167;;;148:2;133:18;2705:140:47;;;;;;;;1622:47:98;;;;;;:::i;:::-;;;;;;;;;;;;;;1031:18:100;;;:::i;:::-;;;;;;;:::i;4463:257:99:-;;;;;;:::i;:::-;;:::i;2461:211:100:-;;;;;;:::i;:::-;;:::i;:::-;;;1989:14:167;;1982:22;1964:41;;1952:2;1937:18;2461:211:100;1824:187:167;5114:255:99;;;;;;:::i;:::-;;:::i;1676:49:98:-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4390:396;;;;;;:::i;:::-;;:::i;:::-;;1304:26:100;;;;;;3057:592;;;;;;:::i;:::-;;:::i;1083:31::-;;;;;;;;3688:4:167;3676:17;;;3658:36;;3646:2;3631:18;1083:31:100;3516:184:167;2869:122:47;;;;;;:::i;:::-;;:::i;5327:177:100:-;;;:::i;1149:28:99:-;;;;;;;;-1:-1:-1;;;;;3884:32:167;;;3866:51;;3854:2;3839:18;1149:28:99;3705:218:167;5696:108:99;;;;;;:::i;:::-;-1:-1:-1;;;5780:17:99;5696:108;3448:210:98;;;;;;:::i;:::-;;:::i;5375:124:99:-;;;;;;:::i;:::-;;:::i;2997:80:47:-;3065:5;;2997:80;;3853:337:98;;;;;;:::i;:::-;;:::i;1883:185:47:-;;;;;;:::i;:::-;;:::i;1337:44:100:-;;;;;;:::i;:::-;;;;;;;;;;;;;;3006:241:98;;;;;;:::i;:::-;;:::i;1125:39:47:-;;;;;1523:434:97;;;;;;:::i;:::-;;:::i;1751:41:100:-;;;;;;:::i;:::-;;;;;;;;;;;;;;562:20:97;;;;;-1:-1:-1;;;;;562:20:97;;;2074:179:47;;;;;;:::i;:::-;;:::i;1056:20:100:-;;;:::i;2678:373::-;;;;;;:::i;:::-;;:::i;4857:251:99:-;;;;;;:::i;:::-;;:::i;2259:219:47:-;;;;;;:::i;:::-;;:::i;2336:465:98:-;;;;;;:::i;:::-;;:::i;2484:215:47:-;;;;;;:::i;:::-;;:::i;589:26:97:-;;;;;-1:-1:-1;;;;;589:26:97;;;1369:61:98;;;;;;:::i;:::-;;;;;;;;;;;;-1:-1:-1;;;;;1369:61:98;;;4200:257:99;;;;;;:::i;:::-;;:::i;5921:131::-;;;;;;:::i;:::-;;:::i;3838:1483:100:-;;;;;;:::i;:::-;;:::i;6058:112:99:-;;;;;;:::i;:::-;-1:-1:-1;;;;;6147:16:99;6121:7;6147:16;;;:9;:16;;;;;;;6058:112;1388:64:100;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1958:186:98;;;;;;:::i;:::-;-1:-1:-1;;;;;;2083:35:98;2051:4;2083:35;;;:22;:35;;;;;;2075:52;;;;;;2131:1;2074:58;:63;;;1958:186;1795:157;;;;;;:::i;:::-;-1:-1:-1;;;;;1908:18:98;;;;1876:4;1908:18;;;:12;:18;;;;;;1939:1;1900:35;;;;;1899:41;:46;;;1795:157;1732:56;;;;;;:::i;:::-;;;;;;;;;;;;;;4726:125:99;;;;;;:::i;:::-;;:::i;1963:164:97:-;;;;;;:::i;:::-;;:::i;2705:140:47:-;2758:7;2817:21;:19;:21::i;:::-;2784:30;;-1:-1:-1;;;2784:30:47;;2808:4;2784:30;;;3866:51:167;2784:5:47;-1:-1:-1;;;;;2784:15:47;;;;3839:18:167;;2784:30:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:54;;;;:::i;:::-;2777:61;;2705:140;:::o;1031:18:100:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4463:257:99:-;4569:11;;4533:7;;4650:11;;:63;;4673:40;4691:13;:11;:13::i;:::-;4673:6;;4706;4673:17;:40::i;:::-;4650:63;;;4664:6;4650:63;4643:70;4463:257;-1:-1:-1;;;4463:257:99:o;2461:211:100:-;2561:10;2535:4;2551:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2551:30:100;;;;;;;;;;:39;;;2606:37;2535:4;;2551:30;;2606:37;;;;2584:6;160:25:167;;148:2;133:18;;14:177;2606:37:100;;;;;;;;-1:-1:-1;2661:4:100;2461:211;;;;;:::o;5114:255:99:-;5220:11;;5184:7;;5301:11;;:61;;5324:38;5340:6;5348:13;:11;:13::i;:::-;5324:6;;:38;:15;:38::i;4390:396:98:-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;;;;;;;;;4535:7:98::1;4531:184;;;-1:-1:-1::0;;;;;;4558:35:98;::::1;4597:18;4558:35:::0;;;:22:::1;:35;::::0;;;;:57;;4605:1:::1;:9;::::0;::::1;;4558:57;::::0;;4531:184:::1;;;-1:-1:-1::0;;;;;;4646:35:98;::::1;4686:18;4646:35:::0;;;:22:::1;:35;::::0;;;;:58;;4694:1:::1;:9;::::0;::::1;;4685:19;4646:58;::::0;;4531:184:::1;4758:11;-1:-1:-1::0;;;;;4730:49:98::1;;4752:4;4730:49;;;4771:7;4730:49;;;;1989:14:167::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;4730:49:98::1;;;;;;;;4390:396:::0;;;:::o;3057:592:100:-;-1:-1:-1;;;;;3209:15:100;;3175:4;3209:15;;;:9;:15;;;;;;;;3225:10;3209:27;;;;;;;;-1:-1:-1;;3287:28:100;;3283:80;;3347:16;3357:6;3347:7;:16;:::i;:::-;-1:-1:-1;;;;;3317:15:100;;;;;;:9;:15;;;;;;;;3333:10;3317:27;;;;;;;:46;3283:80;-1:-1:-1;;;;;3374:15:100;;;;;;:9;:15;;;;;:25;;3393:6;;3374:15;:25;;3393:6;;3374:25;:::i;:::-;;;;-1:-1:-1;;;;;;;3545:13:100;;;;;;;:9;:13;;;;;;;:23;;;;;;3594:26;3545:13;;3594:26;;;-1:-1:-1;;;;;;;;;;;3594:26:100;;;3562:6;160:25:167;;148:2;133:18;;14:177;3594:26:100;;;;;;;;-1:-1:-1;3638:4:100;;3057:592;-1:-1:-1;;;;3057:592:100:o;2869:122:47:-;1674:17;1670:167;;;1732:33;1745:10;1757:7;;-1:-1:-1;;;;;;1757:7:47;1732:12;:33::i;:::-;1707:119;;;;-1:-1:-1;;;1707:119:47;;10292:2:167;1707:119:47;;;10274:21:167;10331:2;10311:18;;;10304:30;10370:29;10350:18;;;10343:57;10417:18;;1707:119:47;10090:351:167;1707:119:47;2951:9:::1;:7;:9::i;:::-;2970:5;:14:::0;2869:122::o;5327:177:100:-;5384:7;5427:16;5410:13;:33;:87;;5473:24;:22;:24::i;5410:87::-;-1:-1:-1;5446:24:100;;5327:177::o;3448:210:98:-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;-1:-1:-1;;;;;;3549:31:98;::::1;;::::0;;;:18:::1;:31;::::0;;;;;;;;:41;;-1:-1:-1;;3549:41:98::1;::::0;::::1;;::::0;;::::1;::::0;;;3606:45;;1964:41:167;;;3606:45:98::1;::::0;1937:18:167;3606:45:98::1;;;;;;;3448:210:::0;;:::o;5375:124:99:-;5443:7;5469:23;5485:6;5469:15;:23::i;3853:337:98:-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;3986:7:98::1;3982:150;;;-1:-1:-1::0;;;;;4009:18:98;::::1;4031;4009::::0;;;:12:::1;:18;::::0;;;;:40;;4039:1:::1;:9;::::0;::::1;;4009:40;::::0;;3982:150:::1;;;-1:-1:-1::0;;;;;4080:18:98;::::1;4103;4080::::0;;;:12:::1;:18;::::0;;;;:41;;4111:1:::1;:9;::::0;::::1;;4102:19;4080:41;::::0;;3982:150:::1;4169:4;4147:36;;4163:4;-1:-1:-1::0;;;;;4147:36:98::1;;4175:7;4147:36;;;;1989:14:167::0;1982:22;1964:41;;1952:2;1937:18;;1824:187;1883:185:47;1983:7;2002:9;:7;:9::i;:::-;2028:33;2042:7;2051:9;2028:13;:33::i;3006:241:98:-;902:33:97;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;-1:-1:-1;;;;;3121:32:98;;::::1;;::::0;;;:24:::1;:32;::::0;;;;;:50;;-1:-1:-1;;;;;;3121:50:98::1;::::0;;::::1;::::0;;::::1;::::0;;3187:53;::::1;::::0;3121:32;3187:53:::1;3006:241:::0;;:::o;1523:434:97:-;1794:5;;-1:-1:-1;;;;;1794:5:97;1780:10;:19;;:76;;-1:-1:-1;1803:9:97;;:53;;-1:-1:-1;;;1803:53:97;;-1:-1:-1;;;;;1803:9:97;;;;:17;;:53;;1821:10;;1841:4;;-1:-1:-1;;;;;;1803:9:97;1848:7;;;1803:53;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1772:85;;;;;;1868:9;:24;;-1:-1:-1;;;;;;1868:24:97;-1:-1:-1;;;;;1868:24:97;;;;;;;;1908:42;;1925:10;;1908:42;;-1:-1:-1;;1908:42:97;1523:434;:::o;2074:179:47:-;2171:7;2190:9;:7;:9::i;:::-;2216:30;2227:7;2236:9;2216:10;:30::i;1056:20:100:-;;;;;;;:::i;2678:373::-;2774:10;2748:4;2764:21;;;:9;:21;;;;;:31;;2789:6;;2764:21;2748:4;;2764:31;;2789:6;;2764:31;:::i;:::-;;;;-1:-1:-1;;;;;;;2941:13:100;;;;;;:9;:13;;;;;;;:23;;;;;;2990:32;2999:10;;-1:-1:-1;;;;;;;;;;;2990:32:100;;;2958:6;160:25:167;;148:2;133:18;;14:177;4857:251:99;4959:11;;4923:7;;5040:11;;:61;;5063:38;5079:13;:11;:13::i;:::-;5063:6;;5094;5063:15;:38::i;2259:219:47:-;2384:7;2403:9;:7;:9::i;:::-;2429:42;2444:7;2453:9;2464:6;2429:14;:42::i;:::-;2422:49;2259:219;-1:-1:-1;;;;2259:219:47:o;2336:465:98:-;-1:-1:-1;;;;;2515:32:98;;;2471:4;2515:32;;;:24;:32;;;;;;2471:4;;2515:32;2562:38;;2558:101;;2609:50;;-1:-1:-1;;;2609:50:98;;-1:-1:-1;;;;;2609:23:98;;;;;:50;;2633:4;;2639:6;;2647:11;;2609:50;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2602:57;;;;;2558:101;-1:-1:-1;;;;;;2689:31:98;;;;;;:18;:31;;;;;;;;;:105;;-1:-1:-1;;;;;;;2759:35:98;;;;;;:22;:35;;;;;;;;;-1:-1:-1;;;;;2738:18:98;;;;:12;:18;;;;;;;:56;2724:70;;2689:105;2670:124;2336:465;-1:-1:-1;;;;;2336:465:98:o;2484:215:47:-;2607:7;2626:9;:7;:9::i;:::-;2652:40;2665:7;2674:9;2685:6;2652:12;:40::i;4200:257:99:-;4306:11;;4270:7;;4387:11;;:63;;4410:40;4428:6;4436:13;:11;:13::i;:::-;4410:6;;:40;:17;:40::i;5921:131::-;-1:-1:-1;;;;;6028:16:99;;5986:7;6028:16;;;:9;:16;;;;;;6012:33;;:15;:33::i;3838:1483:100:-;4057:15;4045:8;:27;;4037:63;;;;-1:-1:-1;;;4037:63:100;;11303:2:167;4037:63:100;;;11285:21:167;11342:2;11322:18;;;11315:30;11381:25;11361:18;;;11354:53;11424:18;;4037:63:100;11101:347:167;4037:63:100;4265:24;4292:805;4428:18;:16;:18::i;:::-;-1:-1:-1;;;;;4873:13:100;;;;;;;:6;:13;;;;;;;;;:15;;;;;;;;4511:449;;4555:165;4511:449;;;11740:25:167;11819:18;;;11812:43;;;;11891:15;;;11871:18;;;11864:43;11923:18;;;11916:34;;;11966:19;;;11959:35;;;;12010:19;;;;12003:35;;;4511:449:100;;;;;;;;;;11712:19:167;;;4511:449:100;;;4472:514;;;;;;;;-1:-1:-1;;;4350:658:100;;;12307:27:167;12350:11;;;12343:27;;;;12386:12;;;12379:28;;;;12423:12;;4350:658:100;;;-1:-1:-1;;4350:658:100;;;;;;;;;4319:707;;4350:658;4319:707;;;;4292:805;;;;;;;;;12673:25:167;12746:4;12734:17;;12714:18;;;12707:45;12768:18;;;12761:34;;;12811:18;;;12804:34;;;12645:19;;4292:805:100;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4292:805:100;;-1:-1:-1;;4292:805:100;;;-1:-1:-1;;;;;;;5120:30:100;;;;;;:59;;;5174:5;-1:-1:-1;;;;;5154:25:100;:16;-1:-1:-1;;;;;5154:25:100;;5120:59;5112:86;;;;-1:-1:-1;;;5112:86:100;;13051:2:167;5112:86:100;;;13033:21:167;13090:2;13070:18;;;13063:30;-1:-1:-1;;;13109:18:167;;;13102:44;13163:18;;5112:86:100;12849:338:167;5112:86:100;-1:-1:-1;;;;;5213:27:100;;;;;;;:9;:27;;;;;;;;:36;;;;;;;;;;;;;:44;;;5283:31;160:25:167;;;5213:36:100;;5283:31;;;;;133:18:167;5283:31:100;;;;;;;3838:1483;;;;;;;:::o;4726:125:99:-;4795:7;4821:23;4837:6;4821:15;:23::i;1963:164:97:-;902:33;915:10;927:7;;-1:-1:-1;;;;;;927:7:97;902:12;:33::i;:::-;894:58;;;;-1:-1:-1;;;894:58:97;;;;;;;:::i;:::-;2046:5:::1;:16:::0;;-1:-1:-1;;;;;;2046:16:97::1;-1:-1:-1::0;;;;;2046:16:97;::::1;::::0;;::::1;::::0;;;2078:42:::1;::::0;2099:10:::1;::::0;2078:42:::1;::::0;-1:-1:-1;;2078:42:97::1;1963:164:::0;:::o;3310:426:47:-;3364:7;3387:5;;3396:1;3387:10;3383:49;;-1:-1:-1;3420:1:47;;3310:426::o;3383:49::-;3495:19;3517:72;3571:8;3536:12;;3518:15;:30;;;;:::i;:::-;3517:40;;:72::i;:::-;3495:94;;3599:15;3617:88;3669:26;3683:11;3669:5;;:13;;:26;;;;:::i;:::-;3617:30;;-1:-1:-1;;;3617:30:47;;3641:4;3617:30;;;3866:51:167;3617:5:47;-1:-1:-1;;;;;3617:15:47;;;;3839:18:167;;3617:30:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:38;;:88::i;1564:526:102:-;1680:9;1928:1;-1:-1:-1;;1911:19:102;1908:1;1905:26;1902:1;1898:34;1891:42;1878:11;1874:60;1864:116;;1964:1;1961;1954:12;1864:116;-1:-1:-1;2051:9:102;;2047:27;;1564:526::o;2096:672::-;2210:9;2458:1;-1:-1:-1;;2441:19:102;2438:1;2435:26;2432:1;2428:34;2421:42;2408:11;2404:60;2394:116;;2494:1;2491;2484:12;2394:116;-1:-1:-1;2728:9:102;;2691:27;;;2688:34;;2724:27;;;2684:68;;2096:672::o;977:540:97:-;1097:9;;1064:4;;-1:-1:-1;;;;;1097:9:97;1415:27;;;;;:77;;-1:-1:-1;1446:46:97;;-1:-1:-1;;;1446:46:97;;-1:-1:-1;;;;;1446:12:97;;;;;:46;;1459:4;;1473;;1480:11;;1446:46;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1414:96;;;-1:-1:-1;1505:5:97;;-1:-1:-1;;;;;1497:13:97;;;1505:5;;1497:13;1407:103;977:540;-1:-1:-1;;;;977:540:97:o;3083:221:47:-;3121:16;3140:21;:19;:21::i;:::-;3121:40;-1:-1:-1;3175:12:47;;3171:87;;3203:44;;-1:-1:-1;;;3203:44:47;;;;;160:25:167;;;3225:5:47;-1:-1:-1;;;;;3203:34:47;;;;133:18:167;;3203:44:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3171:87;-1:-1:-1;3282:15:47;3267:12;:30;3083:221::o;5510:446:100:-;5575:7;5672:95;5805:4;5789:22;;;;;;:::i;:::-;;;;;;;;;;5640:295;;;14718:25:167;;;;14759:18;;14752:34;;;;5833:14:100;14802:18:167;;;14795:34;5869:13:100;14845:18:167;;;14838:34;5912:4:100;14888:19:167;;;14881:61;14690:19;;5640:295:100;;;;;;;;;;;;5613:336;;;;;;5594:355;;5510:446;:::o;1550:516:99:-;1625:14;1744:22;1759:6;1744:14;:22::i;:::-;1735:31;;;1771:1;1734:38;1726:62;;;;-1:-1:-1;;;1726:62:99;;15155:2:167;1726:62:99;;;15137:21:167;15194:2;15174:18;;;15167:30;-1:-1:-1;;;15213:18:167;;;15206:41;15264:18;;1726:62:99;14953:335:167;1726:62:99;1868:57;-1:-1:-1;;;;;1868:5:99;:22;1891:10;1911:4;1918:6;1868:22;:57::i;:::-;1936:23;1942:8;1952:6;1936:5;:23::i;:::-;1975:45;;;15467:25:167;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;1975:45:99;;;1983:10;;1975:45;;15440:18:167;1975:45:99;;;;;;;;2031:28;6443:73;2072:467;2144:14;2179:19;2191:6;2179:11;:19::i;:::-;2170:28;-1:-1:-1;2341:57:99;-1:-1:-1;;;;;2341:5:99;:22;2364:10;2384:4;2170:28;2341:22;:57::i;:::-;2409:23;2415:8;2425:6;2409:5;:23::i;:::-;2448:45;;;15467:25:167;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;2448:45:99;;;2456:10;;2448:45;;15440:18:167;2448:45:99;15293:248:167;2545:679:99;2666:14;2701:23;2717:6;2701:15;:23::i;:::-;2692:32;-1:-1:-1;2806:10:99;-1:-1:-1;;;;;2806:19:99;;;2802:228;;-1:-1:-1;;;;;2859:16:99;;2841:15;2859:16;;;:9;:16;;;;;;;;2876:10;2859:28;;;;;;;;-1:-1:-1;;2942:28:99;;2938:81;;3003:16;3013:6;3003:7;:16;:::i;:::-;-1:-1:-1;;;;;2972:16:99;;;;;;:9;:16;;;;;;;;2989:10;2972:28;;;;;;;:47;2938:81;2827:203;2802:228;3081:20;3087:5;3094:6;3081:5;:20::i;:::-;3117:53;;;15467:25:167;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;3117:53:99;;;;;;;;3126:10;;3117:53;;15440:18:167;3117:53:99;;;;;;;3181:36;-1:-1:-1;;;;;3181:5:99;:18;3200:8;3210:6;3181:18;:36::i;3230:713::-;3349:14;3379:10;-1:-1:-1;;;;;3379:19:99;;;3375:228;;-1:-1:-1;;;;;3432:16:99;;3414:15;3432:16;;;:9;:16;;;;;;;;3449:10;3432:28;;;;;;;;-1:-1:-1;;3515:28:99;;3511:81;;3576:16;3586:6;3576:7;:16;:::i;:::-;-1:-1:-1;;;;;3545:16:99;;;;;;:9;:16;;;;;;;;3562:10;3545:28;;;;;;;:47;3511:81;3400:203;3375:228;3705:21;3719:6;3705:13;:21::i;:::-;3696:30;;;3731:1;3695:37;3687:61;;;;-1:-1:-1;;;3687:61:99;;15748:2:167;3687:61:99;;;15730:21:167;15787:2;15767:18;;;15760:30;-1:-1:-1;;;15806:18:167;;;15799:41;15857:18;;3687:61:99;15546:335:167;3687:61:99;3800:20;3806:5;3813:6;3800:5;:20::i;:::-;3836:53;;;15467:25:167;;;15523:2;15508:18;;15501:34;;;-1:-1:-1;;;;;3836:53:99;;;;;;;;3845:10;;3836:53;;15440:18:167;3836:53:99;;;;;;;3900:36;-1:-1:-1;;;;;3900:5:99;:18;3919:8;3929:6;3900:18;:36::i;2207:165:33:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;1814:119::-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;1328:1616:104:-;1466:12;1636:4;1630:11;-1:-1:-1;;;1759:17:104;1752:93;1892:4;1888:1;1869:17;1865:25;1858:39;1976:2;1971;1952:17;1948:26;1941:38;2056:6;2051:2;2032:17;2028:26;2021:42;2860:2;2857:1;2852:3;2833:17;2830:1;2823:5;2816;2811:52;2379:16;2372:24;2366:2;2348:16;2345:24;2341:1;2337;2331:8;2328:15;2324:46;2321:76;2121:756;2110:767;;;2905:7;2897:40;;;;-1:-1:-1;;;2897:40:104;;16088:2:167;2897:40:104;;;16070:21:167;16127:2;16107:18;;;16100:30;-1:-1:-1;;;16146:18:167;;;16139:50;16206:18;;2897:40:104;15886:344:167;2897:40:104;1456:1488;1328:1616;;;;:::o;6150:325:100:-;6235:6;6220:11;;:21;;;;;;;:::i;:::-;;;;-1:-1:-1;;;;;;;6387:13:100;;;;;;:9;:13;;;;;;;;:23;;;;;;6436:32;160:25:167;;;-1:-1:-1;;;;;;;;;;;6436:32:100;133:18:167;6436:32:100;;;;;;;;6150:325;;:::o;6481:328::-;-1:-1:-1;;;;;6553:15:100;;;;;;:9;:15;;;;;:25;;6572:6;;6553:15;:25;;6572:6;;6553:25;:::i;:::-;;;;-1:-1:-1;;6721:11:100;:21;;;;;;;6768:34;;160:25:167;;;-1:-1:-1;;;;;;;6768:34:100;;;-1:-1:-1;;;;;;;;;;;6768:34:100;148:2:167;133:18;6768:34:100;14:177:167;2950:1499:104;3062:12;3232:4;3226:11;-1:-1:-1;;;3355:17:104;3348:93;3488:2;3484:1;3465:17;3461:25;3454:37;3568:6;3563:2;3544:17;3540:26;3533:42;4370:2;4367:1;4363:2;4344:17;4341:1;4334:5;4327;4322:51;3891:16;3884:24;3878:2;3860:16;3857:24;3853:1;3849;3843:8;3840:15;3836:46;3833:76;3633:754;3622:765;;;4415:7;4407:35;;;;-1:-1:-1;;;4407:35:104;;16437:2:167;4407:35:104;;;16419:21:167;16476:2;16456:18;;;16449:30;-1:-1:-1;;;16495:18:167;;;16488:45;16550:18;;4407:35:104;16235:339:167;4407:35:104;3052:1397;2950:1499;;;:::o;196:131:167:-;-1:-1:-1;;;;;271:31:167;;261:42;;251:70;;317:1;314;307:12;251:70;196:131;:::o;332:247::-;391:6;444:2;432:9;423:7;419:23;415:32;412:52;;;460:1;457;450:12;412:52;499:9;486:23;518:31;543:5;518:31;:::i;766:548::-;878:4;907:2;936;925:9;918:21;968:6;962:13;1011:6;1006:2;995:9;991:18;984:34;1036:1;1046:140;1060:6;1057:1;1054:13;1046:140;;;1155:14;;;1151:23;;1145:30;1121:17;;;1140:2;1117:26;1110:66;1075:10;;1046:140;;;1050:3;1235:1;1230:2;1221:6;1210:9;1206:22;1202:31;1195:42;1305:2;1298;1294:7;1289:2;1281:6;1277:15;1273:29;1262:9;1258:45;1254:54;1246:62;;;;766:548;;;;:::o;1319:180::-;1378:6;1431:2;1419:9;1410:7;1406:23;1402:32;1399:52;;;1447:1;1444;1437:12;1399:52;-1:-1:-1;1470:23:167;;1319:180;-1:-1:-1;1319:180:167:o;1504:315::-;1572:6;1580;1633:2;1621:9;1612:7;1608:23;1604:32;1601:52;;;1649:1;1646;1639:12;1601:52;1688:9;1675:23;1707:31;1732:5;1707:31;:::i;:::-;1757:5;1809:2;1794:18;;;;1781:32;;-1:-1:-1;;;1504:315:167:o;2016:173::-;2083:20;;-1:-1:-1;;;;;;2132:32:167;;2122:43;;2112:71;;2179:1;2176;2169:12;2112:71;2016:173;;;:::o;2194:184::-;2252:6;2305:2;2293:9;2284:7;2280:23;2276:32;2273:52;;;2321:1;2318;2311:12;2273:52;2344:28;2362:9;2344:28;:::i;2383:156::-;2449:20;;2509:4;2498:16;;2488:27;;2478:55;;2529:1;2526;2519:12;2544:118;2630:5;2623:13;2616:21;2609:5;2606:32;2596:60;;2652:1;2649;2642:12;2667:383;2738:6;2746;2754;2807:2;2795:9;2786:7;2782:23;2778:32;2775:52;;;2823:1;2820;2813:12;2775:52;2846:27;2863:9;2846:27;:::i;:::-;2836:37;;2892;2925:2;2914:9;2910:18;2892:37;:::i;:::-;2882:47;;2979:2;2968:9;2964:18;2951:32;2992:28;3014:5;2992:28;:::i;:::-;3039:5;3029:15;;;2667:383;;;;;:::o;3055:456::-;3132:6;3140;3148;3201:2;3189:9;3180:7;3176:23;3172:32;3169:52;;;3217:1;3214;3207:12;3169:52;3256:9;3243:23;3275:31;3300:5;3275:31;:::i;:::-;3325:5;-1:-1:-1;3382:2:167;3367:18;;3354:32;3395:33;3354:32;3395:33;:::i;:::-;3055:456;;3447:7;;-1:-1:-1;;;3501:2:167;3486:18;;;;3473:32;;3055:456::o;3928:313::-;3992:6;4000;4053:2;4041:9;4032:7;4028:23;4024:32;4021:52;;;4069:1;4066;4059:12;4021:52;4092:28;4110:9;4092:28;:::i;:::-;4082:38;;4170:2;4159:9;4155:18;4142:32;4183:28;4205:5;4183:28;:::i;:::-;4230:5;4220:15;;;3928:313;;;;;:::o;4246:452::-;4318:6;4326;4334;4387:2;4375:9;4366:7;4362:23;4358:32;4355:52;;;4403:1;4400;4393:12;4355:52;4442:9;4429:23;4461:31;4486:5;4461:31;:::i;:::-;4511:5;-1:-1:-1;4535:36:167;4567:2;4552:18;;4535:36;:::i;4703:315::-;4771:6;4779;4832:2;4820:9;4811:7;4807:23;4803:32;4800:52;;;4848:1;4845;4838:12;4800:52;4884:9;4871:23;4861:33;;4944:2;4933:9;4929:18;4916:32;4957:31;4982:5;4957:31;:::i;5023:407::-;5110:6;5118;5171:2;5159:9;5150:7;5146:23;5142:32;5139:52;;;5187:1;5184;5177:12;5139:52;5226:9;5213:23;5245:31;5270:5;5245:31;:::i;:::-;5295:5;-1:-1:-1;5352:2:167;5337:18;;5324:32;5365:33;5324:32;5365:33;:::i;5914:456::-;5991:6;5999;6007;6060:2;6048:9;6039:7;6035:23;6031:32;6028:52;;;6076:1;6073;6066:12;6028:52;6112:9;6099:23;6089:33;;6172:2;6161:9;6157:18;6144:32;6185:31;6210:5;6185:31;:::i;:::-;6235:5;-1:-1:-1;6292:2:167;6277:18;;6264:32;6305:33;6264:32;6305:33;:::i;6375:460::-;6451:6;6459;6467;6520:2;6508:9;6499:7;6495:23;6491:32;6488:52;;;6536:1;6533;6526:12;6488:52;6575:9;6562:23;6594:31;6619:5;6594:31;:::i;:::-;6644:5;-1:-1:-1;6701:2:167;6686:18;;6673:32;6714:33;6673:32;6714:33;:::i;:::-;6766:7;-1:-1:-1;6792:37:167;6825:2;6810:18;;6792:37;:::i;:::-;6782:47;;6375:460;;;;;:::o;7067:734::-;7178:6;7186;7194;7202;7210;7218;7226;7279:3;7267:9;7258:7;7254:23;7250:33;7247:53;;;7296:1;7293;7286:12;7247:53;7335:9;7322:23;7354:31;7379:5;7354:31;:::i;:::-;7404:5;-1:-1:-1;7461:2:167;7446:18;;7433:32;7474:33;7433:32;7474:33;:::i;:::-;7526:7;-1:-1:-1;7580:2:167;7565:18;;7552:32;;-1:-1:-1;7631:2:167;7616:18;;7603:32;;-1:-1:-1;7654:37:167;7686:3;7671:19;;7654:37;:::i;:::-;7644:47;;7738:3;7727:9;7723:19;7710:33;7700:43;;7790:3;7779:9;7775:19;7762:33;7752:43;;7067:734;;;;;;;;;;:::o;8199:254::-;8264:6;8272;8325:2;8313:9;8304:7;8300:23;8296:32;8293:52;;;8341:1;8338;8331:12;8293:52;8364:27;8381:9;8364:27;:::i;:::-;8354:37;;8410;8443:2;8432:9;8428:18;8410:37;:::i;:::-;8400:47;;8199:254;;;;;:::o;8458:317::-;8524:6;8532;8585:2;8573:9;8564:7;8560:23;8556:32;8553:52;;;8601:1;8598;8591:12;8553:52;8640:9;8627:23;8659:31;8684:5;8659:31;:::i;:::-;8709:5;-1:-1:-1;8733:36:167;8765:2;8750:18;;8733:36;:::i;8780:184::-;8850:6;8903:2;8891:9;8882:7;8878:23;8874:32;8871:52;;;8919:1;8916;8909:12;8871:52;-1:-1:-1;8942:16:167;;8780:184;-1:-1:-1;8780:184:167:o;8969:127::-;9030:10;9025:3;9021:20;9018:1;9011:31;9061:4;9058:1;9051:15;9085:4;9082:1;9075:15;9101:125;9166:9;;;9187:10;;;9184:36;;;9200:18;;:::i;9231:380::-;9310:1;9306:12;;;;9353;;;9374:61;;9428:4;9420:6;9416:17;9406:27;;9374:61;9481:2;9473:6;9470:14;9450:18;9447:38;9444:161;;9527:10;9522:3;9518:20;9515:1;9508:31;9562:4;9559:1;9552:15;9590:4;9587:1;9580:15;9444:161;;9231:380;;;:::o;9616:336::-;9818:2;9800:21;;;9857:2;9837:18;;;9830:30;-1:-1:-1;;;9891:2:167;9876:18;;9869:42;9943:2;9928:18;;9616:336::o;9957:128::-;10024:9;;;10045:11;;;10042:37;;;10059:18;;:::i;10446:400::-;-1:-1:-1;;;;;10702:15:167;;;10684:34;;10754:15;;;;10749:2;10734:18;;10727:43;-1:-1:-1;;;;;;10806:33:167;;;10801:2;10786:18;;10779:61;10634:2;10619:18;;10446:400::o;10851:245::-;10918:6;10971:2;10959:9;10950:7;10946:23;10942:32;10939:52;;;10987:1;10984;10977:12;10939:52;11019:9;11013:16;11038:28;11060:5;11038:28;:::i;13321:1133::-;13451:3;13480:1;13513:6;13507:13;13543:3;13565:1;13593:9;13589:2;13585:18;13575:28;;13653:2;13642:9;13638:18;13675;13665:61;;13719:4;13711:6;13707:17;13697:27;;13665:61;13745:2;13793;13785:6;13782:14;13762:18;13759:38;13756:165;;-1:-1:-1;;;13820:33:167;;13876:4;13873:1;13866:15;13906:4;13827:3;13894:17;13756:165;13937:18;13964:133;;;;14111:1;14106:323;;;;13930:499;;13964:133;-1:-1:-1;;13997:24:167;;13985:37;;14070:14;;14063:22;14051:35;;14042:45;;;-1:-1:-1;13964:133:167;;14106:323;13268:1;13261:14;;;13305:4;13292:18;;14204:1;14218:165;14232:6;14229:1;14226:13;14218:165;;;14310:14;;14297:11;;;14290:35;14353:16;;;;14247:10;;14218:165;;;14222:3;;14412:6;14407:3;14403:16;14396:23;;13930:499;-1:-1:-1;14445:3:167;;13321:1133;-1:-1:-1;;;;;;;;13321:1133:167:o",
    "linkReferences": {},
    "immutableReferences": {
      "12946": [
        {
          "start": 1200,
          "length": 32
        },
        {
          "start": 2746,
          "length": 32
        }
      ],
      "63090": [
        {
          "start": 981,
          "length": 32
        },
        {
          "start": 1837,
          "length": 32
        },
        {
          "start": 5077,
          "length": 32
        },
        {
          "start": 5475,
          "length": 32
        },
        {
          "start": 5825,
          "length": 32
        },
        {
          "start": 5977,
          "length": 32
        },
        {
          "start": 6315,
          "length": 32
        },
        {
          "start": 6637,
          "length": 32
        }
      ],
      "63593": [
        {
          "start": 897,
          "length": 32
        }
      ],
      "63607": [
        {
          "start": 2897,
          "length": 32
        }
      ],
      "63609": [
        {
          "start": 2945,
          "length": 32
        }
      ]
    }
  },
  "methodIdentifiers": {
    "DOMAIN_SEPARATOR()": "3644e515",
    "allowance(address,address)": "dd62ed3e",
    "approve(address,uint256)": "095ea7b3",
    "asset()": "38d52e0f",
    "authority()": "bf7e214f",
    "balanceOf(address)": "70a08231",
    "canCall(address,address,bytes4)": "b7009613",
    "convertToAssets(uint256)": "07a2d13a",
    "convertToShares(uint256)": "c6e6f592",
    "decimals()": "313ce567",
    "deposit(uint256,address)": "6e553f65",
    "doesRoleHaveCapability(uint8,bytes4)": "e688747b",
    "doesUserHaveRole(address,uint8)": "ea7ca276",
    "getRate()": "679aefce",
    "getRolesWithCapability(bytes4)": "ed0d0efb",
    "getTargetCustomAuthority(address)": "c53a3985",
    "getUserRoles(address)": "06a36aee",
    "isCapabilityPublic(bytes4)": "0bade8a4",
    "isCompetitionMode()": "7a8c63b5",
    "maxDeposit(address)": "402d267d",
    "maxMint(address)": "c63d75b6",
    "maxRedeem(address)": "d905777e",
    "maxWithdraw(address)": "ce96cb77",
    "mint(uint256,address)": "94bf804d",
    "name()": "06fdde03",
    "nonces(address)": "7ecebe00",
    "owner()": "8da5cb5b",
    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
    "previewDeposit(uint256)": "ef8b30f7",
    "previewMint(uint256)": "b3d7f6b9",
    "previewRedeem(uint256)": "4cdad506",
    "previewWithdraw(uint256)": "0a28a477",
    "redeem(uint256,address,address)": "ba087652",
    "setAuthority(address)": "7a9e5e4b",
    "setPublicCapability(bytes4,bool)": "4b5159da",
    "setRate(uint256)": "34fcf437",
    "setRoleCapability(uint8,bytes4,bool)": "0ea9b75b",
    "setTargetCustomAuthority(address,address)": "728b952b",
    "setUserRole(address,uint8,bool)": "67aff484",
    "symbol()": "95d89b41",
    "totalAssets()": "01e1d114",
    "totalSupply()": "18160ddd",
    "transfer(address,uint256)": "a9059cbb",
    "transferFrom(address,address,uint256)": "23b872dd",
    "transferOwnership(address)": "f2fde38b",
    "withdraw(uint256,address,address)": "b460af94"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"contract ERC20Mintable\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_initialRate\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_admin\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"_isCompetitionMode\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"PublicCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"RoleCapabilityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"authority\",\"type\":\"address\"}],\"name\":\"TargetCustomAuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"UserRoleUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"caller\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"receiver\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"Withdraw\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"convertToShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"deposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"doesRoleHaveCapability\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"}],\"name\":\"doesUserHaveRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"getRolesWithCapability\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getTargetCustomAuthority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"getUserRoles\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"name\":\"isCapabilityPublic\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"isCompetitionMode\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"maxMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"maxWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewDeposit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewMint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"shares\",\"type\":\"uint256\"}],\"name\":\"previewRedeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"assets\",\"type\":\"uint256\"}],\"name\":\"previewWithdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"redeem\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setPublicCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_rate_\",\"type\":\"uint256\"}],\"name\":\"setRate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setRoleCapability\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"contract Authority\",\"name\":\"customAuthority\",\"type\":\"address\"}],\"name\":\"setTargetCustomAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"uint8\",\"name\":\"role\",\"type\":\"uint8\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setUserRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_assets\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_receiver\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"withdraw\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"MockERC4626\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"deposit(uint256,address)\":{\"notice\":\"Overrides ///\"},\"setRate(uint256)\":{\"notice\":\"Mock ///\"}},\"notice\":\"This mock yield source will accrue interest at a specified rate         Every stateful interaction will accrue interest, so the interest         accrual will approximate continuous compounding as the contract         is called more frequently.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockERC4626.sol\":\"MockERC4626\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d\",\"dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh\"]},\"contracts/test/MockERC4626.sol\":{\"keccak256\":\"0x8f471825cc7e67eff5fd91b95dcad8da6a0af7b76380b4649639e856aea86b64\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6e9a633d6f3decf9cebe890a34fa88d9f8b5e47839ac3d946b01c0e5d66082d7\",\"dweb:/ipfs/QmZ6MdJ5zDa5MJGGzBTmmWuSNbZvJyvar5whadQPH6ERf5\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/mixins/ERC4626.sol\":{\"keccak256\":\"0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1\",\"dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "contract ERC20Mintable",
              "name": "_asset",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "_initialRate",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_admin",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "_isCompetitionMode",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract Authority",
              "name": "newAuthority",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "AuthorityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Deposit",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "OwnershipTransferred",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PublicCapabilityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8",
              "indexed": true
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RoleCapabilityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract Authority",
              "name": "authority",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "TargetCustomAuthorityUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Transfer",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "UserRoleUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "caller",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "receiver",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Withdraw",
          "anonymous": false
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "DOMAIN_SEPARATOR",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "allowance",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "approve",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "asset",
          "outputs": [
            {
              "internalType": "contract ERC20",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "authority",
          "outputs": [
            {
              "internalType": "contract Authority",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "canCall",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToAssets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "convertToShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "decimals",
          "outputs": [
            {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "doesRoleHaveCapability",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "doesUserHaveRole",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getRate",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getRolesWithCapability",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getTargetCustomAuthority",
          "outputs": [
            {
              "internalType": "contract Authority",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getUserRoles",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isCapabilityPublic",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "isCompetitionMode",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxMint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxRedeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "maxWithdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "deadline",
              "type": "uint256"
            },
            {
              "internalType": "uint8",
              "name": "v",
              "type": "uint8"
            },
            {
              "internalType": "bytes32",
              "name": "r",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "s",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "permit"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewDeposit",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewMint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "shares",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewRedeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "assets",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "previewWithdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_shares",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeem",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract Authority",
              "name": "newAuthority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setAuthority"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setPublicCapability"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_rate_",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setRate"
        },
        {
          "inputs": [
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bytes4",
              "name": "functionSig",
              "type": "bytes4"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setRoleCapability"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "contract Authority",
              "name": "customAuthority",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setTargetCustomAuthority"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "internalType": "uint8",
              "name": "role",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "enabled",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setUserRole"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalAssets",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transfer",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
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
              "name": "amount",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferFrom",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transferOwnership"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_assets",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "_receiver",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_owner",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "withdraw",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "deposit(uint256,address)": {
            "notice": "Overrides ///"
          },
          "setRate(uint256)": {
            "notice": "Mock ///"
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/test/MockERC4626.sol": "MockERC4626"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/ERC20Mintable.sol": {
        "keccak256": "0x4ac8b598e2502ea35c1f5aa8a1bd4ca9ed4152e1f8bfe9e6dad16b0a8bea4c01",
        "urls": [
          "bzz-raw://513eaa91659eef7f92dad51f0a2e82c817e1a5938571c8ce28cce36f7d0dae4d",
          "dweb:/ipfs/QmYFv511pzXFEiM2DRjhBFxRe4TbdLopRutWKLwWnvZSxh"
        ],
        "license": "Apache-2.0"
      },
      "contracts/test/MockERC4626.sol": {
        "keccak256": "0x8f471825cc7e67eff5fd91b95dcad8da6a0af7b76380b4649639e856aea86b64",
        "urls": [
          "bzz-raw://6e9a633d6f3decf9cebe890a34fa88d9f8b5e47839ac3d946b01c0e5d66082d7",
          "dweb:/ipfs/QmZ6MdJ5zDa5MJGGzBTmmWuSNbZvJyvar5whadQPH6ERf5"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      },
      "lib/solmate/src/auth/Auth.sol": {
        "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
        "urls": [
          "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
          "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
        "keccak256": "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3",
        "urls": [
          "bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef",
          "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/mixins/ERC4626.sol": {
        "keccak256": "0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b",
        "urls": [
          "bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1",
          "dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/FixedPointMathLib.sol": {
        "keccak256": "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843",
        "urls": [
          "bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9",
          "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        "urls": [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/test/MockERC4626.sol",
    "id": 13214,
    "exportedSymbols": {
      "Authority": [
        62742
      ],
      "ERC20": [
        63956
      ],
      "ERC20Mintable": [
        12669
      ],
      "ERC4626": [
        63568
      ],
      "FixedPointMath": [
        9066
      ],
      "MockERC4626": [
        13213
      ],
      "MultiRolesAuthority": [
        63047
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:3700:47",
    "nodes": [
      {
        "id": 12920,
        "nodeType": "PragmaDirective",
        "src": "39:23:47",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 12922,
        "nodeType": "ImportDirective",
        "src": "64:50:47",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/Auth.sol",
        "file": "solmate/auth/Auth.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13214,
        "sourceUnit": 62743,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12921,
              "name": "Authority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62742,
              "src": "73:9:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12924,
        "nodeType": "ImportDirective",
        "src": "115:87:47",
        "nodes": [],
        "absolutePath": "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol",
        "file": "solmate/auth/authorities/MultiRolesAuthority.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13214,
        "sourceUnit": 63048,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12923,
              "name": "MultiRolesAuthority",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63047,
              "src": "124:19:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12926,
        "nodeType": "ImportDirective",
        "src": "203:49:47",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13214,
        "sourceUnit": 63957,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12925,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63956,
              "src": "212:5:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12928,
        "nodeType": "ImportDirective",
        "src": "253:53:47",
        "nodes": [],
        "absolutePath": "lib/solmate/src/mixins/ERC4626.sol",
        "file": "solmate/mixins/ERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13214,
        "sourceUnit": 63569,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12927,
              "name": "ERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63568,
              "src": "262:7:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12930,
        "nodeType": "ImportDirective",
        "src": "307:69:47",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../src/libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13214,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12929,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "316:14:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12932,
        "nodeType": "ImportDirective",
        "src": "377:52:47",
        "nodes": [],
        "absolutePath": "contracts/test/ERC20Mintable.sol",
        "file": "./ERC20Mintable.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13214,
        "sourceUnit": 12670,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12931,
              "name": "ERC20Mintable",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 12669,
              "src": "386:13:47",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13213,
        "nodeType": "ContractDefinition",
        "src": "963:2775:47",
        "nodes": [
          {
            "id": 12940,
            "nodeType": "UsingForDirective",
            "src": "1022:33:47",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 12938,
              "name": "FixedPointMath",
              "nameLocations": [
                "1028:14:47"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "1028:14:47"
            },
            "typeName": {
              "id": 12939,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1047:7:47",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 12942,
            "nodeType": "VariableDeclaration",
            "src": "1061:22:47",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_rate",
            "nameLocation": "1078:5:47",
            "scope": 13213,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 12941,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1061:7:47",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12944,
            "nodeType": "VariableDeclaration",
            "src": "1089:29:47",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_lastUpdated",
            "nameLocation": "1106:12:47",
            "scope": 13213,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 12943,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1089:7:47",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 12946,
            "nodeType": "VariableDeclaration",
            "src": "1125:39:47",
            "nodes": [],
            "constant": false,
            "functionSelector": "7a8c63b5",
            "mutability": "immutable",
            "name": "isCompetitionMode",
            "nameLocation": "1147:17:47",
            "scope": 13213,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bool",
              "typeString": "bool"
            },
            "typeName": {
              "id": 12945,
              "name": "bool",
              "nodeType": "ElementaryTypeName",
              "src": "1125:4:47",
              "typeDescriptions": {
                "typeIdentifier": "t_bool",
                "typeString": "bool"
              }
            },
            "visibility": "public"
          },
          {
            "id": 12995,
            "nodeType": "FunctionDefinition",
            "src": "1171:442:47",
            "nodes": [],
            "body": {
              "id": 12994,
              "nodeType": "Block",
              "src": "1488:125:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 12983,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12981,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12942,
                      "src": "1498:5:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 12982,
                      "name": "_initialRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12955,
                      "src": "1506:12:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1498:20:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 12984,
                  "nodeType": "ExpressionStatement",
                  "src": "1498:20:47"
                },
                {
                  "expression": {
                    "id": 12988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12985,
                      "name": "_lastUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12944,
                      "src": "1528:12:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 12986,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "1543:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 12987,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1549:9:47",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "1543:15:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1528:30:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 12989,
                  "nodeType": "ExpressionStatement",
                  "src": "1528:30:47"
                },
                {
                  "expression": {
                    "id": 12992,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 12990,
                      "name": "isCompetitionMode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12946,
                      "src": "1568:17:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 12991,
                      "name": "_isCompetitionMode",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12959,
                      "src": "1588:18:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1568:38:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 12993,
                  "nodeType": "ExpressionStatement",
                  "src": "1568:38:47"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 12965,
                            "name": "_asset",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12949,
                            "src": "1396:6:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                              "typeString": "contract ERC20Mintable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                              "typeString": "contract ERC20Mintable"
                            }
                          ],
                          "id": 12964,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1388:7:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 12963,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1388:7:47",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 12966,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1388:15:47",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 12962,
                      "name": "ERC20",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 63956,
                      "src": "1382:5:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_ERC20_$63956_$",
                        "typeString": "type(contract ERC20)"
                      }
                    },
                    "id": 12967,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1382:22:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63956",
                      "typeString": "contract ERC20"
                    }
                  },
                  {
                    "id": 12968,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12951,
                    "src": "1406:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "id": 12969,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12953,
                    "src": "1413:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 12970,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 12961,
                  "name": "ERC4626",
                  "nameLocations": [
                    "1374:7:47"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 63568,
                  "src": "1374:7:47"
                },
                "nodeType": "ModifierInvocation",
                "src": "1374:47:47"
              },
              {
                "arguments": [
                  {
                    "id": 12972,
                    "name": "_admin",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12957,
                    "src": "1450:6:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 12976,
                            "name": "this",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -28,
                            "src": "1476:4:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_MockERC4626_$13213",
                              "typeString": "contract MockERC4626"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_contract$_MockERC4626_$13213",
                              "typeString": "contract MockERC4626"
                            }
                          ],
                          "id": 12975,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1468:7:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 12974,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1468:7:47",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 12977,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1468:13:47",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 12973,
                      "name": "Authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62742,
                      "src": "1458:9:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_contract$_Authority_$62742_$",
                        "typeString": "type(contract Authority)"
                      }
                    },
                    "id": 12978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1458:24:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  }
                ],
                "id": 12979,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 12971,
                  "name": "MultiRolesAuthority",
                  "nameLocations": [
                    "1430:19:47"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 63047,
                  "src": "1430:19:47"
                },
                "nodeType": "ModifierInvocation",
                "src": "1430:53:47"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 12960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 12949,
                  "mutability": "mutable",
                  "name": "_asset",
                  "nameLocation": "1206:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1192:20:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                    "typeString": "contract ERC20Mintable"
                  },
                  "typeName": {
                    "id": 12948,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 12947,
                      "name": "ERC20Mintable",
                      "nameLocations": [
                        "1192:13:47"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 12669,
                      "src": "1192:13:47"
                    },
                    "referencedDeclaration": 12669,
                    "src": "1192:13:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                      "typeString": "contract ERC20Mintable"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12951,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "1236:5:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1222:19:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12950,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:6:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12953,
                  "mutability": "mutable",
                  "name": "_symbol",
                  "nameLocation": "1265:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1251:21:47",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 12952,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1251:6:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12955,
                  "mutability": "mutable",
                  "name": "_initialRate",
                  "nameLocation": "1290:12:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1282:20:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1282:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12957,
                  "mutability": "mutable",
                  "name": "_admin",
                  "nameLocation": "1320:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1312:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 12956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1312:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 12959,
                  "mutability": "mutable",
                  "name": "_isCompetitionMode",
                  "nameLocation": "1341:18:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 12995,
                  "src": "1336:23:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 12958,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:4:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1182:183:47"
            },
            "returnParameters": {
              "id": 12980,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1488:0:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13012,
            "nodeType": "ModifierDefinition",
            "src": "1619:235:47",
            "nodes": [],
            "body": {
              "id": 13011,
              "nodeType": "Block",
              "src": "1660:194:47",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 12997,
                    "name": "isCompetitionMode",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12946,
                    "src": "1674:17:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 13009,
                  "nodeType": "IfStatement",
                  "src": "1670:167:47",
                  "trueBody": {
                    "id": 13008,
                    "nodeType": "Block",
                    "src": "1693:144:47",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 13000,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "1745:3:47",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 13001,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1749:6:47",
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "1745:10:47",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "expression": {
                                    "id": 13002,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -15,
                                    "src": "1757:3:47",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 13003,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "1761:3:47",
                                  "memberName": "sig",
                                  "nodeType": "MemberAccess",
                                  "src": "1757:7:47",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_bytes4",
                                    "typeString": "bytes4"
                                  }
                                ],
                                "id": 12999,
                                "name": "isAuthorized",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62674,
                                "src": "1732:12:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                  "typeString": "function (address,bytes4) view returns (bool)"
                                }
                              },
                              "id": 13004,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1732:33:47",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            {
                              "hexValue": "4d6f636b455243343632363a206e6f7420617574686f72697a6564",
                              "id": 13005,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "string",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1783:29:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019",
                                "typeString": "literal_string \"MockERC4626: not authorized\""
                              },
                              "value": "MockERC4626: not authorized"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              {
                                "typeIdentifier": "t_stringliteral_a7626d0608fc151c96b381abf9f1ef1d92bb12f776fb43bcd63a3eefd31ed019",
                                "typeString": "literal_string \"MockERC4626: not authorized\""
                              }
                            ],
                            "id": 12998,
                            "name": "require",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              -18,
                              -18
                            ],
                            "referencedDeclaration": -18,
                            "src": "1707:7:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (bool,string memory) pure"
                            }
                          },
                          "id": 13006,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1707:119:47",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 13007,
                        "nodeType": "ExpressionStatement",
                        "src": "1707:119:47"
                      }
                    ]
                  }
                },
                {
                  "id": 13010,
                  "nodeType": "PlaceholderStatement",
                  "src": "1846:1:47"
                }
              ]
            },
            "name": "requiresAuthDuringCompetition",
            "nameLocation": "1628:29:47",
            "parameters": {
              "id": 12996,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1657:2:47"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 13033,
            "nodeType": "FunctionDefinition",
            "src": "1883:185:47",
            "nodes": [],
            "body": {
              "id": 13032,
              "nodeType": "Block",
              "src": "1992:76:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13023,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13170,
                      "src": "2002:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13024,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2002:9:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13025,
                  "nodeType": "ExpressionStatement",
                  "src": "2002:9:47"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13028,
                        "name": "_assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13015,
                        "src": "2042:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13029,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13017,
                        "src": "2051:9:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 13026,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2028:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13213_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13027,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2034:7:47",
                      "memberName": "deposit",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63164,
                      "src": "2028:13:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 13030,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2028:33:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13022,
                  "id": 13031,
                  "nodeType": "Return",
                  "src": "2021:40:47"
                }
              ]
            },
            "baseFunctions": [
              63164
            ],
            "documentation": {
              "id": 13013,
              "nodeType": "StructuredDocumentation",
              "src": "1860:18:47",
              "text": "Overrides ///"
            },
            "functionSelector": "6e553f65",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deposit",
            "nameLocation": "1892:7:47",
            "overrides": {
              "id": 13019,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "1965:8:47"
            },
            "parameters": {
              "id": 13018,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13015,
                  "mutability": "mutable",
                  "name": "_assets",
                  "nameLocation": "1917:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13033,
                  "src": "1909:15:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13014,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1909:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13017,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "1942:9:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13033,
                  "src": "1934:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13016,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1934:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1899:58:47"
            },
            "returnParameters": {
              "id": 13022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13021,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13033,
                  "src": "1983:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13020,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1983:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1982:9:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13053,
            "nodeType": "FunctionDefinition",
            "src": "2074:179:47",
            "nodes": [],
            "body": {
              "id": 13052,
              "nodeType": "Block",
              "src": "2180:73:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13043,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13170,
                      "src": "2190:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2190:9:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13045,
                  "nodeType": "ExpressionStatement",
                  "src": "2190:9:47"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13048,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13035,
                        "src": "2227:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13049,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13037,
                        "src": "2236:9:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 13046,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2216:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13213_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13047,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2222:4:47",
                      "memberName": "mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63210,
                      "src": "2216:10:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address) returns (uint256)"
                      }
                    },
                    "id": 13050,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2216:30:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13042,
                  "id": 13051,
                  "nodeType": "Return",
                  "src": "2209:37:47"
                }
              ]
            },
            "baseFunctions": [
              63210
            ],
            "functionSelector": "94bf804d",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nameLocation": "2083:4:47",
            "overrides": {
              "id": 13039,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2153:8:47"
            },
            "parameters": {
              "id": 13038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13035,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "2105:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13053,
                  "src": "2097:15:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13034,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2097:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13037,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "2130:9:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13053,
                  "src": "2122:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13036,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2122:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2087:58:47"
            },
            "returnParameters": {
              "id": 13042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13041,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13053,
                  "src": "2171:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13040,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2171:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2170:9:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13076,
            "nodeType": "FunctionDefinition",
            "src": "2259:219:47",
            "nodes": [],
            "body": {
              "id": 13075,
              "nodeType": "Block",
              "src": "2393:85:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13065,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13170,
                      "src": "2403:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13066,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2403:9:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13067,
                  "nodeType": "ExpressionStatement",
                  "src": "2403:9:47"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13070,
                        "name": "_assets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13055,
                        "src": "2444:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13071,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13057,
                        "src": "2453:9:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 13072,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13059,
                        "src": "2464:6:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 13068,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2429:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13213_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13069,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2435:8:47",
                      "memberName": "withdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63288,
                      "src": "2429:14:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) returns (uint256)"
                      }
                    },
                    "id": 13073,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2429:42:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13064,
                  "id": 13074,
                  "nodeType": "Return",
                  "src": "2422:49:47"
                }
              ]
            },
            "baseFunctions": [
              63288
            ],
            "functionSelector": "b460af94",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nameLocation": "2268:8:47",
            "overrides": {
              "id": 13061,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2366:8:47"
            },
            "parameters": {
              "id": 13060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13055,
                  "mutability": "mutable",
                  "name": "_assets",
                  "nameLocation": "2294:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13076,
                  "src": "2286:15:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13054,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2286:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13057,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "2319:9:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13076,
                  "src": "2311:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13056,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2311:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13059,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "2346:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13076,
                  "src": "2338:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13058,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2338:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2276:82:47"
            },
            "returnParameters": {
              "id": 13064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13063,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13076,
                  "src": "2384:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13062,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2384:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2383:9:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13099,
            "nodeType": "FunctionDefinition",
            "src": "2484:215:47",
            "nodes": [],
            "body": {
              "id": 13098,
              "nodeType": "Block",
              "src": "2616:83:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13088,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13170,
                      "src": "2626:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13089,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2626:9:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13090,
                  "nodeType": "ExpressionStatement",
                  "src": "2626:9:47"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 13093,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13078,
                        "src": "2665:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 13094,
                        "name": "_receiver",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13080,
                        "src": "2674:9:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 13095,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13082,
                        "src": "2685:6:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "id": 13091,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2652:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_MockERC4626_$13213_$",
                          "typeString": "type(contract super MockERC4626)"
                        }
                      },
                      "id": 13092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2658:6:47",
                      "memberName": "redeem",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63372,
                      "src": "2652:12:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (uint256,address,address) returns (uint256)"
                      }
                    },
                    "id": 13096,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2652:40:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13087,
                  "id": 13097,
                  "nodeType": "Return",
                  "src": "2645:47:47"
                }
              ]
            },
            "baseFunctions": [
              63372
            ],
            "functionSelector": "ba087652",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeem",
            "nameLocation": "2493:6:47",
            "overrides": {
              "id": 13084,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2589:8:47"
            },
            "parameters": {
              "id": 13083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13078,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "2517:7:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13099,
                  "src": "2509:15:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13077,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2509:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13080,
                  "mutability": "mutable",
                  "name": "_receiver",
                  "nameLocation": "2542:9:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13099,
                  "src": "2534:17:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13079,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2534:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 13082,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "2569:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13099,
                  "src": "2561:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 13081,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:47",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2499:82:47"
            },
            "returnParameters": {
              "id": 13087,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13086,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13099,
                  "src": "2607:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13085,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2607:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2606:9:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13117,
            "nodeType": "FunctionDefinition",
            "src": "2705:140:47",
            "nodes": [],
            "body": {
              "id": 13116,
              "nodeType": "Block",
              "src": "2767:78:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 13114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 13109,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "2808:4:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_MockERC4626_$13213",
                                "typeString": "contract MockERC4626"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_MockERC4626_$13213",
                                "typeString": "contract MockERC4626"
                              }
                            ],
                            "id": 13108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2800:7:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 13107,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "2800:7:47",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 13110,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2800:13:47",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 13105,
                          "name": "asset",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 63090,
                          "src": "2784:5:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_ERC20_$63956",
                            "typeString": "contract ERC20"
                          }
                        },
                        "id": 13106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2790:9:47",
                        "memberName": "balanceOf",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 63599,
                        "src": "2784:15:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                          "typeString": "function (address) view external returns (uint256)"
                        }
                      },
                      "id": 13111,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2784:30:47",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 13112,
                        "name": "_getAccruedInterest",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13212,
                        "src": "2817:19:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 13113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2817:21:47",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2784:54:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13104,
                  "id": 13115,
                  "nodeType": "Return",
                  "src": "2777:61:47"
                }
              ]
            },
            "baseFunctions": [
              63377
            ],
            "functionSelector": "01e1d114",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "totalAssets",
            "nameLocation": "2714:11:47",
            "overrides": {
              "id": 13101,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2740:8:47"
            },
            "parameters": {
              "id": 13100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2725:2:47"
            },
            "returnParameters": {
              "id": 13104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13103,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13117,
                  "src": "2758:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13102,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2758:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2757:9:47"
            },
            "scope": 13213,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 13133,
            "nodeType": "FunctionDefinition",
            "src": "2869:122:47",
            "nodes": [],
            "body": {
              "id": 13132,
              "nodeType": "Block",
              "src": "2941:50:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13125,
                      "name": "_accrue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13170,
                      "src": "2951:7:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 13126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2951:9:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 13127,
                  "nodeType": "ExpressionStatement",
                  "src": "2951:9:47"
                },
                {
                  "expression": {
                    "id": 13130,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13128,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12942,
                      "src": "2970:5:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 13129,
                      "name": "_rate_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13120,
                      "src": "2978:6:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2970:14:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13131,
                  "nodeType": "ExpressionStatement",
                  "src": "2970:14:47"
                }
              ]
            },
            "documentation": {
              "id": 13118,
              "nodeType": "StructuredDocumentation",
              "src": "2851:13:47",
              "text": "Mock ///"
            },
            "functionSelector": "34fcf437",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 13123,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 13122,
                  "name": "requiresAuthDuringCompetition",
                  "nameLocations": [
                    "2911:29:47"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 13012,
                  "src": "2911:29:47"
                },
                "nodeType": "ModifierInvocation",
                "src": "2911:29:47"
              }
            ],
            "name": "setRate",
            "nameLocation": "2878:7:47",
            "parameters": {
              "id": 13121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13120,
                  "mutability": "mutable",
                  "name": "_rate_",
                  "nameLocation": "2894:6:47",
                  "nodeType": "VariableDeclaration",
                  "scope": 13133,
                  "src": "2886:14:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2886:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2885:16:47"
            },
            "returnParameters": {
              "id": 13124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2941:0:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13141,
            "nodeType": "FunctionDefinition",
            "src": "2997:80:47",
            "nodes": [],
            "body": {
              "id": 13140,
              "nodeType": "Block",
              "src": "3048:29:47",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13138,
                    "name": "_rate",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 12942,
                    "src": "3065:5:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13137,
                  "id": 13139,
                  "nodeType": "Return",
                  "src": "3058:12:47"
                }
              ]
            },
            "functionSelector": "679aefce",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getRate",
            "nameLocation": "3006:7:47",
            "parameters": {
              "id": 13134,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3013:2:47"
            },
            "returnParameters": {
              "id": 13137,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13136,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13141,
                  "src": "3039:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13135,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3039:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3038:9:47"
            },
            "scope": 13213,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 13170,
            "nodeType": "FunctionDefinition",
            "src": "3083:221:47",
            "nodes": [],
            "body": {
              "id": 13169,
              "nodeType": "Block",
              "src": "3111:193:47",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    13145
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13145,
                      "mutability": "mutable",
                      "name": "interest",
                      "nameLocation": "3129:8:47",
                      "nodeType": "VariableDeclaration",
                      "scope": 13169,
                      "src": "3121:16:47",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13144,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3121:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13148,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 13146,
                      "name": "_getAccruedInterest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13212,
                      "src": "3140:19:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 13147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3140:21:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3121:40:47"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 13151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 13149,
                      "name": "interest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13145,
                      "src": "3175:8:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 13150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3186:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3175:12:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 13163,
                  "nodeType": "IfStatement",
                  "src": "3171:87:47",
                  "trueBody": {
                    "id": 13162,
                    "nodeType": "Block",
                    "src": "3189:69:47",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 13159,
                              "name": "interest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13145,
                              "src": "3238:8:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "id": 13155,
                                      "name": "asset",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 63090,
                                      "src": "3225:5:47",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_ERC20_$63956",
                                        "typeString": "contract ERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_ERC20_$63956",
                                        "typeString": "contract ERC20"
                                      }
                                    ],
                                    "id": 13154,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3217:7:47",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 13153,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3217:7:47",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 13156,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3217:14:47",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 13152,
                                "name": "ERC20Mintable",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 12669,
                                "src": "3203:13:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20Mintable_$12669_$",
                                  "typeString": "type(contract ERC20Mintable)"
                                }
                              },
                              "id": 13157,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3203:29:47",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20Mintable_$12669",
                                "typeString": "contract ERC20Mintable"
                              }
                            },
                            "id": 13158,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3233:4:47",
                            "memberName": "mint",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 12624,
                            "src": "3203:34:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256) external"
                            }
                          },
                          "id": 13160,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3203:44:47",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 13161,
                        "nodeType": "ExpressionStatement",
                        "src": "3203:44:47"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 13167,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13164,
                      "name": "_lastUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12944,
                      "src": "3267:12:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13165,
                        "name": "block",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -4,
                        "src": "3282:5:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_block",
                          "typeString": "block"
                        }
                      },
                      "id": 13166,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3288:9:47",
                      "memberName": "timestamp",
                      "nodeType": "MemberAccess",
                      "src": "3282:15:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3267:30:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13168,
                  "nodeType": "ExpressionStatement",
                  "src": "3267:30:47"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_accrue",
            "nameLocation": "3092:7:47",
            "parameters": {
              "id": 13142,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3099:2:47"
            },
            "returnParameters": {
              "id": 13143,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3111:0:47"
            },
            "scope": 13213,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 13212,
            "nodeType": "FunctionDefinition",
            "src": "3310:426:47",
            "nodes": [],
            "body": {
              "id": 13211,
              "nodeType": "Block",
              "src": "3373:363:47",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 13177,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 13175,
                      "name": "_rate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12942,
                      "src": "3387:5:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 13176,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3396:1:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "3387:10:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 13181,
                  "nodeType": "IfStatement",
                  "src": "3383:49:47",
                  "trueBody": {
                    "id": 13180,
                    "nodeType": "Block",
                    "src": "3399:33:47",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 13178,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3420:1:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 13174,
                        "id": 13179,
                        "nodeType": "Return",
                        "src": "3413:8:47"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    13183
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13183,
                      "mutability": "mutable",
                      "name": "timeElapsed",
                      "nameLocation": "3503:11:47",
                      "nodeType": "VariableDeclaration",
                      "scope": 13211,
                      "src": "3495:19:47",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13182,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3495:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13192,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 13190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3571:8:47",
                        "subdenomination": "days",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        },
                        "value": "365"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        }
                      ],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 13187,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 13184,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "3518:5:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 13185,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3524:9:47",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "3518:15:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 13186,
                              "name": "_lastUpdated",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 12944,
                              "src": "3536:12:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3518:30:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 13188,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "3517:32:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 13189,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3550:7:47",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "3517:40:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13191,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3517:72:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3495:94:47"
                },
                {
                  "assignments": [
                    13194
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 13194,
                      "mutability": "mutable",
                      "name": "accrued",
                      "nameLocation": "3607:7:47",
                      "nodeType": "VariableDeclaration",
                      "scope": 13211,
                      "src": "3599:15:47",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 13193,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3599:7:47",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 13208,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 13205,
                            "name": "timeElapsed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13183,
                            "src": "3683:11:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "id": 13203,
                            "name": "_rate",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 12942,
                            "src": "3669:5:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 13204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3675:7:47",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8364,
                          "src": "3669:13:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 13206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3669:26:47",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 13199,
                                "name": "this",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -28,
                                "src": "3641:4:47",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_MockERC4626_$13213",
                                  "typeString": "contract MockERC4626"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_MockERC4626_$13213",
                                  "typeString": "contract MockERC4626"
                                }
                              ],
                              "id": 13198,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "3633:7:47",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": {
                                "id": 13197,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "3633:7:47",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 13200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3633:13:47",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          ],
                          "expression": {
                            "id": 13195,
                            "name": "asset",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 63090,
                            "src": "3617:5:47",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$63956",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 13196,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3623:9:47",
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 63599,
                          "src": "3617:15:47",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 13201,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3617:30:47",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 13202,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3648:7:47",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8364,
                      "src": "3617:38:47",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 13207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3617:88:47",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3599:106:47"
                },
                {
                  "expression": {
                    "id": 13209,
                    "name": "accrued",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 13194,
                    "src": "3722:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 13174,
                  "id": 13210,
                  "nodeType": "Return",
                  "src": "3715:14:47"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getAccruedInterest",
            "nameLocation": "3319:19:47",
            "parameters": {
              "id": 13171,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3338:2:47"
            },
            "returnParameters": {
              "id": 13174,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13173,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 13212,
                  "src": "3364:7:47",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 13172,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3364:7:47",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3363:9:47"
            },
            "scope": 13213,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 12934,
              "name": "ERC4626",
              "nameLocations": [
                "987:7:47"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63568,
              "src": "987:7:47"
            },
            "id": 12935,
            "nodeType": "InheritanceSpecifier",
            "src": "987:7:47"
          },
          {
            "baseName": {
              "id": 12936,
              "name": "MultiRolesAuthority",
              "nameLocations": [
                "996:19:47"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63047,
              "src": "996:19:47"
            },
            "id": 12937,
            "nodeType": "InheritanceSpecifier",
            "src": "996:19:47"
          }
        ],
        "canonicalName": "MockERC4626",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 12933,
          "nodeType": "StructuredDocumentation",
          "src": "431:532:47",
          "text": "@author DELV\n @title MockERC4626\n @notice This mock yield source will accrue interest at a specified rate\n         Every stateful interaction will accrue interest, so the interest\n         accrual will approximate continuous compounding as the contract\n         is called more frequently.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          13213,
          63047,
          62742,
          62729,
          63568,
          63956
        ],
        "name": "MockERC4626",
        "nameLocation": "972:11:47",
        "scope": 13214,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 47
} as const;