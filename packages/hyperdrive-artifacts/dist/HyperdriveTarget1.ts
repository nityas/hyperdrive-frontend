export const HyperdriveTarget1 = 
{
  "abi": [
    {
      "inputs": [],
      "name": "BelowMinimumContribution",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidExponent",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "FixedPointMath_InvalidInput",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidApr",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidCheckpointTime",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTimestamp",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTradeSize",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MinimumTransactionAmount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativeInterest",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NegativePresentValue",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OutputLimit",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "Paused",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolAlreadyInitialized",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToInt128",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "UnsafeCastToUint128",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "AddLiquidity",
      "type": "event"
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
          "name": "value",
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
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "collector",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fees",
          "type": "uint256"
        }
      ],
      "name": "CollectGovernanceFee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "checkpointTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedShorts",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedLongs",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "CreateCheckpoint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newGovernance",
          "type": "address"
        }
      ],
      "name": "GovernanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newPauser",
          "type": "address"
        }
      ],
      "name": "PauserUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "name": "RedeemWithdrawalShares",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "RemoveLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
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
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minApr",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_maxApr",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "addLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_checkpointTime",
          "type": "uint256"
        }
      ],
      "name": "checkpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "closeLong",
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
          "internalType": "uint256",
          "name": "_maturityTime",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_bondAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "closeShort",
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
          "internalType": "uint256",
          "name": "_contribution",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_apr",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "initialize",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "lpShares",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_withdrawalShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutputPerShare",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "redeemWithdrawalShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
          "internalType": "uint256",
          "name": "_lpShares",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_minOutput",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "address",
              "name": "destination",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "asBase",
              "type": "bool"
            },
            {
              "internalType": "bytes",
              "name": "extraData",
              "type": "bytes"
            }
          ],
          "internalType": "struct IHyperdrive.Options",
          "name": "_options",
          "type": "tuple"
        }
      ],
      "name": "removeLiquidity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
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
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x",
    "sourceMap": "",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": "9aa68462",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,(address,bool,bytes))": "ded06231",
    "closeShort(uint256,uint256,uint256,(address,bool,bytes))": "29b23fc1",
    "initialize(uint256,uint256,(address,bool,bytes))": "77d05ff4",
    "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": "074a6de9",
    "removeLiquidity(uint256,uint256,(address,bool,bytes))": "cbc13434"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"BelowMinimumContribution\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidExponent\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"FixedPointMath_InvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidApr\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTradeSize\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativeInterest\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NegativePresentValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"Paused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolAlreadyInitialized\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minApr\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxApr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"addLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeLong\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_maturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"closeShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_contribution\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_apr\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"initialize\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"lpShares\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_withdrawalShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutputPerShare\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"redeemWithdrawalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_lpShares\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minOutput\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"removeLiquidity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_contribution\":\"The amount of base to supply.\",\"_maxApr\":\"The maximum APR at which the LP is willing to supply.\",\"_minApr\":\"The minimum APR at which the LP is willing to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The number of LP tokens created.\"}},\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of longs to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum amount of base the trader will accept.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of underlying the user receives.\"}},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of shorts to close.\",\"_maturityTime\":\"The maturity time of the short.\",\"_minOutput\":\"The minimum output of this trade.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The amount of base tokens produced by closing this short.\"}},\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_apr\":\"The target APR.\",\"_contribution\":\"The amount of base to supply.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"lpShares\":\"The initial number of LP shares created.\"}},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_minOutputPerShare\":\"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.\",\"_options\":\"The options that configure how the operation is settled.\",\"_withdrawalShares\":\"The withdrawal shares to redeem.\"},\"returns\":{\"_0\":\"The amount the LP received.\",\"_1\":\"The amount of withdrawal shares that were redeemed.\"}},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_lpShares\":\"The LP shares to burn.\",\"_minOutput\":\"The minium amount of the base token to receive.        NOTE: This value is likely to be less than the amount LP shares        are worth. The remainder is in short and long withdraw shares        which are hard to game the value of.\",\"_options\":\"The options that configure how the operation is settled.\"},\"returns\":{\"_0\":\"The amount the LP removing liquidity receives. The LP receives a         proportional amount of the pool's idle capital.\",\"_1\":\"The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares.\"}}},\"title\":\"HyperdriveTarget1\",\"version\":1},\"userdoc\":{\"errors\":{\"FixedPointMath_InvalidExponent()\":[{\"notice\":\"###################### ### FixedPointMath ### ######################\"}],\"InvalidTimestamp()\":[{\"notice\":\"############### ### AssetId ### ###############\"}],\"InvalidTradeSize()\":[{\"notice\":\"###################### ### YieldSpaceMath ### ######################\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"################ ### SafeCast ### ################\"}]},\"kind\":\"user\",\"methods\":{\"addLiquidity(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows LPs to supply liquidity for LP shares.\"},\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"closeLong(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a long position with a specified maturity time.\"},\"closeShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Closes a short position with a specified maturity time.\"},\"constructor\":{\"notice\":\"Instantiates target1.\"},\"initialize(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows the first LP to initialize the market with a target APR.\"},\"redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.\"},\"removeLiquidity(uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Allows an LP to burn shares and withdraw from the pool.\"}},\"notice\":\"Hyperdrive's target 1 logic contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/external/HyperdriveTarget1.sol\":\"HyperdriveTarget1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0x7d95b2b8abfdb4518963c0a06f568969b499f3e07fc7e42ff54722d42fae78c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0ee08b9c5ffcc231eeca7413e358bec99df0a6f2b8315463d64edacd2ba7f283\",\"dweb:/ipfs/QmfGFMnbvHcCh1YJ1KZEUiJucuJosaD9xbrURbg3rDenRG\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8\",\"dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "BelowMinimumContribution"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidExponent"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "FixedPointMath_InvalidInput"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidApr"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointTime"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTimestamp"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidTradeSize"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "MinimumTransactionAmount"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativeInterest"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "NegativePresentValue"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "OutputLimit"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "Paused"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "PoolAlreadyInitialized"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToInt128"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "UnsafeCastToUint128"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AddLiquidity",
          "anonymous": false
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
              "name": "value",
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
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "collector",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "fees",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CollectGovernanceFee",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "checkpointTime",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedShorts",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedLongs",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CreateCheckpoint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newGovernance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "GovernanceUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "apr",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialize",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newPauser",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "PauserUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemWithdrawalShares",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RemoveLiquidity",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
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
              "name": "id",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferSingle",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minApr",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxApr",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "addLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "checkpoint"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeLong",
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
              "name": "_maturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bondAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeShort",
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
              "name": "_contribution",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_apr",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "payable",
          "type": "function",
          "name": "initialize",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "lpShares",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_withdrawalShares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutputPerShare",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "redeemWithdrawalShares",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
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
              "name": "_lpShares",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_minOutput",
              "type": "uint256"
            },
            {
              "internalType": "struct IHyperdrive.Options",
              "name": "_options",
              "type": "tuple",
              "components": [
                {
                  "internalType": "address",
                  "name": "destination",
                  "type": "address"
                },
                {
                  "internalType": "bool",
                  "name": "asBase",
                  "type": "bool"
                },
                {
                  "internalType": "bytes",
                  "name": "extraData",
                  "type": "bytes"
                }
              ]
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeLiquidity",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            },
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
        "methods": {
          "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_contribution": "The amount of base to supply.",
              "_maxApr": "The maximum APR at which the LP is willing to supply.",
              "_minApr": "The minimum APR at which the LP is willing to supply.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "lpShares": "The number of LP tokens created."
            }
          },
          "checkpoint(uint256)": {
            "params": {
              "_checkpointTime": "The time of the checkpoint to create."
            }
          },
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of longs to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum amount of base the trader will accept.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of underlying the user receives."
            }
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_bondAmount": "The amount of shorts to close.",
              "_maturityTime": "The maturity time of the short.",
              "_minOutput": "The minimum output of this trade.",
              "_options": "The options that configure how the trade is settled."
            },
            "returns": {
              "_0": "The amount of base tokens produced by closing this short."
            }
          },
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool."
            }
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_apr": "The target APR.",
              "_contribution": "The amount of base to supply.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "lpShares": "The initial number of LP shares created."
            }
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_minOutputPerShare": "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
              "_options": "The options that configure how the operation is settled.",
              "_withdrawalShares": "The withdrawal shares to redeem."
            },
            "returns": {
              "_0": "The amount the LP received.",
              "_1": "The amount of withdrawal shares that were redeemed."
            }
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "params": {
              "_lpShares": "The LP shares to burn.",
              "_minOutput": "The minium amount of the base token to receive.        NOTE: This value is likely to be less than the amount LP shares        are worth. The remainder is in short and long withdraw shares        which are hard to game the value of.",
              "_options": "The options that configure how the operation is settled."
            },
            "returns": {
              "_0": "The amount the LP removing liquidity receives. The LP receives a         proportional amount of the pool's idle capital.",
              "_1": "The base that the LP receives buys out some of their LP shares,         but it may not be sufficient to fully buy the LP out. In this         case, the LP receives withdrawal shares equal in value to the         present value they are owed. As idle capital becomes available,         the pool will buy back these shares."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "addLiquidity(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows LPs to supply liquidity for LP shares."
          },
          "checkpoint(uint256)": {
            "notice": "Allows anyone to mint a new checkpoint."
          },
          "closeLong(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a long position with a specified maturity time."
          },
          "closeShort(uint256,uint256,uint256,(address,bool,bytes))": {
            "notice": "Closes a short position with a specified maturity time."
          },
          "constructor": {
            "notice": "Instantiates target1."
          },
          "initialize(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows the first LP to initialize the market with a target APR."
          },
          "redeemWithdrawalShares(uint256,uint256,(address,bool,bytes))": {
            "notice": "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."
          },
          "removeLiquidity(uint256,uint256,(address,bool,bytes))": {
            "notice": "Allows an LP to burn shares and withdraw from the pool."
          }
        },
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
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
        "contracts/src/external/HyperdriveTarget1.sol": "HyperdriveTarget1"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/external/HyperdriveTarget1.sol": {
        "keccak256": "0x7d95b2b8abfdb4518963c0a06f568969b499f3e07fc7e42ff54722d42fae78c2",
        "urls": [
          "bzz-raw://0ee08b9c5ffcc231eeca7413e358bec99df0a6f2b8315463d64edacd2ba7f283",
          "dweb:/ipfs/QmfGFMnbvHcCh1YJ1KZEUiJucuJosaD9xbrURbg3rDenRG"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
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
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveAdmin.sol": {
        "keccak256": "0xea9b7b3489ac95dd9c41ae7174c9f34a29f8ae14224ee5d2605434a8c8711784",
        "urls": [
          "bzz-raw://9076244df4f436e8a8921faadfe925f243ae9a37ac7a16cbce3dd5b4a66631a8",
          "dweb:/ipfs/QmeRunYGGcgUZjRHS3m1AarzzjgV9vtp5K9UeUjTaaCrfs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646",
        "urls": [
          "bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc",
          "dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57",
        "urls": [
          "bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2",
          "dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad",
        "urls": [
          "bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7",
          "dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543",
        "urls": [
          "bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a",
          "dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277",
        "urls": [
          "bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb",
          "dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0",
        "urls": [
          "bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d",
          "dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148",
        "urls": [
          "bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db",
          "dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3",
        "urls": [
          "bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62",
          "dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db",
        "urls": [
          "bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a",
          "dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH"
        ],
        "license": "Apache-2.0"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/external/HyperdriveTarget1.sol",
    "id": 1362,
    "exportedSymbols": {
      "HyperdriveAdmin": [
        4506
      ],
      "HyperdriveCheckpoint": [
        5801
      ],
      "HyperdriveLP": [
        6967
      ],
      "HyperdriveLong": [
        7805
      ],
      "HyperdriveMultiToken": [
        8158
      ],
      "HyperdriveShort": [
        9192
      ],
      "HyperdriveStorage": [
        9465
      ],
      "HyperdriveTarget1": [
        1361
      ],
      "IHyperdrive": [
        3759
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:6513:2",
    "nodes": [
      {
        "id": 1176,
        "nodeType": "PragmaDirective",
        "src": "39:23:2",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 1178,
        "nodeType": "ImportDirective",
        "src": "64:60:2",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1177,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "73:11:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1180,
        "nodeType": "ImportDirective",
        "src": "125:66:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveAdmin.sol",
        "file": "../internal/HyperdriveAdmin.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 4507,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1179,
              "name": "HyperdriveAdmin",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4506,
              "src": "134:15:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1182,
        "nodeType": "ImportDirective",
        "src": "192:76:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
        "file": "../internal/HyperdriveCheckpoint.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 5802,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1181,
              "name": "HyperdriveCheckpoint",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5801,
              "src": "201:20:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1184,
        "nodeType": "ImportDirective",
        "src": "269:64:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
        "file": "../internal/HyperdriveLong.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 7806,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1183,
              "name": "HyperdriveLong",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7805,
              "src": "278:14:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1186,
        "nodeType": "ImportDirective",
        "src": "334:60:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLP.sol",
        "file": "../internal/HyperdriveLP.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 6968,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1185,
              "name": "HyperdriveLP",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6967,
              "src": "343:12:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1188,
        "nodeType": "ImportDirective",
        "src": "395:76:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveMultiToken.sol",
        "file": "../internal/HyperdriveMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 8159,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1187,
              "name": "HyperdriveMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8158,
              "src": "404:20:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1190,
        "nodeType": "ImportDirective",
        "src": "472:66:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
        "file": "../internal/HyperdriveShort.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 9193,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1189,
              "name": "HyperdriveShort",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9192,
              "src": "481:15:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1192,
        "nodeType": "ImportDirective",
        "src": "539:70:2",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "file": "../internal/HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 1362,
        "sourceUnit": 9466,
        "symbolAliases": [
          {
            "foreign": {
              "id": 1191,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9465,
              "src": "548:17:2",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 1361,
        "nodeType": "ContractDefinition",
        "src": "931:5620:2",
        "nodes": [
          {
            "id": 1216,
            "nodeType": "FunctionDefinition",
            "src": "1210:94:2",
            "nodes": [],
            "body": {
              "id": 1215,
              "nodeType": "Block",
              "src": "1302:2:2",
              "nodes": [],
              "statements": []
            },
            "documentation": {
              "id": 1206,
              "nodeType": "StructuredDocumentation",
              "src": "1107:98:2",
              "text": "@notice Instantiates target1.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 1212,
                    "name": "_config",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1209,
                    "src": "1293:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig memory"
                    }
                  }
                ],
                "id": 1213,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 1211,
                  "name": "HyperdriveStorage",
                  "nameLocations": [
                    "1275:17:2"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 9465,
                  "src": "1275:17:2"
                },
                "nodeType": "ModifierInvocation",
                "src": "1275:26:2"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 1210,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1209,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "1261:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1216,
                  "src": "1231:37:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 1208,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1207,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "1231:11:2",
                        "1243:10:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "1231:22:2"
                    },
                    "referencedDeclaration": 3558,
                    "src": "1231:22:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1221:53:2"
            },
            "returnParameters": {
              "id": 1214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1302:0:2"
            },
            "scope": 1361,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 1239,
            "nodeType": "FunctionDefinition",
            "src": "1732:271:2",
            "nodes": [],
            "body": {
              "id": 1238,
              "nodeType": "Block",
              "src": "1919:84:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1232,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1219,
                        "src": "1947:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1233,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1221,
                        "src": "1962:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1234,
                        "name": "_minOutput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1223,
                        "src": "1975:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1235,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1226,
                        "src": "1987:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1231,
                      "name": "_closeLong",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7342,
                      "src": "1936:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 1236,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1936:60:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1230,
                  "id": 1237,
                  "nodeType": "Return",
                  "src": "1929:67:2"
                }
              ]
            },
            "documentation": {
              "id": 1217,
              "nodeType": "StructuredDocumentation",
              "src": "1329:398:2",
              "text": "@notice Closes a long position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of longs to close.\n @param _minOutput The minimum amount of base the trader will accept.\n @param _options The options that configure how the trade is settled.\n @return The amount of underlying the user receives."
            },
            "functionSelector": "ded06231",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "closeLong",
            "nameLocation": "1741:9:2",
            "parameters": {
              "id": 1227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1219,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "1768:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1239,
                  "src": "1760:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1218,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1760:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1221,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "1799:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1239,
                  "src": "1791:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1220,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1791:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1223,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "1828:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1239,
                  "src": "1820:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1222,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1820:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1226,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "1877:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1239,
                  "src": "1848:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1225,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1224,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "1848:11:2",
                        "1860:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "1848:19:2"
                    },
                    "referencedDeclaration": 3608,
                    "src": "1848:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1750:141:2"
            },
            "returnParameters": {
              "id": 1230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1229,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1239,
                  "src": "1910:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1910:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1909:9:2"
            },
            "scope": 1361,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1262,
            "nodeType": "FunctionDefinition",
            "src": "2431:273:2",
            "nodes": [],
            "body": {
              "id": 1261,
              "nodeType": "Block",
              "src": "2619:85:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1255,
                        "name": "_maturityTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1242,
                        "src": "2648:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1256,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1244,
                        "src": "2663:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1257,
                        "name": "_minOutput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1246,
                        "src": "2676:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1258,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1249,
                        "src": "2688:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1254,
                      "name": "_closeShort",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8688,
                      "src": "2636:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 1259,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2636:61:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1253,
                  "id": 1260,
                  "nodeType": "Return",
                  "src": "2629:68:2"
                }
              ]
            },
            "documentation": {
              "id": 1240,
              "nodeType": "StructuredDocumentation",
              "src": "2029:397:2",
              "text": "@notice Closes a short position with a specified maturity time.\n @param _maturityTime The maturity time of the short.\n @param _bondAmount The amount of shorts to close.\n @param _minOutput The minimum output of this trade.\n @param _options The options that configure how the trade is settled.\n @return The amount of base tokens produced by closing this short."
            },
            "functionSelector": "29b23fc1",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "closeShort",
            "nameLocation": "2440:10:2",
            "parameters": {
              "id": 1250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1242,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "2468:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1262,
                  "src": "2460:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1241,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2460:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1244,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "2499:11:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1262,
                  "src": "2491:19:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2491:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1246,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "2528:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1262,
                  "src": "2520:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1245,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2520:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1249,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2577:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1262,
                  "src": "2548:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1248,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1247,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2548:11:2",
                        "2560:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "2548:19:2"
                    },
                    "referencedDeclaration": 3608,
                    "src": "2548:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2450:141:2"
            },
            "returnParameters": {
              "id": 1253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1252,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1262,
                  "src": "2610:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2610:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2609:9:2"
            },
            "scope": 1361,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1282,
            "nodeType": "FunctionDefinition",
            "src": "3049:236:2",
            "nodes": [],
            "body": {
              "id": 1281,
              "nodeType": "Block",
              "src": "3219:66:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1276,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1265,
                        "src": "3248:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1277,
                        "name": "_apr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1267,
                        "src": "3263:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1278,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1270,
                        "src": "3269:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1275,
                      "name": "_initialize",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5960,
                      "src": "3236:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 1279,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3236:42:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1274,
                  "id": 1280,
                  "nodeType": "Return",
                  "src": "3229:49:2"
                }
              ]
            },
            "documentation": {
              "id": 1263,
              "nodeType": "StructuredDocumentation",
              "src": "2727:317:2",
              "text": "@notice Allows the first LP to initialize the market with a target APR.\n @param _contribution The amount of base to supply.\n @param _apr The target APR.\n @param _options The options that configure how the operation is settled.\n @return lpShares The initial number of LP shares created."
            },
            "functionSelector": "77d05ff4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "initialize",
            "nameLocation": "3058:10:2",
            "parameters": {
              "id": 1271,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1265,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "3086:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1282,
                  "src": "3078:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1264,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3078:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1267,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "3117:4:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1282,
                  "src": "3109:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1266,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3109:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1270,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "3160:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1282,
                  "src": "3131:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1269,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1268,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "3131:11:2",
                        "3143:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "3131:19:2"
                    },
                    "referencedDeclaration": 3608,
                    "src": "3131:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3068:106:2"
            },
            "returnParameters": {
              "id": 1274,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1273,
                  "mutability": "mutable",
                  "name": "lpShares",
                  "nameLocation": "3209:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1282,
                  "src": "3201:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1272,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3201:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3200:18:2"
            },
            "scope": 1361,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1305,
            "nodeType": "FunctionDefinition",
            "src": "3705:280:2",
            "nodes": [],
            "body": {
              "id": 1304,
              "nodeType": "Block",
              "src": "3905:80:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1298,
                        "name": "_contribution",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1285,
                        "src": "3936:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1299,
                        "name": "_minApr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1287,
                        "src": "3951:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1300,
                        "name": "_maxApr",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1289,
                        "src": "3960:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1301,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1292,
                        "src": "3969:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1297,
                      "name": "_addLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6174,
                      "src": "3922:13:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256)"
                      }
                    },
                    "id": 1302,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3922:56:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1296,
                  "id": 1303,
                  "nodeType": "Return",
                  "src": "3915:63:2"
                }
              ]
            },
            "documentation": {
              "id": 1283,
              "nodeType": "StructuredDocumentation",
              "src": "3291:409:2",
              "text": "@notice Allows LPs to supply liquidity for LP shares.\n @param _contribution The amount of base to supply.\n @param _minApr The minimum APR at which the LP is willing to supply.\n @param _maxApr The maximum APR at which the LP is willing to supply.\n @param _options The options that configure how the operation is settled.\n @return lpShares The number of LP tokens created."
            },
            "functionSelector": "9aa68462",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addLiquidity",
            "nameLocation": "3714:12:2",
            "parameters": {
              "id": 1293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1285,
                  "mutability": "mutable",
                  "name": "_contribution",
                  "nameLocation": "3744:13:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1305,
                  "src": "3736:21:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1284,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3736:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1287,
                  "mutability": "mutable",
                  "name": "_minApr",
                  "nameLocation": "3775:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1305,
                  "src": "3767:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1286,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3767:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1289,
                  "mutability": "mutable",
                  "name": "_maxApr",
                  "nameLocation": "3800:7:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1305,
                  "src": "3792:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1288,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3792:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1292,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "3846:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1305,
                  "src": "3817:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1291,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1290,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "3817:11:2",
                        "3829:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "3817:19:2"
                    },
                    "referencedDeclaration": 3608,
                    "src": "3817:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3726:134:2"
            },
            "returnParameters": {
              "id": 1296,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1295,
                  "mutability": "mutable",
                  "name": "lpShares",
                  "nameLocation": "3895:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1305,
                  "src": "3887:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3887:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3886:18:2"
            },
            "scope": 1361,
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1327,
            "nodeType": "FunctionDefinition",
            "src": "4988:242:2",
            "nodes": [],
            "body": {
              "id": 1326,
              "nodeType": "Block",
              "src": "5157:73:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1321,
                        "name": "_lpShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1308,
                        "src": "5191:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1322,
                        "name": "_minOutput",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1310,
                        "src": "5202:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1323,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1313,
                        "src": "5214:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1320,
                      "name": "_removeLiquidity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6328,
                      "src": "5174:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                      }
                    },
                    "id": 1324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5174:49:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 1319,
                  "id": 1325,
                  "nodeType": "Return",
                  "src": "5167:56:2"
                }
              ]
            },
            "documentation": {
              "id": 1306,
              "nodeType": "StructuredDocumentation",
              "src": "3991:992:2",
              "text": "@notice Allows an LP to burn shares and withdraw from the pool.\n @param _lpShares The LP shares to burn.\n @param _minOutput The minium amount of the base token to receive.\n        NOTE: This value is likely to be less than the amount LP shares\n        are worth. The remainder is in short and long withdraw shares\n        which are hard to game the value of.\n @param _options The options that configure how the operation is settled.\n @return The amount the LP removing liquidity receives. The LP receives a\n         proportional amount of the pool's idle capital.\n @return The base that the LP receives buys out some of their LP shares,\n         but it may not be sufficient to fully buy the LP out. In this\n         case, the LP receives withdrawal shares equal in value to the\n         present value they are owed. As idle capital becomes available,\n         the pool will buy back these shares."
            },
            "functionSelector": "cbc13434",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "removeLiquidity",
            "nameLocation": "4997:15:2",
            "parameters": {
              "id": 1314,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1308,
                  "mutability": "mutable",
                  "name": "_lpShares",
                  "nameLocation": "5030:9:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1327,
                  "src": "5022:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1307,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5022:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1310,
                  "mutability": "mutable",
                  "name": "_minOutput",
                  "nameLocation": "5057:10:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1327,
                  "src": "5049:18:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1309,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5049:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1313,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "5106:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1327,
                  "src": "5077:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1312,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1311,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "5077:11:2",
                        "5089:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "5077:19:2"
                    },
                    "referencedDeclaration": 3608,
                    "src": "5077:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5012:108:2"
            },
            "returnParameters": {
              "id": 1319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1316,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1327,
                  "src": "5139:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5139:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1318,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1327,
                  "src": "5148:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5148:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5138:18:2"
            },
            "scope": 1361,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1349,
            "nodeType": "FunctionDefinition",
            "src": "5932:362:2",
            "nodes": [],
            "body": {
              "id": 1348,
              "nodeType": "Block",
              "src": "6124:170:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1343,
                        "name": "_withdrawalShares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1330,
                        "src": "6194:17:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1344,
                        "name": "_minOutputPerShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1332,
                        "src": "6229:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 1345,
                        "name": "_options",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1335,
                        "src": "6265:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                          "typeString": "struct IHyperdrive.Options calldata"
                        }
                      ],
                      "id": 1342,
                      "name": "_redeemWithdrawalShares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6467,
                      "src": "6153:23:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_struct$_Options_$3608_calldata_ptr_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256,uint256,struct IHyperdrive.Options calldata) returns (uint256,uint256)"
                      }
                    },
                    "id": 1346,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6153:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 1341,
                  "id": 1347,
                  "nodeType": "Return",
                  "src": "6134:153:2"
                }
              ]
            },
            "documentation": {
              "id": 1328,
              "nodeType": "StructuredDocumentation",
              "src": "5236:691:2",
              "text": "@notice Redeems withdrawal shares by giving the LP a pro-rata amount of\n         the withdrawal pool's proceeds. This function redeems the\n         maximum amount of the specified withdrawal shares given the\n         amount of withdrawal shares ready to withdraw.\n @param _withdrawalShares The withdrawal shares to redeem.\n @param _minOutputPerShare The minimum amount of base the LP expects to\n        receive for each withdrawal share that is burned.\n @param _options The options that configure how the operation is settled.\n @return The amount the LP received.\n @return The amount of withdrawal shares that were redeemed."
            },
            "functionSelector": "074a6de9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "redeemWithdrawalShares",
            "nameLocation": "5941:22:2",
            "parameters": {
              "id": 1336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1330,
                  "mutability": "mutable",
                  "name": "_withdrawalShares",
                  "nameLocation": "5981:17:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "5973:25:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1329,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5973:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1332,
                  "mutability": "mutable",
                  "name": "_minOutputPerShare",
                  "nameLocation": "6016:18:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "6008:26:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1331,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6008:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1335,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "6073:8:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "6044:37:2",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 1334,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 1333,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "6044:11:2",
                        "6056:7:2"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "6044:19:2"
                    },
                    "referencedDeclaration": 3608,
                    "src": "6044:19:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5963:124:2"
            },
            "returnParameters": {
              "id": 1341,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1338,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "6106:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6106:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1340,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 1349,
                  "src": "6115:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1339,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6115:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6105:18:2"
            },
            "scope": 1361,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 1360,
            "nodeType": "FunctionDefinition",
            "src": "6450:99:2",
            "nodes": [],
            "body": {
              "id": 1359,
              "nodeType": "Block",
              "src": "6504:45:2",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 1356,
                        "name": "_checkpointTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1352,
                        "src": "6526:15:2",
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
                      "id": 1355,
                      "name": "_checkpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5472,
                      "src": "6514:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 1357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6514:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1358,
                  "nodeType": "ExpressionStatement",
                  "src": "6514:28:2"
                }
              ]
            },
            "documentation": {
              "id": 1350,
              "nodeType": "StructuredDocumentation",
              "src": "6325:120:2",
              "text": "@notice Allows anyone to mint a new checkpoint.\n @param _checkpointTime The time of the checkpoint to create."
            },
            "functionSelector": "ed64bab2",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "checkpoint",
            "nameLocation": "6459:10:2",
            "parameters": {
              "id": 1353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1352,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "6478:15:2",
                  "nodeType": "VariableDeclaration",
                  "scope": 1360,
                  "src": "6470:23:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1351,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6470:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6469:25:2"
            },
            "returnParameters": {
              "id": 1354,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6504:0:2"
            },
            "scope": 1361,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 1194,
              "name": "HyperdriveAdmin",
              "nameLocations": [
                "974:15:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 4506,
              "src": "974:15:2"
            },
            "id": 1195,
            "nodeType": "InheritanceSpecifier",
            "src": "974:15:2"
          },
          {
            "baseName": {
              "id": 1196,
              "name": "HyperdriveMultiToken",
              "nameLocations": [
                "995:20:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8158,
              "src": "995:20:2"
            },
            "id": 1197,
            "nodeType": "InheritanceSpecifier",
            "src": "995:20:2"
          },
          {
            "baseName": {
              "id": 1198,
              "name": "HyperdriveLP",
              "nameLocations": [
                "1021:12:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6967,
              "src": "1021:12:2"
            },
            "id": 1199,
            "nodeType": "InheritanceSpecifier",
            "src": "1021:12:2"
          },
          {
            "baseName": {
              "id": 1200,
              "name": "HyperdriveLong",
              "nameLocations": [
                "1039:14:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7805,
              "src": "1039:14:2"
            },
            "id": 1201,
            "nodeType": "InheritanceSpecifier",
            "src": "1039:14:2"
          },
          {
            "baseName": {
              "id": 1202,
              "name": "HyperdriveShort",
              "nameLocations": [
                "1059:15:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9192,
              "src": "1059:15:2"
            },
            "id": 1203,
            "nodeType": "InheritanceSpecifier",
            "src": "1059:15:2"
          },
          {
            "baseName": {
              "id": 1204,
              "name": "HyperdriveCheckpoint",
              "nameLocations": [
                "1080:20:2"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5801,
              "src": "1080:20:2"
            },
            "id": 1205,
            "nodeType": "InheritanceSpecifier",
            "src": "1080:20:2"
          }
        ],
        "canonicalName": "HyperdriveTarget1",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 1193,
          "nodeType": "StructuredDocumentation",
          "src": "611:320:2",
          "text": "@author DELV\n @title HyperdriveTarget1\n @notice Hyperdrive's target 1 logic contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          1361,
          5801,
          9192,
          7805,
          6967,
          8158,
          4506,
          5354,
          9465,
          60564
        ],
        "name": "HyperdriveTarget1",
        "nameLocation": "949:17:2",
        "scope": 1362,
        "usedErrors": [
          3615,
          3619,
          3623,
          3625,
          3631,
          3633,
          3635,
          3637,
          3641,
          3643,
          3649,
          3651,
          3653,
          3667,
          3730,
          3733,
          3735,
          3742,
          3745,
          3747
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 2
} as const;
