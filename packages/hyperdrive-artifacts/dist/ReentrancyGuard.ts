export const ReentrancyGuard = 
{
  "abi": [
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"details\":\"Contract module that helps prevent reentrant calls to a function. Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier available, which can be applied to functions to make sure there are no nested (reentrant) calls to them. Note that because there is a single `nonReentrant` guard, functions marked as `nonReentrant` may not call one another. This can be worked around by making those functions `private`, and then adding `external` `nonReentrant` entry points to them. TIP: If you would like to learn more about reentrancy and alternative ways to protect against it, check out our blog post https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":\"ReentrancyGuard\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
        "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": "ReentrancyGuard"
      },
      "libraries": {}
    },
    "sources": {
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
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
    "id": 67107,
    "exportedSymbols": {
      "ReentrancyGuard": [
        67106
      ]
    },
    "nodeType": "SourceUnit",
    "src": "109:3131:121",
    "nodes": [
      {
        "id": 67039,
        "nodeType": "PragmaDirective",
        "src": "109:24:121",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 67106,
        "nodeType": "ContractDefinition",
        "src": "886:2353:121",
        "nodes": [
          {
            "id": 67043,
            "nodeType": "VariableDeclaration",
            "src": "1674:40:121",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "NOT_ENTERED",
            "nameLocation": "1699:11:121",
            "scope": 67106,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67041,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1674:7:121",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 67042,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1713:1:121",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "private"
          },
          {
            "id": 67046,
            "nodeType": "VariableDeclaration",
            "src": "1720:36:121",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "ENTERED",
            "nameLocation": "1745:7:121",
            "scope": 67106,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67044,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1720:7:121",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "32",
              "id": 67045,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1755:1:121",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2_by_1",
                "typeString": "int_const 2"
              },
              "value": "2"
            },
            "visibility": "private"
          },
          {
            "id": 67048,
            "nodeType": "VariableDeclaration",
            "src": "1763:23:121",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_status",
            "nameLocation": "1779:7:121",
            "scope": 67106,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 67047,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1763:7:121",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "private"
          },
          {
            "id": 67051,
            "nodeType": "ErrorDefinition",
            "src": "1850:37:121",
            "nodes": [],
            "documentation": {
              "id": 67049,
              "nodeType": "StructuredDocumentation",
              "src": "1793:52:121",
              "text": " @dev Unauthorized reentrant call."
            },
            "errorSelector": "3ee5aeb5",
            "name": "ReentrancyGuardReentrantCall",
            "nameLocation": "1856:28:121",
            "parameters": {
              "id": 67050,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1884:2:121"
            }
          },
          {
            "id": 67059,
            "nodeType": "FunctionDefinition",
            "src": "1893:52:121",
            "nodes": [],
            "body": {
              "id": 67058,
              "nodeType": "Block",
              "src": "1907:38:121",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 67056,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67054,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67048,
                      "src": "1917:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 67055,
                      "name": "NOT_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67043,
                      "src": "1927:11:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1917:21:121",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 67057,
                  "nodeType": "ExpressionStatement",
                  "src": "1917:21:121"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 67052,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1904:2:121"
            },
            "returnParameters": {
              "id": 67053,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1907:0:121"
            },
            "scope": 67106,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 67070,
            "nodeType": "ModifierDefinition",
            "src": "2322:103:121",
            "nodes": [],
            "body": {
              "id": 67069,
              "nodeType": "Block",
              "src": "2346:79:121",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 67062,
                      "name": "_nonReentrantBefore",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67086,
                      "src": "2356:19:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 67063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2356:21:121",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67064,
                  "nodeType": "ExpressionStatement",
                  "src": "2356:21:121"
                },
                {
                  "id": 67065,
                  "nodeType": "PlaceholderStatement",
                  "src": "2387:1:121"
                },
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 67066,
                      "name": "_nonReentrantAfter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67094,
                      "src": "2398:18:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 67067,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2398:20:121",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 67068,
                  "nodeType": "ExpressionStatement",
                  "src": "2398:20:121"
                }
              ]
            },
            "documentation": {
              "id": 67060,
              "nodeType": "StructuredDocumentation",
              "src": "1951:366:121",
              "text": " @dev Prevents a contract from calling itself, directly or indirectly.\n Calling a `nonReentrant` function from another `nonReentrant`\n function is not supported. It is possible to prevent this from happening\n by making the `nonReentrant` function external, and making it call a\n `private` function that does the actual work."
            },
            "name": "nonReentrant",
            "nameLocation": "2331:12:121",
            "parameters": {
              "id": 67061,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2343:2:121"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 67086,
            "nodeType": "FunctionDefinition",
            "src": "2431:307:121",
            "nodes": [],
            "body": {
              "id": 67085,
              "nodeType": "Block",
              "src": "2470:268:121",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 67075,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67073,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67048,
                      "src": "2558:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 67074,
                      "name": "ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67046,
                      "src": "2569:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2558:18:121",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 67080,
                  "nodeType": "IfStatement",
                  "src": "2554:86:121",
                  "trueBody": {
                    "id": 67079,
                    "nodeType": "Block",
                    "src": "2578:62:121",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 67076,
                            "name": "ReentrancyGuardReentrantCall",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 67051,
                            "src": "2599:28:121",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 67077,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2599:30:121",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 67078,
                        "nodeType": "RevertStatement",
                        "src": "2592:37:121"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 67083,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67081,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67048,
                      "src": "2714:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 67082,
                      "name": "ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67046,
                      "src": "2724:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2714:17:121",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 67084,
                  "nodeType": "ExpressionStatement",
                  "src": "2714:17:121"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_nonReentrantBefore",
            "nameLocation": "2440:19:121",
            "parameters": {
              "id": 67071,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2459:2:121"
            },
            "returnParameters": {
              "id": 67072,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2470:0:121"
            },
            "scope": 67106,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 67094,
            "nodeType": "FunctionDefinition",
            "src": "2744:208:121",
            "nodes": [],
            "body": {
              "id": 67093,
              "nodeType": "Block",
              "src": "2782:170:121",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 67091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 67089,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67048,
                      "src": "2924:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 67090,
                      "name": "NOT_ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67043,
                      "src": "2934:11:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2924:21:121",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 67092,
                  "nodeType": "ExpressionStatement",
                  "src": "2924:21:121"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_nonReentrantAfter",
            "nameLocation": "2753:18:121",
            "parameters": {
              "id": 67087,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2771:2:121"
            },
            "returnParameters": {
              "id": 67088,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2782:0:121"
            },
            "scope": 67106,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 67105,
            "nodeType": "FunctionDefinition",
            "src": "3131:106:121",
            "nodes": [],
            "body": {
              "id": 67104,
              "nodeType": "Block",
              "src": "3195:42:121",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 67102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 67100,
                      "name": "_status",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67048,
                      "src": "3212:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 67101,
                      "name": "ENTERED",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 67046,
                      "src": "3223:7:121",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3212:18:121",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 67099,
                  "id": 67103,
                  "nodeType": "Return",
                  "src": "3205:25:121"
                }
              ]
            },
            "documentation": {
              "id": 67095,
              "nodeType": "StructuredDocumentation",
              "src": "2958:168:121",
              "text": " @dev Returns true if the reentrancy guard is currently set to \"entered\", which indicates there is a\n `nonReentrant` function in the call stack."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_reentrancyGuardEntered",
            "nameLocation": "3140:23:121",
            "parameters": {
              "id": 67096,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3163:2:121"
            },
            "returnParameters": {
              "id": 67099,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 67098,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 67105,
                  "src": "3189:4:121",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 67097,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3189:4:121",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3188:6:121"
            },
            "scope": 67106,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ReentrancyGuard",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 67040,
          "nodeType": "StructuredDocumentation",
          "src": "135:750:121",
          "text": " @dev Contract module that helps prevent reentrant calls to a function.\n Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier\n available, which can be applied to functions to make sure there are no nested\n (reentrant) calls to them.\n Note that because there is a single `nonReentrant` guard, functions marked as\n `nonReentrant` may not call one another. This can be worked around by making\n those functions `private`, and then adding `external` `nonReentrant` entry\n points to them.\n TIP: If you would like to learn more about reentrancy and alternative ways\n to protect against it, check out our blog post\n https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul]."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          67106
        ],
        "name": "ReentrancyGuard",
        "nameLocation": "904:15:121",
        "scope": 67107,
        "usedErrors": [
          67051
        ],
        "usedEvents": []
      }
    ],
    "license": "MIT"
  },
  "id": 121
} as const;
