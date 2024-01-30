export const Vm = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "target",
          "type": "address"
        }
      ],
      "name": "accesses",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "readSlots",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes32[]",
          "name": "writeSlots",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "activeFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
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
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "addr",
      "outputs": [
        {
          "internalType": "address",
          "name": "keyAddr",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "allowCheatcodes",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "condition",
          "type": "bool"
        }
      ],
      "name": "assume",
      "outputs": [],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "char",
          "type": "string"
        }
      ],
      "name": "breakpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "char",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "breakpoint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "broadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "broadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "broadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newChainId",
          "type": "uint256"
        }
      ],
      "name": "chainId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "clearMockedCalls",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "closeFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newCoinbase",
          "type": "address"
        }
      ],
      "name": "coinbase",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "recursive",
          "type": "bool"
        }
      ],
      "name": "createDir",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        }
      ],
      "name": "createFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "createFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "createFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "createSelectFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "createSelectFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "urlOrAlias",
          "type": "string"
        }
      ],
      "name": "createSelectFork",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "newBalance",
          "type": "uint256"
        }
      ],
      "name": "deal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "mnemonic",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "index",
          "type": "uint32"
        }
      ],
      "name": "deriveKey",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "mnemonic",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "derivationPath",
          "type": "string"
        },
        {
          "internalType": "uint32",
          "name": "index",
          "type": "uint32"
        }
      ],
      "name": "deriveKey",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newDifficulty",
          "type": "uint256"
        }
      ],
      "name": "difficulty",
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
        }
      ],
      "name": "envAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envAddress",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "value",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envBool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envBool",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "value",
          "type": "bool[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envBytes",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "value",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envBytes32",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "value",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envBytes32",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envInt",
      "outputs": [
        {
          "internalType": "int256[]",
          "name": "value",
          "type": "int256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envInt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "bytes32[]",
          "name": "defaultValue",
          "type": "bytes32[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "value",
          "type": "bytes32[]"
        }
      ],
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "int256[]",
          "name": "defaultValue",
          "type": "int256[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "int256[]",
          "name": "value",
          "type": "int256[]"
        }
      ],
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
          "internalType": "bool",
          "name": "defaultValue",
          "type": "bool"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
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
          "internalType": "address",
          "name": "defaultValue",
          "type": "address"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
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
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "bytes[]",
          "name": "defaultValue",
          "type": "bytes[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "value",
          "type": "bytes[]"
        }
      ],
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "uint256[]",
          "name": "defaultValue",
          "type": "uint256[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "value",
          "type": "uint256[]"
        }
      ],
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "defaultValue",
          "type": "string[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "value",
          "type": "string[]"
        }
      ],
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
          "internalType": "bytes",
          "name": "defaultValue",
          "type": "bytes"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
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
          "internalType": "bytes32",
          "name": "defaultValue",
          "type": "bytes32"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
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
          "internalType": "int256",
          "name": "defaultValue",
          "type": "int256"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "defaultValue",
          "type": "address[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "value",
          "type": "address[]"
        }
      ],
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
          "name": "defaultValue",
          "type": "string"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
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
          "name": "delim",
          "type": "string"
        },
        {
          "internalType": "bool[]",
          "name": "defaultValue",
          "type": "bool[]"
        }
      ],
      "name": "envOr",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "value",
          "type": "bool[]"
        }
      ],
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envString",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "value",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envString",
      "outputs": [
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        }
      ],
      "name": "envUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
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
          "name": "delim",
          "type": "string"
        }
      ],
      "name": "envUint",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "value",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
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
          "internalType": "bytes",
          "name": "newRuntimeBytecode",
          "type": "bytes"
        }
      ],
      "name": "etch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "gas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "gas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "minGas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "expectCallMinGas",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "minGas",
          "type": "uint64"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "uint64",
          "name": "count",
          "type": "uint64"
        }
      ],
      "name": "expectCallMinGas",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "checkTopic1",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic2",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic3",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkData",
          "type": "bool"
        }
      ],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "checkTopic1",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic2",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkTopic3",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "checkData",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "emitter",
          "type": "address"
        }
      ],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "emitter",
          "type": "address"
        }
      ],
      "name": "expectEmit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "revertData",
          "type": "bytes4"
        }
      ],
      "name": "expectRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "revertData",
          "type": "bytes"
        }
      ],
      "name": "expectRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expectRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "min",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "max",
          "type": "uint64"
        }
      ],
      "name": "expectSafeMemory",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "min",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "max",
          "type": "uint64"
        }
      ],
      "name": "expectSafeMemoryCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newBasefee",
          "type": "uint256"
        }
      ],
      "name": "fee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string[]",
          "name": "commandInput",
          "type": "string[]"
        }
      ],
      "name": "ffi",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "result",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "fsMetadata",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "length",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "readOnly",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "modified",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "accessed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "created",
              "type": "uint256"
            }
          ],
          "internalType": "struct VmSafe.FsMetadata",
          "name": "metadata",
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
          "name": "artifactPath",
          "type": "string"
        }
      ],
      "name": "getCode",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "creationBytecode",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "artifactPath",
          "type": "string"
        }
      ],
      "name": "getDeployedCode",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "runtimeBytecode",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getLabel",
      "outputs": [
        {
          "internalType": "string",
          "name": "currentLabel",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getNonce",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "nonce",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getRecordedLogs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32[]",
              "name": "topics",
              "type": "bytes32[]"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "address",
              "name": "emitter",
              "type": "address"
            }
          ],
          "internalType": "struct VmSafe.Log[]",
          "name": "logs",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPersistent",
      "outputs": [
        {
          "internalType": "bool",
          "name": "persistent",
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
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "newLabel",
          "type": "string"
        }
      ],
      "name": "label",
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
          "internalType": "bytes32",
          "name": "slot",
          "type": "bytes32"
        }
      ],
      "name": "load",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "data",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account1",
          "type": "address"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account0",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account1",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "account2",
          "type": "address"
        }
      ],
      "name": "makePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "name": "mockCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "returnData",
          "type": "bytes"
        }
      ],
      "name": "mockCall",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "msgValue",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "revertData",
          "type": "bytes"
        }
      ],
      "name": "mockCallRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "callee",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "revertData",
          "type": "bytes"
        }
      ],
      "name": "mockCallRevert",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "parsedValue",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseBool",
      "outputs": [
        {
          "internalType": "bool",
          "name": "parsedValue",
          "type": "bool"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "parsedValue",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseBytes32",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "parsedValue",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseInt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "parsedValue",
          "type": "int256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "name": "parseJson",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "abiEncodedData",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        }
      ],
      "name": "parseJson",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "abiEncodedData",
          "type": "bytes"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonAddress",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonAddressArray",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBool",
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
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBoolArray",
      "outputs": [
        {
          "internalType": "bool[]",
          "name": "",
          "type": "bool[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytes",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytes32",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytes32Array",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonBytesArray",
      "outputs": [
        {
          "internalType": "bytes[]",
          "name": "",
          "type": "bytes[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonInt",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonIntArray",
      "outputs": [
        {
          "internalType": "int256[]",
          "name": "",
          "type": "int256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "key",
          "type": "string"
        }
      ],
      "name": "parseJsonKeys",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "keys",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonString",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonStringArray",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonUint",
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
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "parseJsonUintArray",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "name": "parseUint",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "parsedValue",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pauseGasMetering",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "txOrigin",
          "type": "address"
        }
      ],
      "name": "prank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        }
      ],
      "name": "prank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "newPrevrandao",
          "type": "bytes32"
        }
      ],
      "name": "prevrandao",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "projectRoot",
      "outputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "readCallers",
      "outputs": [
        {
          "internalType": "enum VmSafe.CallerMode",
          "name": "callerMode",
          "type": "uint8"
        },
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "txOrigin",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "uint64",
          "name": "maxDepth",
          "type": "uint64"
        }
      ],
      "name": "readDir",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "errorMessage",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "depth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            }
          ],
          "internalType": "struct VmSafe.DirEntry[]",
          "name": "entries",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "uint64",
          "name": "maxDepth",
          "type": "uint64"
        },
        {
          "internalType": "bool",
          "name": "followLinks",
          "type": "bool"
        }
      ],
      "name": "readDir",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "errorMessage",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "depth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            }
          ],
          "internalType": "struct VmSafe.DirEntry[]",
          "name": "entries",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readDir",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "errorMessage",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "depth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "isDir",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isSymlink",
              "type": "bool"
            }
          ],
          "internalType": "struct VmSafe.DirEntry[]",
          "name": "entries",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readFile",
      "outputs": [
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readFileBinary",
      "outputs": [
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "readLine",
      "outputs": [
        {
          "internalType": "string",
          "name": "line",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "linkPath",
          "type": "string"
        }
      ],
      "name": "readLink",
      "outputs": [
        {
          "internalType": "string",
          "name": "targetPath",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "record",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "recordLogs",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "rememberKey",
      "outputs": [
        {
          "internalType": "address",
          "name": "keyAddr",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "recursive",
          "type": "bool"
        }
      ],
      "name": "removeDir",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "removeFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "resetNonce",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "resumeGasMetering",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "snapshotId",
          "type": "uint256"
        }
      ],
      "name": "revertTo",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        }
      ],
      "name": "revokePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokePersistent",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newHeight",
          "type": "uint256"
        }
      ],
      "name": "roll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "blockNumber",
          "type": "uint256"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "rollFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "rpcAlias",
          "type": "string"
        }
      ],
      "name": "rpcUrl",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rpcUrlStructs",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "key",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "url",
              "type": "string"
            }
          ],
          "internalType": "struct VmSafe.Rpc[]",
          "name": "urls",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "rpcUrls",
      "outputs": [
        {
          "internalType": "string[2][]",
          "name": "urls",
          "type": "string[2][]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        }
      ],
      "name": "selectFork",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "values",
          "type": "address[]"
        }
      ],
      "name": "serializeAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "name": "serializeAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bool[]",
          "name": "values",
          "type": "bool[]"
        }
      ],
      "name": "serializeBool",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "serializeBool",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes[]",
          "name": "values",
          "type": "bytes[]"
        }
      ],
      "name": "serializeBytes",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "name": "serializeBytes",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes32[]",
          "name": "values",
          "type": "bytes32[]"
        }
      ],
      "name": "serializeBytes32",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "name": "serializeBytes32",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "serializeInt",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "int256[]",
          "name": "values",
          "type": "int256[]"
        }
      ],
      "name": "serializeInt",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "string[]",
          "name": "values",
          "type": "string[]"
        }
      ],
      "name": "serializeString",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "value",
          "type": "string"
        }
      ],
      "name": "serializeString",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "serializeUint",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "objectKey",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "serializeUint",
      "outputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        }
      ],
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
          "name": "value",
          "type": "string"
        }
      ],
      "name": "setEnv",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "newNonce",
          "type": "uint64"
        }
      ],
      "name": "setNonce",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "newNonce",
          "type": "uint64"
        }
      ],
      "name": "setNonceUnsafe",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "digest",
          "type": "bytes32"
        }
      ],
      "name": "sign",
      "outputs": [
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
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "skipTest",
          "type": "bool"
        }
      ],
      "name": "skip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "snapshot",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "snapshotId",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "signer",
          "type": "address"
        }
      ],
      "name": "startBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "privateKey",
          "type": "uint256"
        }
      ],
      "name": "startBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        }
      ],
      "name": "startPrank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "msgSender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "txOrigin",
          "type": "address"
        }
      ],
      "name": "startPrank",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stopBroadcast",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stopPrank",
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
          "internalType": "bytes32",
          "name": "slot",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "name": "store",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "value",
          "type": "address"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes",
          "name": "value",
          "type": "bytes"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "value",
          "type": "bool"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "value",
          "type": "int256"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "value",
          "type": "bytes32"
        }
      ],
      "name": "toString",
      "outputs": [
        {
          "internalType": "string",
          "name": "stringifiedValue",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "forkId",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "transact",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "txHash",
          "type": "bytes32"
        }
      ],
      "name": "transact",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newGasPrice",
          "type": "uint256"
        }
      ],
      "name": "txGasPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newTimestamp",
          "type": "uint256"
        }
      ],
      "name": "warp",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "name": "writeFile",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "writeFileBinary",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "valueKey",
          "type": "string"
        }
      ],
      "name": "writeJson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "json",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        }
      ],
      "name": "writeJson",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "path",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        }
      ],
      "name": "writeLine",
      "outputs": [],
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
    "accesses(address)": "65bc9481",
    "activeFork()": "2f103f22",
    "addr(uint256)": "ffa18649",
    "allowCheatcodes(address)": "ea060291",
    "assume(bool)": "4c63e562",
    "breakpoint(string)": "f0259e92",
    "breakpoint(string,bool)": "f7d39a8d",
    "broadcast()": "afc98040",
    "broadcast(address)": "e6962cdb",
    "broadcast(uint256)": "f67a965b",
    "chainId(uint256)": "4049ddd2",
    "clearMockedCalls()": "3fdf4e15",
    "closeFile(string)": "48c3241f",
    "coinbase(address)": "ff483c54",
    "createDir(string,bool)": "168b64d3",
    "createFork(string)": "31ba3498",
    "createFork(string,bytes32)": "7ca29682",
    "createFork(string,uint256)": "6ba3ba2b",
    "createSelectFork(string)": "98680034",
    "createSelectFork(string,bytes32)": "84d52b7a",
    "createSelectFork(string,uint256)": "71ee464d",
    "deal(address,uint256)": "c88a5e6d",
    "deriveKey(string,string,uint32)": "6bcb2c1b",
    "deriveKey(string,uint32)": "6229498b",
    "difficulty(uint256)": "46cc92d9",
    "envAddress(string)": "350d56bf",
    "envAddress(string,string)": "ad31b9fa",
    "envBool(string)": "7ed1ec7d",
    "envBool(string,string)": "aaaddeaf",
    "envBytes(string)": "4d7baf06",
    "envBytes(string,string)": "ddc2651b",
    "envBytes32(string)": "97949042",
    "envBytes32(string,string)": "5af231c1",
    "envInt(string)": "892a0c61",
    "envInt(string,string)": "42181150",
    "envOr(string,address)": "561fe540",
    "envOr(string,bool)": "4777f3cf",
    "envOr(string,bytes)": "b3e47705",
    "envOr(string,bytes32)": "b4a85892",
    "envOr(string,int256)": "bbcb713e",
    "envOr(string,string)": "d145736c",
    "envOr(string,string,address[])": "c74e9deb",
    "envOr(string,string,bool[])": "eb85e83b",
    "envOr(string,string,bytes32[])": "2281f367",
    "envOr(string,string,bytes[])": "64bc3e64",
    "envOr(string,string,int256[])": "4700d74b",
    "envOr(string,string,string[])": "859216bc",
    "envOr(string,string,uint256[])": "74318528",
    "envOr(string,uint256)": "5e97348f",
    "envString(string)": "f877cb19",
    "envString(string,string)": "14b02bc9",
    "envUint(string)": "c1978d1f",
    "envUint(string,string)": "f3dec099",
    "etch(address,bytes)": "b4d6c782",
    "expectCall(address,bytes)": "bd6af434",
    "expectCall(address,bytes,uint64)": "c1adbbff",
    "expectCall(address,uint256,bytes)": "f30c7ba3",
    "expectCall(address,uint256,bytes,uint64)": "a2b1a1ae",
    "expectCall(address,uint256,uint64,bytes)": "23361207",
    "expectCall(address,uint256,uint64,bytes,uint64)": "65b7b7cc",
    "expectCallMinGas(address,uint256,uint64,bytes)": "08e4e116",
    "expectCallMinGas(address,uint256,uint64,bytes,uint64)": "e13a1834",
    "expectEmit()": "440ed10d",
    "expectEmit(address)": "86b9620d",
    "expectEmit(bool,bool,bool,bool)": "491cc7c2",
    "expectEmit(bool,bool,bool,bool,address)": "81bad6f3",
    "expectRevert()": "f4844814",
    "expectRevert(bytes)": "f28dceb3",
    "expectRevert(bytes4)": "c31eb0e0",
    "expectSafeMemory(uint64,uint64)": "6d016688",
    "expectSafeMemoryCall(uint64,uint64)": "05838bf4",
    "fee(uint256)": "39b37ab0",
    "ffi(string[])": "89160467",
    "fsMetadata(string)": "af368a08",
    "getCode(string)": "8d1cc925",
    "getDeployedCode(string)": "3ebf73b4",
    "getLabel(address)": "28a249b0",
    "getNonce(address)": "2d0335ab",
    "getRecordedLogs()": "191553a4",
    "isPersistent(address)": "d92d8efd",
    "label(address,string)": "c657c718",
    "load(address,bytes32)": "667f9d70",
    "makePersistent(address)": "57e22dde",
    "makePersistent(address,address)": "4074e0a8",
    "makePersistent(address,address,address)": "efb77a75",
    "makePersistent(address[])": "1d9e269e",
    "mockCall(address,bytes,bytes)": "b96213e4",
    "mockCall(address,uint256,bytes,bytes)": "81409b91",
    "mockCallRevert(address,bytes,bytes)": "dbaad147",
    "mockCallRevert(address,uint256,bytes,bytes)": "d23cd037",
    "parseAddress(string)": "c6ce059d",
    "parseBool(string)": "974ef924",
    "parseBytes(string)": "8f5d232d",
    "parseBytes32(string)": "087e6e81",
    "parseInt(string)": "42346c5e",
    "parseJson(string)": "6a82600a",
    "parseJson(string,string)": "85940ef1",
    "parseJsonAddress(string,string)": "1e19e657",
    "parseJsonAddressArray(string,string)": "2fce7883",
    "parseJsonBool(string,string)": "9f86dc91",
    "parseJsonBoolArray(string,string)": "91f3b94f",
    "parseJsonBytes(string,string)": "fd921be8",
    "parseJsonBytes32(string,string)": "1777e59d",
    "parseJsonBytes32Array(string,string)": "91c75bc3",
    "parseJsonBytesArray(string,string)": "6631aa99",
    "parseJsonInt(string,string)": "7b048ccd",
    "parseJsonIntArray(string,string)": "9983c28a",
    "parseJsonKeys(string,string)": "213e4198",
    "parseJsonString(string,string)": "49c4fac8",
    "parseJsonStringArray(string,string)": "498fdcf4",
    "parseJsonUint(string,string)": "addde2b6",
    "parseJsonUintArray(string,string)": "522074ab",
    "parseUint(string)": "fa91454d",
    "pauseGasMetering()": "d1a5b36f",
    "prank(address)": "ca669fa7",
    "prank(address,address)": "47e50cce",
    "prevrandao(bytes32)": "3b925549",
    "projectRoot()": "d930a0e6",
    "readCallers()": "4ad0bac9",
    "readDir(string)": "c4bc59e0",
    "readDir(string,uint64)": "1497876c",
    "readDir(string,uint64,bool)": "8102d70d",
    "readFile(string)": "60f9bb11",
    "readFileBinary(string)": "16ed7bc4",
    "readLine(string)": "70f55728",
    "readLink(string)": "9f5684a2",
    "record()": "266cf109",
    "recordLogs()": "41af2f52",
    "rememberKey(uint256)": "22100064",
    "removeDir(string,bool)": "45c62011",
    "removeFile(string)": "f1afe04d",
    "resetNonce(address)": "1c72346d",
    "resumeGasMetering()": "2bcd50e0",
    "revertTo(uint256)": "44d7f0a4",
    "revokePersistent(address)": "997a0222",
    "revokePersistent(address[])": "3ce969e6",
    "roll(uint256)": "1f7b4f30",
    "rollFork(bytes32)": "0f29772b",
    "rollFork(uint256)": "d9bbf3a1",
    "rollFork(uint256,bytes32)": "f2830f7b",
    "rollFork(uint256,uint256)": "d74c83a4",
    "rpcUrl(string)": "975a6ce9",
    "rpcUrlStructs()": "9d2ad72a",
    "rpcUrls()": "a85a8418",
    "selectFork(uint256)": "9ebf6827",
    "serializeAddress(string,string,address)": "972c6062",
    "serializeAddress(string,string,address[])": "1e356e1a",
    "serializeBool(string,string,bool)": "ac22e971",
    "serializeBool(string,string,bool[])": "92925aa1",
    "serializeBytes(string,string,bytes)": "f21d52c7",
    "serializeBytes(string,string,bytes[])": "9884b232",
    "serializeBytes32(string,string,bytes32)": "2d812b44",
    "serializeBytes32(string,string,bytes32[])": "201e43e2",
    "serializeInt(string,string,int256)": "3f33db60",
    "serializeInt(string,string,int256[])": "7676e127",
    "serializeString(string,string,string)": "88da6d35",
    "serializeString(string,string,string[])": "561cd6f3",
    "serializeUint(string,string,uint256)": "129e9002",
    "serializeUint(string,string,uint256[])": "fee9a469",
    "setEnv(string,string)": "3d5923ee",
    "setNonce(address,uint64)": "f8e18b57",
    "setNonceUnsafe(address,uint64)": "9b67b21c",
    "sign(uint256,bytes32)": "e341eaa4",
    "skip(bool)": "dd82d13e",
    "snapshot()": "9711715a",
    "startBroadcast()": "7fb5297f",
    "startBroadcast(address)": "7fec2a8d",
    "startBroadcast(uint256)": "ce817d47",
    "startPrank(address)": "06447d56",
    "startPrank(address,address)": "45b56078",
    "stopBroadcast()": "76eadd36",
    "stopPrank()": "90c5013b",
    "store(address,bytes32,bytes32)": "70ca10bb",
    "toString(address)": "56ca623e",
    "toString(bool)": "71dce7da",
    "toString(bytes)": "71aad10d",
    "toString(bytes32)": "b11a19e8",
    "toString(int256)": "a322c40e",
    "toString(uint256)": "6900a3ae",
    "transact(bytes32)": "be646da1",
    "transact(uint256,bytes32)": "4d8abc4b",
    "txGasPrice(uint256)": "48f50c0f",
    "warp(uint256)": "e5d6bf02",
    "writeFile(string,string)": "897e0a97",
    "writeFileBinary(string,bytes)": "1f21fc80",
    "writeJson(string,string)": "e23cd19f",
    "writeJson(string,string,string)": "35d6ad46",
    "writeLine(string,string)": "619d897f"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"accesses\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"readSlots\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes32[]\",\"name\":\"writeSlots\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"activeFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"keyAddr\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"allowCheatcodes\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"condition\",\"type\":\"bool\"}],\"name\":\"assume\",\"outputs\":[],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"char\",\"type\":\"string\"}],\"name\":\"breakpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"char\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"breakpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"signer\",\"type\":\"address\"}],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"broadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newChainId\",\"type\":\"uint256\"}],\"name\":\"chainId\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"clearMockedCalls\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"closeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newCoinbase\",\"type\":\"address\"}],\"name\":\"coinbase\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"recursive\",\"type\":\"bool\"}],\"name\":\"createDir\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"createFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"urlOrAlias\",\"type\":\"string\"}],\"name\":\"createSelectFork\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"newBalance\",\"type\":\"uint256\"}],\"name\":\"deal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"mnemonic\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"deriveKey\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"mnemonic\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"derivationPath\",\"type\":\"string\"},{\"internalType\":\"uint32\",\"name\":\"index\",\"type\":\"uint32\"}],\"name\":\"deriveKey\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newDifficulty\",\"type\":\"uint256\"}],\"name\":\"difficulty\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envAddress\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"value\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBool\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"value\",\"type\":\"bool[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBytes\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"value\",\"type\":\"bytes[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envBytes32\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"value\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envInt\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"value\",\"type\":\"int256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"defaultValue\",\"type\":\"bytes32[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"value\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"int256[]\",\"name\":\"defaultValue\",\"type\":\"int256[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"value\",\"type\":\"int256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"defaultValue\",\"type\":\"bool\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"defaultValue\",\"type\":\"address\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"defaultValue\",\"type\":\"uint256\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bytes[]\",\"name\":\"defaultValue\",\"type\":\"bytes[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"value\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"uint256[]\",\"name\":\"defaultValue\",\"type\":\"uint256[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"value\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"defaultValue\",\"type\":\"string[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"value\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"defaultValue\",\"type\":\"bytes\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"defaultValue\",\"type\":\"bytes32\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"int256\",\"name\":\"defaultValue\",\"type\":\"int256\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"defaultValue\",\"type\":\"address[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"value\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"defaultValue\",\"type\":\"string\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"},{\"internalType\":\"bool[]\",\"name\":\"defaultValue\",\"type\":\"bool[]\"}],\"name\":\"envOr\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"value\",\"type\":\"bool[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envString\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"value\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"envUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"delim\",\"type\":\"string\"}],\"name\":\"envUint\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"value\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"newRuntimeBytecode\",\"type\":\"bytes\"}],\"name\":\"etch\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"gas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"gas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"minGas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"expectCallMinGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"uint64\",\"name\":\"minGas\",\"type\":\"uint64\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"uint64\",\"name\":\"count\",\"type\":\"uint64\"}],\"name\":\"expectCallMinGas\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"checkTopic1\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic2\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic3\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkData\",\"type\":\"bool\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"checkTopic1\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic2\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkTopic3\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"checkData\",\"type\":\"bool\"},{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"name\":\"expectEmit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"revertData\",\"type\":\"bytes4\"}],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expectRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"min\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"max\",\"type\":\"uint64\"}],\"name\":\"expectSafeMemory\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint64\",\"name\":\"min\",\"type\":\"uint64\"},{\"internalType\":\"uint64\",\"name\":\"max\",\"type\":\"uint64\"}],\"name\":\"expectSafeMemoryCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newBasefee\",\"type\":\"uint256\"}],\"name\":\"fee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string[]\",\"name\":\"commandInput\",\"type\":\"string[]\"}],\"name\":\"ffi\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"result\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"fsMetadata\",\"outputs\":[{\"components\":[{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"length\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"readOnly\",\"type\":\"bool\"},{\"internalType\":\"uint256\",\"name\":\"modified\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"accessed\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"created\",\"type\":\"uint256\"}],\"internalType\":\"struct VmSafe.FsMetadata\",\"name\":\"metadata\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"artifactPath\",\"type\":\"string\"}],\"name\":\"getCode\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"creationBytecode\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"artifactPath\",\"type\":\"string\"}],\"name\":\"getDeployedCode\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"runtimeBytecode\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getLabel\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"currentLabel\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"getNonce\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"nonce\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getRecordedLogs\",\"outputs\":[{\"components\":[{\"internalType\":\"bytes32[]\",\"name\":\"topics\",\"type\":\"bytes32[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"address\",\"name\":\"emitter\",\"type\":\"address\"}],\"internalType\":\"struct VmSafe.Log[]\",\"name\":\"logs\",\"type\":\"tuple[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isPersistent\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"persistent\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"newLabel\",\"type\":\"string\"}],\"name\":\"label\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"slot\",\"type\":\"bytes32\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"data\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account1\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account0\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account1\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"account2\",\"type\":\"address\"}],\"name\":\"makePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"name\":\"mockCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"returnData\",\"type\":\"bytes\"}],\"name\":\"mockCall\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"msgValue\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"mockCallRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"callee\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"revertData\",\"type\":\"bytes\"}],\"name\":\"mockCallRevert\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"parsedValue\",\"type\":\"address\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"parsedValue\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"parsedValue\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"parsedValue\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"parsedValue\",\"type\":\"int256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"name\":\"parseJson\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"abiEncodedData\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"parseJson\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"abiEncodedData\",\"type\":\"bytes\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonAddress\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonAddressArray\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBool\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBoolArray\",\"outputs\":[{\"internalType\":\"bool[]\",\"name\":\"\",\"type\":\"bool[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes32\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytes32Array\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonBytesArray\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonInt\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonIntArray\",\"outputs\":[{\"internalType\":\"int256[]\",\"name\":\"\",\"type\":\"int256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"parseJsonKeys\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"keys\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonStringArray\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"\",\"type\":\"string[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"parseJsonUintArray\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"name\":\"parseUint\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"parsedValue\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pauseGasMetering\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"name\":\"prank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"}],\"name\":\"prank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"newPrevrandao\",\"type\":\"bytes32\"}],\"name\":\"prevrandao\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"projectRoot\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"readCallers\",\"outputs\":[{\"internalType\":\"enum VmSafe.CallerMode\",\"name\":\"callerMode\",\"type\":\"uint8\"},{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"maxDepth\",\"type\":\"uint64\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"maxDepth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"followLinks\",\"type\":\"bool\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readDir\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"errorMessage\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"uint64\",\"name\":\"depth\",\"type\":\"uint64\"},{\"internalType\":\"bool\",\"name\":\"isDir\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isSymlink\",\"type\":\"bool\"}],\"internalType\":\"struct VmSafe.DirEntry[]\",\"name\":\"entries\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readFile\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readFileBinary\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"readLine\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"line\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"linkPath\",\"type\":\"string\"}],\"name\":\"readLink\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"targetPath\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"record\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recordLogs\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"rememberKey\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"keyAddr\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"recursive\",\"type\":\"bool\"}],\"name\":\"removeDir\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"removeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"resetNonce\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"resumeGasMetering\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"snapshotId\",\"type\":\"uint256\"}],\"name\":\"revertTo\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"success\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"}],\"name\":\"revokePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokePersistent\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newHeight\",\"type\":\"uint256\"}],\"name\":\"roll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"blockNumber\",\"type\":\"uint256\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"rollFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"rpcAlias\",\"type\":\"string\"}],\"name\":\"rpcUrl\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rpcUrlStructs\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"url\",\"type\":\"string\"}],\"internalType\":\"struct VmSafe.Rpc[]\",\"name\":\"urls\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"rpcUrls\",\"outputs\":[{\"internalType\":\"string[2][]\",\"name\":\"urls\",\"type\":\"string[2][]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"}],\"name\":\"selectFork\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"address[]\",\"name\":\"values\",\"type\":\"address[]\"}],\"name\":\"serializeAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"name\":\"serializeAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bool[]\",\"name\":\"values\",\"type\":\"bool[]\"}],\"name\":\"serializeBool\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"serializeBool\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes[]\",\"name\":\"values\",\"type\":\"bytes[]\"}],\"name\":\"serializeBytes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"serializeBytes\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes32[]\",\"name\":\"values\",\"type\":\"bytes32[]\"}],\"name\":\"serializeBytes32\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"serializeBytes32\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"serializeInt\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"int256[]\",\"name\":\"values\",\"type\":\"int256[]\"}],\"name\":\"serializeInt\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"string[]\",\"name\":\"values\",\"type\":\"string[]\"}],\"name\":\"serializeString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"serializeString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"serializeUint\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"objectKey\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"},{\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"serializeUint\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setEnv\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"newNonce\",\"type\":\"uint64\"}],\"name\":\"setNonce\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"newNonce\",\"type\":\"uint64\"}],\"name\":\"setNonceUnsafe\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"digest\",\"type\":\"bytes32\"}],\"name\":\"sign\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"skipTest\",\"type\":\"bool\"}],\"name\":\"skip\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"snapshot\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"snapshotId\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"signer\",\"type\":\"address\"}],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"privateKey\",\"type\":\"uint256\"}],\"name\":\"startBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"}],\"name\":\"startPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"msgSender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"txOrigin\",\"type\":\"address\"}],\"name\":\"startPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopBroadcast\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"stopPrank\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"slot\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"store\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"value\",\"type\":\"address\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bool\",\"name\":\"value\",\"type\":\"bool\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"value\",\"type\":\"int256\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"toString\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"stringifiedValue\",\"type\":\"string\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"forkId\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"transact\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"txHash\",\"type\":\"bytes32\"}],\"name\":\"transact\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newGasPrice\",\"type\":\"uint256\"}],\"name\":\"txGasPrice\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"newTimestamp\",\"type\":\"uint256\"}],\"name\":\"warp\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"writeFile\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"writeFileBinary\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"valueKey\",\"type\":\"string\"}],\"name\":\"writeJson\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"json\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"}],\"name\":\"writeJson\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"path\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"}],\"name\":\"writeLine\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"activeFork()\":{\"notice\":\"Returns the identifier of the currently active fork. Reverts if no fork is currently active.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Vm.sol\":\"Vm\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
              "name": "target",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "accesses",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "readSlots",
              "type": "bytes32[]"
            },
            {
              "internalType": "bytes32[]",
              "name": "writeSlots",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "activeFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "addr",
          "outputs": [
            {
              "internalType": "address",
              "name": "keyAddr",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "allowCheatcodes"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "condition",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "assume"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "char",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "breakpoint"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "char",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "breakpoint"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "broadcast"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "broadcast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "broadcast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newChainId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "chainId"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "clearMockedCalls"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "closeFile"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newCoinbase",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "coinbase"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "recursive",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createDir"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createSelectFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createSelectFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "urlOrAlias",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createSelectFork",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "newBalance",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "deal"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "mnemonic",
              "type": "string"
            },
            {
              "internalType": "uint32",
              "name": "index",
              "type": "uint32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "deriveKey",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "mnemonic",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "derivationPath",
              "type": "string"
            },
            {
              "internalType": "uint32",
              "name": "index",
              "type": "uint32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "deriveKey",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newDifficulty",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "difficulty"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envAddress",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "value",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBool",
          "outputs": [
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBool",
          "outputs": [
            {
              "internalType": "bool[]",
              "name": "value",
              "type": "bool[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "value",
              "type": "bytes[]"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes32",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "value",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envBytes32",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envInt",
          "outputs": [
            {
              "internalType": "int256[]",
              "name": "value",
              "type": "int256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envInt",
          "outputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "bytes32[]",
              "name": "defaultValue",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "value",
              "type": "bytes32[]"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "int256[]",
              "name": "defaultValue",
              "type": "int256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "int256[]",
              "name": "value",
              "type": "int256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "defaultValue",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "defaultValue",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "defaultValue",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "bytes[]",
              "name": "defaultValue",
              "type": "bytes[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "value",
              "type": "bytes[]"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "defaultValue",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "value",
              "type": "uint256[]"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "defaultValue",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "value",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "defaultValue",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "defaultValue",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "defaultValue",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "defaultValue",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "value",
              "type": "address[]"
            }
          ]
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
              "name": "defaultValue",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ]
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
              "name": "delim",
              "type": "string"
            },
            {
              "internalType": "bool[]",
              "name": "defaultValue",
              "type": "bool[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "envOr",
          "outputs": [
            {
              "internalType": "bool[]",
              "name": "value",
              "type": "bool[]"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envString",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "value",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envString",
          "outputs": [
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envUint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ]
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
              "name": "delim",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "envUint",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "value",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "newRuntimeBytecode",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "etch"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "gas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "gas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "minGas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCallMinGas"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "uint64",
              "name": "minGas",
              "type": "uint64"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "uint64",
              "name": "count",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectCallMinGas"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "checkTopic1",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic2",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic3",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkData",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "checkTopic1",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic2",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkTopic3",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "checkData",
              "type": "bool"
            },
            {
              "internalType": "address",
              "name": "emitter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "emitter",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectEmit"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "revertData",
              "type": "bytes4"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectRevert"
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "revertData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectRevert"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectRevert"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "min",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "max",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectSafeMemory"
        },
        {
          "inputs": [
            {
              "internalType": "uint64",
              "name": "min",
              "type": "uint64"
            },
            {
              "internalType": "uint64",
              "name": "max",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "expectSafeMemoryCall"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newBasefee",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "fee"
        },
        {
          "inputs": [
            {
              "internalType": "string[]",
              "name": "commandInput",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "ffi",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "result",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "fsMetadata",
          "outputs": [
            {
              "internalType": "struct VmSafe.FsMetadata",
              "name": "metadata",
              "type": "tuple",
              "components": [
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "length",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "readOnly",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "modified",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "accessed",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "created",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "artifactPath",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCode",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "creationBytecode",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "artifactPath",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getDeployedCode",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "runtimeBytecode",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "getLabel",
          "outputs": [
            {
              "internalType": "string",
              "name": "currentLabel",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getNonce",
          "outputs": [
            {
              "internalType": "uint64",
              "name": "nonce",
              "type": "uint64"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "getRecordedLogs",
          "outputs": [
            {
              "internalType": "struct VmSafe.Log[]",
              "name": "logs",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "bytes32[]",
                  "name": "topics",
                  "type": "bytes32[]"
                },
                {
                  "internalType": "bytes",
                  "name": "data",
                  "type": "bytes"
                },
                {
                  "internalType": "address",
                  "name": "emitter",
                  "type": "address"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isPersistent",
          "outputs": [
            {
              "internalType": "bool",
              "name": "persistent",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "newLabel",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "label"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "load",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "data",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "account1",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account0",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "account1",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "account2",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "makePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "returnData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "returnData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCall"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "msgValue",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "revertData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCallRevert"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "callee",
              "type": "address"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            },
            {
              "internalType": "bytes",
              "name": "revertData",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "mockCallRevert"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseAddress",
          "outputs": [
            {
              "internalType": "address",
              "name": "parsedValue",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseBool",
          "outputs": [
            {
              "internalType": "bool",
              "name": "parsedValue",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseBytes",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "parsedValue",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseBytes32",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "parsedValue",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseInt",
          "outputs": [
            {
              "internalType": "int256",
              "name": "parsedValue",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseJson",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "abiEncodedData",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "key",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseJson",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "abiEncodedData",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonAddress",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonAddressArray",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBool",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBoolArray",
          "outputs": [
            {
              "internalType": "bool[]",
              "name": "",
              "type": "bool[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytes",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytes32",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytes32Array",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonBytesArray",
          "outputs": [
            {
              "internalType": "bytes[]",
              "name": "",
              "type": "bytes[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonInt",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonIntArray",
          "outputs": [
            {
              "internalType": "int256[]",
              "name": "",
              "type": "int256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "key",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonKeys",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "keys",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonString",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonStringArray",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonUint",
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
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "parseJsonUintArray",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "parseUint",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "parsedValue",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "pauseGasMetering"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "txOrigin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "prank"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "prank"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "newPrevrandao",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "prevrandao"
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "projectRoot",
          "outputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "readCallers",
          "outputs": [
            {
              "internalType": "enum VmSafe.CallerMode",
              "name": "callerMode",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "txOrigin",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "maxDepth",
              "type": "uint64"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readDir",
          "outputs": [
            {
              "internalType": "struct VmSafe.DirEntry[]",
              "name": "entries",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "errorMessage",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "path",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "depth",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "uint64",
              "name": "maxDepth",
              "type": "uint64"
            },
            {
              "internalType": "bool",
              "name": "followLinks",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readDir",
          "outputs": [
            {
              "internalType": "struct VmSafe.DirEntry[]",
              "name": "entries",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "errorMessage",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "path",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "depth",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readDir",
          "outputs": [
            {
              "internalType": "struct VmSafe.DirEntry[]",
              "name": "entries",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "errorMessage",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "path",
                  "type": "string"
                },
                {
                  "internalType": "uint64",
                  "name": "depth",
                  "type": "uint64"
                },
                {
                  "internalType": "bool",
                  "name": "isDir",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isSymlink",
                  "type": "bool"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readFile",
          "outputs": [
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readFileBinary",
          "outputs": [
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readLine",
          "outputs": [
            {
              "internalType": "string",
              "name": "line",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "linkPath",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "readLink",
          "outputs": [
            {
              "internalType": "string",
              "name": "targetPath",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "record"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "recordLogs"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rememberKey",
          "outputs": [
            {
              "internalType": "address",
              "name": "keyAddr",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "recursive",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeDir"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "removeFile"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "resetNonce"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "resumeGasMetering"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "snapshotId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revertTo",
          "outputs": [
            {
              "internalType": "bool",
              "name": "success",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address[]",
              "name": "accounts",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "revokePersistent"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newHeight",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "roll"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "rollFork"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "rpcAlias",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "rpcUrl",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "rpcUrlStructs",
          "outputs": [
            {
              "internalType": "struct VmSafe.Rpc[]",
              "name": "urls",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "string",
                  "name": "key",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "url",
                  "type": "string"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "rpcUrls",
          "outputs": [
            {
              "internalType": "string[2][]",
              "name": "urls",
              "type": "string[2][]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "selectFork"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "address[]",
              "name": "values",
              "type": "address[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeAddress",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeAddress",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bool[]",
              "name": "values",
              "type": "bool[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBool",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBool",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes[]",
              "name": "values",
              "type": "bytes[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes32[]",
              "name": "values",
              "type": "bytes32[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes32",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeBytes32",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeInt",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "int256[]",
              "name": "values",
              "type": "int256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeInt",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "string[]",
              "name": "values",
              "type": "string[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeString",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "value",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeString",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeUint",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "objectKey",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "values",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "serializeUint",
          "outputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            }
          ]
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
              "name": "value",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setEnv"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "newNonce",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setNonce"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint64",
              "name": "newNonce",
              "type": "uint64"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setNonceUnsafe"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "digest",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "sign",
          "outputs": [
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
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "skipTest",
              "type": "bool"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "skip"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "snapshot",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "snapshotId",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startBroadcast"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "signer",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startBroadcast"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "privateKey",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startBroadcast"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startPrank"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "msgSender",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "txOrigin",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "startPrank"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "stopBroadcast"
        },
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "stopPrank"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "target",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "slot",
              "type": "bytes32"
            },
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "store"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "value",
              "type": "address"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes",
              "name": "value",
              "type": "bytes"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "value",
              "type": "bool"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "int256",
              "name": "value",
              "type": "int256"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "value",
              "type": "bytes32"
            }
          ],
          "stateMutability": "pure",
          "type": "function",
          "name": "toString",
          "outputs": [
            {
              "internalType": "string",
              "name": "stringifiedValue",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "forkId",
              "type": "uint256"
            },
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transact"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "txHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "transact"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newGasPrice",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "txGasPrice"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "newTimestamp",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "warp"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeFile"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeFileBinary"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "valueKey",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeJson"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "json",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeJson"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "path",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "writeLine"
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
          "activeFork()": {
            "notice": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
          }
        },
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
        "lib/forge-std/src/Vm.sol": "Vm"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/Vm.sol": {
        "keccak256": "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4",
        "urls": [
          "bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241",
          "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/Vm.sol",
    "id": 36246,
    "exportedSymbols": {
      "Vm": [
        36245
      ],
      "VmSafe": [
        35773
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:33435:108",
    "nodes": [
      {
        "id": 34710,
        "nodeType": "PragmaDirective",
        "src": "32:31:108",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 34711,
        "nodeType": "PragmaDirective",
        "src": "65:33:108",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 35773,
        "nodeType": "ContractDefinition",
        "src": "571:21283:108",
        "nodes": [
          {
            "id": 34717,
            "nodeType": "EnumDefinition",
            "src": "594:122:108",
            "nodes": [],
            "canonicalName": "VmSafe.CallerMode",
            "members": [
              {
                "id": 34712,
                "name": "None",
                "nameLocation": "620:4:108",
                "nodeType": "EnumValue",
                "src": "620:4:108"
              },
              {
                "id": 34713,
                "name": "Broadcast",
                "nameLocation": "634:9:108",
                "nodeType": "EnumValue",
                "src": "634:9:108"
              },
              {
                "id": 34714,
                "name": "RecurrentBroadcast",
                "nameLocation": "653:18:108",
                "nodeType": "EnumValue",
                "src": "653:18:108"
              },
              {
                "id": 34715,
                "name": "Prank",
                "nameLocation": "681:5:108",
                "nodeType": "EnumValue",
                "src": "681:5:108"
              },
              {
                "id": 34716,
                "name": "RecurrentPrank",
                "nameLocation": "696:14:108",
                "nodeType": "EnumValue",
                "src": "696:14:108"
              }
            ],
            "name": "CallerMode",
            "nameLocation": "599:10:108"
          },
          {
            "id": 34725,
            "nodeType": "StructDefinition",
            "src": "722:89:108",
            "nodes": [],
            "canonicalName": "VmSafe.Log",
            "members": [
              {
                "constant": false,
                "id": 34720,
                "mutability": "mutable",
                "name": "topics",
                "nameLocation": "753:6:108",
                "nodeType": "VariableDeclaration",
                "scope": 34725,
                "src": "743:16:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 34718,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "743:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 34719,
                  "nodeType": "ArrayTypeName",
                  "src": "743:9:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                    "typeString": "bytes32[]"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34722,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "775:4:108",
                "nodeType": "VariableDeclaration",
                "scope": 34725,
                "src": "769:10:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes_storage_ptr",
                  "typeString": "bytes"
                },
                "typeName": {
                  "id": 34721,
                  "name": "bytes",
                  "nodeType": "ElementaryTypeName",
                  "src": "769:5:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_storage_ptr",
                    "typeString": "bytes"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34724,
                "mutability": "mutable",
                "name": "emitter",
                "nameLocation": "797:7:108",
                "nodeType": "VariableDeclaration",
                "scope": 34725,
                "src": "789:15:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 34723,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "789:7:108",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Log",
            "nameLocation": "729:3:108",
            "scope": 35773,
            "visibility": "public"
          },
          {
            "id": 34730,
            "nodeType": "StructDefinition",
            "src": "817:58:108",
            "nodes": [],
            "canonicalName": "VmSafe.Rpc",
            "members": [
              {
                "constant": false,
                "id": 34727,
                "mutability": "mutable",
                "name": "key",
                "nameLocation": "845:3:108",
                "nodeType": "VariableDeclaration",
                "scope": 34730,
                "src": "838:10:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 34726,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "838:6:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34729,
                "mutability": "mutable",
                "name": "url",
                "nameLocation": "865:3:108",
                "nodeType": "VariableDeclaration",
                "scope": 34730,
                "src": "858:10:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 34728,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "858:6:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Rpc",
            "nameLocation": "824:3:108",
            "scope": 35773,
            "visibility": "public"
          },
          {
            "id": 34741,
            "nodeType": "StructDefinition",
            "src": "881:139:108",
            "nodes": [],
            "canonicalName": "VmSafe.DirEntry",
            "members": [
              {
                "constant": false,
                "id": 34732,
                "mutability": "mutable",
                "name": "errorMessage",
                "nameLocation": "914:12:108",
                "nodeType": "VariableDeclaration",
                "scope": 34741,
                "src": "907:19:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 34731,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "907:6:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34734,
                "mutability": "mutable",
                "name": "path",
                "nameLocation": "943:4:108",
                "nodeType": "VariableDeclaration",
                "scope": 34741,
                "src": "936:11:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 34733,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "936:6:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34736,
                "mutability": "mutable",
                "name": "depth",
                "nameLocation": "964:5:108",
                "nodeType": "VariableDeclaration",
                "scope": 34741,
                "src": "957:12:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint64",
                  "typeString": "uint64"
                },
                "typeName": {
                  "id": 34735,
                  "name": "uint64",
                  "nodeType": "ElementaryTypeName",
                  "src": "957:6:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34738,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "984:5:108",
                "nodeType": "VariableDeclaration",
                "scope": 34741,
                "src": "979:10:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 34737,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "979:4:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34740,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1004:9:108",
                "nodeType": "VariableDeclaration",
                "scope": 34741,
                "src": "999:14:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 34739,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "999:4:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DirEntry",
            "nameLocation": "888:8:108",
            "scope": 35773,
            "visibility": "public"
          },
          {
            "id": 34756,
            "nodeType": "StructDefinition",
            "src": "1026:193:108",
            "nodes": [],
            "canonicalName": "VmSafe.FsMetadata",
            "members": [
              {
                "constant": false,
                "id": 34743,
                "mutability": "mutable",
                "name": "isDir",
                "nameLocation": "1059:5:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1054:10:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 34742,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1054:4:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34745,
                "mutability": "mutable",
                "name": "isSymlink",
                "nameLocation": "1079:9:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1074:14:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 34744,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1074:4:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34747,
                "mutability": "mutable",
                "name": "length",
                "nameLocation": "1106:6:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1098:14:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 34746,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1098:7:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34749,
                "mutability": "mutable",
                "name": "readOnly",
                "nameLocation": "1127:8:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1122:13:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                },
                "typeName": {
                  "id": 34748,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "1122:4:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34751,
                "mutability": "mutable",
                "name": "modified",
                "nameLocation": "1153:8:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1145:16:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 34750,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1145:7:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34753,
                "mutability": "mutable",
                "name": "accessed",
                "nameLocation": "1179:8:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1171:16:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 34752,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1171:7:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 34755,
                "mutability": "mutable",
                "name": "created",
                "nameLocation": "1205:7:108",
                "nodeType": "VariableDeclaration",
                "scope": 34756,
                "src": "1197:15:108",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 34754,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1197:7:108",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FsMetadata",
            "nameLocation": "1033:10:108",
            "scope": 35773,
            "visibility": "public"
          },
          {
            "id": 34765,
            "nodeType": "FunctionDefinition",
            "src": "1269:81:108",
            "nodes": [],
            "functionSelector": "667f9d70",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "1278:4:108",
            "parameters": {
              "id": 34761,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34758,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "1291:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34765,
                  "src": "1283:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34757,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:108",
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
                  "id": 34760,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "1307:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34765,
                  "src": "1299:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34759,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1299:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1282:30:108"
            },
            "returnParameters": {
              "id": 34764,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34763,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "1344:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34765,
                  "src": "1336:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34762,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1336:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1335:14:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34778,
            "nodeType": "FunctionDefinition",
            "src": "1373:104:108",
            "nodes": [],
            "functionSelector": "e341eaa4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "sign",
            "nameLocation": "1382:4:108",
            "parameters": {
              "id": 34770,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34767,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1395:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34778,
                  "src": "1387:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1387:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34769,
                  "mutability": "mutable",
                  "name": "digest",
                  "nameLocation": "1415:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34778,
                  "src": "1407:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34768,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1407:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1386:36:108"
            },
            "returnParameters": {
              "id": 34777,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34772,
                  "mutability": "mutable",
                  "name": "v",
                  "nameLocation": "1452:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34778,
                  "src": "1446:7:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 34771,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1446:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34774,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "1463:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34778,
                  "src": "1455:9:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34773,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1455:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34776,
                  "mutability": "mutable",
                  "name": "s",
                  "nameLocation": "1474:1:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34778,
                  "src": "1466:9:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34775,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1466:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1445:31:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34785,
            "nodeType": "FunctionDefinition",
            "src": "1530:74:108",
            "nodes": [],
            "functionSelector": "ffa18649",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "addr",
            "nameLocation": "1539:4:108",
            "parameters": {
              "id": 34781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34780,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "1552:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34785,
                  "src": "1544:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1544:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1543:20:108"
            },
            "returnParameters": {
              "id": 34784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34783,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "1595:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34785,
                  "src": "1587:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34782,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1587:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1586:17:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34792,
            "nodeType": "FunctionDefinition",
            "src": "1645:72:108",
            "nodes": [],
            "functionSelector": "2d0335ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getNonce",
            "nameLocation": "1654:8:108",
            "parameters": {
              "id": 34788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34787,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "1671:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34792,
                  "src": "1663:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1663:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1662:17:108"
            },
            "returnParameters": {
              "id": 34791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34790,
                  "mutability": "mutable",
                  "name": "nonce",
                  "nameLocation": "1710:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34792,
                  "src": "1703:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 34789,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "1703:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1702:14:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34800,
            "nodeType": "FunctionDefinition",
            "src": "1779:84:108",
            "nodes": [],
            "functionSelector": "89160467",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ffi",
            "nameLocation": "1788:3:108",
            "parameters": {
              "id": 34796,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34795,
                  "mutability": "mutable",
                  "name": "commandInput",
                  "nameLocation": "1810:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "1792:30:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34793,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1792:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 34794,
                    "nodeType": "ArrayTypeName",
                    "src": "1792:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1791:32:108"
            },
            "returnParameters": {
              "id": 34799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34798,
                  "mutability": "mutable",
                  "name": "result",
                  "nameLocation": "1855:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34800,
                  "src": "1842:19:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34797,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1841:21:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34807,
            "nodeType": "FunctionDefinition",
            "src": "1902:70:108",
            "nodes": [],
            "functionSelector": "3d5923ee",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setEnv",
            "nameLocation": "1911:6:108",
            "parameters": {
              "id": 34805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34802,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "1934:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34807,
                  "src": "1918:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34801,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1918:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34804,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "1956:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34807,
                  "src": "1940:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34803,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1940:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1917:45:108"
            },
            "returnParameters": {
              "id": 34806,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1971:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34814,
            "nodeType": "FunctionDefinition",
            "src": "2031:74:108",
            "nodes": [],
            "functionSelector": "7ed1ec7d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2040:7:108",
            "parameters": {
              "id": 34810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34809,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2064:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34814,
                  "src": "2048:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34808,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2048:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2047:22:108"
            },
            "returnParameters": {
              "id": 34813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34812,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2098:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34814,
                  "src": "2093:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34811,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2093:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2092:12:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34821,
            "nodeType": "FunctionDefinition",
            "src": "2110:77:108",
            "nodes": [],
            "functionSelector": "c1978d1f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2119:7:108",
            "parameters": {
              "id": 34817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34816,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2143:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34821,
                  "src": "2127:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34815,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2127:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2126:22:108"
            },
            "returnParameters": {
              "id": 34820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34819,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2180:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34821,
                  "src": "2172:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2172:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2171:15:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34828,
            "nodeType": "FunctionDefinition",
            "src": "2192:75:108",
            "nodes": [],
            "functionSelector": "892a0c61",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2201:6:108",
            "parameters": {
              "id": 34824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34823,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2224:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34828,
                  "src": "2208:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34822,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2208:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2207:22:108"
            },
            "returnParameters": {
              "id": 34827,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34826,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2260:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34828,
                  "src": "2253:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 34825,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2253:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2252:14:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34835,
            "nodeType": "FunctionDefinition",
            "src": "2272:80:108",
            "nodes": [],
            "functionSelector": "350d56bf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "2281:10:108",
            "parameters": {
              "id": 34831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34830,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2308:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34835,
                  "src": "2292:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34829,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2292:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2291:22:108"
            },
            "returnParameters": {
              "id": 34834,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34833,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2345:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34835,
                  "src": "2337:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34832,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2337:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2336:15:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34842,
            "nodeType": "FunctionDefinition",
            "src": "2357:80:108",
            "nodes": [],
            "functionSelector": "97949042",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "2366:10:108",
            "parameters": {
              "id": 34838,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34837,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2393:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34842,
                  "src": "2377:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34836,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2377:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2376:22:108"
            },
            "returnParameters": {
              "id": 34841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34840,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2430:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34842,
                  "src": "2422:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34839,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2422:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2421:15:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34849,
            "nodeType": "FunctionDefinition",
            "src": "2442:85:108",
            "nodes": [],
            "functionSelector": "f877cb19",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "2451:9:108",
            "parameters": {
              "id": 34845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34844,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2477:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "2461:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34843,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2461:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2460:22:108"
            },
            "returnParameters": {
              "id": 34848,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34847,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2520:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34849,
                  "src": "2506:19:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34846,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2505:21:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34856,
            "nodeType": "FunctionDefinition",
            "src": "2532:83:108",
            "nodes": [],
            "functionSelector": "4d7baf06",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "2541:8:108",
            "parameters": {
              "id": 34852,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34851,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2566:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34856,
                  "src": "2550:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34850,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2550:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2549:22:108"
            },
            "returnParameters": {
              "id": 34855,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34854,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2608:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34856,
                  "src": "2595:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34853,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "2595:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2594:20:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34866,
            "nodeType": "FunctionDefinition",
            "src": "2665:106:108",
            "nodes": [],
            "functionSelector": "aaaddeaf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBool",
            "nameLocation": "2674:7:108",
            "parameters": {
              "id": 34861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34858,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2698:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34866,
                  "src": "2682:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34857,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2682:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34860,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2720:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34866,
                  "src": "2704:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34859,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2704:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2681:45:108"
            },
            "returnParameters": {
              "id": 34865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34864,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2764:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34866,
                  "src": "2750:19:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34862,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2750:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 34863,
                    "nodeType": "ArrayTypeName",
                    "src": "2750:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2749:21:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34876,
            "nodeType": "FunctionDefinition",
            "src": "2776:109:108",
            "nodes": [],
            "functionSelector": "f3dec099",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envUint",
            "nameLocation": "2785:7:108",
            "parameters": {
              "id": 34871,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34868,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2809:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34876,
                  "src": "2793:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34867,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2793:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34870,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2831:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34876,
                  "src": "2815:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34869,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2815:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2792:45:108"
            },
            "returnParameters": {
              "id": 34875,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34874,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2878:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34876,
                  "src": "2861:22:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34872,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2861:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 34873,
                    "nodeType": "ArrayTypeName",
                    "src": "2861:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2860:24:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34886,
            "nodeType": "FunctionDefinition",
            "src": "2890:107:108",
            "nodes": [],
            "functionSelector": "42181150",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envInt",
            "nameLocation": "2899:6:108",
            "parameters": {
              "id": 34881,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34878,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "2922:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34886,
                  "src": "2906:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34877,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2906:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34880,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "2944:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34886,
                  "src": "2928:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34879,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2928:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2905:45:108"
            },
            "returnParameters": {
              "id": 34885,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34884,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "2990:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34886,
                  "src": "2974:21:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34882,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2974:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 34883,
                    "nodeType": "ArrayTypeName",
                    "src": "2974:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2973:23:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34896,
            "nodeType": "FunctionDefinition",
            "src": "3002:112:108",
            "nodes": [],
            "functionSelector": "ad31b9fa",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envAddress",
            "nameLocation": "3011:10:108",
            "parameters": {
              "id": 34891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34888,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3038:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34896,
                  "src": "3022:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34887,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3022:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34890,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3060:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34896,
                  "src": "3044:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34889,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3044:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3021:45:108"
            },
            "returnParameters": {
              "id": 34895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34894,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3107:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34896,
                  "src": "3090:22:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34892,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3090:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 34893,
                    "nodeType": "ArrayTypeName",
                    "src": "3090:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3089:24:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34906,
            "nodeType": "FunctionDefinition",
            "src": "3119:112:108",
            "nodes": [],
            "functionSelector": "5af231c1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes32",
            "nameLocation": "3128:10:108",
            "parameters": {
              "id": 34901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34898,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3155:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34906,
                  "src": "3139:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34897,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3139:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34900,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3177:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34906,
                  "src": "3161:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34899,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3161:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3138:45:108"
            },
            "returnParameters": {
              "id": 34905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34904,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3224:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34906,
                  "src": "3207:22:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34902,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "3207:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 34903,
                    "nodeType": "ArrayTypeName",
                    "src": "3207:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3206:24:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34916,
            "nodeType": "FunctionDefinition",
            "src": "3236:110:108",
            "nodes": [],
            "functionSelector": "14b02bc9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envString",
            "nameLocation": "3245:9:108",
            "parameters": {
              "id": 34911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34908,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3271:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34916,
                  "src": "3255:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34907,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3255:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34910,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3293:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34916,
                  "src": "3277:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34909,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3277:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3254:45:108"
            },
            "returnParameters": {
              "id": 34915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34914,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3339:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34916,
                  "src": "3323:21:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34912,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "3323:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 34913,
                    "nodeType": "ArrayTypeName",
                    "src": "3323:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3322:23:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34926,
            "nodeType": "FunctionDefinition",
            "src": "3351:108:108",
            "nodes": [],
            "functionSelector": "ddc2651b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envBytes",
            "nameLocation": "3360:8:108",
            "parameters": {
              "id": 34921,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34918,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3385:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34926,
                  "src": "3369:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34917,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3369:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34920,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "3407:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34926,
                  "src": "3391:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34919,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3391:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3368:45:108"
            },
            "returnParameters": {
              "id": 34925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34924,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3452:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34926,
                  "src": "3437:20:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34922,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "3437:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 34923,
                    "nodeType": "ArrayTypeName",
                    "src": "3437:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3436:22:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34935,
            "nodeType": "FunctionDefinition",
            "src": "3517:86:108",
            "nodes": [],
            "functionSelector": "4777f3cf",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3526:5:108",
            "parameters": {
              "id": 34931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34928,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3548:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34935,
                  "src": "3532:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34927,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3532:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34930,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3559:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34935,
                  "src": "3554:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3554:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3531:41:108"
            },
            "returnParameters": {
              "id": 34934,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34933,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3596:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34935,
                  "src": "3591:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 34932,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3591:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3590:12:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34944,
            "nodeType": "FunctionDefinition",
            "src": "3608:92:108",
            "nodes": [],
            "functionSelector": "5e97348f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3617:5:108",
            "parameters": {
              "id": 34940,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34937,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3639:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34944,
                  "src": "3623:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34936,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3623:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34939,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3653:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34944,
                  "src": "3645:20:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3645:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3622:44:108"
            },
            "returnParameters": {
              "id": 34943,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34942,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3693:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34944,
                  "src": "3685:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 34941,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3685:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3684:15:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34953,
            "nodeType": "FunctionDefinition",
            "src": "3705:90:108",
            "nodes": [],
            "functionSelector": "bbcb713e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3714:5:108",
            "parameters": {
              "id": 34949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34946,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3736:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34953,
                  "src": "3720:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34945,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3720:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34948,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3749:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34953,
                  "src": "3742:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 34947,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3742:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3719:43:108"
            },
            "returnParameters": {
              "id": 34952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34951,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3788:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34953,
                  "src": "3781:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 34950,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3781:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3780:14:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34962,
            "nodeType": "FunctionDefinition",
            "src": "3800:92:108",
            "nodes": [],
            "functionSelector": "561fe540",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3809:5:108",
            "parameters": {
              "id": 34958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34955,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3831:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34962,
                  "src": "3815:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34954,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3815:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34957,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3845:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34962,
                  "src": "3837:20:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34956,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3837:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3814:44:108"
            },
            "returnParameters": {
              "id": 34961,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34960,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3885:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34962,
                  "src": "3877:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 34959,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3877:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3876:15:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34971,
            "nodeType": "FunctionDefinition",
            "src": "3897:92:108",
            "nodes": [],
            "functionSelector": "b4a85892",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "3906:5:108",
            "parameters": {
              "id": 34967,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34964,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "3928:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34971,
                  "src": "3912:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34963,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "3912:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34966,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "3942:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34971,
                  "src": "3934:20:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34965,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3934:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3911:44:108"
            },
            "returnParameters": {
              "id": 34970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34969,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3982:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34971,
                  "src": "3974:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 34968,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3974:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3973:15:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34980,
            "nodeType": "FunctionDefinition",
            "src": "3994:106:108",
            "nodes": [],
            "functionSelector": "d145736c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4003:5:108",
            "parameters": {
              "id": 34976,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34973,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4025:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34980,
                  "src": "4009:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34972,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4009:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34975,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4047:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34980,
                  "src": "4031:28:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34974,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4031:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4008:52:108"
            },
            "returnParameters": {
              "id": 34979,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34978,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4093:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34980,
                  "src": "4079:19:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34977,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4079:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4078:21:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 34989,
            "nodeType": "FunctionDefinition",
            "src": "4105:104:108",
            "nodes": [],
            "functionSelector": "b3e47705",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4114:5:108",
            "parameters": {
              "id": 34985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34982,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4136:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34989,
                  "src": "4120:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34981,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4120:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34984,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4157:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34989,
                  "src": "4142:27:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34983,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4142:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4119:51:108"
            },
            "returnParameters": {
              "id": 34988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34987,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4202:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 34989,
                  "src": "4189:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 34986,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "4189:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4188:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35002,
            "nodeType": "FunctionDefinition",
            "src": "4277:145:108",
            "nodes": [],
            "functionSelector": "eb85e83b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4286:5:108",
            "parameters": {
              "id": 34997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 34991,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4308:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35002,
                  "src": "4292:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34990,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4292:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34993,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4330:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35002,
                  "src": "4314:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 34992,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4314:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34996,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4353:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35002,
                  "src": "4337:28:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34994,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4337:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 34995,
                    "nodeType": "ArrayTypeName",
                    "src": "4337:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4291:75:108"
            },
            "returnParameters": {
              "id": 35001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35000,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4415:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35002,
                  "src": "4401:19:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 34998,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "4401:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 34999,
                    "nodeType": "ArrayTypeName",
                    "src": "4401:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4400:21:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35015,
            "nodeType": "FunctionDefinition",
            "src": "4427:151:108",
            "nodes": [],
            "functionSelector": "74318528",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4436:5:108",
            "parameters": {
              "id": 35010,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35004,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4458:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35015,
                  "src": "4442:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35003,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4442:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35006,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4480:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35015,
                  "src": "4464:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35005,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4464:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35009,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4506:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35015,
                  "src": "4487:31:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35007,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4487:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 35008,
                    "nodeType": "ArrayTypeName",
                    "src": "4487:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4441:78:108"
            },
            "returnParameters": {
              "id": 35014,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35013,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4571:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35015,
                  "src": "4554:22:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35011,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4554:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 35012,
                    "nodeType": "ArrayTypeName",
                    "src": "4554:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4553:24:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35028,
            "nodeType": "FunctionDefinition",
            "src": "4583:149:108",
            "nodes": [],
            "functionSelector": "4700d74b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4592:5:108",
            "parameters": {
              "id": 35023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35017,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4614:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35028,
                  "src": "4598:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35016,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4598:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35019,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4636:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35028,
                  "src": "4620:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35018,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35022,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4661:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35028,
                  "src": "4643:30:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35020,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4643:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 35021,
                    "nodeType": "ArrayTypeName",
                    "src": "4643:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4597:77:108"
            },
            "returnParameters": {
              "id": 35027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35026,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4725:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35028,
                  "src": "4709:21:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35024,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "4709:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 35025,
                    "nodeType": "ArrayTypeName",
                    "src": "4709:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4708:23:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35041,
            "nodeType": "FunctionDefinition",
            "src": "4737:151:108",
            "nodes": [],
            "functionSelector": "c74e9deb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4746:5:108",
            "parameters": {
              "id": 35036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35030,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4768:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35041,
                  "src": "4752:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35029,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4752:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35032,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4790:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35041,
                  "src": "4774:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35031,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4774:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35035,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4816:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35041,
                  "src": "4797:31:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35033,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4797:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 35034,
                    "nodeType": "ArrayTypeName",
                    "src": "4797:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4751:78:108"
            },
            "returnParameters": {
              "id": 35040,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35039,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "4881:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35041,
                  "src": "4864:22:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35037,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4864:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 35038,
                    "nodeType": "ArrayTypeName",
                    "src": "4864:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4863:24:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35054,
            "nodeType": "FunctionDefinition",
            "src": "4893:151:108",
            "nodes": [],
            "functionSelector": "2281f367",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "4902:5:108",
            "parameters": {
              "id": 35049,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35043,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "4924:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35054,
                  "src": "4908:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35042,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4908:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35045,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "4946:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35054,
                  "src": "4930:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35044,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4930:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35048,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "4972:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35054,
                  "src": "4953:31:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35046,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "4953:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 35047,
                    "nodeType": "ArrayTypeName",
                    "src": "4953:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4907:78:108"
            },
            "returnParameters": {
              "id": 35053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35052,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5037:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35054,
                  "src": "5020:22:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35050,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5020:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 35051,
                    "nodeType": "ArrayTypeName",
                    "src": "5020:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5019:24:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35067,
            "nodeType": "FunctionDefinition",
            "src": "5049:149:108",
            "nodes": [],
            "functionSelector": "859216bc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5058:5:108",
            "parameters": {
              "id": 35062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35056,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5080:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35067,
                  "src": "5064:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35055,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5064:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35058,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5102:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35067,
                  "src": "5086:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35057,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5086:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35061,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5127:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35067,
                  "src": "5109:30:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35059,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5109:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 35060,
                    "nodeType": "ArrayTypeName",
                    "src": "5109:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5063:77:108"
            },
            "returnParameters": {
              "id": 35066,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35065,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5191:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35067,
                  "src": "5175:21:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35063,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "5175:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 35064,
                    "nodeType": "ArrayTypeName",
                    "src": "5175:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5174:23:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35080,
            "nodeType": "FunctionDefinition",
            "src": "5203:147:108",
            "nodes": [],
            "functionSelector": "64bc3e64",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "envOr",
            "nameLocation": "5212:5:108",
            "parameters": {
              "id": 35075,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35069,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "5234:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35080,
                  "src": "5218:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35068,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5218:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35071,
                  "mutability": "mutable",
                  "name": "delim",
                  "nameLocation": "5256:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35080,
                  "src": "5240:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35070,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5240:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35074,
                  "mutability": "mutable",
                  "name": "defaultValue",
                  "nameLocation": "5280:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35080,
                  "src": "5263:29:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35072,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5263:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 35073,
                    "nodeType": "ArrayTypeName",
                    "src": "5263:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5217:76:108"
            },
            "returnParameters": {
              "id": 35079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35078,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "5343:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35080,
                  "src": "5328:20:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35076,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "5328:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 35077,
                    "nodeType": "ArrayTypeName",
                    "src": "5328:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5327:22:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35083,
            "nodeType": "FunctionDefinition",
            "src": "5399:27:108",
            "nodes": [],
            "functionSelector": "266cf109",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "record",
            "nameLocation": "5408:6:108",
            "parameters": {
              "id": 35081,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5414:2:108"
            },
            "returnParameters": {
              "id": 35082,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5425:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35094,
            "nodeType": "FunctionDefinition",
            "src": "5523:109:108",
            "nodes": [],
            "functionSelector": "65bc9481",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "accesses",
            "nameLocation": "5532:8:108",
            "parameters": {
              "id": 35086,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35085,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "5549:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35094,
                  "src": "5541:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35084,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5541:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5540:16:108"
            },
            "returnParameters": {
              "id": 35093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35089,
                  "mutability": "mutable",
                  "name": "readSlots",
                  "nameLocation": "5592:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35094,
                  "src": "5575:26:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35087,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5575:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 35088,
                    "nodeType": "ArrayTypeName",
                    "src": "5575:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35092,
                  "mutability": "mutable",
                  "name": "writeSlots",
                  "nameLocation": "5620:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35094,
                  "src": "5603:27:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35090,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "5603:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 35091,
                    "nodeType": "ArrayTypeName",
                    "src": "5603:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5574:57:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35101,
            "nodeType": "FunctionDefinition",
            "src": "5740:101:108",
            "nodes": [],
            "functionSelector": "8d1cc925",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCode",
            "nameLocation": "5749:7:108",
            "parameters": {
              "id": 35097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35096,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5773:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35101,
                  "src": "5757:28:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35095,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5757:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5756:30:108"
            },
            "returnParameters": {
              "id": 35100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35099,
                  "mutability": "mutable",
                  "name": "creationBytecode",
                  "nameLocation": "5823:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35101,
                  "src": "5810:29:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35098,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "5810:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5809:31:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35108,
            "nodeType": "FunctionDefinition",
            "src": "5949:108:108",
            "nodes": [],
            "functionSelector": "3ebf73b4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployedCode",
            "nameLocation": "5958:15:108",
            "parameters": {
              "id": 35104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35103,
                  "mutability": "mutable",
                  "name": "artifactPath",
                  "nameLocation": "5990:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35108,
                  "src": "5974:28:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35102,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "5974:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5973:30:108"
            },
            "returnParameters": {
              "id": 35107,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35106,
                  "mutability": "mutable",
                  "name": "runtimeBytecode",
                  "nameLocation": "6040:15:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35108,
                  "src": "6027:28:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35105,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6027:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6026:30:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35115,
            "nodeType": "FunctionDefinition",
            "src": "6102:67:108",
            "nodes": [],
            "functionSelector": "c657c718",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "label",
            "nameLocation": "6111:5:108",
            "parameters": {
              "id": 35113,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35110,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6125:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35115,
                  "src": "6117:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35109,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6117:7:108",
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
                  "id": 35112,
                  "mutability": "mutable",
                  "name": "newLabel",
                  "nameLocation": "6150:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35115,
                  "src": "6134:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35111,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6134:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6116:43:108"
            },
            "returnParameters": {
              "id": 35114,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6168:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35122,
            "nodeType": "FunctionDefinition",
            "src": "6222:81:108",
            "nodes": [],
            "functionSelector": "28a249b0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getLabel",
            "nameLocation": "6231:8:108",
            "parameters": {
              "id": 35118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35117,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "6248:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35122,
                  "src": "6240:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35116,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6240:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6239:17:108"
            },
            "returnParameters": {
              "id": 35121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35120,
                  "mutability": "mutable",
                  "name": "currentLabel",
                  "nameLocation": "6289:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35122,
                  "src": "6275:26:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6275:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6274:28:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35125,
            "nodeType": "FunctionDefinition",
            "src": "6470:30:108",
            "nodes": [],
            "functionSelector": "afc98040",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6479:9:108",
            "parameters": {
              "id": 35123,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6488:2:108"
            },
            "returnParameters": {
              "id": 35124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6499:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35130,
            "nodeType": "FunctionDefinition",
            "src": "6659:44:108",
            "nodes": [],
            "functionSelector": "e6962cdb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6668:9:108",
            "parameters": {
              "id": 35128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35127,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "6686:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35130,
                  "src": "6678:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35126,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6678:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6677:16:108"
            },
            "returnParameters": {
              "id": 35129,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6702:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35135,
            "nodeType": "FunctionDefinition",
            "src": "6866:48:108",
            "nodes": [],
            "functionSelector": "f67a965b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "broadcast",
            "nameLocation": "6875:9:108",
            "parameters": {
              "id": 35133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35132,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "6893:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35135,
                  "src": "6885:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35131,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6885:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6884:20:108"
            },
            "returnParameters": {
              "id": 35134,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6913:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35138,
            "nodeType": "FunctionDefinition",
            "src": "7087:35:108",
            "nodes": [],
            "functionSelector": "7fb5297f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7096:14:108",
            "parameters": {
              "id": 35136,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7110:2:108"
            },
            "returnParameters": {
              "id": 35137,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7121:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35143,
            "nodeType": "FunctionDefinition",
            "src": "7273:49:108",
            "nodes": [],
            "functionSelector": "7fec2a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7282:14:108",
            "parameters": {
              "id": 35141,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35140,
                  "mutability": "mutable",
                  "name": "signer",
                  "nameLocation": "7305:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35143,
                  "src": "7297:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35139,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7297:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7296:16:108"
            },
            "returnParameters": {
              "id": 35142,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7321:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35148,
            "nodeType": "FunctionDefinition",
            "src": "7477:53:108",
            "nodes": [],
            "functionSelector": "ce817d47",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startBroadcast",
            "nameLocation": "7486:14:108",
            "parameters": {
              "id": 35146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35145,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "7509:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35148,
                  "src": "7501:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35144,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7501:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7500:20:108"
            },
            "returnParameters": {
              "id": 35147,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7529:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35151,
            "nodeType": "FunctionDefinition",
            "src": "7580:34:108",
            "nodes": [],
            "functionSelector": "76eadd36",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopBroadcast",
            "nameLocation": "7589:13:108",
            "parameters": {
              "id": 35149,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7602:2:108"
            },
            "returnParameters": {
              "id": 35150,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7613:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35156,
            "nodeType": "FunctionDefinition",
            "src": "7669:66:108",
            "nodes": [],
            "functionSelector": "d930a0e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "projectRoot",
            "nameLocation": "7678:11:108",
            "parameters": {
              "id": 35152,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7689:2:108"
            },
            "returnParameters": {
              "id": 35155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35154,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7729:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35156,
                  "src": "7715:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35153,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7715:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7714:20:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35163,
            "nodeType": "FunctionDefinition",
            "src": "7831:83:108",
            "nodes": [],
            "functionSelector": "60f9bb11",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFile",
            "nameLocation": "7840:8:108",
            "parameters": {
              "id": 35159,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35158,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "7865:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35163,
                  "src": "7849:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35157,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7849:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7848:22:108"
            },
            "returnParameters": {
              "id": 35162,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35161,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "7908:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35163,
                  "src": "7894:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35160,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "7894:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7893:20:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35170,
            "nodeType": "FunctionDefinition",
            "src": "8010:88:108",
            "nodes": [],
            "functionSelector": "16ed7bc4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readFileBinary",
            "nameLocation": "8019:14:108",
            "parameters": {
              "id": 35166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35165,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8050:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35170,
                  "src": "8034:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35164,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8034:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8033:22:108"
            },
            "returnParameters": {
              "id": 35169,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35168,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8092:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35170,
                  "src": "8079:17:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35167,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8079:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8078:19:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35177,
            "nodeType": "FunctionDefinition",
            "src": "8145:83:108",
            "nodes": [],
            "functionSelector": "70f55728",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLine",
            "nameLocation": "8154:8:108",
            "parameters": {
              "id": 35173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35172,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8179:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35177,
                  "src": "8163:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35171,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8163:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8162:22:108"
            },
            "returnParameters": {
              "id": 35176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35175,
                  "mutability": "mutable",
                  "name": "line",
                  "nameLocation": "8222:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35177,
                  "src": "8208:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35174,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8208:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8207:20:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35184,
            "nodeType": "FunctionDefinition",
            "src": "8394:72:108",
            "nodes": [],
            "functionSelector": "897e0a97",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFile",
            "nameLocation": "8403:9:108",
            "parameters": {
              "id": 35182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35179,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8429:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35184,
                  "src": "8413:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35178,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8413:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35181,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8451:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35184,
                  "src": "8435:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35180,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8435:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8412:44:108"
            },
            "returnParameters": {
              "id": 35183,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8465:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35191,
            "nodeType": "FunctionDefinition",
            "src": "8641:77:108",
            "nodes": [],
            "functionSelector": "1f21fc80",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeFileBinary",
            "nameLocation": "8650:15:108",
            "parameters": {
              "id": 35189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35186,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8682:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35191,
                  "src": "8666:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35185,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8666:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35188,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8703:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35191,
                  "src": "8688:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35187,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "8688:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8665:43:108"
            },
            "returnParameters": {
              "id": 35190,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8717:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35198,
            "nodeType": "FunctionDefinition",
            "src": "8836:72:108",
            "nodes": [],
            "functionSelector": "619d897f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeLine",
            "nameLocation": "8845:9:108",
            "parameters": {
              "id": 35196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35193,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "8871:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35198,
                  "src": "8855:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35192,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8855:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35195,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "8893:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35198,
                  "src": "8877:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35194,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "8877:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8854:44:108"
            },
            "returnParameters": {
              "id": 35197,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "8907:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35203,
            "nodeType": "FunctionDefinition",
            "src": "9067:50:108",
            "nodes": [],
            "functionSelector": "48c3241f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "closeFile",
            "nameLocation": "9076:9:108",
            "parameters": {
              "id": 35201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35200,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9102:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35203,
                  "src": "9086:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35199,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9086:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9085:22:108"
            },
            "returnParameters": {
              "id": 35202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9116:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35208,
            "nodeType": "FunctionDefinition",
            "src": "9443:51:108",
            "nodes": [],
            "functionSelector": "f1afe04d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeFile",
            "nameLocation": "9452:10:108",
            "parameters": {
              "id": 35206,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35205,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9479:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35208,
                  "src": "9463:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35204,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9463:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9462:22:108"
            },
            "returnParameters": {
              "id": 35207,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9493:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35215,
            "nodeType": "FunctionDefinition",
            "src": "9892:66:108",
            "nodes": [],
            "functionSelector": "168b64d3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createDir",
            "nameLocation": "9901:9:108",
            "parameters": {
              "id": 35213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35210,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "9927:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35215,
                  "src": "9911:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35209,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "9911:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35212,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "9938:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35215,
                  "src": "9933:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35211,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "9933:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9910:38:108"
            },
            "returnParameters": {
              "id": 35214,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "9957:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35222,
            "nodeType": "FunctionDefinition",
            "src": "10340:66:108",
            "nodes": [],
            "functionSelector": "45c62011",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "removeDir",
            "nameLocation": "10349:9:108",
            "parameters": {
              "id": 35220,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35217,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10375:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35222,
                  "src": "10359:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35216,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10359:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35219,
                  "mutability": "mutable",
                  "name": "recursive",
                  "nameLocation": "10386:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35222,
                  "src": "10381:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35218,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10381:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10358:38:108"
            },
            "returnParameters": {
              "id": 35221,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "10405:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35231,
            "nodeType": "FunctionDefinition",
            "src": "10653:89:108",
            "nodes": [],
            "functionSelector": "c4bc59e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10662:7:108",
            "parameters": {
              "id": 35225,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35224,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10686:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35231,
                  "src": "10670:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35223,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10670:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10669:22:108"
            },
            "returnParameters": {
              "id": 35230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35229,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10733:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35231,
                  "src": "10715:25:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$34741_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35227,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 35226,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10715:8:108"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34741,
                        "src": "10715:8:108"
                      },
                      "referencedDeclaration": 34741,
                      "src": "10715:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$34741_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 35228,
                    "nodeType": "ArrayTypeName",
                    "src": "10715:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$34741_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10714:27:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35242,
            "nodeType": "FunctionDefinition",
            "src": "10747:106:108",
            "nodes": [],
            "functionSelector": "1497876c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10756:7:108",
            "parameters": {
              "id": 35236,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35233,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10780:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35242,
                  "src": "10764:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35232,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10764:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35235,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10793:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35242,
                  "src": "10786:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 35234,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10786:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10763:39:108"
            },
            "returnParameters": {
              "id": 35241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35240,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10844:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35242,
                  "src": "10826:25:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$34741_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35238,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 35237,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10826:8:108"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34741,
                        "src": "10826:8:108"
                      },
                      "referencedDeclaration": 34741,
                      "src": "10826:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$34741_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 35239,
                    "nodeType": "ArrayTypeName",
                    "src": "10826:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$34741_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10825:27:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35255,
            "nodeType": "FunctionDefinition",
            "src": "10858:148:108",
            "nodes": [],
            "functionSelector": "8102d70d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readDir",
            "nameLocation": "10867:7:108",
            "parameters": {
              "id": 35249,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35244,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "10891:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35255,
                  "src": "10875:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35243,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "10875:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35246,
                  "mutability": "mutable",
                  "name": "maxDepth",
                  "nameLocation": "10904:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35255,
                  "src": "10897:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 35245,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "10897:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35248,
                  "mutability": "mutable",
                  "name": "followLinks",
                  "nameLocation": "10919:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35255,
                  "src": "10914:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35247,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "10914:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10874:57:108"
            },
            "returnParameters": {
              "id": 35254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35253,
                  "mutability": "mutable",
                  "name": "entries",
                  "nameLocation": "10997:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35255,
                  "src": "10979:25:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_DirEntry_$34741_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.DirEntry[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35251,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 35250,
                        "name": "DirEntry",
                        "nameLocations": [
                          "10979:8:108"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34741,
                        "src": "10979:8:108"
                      },
                      "referencedDeclaration": 34741,
                      "src": "10979:8:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DirEntry_$34741_storage_ptr",
                        "typeString": "struct VmSafe.DirEntry"
                      }
                    },
                    "id": 35252,
                    "nodeType": "ArrayTypeName",
                    "src": "10979:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_DirEntry_$34741_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.DirEntry[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10978:27:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35262,
            "nodeType": "FunctionDefinition",
            "src": "11260:93:108",
            "nodes": [],
            "functionSelector": "9f5684a2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readLink",
            "nameLocation": "11269:8:108",
            "parameters": {
              "id": 35258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35257,
                  "mutability": "mutable",
                  "name": "linkPath",
                  "nameLocation": "11294:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35262,
                  "src": "11278:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35256,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11278:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11277:26:108"
            },
            "returnParameters": {
              "id": 35261,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35260,
                  "mutability": "mutable",
                  "name": "targetPath",
                  "nameLocation": "11341:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35262,
                  "src": "11327:24:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35259,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11327:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11326:26:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35270,
            "nodeType": "FunctionDefinition",
            "src": "11450:93:108",
            "nodes": [],
            "functionSelector": "af368a08",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fsMetadata",
            "nameLocation": "11459:10:108",
            "parameters": {
              "id": 35265,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35264,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "11486:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35270,
                  "src": "11470:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35263,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11470:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11469:22:108"
            },
            "returnParameters": {
              "id": 35269,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35268,
                  "mutability": "mutable",
                  "name": "metadata",
                  "nameLocation": "11533:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35270,
                  "src": "11515:26:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FsMetadata_$34756_memory_ptr",
                    "typeString": "struct VmSafe.FsMetadata"
                  },
                  "typeName": {
                    "id": 35267,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 35266,
                      "name": "FsMetadata",
                      "nameLocations": [
                        "11515:10:108"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 34756,
                      "src": "11515:10:108"
                    },
                    "referencedDeclaration": 34756,
                    "src": "11515:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FsMetadata_$34756_storage_ptr",
                      "typeString": "struct VmSafe.FsMetadata"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11514:28:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35277,
            "nodeType": "FunctionDefinition",
            "src": "11583:88:108",
            "nodes": [],
            "functionSelector": "56ca623e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11592:8:108",
            "parameters": {
              "id": 35273,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35272,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11609:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35277,
                  "src": "11601:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35271,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "11601:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11600:15:108"
            },
            "returnParameters": {
              "id": 35276,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35275,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11653:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35277,
                  "src": "11639:30:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35274,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11639:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11638:32:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35284,
            "nodeType": "FunctionDefinition",
            "src": "11676:95:108",
            "nodes": [],
            "functionSelector": "71aad10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11685:8:108",
            "parameters": {
              "id": 35280,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35279,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11709:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35284,
                  "src": "11694:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35278,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "11694:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11693:22:108"
            },
            "returnParameters": {
              "id": 35283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35282,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11753:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35284,
                  "src": "11739:30:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35281,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11739:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11738:32:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35291,
            "nodeType": "FunctionDefinition",
            "src": "11776:88:108",
            "nodes": [],
            "functionSelector": "b11a19e8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11785:8:108",
            "parameters": {
              "id": 35287,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35286,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11802:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35291,
                  "src": "11794:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35285,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "11794:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11793:15:108"
            },
            "returnParameters": {
              "id": 35290,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35289,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11846:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35291,
                  "src": "11832:30:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35288,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11832:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11831:32:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35298,
            "nodeType": "FunctionDefinition",
            "src": "11869:85:108",
            "nodes": [],
            "functionSelector": "71dce7da",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11878:8:108",
            "parameters": {
              "id": 35294,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35293,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11892:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35298,
                  "src": "11887:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35292,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "11887:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11886:12:108"
            },
            "returnParameters": {
              "id": 35297,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35296,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "11936:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35298,
                  "src": "11922:30:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35295,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "11922:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11921:32:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35305,
            "nodeType": "FunctionDefinition",
            "src": "11959:88:108",
            "nodes": [],
            "functionSelector": "6900a3ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "11968:8:108",
            "parameters": {
              "id": 35301,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35300,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "11985:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35305,
                  "src": "11977:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35299,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11977:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11976:15:108"
            },
            "returnParameters": {
              "id": 35304,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35303,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12029:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35305,
                  "src": "12015:30:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35302,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12015:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12014:32:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35312,
            "nodeType": "FunctionDefinition",
            "src": "12052:87:108",
            "nodes": [],
            "functionSelector": "a322c40e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "toString",
            "nameLocation": "12061:8:108",
            "parameters": {
              "id": 35308,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35307,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "12077:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35312,
                  "src": "12070:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 35306,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12070:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12069:14:108"
            },
            "returnParameters": {
              "id": 35311,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35310,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12121:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35312,
                  "src": "12107:30:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35309,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12107:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12106:32:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35319,
            "nodeType": "FunctionDefinition",
            "src": "12180:103:108",
            "nodes": [],
            "functionSelector": "8f5d232d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes",
            "nameLocation": "12189:10:108",
            "parameters": {
              "id": 35315,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35314,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12216:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35319,
                  "src": "12200:32:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35313,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12200:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12199:34:108"
            },
            "returnParameters": {
              "id": 35318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35317,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12270:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35319,
                  "src": "12257:24:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35316,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "12257:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12256:26:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35326,
            "nodeType": "FunctionDefinition",
            "src": "12288:100:108",
            "nodes": [],
            "functionSelector": "c6ce059d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseAddress",
            "nameLocation": "12297:12:108",
            "parameters": {
              "id": 35322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35321,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12326:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35326,
                  "src": "12310:32:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35320,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12310:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12309:34:108"
            },
            "returnParameters": {
              "id": 35325,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35324,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12375:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35326,
                  "src": "12367:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35323,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "12367:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12366:21:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35333,
            "nodeType": "FunctionDefinition",
            "src": "12393:97:108",
            "nodes": [],
            "functionSelector": "fa91454d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseUint",
            "nameLocation": "12402:9:108",
            "parameters": {
              "id": 35329,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35328,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12428:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35333,
                  "src": "12412:32:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35327,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12412:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12411:34:108"
            },
            "returnParameters": {
              "id": 35332,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35331,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12477:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35333,
                  "src": "12469:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35330,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12469:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12468:21:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35340,
            "nodeType": "FunctionDefinition",
            "src": "12495:95:108",
            "nodes": [],
            "functionSelector": "42346c5e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseInt",
            "nameLocation": "12504:8:108",
            "parameters": {
              "id": 35336,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35335,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12529:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35340,
                  "src": "12513:32:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35334,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12513:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12512:34:108"
            },
            "returnParameters": {
              "id": 35339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35338,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12577:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35340,
                  "src": "12570:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 35337,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12570:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12569:20:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35347,
            "nodeType": "FunctionDefinition",
            "src": "12595:100:108",
            "nodes": [],
            "functionSelector": "087e6e81",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBytes32",
            "nameLocation": "12604:12:108",
            "parameters": {
              "id": 35343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35342,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12633:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35347,
                  "src": "12617:32:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35341,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12617:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12616:34:108"
            },
            "returnParameters": {
              "id": 35346,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35345,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12682:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35347,
                  "src": "12674:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35344,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "12674:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12673:21:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35354,
            "nodeType": "FunctionDefinition",
            "src": "12700:94:108",
            "nodes": [],
            "functionSelector": "974ef924",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseBool",
            "nameLocation": "12709:9:108",
            "parameters": {
              "id": 35350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35349,
                  "mutability": "mutable",
                  "name": "stringifiedValue",
                  "nameLocation": "12735:16:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35354,
                  "src": "12719:32:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35348,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "12719:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12718:34:108"
            },
            "returnParameters": {
              "id": 35353,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35352,
                  "mutability": "mutable",
                  "name": "parsedValue",
                  "nameLocation": "12781:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35354,
                  "src": "12776:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35351,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12776:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12775:18:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35357,
            "nodeType": "FunctionDefinition",
            "src": "12838:31:108",
            "nodes": [],
            "functionSelector": "41af2f52",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "recordLogs",
            "nameLocation": "12847:10:108",
            "parameters": {
              "id": 35355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12857:2:108"
            },
            "returnParameters": {
              "id": 35356,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12868:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35364,
            "nodeType": "FunctionDefinition",
            "src": "12908:64:108",
            "nodes": [],
            "functionSelector": "191553a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getRecordedLogs",
            "nameLocation": "12917:15:108",
            "parameters": {
              "id": 35358,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "12932:2:108"
            },
            "returnParameters": {
              "id": 35363,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35362,
                  "mutability": "mutable",
                  "name": "logs",
                  "nameLocation": "12966:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35364,
                  "src": "12953:17:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Log_$34725_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Log[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35360,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 35359,
                        "name": "Log",
                        "nameLocations": [
                          "12953:3:108"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34725,
                        "src": "12953:3:108"
                      },
                      "referencedDeclaration": 34725,
                      "src": "12953:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Log_$34725_storage_ptr",
                        "typeString": "struct VmSafe.Log"
                      }
                    },
                    "id": 35361,
                    "nodeType": "ArrayTypeName",
                    "src": "12953:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Log_$34725_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Log[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12952:19:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35373,
            "nodeType": "FunctionDefinition",
            "src": "13107:102:108",
            "nodes": [],
            "functionSelector": "6229498b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13116:9:108",
            "parameters": {
              "id": 35369,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35366,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13142:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35373,
                  "src": "13126:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35365,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13126:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35368,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13159:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35373,
                  "src": "13152:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 35367,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13152:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13125:40:108"
            },
            "returnParameters": {
              "id": 35372,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35371,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13197:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35373,
                  "src": "13189:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35370,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13189:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13188:20:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35384,
            "nodeType": "FunctionDefinition",
            "src": "13325:158:108",
            "nodes": [],
            "functionSelector": "6bcb2c1b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deriveKey",
            "nameLocation": "13334:9:108",
            "parameters": {
              "id": 35380,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35375,
                  "mutability": "mutable",
                  "name": "mnemonic",
                  "nameLocation": "13360:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35384,
                  "src": "13344:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35374,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13344:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35377,
                  "mutability": "mutable",
                  "name": "derivationPath",
                  "nameLocation": "13386:14:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35384,
                  "src": "13370:30:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35376,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "13370:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35379,
                  "mutability": "mutable",
                  "name": "index",
                  "nameLocation": "13409:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35384,
                  "src": "13402:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint32",
                    "typeString": "uint32"
                  },
                  "typeName": {
                    "id": 35378,
                    "name": "uint32",
                    "nodeType": "ElementaryTypeName",
                    "src": "13402:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint32",
                      "typeString": "uint32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13343:72:108"
            },
            "returnParameters": {
              "id": 35383,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35382,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13471:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35384,
                  "src": "13463:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13463:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13462:20:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35391,
            "nodeType": "FunctionDefinition",
            "src": "13564:76:108",
            "nodes": [],
            "functionSelector": "22100064",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rememberKey",
            "nameLocation": "13573:11:108",
            "parameters": {
              "id": 35387,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35386,
                  "mutability": "mutable",
                  "name": "privateKey",
                  "nameLocation": "13593:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35391,
                  "src": "13585:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13585:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13584:20:108"
            },
            "returnParameters": {
              "id": 35390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35389,
                  "mutability": "mutable",
                  "name": "keyAddr",
                  "nameLocation": "13631:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35391,
                  "src": "13623:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35388,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "13623:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13622:17:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35400,
            "nodeType": "FunctionDefinition",
            "src": "14673:114:108",
            "nodes": [],
            "functionSelector": "85940ef1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14682:9:108",
            "parameters": {
              "id": 35396,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35393,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14708:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35400,
                  "src": "14692:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35392,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14692:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35395,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "14730:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35400,
                  "src": "14714:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35394,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14714:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14691:43:108"
            },
            "returnParameters": {
              "id": 35399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35398,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14771:14:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35400,
                  "src": "14758:27:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35397,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14758:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14757:29:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35407,
            "nodeType": "FunctionDefinition",
            "src": "14792:93:108",
            "nodes": [],
            "functionSelector": "6a82600a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJson",
            "nameLocation": "14801:9:108",
            "parameters": {
              "id": 35403,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35402,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "14827:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35407,
                  "src": "14811:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35401,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "14811:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14810:22:108"
            },
            "returnParameters": {
              "id": 35406,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35405,
                  "mutability": "mutable",
                  "name": "abiEncodedData",
                  "nameLocation": "14869:14:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35407,
                  "src": "14856:27:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35404,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "14856:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14855:29:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35416,
            "nodeType": "FunctionDefinition",
            "src": "15273:84:108",
            "nodes": [],
            "functionSelector": "addde2b6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUint",
            "nameLocation": "15282:13:108",
            "parameters": {
              "id": 35412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35409,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35416,
                  "src": "15296:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35408,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15296:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35411,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35416,
                  "src": "15313:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35410,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15313:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15295:34:108"
            },
            "returnParameters": {
              "id": 35415,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35414,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35416,
                  "src": "15348:7:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15348:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15347:9:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35426,
            "nodeType": "FunctionDefinition",
            "src": "15362:98:108",
            "nodes": [],
            "functionSelector": "522074ab",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonUintArray",
            "nameLocation": "15371:18:108",
            "parameters": {
              "id": 35421,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35418,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35426,
                  "src": "15390:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35417,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15390:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35420,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35426,
                  "src": "15407:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35419,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15407:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15389:34:108"
            },
            "returnParameters": {
              "id": 35425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35424,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35426,
                  "src": "15442:16:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35422,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15442:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 35423,
                    "nodeType": "ArrayTypeName",
                    "src": "15442:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15441:18:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35435,
            "nodeType": "FunctionDefinition",
            "src": "15465:82:108",
            "nodes": [],
            "functionSelector": "7b048ccd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonInt",
            "nameLocation": "15474:12:108",
            "parameters": {
              "id": 35431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35428,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35435,
                  "src": "15487:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35427,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15487:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35430,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35435,
                  "src": "15504:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35429,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15504:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15486:34:108"
            },
            "returnParameters": {
              "id": 35434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35433,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35435,
                  "src": "15539:6:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 35432,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15539:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15538:8:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35445,
            "nodeType": "FunctionDefinition",
            "src": "15552:96:108",
            "nodes": [],
            "functionSelector": "9983c28a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonIntArray",
            "nameLocation": "15561:17:108",
            "parameters": {
              "id": 35440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35437,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35445,
                  "src": "15579:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35436,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15579:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35439,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35445,
                  "src": "15596:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35438,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15596:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15578:34:108"
            },
            "returnParameters": {
              "id": 35444,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35443,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35445,
                  "src": "15631:15:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_memory_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35441,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "15631:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 35442,
                    "nodeType": "ArrayTypeName",
                    "src": "15631:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15630:17:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35454,
            "nodeType": "FunctionDefinition",
            "src": "15653:81:108",
            "nodes": [],
            "functionSelector": "9f86dc91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBool",
            "nameLocation": "15662:13:108",
            "parameters": {
              "id": 35450,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35447,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35454,
                  "src": "15676:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35446,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15676:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35449,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35454,
                  "src": "15693:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35448,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15693:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15675:34:108"
            },
            "returnParameters": {
              "id": 35453,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35452,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35454,
                  "src": "15728:4:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35451,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "15728:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15727:6:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35464,
            "nodeType": "FunctionDefinition",
            "src": "15739:95:108",
            "nodes": [],
            "functionSelector": "91f3b94f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBoolArray",
            "nameLocation": "15748:18:108",
            "parameters": {
              "id": 35459,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35456,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35464,
                  "src": "15767:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35455,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15767:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35458,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35464,
                  "src": "15784:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35457,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15784:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15766:34:108"
            },
            "returnParameters": {
              "id": 35463,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35462,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35464,
                  "src": "15819:13:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_memory_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35460,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "15819:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 35461,
                    "nodeType": "ArrayTypeName",
                    "src": "15819:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15818:15:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35473,
            "nodeType": "FunctionDefinition",
            "src": "15839:87:108",
            "nodes": [],
            "functionSelector": "1e19e657",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddress",
            "nameLocation": "15848:16:108",
            "parameters": {
              "id": 35469,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35466,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35473,
                  "src": "15865:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35465,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15865:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35468,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35473,
                  "src": "15882:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35467,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15882:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15864:34:108"
            },
            "returnParameters": {
              "id": 35472,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35471,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35473,
                  "src": "15917:7:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35470,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "15917:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15916:9:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35483,
            "nodeType": "FunctionDefinition",
            "src": "15931:101:108",
            "nodes": [],
            "functionSelector": "2fce7883",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonAddressArray",
            "nameLocation": "15940:21:108",
            "parameters": {
              "id": 35478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35475,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35483,
                  "src": "15962:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35474,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15962:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35477,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35483,
                  "src": "15979:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35476,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "15979:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15961:34:108"
            },
            "returnParameters": {
              "id": 35482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35481,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35483,
                  "src": "16014:16:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35479,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "16014:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 35480,
                    "nodeType": "ArrayTypeName",
                    "src": "16014:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16013:18:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35492,
            "nodeType": "FunctionDefinition",
            "src": "16037:92:108",
            "nodes": [],
            "functionSelector": "49c4fac8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonString",
            "nameLocation": "16046:15:108",
            "parameters": {
              "id": 35488,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35485,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35492,
                  "src": "16062:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35484,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16062:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35487,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35492,
                  "src": "16079:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35486,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16079:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16061:34:108"
            },
            "returnParameters": {
              "id": 35491,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35490,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35492,
                  "src": "16114:13:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35489,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16114:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16113:15:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35502,
            "nodeType": "FunctionDefinition",
            "src": "16134:99:108",
            "nodes": [],
            "functionSelector": "498fdcf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonStringArray",
            "nameLocation": "16143:20:108",
            "parameters": {
              "id": 35497,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35494,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35502,
                  "src": "16164:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35493,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16164:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35496,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35502,
                  "src": "16181:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35495,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16181:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16163:34:108"
            },
            "returnParameters": {
              "id": 35501,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35500,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35502,
                  "src": "16216:15:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35498,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16216:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 35499,
                    "nodeType": "ArrayTypeName",
                    "src": "16216:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16215:17:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35511,
            "nodeType": "FunctionDefinition",
            "src": "16238:90:108",
            "nodes": [],
            "functionSelector": "fd921be8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes",
            "nameLocation": "16247:14:108",
            "parameters": {
              "id": 35507,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35504,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35511,
                  "src": "16262:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35503,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16262:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35506,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35511,
                  "src": "16279:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35505,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16279:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16261:34:108"
            },
            "returnParameters": {
              "id": 35510,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35509,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35511,
                  "src": "16314:12:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35508,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "16314:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16313:14:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35521,
            "nodeType": "FunctionDefinition",
            "src": "16333:97:108",
            "nodes": [],
            "functionSelector": "6631aa99",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytesArray",
            "nameLocation": "16342:19:108",
            "parameters": {
              "id": 35516,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35513,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35521,
                  "src": "16362:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35512,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16362:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35515,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35521,
                  "src": "16379:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35514,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16379:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16361:34:108"
            },
            "returnParameters": {
              "id": 35520,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35519,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35521,
                  "src": "16414:14:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35517,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "16414:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 35518,
                    "nodeType": "ArrayTypeName",
                    "src": "16414:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16413:16:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35530,
            "nodeType": "FunctionDefinition",
            "src": "16435:87:108",
            "nodes": [],
            "functionSelector": "1777e59d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32",
            "nameLocation": "16444:16:108",
            "parameters": {
              "id": 35526,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35523,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35530,
                  "src": "16461:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35522,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16461:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35525,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35530,
                  "src": "16478:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35524,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16478:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16460:34:108"
            },
            "returnParameters": {
              "id": 35529,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35528,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35530,
                  "src": "16513:7:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35527,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "16513:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16512:9:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35540,
            "nodeType": "FunctionDefinition",
            "src": "16527:101:108",
            "nodes": [],
            "functionSelector": "91c75bc3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonBytes32Array",
            "nameLocation": "16536:21:108",
            "parameters": {
              "id": 35535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35532,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35540,
                  "src": "16558:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35531,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16558:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35534,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35540,
                  "src": "16575:15:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35533,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16575:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16557:34:108"
            },
            "returnParameters": {
              "id": 35539,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35538,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 35540,
                  "src": "16610:16:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35536,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "16610:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 35537,
                    "nodeType": "ArrayTypeName",
                    "src": "16610:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16609:18:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35550,
            "nodeType": "FunctionDefinition",
            "src": "16681:106:108",
            "nodes": [],
            "functionSelector": "213e4198",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "parseJsonKeys",
            "nameLocation": "16690:13:108",
            "parameters": {
              "id": 35545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35542,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "16720:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35550,
                  "src": "16704:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35541,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16704:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35544,
                  "mutability": "mutable",
                  "name": "key",
                  "nameLocation": "16742:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35550,
                  "src": "16726:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35543,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "16726:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16703:43:108"
            },
            "returnParameters": {
              "id": 35549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35548,
                  "mutability": "mutable",
                  "name": "keys",
                  "nameLocation": "16781:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35550,
                  "src": "16765:20:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35546,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "16765:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 35547,
                    "nodeType": "ArrayTypeName",
                    "src": "16765:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16764:22:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35561,
            "nodeType": "FunctionDefinition",
            "src": "16983:142:108",
            "nodes": [],
            "functionSelector": "ac22e971",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "16992:13:108",
            "parameters": {
              "id": 35557,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35552,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17022:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35561,
                  "src": "17006:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35551,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17006:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35554,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17049:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35561,
                  "src": "17033:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35553,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17033:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35556,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17064:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35561,
                  "src": "17059:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35555,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17059:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17005:65:108"
            },
            "returnParameters": {
              "id": 35560,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35559,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17119:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35561,
                  "src": "17105:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35558,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17105:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17104:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35572,
            "nodeType": "FunctionDefinition",
            "src": "17130:145:108",
            "nodes": [],
            "functionSelector": "129e9002",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "17139:13:108",
            "parameters": {
              "id": 35568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35563,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17169:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35572,
                  "src": "17153:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35562,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17153:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35565,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17196:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35572,
                  "src": "17180:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35564,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17180:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35567,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17214:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35572,
                  "src": "17206:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35566,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17206:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17152:68:108"
            },
            "returnParameters": {
              "id": 35571,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35570,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17269:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35572,
                  "src": "17255:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35569,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17255:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17254:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35583,
            "nodeType": "FunctionDefinition",
            "src": "17280:143:108",
            "nodes": [],
            "functionSelector": "3f33db60",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "17289:12:108",
            "parameters": {
              "id": 35579,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35574,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17318:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35583,
                  "src": "17302:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35573,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17302:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35576,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17345:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35583,
                  "src": "17329:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35575,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17329:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35578,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17362:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35583,
                  "src": "17355:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 35577,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17355:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17301:67:108"
            },
            "returnParameters": {
              "id": 35582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35581,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17417:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35583,
                  "src": "17403:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35580,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17403:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17402:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35594,
            "nodeType": "FunctionDefinition",
            "src": "17428:148:108",
            "nodes": [],
            "functionSelector": "972c6062",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "17437:16:108",
            "parameters": {
              "id": 35590,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35585,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17470:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35594,
                  "src": "17454:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35584,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17454:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35587,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17497:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35594,
                  "src": "17481:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35586,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17481:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35589,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17515:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35594,
                  "src": "17507:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35588,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "17507:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17453:68:108"
            },
            "returnParameters": {
              "id": 35593,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35592,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17570:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35594,
                  "src": "17556:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35591,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17556:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17555:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35605,
            "nodeType": "FunctionDefinition",
            "src": "17581:148:108",
            "nodes": [],
            "functionSelector": "2d812b44",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "17590:16:108",
            "parameters": {
              "id": 35601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35596,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17623:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35605,
                  "src": "17607:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35595,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17607:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35598,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17650:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35605,
                  "src": "17634:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35597,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17634:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35600,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17668:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35605,
                  "src": "17660:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35599,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "17660:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17606:68:108"
            },
            "returnParameters": {
              "id": 35604,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35603,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17723:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35605,
                  "src": "17709:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35602,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17709:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17708:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35616,
            "nodeType": "FunctionDefinition",
            "src": "17734:155:108",
            "nodes": [],
            "functionSelector": "88da6d35",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "17743:15:108",
            "parameters": {
              "id": 35612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35607,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17775:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35616,
                  "src": "17759:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35606,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17759:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35609,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17802:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35616,
                  "src": "17786:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35608,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17786:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35611,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17828:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35616,
                  "src": "17812:21:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35610,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17812:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17758:76:108"
            },
            "returnParameters": {
              "id": 35615,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35614,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "17883:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35616,
                  "src": "17869:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35613,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17869:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17868:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35627,
            "nodeType": "FunctionDefinition",
            "src": "17894:153:108",
            "nodes": [],
            "functionSelector": "f21d52c7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "17903:14:108",
            "parameters": {
              "id": 35623,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35618,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "17934:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35627,
                  "src": "17918:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35617,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17918:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35620,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "17961:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35627,
                  "src": "17945:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35619,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "17945:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35622,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "17986:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35627,
                  "src": "17971:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35621,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "17971:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17917:75:108"
            },
            "returnParameters": {
              "id": 35626,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35625,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18041:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35627,
                  "src": "18027:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35624,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18027:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18026:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35639,
            "nodeType": "FunctionDefinition",
            "src": "18053:154:108",
            "nodes": [],
            "functionSelector": "92925aa1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBool",
            "nameLocation": "18062:13:108",
            "parameters": {
              "id": 35635,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35629,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18092:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35639,
                  "src": "18076:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35628,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18076:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35631,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18119:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35639,
                  "src": "18103:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35630,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18103:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35634,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18145:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35639,
                  "src": "18129:22:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bool_$dyn_calldata_ptr",
                    "typeString": "bool[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35632,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "18129:4:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 35633,
                    "nodeType": "ArrayTypeName",
                    "src": "18129:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bool_$dyn_storage_ptr",
                      "typeString": "bool[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18075:77:108"
            },
            "returnParameters": {
              "id": 35638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35637,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18201:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35639,
                  "src": "18187:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35636,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18187:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18186:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35651,
            "nodeType": "FunctionDefinition",
            "src": "18212:157:108",
            "nodes": [],
            "functionSelector": "fee9a469",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeUint",
            "nameLocation": "18221:13:108",
            "parameters": {
              "id": 35647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35641,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18251:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35651,
                  "src": "18235:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35640,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18235:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35643,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18278:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35651,
                  "src": "18262:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35642,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18262:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35646,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18307:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35651,
                  "src": "18288:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35644,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18288:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 35645,
                    "nodeType": "ArrayTypeName",
                    "src": "18288:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18234:80:108"
            },
            "returnParameters": {
              "id": 35650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35649,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18363:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35651,
                  "src": "18349:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35648,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18349:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18348:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35663,
            "nodeType": "FunctionDefinition",
            "src": "18374:155:108",
            "nodes": [],
            "functionSelector": "7676e127",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeInt",
            "nameLocation": "18383:12:108",
            "parameters": {
              "id": 35659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35653,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18412:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35663,
                  "src": "18396:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35652,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18396:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35655,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18439:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35663,
                  "src": "18423:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35654,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18423:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35658,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18467:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35663,
                  "src": "18449:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_int256_$dyn_calldata_ptr",
                    "typeString": "int256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35656,
                      "name": "int256",
                      "nodeType": "ElementaryTypeName",
                      "src": "18449:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 35657,
                    "nodeType": "ArrayTypeName",
                    "src": "18449:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_int256_$dyn_storage_ptr",
                      "typeString": "int256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18395:79:108"
            },
            "returnParameters": {
              "id": 35662,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35661,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18523:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35663,
                  "src": "18509:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35660,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18509:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18508:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35675,
            "nodeType": "FunctionDefinition",
            "src": "18534:160:108",
            "nodes": [],
            "functionSelector": "1e356e1a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeAddress",
            "nameLocation": "18543:16:108",
            "parameters": {
              "id": 35671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35665,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18576:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35675,
                  "src": "18560:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35664,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18560:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35667,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18603:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35675,
                  "src": "18587:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35666,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18587:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35670,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18632:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35675,
                  "src": "18613:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35668,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "18613:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 35669,
                    "nodeType": "ArrayTypeName",
                    "src": "18613:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18559:80:108"
            },
            "returnParameters": {
              "id": 35674,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35673,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18688:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35675,
                  "src": "18674:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35672,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18674:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18673:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35687,
            "nodeType": "FunctionDefinition",
            "src": "18699:160:108",
            "nodes": [],
            "functionSelector": "201e43e2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes32",
            "nameLocation": "18708:16:108",
            "parameters": {
              "id": 35683,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35677,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18741:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35687,
                  "src": "18725:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35676,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18725:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35679,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18768:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35687,
                  "src": "18752:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35678,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18752:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35682,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18797:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35687,
                  "src": "18778:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_calldata_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35680,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "18778:7:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 35681,
                    "nodeType": "ArrayTypeName",
                    "src": "18778:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18724:80:108"
            },
            "returnParameters": {
              "id": 35686,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35685,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "18853:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35687,
                  "src": "18839:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35684,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18839:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18838:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35699,
            "nodeType": "FunctionDefinition",
            "src": "18864:158:108",
            "nodes": [],
            "functionSelector": "561cd6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeString",
            "nameLocation": "18873:15:108",
            "parameters": {
              "id": 35695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35689,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "18905:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35699,
                  "src": "18889:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35688,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18889:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35691,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "18932:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35699,
                  "src": "18916:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35690,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "18916:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35694,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "18960:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35699,
                  "src": "18942:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35692,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "18942:6:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 35693,
                    "nodeType": "ArrayTypeName",
                    "src": "18942:8:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18888:79:108"
            },
            "returnParameters": {
              "id": 35698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35697,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19016:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35699,
                  "src": "19002:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35696,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19002:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19001:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35711,
            "nodeType": "FunctionDefinition",
            "src": "19027:156:108",
            "nodes": [],
            "functionSelector": "9884b232",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "serializeBytes",
            "nameLocation": "19036:14:108",
            "parameters": {
              "id": 35707,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35701,
                  "mutability": "mutable",
                  "name": "objectKey",
                  "nameLocation": "19067:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35711,
                  "src": "19051:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35700,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19051:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35703,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "19094:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35711,
                  "src": "19078:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35702,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19078:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35706,
                  "mutability": "mutable",
                  "name": "values",
                  "nameLocation": "19121:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35711,
                  "src": "19104:23:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes_calldata_ptr_$dyn_calldata_ptr",
                    "typeString": "bytes[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35704,
                      "name": "bytes",
                      "nodeType": "ElementaryTypeName",
                      "src": "19104:5:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes_storage_ptr",
                        "typeString": "bytes"
                      }
                    },
                    "id": 35705,
                    "nodeType": "ArrayTypeName",
                    "src": "19104:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                      "typeString": "bytes[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19050:78:108"
            },
            "returnParameters": {
              "id": 35710,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35709,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "19177:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35711,
                  "src": "19163:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35708,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "19163:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "19162:20:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35718,
            "nodeType": "FunctionDefinition",
            "src": "20424:72:108",
            "nodes": [],
            "functionSelector": "e23cd19f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20433:9:108",
            "parameters": {
              "id": 35716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35713,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20459:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35718,
                  "src": "20443:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35712,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20443:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35715,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20481:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35718,
                  "src": "20465:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35714,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20465:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20442:44:108"
            },
            "returnParameters": {
              "id": 35717,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20495:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35727,
            "nodeType": "FunctionDefinition",
            "src": "20717:98:108",
            "nodes": [],
            "functionSelector": "35d6ad46",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "writeJson",
            "nameLocation": "20726:9:108",
            "parameters": {
              "id": 35725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35720,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20752:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35727,
                  "src": "20736:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35719,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20736:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35722,
                  "mutability": "mutable",
                  "name": "path",
                  "nameLocation": "20774:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35727,
                  "src": "20758:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35721,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20758:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35724,
                  "mutability": "mutable",
                  "name": "valueKey",
                  "nameLocation": "20796:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35727,
                  "src": "20780:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35723,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20780:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20735:70:108"
            },
            "returnParameters": {
              "id": 35726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "20814:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35734,
            "nodeType": "FunctionDefinition",
            "src": "20867:85:108",
            "nodes": [],
            "functionSelector": "975a6ce9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrl",
            "nameLocation": "20876:6:108",
            "parameters": {
              "id": 35730,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35729,
                  "mutability": "mutable",
                  "name": "rpcAlias",
                  "nameLocation": "20899:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35734,
                  "src": "20883:24:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35728,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20883:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20882:26:108"
            },
            "returnParameters": {
              "id": 35733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35732,
                  "mutability": "mutable",
                  "name": "json",
                  "nameLocation": "20946:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35734,
                  "src": "20932:18:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35731,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "20932:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20931:20:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35742,
            "nodeType": "FunctionDefinition",
            "src": "21020:67:108",
            "nodes": [],
            "functionSelector": "a85a8418",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrls",
            "nameLocation": "21029:7:108",
            "parameters": {
              "id": 35735,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21036:2:108"
            },
            "returnParameters": {
              "id": 35741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35740,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21081:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35742,
                  "src": "21062:23:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_array$_t_string_memory_ptr_$2_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[2][]"
                  },
                  "typeName": {
                    "baseType": {
                      "baseType": {
                        "id": 35736,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "21062:6:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "id": 35738,
                      "length": {
                        "hexValue": "32",
                        "id": 35737,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "21069:1:108",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_2_by_1",
                          "typeString": "int_const 2"
                        },
                        "value": "2"
                      },
                      "nodeType": "ArrayTypeName",
                      "src": "21062:9:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$2_storage_ptr",
                        "typeString": "string[2]"
                      }
                    },
                    "id": 35739,
                    "nodeType": "ArrayTypeName",
                    "src": "21062:11:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_array$_t_string_storage_$2_storage_$dyn_storage_ptr",
                      "typeString": "string[2][]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21061:25:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35749,
            "nodeType": "FunctionDefinition",
            "src": "21150:67:108",
            "nodes": [],
            "functionSelector": "9d2ad72a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rpcUrlStructs",
            "nameLocation": "21159:13:108",
            "parameters": {
              "id": 35743,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21172:2:108"
            },
            "returnParameters": {
              "id": 35748,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35747,
                  "mutability": "mutable",
                  "name": "urls",
                  "nameLocation": "21211:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35749,
                  "src": "21198:17:108",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Rpc_$34730_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct VmSafe.Rpc[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35745,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 35744,
                        "name": "Rpc",
                        "nameLocations": [
                          "21198:3:108"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 34730,
                        "src": "21198:3:108"
                      },
                      "referencedDeclaration": 34730,
                      "src": "21198:3:108",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Rpc_$34730_storage_ptr",
                        "typeString": "struct VmSafe.Rpc"
                      }
                    },
                    "id": 35746,
                    "nodeType": "ArrayTypeName",
                    "src": "21198:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Rpc_$34730_storage_$dyn_storage_ptr",
                      "typeString": "struct VmSafe.Rpc[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21197:19:108"
            },
            "scope": 35773,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35754,
            "nodeType": "FunctionDefinition",
            "src": "21310:46:108",
            "nodes": [],
            "functionSelector": "4c63e562",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "assume",
            "nameLocation": "21319:6:108",
            "parameters": {
              "id": 35752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35751,
                  "mutability": "mutable",
                  "name": "condition",
                  "nameLocation": "21331:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35754,
                  "src": "21326:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35750,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21326:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21325:16:108"
            },
            "returnParameters": {
              "id": 35753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21355:0:108"
            },
            "scope": 35773,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35757,
            "nodeType": "FunctionDefinition",
            "src": "21445:37:108",
            "nodes": [],
            "functionSelector": "d1a5b36f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "pauseGasMetering",
            "nameLocation": "21454:16:108",
            "parameters": {
              "id": 35755,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21470:2:108"
            },
            "returnParameters": {
              "id": 35756,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21481:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35760,
            "nodeType": "FunctionDefinition",
            "src": "21570:38:108",
            "nodes": [],
            "functionSelector": "2bcd50e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resumeGasMetering",
            "nameLocation": "21579:17:108",
            "parameters": {
              "id": 35758,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21596:2:108"
            },
            "returnParameters": {
              "id": 35759,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21607:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35765,
            "nodeType": "FunctionDefinition",
            "src": "21667:51:108",
            "nodes": [],
            "functionSelector": "f0259e92",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21676:10:108",
            "parameters": {
              "id": 35763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35762,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21703:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35765,
                  "src": "21687:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35761,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21687:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21686:22:108"
            },
            "returnParameters": {
              "id": 35764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21717:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35772,
            "nodeType": "FunctionDefinition",
            "src": "21789:63:108",
            "nodes": [],
            "functionSelector": "f7d39a8d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "breakpoint",
            "nameLocation": "21798:10:108",
            "parameters": {
              "id": 35770,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35767,
                  "mutability": "mutable",
                  "name": "char",
                  "nameLocation": "21825:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35772,
                  "src": "21809:20:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35766,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "21809:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35769,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "21836:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35772,
                  "src": "21831:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35768,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "21831:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21808:34:108"
            },
            "returnParameters": {
              "id": 35771,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21851:0:108"
            },
            "scope": 35773,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "VmSafe",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          35773
        ],
        "name": "VmSafe",
        "nameLocation": "581:6:108",
        "scope": 36246,
        "usedErrors": [],
        "usedEvents": []
      },
      {
        "id": 36245,
        "nodeType": "ContractDefinition",
        "src": "21856:11610:108",
        "nodes": [
          {
            "id": 35780,
            "nodeType": "FunctionDefinition",
            "src": "21913:45:108",
            "nodes": [],
            "functionSelector": "e5d6bf02",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "warp",
            "nameLocation": "21922:4:108",
            "parameters": {
              "id": 35778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35777,
                  "mutability": "mutable",
                  "name": "newTimestamp",
                  "nameLocation": "21935:12:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35780,
                  "src": "21927:20:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "21927:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "21926:22:108"
            },
            "returnParameters": {
              "id": 35779,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "21957:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35785,
            "nodeType": "FunctionDefinition",
            "src": "21988:42:108",
            "nodes": [],
            "functionSelector": "1f7b4f30",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "roll",
            "nameLocation": "21997:4:108",
            "parameters": {
              "id": 35783,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35782,
                  "mutability": "mutable",
                  "name": "newHeight",
                  "nameLocation": "22010:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35785,
                  "src": "22002:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35781,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22002:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22001:19:108"
            },
            "returnParameters": {
              "id": 35784,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22029:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35790,
            "nodeType": "FunctionDefinition",
            "src": "22061:42:108",
            "nodes": [],
            "functionSelector": "39b37ab0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "fee",
            "nameLocation": "22070:3:108",
            "parameters": {
              "id": 35788,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35787,
                  "mutability": "mutable",
                  "name": "newBasefee",
                  "nameLocation": "22082:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35790,
                  "src": "22074:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22074:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22073:20:108"
            },
            "returnParameters": {
              "id": 35789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22102:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35795,
            "nodeType": "FunctionDefinition",
            "src": "22279:52:108",
            "nodes": [],
            "functionSelector": "46cc92d9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "difficulty",
            "nameLocation": "22288:10:108",
            "parameters": {
              "id": 35793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35792,
                  "mutability": "mutable",
                  "name": "newDifficulty",
                  "nameLocation": "22307:13:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35795,
                  "src": "22299:21:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22299:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22298:23:108"
            },
            "returnParameters": {
              "id": 35794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22330:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35800,
            "nodeType": "FunctionDefinition",
            "src": "22501:52:108",
            "nodes": [],
            "functionSelector": "3b925549",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prevrandao",
            "nameLocation": "22510:10:108",
            "parameters": {
              "id": 35798,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35797,
                  "mutability": "mutable",
                  "name": "newPrevrandao",
                  "nameLocation": "22529:13:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35800,
                  "src": "22521:21:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35796,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22521:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22520:23:108"
            },
            "returnParameters": {
              "id": 35799,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22552:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35805,
            "nodeType": "FunctionDefinition",
            "src": "22584:46:108",
            "nodes": [],
            "functionSelector": "4049ddd2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "chainId",
            "nameLocation": "22593:7:108",
            "parameters": {
              "id": 35803,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35802,
                  "mutability": "mutable",
                  "name": "newChainId",
                  "nameLocation": "22609:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35805,
                  "src": "22601:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35801,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22601:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22600:20:108"
            },
            "returnParameters": {
              "id": 35804,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22629:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35810,
            "nodeType": "FunctionDefinition",
            "src": "22659:50:108",
            "nodes": [],
            "functionSelector": "48f50c0f",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "txGasPrice",
            "nameLocation": "22668:10:108",
            "parameters": {
              "id": 35808,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35807,
                  "mutability": "mutable",
                  "name": "newGasPrice",
                  "nameLocation": "22687:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35810,
                  "src": "22679:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22679:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22678:21:108"
            },
            "returnParameters": {
              "id": 35809,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22708:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35819,
            "nodeType": "FunctionDefinition",
            "src": "22765:69:108",
            "nodes": [],
            "functionSelector": "70ca10bb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "store",
            "nameLocation": "22774:5:108",
            "parameters": {
              "id": 35817,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35812,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "22788:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35819,
                  "src": "22780:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35811,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22780:7:108",
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
                  "id": 35814,
                  "mutability": "mutable",
                  "name": "slot",
                  "nameLocation": "22804:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35819,
                  "src": "22796:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35813,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22796:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35816,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "22818:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35819,
                  "src": "22810:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 35815,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "22810:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22779:45:108"
            },
            "returnParameters": {
              "id": 35818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22833:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35826,
            "nodeType": "FunctionDefinition",
            "src": "22929:61:108",
            "nodes": [],
            "functionSelector": "f8e18b57",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonce",
            "nameLocation": "22938:8:108",
            "parameters": {
              "id": 35824,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35821,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "22955:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35826,
                  "src": "22947:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35820,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "22947:7:108",
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
                  "id": 35823,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "22971:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35826,
                  "src": "22964:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 35822,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "22964:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22946:34:108"
            },
            "returnParameters": {
              "id": 35825,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "22989:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35833,
            "nodeType": "FunctionDefinition",
            "src": "23053:67:108",
            "nodes": [],
            "functionSelector": "9b67b21c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setNonceUnsafe",
            "nameLocation": "23062:14:108",
            "parameters": {
              "id": 35831,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35828,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23085:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35833,
                  "src": "23077:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35827,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23077:7:108",
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
                  "id": 35830,
                  "mutability": "mutable",
                  "name": "newNonce",
                  "nameLocation": "23101:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35833,
                  "src": "23094:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 35829,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "23094:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23076:34:108"
            },
            "returnParameters": {
              "id": 35832,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23119:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35838,
            "nodeType": "FunctionDefinition",
            "src": "23205:46:108",
            "nodes": [],
            "functionSelector": "1c72346d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "resetNonce",
            "nameLocation": "23214:10:108",
            "parameters": {
              "id": 35836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35835,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "23233:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35838,
                  "src": "23225:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35834,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23225:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23224:17:108"
            },
            "returnParameters": {
              "id": 35837,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23250:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35843,
            "nodeType": "FunctionDefinition",
            "src": "23321:43:108",
            "nodes": [],
            "functionSelector": "ca669fa7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23330:5:108",
            "parameters": {
              "id": 35841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35840,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23344:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35843,
                  "src": "23336:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35839,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23336:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23335:19:108"
            },
            "returnParameters": {
              "id": 35842,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23363:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35848,
            "nodeType": "FunctionDefinition",
            "src": "23466:48:108",
            "nodes": [],
            "functionSelector": "06447d56",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23475:10:108",
            "parameters": {
              "id": 35846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35845,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23494:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35848,
                  "src": "23486:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35844,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23486:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23485:19:108"
            },
            "returnParameters": {
              "id": 35847,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23513:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35855,
            "nodeType": "FunctionDefinition",
            "src": "23626:61:108",
            "nodes": [],
            "functionSelector": "47e50cce",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "prank",
            "nameLocation": "23635:5:108",
            "parameters": {
              "id": 35853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35850,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23649:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35855,
                  "src": "23641:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35849,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23641:7:108",
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
                  "id": 35852,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23668:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35855,
                  "src": "23660:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23660:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23640:37:108"
            },
            "returnParameters": {
              "id": 35854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23686:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35862,
            "nodeType": "FunctionDefinition",
            "src": "23831:66:108",
            "nodes": [],
            "functionSelector": "45b56078",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "startPrank",
            "nameLocation": "23840:10:108",
            "parameters": {
              "id": 35860,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35857,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "23859:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35862,
                  "src": "23851:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35856,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23851:7:108",
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
                  "id": 35859,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "23878:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35862,
                  "src": "23870:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35858,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "23870:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23850:37:108"
            },
            "returnParameters": {
              "id": 35861,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23896:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35865,
            "nodeType": "FunctionDefinition",
            "src": "23967:30:108",
            "nodes": [],
            "functionSelector": "90c5013b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "stopPrank",
            "nameLocation": "23976:9:108",
            "parameters": {
              "id": 35863,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23985:2:108"
            },
            "returnParameters": {
              "id": 35864,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "23996:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35875,
            "nodeType": "FunctionDefinition",
            "src": "24122:101:108",
            "nodes": [],
            "functionSelector": "4ad0bac9",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "readCallers",
            "nameLocation": "24131:11:108",
            "parameters": {
              "id": 35866,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24142:2:108"
            },
            "returnParameters": {
              "id": 35874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35869,
                  "mutability": "mutable",
                  "name": "callerMode",
                  "nameLocation": "24174:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35875,
                  "src": "24163:21:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_CallerMode_$34717",
                    "typeString": "enum VmSafe.CallerMode"
                  },
                  "typeName": {
                    "id": 35868,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 35867,
                      "name": "CallerMode",
                      "nameLocations": [
                        "24163:10:108"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 34717,
                      "src": "24163:10:108"
                    },
                    "referencedDeclaration": 34717,
                    "src": "24163:10:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_CallerMode_$34717",
                      "typeString": "enum VmSafe.CallerMode"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35871,
                  "mutability": "mutable",
                  "name": "msgSender",
                  "nameLocation": "24194:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35875,
                  "src": "24186:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24186:7:108",
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
                  "id": 35873,
                  "mutability": "mutable",
                  "name": "txOrigin",
                  "nameLocation": "24213:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35875,
                  "src": "24205:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35872,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24205:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24162:60:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35882,
            "nodeType": "FunctionDefinition",
            "src": "24260:60:108",
            "nodes": [],
            "functionSelector": "c88a5e6d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "deal",
            "nameLocation": "24269:4:108",
            "parameters": {
              "id": 35880,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35877,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "24282:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35882,
                  "src": "24274:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24274:7:108",
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
                  "id": 35879,
                  "mutability": "mutable",
                  "name": "newBalance",
                  "nameLocation": "24299:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35882,
                  "src": "24291:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35878,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24291:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24273:37:108"
            },
            "returnParameters": {
              "id": 35881,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24319:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35889,
            "nodeType": "FunctionDefinition",
            "src": "24354:74:108",
            "nodes": [],
            "functionSelector": "b4d6c782",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "etch",
            "nameLocation": "24363:4:108",
            "parameters": {
              "id": 35887,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35884,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "24376:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35889,
                  "src": "24368:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35883,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "24368:7:108",
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
                  "id": 35886,
                  "mutability": "mutable",
                  "name": "newRuntimeBytecode",
                  "nameLocation": "24399:18:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35889,
                  "src": "24384:33:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35885,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24384:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24367:51:108"
            },
            "returnParameters": {
              "id": 35888,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24427:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35894,
            "nodeType": "FunctionDefinition",
            "src": "24504:38:108",
            "nodes": [],
            "functionSelector": "dd82d13e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "skip",
            "nameLocation": "24513:4:108",
            "parameters": {
              "id": 35892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35891,
                  "mutability": "mutable",
                  "name": "skipTest",
                  "nameLocation": "24523:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35894,
                  "src": "24518:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35890,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "24518:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24517:15:108"
            },
            "returnParameters": {
              "id": 35893,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24541:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35899,
            "nodeType": "FunctionDefinition",
            "src": "24584:58:108",
            "nodes": [],
            "functionSelector": "f28dceb3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24593:12:108",
            "parameters": {
              "id": 35897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35896,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24621:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35899,
                  "src": "24606:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35895,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "24606:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24605:27:108"
            },
            "returnParameters": {
              "id": 35898,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24641:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35904,
            "nodeType": "FunctionDefinition",
            "src": "24647:50:108",
            "nodes": [],
            "functionSelector": "c31eb0e0",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24656:12:108",
            "parameters": {
              "id": 35902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35901,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "24676:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35904,
                  "src": "24669:17:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 35900,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "24669:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24668:19:108"
            },
            "returnParameters": {
              "id": 35903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24696:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35907,
            "nodeType": "FunctionDefinition",
            "src": "24702:33:108",
            "nodes": [],
            "functionSelector": "f4844814",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectRevert",
            "nameLocation": "24711:12:108",
            "parameters": {
              "id": 35905,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24723:2:108"
            },
            "returnParameters": {
              "id": 35906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "24734:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35910,
            "nodeType": "FunctionDefinition",
            "src": "25067:31:108",
            "nodes": [],
            "functionSelector": "440ed10d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25076:10:108",
            "parameters": {
              "id": 35908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25086:2:108"
            },
            "returnParameters": {
              "id": 35909,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25097:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35915,
            "nodeType": "FunctionDefinition",
            "src": "25103:46:108",
            "nodes": [],
            "functionSelector": "86b9620d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25112:10:108",
            "parameters": {
              "id": 35913,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35912,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25131:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35915,
                  "src": "25123:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35911,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25123:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25122:17:108"
            },
            "returnParameters": {
              "id": 35914,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25148:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35926,
            "nodeType": "FunctionDefinition",
            "src": "25559:99:108",
            "nodes": [],
            "functionSelector": "491cc7c2",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25568:10:108",
            "parameters": {
              "id": 35924,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35917,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25584:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35926,
                  "src": "25579:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35916,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25579:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35919,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25602:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35926,
                  "src": "25597:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35918,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25597:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35921,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25620:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35926,
                  "src": "25615:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35920,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25615:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35923,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25638:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35926,
                  "src": "25633:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35922,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25633:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25578:70:108"
            },
            "returnParameters": {
              "id": 35925,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25657:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35939,
            "nodeType": "FunctionDefinition",
            "src": "25663:124:108",
            "nodes": [],
            "functionSelector": "81bad6f3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectEmit",
            "nameLocation": "25672:10:108",
            "parameters": {
              "id": 35937,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35928,
                  "mutability": "mutable",
                  "name": "checkTopic1",
                  "nameLocation": "25688:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35939,
                  "src": "25683:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35927,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25683:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35930,
                  "mutability": "mutable",
                  "name": "checkTopic2",
                  "nameLocation": "25706:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35939,
                  "src": "25701:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25701:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35932,
                  "mutability": "mutable",
                  "name": "checkTopic3",
                  "nameLocation": "25724:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35939,
                  "src": "25719:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35931,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25719:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35934,
                  "mutability": "mutable",
                  "name": "checkData",
                  "nameLocation": "25742:9:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35939,
                  "src": "25737:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 35933,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "25737:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35936,
                  "mutability": "mutable",
                  "name": "emitter",
                  "nameLocation": "25761:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35939,
                  "src": "25753:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35935,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "25753:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25682:87:108"
            },
            "returnParameters": {
              "id": 35938,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "25786:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35948,
            "nodeType": "FunctionDefinition",
            "src": "26043:91:108",
            "nodes": [],
            "functionSelector": "b96213e4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26052:8:108",
            "parameters": {
              "id": 35946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35941,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26069:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35948,
                  "src": "26061:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35940,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26061:7:108",
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
                  "id": 35943,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26092:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35948,
                  "src": "26077:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35942,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26077:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35945,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26113:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35948,
                  "src": "26098:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35944,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26098:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26060:64:108"
            },
            "returnParameters": {
              "id": 35947,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26133:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35959,
            "nodeType": "FunctionDefinition",
            "src": "26302:109:108",
            "nodes": [],
            "functionSelector": "81409b91",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCall",
            "nameLocation": "26311:8:108",
            "parameters": {
              "id": 35957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35950,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26328:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35959,
                  "src": "26320:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35949,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26320:7:108",
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
                  "id": 35952,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26344:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35959,
                  "src": "26336:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26336:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35954,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26369:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35959,
                  "src": "26354:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35953,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26354:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35956,
                  "mutability": "mutable",
                  "name": "returnData",
                  "nameLocation": "26390:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35959,
                  "src": "26375:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35955,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26375:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26319:82:108"
            },
            "returnParameters": {
              "id": 35958,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26410:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35968,
            "nodeType": "FunctionDefinition",
            "src": "26480:97:108",
            "nodes": [],
            "functionSelector": "dbaad147",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26489:14:108",
            "parameters": {
              "id": 35966,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35961,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26512:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35968,
                  "src": "26504:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35960,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26504:7:108",
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
                  "id": 35963,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26535:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35968,
                  "src": "26520:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35962,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26520:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35965,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26556:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35968,
                  "src": "26541:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35964,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26541:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26503:64:108"
            },
            "returnParameters": {
              "id": 35967,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26576:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35979,
            "nodeType": "FunctionDefinition",
            "src": "26673:123:108",
            "nodes": [],
            "functionSelector": "d23cd037",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "mockCallRevert",
            "nameLocation": "26682:14:108",
            "parameters": {
              "id": 35977,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35970,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "26705:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35979,
                  "src": "26697:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "26697:7:108",
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
                  "id": 35972,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "26721:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35979,
                  "src": "26713:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 35971,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26713:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35974,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "26746:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35979,
                  "src": "26731:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35973,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26731:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35976,
                  "mutability": "mutable",
                  "name": "revertData",
                  "nameLocation": "26767:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35979,
                  "src": "26752:25:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35975,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "26752:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26696:82:108"
            },
            "returnParameters": {
              "id": 35978,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26795:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35982,
            "nodeType": "FunctionDefinition",
            "src": "26832:37:108",
            "nodes": [],
            "functionSelector": "3fdf4e15",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "clearMockedCalls",
            "nameLocation": "26841:16:108",
            "parameters": {
              "id": 35980,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26857:2:108"
            },
            "returnParameters": {
              "id": 35981,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "26868:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35989,
            "nodeType": "FunctionDefinition",
            "src": "26997:66:108",
            "nodes": [],
            "functionSelector": "bd6af434",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27006:10:108",
            "parameters": {
              "id": 35987,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35984,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27025:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35989,
                  "src": "27017:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35983,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27017:7:108",
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
                  "id": 35986,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27048:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35989,
                  "src": "27033:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35985,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27033:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27016:37:108"
            },
            "returnParameters": {
              "id": 35988,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27062:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 35998,
            "nodeType": "FunctionDefinition",
            "src": "27148:80:108",
            "nodes": [],
            "functionSelector": "c1adbbff",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27157:10:108",
            "parameters": {
              "id": 35996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 35991,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27176:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35998,
                  "src": "27168:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35990,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27168:7:108",
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
                  "id": 35993,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27199:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35998,
                  "src": "27184:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 35992,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27184:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 35995,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27212:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 35998,
                  "src": "27205:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 35994,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27205:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27167:51:108"
            },
            "returnParameters": {
              "id": 35997,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27227:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36007,
            "nodeType": "FunctionDefinition",
            "src": "27311:84:108",
            "nodes": [],
            "functionSelector": "f30c7ba3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27320:10:108",
            "parameters": {
              "id": 36005,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36000,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27339:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36007,
                  "src": "27331:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35999,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27331:7:108",
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
                  "id": 36002,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27355:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36007,
                  "src": "27347:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36001,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27347:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36004,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27380:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36007,
                  "src": "27365:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 36003,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27365:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27330:55:108"
            },
            "returnParameters": {
              "id": 36006,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27394:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36018,
            "nodeType": "FunctionDefinition",
            "src": "27493:98:108",
            "nodes": [],
            "functionSelector": "a2b1a1ae",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27502:10:108",
            "parameters": {
              "id": 36016,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36009,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27521:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36018,
                  "src": "27513:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36008,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27513:7:108",
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
                  "id": 36011,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27537:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36018,
                  "src": "27529:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36010,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27529:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36013,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27562:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36018,
                  "src": "27547:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 36012,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27547:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36015,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27575:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36018,
                  "src": "27568:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36014,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27568:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27512:69:108"
            },
            "returnParameters": {
              "id": 36017,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27590:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36029,
            "nodeType": "FunctionDefinition",
            "src": "27680:96:108",
            "nodes": [],
            "functionSelector": "23361207",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27689:10:108",
            "parameters": {
              "id": 36027,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36020,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27708:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36029,
                  "src": "27700:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36019,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27700:7:108",
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
                  "id": 36022,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27724:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36029,
                  "src": "27716:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36021,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27716:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36024,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27741:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36029,
                  "src": "27734:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36023,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27734:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36026,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27761:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36029,
                  "src": "27746:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 36025,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27746:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27699:67:108"
            },
            "returnParameters": {
              "id": 36028,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27775:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36042,
            "nodeType": "FunctionDefinition",
            "src": "27881:110:108",
            "nodes": [],
            "functionSelector": "65b7b7cc",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCall",
            "nameLocation": "27890:10:108",
            "parameters": {
              "id": 36040,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36031,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "27909:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36042,
                  "src": "27901:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36030,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "27901:7:108",
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
                  "id": 36033,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "27925:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36042,
                  "src": "27917:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36032,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27917:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36035,
                  "mutability": "mutable",
                  "name": "gas",
                  "nameLocation": "27942:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36042,
                  "src": "27935:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36034,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27935:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36037,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "27962:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36042,
                  "src": "27947:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 36036,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "27947:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36039,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "27975:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36042,
                  "src": "27968:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36038,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "27968:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27900:81:108"
            },
            "returnParameters": {
              "id": 36041,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "27990:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36053,
            "nodeType": "FunctionDefinition",
            "src": "28105:105:108",
            "nodes": [],
            "functionSelector": "08e4e116",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28114:16:108",
            "parameters": {
              "id": 36051,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36044,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28139:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36053,
                  "src": "28131:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36043,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28131:7:108",
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
                  "id": 36046,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28155:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36053,
                  "src": "28147:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28147:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36048,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28172:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36053,
                  "src": "28165:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36047,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28165:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36050,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28195:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36053,
                  "src": "28180:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 36049,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28180:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28130:70:108"
            },
            "returnParameters": {
              "id": 36052,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28209:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36066,
            "nodeType": "FunctionDefinition",
            "src": "28339:127:108",
            "nodes": [],
            "functionSelector": "e13a1834",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectCallMinGas",
            "nameLocation": "28348:16:108",
            "parameters": {
              "id": 36064,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36055,
                  "mutability": "mutable",
                  "name": "callee",
                  "nameLocation": "28373:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36066,
                  "src": "28365:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36054,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "28365:7:108",
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
                  "id": 36057,
                  "mutability": "mutable",
                  "name": "msgValue",
                  "nameLocation": "28389:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36066,
                  "src": "28381:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36056,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28381:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36059,
                  "mutability": "mutable",
                  "name": "minGas",
                  "nameLocation": "28406:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36066,
                  "src": "28399:13:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36058,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28399:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36061,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "28429:4:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36066,
                  "src": "28414:19:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_calldata_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 36060,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "28414:5:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36063,
                  "mutability": "mutable",
                  "name": "count",
                  "nameLocation": "28442:5:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36066,
                  "src": "28435:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36062,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28435:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28364:84:108"
            },
            "returnParameters": {
              "id": 36065,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28465:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36073,
            "nodeType": "FunctionDefinition",
            "src": "28692:59:108",
            "nodes": [],
            "functionSelector": "6d016688",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemory",
            "nameLocation": "28701:16:108",
            "parameters": {
              "id": 36071,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36068,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "28725:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36073,
                  "src": "28718:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36067,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28718:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36070,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "28737:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36073,
                  "src": "28730:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36069,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "28730:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28717:24:108"
            },
            "returnParameters": {
              "id": 36072,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "28750:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36080,
            "nodeType": "FunctionDefinition",
            "src": "28989:63:108",
            "nodes": [],
            "functionSelector": "05838bf4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "expectSafeMemoryCall",
            "nameLocation": "28998:20:108",
            "parameters": {
              "id": 36078,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36075,
                  "mutability": "mutable",
                  "name": "min",
                  "nameLocation": "29026:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36080,
                  "src": "29019:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36074,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29019:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36077,
                  "mutability": "mutable",
                  "name": "max",
                  "nameLocation": "29038:3:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36080,
                  "src": "29031:10:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint64",
                    "typeString": "uint64"
                  },
                  "typeName": {
                    "id": 36076,
                    "name": "uint64",
                    "nodeType": "ElementaryTypeName",
                    "src": "29031:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint64",
                      "typeString": "uint64"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29018:24:108"
            },
            "returnParameters": {
              "id": 36079,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29051:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36085,
            "nodeType": "FunctionDefinition",
            "src": "29084:48:108",
            "nodes": [],
            "functionSelector": "ff483c54",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "coinbase",
            "nameLocation": "29093:8:108",
            "parameters": {
              "id": 36083,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36082,
                  "mutability": "mutable",
                  "name": "newCoinbase",
                  "nameLocation": "29110:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36085,
                  "src": "29102:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36081,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "29102:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29101:21:108"
            },
            "returnParameters": {
              "id": 36084,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29131:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36090,
            "nodeType": "FunctionDefinition",
            "src": "29282:58:108",
            "nodes": [],
            "functionSelector": "9711715a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "snapshot",
            "nameLocation": "29291:8:108",
            "parameters": {
              "id": 36086,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "29299:2:108"
            },
            "returnParameters": {
              "id": 36089,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36088,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29328:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36090,
                  "src": "29320:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36087,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29320:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29319:20:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36097,
            "nodeType": "FunctionDefinition",
            "src": "29532:70:108",
            "nodes": [],
            "functionSelector": "44d7f0a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revertTo",
            "nameLocation": "29541:8:108",
            "parameters": {
              "id": 36093,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36092,
                  "mutability": "mutable",
                  "name": "snapshotId",
                  "nameLocation": "29558:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36097,
                  "src": "29550:18:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29550:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29549:20:108"
            },
            "returnParameters": {
              "id": 36096,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36095,
                  "mutability": "mutable",
                  "name": "success",
                  "nameLocation": "29593:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36097,
                  "src": "29588:12:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 36094,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "29588:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29587:14:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36106,
            "nodeType": "FunctionDefinition",
            "src": "29706:103:108",
            "nodes": [],
            "functionSelector": "6ba3ba2b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29715:10:108",
            "parameters": {
              "id": 36102,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36099,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29742:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36106,
                  "src": "29726:26:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36098,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29726:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36101,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "29762:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36106,
                  "src": "29754:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36100,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29754:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29725:49:108"
            },
            "returnParameters": {
              "id": 36105,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36104,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "29801:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36106,
                  "src": "29793:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36103,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29793:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29792:16:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36113,
            "nodeType": "FunctionDefinition",
            "src": "29926:82:108",
            "nodes": [],
            "functionSelector": "31ba3498",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "29935:10:108",
            "parameters": {
              "id": 36109,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36108,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "29962:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36113,
                  "src": "29946:26:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36107,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "29946:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29945:28:108"
            },
            "returnParameters": {
              "id": 36112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36111,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30000:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36113,
                  "src": "29992:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36110,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29992:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29991:16:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36122,
            "nodeType": "FunctionDefinition",
            "src": "30229:98:108",
            "nodes": [],
            "functionSelector": "7ca29682",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createFork",
            "nameLocation": "30238:10:108",
            "parameters": {
              "id": 36118,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36115,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30265:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36122,
                  "src": "30249:26:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36114,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30249:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36117,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30285:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36122,
                  "src": "30277:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 36116,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30277:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30248:44:108"
            },
            "returnParameters": {
              "id": 36121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36120,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30319:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36122,
                  "src": "30311:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30311:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30310:16:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36131,
            "nodeType": "FunctionDefinition",
            "src": "30450:109:108",
            "nodes": [],
            "functionSelector": "71ee464d",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30459:16:108",
            "parameters": {
              "id": 36127,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36124,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30492:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36131,
                  "src": "30476:26:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36123,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30476:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36126,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "30512:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36131,
                  "src": "30504:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36125,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30504:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30475:49:108"
            },
            "returnParameters": {
              "id": 36130,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36129,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30551:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36131,
                  "src": "30543:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36128,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30543:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30542:16:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36140,
            "nodeType": "FunctionDefinition",
            "src": "30793:104:108",
            "nodes": [],
            "functionSelector": "84d52b7a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "30802:16:108",
            "parameters": {
              "id": 36136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36133,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "30835:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36140,
                  "src": "30819:26:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36132,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "30819:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36135,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "30855:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36140,
                  "src": "30847:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 36134,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "30847:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30818:44:108"
            },
            "returnParameters": {
              "id": 36139,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36138,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "30889:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36140,
                  "src": "30881:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36137,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30881:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30880:16:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36147,
            "nodeType": "FunctionDefinition",
            "src": "31031:88:108",
            "nodes": [],
            "functionSelector": "98680034",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createSelectFork",
            "nameLocation": "31040:16:108",
            "parameters": {
              "id": 36143,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36142,
                  "mutability": "mutable",
                  "name": "urlOrAlias",
                  "nameLocation": "31073:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36147,
                  "src": "31057:26:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_calldata_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 36141,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "31057:6:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31056:28:108"
            },
            "returnParameters": {
              "id": 36146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36145,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31111:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36147,
                  "src": "31103:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36144,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31103:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31102:16:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36152,
            "nodeType": "FunctionDefinition",
            "src": "31230:45:108",
            "nodes": [],
            "functionSelector": "9ebf6827",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "selectFork",
            "nameLocation": "31239:10:108",
            "parameters": {
              "id": 36150,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36149,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31258:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36152,
                  "src": "31250:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36148,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31250:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31249:16:108"
            },
            "returnParameters": {
              "id": 36151,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31274:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36158,
            "nodeType": "FunctionDefinition",
            "src": "31381:61:108",
            "nodes": [],
            "documentation": {
              "id": 36153,
              "nodeType": "StructuredDocumentation",
              "src": "31280:96:108",
              "text": "Returns the identifier of the currently active fork. Reverts if no fork is currently active."
            },
            "functionSelector": "2f103f22",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "activeFork",
            "nameLocation": "31390:10:108",
            "parameters": {
              "id": 36154,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31400:2:108"
            },
            "returnParameters": {
              "id": 36157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36156,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31434:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36158,
                  "src": "31426:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31426:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31425:16:108"
            },
            "scope": 36245,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36163,
            "nodeType": "FunctionDefinition",
            "src": "31577:48:108",
            "nodes": [],
            "functionSelector": "d9bbf3a1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31586:8:108",
            "parameters": {
              "id": 36161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36160,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31603:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36163,
                  "src": "31595:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31595:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31594:21:108"
            },
            "returnParameters": {
              "id": 36162,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31624:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36168,
            "nodeType": "FunctionDefinition",
            "src": "31835:43:108",
            "nodes": [],
            "functionSelector": "0f29772b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31844:8:108",
            "parameters": {
              "id": 36166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36165,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "31861:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36168,
                  "src": "31853:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 36164,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "31853:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31852:16:108"
            },
            "returnParameters": {
              "id": 36167,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31877:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36175,
            "nodeType": "FunctionDefinition",
            "src": "31935:64:108",
            "nodes": [],
            "functionSelector": "d74c83a4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "31944:8:108",
            "parameters": {
              "id": 36173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36170,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "31961:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36175,
                  "src": "31953:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31953:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36172,
                  "mutability": "mutable",
                  "name": "blockNumber",
                  "nameLocation": "31977:11:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36175,
                  "src": "31969:19:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36171,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "31969:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "31952:37:108"
            },
            "returnParameters": {
              "id": 36174,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "31998:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36182,
            "nodeType": "FunctionDefinition",
            "src": "32132:59:108",
            "nodes": [],
            "functionSelector": "f2830f7b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "rollFork",
            "nameLocation": "32141:8:108",
            "parameters": {
              "id": 36180,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36177,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "32158:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36182,
                  "src": "32150:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36176,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "32150:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36179,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "32174:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36182,
                  "src": "32166:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 36178,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "32166:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32149:32:108"
            },
            "returnParameters": {
              "id": 36181,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32190:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36187,
            "nodeType": "FunctionDefinition",
            "src": "32390:50:108",
            "nodes": [],
            "functionSelector": "57e22dde",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32399:14:108",
            "parameters": {
              "id": 36185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36184,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32422:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36187,
                  "src": "32414:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36183,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32414:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32413:17:108"
            },
            "returnParameters": {
              "id": 36186,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32439:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36194,
            "nodeType": "FunctionDefinition",
            "src": "32445:69:108",
            "nodes": [],
            "functionSelector": "4074e0a8",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32454:14:108",
            "parameters": {
              "id": 36192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36189,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32477:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36194,
                  "src": "32469:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36188,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32469:7:108",
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
                  "id": 36191,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32495:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36194,
                  "src": "32487:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36190,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32487:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32468:36:108"
            },
            "returnParameters": {
              "id": 36193,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32513:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36203,
            "nodeType": "FunctionDefinition",
            "src": "32519:87:108",
            "nodes": [],
            "functionSelector": "efb77a75",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32528:14:108",
            "parameters": {
              "id": 36201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36196,
                  "mutability": "mutable",
                  "name": "account0",
                  "nameLocation": "32551:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36203,
                  "src": "32543:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36195,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32543:7:108",
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
                  "id": 36198,
                  "mutability": "mutable",
                  "name": "account1",
                  "nameLocation": "32569:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36203,
                  "src": "32561:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36197,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32561:7:108",
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
                  "id": 36200,
                  "mutability": "mutable",
                  "name": "account2",
                  "nameLocation": "32587:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36203,
                  "src": "32579:16:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36199,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32579:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32542:54:108"
            },
            "returnParameters": {
              "id": 36202,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32605:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36209,
            "nodeType": "FunctionDefinition",
            "src": "32611:62:108",
            "nodes": [],
            "functionSelector": "1d9e269e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "makePersistent",
            "nameLocation": "32620:14:108",
            "parameters": {
              "id": 36207,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36206,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32654:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36209,
                  "src": "32635:27:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36204,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32635:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36205,
                    "nodeType": "ArrayTypeName",
                    "src": "32635:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32634:29:108"
            },
            "returnParameters": {
              "id": 36208,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32672:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36214,
            "nodeType": "FunctionDefinition",
            "src": "32767:52:108",
            "nodes": [],
            "functionSelector": "997a0222",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32776:16:108",
            "parameters": {
              "id": 36212,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36211,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32801:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36214,
                  "src": "32793:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36210,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32793:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32792:17:108"
            },
            "returnParameters": {
              "id": 36213,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32818:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36220,
            "nodeType": "FunctionDefinition",
            "src": "32824:64:108",
            "nodes": [],
            "functionSelector": "3ce969e6",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "revokePersistent",
            "nameLocation": "32833:16:108",
            "parameters": {
              "id": 36218,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36217,
                  "mutability": "mutable",
                  "name": "accounts",
                  "nameLocation": "32869:8:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36220,
                  "src": "32850:27:108",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_calldata_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 36215,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "32850:7:108",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 36216,
                    "nodeType": "ArrayTypeName",
                    "src": "32850:9:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32849:29:108"
            },
            "returnParameters": {
              "id": 36219,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "32887:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36227,
            "nodeType": "FunctionDefinition",
            "src": "32952:79:108",
            "nodes": [],
            "functionSelector": "d92d8efd",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isPersistent",
            "nameLocation": "32961:12:108",
            "parameters": {
              "id": 36223,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36222,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "32982:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36227,
                  "src": "32974:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36221,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "32974:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "32973:17:108"
            },
            "returnParameters": {
              "id": 36226,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36225,
                  "mutability": "mutable",
                  "name": "persistent",
                  "nameLocation": "33019:10:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36227,
                  "src": "33014:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 36224,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "33014:4:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33013:17:108"
            },
            "scope": 36245,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36232,
            "nodeType": "FunctionDefinition",
            "src": "33112:51:108",
            "nodes": [],
            "functionSelector": "ea060291",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "allowCheatcodes",
            "nameLocation": "33121:15:108",
            "parameters": {
              "id": 36230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36229,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "33145:7:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36232,
                  "src": "33137:15:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 36228,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "33137:7:108",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33136:17:108"
            },
            "returnParameters": {
              "id": 36231,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33162:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36237,
            "nodeType": "FunctionDefinition",
            "src": "33263:43:108",
            "nodes": [],
            "functionSelector": "be646da1",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33272:8:108",
            "parameters": {
              "id": 36235,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36234,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33289:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36237,
                  "src": "33281:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 36233,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33281:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33280:16:108"
            },
            "returnParameters": {
              "id": 36236,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33305:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 36244,
            "nodeType": "FunctionDefinition",
            "src": "33405:59:108",
            "nodes": [],
            "functionSelector": "4d8abc4b",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "transact",
            "nameLocation": "33414:8:108",
            "parameters": {
              "id": 36242,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36239,
                  "mutability": "mutable",
                  "name": "forkId",
                  "nameLocation": "33431:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36244,
                  "src": "33423:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36238,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "33423:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 36241,
                  "mutability": "mutable",
                  "name": "txHash",
                  "nameLocation": "33447:6:108",
                  "nodeType": "VariableDeclaration",
                  "scope": 36244,
                  "src": "33439:14:108",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 36240,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "33439:7:108",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "33422:32:108"
            },
            "returnParameters": {
              "id": 36243,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "33463:0:108"
            },
            "scope": 36245,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 35774,
              "name": "VmSafe",
              "nameLocations": [
                "21872:6:108"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 35773,
              "src": "21872:6:108"
            },
            "id": 35775,
            "nodeType": "InheritanceSpecifier",
            "src": "21872:6:108"
          }
        ],
        "canonicalName": "Vm",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          36245,
          35773
        ],
        "name": "Vm",
        "nameLocation": "21866:2:108",
        "scope": 36246,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 108
} as const;
