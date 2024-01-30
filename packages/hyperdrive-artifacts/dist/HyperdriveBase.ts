export const HyperdriveBase = 
{
  "abi": [
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"The Hyperdrive base contract that provides a set of helper methods         and defines the functions that must be overridden by implementations.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496\",\"dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "ReentrancyGuardReentrantCall"
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
        "contracts/src/internal/HyperdriveBase.sol": "HyperdriveBase"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
        "urls": [
          "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
          "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
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
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826",
        "urls": [
          "bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496",
          "dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
        "urls": [
          "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
          "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
        "urls": [
          "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
          "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/Errors.sol": {
        "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
        "urls": [
          "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
          "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
        "urls": [
          "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
          "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
        "urls": [
          "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
          "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/LPMath.sol": {
        "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
        "urls": [
          "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
          "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
        "urls": [
          "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
          "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
        "urls": [
          "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
          "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
        "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
        "urls": [
          "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
          "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
    "id": 9508,
    "exportedSymbols": {
      "AssetId": [
        13503
      ],
      "FixedPointMath": [
        14294
      ],
      "HyperdriveBase": [
        9507
      ],
      "HyperdriveMath": [
        15024
      ],
      "HyperdriveStorage": [
        13187
      ],
      "IERC20": [
        6740
      ],
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveEvents": [
        7814
      ],
      "LPMath": [
        17602
      ],
      "ONE": [
        13529
      ],
      "SafeCast": [
        17708
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:26544:64",
    "nodes": [
      {
        "id": 8597,
        "nodeType": "PragmaDirective",
        "src": "39:23:64",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 8599,
        "nodeType": "ImportDirective",
        "src": "64:50:64",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 6741,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8598,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6740,
              "src": "73:6:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8601,
        "nodeType": "ImportDirective",
        "src": "115:60:64",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8600,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "124:11:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8603,
        "nodeType": "ImportDirective",
        "src": "176:72:64",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdriveEvents.sol",
        "file": "../interfaces/IHyperdriveEvents.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 7815,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8602,
              "name": "IHyperdriveEvents",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7814,
              "src": "185:17:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8605,
        "nodeType": "ImportDirective",
        "src": "249:51:64",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "../libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 13504,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8604,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13503,
              "src": "258:7:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8608,
        "nodeType": "ImportDirective",
        "src": "301:70:64",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8606,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "310:14:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 8607,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13529,
              "src": "326:3:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8610,
        "nodeType": "ImportDirective",
        "src": "372:65:64",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 15025,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8609,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 15024,
              "src": "381:14:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8612,
        "nodeType": "ImportDirective",
        "src": "438:49:64",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/LPMath.sol",
        "file": "../libraries/LPMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 17603,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8611,
              "name": "LPMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 17602,
              "src": "447:6:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8614,
        "nodeType": "ImportDirective",
        "src": "488:53:64",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "../libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 17709,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8613,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 17708,
              "src": "497:8:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8616,
        "nodeType": "ImportDirective",
        "src": "542:60:64",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "file": "./HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9508,
        "sourceUnit": 13188,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8615,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13187,
              "src": "551:17:64",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9507,
        "nodeType": "ContractDefinition",
        "src": "1032:25550:64",
        "nodes": [
          {
            "id": 8624,
            "nodeType": "UsingForDirective",
            "src": "1111:33:64",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 8622,
              "name": "FixedPointMath",
              "nameLocations": [
                "1117:14:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "1117:14:64"
            },
            "typeName": {
              "id": 8623,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1136:7:64",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 8627,
            "nodeType": "UsingForDirective",
            "src": "1149:32:64",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 8625,
              "name": "FixedPointMath",
              "nameLocations": [
                "1155:14:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "1155:14:64"
            },
            "typeName": {
              "id": 8626,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1174:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 8630,
            "nodeType": "UsingForDirective",
            "src": "1186:27:64",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 8628,
              "name": "SafeCast",
              "nameLocations": [
                "1192:8:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17708,
              "src": "1192:8:64"
            },
            "typeName": {
              "id": 8629,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1205:7:64",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 8633,
            "nodeType": "UsingForDirective",
            "src": "1218:26:64",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 8631,
              "name": "SafeCast",
              "nameLocations": [
                "1224:8:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17708,
              "src": "1224:8:64"
            },
            "typeName": {
              "id": 8632,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1237:6:64",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 8637,
            "nodeType": "FunctionDefinition",
            "src": "1427:52:64",
            "nodes": [],
            "documentation": {
              "id": 8634,
              "nodeType": "StructuredDocumentation",
              "src": "1276:146:64",
              "text": "@dev A YieldSource dependent check that prevents ether from being\n         transferred to Hyperdrive instances that don't accept ether."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "1436:18:64",
            "parameters": {
              "id": 8635,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1454:2:64"
            },
            "returnParameters": {
              "id": 8636,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1478:0:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 8650,
            "nodeType": "FunctionDefinition",
            "src": "2015:169:64",
            "nodes": [],
            "documentation": {
              "id": 8638,
              "nodeType": "StructuredDocumentation",
              "src": "1485:525:64",
              "text": "@dev Transfers base from the user and commits it to the yield source.\n @param _amount The amount of base to deposit.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the currency used in the deposit is\n        specified here. Aside from those options, yield sources can\n        choose to implement additional options.\n @return sharesMinted The shares created by this deposit.\n @return vaultSharePrice The vault share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "2024:8:64",
            "parameters": {
              "id": 8644,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8640,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "2050:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8650,
                  "src": "2042:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8639,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2042:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8643,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2096:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8650,
                  "src": "2067:37:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 8642,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8641,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2067:11:64",
                        "2079:7:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "2067:19:64"
                    },
                    "referencedDeclaration": 7271,
                    "src": "2067:19:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2032:78:64"
            },
            "returnParameters": {
              "id": 8649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8646,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "2145:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8650,
                  "src": "2137:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8645,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2137:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8648,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "2167:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8650,
                  "src": "2159:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8647,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2159:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2136:47:64"
            },
            "scope": 9507,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 8663,
            "nodeType": "FunctionDefinition",
            "src": "2796:177:64",
            "nodes": [],
            "documentation": {
              "id": 8651,
              "nodeType": "StructuredDocumentation",
              "src": "2190:601:64",
              "text": "@dev Withdraws shares from the yield source and sends the base\n         released to the destination.\n @param _shares The shares to withdraw from the yield source.\n @param _sharePrice The share price.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the destination and currency used in the\n        withdrawal are specified here. Aside from those options, yield\n        sources can choose to implement additional options.\n @return amountWithdrawn The amount of base released by the withdrawal."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "2805:9:64",
            "parameters": {
              "id": 8659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8653,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "2832:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8663,
                  "src": "2824:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8652,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2824:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8655,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "2857:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8663,
                  "src": "2849:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8654,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2849:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8658,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2907:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8663,
                  "src": "2878:37:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 8657,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8656,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2878:11:64",
                        "2890:7:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "2878:19:64"
                    },
                    "referencedDeclaration": 7271,
                    "src": "2878:19:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2814:107:64"
            },
            "returnParameters": {
              "id": 8662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8661,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "2956:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8663,
                  "src": "2948:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8660,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2948:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2947:25:64"
            },
            "scope": 9507,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 8669,
            "nodeType": "FunctionDefinition",
            "src": "3100:119:64",
            "nodes": [],
            "documentation": {
              "id": 8664,
              "nodeType": "StructuredDocumentation",
              "src": "2979:116:64",
              "text": "@dev Loads the share price from the yield source.\n @return vaultSharePrice The current vault share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerVaultShare",
            "nameLocation": "3109:19:64",
            "parameters": {
              "id": 8665,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3128:2:64"
            },
            "returnParameters": {
              "id": 8668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8667,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "3202:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8669,
                  "src": "3194:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8666,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3194:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3193:25:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 8683,
            "nodeType": "ModifierDefinition",
            "src": "3312:135:64",
            "nodes": [],
            "body": {
              "id": 8682,
              "nodeType": "Block",
              "src": "3335:112:64",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 8672,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13036,
                      "src": "3349:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "id": 8673,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "3362:8:64",
                    "memberName": "isPaused",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7109,
                    "src": "3349:21:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8680,
                  "nodeType": "IfStatement",
                  "src": "3345:85:64",
                  "trueBody": {
                    "id": 8679,
                    "nodeType": "Block",
                    "src": "3372:58:64",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 8674,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "3393:11:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 8676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3405:12:64",
                            "memberName": "PoolIsPaused",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7352,
                            "src": "3393:24:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 8677,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3393:26:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 8678,
                        "nodeType": "RevertStatement",
                        "src": "3386:33:64"
                      }
                    ]
                  }
                },
                {
                  "id": 8681,
                  "nodeType": "PlaceholderStatement",
                  "src": "3439:1:64"
                }
              ]
            },
            "documentation": {
              "id": 8670,
              "nodeType": "StructuredDocumentation",
              "src": "3244:63:64",
              "text": "@dev Blocks a function execution if the contract is paused."
            },
            "name": "isNotPaused",
            "nameLocation": "3321:11:64",
            "parameters": {
              "id": 8671,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3332:2:64"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8693,
            "nodeType": "FunctionDefinition",
            "src": "3766:154:64",
            "nodes": [],
            "documentation": {
              "id": 8684,
              "nodeType": "StructuredDocumentation",
              "src": "3477:284:64",
              "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _vaultSharePrice The current vault share price.\n @return openVaultSharePrice The open vault share price of the latest\n         checkpoint."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCheckpoint",
            "nameLocation": "3775:16:64",
            "parameters": {
              "id": 8689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8686,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "3809:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3801:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8685,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3801:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8688,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "3842:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3834:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8687,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3834:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3791:73:64"
            },
            "returnParameters": {
              "id": 8692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8691,
                  "mutability": "mutable",
                  "name": "openVaultSharePrice",
                  "nameLocation": "3899:19:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8693,
                  "src": "3891:27:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3891:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3890:29:64"
            },
            "scope": 9507,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 8725,
            "nodeType": "FunctionDefinition",
            "src": "4153:432:64",
            "nodes": [],
            "body": {
              "id": 8724,
              "nodeType": "Block",
              "src": "4269:316:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    8702
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8702,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "4287:16:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 8724,
                      "src": "4279:24:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8701,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4279:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8705,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 8703,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8779,
                      "src": "4306:17:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 8704,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4306:19:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4279:46:64"
                },
                {
                  "expression": {
                    "id": 8715,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8706,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8699,
                      "src": "4335:13:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 8709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8707,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8696,
                          "src": "4351:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 8708,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8702,
                          "src": "4367:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4351:32:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 8713,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4445:1:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 8714,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4351:95:64",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 8712,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8710,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8696,
                          "src": "4398:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 8711,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8702,
                          "src": "4414:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4398:32:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4335:111:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 8716,
                  "nodeType": "ExpressionStatement",
                  "src": "4335:111:64"
                },
                {
                  "expression": {
                    "id": 8722,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8717,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8699,
                      "src": "4522:13:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 8720,
                          "name": "_positionDuration",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13008,
                          "src": "4560:17:64",
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
                          "id": 8718,
                          "name": "timeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8699,
                          "src": "4538:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 8719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4552:7:64",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13590,
                        "src": "4538:21:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 8721,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4538:40:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4522:56:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 8723,
                  "nodeType": "ExpressionStatement",
                  "src": "4522:56:64"
                }
              ]
            },
            "documentation": {
              "id": 8694,
              "nodeType": "StructuredDocumentation",
              "src": "3947:201:64",
              "text": "@dev Calculates the normalized time remaining of a position.\n @param _maturityTime The maturity time of the position.\n @return timeRemaining The normalized time remaining (in [0, 1])."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateTimeRemaining",
            "nameLocation": "4162:23:64",
            "parameters": {
              "id": 8697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8696,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "4203:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8725,
                  "src": "4195:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8695,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4195:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4185:37:64"
            },
            "returnParameters": {
              "id": 8700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8699,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "4254:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8725,
                  "src": "4246:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8698,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4246:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4245:23:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8761,
            "nodeType": "FunctionDefinition",
            "src": "4785:450:64",
            "nodes": [],
            "body": {
              "id": 8760,
              "nodeType": "Block",
              "src": "4907:328:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    8734
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8734,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "4925:16:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 8760,
                      "src": "4917:24:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8733,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4917:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8739,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8738,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 8735,
                        "name": "_latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8779,
                        "src": "4944:17:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 8736,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4944:19:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 8737,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "4966:3:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4944:25:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4917:52:64"
                },
                {
                  "expression": {
                    "id": 8749,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8740,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8731,
                      "src": "4979:13:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 8743,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8741,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8728,
                          "src": "4995:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 8742,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8734,
                          "src": "5011:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4995:32:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 8747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "5089:1:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 8748,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "4995:95:64",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 8746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8744,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8728,
                          "src": "5042:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 8745,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8734,
                          "src": "5058:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5042:32:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4979:111:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 8750,
                  "nodeType": "ExpressionStatement",
                  "src": "4979:111:64"
                },
                {
                  "expression": {
                    "id": 8758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8751,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8731,
                      "src": "5166:13:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 8756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 8754,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13008,
                            "src": "5204:17:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 8755,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13529,
                            "src": "5224:3:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5204:23:64",
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
                          "id": 8752,
                          "name": "timeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8731,
                          "src": "5182:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 8753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5196:7:64",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13590,
                        "src": "5182:21:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 8757,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5182:46:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5166:62:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 8759,
                  "nodeType": "ExpressionStatement",
                  "src": "5166:62:64"
                }
              ]
            },
            "documentation": {
              "id": 8726,
              "nodeType": "StructuredDocumentation",
              "src": "4591:189:64",
              "text": "@dev Calculates the normalized time remaining of a position when the\n      maturity time is scaled up 18 decimals.\n @param _maturityTime The maturity time of the position."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateTimeRemainingScaled",
            "nameLocation": "4794:29:64",
            "parameters": {
              "id": 8729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8728,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "4841:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8761,
                  "src": "4833:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4833:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4823:37:64"
            },
            "returnParameters": {
              "id": 8732,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8731,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "4892:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8761,
                  "src": "4884:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8730,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4884:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4883:23:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8779,
            "nodeType": "FunctionDefinition",
            "src": "5348:223:64",
            "nodes": [],
            "body": {
              "id": 8778,
              "nodeType": "Block",
              "src": "5454:117:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 8776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8767,
                      "name": "latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8765,
                      "src": "5464:16:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 8775,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 8768,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "5495:5:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 8769,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5501:9:64",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "5495:15:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 8773,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 8770,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "5526:5:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 8771,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5532:9:64",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "5526:15:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "%",
                            "rightExpression": {
                              "id": 8772,
                              "name": "_checkpointDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13005,
                              "src": "5544:19:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5526:37:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 8774,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5525:39:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "5495:69:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5464:100:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 8777,
                  "nodeType": "ExpressionStatement",
                  "src": "5464:100:64"
                }
              ]
            },
            "documentation": {
              "id": 8762,
              "nodeType": "StructuredDocumentation",
              "src": "5241:102:64",
              "text": "@dev Gets the most recent checkpoint time.\n @return latestCheckpoint The latest checkpoint."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_latestCheckpoint",
            "nameLocation": "5357:17:64",
            "parameters": {
              "id": 8763,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5374:2:64"
            },
            "returnParameters": {
              "id": 8766,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8765,
                  "mutability": "mutable",
                  "name": "latestCheckpoint",
                  "nameLocation": "5432:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8779,
                  "src": "5424:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5424:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5423:26:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8794,
            "nodeType": "FunctionDefinition",
            "src": "5752:253:64",
            "nodes": [],
            "body": {
              "id": 8793,
              "nodeType": "Block",
              "src": "5819:186:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 8787,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13036,
                          "src": "5912:12:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 8788,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5925:13:64",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7082,
                        "src": "5912:26:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 8789,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13036,
                          "src": "5956:12:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 8790,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5969:15:64",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7094,
                        "src": "5956:28:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      ],
                      "expression": {
                        "id": 8785,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15024,
                        "src": "5848:14:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15024_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 8786,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5863:31:64",
                      "memberName": "calculateEffectiveShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14502,
                      "src": "5848:46:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 8791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5848:150:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8784,
                  "id": 8792,
                  "nodeType": "Return",
                  "src": "5829:169:64"
                }
              ]
            },
            "documentation": {
              "id": 8780,
              "nodeType": "StructuredDocumentation",
              "src": "5577:170:64",
              "text": "@dev Gets the effective share reserves.\n @return The effective share reserves. This is the share reserves used\n         by the YieldSpace pricing model."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_effectiveShareReserves",
            "nameLocation": "5761:23:64",
            "parameters": {
              "id": 8781,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5784:2:64"
            },
            "returnParameters": {
              "id": 8784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8783,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8794,
                  "src": "5810:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8782,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5810:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5809:9:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8829,
            "nodeType": "FunctionDefinition",
            "src": "6343:827:64",
            "nodes": [],
            "body": {
              "id": 8828,
              "nodeType": "Block",
              "src": "6436:734:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 8826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 8804,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13078,
                            "src": "6723:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 8812,
                          "indexExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 8807,
                                    "name": "AssetId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13503,
                                    "src": "6804:7:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                                      "typeString": "type(library AssetId)"
                                    }
                                  },
                                  "id": 8808,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "6812:13:64",
                                  "memberName": "AssetIdPrefix",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13209,
                                  "src": "6804:21:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$13209_$",
                                    "typeString": "type(enum AssetId.AssetIdPrefix)"
                                  }
                                },
                                "id": 8809,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "6826:4:64",
                                "memberName": "Long",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13206,
                                "src": "6804:26:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$13209",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                }
                              },
                              {
                                "id": 8810,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8797,
                                "src": "6856:13:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$13209",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 8805,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13503,
                                "src": "6757:7:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 8806,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6765:13:64",
                              "memberName": "encodeAssetId",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13232,
                              "src": "6757:21:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13209_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 8811,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6757:134:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6723:186:64",
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
                        "id": 8803,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6699:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 8802,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6699:6:64",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 8813,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6699:224:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 8816,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13078,
                            "src": "6962:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 8824,
                          "indexExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 8819,
                                    "name": "AssetId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13503,
                                    "src": "7043:7:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                                      "typeString": "type(library AssetId)"
                                    }
                                  },
                                  "id": 8820,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "7051:13:64",
                                  "memberName": "AssetIdPrefix",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13209,
                                  "src": "7043:21:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$13209_$",
                                    "typeString": "type(enum AssetId.AssetIdPrefix)"
                                  }
                                },
                                "id": 8821,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "7065:5:64",
                                "memberName": "Short",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13207,
                                "src": "7043:27:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$13209",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                }
                              },
                              {
                                "id": 8822,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8797,
                                "src": "7096:13:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$13209",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 8817,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13503,
                                "src": "6996:7:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 8818,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7004:13:64",
                              "memberName": "encodeAssetId",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13232,
                              "src": "6996:21:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$13209_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 8823,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "6996:135:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "6962:187:64",
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
                        "id": 8815,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6938:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 8814,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6938:6:64",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 8825,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6938:225:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6699:464:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 8801,
                  "id": 8827,
                  "nodeType": "Return",
                  "src": "6680:483:64"
                }
              ]
            },
            "documentation": {
              "id": 8795,
              "nodeType": "StructuredDocumentation",
              "src": "6011:327:64",
              "text": "@dev Gets the amount of non-netted longs with a given maturity.\n @param _maturityTime The maturity time of the longs.\n @return The amount of non-netted longs. This is a signed value that\n         can be negative. This is convenient for updating the long\n         exposure when closing positions."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_nonNettedLongs",
            "nameLocation": "6352:15:64",
            "parameters": {
              "id": 8798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8797,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "6385:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8829,
                  "src": "6377:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8796,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6377:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6367:37:64"
            },
            "returnParameters": {
              "id": 8801,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8800,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8829,
                  "src": "6428:6:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8799,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6428:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6427:8:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8902,
            "nodeType": "FunctionDefinition",
            "src": "7381:1570:64",
            "nodes": [],
            "body": {
              "id": 8901,
              "nodeType": "Block",
              "src": "7602:1349:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    8846
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8846,
                      "mutability": "mutable",
                      "name": "presentValueParams",
                      "nameLocation": "7657:18:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 8901,
                      "src": "7612:63:64",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                        "typeString": "struct LPMath.PresentValueParams"
                      },
                      "typeName": {
                        "id": 8845,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 8844,
                          "name": "LPMath.PresentValueParams",
                          "nameLocations": [
                            "7612:6:64",
                            "7619:18:64"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 15197,
                          "src": "7612:25:64"
                        },
                        "referencedDeclaration": 15197,
                        "src": "7612:25:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$15197_storage_ptr",
                          "typeString": "struct LPMath.PresentValueParams"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8850,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 8848,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8836,
                        "src": "7718:16:64",
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
                      "id": 8847,
                      "name": "_getPresentValueParams",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8940,
                      "src": "7678:22:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15197_memory_ptr_$",
                        "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                      }
                    },
                    "id": 8849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7678:70:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                      "typeString": "struct LPMath.PresentValueParams memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7612:136:64"
                },
                {
                  "assignments": [
                    8852
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8852,
                      "mutability": "mutable",
                      "name": "startingPresentValue",
                      "nameLocation": "7766:20:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 8901,
                      "src": "7758:28:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8851,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7758:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8857,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 8855,
                        "name": "presentValueParams",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8846,
                        "src": "7831:18:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                          "typeString": "struct LPMath.PresentValueParams memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                          "typeString": "struct LPMath.PresentValueParams memory"
                        }
                      ],
                      "expression": {
                        "id": 8853,
                        "name": "LPMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17602,
                        "src": "7789:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LPMath_$17602_$",
                          "typeString": "type(library LPMath)"
                        }
                      },
                      "id": 8854,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7796:21:64",
                      "memberName": "calculatePresentValue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 15226,
                      "src": "7789:28:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15197_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                      }
                    },
                    "id": 8856,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7789:70:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7758:101:64"
                },
                {
                  "assignments": [
                    8859
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8859,
                      "mutability": "mutable",
                      "name": "netCurveTrade",
                      "nameLocation": "8013:13:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 8901,
                      "src": "8006:20:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 8858,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8006:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8879,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 8878,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 8865,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8846,
                                "src": "8108:18:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 8866,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8127:24:64",
                              "memberName": "longAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 15192,
                              "src": "8108:43:64",
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
                              "expression": {
                                "id": 8862,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8846,
                                "src": "8049:18:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 8863,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8068:16:64",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 15190,
                              "src": "8049:35:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 8864,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8085:5:64",
                            "memberName": "mulUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13622,
                            "src": "8049:41:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 8867,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8049:116:64",
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
                        "id": 8861,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8029:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 8860,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8029:6:64",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 8868,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8029:146:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 8874,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8846,
                                "src": "8280:18:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 8875,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8299:25:64",
                              "memberName": "shortAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 15196,
                              "src": "8280:44:64",
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
                              "expression": {
                                "id": 8871,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8846,
                                "src": "8214:18:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 8872,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8233:17:64",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 15194,
                              "src": "8214:36:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 8873,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "8251:7:64",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "8214:44:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 8876,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8214:128:64",
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
                        "id": 8870,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8190:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 8869,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8190:6:64",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 8877,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8190:166:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "8029:327:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8006:350:64"
                },
                {
                  "expression": {
                    "id": 8899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8880,
                      "name": "params",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8840,
                      "src": "8366:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr",
                        "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 8883,
                          "name": "presentValueParams",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8846,
                          "src": "8443:18:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                            "typeString": "struct LPMath.PresentValueParams memory"
                          }
                        },
                        {
                          "id": 8884,
                          "name": "startingPresentValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8852,
                          "src": "8497:20:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "baseExpression": {
                            "id": 8885,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13078,
                            "src": "8552:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 8888,
                          "indexExpression": {
                            "expression": {
                              "id": 8886,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13503,
                              "src": "8565:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 8887,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "8573:12:64",
                            "memberName": "_LP_ASSET_ID",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13195,
                            "src": "8565:20:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "8552:34:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 8889,
                          "name": "_withdrawalSharesTotalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8834,
                          "src": "8629:28:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 8890,
                          "name": "_idle",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "8677:5:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 8891,
                          "name": "netCurveTrade",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8859,
                          "src": "8711:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "expression": {
                            "id": 8892,
                            "name": "presentValueParams",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8846,
                            "src": "8761:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                              "typeString": "struct LPMath.PresentValueParams memory"
                            }
                          },
                          "id": 8893,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8780:13:64",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 15176,
                          "src": "8761:32:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 8894,
                            "name": "presentValueParams",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8846,
                            "src": "8832:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                              "typeString": "struct LPMath.PresentValueParams memory"
                            }
                          },
                          "id": 8895,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8851:15:64",
                          "memberName": "shareAdjustment",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 15178,
                          "src": "8832:34:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "expression": {
                            "id": 8896,
                            "name": "presentValueParams",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8846,
                            "src": "8902:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                              "typeString": "struct LPMath.PresentValueParams memory"
                            }
                          },
                          "id": 8897,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "8921:12:64",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 15180,
                          "src": "8902:31:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                            "typeString": "struct LPMath.PresentValueParams memory"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 8881,
                          "name": "LPMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17602,
                          "src": "8375:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LPMath_$17602_$",
                            "typeString": "type(library LPMath)"
                          }
                        },
                        "id": 8882,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8382:26:64",
                        "memberName": "DistributeExcessIdleParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 15600,
                        "src": "8375:33:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_DistributeExcessIdleParams_$15600_storage_ptr_$",
                          "typeString": "type(struct LPMath.DistributeExcessIdleParams storage pointer)"
                        }
                      },
                      "id": 8898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "8423:18:64",
                        "8475:20:64",
                        "8531:19:64",
                        "8600:27:64",
                        "8671:4:64",
                        "8696:13:64",
                        "8738:21:64",
                        "8807:23:64",
                        "8880:20:64"
                      ],
                      "names": [
                        "presentValueParams",
                        "startingPresentValue",
                        "activeLpTotalSupply",
                        "withdrawalSharesTotalSupply",
                        "idle",
                        "netCurveTrade",
                        "originalShareReserves",
                        "originalShareAdjustment",
                        "originalBondReserves"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "8375:569:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr",
                        "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                      }
                    },
                    "src": "8366:578:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr",
                      "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                    }
                  },
                  "id": 8900,
                  "nodeType": "ExpressionStatement",
                  "src": "8366:578:64"
                }
              ]
            },
            "documentation": {
              "id": 8830,
              "nodeType": "StructuredDocumentation",
              "src": "7176:200:64",
              "text": "@dev Gets the distribute excess idle parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The distribute excess idle parameters."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getDistributeExcessIdleParams",
            "nameLocation": "7390:30:64",
            "parameters": {
              "id": 8837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8832,
                  "mutability": "mutable",
                  "name": "_idle",
                  "nameLocation": "7438:5:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8902,
                  "src": "7430:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8831,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7430:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8834,
                  "mutability": "mutable",
                  "name": "_withdrawalSharesTotalSupply",
                  "nameLocation": "7461:28:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8902,
                  "src": "7453:36:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7453:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8836,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "7507:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8902,
                  "src": "7499:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7499:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7420:109:64"
            },
            "returnParameters": {
              "id": 8841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8840,
                  "mutability": "mutable",
                  "name": "params",
                  "nameLocation": "7594:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8902,
                  "src": "7553:47:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$15600_memory_ptr",
                    "typeString": "struct LPMath.DistributeExcessIdleParams"
                  },
                  "typeName": {
                    "id": 8839,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8838,
                      "name": "LPMath.DistributeExcessIdleParams",
                      "nameLocations": [
                        "7553:6:64",
                        "7560:26:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 15600,
                      "src": "7553:33:64"
                    },
                    "referencedDeclaration": 15600,
                    "src": "7553:33:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$15600_storage_ptr",
                      "typeString": "struct LPMath.DistributeExcessIdleParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7552:49:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8940,
            "nodeType": "FunctionDefinition",
            "src": "9144:970:64",
            "nodes": [],
            "body": {
              "id": 8939,
              "nodeType": "Block",
              "src": "9280:834:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 8937,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8911,
                      "name": "params",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8909,
                      "src": "9290:6:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                        "typeString": "struct LPMath.PresentValueParams memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 8914,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "9354:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 8915,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9367:13:64",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7082,
                          "src": "9354:26:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "expression": {
                            "id": 8916,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "9411:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 8917,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9424:15:64",
                          "memberName": "shareAdjustment",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7094,
                          "src": "9411:28:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        {
                          "expression": {
                            "id": 8918,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "9467:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 8919,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9480:12:64",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7085,
                          "src": "9467:25:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "id": 8920,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8905,
                          "src": "9523:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 8921,
                          "name": "_initialVaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13026,
                          "src": "9577:23:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 8922,
                          "name": "_minimumShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13029,
                          "src": "9636:21:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 8923,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13011,
                          "src": "9684:12:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 8924,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "9728:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 8925,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9741:16:64",
                          "memberName": "longsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7091,
                          "src": "9728:29:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 8927,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13036,
                                "src": "9844:12:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 8928,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9857:23:64",
                              "memberName": "longAverageMaturityTime",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7100,
                              "src": "9844:36:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            ],
                            "id": 8926,
                            "name": "_calculateTimeRemainingScaled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8761,
                            "src": "9797:29:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 8929,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9797:97:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 8930,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "9927:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 8931,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9940:17:64",
                          "memberName": "shortsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7097,
                          "src": "9927:30:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 8933,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13036,
                                "src": "10045:12:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 8934,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10058:24:64",
                              "memberName": "shortAverageMaturityTime",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7103,
                              "src": "10045:37:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            ],
                            "id": 8932,
                            "name": "_calculateTimeRemainingScaled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8761,
                            "src": "9998:29:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 8935,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9998:98:64",
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
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 8912,
                          "name": "LPMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17602,
                          "src": "9299:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LPMath_$17602_$",
                            "typeString": "type(library LPMath)"
                          }
                        },
                        "id": 8913,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9306:18:64",
                        "memberName": "PresentValueParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 15197,
                        "src": "9299:25:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_PresentValueParams_$15197_storage_ptr_$",
                          "typeString": "type(struct LPMath.PresentValueParams storage pointer)"
                        }
                      },
                      "id": 8936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "9339:13:64",
                        "9394:15:64",
                        "9453:12:64",
                        "9506:15:64",
                        "9553:22:64",
                        "9614:20:64",
                        "9671:11:64",
                        "9710:16:64",
                        "9771:24:64",
                        "9908:17:64",
                        "9971:25:64"
                      ],
                      "names": [
                        "shareReserves",
                        "shareAdjustment",
                        "bondReserves",
                        "vaultSharePrice",
                        "initialVaultSharePrice",
                        "minimumShareReserves",
                        "timeStretch",
                        "longsOutstanding",
                        "longAverageTimeRemaining",
                        "shortsOutstanding",
                        "shortAverageTimeRemaining"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "9299:808:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                        "typeString": "struct LPMath.PresentValueParams memory"
                      }
                    },
                    "src": "9290:817:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                      "typeString": "struct LPMath.PresentValueParams memory"
                    }
                  },
                  "id": 8938,
                  "nodeType": "ExpressionStatement",
                  "src": "9290:817:64"
                }
              ]
            },
            "documentation": {
              "id": 8903,
              "nodeType": "StructuredDocumentation",
              "src": "8957:182:64",
              "text": "@dev Gets the present value parameters from the current state.\n @param _vaultSharePrice The current vault share price.\n @return params The present value parameters."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getPresentValueParams",
            "nameLocation": "9153:22:64",
            "parameters": {
              "id": 8906,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8905,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "9193:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8940,
                  "src": "9185:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8904,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9185:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9175:40:64"
            },
            "returnParameters": {
              "id": 8910,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8909,
                  "mutability": "mutable",
                  "name": "params",
                  "nameLocation": "9272:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8940,
                  "src": "9239:39:64",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                    "typeString": "struct LPMath.PresentValueParams"
                  },
                  "typeName": {
                    "id": 8908,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8907,
                      "name": "LPMath.PresentValueParams",
                      "nameLocations": [
                        "9239:6:64",
                        "9246:18:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 15197,
                      "src": "9239:25:64"
                    },
                    "referencedDeclaration": 15197,
                    "src": "9239:25:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$15197_storage_ptr",
                      "typeString": "struct LPMath.PresentValueParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9238:41:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8973,
            "nodeType": "FunctionDefinition",
            "src": "10589:683:64",
            "nodes": [],
            "body": {
              "id": 8972,
              "nodeType": "Block",
              "src": "10751:521:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    8953
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8953,
                      "mutability": "mutable",
                      "name": "endingSpotPrice",
                      "nameLocation": "10978:15:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 8972,
                      "src": "10970:23:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 8952,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "10970:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8967,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 8959,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 8956,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8794,
                            "src": "11043:23:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 8957,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11043:25:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 8958,
                          "name": "_shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8943,
                          "src": "11071:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "11043:44:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 8963,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 8960,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "11101:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 8961,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11114:12:64",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7085,
                          "src": "11101:25:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 8962,
                          "name": "_bondCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8945,
                          "src": "11129:15:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "11101:43:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 8964,
                        "name": "_initialVaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13026,
                        "src": "11158:23:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 8965,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13011,
                        "src": "11195:12:64",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 8954,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 15024,
                        "src": "10996:14:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$15024_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 8955,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11011:18:64",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14433,
                      "src": "10996:33:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 8966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "10996:221:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "10970:247:64"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 8968,
                      "name": "endingSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8953,
                      "src": "11234:15:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 8969,
                      "name": "_maxSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8947,
                      "src": "11252:13:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11234:31:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8951,
                  "id": 8971,
                  "nodeType": "Return",
                  "src": "11227:38:64"
                }
              ]
            },
            "documentation": {
              "id": 8941,
              "nodeType": "StructuredDocumentation",
              "src": "10120:464:64",
              "text": "@dev Checks if any of the bonds the trader purchased on the curve\n      were purchased above price of 1 base per bonds.\n @param _shareCurveDelta The amount of shares the trader pays the curve.\n @param _bondCurveDelta The amount of bonds the trader receives from the\n        curve.\n @param _maxSpotPrice The maximum allowable spot price for the trade.\n @return A flag indicating whether the trade was negative interest."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isNegativeInterest",
            "nameLocation": "10598:19:64",
            "parameters": {
              "id": 8948,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8943,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "10635:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8973,
                  "src": "10627:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8942,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10627:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8945,
                  "mutability": "mutable",
                  "name": "_bondCurveDelta",
                  "nameLocation": "10669:15:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8973,
                  "src": "10661:23:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10661:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8947,
                  "mutability": "mutable",
                  "name": "_maxSpotPrice",
                  "nameLocation": "10702:13:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 8973,
                  "src": "10694:21:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8946,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10694:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10617:104:64"
            },
            "returnParameters": {
              "id": 8951,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8950,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8973,
                  "src": "10745:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8949,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10745:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10744:6:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9009,
            "nodeType": "FunctionDefinition",
            "src": "11604:432:64",
            "nodes": [],
            "body": {
              "id": 9008,
              "nodeType": "Block",
              "src": "11679:357:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9006,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 8998,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "components": [
                              {
                                "arguments": [
                                  {
                                    "id": 8989,
                                    "name": "_vaultSharePrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 8976,
                                    "src": "11874:16:64",
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
                                        "expression": {
                                          "id": 8985,
                                          "name": "_marketState",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 13036,
                                          "src": "11840:12:64",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                          }
                                        },
                                        "id": 8986,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "11853:13:64",
                                        "memberName": "shareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7082,
                                        "src": "11840:26:64",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      ],
                                      "id": 8984,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "11832:7:64",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 8983,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "11832:7:64",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 8987,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "11832:35:64",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 8988,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "11868:5:64",
                                  "memberName": "mulUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13622,
                                  "src": "11832:41:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 8990,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "11832:59:64",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 8991,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11831:61:64",
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
                          "id": 8982,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11807:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 8981,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11807:6:64",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 8992,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11807:99:64",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "arguments": [
                          {
                            "expression": {
                              "id": 8995,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13036,
                              "src": "11932:12:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 8996,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "11945:12:64",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7088,
                            "src": "11932:25:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          ],
                          "id": 8994,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "11925:6:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int128_$",
                            "typeString": "type(int128)"
                          },
                          "typeName": {
                            "id": 8993,
                            "name": "int128",
                            "nodeType": "ElementaryTypeName",
                            "src": "11925:6:64",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 8997,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11925:33:64",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "src": "11807:151:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 9003,
                              "name": "_vaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8976,
                              "src": "12011:16:64",
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
                              "id": 9001,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13029,
                              "src": "11981:21:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9002,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "12003:7:64",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "11981:29:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9004,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11981:47:64",
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
                        "id": 9000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "11974:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 8999,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "11974:6:64",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11974:55:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "11807:222:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 8980,
                  "id": 9007,
                  "nodeType": "Return",
                  "src": "11788:241:64"
                }
              ]
            },
            "documentation": {
              "id": 8974,
              "nodeType": "StructuredDocumentation",
              "src": "11278:321:64",
              "text": "@dev Check solvency by verifying that the share reserves are greater\n      than the exposure plus the minimum share reserves.\n @param _vaultSharePrice The current vault share price.\n @return True if the share reserves are greater than the exposure plus\n         the minimum share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isSolvent",
            "nameLocation": "11613:10:64",
            "parameters": {
              "id": 8977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8976,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "11632:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9009,
                  "src": "11624:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8975,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11624:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11623:26:64"
            },
            "returnParameters": {
              "id": 8980,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8979,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9009,
                  "src": "11673:4:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8978,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11673:4:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11672:6:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9068,
            "nodeType": "FunctionDefinition",
            "src": "12207:580:64",
            "nodes": [],
            "body": {
              "id": 9067,
              "nodeType": "Block",
              "src": "12276:511:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9018
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9018,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "12518:5:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9067,
                      "src": "12511:12:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      },
                      "typeName": {
                        "id": 9017,
                        "name": "int128",
                        "nodeType": "ElementaryTypeName",
                        "src": "12511:6:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9037,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 9033,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30",
                                      "id": 9023,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "12545:1:64",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "expression": {
                                      "id": 9021,
                                      "name": "_after",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9014,
                                      "src": "12534:6:64",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "id": 9022,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "12541:3:64",
                                    "memberName": "max",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 14293,
                                    "src": "12534:10:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                      "typeString": "function (int256,int256) pure returns (int256)"
                                    }
                                  },
                                  "id": 9024,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "12534:13:64",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 9020,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "12527:6:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 9019,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "12527:6:64",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9025,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12527:21:64",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30",
                                      "id": 9030,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "12570:1:64",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      },
                                      "value": "0"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_rational_0_by_1",
                                        "typeString": "int_const 0"
                                      }
                                    ],
                                    "expression": {
                                      "id": 9028,
                                      "name": "_before",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9012,
                                      "src": "12558:7:64",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "id": 9029,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "12566:3:64",
                                    "memberName": "max",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 14293,
                                    "src": "12558:11:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                      "typeString": "function (int256,int256) pure returns (int256)"
                                    }
                                  },
                                  "id": 9031,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "12558:14:64",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                ],
                                "id": 9027,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "12551:6:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 9026,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "12551:6:64",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9032,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12551:22:64",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "12527:46:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 9034,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "12526:48:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 9035,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12588:8:64",
                      "memberName": "toInt128",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17707,
                      "src": "12526:70:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                        "typeString": "function (int256) pure returns (int128)"
                      }
                    },
                    "id": 9036,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12526:72:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12511:87:64"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    },
                    "id": 9040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9038,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9018,
                      "src": "12612:5:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9039,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "12620:1:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "12612:9:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      },
                      "id": 9053,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9051,
                        "name": "delta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9018,
                        "src": "12701:5:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 9052,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "12709:1:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "12701:9:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9065,
                    "nodeType": "IfStatement",
                    "src": "12697:84:64",
                    "trueBody": {
                      "id": 9064,
                      "nodeType": "Block",
                      "src": "12712:69:64",
                      "statements": [
                        {
                          "expression": {
                            "id": 9062,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "expression": {
                                "id": 9054,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13036,
                                "src": "12726:12:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 9056,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "memberLocation": "12739:12:64",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7088,
                              "src": "12726:25:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "-=",
                            "rightHandSide": {
                              "arguments": [
                                {
                                  "id": 9060,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "12763:6:64",
                                  "subExpression": {
                                    "id": 9059,
                                    "name": "delta",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9018,
                                    "src": "12764:5:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int128",
                                      "typeString": "int128"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_int128",
                                    "typeString": "int128"
                                  }
                                ],
                                "id": 9058,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "12755:7:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint128_$",
                                  "typeString": "type(uint128)"
                                },
                                "typeName": {
                                  "id": 9057,
                                  "name": "uint128",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "12755:7:64",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9061,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "12755:15:64",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            "src": "12726:44:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "id": 9063,
                          "nodeType": "ExpressionStatement",
                          "src": "12726:44:64"
                        }
                      ]
                    }
                  },
                  "id": 9066,
                  "nodeType": "IfStatement",
                  "src": "12608:173:64",
                  "trueBody": {
                    "id": 9050,
                    "nodeType": "Block",
                    "src": "12623:68:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9048,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 9041,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13036,
                              "src": "12637:12:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 9043,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "12650:12:64",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7088,
                            "src": "12637:25:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 9046,
                                "name": "delta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9018,
                                "src": "12674:5:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_int128",
                                  "typeString": "int128"
                                }
                              ],
                              "id": 9045,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "12666:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint128_$",
                                "typeString": "type(uint128)"
                              },
                              "typeName": {
                                "id": 9044,
                                "name": "uint128",
                                "nodeType": "ElementaryTypeName",
                                "src": "12666:7:64",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 9047,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "12666:14:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "12637:43:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 9049,
                        "nodeType": "ExpressionStatement",
                        "src": "12637:43:64"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9010,
              "nodeType": "StructuredDocumentation",
              "src": "12042:160:64",
              "text": "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateLongExposure",
            "nameLocation": "12216:19:64",
            "parameters": {
              "id": 9015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9012,
                  "mutability": "mutable",
                  "name": "_before",
                  "nameLocation": "12243:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9068,
                  "src": "12236:14:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9011,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12236:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9014,
                  "mutability": "mutable",
                  "name": "_after",
                  "nameLocation": "12259:6:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9068,
                  "src": "12252:13:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9013,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12252:6:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12235:31:64"
            },
            "returnParameters": {
              "id": 9016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12276:0:64"
            },
            "scope": 9507,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9158,
            "nodeType": "FunctionDefinition",
            "src": "13209:1568:64",
            "nodes": [],
            "body": {
              "id": 9157,
              "nodeType": "Block",
              "src": "13335:1442:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9079,
                    9081
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9079,
                      "mutability": "mutable",
                      "name": "zombieBaseProceeds",
                      "nameLocation": "13461:18:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9157,
                      "src": "13453:26:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9078,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13453:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    },
                    {
                      "constant": false,
                      "id": 9081,
                      "mutability": "mutable",
                      "name": "zombieBaseReserves",
                      "nameLocation": "13501:18:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9157,
                      "src": "13493:26:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9080,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13493:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9085,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 9083,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9073,
                        "src": "13555:16:64",
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
                      "id": 9082,
                      "name": "_collectZombieInterest",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9249,
                      "src": "13532:22:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        "typeString": "function (uint256) returns (uint256,uint256)"
                      }
                    },
                    "id": 9084,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13532:40:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256)"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13439:133:64"
                },
                {
                  "assignments": [
                    9087
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9087,
                      "mutability": "mutable",
                      "name": "baseProceeds",
                      "nameLocation": "13849:12:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9157,
                      "src": "13841:20:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9086,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "13841:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9092,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 9090,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9073,
                        "src": "13887:16:64",
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
                        "id": 9088,
                        "name": "_shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9071,
                        "src": "13864:14:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9089,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13879:7:64",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13572,
                      "src": "13864:22:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13864:40:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13841:63:64"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9095,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9093,
                      "name": "zombieBaseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9079,
                      "src": "13918:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 9094,
                      "name": "zombieBaseReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9081,
                      "src": "13939:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "13918:39:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9105,
                  "nodeType": "IfStatement",
                  "src": "13914:198:64",
                  "trueBody": {
                    "id": 9104,
                    "nodeType": "Block",
                    "src": "13959:153:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9102,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9096,
                            "name": "_shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9071,
                            "src": "13973:14:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 9099,
                                "name": "zombieBaseReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9081,
                                "src": "14033:18:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9100,
                                "name": "zombieBaseProceeds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9079,
                                "src": "14069:18:64",
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
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9097,
                                "name": "_shareProceeds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9071,
                                "src": "13990:14:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9098,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14005:10:64",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13554,
                              "src": "13990:25:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9101,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13990:111:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13973:128:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9103,
                        "nodeType": "ExpressionStatement",
                        "src": "13973:128:64"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9108,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9106,
                      "name": "baseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9087,
                      "src": "14203:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 9107,
                      "name": "zombieBaseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9079,
                      "src": "14218:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14203:33:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9118,
                    "nodeType": "Block",
                    "src": "14303:47:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9114,
                            "name": "zombieBaseProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9079,
                            "src": "14317:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 9115,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14338:1:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "14317:22:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9117,
                        "nodeType": "ExpressionStatement",
                        "src": "14317:22:64"
                      }
                    ]
                  },
                  "id": 9119,
                  "nodeType": "IfStatement",
                  "src": "14199:151:64",
                  "trueBody": {
                    "id": 9113,
                    "nodeType": "Block",
                    "src": "14238:59:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9111,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9109,
                            "name": "zombieBaseProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9079,
                            "src": "14252:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 9110,
                            "name": "baseProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9087,
                            "src": "14274:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14252:34:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9112,
                        "nodeType": "ExpressionStatement",
                        "src": "14252:34:64"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9126,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 9120,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "14359:12:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 9122,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "14372:18:64",
                      "memberName": "zombieBaseProceeds",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7112,
                      "src": "14359:31:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint112",
                        "typeString": "uint112"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 9123,
                          "name": "zombieBaseProceeds",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9079,
                          "src": "14393:18:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9124,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14412:9:64",
                        "memberName": "toUint112",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17637,
                        "src": "14393:28:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint112_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint112)"
                        }
                      },
                      "id": 9125,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14393:30:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint112",
                        "typeString": "uint112"
                      }
                    },
                    "src": "14359:64:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint112",
                      "typeString": "uint112"
                    }
                  },
                  "id": 9127,
                  "nodeType": "ExpressionStatement",
                  "src": "14359:64:64"
                },
                {
                  "assignments": [
                    9129
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9129,
                      "mutability": "mutable",
                      "name": "zombieShareReserves",
                      "nameLocation": "14441:19:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9157,
                      "src": "14433:27:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9128,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "14433:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9132,
                  "initialValue": {
                    "expression": {
                      "id": 9130,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13036,
                      "src": "14463:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "id": 9131,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "14476:19:64",
                    "memberName": "zombieShareReserves",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7115,
                    "src": "14463:32:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14433:62:64"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9135,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9133,
                      "name": "_shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9071,
                      "src": "14509:14:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 9134,
                      "name": "zombieShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9129,
                      "src": "14526:19:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14509:36:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9145,
                    "nodeType": "Block",
                    "src": "14615:48:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9141,
                            "name": "zombieShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9129,
                            "src": "14629:19:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 9142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14651:1:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "14629:23:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9144,
                        "nodeType": "ExpressionStatement",
                        "src": "14629:23:64"
                      }
                    ]
                  },
                  "id": 9146,
                  "nodeType": "IfStatement",
                  "src": "14505:158:64",
                  "trueBody": {
                    "id": 9140,
                    "nodeType": "Block",
                    "src": "14547:62:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9136,
                            "name": "zombieShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9129,
                            "src": "14561:19:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 9137,
                            "name": "_shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9071,
                            "src": "14584:14:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14561:37:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9139,
                        "nodeType": "ExpressionStatement",
                        "src": "14561:37:64"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 9147,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "14672:12:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 9149,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "14685:19:64",
                      "memberName": "zombieShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7115,
                      "src": "14672:32:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 9150,
                          "name": "zombieShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9129,
                          "src": "14707:19:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9151,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14727:9:64",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 17667,
                        "src": "14707:29:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 9152,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14707:31:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "14672:66:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 9154,
                  "nodeType": "ExpressionStatement",
                  "src": "14672:66:64"
                },
                {
                  "expression": {
                    "id": 9155,
                    "name": "_shareProceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9071,
                    "src": "14756:14:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9077,
                  "id": 9156,
                  "nodeType": "Return",
                  "src": "14749:21:64"
                }
              ]
            },
            "documentation": {
              "id": 9069,
              "nodeType": "StructuredDocumentation",
              "src": "12793:411:64",
              "text": "@dev Apply the updates to the market state as a result of closing a\n      position after maturity. This function also adjusts the proceeds\n      to account for any negative interest that has accrued in the\n      zombie reserves.\n @param _shareProceeds The share proceeds.\n @param _vaultSharePrice The current vault share price.\n @return The adjusted share proceeds."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_applyZombieClose",
            "nameLocation": "13218:17:64",
            "parameters": {
              "id": 9074,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9071,
                  "mutability": "mutable",
                  "name": "_shareProceeds",
                  "nameLocation": "13253:14:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9158,
                  "src": "13245:22:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9070,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13245:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9073,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "13285:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9158,
                  "src": "13277:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9072,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13277:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13235:72:64"
            },
            "returnParameters": {
              "id": 9077,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9076,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9158,
                  "src": "13326:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9075,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13326:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13325:9:64"
            },
            "scope": 9507,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9249,
            "nodeType": "FunctionDefinition",
            "src": "15196:2551:64",
            "nodes": [],
            "body": {
              "id": 9248,
              "nodeType": "Block",
              "src": "15362:2385:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9168,
                      "name": "zombieBaseReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9166,
                      "src": "15496:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9171,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13036,
                            "src": "15555:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 9172,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "15568:19:64",
                          "memberName": "zombieShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 7115,
                          "src": "15555:32:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        ],
                        "expression": {
                          "id": 9169,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9161,
                          "src": "15517:16:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9170,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "15534:7:64",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "15517:24:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "15517:80:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15496:101:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9175,
                  "nodeType": "ExpressionStatement",
                  "src": "15496:101:64"
                },
                {
                  "expression": {
                    "id": 9179,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9176,
                      "name": "zombieBaseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9164,
                      "src": "15607:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9177,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "15628:12:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 9178,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "15641:18:64",
                      "memberName": "zombieBaseProceeds",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7112,
                      "src": "15628:31:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint112",
                        "typeString": "uint112"
                      }
                    },
                    "src": "15607:52:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9180,
                  "nodeType": "ExpressionStatement",
                  "src": "15607:52:64"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9181,
                      "name": "zombieBaseReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9166,
                      "src": "15802:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 9182,
                      "name": "zombieBaseProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9164,
                      "src": "15823:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15802:39:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9247,
                  "nodeType": "IfStatement",
                  "src": "15798:1943:64",
                  "trueBody": {
                    "id": 9246,
                    "nodeType": "Block",
                    "src": "15843:1898:64",
                    "statements": [
                      {
                        "assignments": [
                          9185
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9185,
                            "mutability": "mutable",
                            "name": "zombieInterest",
                            "nameLocation": "16015:14:64",
                            "nodeType": "VariableDeclaration",
                            "scope": 9246,
                            "src": "16007:22:64",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9184,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "16007:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 9189,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9188,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9186,
                            "name": "zombieBaseReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9166,
                            "src": "16032:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 9187,
                            "name": "zombieBaseProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9164,
                            "src": "16053:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "16032:39:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "16007:64:64"
                      },
                      {
                        "expression": {
                          "id": 9199,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 9190,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13036,
                              "src": "16308:12:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 9192,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "16321:19:64",
                            "memberName": "zombieShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7115,
                            "src": "16308:32:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "arguments": [
                                  {
                                    "id": 9195,
                                    "name": "_vaultSharePrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9161,
                                    "src": "16382:16:64",
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
                                    "id": 9193,
                                    "name": "zombieInterest",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9185,
                                    "src": "16344:14:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 9194,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "16376:5:64",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "16344:37:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 9196,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "16344:55:64",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9197,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "16417:9:64",
                              "memberName": "toUint128",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 17667,
                              "src": "16344:82:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint128)"
                              }
                            },
                            "id": 9198,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "16344:84:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "16308:120:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 9200,
                        "nodeType": "ExpressionStatement",
                        "src": "16308:120:64"
                      },
                      {
                        "assignments": [
                          9202
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9202,
                            "mutability": "mutable",
                            "name": "zombieInterestShares",
                            "nameLocation": "16736:20:64",
                            "nodeType": "VariableDeclaration",
                            "scope": 9246,
                            "src": "16728:28:64",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9201,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "16728:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 9207,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 9205,
                              "name": "_vaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9161,
                              "src": "16799:16:64",
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
                              "id": 9203,
                              "name": "zombieInterest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9185,
                              "src": "16759:14:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9204,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16774:7:64",
                            "memberName": "divDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13590,
                            "src": "16759:22:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9206,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16759:70:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "16728:101:64"
                      },
                      {
                        "assignments": [
                          9209
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9209,
                            "mutability": "mutable",
                            "name": "governanceZombieFeeCollected",
                            "nameLocation": "16851:28:64",
                            "nodeType": "VariableDeclaration",
                            "scope": 9246,
                            "src": "16843:36:64",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9208,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "16843:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 9214,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 9212,
                              "name": "_governanceZombieFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13023,
                              "src": "16928:20:64",
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
                              "id": 9210,
                              "name": "zombieInterestShares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9202,
                              "src": "16882:20:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9211,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16903:7:64",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "16882:28:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16882:80:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "16843:119:64"
                      },
                      {
                        "expression": {
                          "id": 9217,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9215,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13055,
                            "src": "16976:22:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 9216,
                            "name": "governanceZombieFeeCollected",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9209,
                            "src": "17002:28:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "16976:54:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9218,
                        "nodeType": "ExpressionStatement",
                        "src": "16976:54:64"
                      },
                      {
                        "expression": {
                          "id": 9221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9219,
                            "name": "zombieInterestShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9202,
                            "src": "17307:20:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 9220,
                            "name": "governanceZombieFeeCollected",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9209,
                            "src": "17331:28:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "17307:52:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9222,
                        "nodeType": "ExpressionStatement",
                        "src": "17307:52:64"
                      },
                      {
                        "expression": {
                          "id": 9229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 9223,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13036,
                              "src": "17373:12:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 9225,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "17386:13:64",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7082,
                            "src": "17373:26:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 9226,
                                "name": "zombieInterestShares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9202,
                                "src": "17403:20:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9227,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "17424:9:64",
                              "memberName": "toUint128",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 17667,
                              "src": "17403:30:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint128)"
                              }
                            },
                            "id": 9228,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "17403:32:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "17373:62:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 9230,
                        "nodeType": "ExpressionStatement",
                        "src": "17373:62:64"
                      },
                      {
                        "expression": {
                          "id": 9240,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 9231,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13036,
                              "src": "17449:12:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 9233,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "17462:15:64",
                            "memberName": "shareAdjustment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7094,
                            "src": "17449:28:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 9236,
                                    "name": "zombieInterestShares",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9202,
                                    "src": "17505:20:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 9237,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "17526:9:64",
                                  "memberName": "toUint128",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 17667,
                                  "src": "17505:30:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256) pure returns (uint128)"
                                  }
                                },
                                "id": 9238,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "17505:32:64",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              ],
                              "id": 9235,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "17481:6:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int128_$",
                                "typeString": "type(int128)"
                              },
                              "typeName": {
                                "id": 9234,
                                "name": "int128",
                                "nodeType": "ElementaryTypeName",
                                "src": "17481:6:64",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 9239,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "17481:70:64",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "src": "17449:102:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "id": 9241,
                        "nodeType": "ExpressionStatement",
                        "src": "17449:102:64"
                      },
                      {
                        "expression": {
                          "id": 9244,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9242,
                            "name": "zombieBaseReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9166,
                            "src": "17691:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 9243,
                            "name": "zombieBaseProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9164,
                            "src": "17712:18:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "17691:39:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9245,
                        "nodeType": "ExpressionStatement",
                        "src": "17691:39:64"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9159,
              "nodeType": "StructuredDocumentation",
              "src": "14783:408:64",
              "text": "@dev Collect the interest earned on unredeemed matured positions. This\n      interest is split between the LPs and governance.\n @param _vaultSharePrice The current vault share price.\n @return zombieBaseProceeds The base proceeds reserved for zombie\n         positions.\n @return zombieBaseReserves The updated base reserves reserved for zombie\n         positions."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_collectZombieInterest",
            "nameLocation": "15205:22:64",
            "parameters": {
              "id": 9162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9161,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "15245:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9249,
                  "src": "15237:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9160,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15237:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15227:40:64"
            },
            "returnParameters": {
              "id": 9167,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9164,
                  "mutability": "mutable",
                  "name": "zombieBaseProceeds",
                  "nameLocation": "15310:18:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9249,
                  "src": "15302:26:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15302:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9166,
                  "mutability": "mutable",
                  "name": "zombieBaseReserves",
                  "nameLocation": "15338:18:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9249,
                  "src": "15330:26:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9165,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15330:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15301:56:64"
            },
            "scope": 9507,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9288,
            "nodeType": "FunctionDefinition",
            "src": "18027:558:64",
            "nodes": [],
            "body": {
              "id": 9287,
              "nodeType": "Block",
              "src": "18147:438:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9258
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9258,
                      "mutability": "mutable",
                      "name": "longExposure",
                      "nameLocation": "18225:12:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9287,
                      "src": "18217:20:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9257,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18217:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9267,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 9265,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9252,
                        "src": "18294:16:64",
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
                            "expression": {
                              "id": 9261,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13036,
                              "src": "18248:12:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 9262,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "18261:12:64",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7088,
                            "src": "18248:25:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          ],
                          "id": 9260,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "18240:7:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 9259,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "18240:7:64",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 9263,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "18240:34:64",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9264,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18275:5:64",
                      "memberName": "divUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13640,
                      "src": "18240:40:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9266,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "18240:80:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18217:103:64"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9268,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13036,
                        "src": "18334:12:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 9269,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18347:13:64",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7082,
                      "src": "18334:26:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9270,
                        "name": "longExposure",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9258,
                        "src": "18363:12:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 9271,
                        "name": "_minimumShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13029,
                        "src": "18378:21:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "18363:36:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18334:65:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9284,
                  "nodeType": "IfStatement",
                  "src": "18330:222:64",
                  "trueBody": {
                    "id": 9283,
                    "nodeType": "Block",
                    "src": "18401:151:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9281,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9274,
                            "name": "idleShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9255,
                            "src": "18415:10:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9280,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 9278,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 9275,
                                  "name": "_marketState",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13036,
                                  "src": "18444:12:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_MarketState_$7116_storage",
                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                  }
                                },
                                "id": 9276,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "18457:13:64",
                                "memberName": "shareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7082,
                                "src": "18444:26:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 9277,
                                "name": "longExposure",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9258,
                                "src": "18489:12:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "18444:57:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 9279,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13029,
                              "src": "18520:21:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "18444:97:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18415:126:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9282,
                        "nodeType": "ExpressionStatement",
                        "src": "18415:126:64"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9285,
                    "name": "idleShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9255,
                    "src": "18568:10:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9256,
                  "id": 9286,
                  "nodeType": "Return",
                  "src": "18561:17:64"
                }
              ]
            },
            "documentation": {
              "id": 9250,
              "nodeType": "StructuredDocumentation",
              "src": "17753:269:64",
              "text": "@dev Calculates the number of share reserves that are not reserved by\n      open positions.\n @param _vaultSharePrice The current vault share price.\n @return idleShares The amount of shares that are available for LPs to\n         withdraw."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateIdleShareReserves",
            "nameLocation": "18036:27:64",
            "parameters": {
              "id": 9253,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9252,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "18081:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9288,
                  "src": "18073:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18073:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18063:40:64"
            },
            "returnParameters": {
              "id": 9256,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9255,
                  "mutability": "mutable",
                  "name": "idleShares",
                  "nameLocation": "18135:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9288,
                  "src": "18127:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9254,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18127:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18126:20:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9343,
            "nodeType": "FunctionDefinition",
            "src": "18778:773:64",
            "nodes": [],
            "body": {
              "id": 9342,
              "nodeType": "Block",
              "src": "18895:656:64",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9297
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9297,
                      "mutability": "mutable",
                      "name": "presentValue",
                      "nameLocation": "18978:12:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9342,
                      "src": "18970:20:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9296,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18970:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9312,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9300,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9298,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9291,
                        "src": "18993:16:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 9299,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "19012:1:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "18993:20:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "30",
                      "id": 9310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "19173:1:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "id": 9311,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "18993:181:64",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 9308,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9291,
                          "src": "19141:16:64",
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
                                  "id": 9304,
                                  "name": "_vaultSharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9291,
                                  "src": "19097:16:64",
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
                                "id": 9303,
                                "name": "_getPresentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8940,
                                "src": "19074:22:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$15197_memory_ptr_$",
                                  "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                }
                              },
                              "id": 9305,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19074:40:64",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                                "typeString": "struct LPMath.PresentValueParams memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PresentValueParams_$15197_memory_ptr",
                                "typeString": "struct LPMath.PresentValueParams memory"
                              }
                            ],
                            "expression": {
                              "id": 9301,
                              "name": "LPMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17602,
                              "src": "19028:6:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_LPMath_$17602_$",
                                "typeString": "type(library LPMath)"
                              }
                            },
                            "id": 9302,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "19052:21:64",
                            "memberName": "calculatePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 15226,
                            "src": "19028:45:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$15197_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                            }
                          },
                          "id": 9306,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19028:87:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9307,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19133:7:64",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "19028:112:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9309,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19028:130:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18970:204:64"
                },
                {
                  "assignments": [
                    9314
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9314,
                      "mutability": "mutable",
                      "name": "lpTotalSupply",
                      "nameLocation": "19192:13:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9342,
                      "src": "19184:21:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9313,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "19184:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9327,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9326,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "baseExpression": {
                          "id": 9315,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13078,
                          "src": "19208:12:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 9318,
                        "indexExpression": {
                          "expression": {
                            "id": 9316,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13503,
                            "src": "19221:7:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 9317,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "19229:12:64",
                          "memberName": "_LP_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13195,
                          "src": "19221:20:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "19208:34:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 9319,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13078,
                          "src": "19257:12:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 9322,
                        "indexExpression": {
                          "expression": {
                            "id": 9320,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13503,
                            "src": "19270:7:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$13503_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 9321,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "19278:26:64",
                          "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13204,
                          "src": "19270:34:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "19257:48:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "19208:97:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 9324,
                        "name": "_withdrawPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13040,
                        "src": "19320:13:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawPool_$7127_storage",
                          "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                        }
                      },
                      "id": 9325,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "19334:15:64",
                      "memberName": "readyToWithdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7123,
                      "src": "19320:29:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "19208:141:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "19184:165:64"
                },
                {
                  "expression": {
                    "id": 9338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9328,
                      "name": "lpSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9294,
                      "src": "19359:12:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9331,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9329,
                          "name": "lpTotalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9314,
                          "src": "19374:13:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 9330,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "19391:1:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "19374:18:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "arguments": [
                          {
                            "id": 9335,
                            "name": "lpTotalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9314,
                            "src": "19501:13:64",
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
                            "id": 9333,
                            "name": "presentValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9297,
                            "src": "19480:12:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9334,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "19493:7:64",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13590,
                          "src": "19480:20:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9336,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "19480:35:64",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9337,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "19374:141:64",
                      "trueExpression": {
                        "hexValue": "30",
                        "id": 9332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "19407:1:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19359:156:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9339,
                  "nodeType": "ExpressionStatement",
                  "src": "19359:156:64"
                },
                {
                  "expression": {
                    "id": 9340,
                    "name": "lpSharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9294,
                    "src": "19532:12:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9295,
                  "id": 9341,
                  "nodeType": "Return",
                  "src": "19525:19:64"
                }
              ]
            },
            "documentation": {
              "id": 9289,
              "nodeType": "StructuredDocumentation",
              "src": "18591:182:64",
              "text": "@dev Calculates the LP share price.\n @param _vaultSharePrice The current vault share price.\n @return lpSharePrice The LP share price in units of (base / lp shares)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateLPSharePrice",
            "nameLocation": "18787:22:64",
            "parameters": {
              "id": 9292,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9291,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "18827:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9343,
                  "src": "18819:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9290,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18819:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18809:40:64"
            },
            "returnParameters": {
              "id": 9295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9294,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "18881:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9343,
                  "src": "18873:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18873:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18872:22:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9384,
            "nodeType": "FunctionDefinition",
            "src": "20071:1666:64",
            "nodes": [],
            "body": {
              "id": 9383,
              "nodeType": "Block",
              "src": "20273:1464:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9374,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9357,
                      "name": "curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9353,
                      "src": "21272:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9372,
                          "name": "_shareAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9346,
                          "src": "21407:12:64",
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
                              "id": 9369,
                              "name": "_vaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9350,
                              "src": "21368:16:64",
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
                                  "id": 9366,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13014,
                                  "src": "21336:9:64",
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
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 9363,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 9360,
                                            "name": "_spotPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9348,
                                            "src": "21296:10:64",
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
                                            "id": 9358,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 13529,
                                            "src": "21284:3:64",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 9359,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "21288:7:64",
                                          "memberName": "divDown",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 13590,
                                          "src": "21284:11:64",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 9361,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "21284:23:64",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 9362,
                                        "name": "ONE",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 13529,
                                        "src": "21310:3:64",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "21284:29:64",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 9364,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "21283:31:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 9365,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "21328:7:64",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13572,
                                "src": "21283:52:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 9367,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "21283:63:64",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9368,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "21360:7:64",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "21283:84:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9370,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21283:102:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9371,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21399:7:64",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "21283:123:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21283:137:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21272:148:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9375,
                  "nodeType": "ExpressionStatement",
                  "src": "21272:148:64"
                },
                {
                  "expression": {
                    "id": 9381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9376,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9355,
                      "src": "21675:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9379,
                          "name": "_governanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13020,
                          "src": "21713:16:64",
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
                          "id": 9377,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9353,
                          "src": "21696:8:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9378,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21705:7:64",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "21696:16:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9380,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21696:34:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21675:55:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9382,
                  "nodeType": "ExpressionStatement",
                  "src": "21675:55:64"
                }
              ]
            },
            "documentation": {
              "id": 9344,
              "nodeType": "StructuredDocumentation",
              "src": "19557:509:64",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _shareAmount The amount of shares exchanged for bonds.\n @param _spotPrice The price without slippage of bonds in terms of base\n         (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of bonds."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesGivenShares",
            "nameLocation": "20080:25:64",
            "parameters": {
              "id": 9351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9346,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "20123:12:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9384,
                  "src": "20115:20:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9345,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20115:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9348,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "20153:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9384,
                  "src": "20145:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20145:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9350,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "20181:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9384,
                  "src": "20173:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9349,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20173:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20105:98:64"
            },
            "returnParameters": {
              "id": 9356,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9353,
                  "mutability": "mutable",
                  "name": "curveFee",
                  "nameLocation": "20235:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9384,
                  "src": "20227:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9352,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20227:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9355,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "20253:18:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9384,
                  "src": "20245:26:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20245:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20226:46:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9454,
            "nodeType": "FunctionDefinition",
            "src": "22433:2743:64",
            "nodes": [],
            "body": {
              "id": 9453,
              "nodeType": "Block",
              "src": "22806:2370:64",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9404,
                      "name": "curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9396,
                      "src": "23545:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9415,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9389,
                          "src": "23663:24:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 9416,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9393,
                          "src": "23689:16:64",
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
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 9412,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9387,
                              "src": "23626:11:64",
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
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 9409,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 9407,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "23587:3:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 9408,
                                    "name": "_spotPrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9391,
                                    "src": "23593:10:64",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "23587:16:64",
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
                                  "id": 9405,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13014,
                                  "src": "23556:9:64",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 9406,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23579:7:64",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13572,
                                "src": "23556:30:64",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 9410,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "23556:48:64",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9411,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "23618:7:64",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "23556:69:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9413,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23556:82:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9414,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "23652:10:64",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "23556:106:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9417,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23556:150:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "23545:161:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9419,
                  "nodeType": "ExpressionStatement",
                  "src": "23545:161:64"
                },
                {
                  "expression": {
                    "id": 9425,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9420,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9400,
                      "src": "23973:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9423,
                          "name": "_governanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13020,
                          "src": "24011:16:64",
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
                          "id": 9421,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9396,
                          "src": "23994:8:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9422,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "24003:7:64",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "23994:16:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "23994:34:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "23973:55:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9426,
                  "nodeType": "ExpressionStatement",
                  "src": "23973:55:64"
                },
                {
                  "assignments": [
                    9428
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9428,
                      "mutability": "mutable",
                      "name": "flat",
                      "nameLocation": "24547:4:64",
                      "nodeType": "VariableDeclaration",
                      "scope": 9453,
                      "src": "24539:12:64",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9427,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "24539:7:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9436,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9433,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9431,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "24590:3:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 9432,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9389,
                          "src": "24596:24:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "24590:30:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9434,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9393,
                        "src": "24634:16:64",
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
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9429,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9387,
                        "src": "24554:11:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "24566:10:64",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13554,
                      "src": "24554:22:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "24554:106:64",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "24539:121:64"
                },
                {
                  "expression": {
                    "id": 9442,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9437,
                      "name": "flatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9398,
                      "src": "24670:7:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9440,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13017,
                          "src": "24693:8:64",
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
                          "id": 9438,
                          "name": "flat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9428,
                          "src": "24680:4:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "24685:7:64",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "24680:12:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9441,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24680:22:64",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "24670:32:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9443,
                  "nodeType": "ExpressionStatement",
                  "src": "24670:32:64"
                },
                {
                  "expression": {
                    "id": 9451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9444,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9402,
                      "src": "25070:18:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9445,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9400,
                        "src": "25103:18:64",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "arguments": [
                          {
                            "id": 9448,
                            "name": "_governanceLPFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13020,
                            "src": "25152:16:64",
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
                            "id": 9446,
                            "name": "flatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9398,
                            "src": "25136:7:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9447,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "25144:7:64",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13572,
                          "src": "25136:15:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9449,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "25136:33:64",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "25103:66:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "25070:99:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9452,
                  "nodeType": "ExpressionStatement",
                  "src": "25070:99:64"
                }
              ]
            },
            "documentation": {
              "id": 9385,
              "nodeType": "StructuredDocumentation",
              "src": "21743:685:64",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _bondAmount The amount of bonds being exchanged for shares.\n @param _normalizedTimeRemaining The normalized amount of time until\n        maturity.\n @param _spotPrice The price without slippage of bonds in terms of base\n        (base/bonds).\n @param _vaultSharePrice The current vault share price (base/shares).\n @return curveFee The curve fee. The fee is in terms of shares.\n @return flatFee The flat fee. The fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesGivenBonds",
            "nameLocation": "22442:24:64",
            "parameters": {
              "id": 9394,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9387,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "22484:11:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22476:19:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22476:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9389,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "22513:24:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22505:32:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22505:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9391,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "22555:10:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22547:18:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9390,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22547:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9393,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "22583:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22575:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22575:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22466:139:64"
            },
            "returnParameters": {
              "id": 9403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9396,
                  "mutability": "mutable",
                  "name": "curveFee",
                  "nameLocation": "22674:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22666:16:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9395,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22666:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9398,
                  "mutability": "mutable",
                  "name": "flatFee",
                  "nameLocation": "22704:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22696:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22696:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9400,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "22733:18:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22725:26:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9399,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22725:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9402,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "22773:18:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9454,
                  "src": "22765:26:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9401,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22765:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22652:149:64"
            },
            "scope": 9507,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9480,
            "nodeType": "FunctionDefinition",
            "src": "25501:391:64",
            "nodes": [],
            "body": {
              "id": 9479,
              "nodeType": "Block",
              "src": "25679:213:64",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 9467,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9462,
                      "src": "25693:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 9468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "25702:6:64",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7267,
                    "src": "25693:15:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9477,
                    "nodeType": "Block",
                    "src": "25755:131:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 9474,
                              "name": "_vaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9459,
                              "src": "25858:16:64",
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
                              "id": 9472,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9457,
                              "src": "25842:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9473,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "25850:7:64",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13572,
                            "src": "25842:15:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9475,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "25842:33:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 9466,
                        "id": 9476,
                        "nodeType": "Return",
                        "src": "25835:40:64"
                      }
                    ]
                  },
                  "id": 9478,
                  "nodeType": "IfStatement",
                  "src": "25689:197:64",
                  "trueBody": {
                    "id": 9471,
                    "nodeType": "Block",
                    "src": "25710:39:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9469,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9457,
                          "src": "25731:7:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 9466,
                        "id": 9470,
                        "nodeType": "Return",
                        "src": "25724:14:64"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9455,
              "nodeType": "StructuredDocumentation",
              "src": "25182:314:64",
              "text": "@dev Converts input to base if necessary according to what is specified\n      in options.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_convertToBaseFromOption",
            "nameLocation": "25510:24:64",
            "parameters": {
              "id": 9463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9457,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "25552:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9480,
                  "src": "25544:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9456,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25544:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9459,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "25577:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9480,
                  "src": "25569:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9458,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25569:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9462,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "25632:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9480,
                  "src": "25603:37:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 9461,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 9460,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "25603:11:64",
                        "25615:7:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "25603:19:64"
                    },
                    "referencedDeclaration": 7271,
                    "src": "25603:19:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25534:112:64"
            },
            "returnParameters": {
              "id": 9466,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9465,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9480,
                  "src": "25670:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9464,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25670:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25669:9:64"
            },
            "scope": 9507,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9506,
            "nodeType": "FunctionDefinition",
            "src": "26187:393:64",
            "nodes": [],
            "body": {
              "id": 9505,
              "nodeType": "Block",
              "src": "26365:215:64",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 9493,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9488,
                      "src": "26379:8:64",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 9494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "26388:6:64",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7267,
                    "src": "26379:15:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9503,
                    "nodeType": "Block",
                    "src": "26441:133:64",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 9500,
                              "name": "_vaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9485,
                              "src": "26546:16:64",
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
                              "id": 9498,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9483,
                              "src": "26530:7:64",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9499,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "26538:7:64",
                            "memberName": "divDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13590,
                            "src": "26530:15:64",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "26530:33:64",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 9492,
                        "id": 9502,
                        "nodeType": "Return",
                        "src": "26523:40:64"
                      }
                    ]
                  },
                  "id": 9504,
                  "nodeType": "IfStatement",
                  "src": "26375:199:64",
                  "trueBody": {
                    "id": 9497,
                    "nodeType": "Block",
                    "src": "26396:39:64",
                    "statements": [
                      {
                        "expression": {
                          "id": 9495,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9483,
                          "src": "26417:7:64",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 9492,
                        "id": 9496,
                        "nodeType": "Return",
                        "src": "26410:14:64"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9481,
              "nodeType": "StructuredDocumentation",
              "src": "25898:284:64",
              "text": "@dev Converts input to what is specified in the options from base.\n @param _amount The amount to convert.\n @param _vaultSharePrice The current vault share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_convertToOptionFromBase",
            "nameLocation": "26196:24:64",
            "parameters": {
              "id": 9489,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9483,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "26238:7:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9506,
                  "src": "26230:15:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9482,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26230:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9485,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "26263:16:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9506,
                  "src": "26255:24:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9484,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26255:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9488,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "26318:8:64",
                  "nodeType": "VariableDeclaration",
                  "scope": 9506,
                  "src": "26289:37:64",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 9487,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 9486,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "26289:11:64",
                        "26301:7:64"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "26289:19:64"
                    },
                    "referencedDeclaration": 7271,
                    "src": "26289:19:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26220:112:64"
            },
            "returnParameters": {
              "id": 9492,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9491,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9506,
                  "src": "26356:7:64",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9490,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26356:7:64",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26355:9:64"
            },
            "scope": 9507,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 8618,
              "name": "IHyperdriveEvents",
              "nameLocations": [
                "1068:17:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7814,
              "src": "1068:17:64"
            },
            "id": 8619,
            "nodeType": "InheritanceSpecifier",
            "src": "1068:17:64"
          },
          {
            "baseName": {
              "id": 8620,
              "name": "HyperdriveStorage",
              "nameLocations": [
                "1087:17:64"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 13187,
              "src": "1087:17:64"
            },
            "id": 8621,
            "nodeType": "InheritanceSpecifier",
            "src": "1087:17:64"
          }
        ],
        "canonicalName": "HyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 8617,
          "nodeType": "StructuredDocumentation",
          "src": "604:428:64",
          "text": "@author DELV\n @title HyperdriveBase\n @notice The Hyperdrive base contract that provides a set of helper methods\n         and defines the functions that must be overridden by implementations.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          9507,
          13187,
          67106,
          7814,
          8304
        ],
        "name": "HyperdriveBase",
        "nameLocation": "1050:14:64",
        "scope": 9508,
        "usedErrors": [
          67051
        ],
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
  "id": 64
} as const;
