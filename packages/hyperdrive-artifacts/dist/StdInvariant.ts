export const StdInvariant = 
{
  "abi": [
    {
      "inputs": [],
      "name": "excludeArtifacts",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "excludedArtifacts_",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "excludedContracts_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "excludedSenders_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetArtifactSelectors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "selectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct StdInvariant.FuzzSelector[]",
          "name": "targetedArtifactSelectors_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetArtifacts",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "targetedArtifacts_",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "targetedContracts_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetSelectors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "selectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct StdInvariant.FuzzSelector[]",
          "name": "targetedSelectors_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "targetedSenders_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
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
    "excludeArtifacts()": "b5508aa9",
    "excludeContracts()": "e20c9f71",
    "excludeSenders()": "1ed7831c",
    "targetArtifactSelectors()": "66d9a9a0",
    "targetArtifacts()": "85226c81",
    "targetContracts()": "3f7286f4",
    "targetSelectors()": "916a17c6",
    "targetSenders()": "3e5e3c23"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeArtifacts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "excludedArtifacts_",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeContracts",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "excludedContracts_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeSenders",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "excludedSenders_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetArtifactSelectors",
          "outputs": [
            {
              "internalType": "struct StdInvariant.FuzzSelector[]",
              "name": "targetedArtifactSelectors_",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "bytes4[]",
                  "name": "selectors",
                  "type": "bytes4[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetArtifacts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "targetedArtifacts_",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetContracts",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targetedContracts_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetSelectors",
          "outputs": [
            {
              "internalType": "struct StdInvariant.FuzzSelector[]",
              "name": "targetedSelectors_",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "bytes4[]",
                  "name": "selectors",
                  "type": "bytes4[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetSenders",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targetedSenders_",
              "type": "address[]"
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
        "lib/forge-std/src/StdInvariant.sol": "StdInvariant"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdInvariant.sol": {
        "keccak256": "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
        "urls": [
          "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
          "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdInvariant.sol",
    "id": 30396,
    "exportedSymbols": {
      "StdInvariant": [
        30395
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:3043:101",
    "nodes": [
      {
        "id": 30173,
        "nodeType": "PragmaDirective",
        "src": "32:31:101",
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
        "id": 30174,
        "nodeType": "PragmaDirective",
        "src": "65:33:101",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 30395,
        "nodeType": "ContractDefinition",
        "src": "100:2974:101",
        "nodes": [
          {
            "id": 30180,
            "nodeType": "StructDefinition",
            "src": "137:77:101",
            "nodes": [],
            "canonicalName": "StdInvariant.FuzzSelector",
            "members": [
              {
                "constant": false,
                "id": 30176,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "175:4:101",
                "nodeType": "VariableDeclaration",
                "scope": 30180,
                "src": "167:12:101",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 30175,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "167:7:101",
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
                "id": 30179,
                "mutability": "mutable",
                "name": "selectors",
                "nameLocation": "198:9:101",
                "nodeType": "VariableDeclaration",
                "scope": 30180,
                "src": "189:18:101",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                  "typeString": "bytes4[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 30177,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 30178,
                  "nodeType": "ArrayTypeName",
                  "src": "189:8:101",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                    "typeString": "bytes4[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FuzzSelector",
            "nameLocation": "144:12:101",
            "scope": 30395,
            "visibility": "public"
          },
          {
            "id": 30183,
            "nodeType": "VariableDeclaration",
            "src": "220:36:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedContracts",
            "nameLocation": "238:18:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 30181,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "220:7:101",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 30182,
              "nodeType": "ArrayTypeName",
              "src": "220:9:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30186,
            "nodeType": "VariableDeclaration",
            "src": "262:34:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedSenders",
            "nameLocation": "280:16:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 30184,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:101",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 30185,
              "nodeType": "ArrayTypeName",
              "src": "262:9:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30189,
            "nodeType": "VariableDeclaration",
            "src": "302:36:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedContracts",
            "nameLocation": "320:18:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 30187,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "302:7:101",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 30188,
              "nodeType": "ArrayTypeName",
              "src": "302:9:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30192,
            "nodeType": "VariableDeclaration",
            "src": "344:34:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSenders",
            "nameLocation": "362:16:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 30190,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "344:7:101",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 30191,
              "nodeType": "ArrayTypeName",
              "src": "344:9:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30195,
            "nodeType": "VariableDeclaration",
            "src": "385:35:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedArtifacts",
            "nameLocation": "402:18:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 30193,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "385:6:101",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 30194,
              "nodeType": "ArrayTypeName",
              "src": "385:8:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30198,
            "nodeType": "VariableDeclaration",
            "src": "426:35:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifacts",
            "nameLocation": "443:18:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 30196,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:101",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 30197,
              "nodeType": "ArrayTypeName",
              "src": "426:8:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30202,
            "nodeType": "VariableDeclaration",
            "src": "468:49:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifactSelectors",
            "nameLocation": "491:26:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 30200,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 30199,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "468:12:101"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 30180,
                  "src": "468:12:101"
                },
                "referencedDeclaration": 30180,
                "src": "468:12:101",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$30180_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 30201,
              "nodeType": "ArrayTypeName",
              "src": "468:14:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30206,
            "nodeType": "VariableDeclaration",
            "src": "523:41:101",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSelectors",
            "nameLocation": "546:18:101",
            "scope": 30395,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 30204,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 30203,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "523:12:101"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 30180,
                  "src": "523:12:101"
                },
                "referencedDeclaration": 30180,
                "src": "523:12:101",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$30180_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 30205,
              "nodeType": "ArrayTypeName",
              "src": "523:14:101",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 30218,
            "nodeType": "FunctionDefinition",
            "src": "649:126:101",
            "nodes": [],
            "body": {
              "id": 30217,
              "nodeType": "Block",
              "src": "713:62:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30214,
                        "name": "newExcludedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30208,
                        "src": "747:20:101",
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
                        "id": 30211,
                        "name": "_excludedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30183,
                        "src": "723:18:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 30213,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "742:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "723:23:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 30215,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:45:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30216,
                  "nodeType": "ExpressionStatement",
                  "src": "723:45:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContract",
            "nameLocation": "658:15:101",
            "parameters": {
              "id": 30209,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30208,
                  "mutability": "mutable",
                  "name": "newExcludedContract_",
                  "nameLocation": "682:20:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30218,
                  "src": "674:28:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30207,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:101",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:30:101"
            },
            "returnParameters": {
              "id": 30210,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30230,
            "nodeType": "FunctionDefinition",
            "src": "781:118:101",
            "nodes": [],
            "body": {
              "id": 30229,
              "nodeType": "Block",
              "src": "841:58:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30226,
                        "name": "newExcludedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30220,
                        "src": "873:18:101",
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
                        "id": 30223,
                        "name": "_excludedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30186,
                        "src": "851:16:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 30225,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "868:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "851:21:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 30227,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:41:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30228,
                  "nodeType": "ExpressionStatement",
                  "src": "851:41:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSender",
            "nameLocation": "790:13:101",
            "parameters": {
              "id": 30221,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30220,
                  "mutability": "mutable",
                  "name": "newExcludedSender_",
                  "nameLocation": "812:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30230,
                  "src": "804:26:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30219,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:101",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "803:28:101"
            },
            "returnParameters": {
              "id": 30222,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30242,
            "nodeType": "FunctionDefinition",
            "src": "905:132:101",
            "nodes": [],
            "body": {
              "id": 30241,
              "nodeType": "Block",
              "src": "975:62:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30238,
                        "name": "newExcludedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30232,
                        "src": "1009:20:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 30235,
                        "name": "_excludedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30195,
                        "src": "985:18:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 30237,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1004:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "985:23:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 30239,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:45:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30240,
                  "nodeType": "ExpressionStatement",
                  "src": "985:45:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifact",
            "nameLocation": "914:15:101",
            "parameters": {
              "id": 30233,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30232,
                  "mutability": "mutable",
                  "name": "newExcludedArtifact_",
                  "nameLocation": "944:20:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30242,
                  "src": "930:34:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30231,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "930:6:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "929:36:101"
            },
            "returnParameters": {
              "id": 30234,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "975:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30254,
            "nodeType": "FunctionDefinition",
            "src": "1043:131:101",
            "nodes": [],
            "body": {
              "id": 30253,
              "nodeType": "Block",
              "src": "1112:62:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30250,
                        "name": "newTargetedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30244,
                        "src": "1146:20:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 30247,
                        "name": "_targetedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30198,
                        "src": "1122:18:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 30249,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1141:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1122:23:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 30251,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1122:45:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30252,
                  "nodeType": "ExpressionStatement",
                  "src": "1122:45:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifact",
            "nameLocation": "1052:14:101",
            "parameters": {
              "id": 30245,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30244,
                  "mutability": "mutable",
                  "name": "newTargetedArtifact_",
                  "nameLocation": "1081:20:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30254,
                  "src": "1067:34:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30243,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:6:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1066:36:101"
            },
            "returnParameters": {
              "id": 30246,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1112:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30267,
            "nodeType": "FunctionDefinition",
            "src": "1180:169:101",
            "nodes": [],
            "body": {
              "id": 30266,
              "nodeType": "Block",
              "src": "1271:78:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30263,
                        "name": "newTargetedArtifactSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30257,
                        "src": "1313:28:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$30180_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$30180_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 30260,
                        "name": "_targetedArtifactSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30202,
                        "src": "1281:26:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 30262,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1308:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1281:31:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$30180_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 30264,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1281:61:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30265,
                  "nodeType": "ExpressionStatement",
                  "src": "1281:61:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelector",
            "nameLocation": "1189:22:101",
            "parameters": {
              "id": 30258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30257,
                  "mutability": "mutable",
                  "name": "newTargetedArtifactSelector_",
                  "nameLocation": "1232:28:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30267,
                  "src": "1212:48:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$30180_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 30256,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 30255,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1212:12:101"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 30180,
                      "src": "1212:12:101"
                    },
                    "referencedDeclaration": 30180,
                    "src": "1212:12:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$30180_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1211:50:101"
            },
            "returnParameters": {
              "id": 30259,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30279,
            "nodeType": "FunctionDefinition",
            "src": "1355:125:101",
            "nodes": [],
            "body": {
              "id": 30278,
              "nodeType": "Block",
              "src": "1418:62:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30275,
                        "name": "newTargetedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30269,
                        "src": "1452:20:101",
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
                        "id": 30272,
                        "name": "_targetedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30189,
                        "src": "1428:18:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 30274,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1447:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1428:23:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 30276,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1428:45:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30277,
                  "nodeType": "ExpressionStatement",
                  "src": "1428:45:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContract",
            "nameLocation": "1364:14:101",
            "parameters": {
              "id": 30270,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30269,
                  "mutability": "mutable",
                  "name": "newTargetedContract_",
                  "nameLocation": "1387:20:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30279,
                  "src": "1379:28:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30268,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:101",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1378:30:101"
            },
            "returnParameters": {
              "id": 30271,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1418:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30292,
            "nodeType": "FunctionDefinition",
            "src": "1486:137:101",
            "nodes": [],
            "body": {
              "id": 30291,
              "nodeType": "Block",
              "src": "1561:62:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30288,
                        "name": "newTargetedSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30282,
                        "src": "1595:20:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$30180_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$30180_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 30285,
                        "name": "_targetedSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30206,
                        "src": "1571:18:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 30287,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1590:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1571:23:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$30180_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 30289,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:45:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30290,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:45:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelector",
            "nameLocation": "1495:14:101",
            "parameters": {
              "id": 30283,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30282,
                  "mutability": "mutable",
                  "name": "newTargetedSelector_",
                  "nameLocation": "1530:20:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30292,
                  "src": "1510:40:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$30180_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 30281,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 30280,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1510:12:101"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 30180,
                      "src": "1510:12:101"
                    },
                    "referencedDeclaration": 30180,
                    "src": "1510:12:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$30180_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1509:42:101"
            },
            "returnParameters": {
              "id": 30284,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30304,
            "nodeType": "FunctionDefinition",
            "src": "1629:117:101",
            "nodes": [],
            "body": {
              "id": 30303,
              "nodeType": "Block",
              "src": "1688:58:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 30300,
                        "name": "newTargetedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30294,
                        "src": "1720:18:101",
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
                        "id": 30297,
                        "name": "_targetedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 30192,
                        "src": "1698:16:101",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 30299,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1715:4:101",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1698:21:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 30301,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1698:41:101",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 30302,
                  "nodeType": "ExpressionStatement",
                  "src": "1698:41:101"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSender",
            "nameLocation": "1638:12:101",
            "parameters": {
              "id": 30295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30294,
                  "mutability": "mutable",
                  "name": "newTargetedSender_",
                  "nameLocation": "1659:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30304,
                  "src": "1651:26:101",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 30293,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1651:7:101",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1650:28:101"
            },
            "returnParameters": {
              "id": 30296,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1688:0:101"
            },
            "scope": 30395,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 30315,
            "nodeType": "FunctionDefinition",
            "src": "1875:141:101",
            "nodes": [],
            "body": {
              "id": 30314,
              "nodeType": "Block",
              "src": "1960:56:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30310,
                      "name": "excludedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30308,
                      "src": "1970:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30311,
                      "name": "_excludedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30195,
                      "src": "1991:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "1970:39:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 30313,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:39:101"
                }
              ]
            },
            "functionSelector": "b5508aa9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifacts",
            "nameLocation": "1884:16:101",
            "parameters": {
              "id": 30305,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:101"
            },
            "returnParameters": {
              "id": 30309,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30308,
                  "mutability": "mutable",
                  "name": "excludedArtifacts_",
                  "nameLocation": "1940:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30315,
                  "src": "1924:34:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30306,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:6:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 30307,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:8:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:36:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30326,
            "nodeType": "FunctionDefinition",
            "src": "2022:142:101",
            "nodes": [],
            "body": {
              "id": 30325,
              "nodeType": "Block",
              "src": "2108:56:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30321,
                      "name": "excludedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30319,
                      "src": "2118:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30322,
                      "name": "_excludedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30183,
                      "src": "2139:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2118:39:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 30324,
                  "nodeType": "ExpressionStatement",
                  "src": "2118:39:101"
                }
              ]
            },
            "functionSelector": "e20c9f71",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContracts",
            "nameLocation": "2031:16:101",
            "parameters": {
              "id": 30316,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2047:2:101"
            },
            "returnParameters": {
              "id": 30320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30319,
                  "mutability": "mutable",
                  "name": "excludedContracts_",
                  "nameLocation": "2088:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30326,
                  "src": "2071:35:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30317,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2071:7:101",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 30318,
                    "nodeType": "ArrayTypeName",
                    "src": "2071:9:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2070:37:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30337,
            "nodeType": "FunctionDefinition",
            "src": "2170:134:101",
            "nodes": [],
            "body": {
              "id": 30336,
              "nodeType": "Block",
              "src": "2252:52:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30332,
                      "name": "excludedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30330,
                      "src": "2262:16:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30333,
                      "name": "_excludedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30186,
                      "src": "2281:16:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2262:35:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 30335,
                  "nodeType": "ExpressionStatement",
                  "src": "2262:35:101"
                }
              ]
            },
            "functionSelector": "1ed7831c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSenders",
            "nameLocation": "2179:14:101",
            "parameters": {
              "id": 30327,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2193:2:101"
            },
            "returnParameters": {
              "id": 30331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30330,
                  "mutability": "mutable",
                  "name": "excludedSenders_",
                  "nameLocation": "2234:16:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30337,
                  "src": "2217:33:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30328,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:101",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 30329,
                    "nodeType": "ArrayTypeName",
                    "src": "2217:9:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2216:35:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30348,
            "nodeType": "FunctionDefinition",
            "src": "2310:140:101",
            "nodes": [],
            "body": {
              "id": 30347,
              "nodeType": "Block",
              "src": "2394:56:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30343,
                      "name": "targetedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30341,
                      "src": "2404:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30344,
                      "name": "_targetedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30198,
                      "src": "2425:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "2404:39:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 30346,
                  "nodeType": "ExpressionStatement",
                  "src": "2404:39:101"
                }
              ]
            },
            "functionSelector": "85226c81",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifacts",
            "nameLocation": "2319:15:101",
            "parameters": {
              "id": 30338,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2334:2:101"
            },
            "returnParameters": {
              "id": 30342,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30341,
                  "mutability": "mutable",
                  "name": "targetedArtifacts_",
                  "nameLocation": "2374:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30348,
                  "src": "2358:34:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30339,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2358:6:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 30340,
                    "nodeType": "ArrayTypeName",
                    "src": "2358:8:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2357:36:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30360,
            "nodeType": "FunctionDefinition",
            "src": "2456:178:101",
            "nodes": [],
            "body": {
              "id": 30359,
              "nodeType": "Block",
              "src": "2562:72:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30357,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30355,
                      "name": "targetedArtifactSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30353,
                      "src": "2572:26:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30356,
                      "name": "_targetedArtifactSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30202,
                      "src": "2601:26:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2572:55:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 30358,
                  "nodeType": "ExpressionStatement",
                  "src": "2572:55:101"
                }
              ]
            },
            "functionSelector": "66d9a9a0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelectors",
            "nameLocation": "2465:23:101",
            "parameters": {
              "id": 30349,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2488:2:101"
            },
            "returnParameters": {
              "id": 30354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30353,
                  "mutability": "mutable",
                  "name": "targetedArtifactSelectors_",
                  "nameLocation": "2534:26:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30360,
                  "src": "2512:48:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30351,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 30350,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2512:12:101"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 30180,
                        "src": "2512:12:101"
                      },
                      "referencedDeclaration": 30180,
                      "src": "2512:12:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$30180_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 30352,
                    "nodeType": "ArrayTypeName",
                    "src": "2512:14:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2511:50:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30371,
            "nodeType": "FunctionDefinition",
            "src": "2640:141:101",
            "nodes": [],
            "body": {
              "id": 30370,
              "nodeType": "Block",
              "src": "2725:56:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30366,
                      "name": "targetedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30364,
                      "src": "2735:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30367,
                      "name": "_targetedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30189,
                      "src": "2756:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2735:39:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 30369,
                  "nodeType": "ExpressionStatement",
                  "src": "2735:39:101"
                }
              ]
            },
            "functionSelector": "3f7286f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContracts",
            "nameLocation": "2649:15:101",
            "parameters": {
              "id": 30361,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2664:2:101"
            },
            "returnParameters": {
              "id": 30365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30364,
                  "mutability": "mutable",
                  "name": "targetedContracts_",
                  "nameLocation": "2705:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30371,
                  "src": "2688:35:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30362,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2688:7:101",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 30363,
                    "nodeType": "ArrayTypeName",
                    "src": "2688:9:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2687:37:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30383,
            "nodeType": "FunctionDefinition",
            "src": "2787:146:101",
            "nodes": [],
            "body": {
              "id": 30382,
              "nodeType": "Block",
              "src": "2877:56:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30378,
                      "name": "targetedSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30376,
                      "src": "2887:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30379,
                      "name": "_targetedSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30206,
                      "src": "2908:18:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2887:39:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 30381,
                  "nodeType": "ExpressionStatement",
                  "src": "2887:39:101"
                }
              ]
            },
            "functionSelector": "916a17c6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelectors",
            "nameLocation": "2796:15:101",
            "parameters": {
              "id": 30372,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2811:2:101"
            },
            "returnParameters": {
              "id": 30377,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30376,
                  "mutability": "mutable",
                  "name": "targetedSelectors_",
                  "nameLocation": "2857:18:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30383,
                  "src": "2835:40:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30374,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 30373,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2835:12:101"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 30180,
                        "src": "2835:12:101"
                      },
                      "referencedDeclaration": 30180,
                      "src": "2835:12:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$30180_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 30375,
                    "nodeType": "ArrayTypeName",
                    "src": "2835:14:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2834:42:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 30394,
            "nodeType": "FunctionDefinition",
            "src": "2939:133:101",
            "nodes": [],
            "body": {
              "id": 30393,
              "nodeType": "Block",
              "src": "3020:52:101",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 30391,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 30389,
                      "name": "targetedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30387,
                      "src": "3030:16:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 30390,
                      "name": "_targetedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 30192,
                      "src": "3049:16:101",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "3030:35:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 30392,
                  "nodeType": "ExpressionStatement",
                  "src": "3030:35:101"
                }
              ]
            },
            "functionSelector": "3e5e3c23",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSenders",
            "nameLocation": "2948:13:101",
            "parameters": {
              "id": 30384,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2961:2:101"
            },
            "returnParameters": {
              "id": 30388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 30387,
                  "mutability": "mutable",
                  "name": "targetedSenders_",
                  "nameLocation": "3002:16:101",
                  "nodeType": "VariableDeclaration",
                  "scope": 30394,
                  "src": "2985:33:101",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 30385,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2985:7:101",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 30386,
                    "nodeType": "ArrayTypeName",
                    "src": "2985:9:101",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2984:35:101"
            },
            "scope": 30395,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "StdInvariant",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          30395
        ],
        "name": "StdInvariant",
        "nameLocation": "118:12:101",
        "scope": 30396,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 101
} as const;
