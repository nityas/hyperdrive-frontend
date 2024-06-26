export const IHyperdriveRegistry = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                }
            ],
            "name": "getHyperdriveInfo",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
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
        "getHyperdriveInfo(address)": "32ddcb88"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveRegistry.sol\":\"IHyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168\",\"dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC\"]}},\"version\":1}",
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
                            "name": "_hyperdriveInstance",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getHyperdriveInfo",
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
                "methods": {
                    "getHyperdriveInfo(address)": {
                        "params": {
                            "_hyperdriveInstance": "The hyperdrive instance address."
                        },
                        "returns": {
                            "_0": "The uint256 value set by governance."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "getHyperdriveInfo(address)": {
                        "notice": "Allows anyone to get the info for a hyperdrive instance."
                    }
                },
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
                "contracts/src/interfaces/IHyperdriveRegistry.sol": "IHyperdriveRegistry"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IHyperdriveRegistry.sol": {
                "keccak256": "0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00",
                "urls": [
                    "bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168",
                    "dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IHyperdriveRegistry.sol",
        "id": 11219,
        "exportedSymbols": {
            "IHyperdriveRegistry": [
                11218
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:360:93",
        "nodes": [
            {
                "id": 11209,
                "nodeType": "PragmaDirective",
                "src": "39:23:93",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11218,
                "nodeType": "ContractDefinition",
                "src": "64:334:93",
                "nodes": [
                    {
                        "id": 11217,
                        "nodeType": "FunctionDefinition",
                        "src": "294:102:93",
                        "nodes": [],
                        "documentation": {
                            "id": 11210,
                            "nodeType": "StructuredDocumentation",
                            "src": "100:189:93",
                            "text": "@notice Allows anyone to get the info for a hyperdrive instance.\n @param _hyperdriveInstance The hyperdrive instance address.\n @return The uint256 value set by governance."
                        },
                        "functionSelector": "32ddcb88",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getHyperdriveInfo",
                        "nameLocation": "303:17:93",
                        "parameters": {
                            "id": 11213,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11212,
                                    "mutability": "mutable",
                                    "name": "_hyperdriveInstance",
                                    "nameLocation": "338:19:93",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11217,
                                    "src": "330:27:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11211,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "330:7:93",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "320:43:93"
                        },
                        "returnParameters": {
                            "id": 11216,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11215,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11217,
                                    "src": "387:7:93",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11214,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "387:7:93",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "386:9:93"
                        },
                        "scope": 11218,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IHyperdriveRegistry",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11218
                ],
                "name": "IHyperdriveRegistry",
                "nameLocation": "74:19:93",
                "scope": 11219,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 93
};
