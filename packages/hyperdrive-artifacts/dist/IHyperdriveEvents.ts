export const IHyperdriveEvents = 
{
  "abi": [
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "indexed": false,
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "name": "PauseStatusUpdated",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":\"IHyperdriveEvents\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PauseStatusUpdated",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
        "solmate/=lib/solmate/src/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/src/interfaces/IHyperdriveEvents.sol": "IHyperdriveEvents"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
    "id": 7815,
    "exportedSymbols": {
      "IHyperdriveEvents": [
        7814
      ],
      "IMultiTokenEvents": [
        8304
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:2172:48",
    "nodes": [
      {
        "id": 7675,
        "nodeType": "PragmaDirective",
        "src": "39:23:48",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 7677,
        "nodeType": "ImportDirective",
        "src": "64:60:48",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiTokenEvents.sol",
        "file": "./IMultiTokenEvents.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 7815,
        "sourceUnit": 8305,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7676,
              "name": "IMultiTokenEvents",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8304,
              "src": "73:17:48",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7814,
        "nodeType": "ContractDefinition",
        "src": "126:2084:48",
        "nodes": [
          {
            "id": 7691,
            "nodeType": "EventDefinition",
            "src": "181:165:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff44231",
            "name": "Initialize",
            "nameLocation": "187:10:48",
            "parameters": {
              "id": 7690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7681,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "223:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7691,
                  "src": "207:24:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7680,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:7:48",
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
                  "id": 7683,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "249:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7691,
                  "src": "241:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7682,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "241:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7685,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "275:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7691,
                  "src": "267:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "267:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7687,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "303:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7691,
                  "src": "295:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "295:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7689,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "336:3:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7691,
                  "src": "328:11:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "328:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "197:148:48"
            }
          },
          {
            "id": 7703,
            "nodeType": "EventDefinition",
            "src": "352:176:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e50239609",
            "name": "AddLiquidity",
            "nameLocation": "358:12:48",
            "parameters": {
              "id": 7702,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7693,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "396:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "380:24:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "380:7:48",
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
                  "id": 7695,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "422:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "414:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7694,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7697,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "448:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "440:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7696,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7699,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "476:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "468:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7698,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "468:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7701,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "509:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7703,
                  "src": "501:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7700,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "501:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "370:157:48"
            }
          },
          {
            "id": 7717,
            "nodeType": "EventDefinition",
            "src": "534:218:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "ae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be8",
            "name": "RemoveLiquidity",
            "nameLocation": "540:15:48",
            "parameters": {
              "id": 7716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7705,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "581:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7717,
                  "src": "565:24:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7704,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "565:7:48",
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
                  "id": 7707,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "607:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7717,
                  "src": "599:16:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7706,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "599:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7709,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "633:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7717,
                  "src": "625:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7708,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7711,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "661:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7717,
                  "src": "653:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7710,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "653:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7713,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "694:21:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7717,
                  "src": "686:29:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "686:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7715,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "733:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7717,
                  "src": "725:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "725:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "555:196:48"
            }
          },
          {
            "id": 7727,
            "nodeType": "EventDefinition",
            "src": "758:169:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754",
            "name": "RedeemWithdrawalShares",
            "nameLocation": "764:22:48",
            "parameters": {
              "id": 7726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7719,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "812:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7727,
                  "src": "796:24:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7718,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "796:7:48",
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
                  "id": 7721,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "838:21:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7727,
                  "src": "830:29:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7720,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "830:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7723,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "877:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7727,
                  "src": "869:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7722,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "869:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7725,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "905:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7727,
                  "src": "897:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7724,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "897:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "786:140:48"
            }
          },
          {
            "id": 7741,
            "nodeType": "EventDefinition",
            "src": "933:205:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda686",
            "name": "OpenLong",
            "nameLocation": "939:8:48",
            "parameters": {
              "id": 7740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7729,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "973:6:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7741,
                  "src": "957:22:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7728,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "957:7:48",
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
                  "id": 7731,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1005:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7741,
                  "src": "989:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "989:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7733,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1030:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7741,
                  "src": "1022:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7732,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1022:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7735,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1060:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7741,
                  "src": "1052:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7737,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "1088:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7741,
                  "src": "1080:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1080:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7739,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1121:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7741,
                  "src": "1113:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7738,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1113:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "947:190:48"
            }
          },
          {
            "id": 7755,
            "nodeType": "EventDefinition",
            "src": "1144:206:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95",
            "name": "OpenShort",
            "nameLocation": "1150:9:48",
            "parameters": {
              "id": 7754,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7743,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1185:6:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7755,
                  "src": "1169:22:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7742,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1169:7:48",
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
                  "id": 7745,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1217:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7755,
                  "src": "1201:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1201:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7747,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1242:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7755,
                  "src": "1234:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7746,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1234:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7749,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1272:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7755,
                  "src": "1264:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7748,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7751,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "1300:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7755,
                  "src": "1292:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7750,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1292:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7753,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1333:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7755,
                  "src": "1325:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7752,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1325:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1159:190:48"
            }
          },
          {
            "id": 7769,
            "nodeType": "EventDefinition",
            "src": "1356:206:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca0",
            "name": "CloseLong",
            "nameLocation": "1362:9:48",
            "parameters": {
              "id": 7768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7757,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1397:6:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7769,
                  "src": "1381:22:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7756,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1381:7:48",
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
                  "id": 7759,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1429:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7769,
                  "src": "1413:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1413:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7761,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1454:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7769,
                  "src": "1446:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7763,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1484:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7769,
                  "src": "1476:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1476:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7765,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "1512:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7769,
                  "src": "1504:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1504:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7767,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1545:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7769,
                  "src": "1537:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1537:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1371:190:48"
            }
          },
          {
            "id": 7783,
            "nodeType": "EventDefinition",
            "src": "1568:207:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd67",
            "name": "CloseShort",
            "nameLocation": "1574:10:48",
            "parameters": {
              "id": 7782,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7771,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1610:6:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7783,
                  "src": "1594:22:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7770,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1594:7:48",
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
                  "id": 7773,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1642:7:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7783,
                  "src": "1626:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1626:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7775,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1667:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7783,
                  "src": "1659:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7774,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1659:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7777,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1697:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7783,
                  "src": "1689:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1689:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7779,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "1725:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7783,
                  "src": "1717:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7778,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1717:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7781,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "1758:10:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7783,
                  "src": "1750:18:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7780,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1750:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1584:190:48"
            }
          },
          {
            "id": 7795,
            "nodeType": "EventDefinition",
            "src": "1781:193:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
            "name": "CreateCheckpoint",
            "nameLocation": "1787:16:48",
            "parameters": {
              "id": 7794,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7785,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "1829:14:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7795,
                  "src": "1813:30:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7784,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1813:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7787,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "1861:15:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7795,
                  "src": "1853:23:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1853:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7789,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedShorts",
                  "nameLocation": "1894:13:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7795,
                  "src": "1886:21:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7788,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1886:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7791,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedLongs",
                  "nameLocation": "1925:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7795,
                  "src": "1917:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1917:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7793,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "1955:12:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7795,
                  "src": "1947:20:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7792,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1947:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1803:170:48"
            }
          },
          {
            "id": 7801,
            "nodeType": "EventDefinition",
            "src": "1980:68:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a4bafc79b3f9fdba2427cd386f1fbc7d8779e9fd7229f6220d53bc04d3901e47",
            "name": "CollectGovernanceFee",
            "nameLocation": "1986:20:48",
            "parameters": {
              "id": 7800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7797,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "collector",
                  "nameLocation": "2023:9:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2007:25:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7796,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2007:7:48",
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
                  "id": 7799,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "fees",
                  "nameLocation": "2042:4:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7801,
                  "src": "2034:12:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2034:7:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2006:41:48"
            }
          },
          {
            "id": 7805,
            "nodeType": "EventDefinition",
            "src": "2054:55:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "2060:17:48",
            "parameters": {
              "id": 7804,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7803,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newGovernance",
                  "nameLocation": "2094:13:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7805,
                  "src": "2078:29:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7802,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2078:7:48",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2077:31:48"
            }
          },
          {
            "id": 7809,
            "nodeType": "EventDefinition",
            "src": "2115:47:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab",
            "name": "PauserUpdated",
            "nameLocation": "2121:13:48",
            "parameters": {
              "id": 7808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7807,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newPauser",
                  "nameLocation": "2151:9:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7809,
                  "src": "2135:25:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7806,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2135:7:48",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2134:27:48"
            }
          },
          {
            "id": 7813,
            "nodeType": "EventDefinition",
            "src": "2168:40:48",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7c4d1fe30fdbfda9e9c4c43e759ef32e4db5128d4cb58ff3ae9583b89b6242a5",
            "name": "PauseStatusUpdated",
            "nameLocation": "2174:18:48",
            "parameters": {
              "id": 7812,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7811,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "isPaused",
                  "nameLocation": "2198:8:48",
                  "nodeType": "VariableDeclaration",
                  "scope": 7813,
                  "src": "2193:13:48",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 7810,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2193:4:48",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2192:15:48"
            }
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 7678,
              "name": "IMultiTokenEvents",
              "nameLocations": [
                "157:17:48"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8304,
              "src": "157:17:48"
            },
            "id": 7679,
            "nodeType": "InheritanceSpecifier",
            "src": "157:17:48"
          }
        ],
        "canonicalName": "IHyperdriveEvents",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          7814,
          8304
        ],
        "name": "IHyperdriveEvents",
        "nameLocation": "136:17:48",
        "scope": 7815,
        "usedErrors": [],
        "usedEvents": [
          7691,
          7703,
          7717,
          7727,
          7741,
          7755,
          7769,
          7783,
          7795,
          7801,
          7805,
          7809,
          7813,
          8287,
          8295,
          8303
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 48
} as const;
