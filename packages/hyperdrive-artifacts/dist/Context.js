export const Context = {
    "abi": [],
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [],
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
                "lib/openzeppelin-contracts/contracts/utils/Context.sol": "Context"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
                "urls": [
                    "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
                    "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/Context.sol",
        "id": 71571,
        "exportedSymbols": {
            "Context": [
                71570
            ]
        },
        "nodeType": "SourceUnit",
        "src": "101:862:168",
        "nodes": [
            {
                "id": 71542,
                "nodeType": "PragmaDirective",
                "src": "101:24:168",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 71570,
                "nodeType": "ContractDefinition",
                "src": "624:338:168",
                "nodes": [
                    {
                        "id": 71552,
                        "nodeType": "FunctionDefinition",
                        "src": "656:96:168",
                        "nodes": [],
                        "body": {
                            "id": 71551,
                            "nodeType": "Block",
                            "src": "718:34:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "id": 71548,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "735:3:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 71549,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "739:6:168",
                                        "memberName": "sender",
                                        "nodeType": "MemberAccess",
                                        "src": "735:10:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 71547,
                                    "id": 71550,
                                    "nodeType": "Return",
                                    "src": "728:17:168"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_msgSender",
                        "nameLocation": "665:10:168",
                        "parameters": {
                            "id": 71544,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "675:2:168"
                        },
                        "returnParameters": {
                            "id": 71547,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71546,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71552,
                                    "src": "709:7:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71545,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "709:7:168",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "708:9:168"
                        },
                        "scope": 71570,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71561,
                        "nodeType": "FunctionDefinition",
                        "src": "758:99:168",
                        "nodes": [],
                        "body": {
                            "id": 71560,
                            "nodeType": "Block",
                            "src": "825:32:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "expression": {
                                            "id": 71557,
                                            "name": "msg",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -15,
                                            "src": "842:3:168",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_magic_message",
                                                "typeString": "msg"
                                            }
                                        },
                                        "id": 71558,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "846:4:168",
                                        "memberName": "data",
                                        "nodeType": "MemberAccess",
                                        "src": "842:8:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_calldata_ptr",
                                            "typeString": "bytes calldata"
                                        }
                                    },
                                    "functionReturnParameters": 71556,
                                    "id": 71559,
                                    "nodeType": "Return",
                                    "src": "835:15:168"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_msgData",
                        "nameLocation": "767:8:168",
                        "parameters": {
                            "id": 71553,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "775:2:168"
                        },
                        "returnParameters": {
                            "id": 71556,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71555,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71561,
                                    "src": "809:14:168",
                                    "stateVariable": false,
                                    "storageLocation": "calldata",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_calldata_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 71554,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "809:5:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "808:16:168"
                        },
                        "scope": 71570,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71569,
                        "nodeType": "FunctionDefinition",
                        "src": "863:97:168",
                        "nodes": [],
                        "body": {
                            "id": 71568,
                            "nodeType": "Block",
                            "src": "935:25:168",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "hexValue": "30",
                                        "id": 71566,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "952:1:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_rational_0_by_1",
                                            "typeString": "int_const 0"
                                        },
                                        "value": "0"
                                    },
                                    "functionReturnParameters": 71565,
                                    "id": 71567,
                                    "nodeType": "Return",
                                    "src": "945:8:168"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_contextSuffixLength",
                        "nameLocation": "872:20:168",
                        "parameters": {
                            "id": 71562,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "892:2:168"
                        },
                        "returnParameters": {
                            "id": 71565,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71564,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71569,
                                    "src": "926:7:168",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 71563,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "926:7:168",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "925:9:168"
                        },
                        "scope": 71570,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "Context",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 71543,
                    "nodeType": "StructuredDocumentation",
                    "src": "127:496:168",
                    "text": " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71570
                ],
                "name": "Context",
                "nameLocation": "642:7:168",
                "scope": 71571,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 168
};
