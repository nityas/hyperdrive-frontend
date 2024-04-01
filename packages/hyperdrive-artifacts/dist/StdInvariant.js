export const StdInvariant = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}",
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
        "id": 34964,
        "exportedSymbols": {
            "StdInvariant": [
                34963
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:3043:149",
        "nodes": [
            {
                "id": 34741,
                "nodeType": "PragmaDirective",
                "src": "32:31:149",
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
                "id": 34742,
                "nodeType": "PragmaDirective",
                "src": "65:33:149",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 34963,
                "nodeType": "ContractDefinition",
                "src": "100:2974:149",
                "nodes": [
                    {
                        "id": 34748,
                        "nodeType": "StructDefinition",
                        "src": "137:77:149",
                        "nodes": [],
                        "canonicalName": "StdInvariant.FuzzSelector",
                        "members": [
                            {
                                "constant": false,
                                "id": 34744,
                                "mutability": "mutable",
                                "name": "addr",
                                "nameLocation": "175:4:149",
                                "nodeType": "VariableDeclaration",
                                "scope": 34748,
                                "src": "167:12:149",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 34743,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "167:7:149",
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
                                "id": 34747,
                                "mutability": "mutable",
                                "name": "selectors",
                                "nameLocation": "198:9:149",
                                "nodeType": "VariableDeclaration",
                                "scope": 34748,
                                "src": "189:18:149",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                    "typeString": "bytes4[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 34745,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "189:6:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "id": 34746,
                                    "nodeType": "ArrayTypeName",
                                    "src": "189:8:149",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                        "typeString": "bytes4[]"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "FuzzSelector",
                        "nameLocation": "144:12:149",
                        "scope": 34963,
                        "visibility": "public"
                    },
                    {
                        "id": 34751,
                        "nodeType": "VariableDeclaration",
                        "src": "220:36:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedContracts",
                        "nameLocation": "238:18:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34749,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "220:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34750,
                            "nodeType": "ArrayTypeName",
                            "src": "220:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34754,
                        "nodeType": "VariableDeclaration",
                        "src": "262:34:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedSenders",
                        "nameLocation": "280:16:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34752,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "262:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34753,
                            "nodeType": "ArrayTypeName",
                            "src": "262:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34757,
                        "nodeType": "VariableDeclaration",
                        "src": "302:36:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedContracts",
                        "nameLocation": "320:18:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34755,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "302:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34756,
                            "nodeType": "ArrayTypeName",
                            "src": "302:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34760,
                        "nodeType": "VariableDeclaration",
                        "src": "344:34:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSenders",
                        "nameLocation": "362:16:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34758,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "344:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34759,
                            "nodeType": "ArrayTypeName",
                            "src": "344:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34763,
                        "nodeType": "VariableDeclaration",
                        "src": "385:35:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedArtifacts",
                        "nameLocation": "402:18:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34761,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "385:6:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 34762,
                            "nodeType": "ArrayTypeName",
                            "src": "385:8:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34766,
                        "nodeType": "VariableDeclaration",
                        "src": "426:35:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifacts",
                        "nameLocation": "443:18:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34764,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "426:6:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 34765,
                            "nodeType": "ArrayTypeName",
                            "src": "426:8:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34770,
                        "nodeType": "VariableDeclaration",
                        "src": "468:49:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifactSelectors",
                        "nameLocation": "491:26:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34768,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 34767,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "468:12:149"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 34748,
                                    "src": "468:12:149"
                                },
                                "referencedDeclaration": 34748,
                                "src": "468:12:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$34748_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 34769,
                            "nodeType": "ArrayTypeName",
                            "src": "468:14:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34774,
                        "nodeType": "VariableDeclaration",
                        "src": "523:41:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSelectors",
                        "nameLocation": "546:18:149",
                        "scope": 34963,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34772,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 34771,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "523:12:149"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 34748,
                                    "src": "523:12:149"
                                },
                                "referencedDeclaration": 34748,
                                "src": "523:12:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$34748_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 34773,
                            "nodeType": "ArrayTypeName",
                            "src": "523:14:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34786,
                        "nodeType": "FunctionDefinition",
                        "src": "649:126:149",
                        "nodes": [],
                        "body": {
                            "id": 34785,
                            "nodeType": "Block",
                            "src": "713:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34782,
                                                "name": "newExcludedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34776,
                                                "src": "747:20:149",
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
                                                "id": 34779,
                                                "name": "_excludedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34751,
                                                "src": "723:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34781,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "742:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "723:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34783,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "723:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34784,
                                    "nodeType": "ExpressionStatement",
                                    "src": "723:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContract",
                        "nameLocation": "658:15:149",
                        "parameters": {
                            "id": 34777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34776,
                                    "mutability": "mutable",
                                    "name": "newExcludedContract_",
                                    "nameLocation": "682:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34786,
                                    "src": "674:28:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34775,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "674:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "673:30:149"
                        },
                        "returnParameters": {
                            "id": 34778,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "713:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34798,
                        "nodeType": "FunctionDefinition",
                        "src": "781:118:149",
                        "nodes": [],
                        "body": {
                            "id": 34797,
                            "nodeType": "Block",
                            "src": "841:58:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34794,
                                                "name": "newExcludedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34788,
                                                "src": "873:18:149",
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
                                                "id": 34791,
                                                "name": "_excludedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34754,
                                                "src": "851:16:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34793,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "868:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "851:21:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34795,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "851:41:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34796,
                                    "nodeType": "ExpressionStatement",
                                    "src": "851:41:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSender",
                        "nameLocation": "790:13:149",
                        "parameters": {
                            "id": 34789,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34788,
                                    "mutability": "mutable",
                                    "name": "newExcludedSender_",
                                    "nameLocation": "812:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34798,
                                    "src": "804:26:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34787,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "804:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "803:28:149"
                        },
                        "returnParameters": {
                            "id": 34790,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "841:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34810,
                        "nodeType": "FunctionDefinition",
                        "src": "905:132:149",
                        "nodes": [],
                        "body": {
                            "id": 34809,
                            "nodeType": "Block",
                            "src": "975:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34806,
                                                "name": "newExcludedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34800,
                                                "src": "1009:20:149",
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
                                                "id": 34803,
                                                "name": "_excludedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34763,
                                                "src": "985:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34805,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1004:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "985:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 34807,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "985:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34808,
                                    "nodeType": "ExpressionStatement",
                                    "src": "985:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifact",
                        "nameLocation": "914:15:149",
                        "parameters": {
                            "id": 34801,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34800,
                                    "mutability": "mutable",
                                    "name": "newExcludedArtifact_",
                                    "nameLocation": "944:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34810,
                                    "src": "930:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34799,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "930:6:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "929:36:149"
                        },
                        "returnParameters": {
                            "id": 34802,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "975:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34822,
                        "nodeType": "FunctionDefinition",
                        "src": "1043:131:149",
                        "nodes": [],
                        "body": {
                            "id": 34821,
                            "nodeType": "Block",
                            "src": "1112:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34818,
                                                "name": "newTargetedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34812,
                                                "src": "1146:20:149",
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
                                                "id": 34815,
                                                "name": "_targetedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34766,
                                                "src": "1122:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34817,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1141:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1122:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 34819,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1122:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34820,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1122:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifact",
                        "nameLocation": "1052:14:149",
                        "parameters": {
                            "id": 34813,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34812,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifact_",
                                    "nameLocation": "1081:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34822,
                                    "src": "1067:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34811,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1067:6:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1066:36:149"
                        },
                        "returnParameters": {
                            "id": 34814,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1112:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34835,
                        "nodeType": "FunctionDefinition",
                        "src": "1180:169:149",
                        "nodes": [],
                        "body": {
                            "id": 34834,
                            "nodeType": "Block",
                            "src": "1271:78:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34831,
                                                "name": "newTargetedArtifactSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34825,
                                                "src": "1313:28:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34748_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34748_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34828,
                                                "name": "_targetedArtifactSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34770,
                                                "src": "1281:26:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34830,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1308:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1281:31:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$34748_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 34832,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1281:61:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34833,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1281:61:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelector",
                        "nameLocation": "1189:22:149",
                        "parameters": {
                            "id": 34826,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34825,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifactSelector_",
                                    "nameLocation": "1232:28:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34835,
                                    "src": "1212:48:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$34748_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 34824,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 34823,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1212:12:149"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 34748,
                                            "src": "1212:12:149"
                                        },
                                        "referencedDeclaration": 34748,
                                        "src": "1212:12:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$34748_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1211:50:149"
                        },
                        "returnParameters": {
                            "id": 34827,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1271:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34847,
                        "nodeType": "FunctionDefinition",
                        "src": "1355:125:149",
                        "nodes": [],
                        "body": {
                            "id": 34846,
                            "nodeType": "Block",
                            "src": "1418:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34843,
                                                "name": "newTargetedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34837,
                                                "src": "1452:20:149",
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
                                                "id": 34840,
                                                "name": "_targetedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34757,
                                                "src": "1428:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34842,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1447:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1428:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34844,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1428:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34845,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1428:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContract",
                        "nameLocation": "1364:14:149",
                        "parameters": {
                            "id": 34838,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34837,
                                    "mutability": "mutable",
                                    "name": "newTargetedContract_",
                                    "nameLocation": "1387:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34847,
                                    "src": "1379:28:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34836,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1379:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1378:30:149"
                        },
                        "returnParameters": {
                            "id": 34839,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1418:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34860,
                        "nodeType": "FunctionDefinition",
                        "src": "1486:137:149",
                        "nodes": [],
                        "body": {
                            "id": 34859,
                            "nodeType": "Block",
                            "src": "1561:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34856,
                                                "name": "newTargetedSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34850,
                                                "src": "1595:20:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34748_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34748_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34853,
                                                "name": "_targetedSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34774,
                                                "src": "1571:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34855,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1590:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1571:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$34748_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 34857,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1571:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34858,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1571:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelector",
                        "nameLocation": "1495:14:149",
                        "parameters": {
                            "id": 34851,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34850,
                                    "mutability": "mutable",
                                    "name": "newTargetedSelector_",
                                    "nameLocation": "1530:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34860,
                                    "src": "1510:40:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$34748_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 34849,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 34848,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1510:12:149"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 34748,
                                            "src": "1510:12:149"
                                        },
                                        "referencedDeclaration": 34748,
                                        "src": "1510:12:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$34748_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1509:42:149"
                        },
                        "returnParameters": {
                            "id": 34852,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1561:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34872,
                        "nodeType": "FunctionDefinition",
                        "src": "1629:117:149",
                        "nodes": [],
                        "body": {
                            "id": 34871,
                            "nodeType": "Block",
                            "src": "1688:58:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34868,
                                                "name": "newTargetedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34862,
                                                "src": "1720:18:149",
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
                                                "id": 34865,
                                                "name": "_targetedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34760,
                                                "src": "1698:16:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34867,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1715:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1698:21:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34869,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1698:41:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34870,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1698:41:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSender",
                        "nameLocation": "1638:12:149",
                        "parameters": {
                            "id": 34863,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34862,
                                    "mutability": "mutable",
                                    "name": "newTargetedSender_",
                                    "nameLocation": "1659:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34872,
                                    "src": "1651:26:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34861,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1651:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1650:28:149"
                        },
                        "returnParameters": {
                            "id": 34864,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1688:0:149"
                        },
                        "scope": 34963,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34883,
                        "nodeType": "FunctionDefinition",
                        "src": "1875:141:149",
                        "nodes": [],
                        "body": {
                            "id": 34882,
                            "nodeType": "Block",
                            "src": "1960:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34880,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34878,
                                            "name": "excludedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34876,
                                            "src": "1970:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34879,
                                            "name": "_excludedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34763,
                                            "src": "1991:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "1970:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 34881,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1970:39:149"
                                }
                            ]
                        },
                        "functionSelector": "b5508aa9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifacts",
                        "nameLocation": "1884:16:149",
                        "parameters": {
                            "id": 34873,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1900:2:149"
                        },
                        "returnParameters": {
                            "id": 34877,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34876,
                                    "mutability": "mutable",
                                    "name": "excludedArtifacts_",
                                    "nameLocation": "1940:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34883,
                                    "src": "1924:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34874,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:6:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 34875,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1924:8:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1923:36:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34894,
                        "nodeType": "FunctionDefinition",
                        "src": "2022:142:149",
                        "nodes": [],
                        "body": {
                            "id": 34893,
                            "nodeType": "Block",
                            "src": "2108:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34891,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34889,
                                            "name": "excludedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34887,
                                            "src": "2118:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34890,
                                            "name": "_excludedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34751,
                                            "src": "2139:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2118:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34892,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2118:39:149"
                                }
                            ]
                        },
                        "functionSelector": "e20c9f71",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContracts",
                        "nameLocation": "2031:16:149",
                        "parameters": {
                            "id": 34884,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2047:2:149"
                        },
                        "returnParameters": {
                            "id": 34888,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34887,
                                    "mutability": "mutable",
                                    "name": "excludedContracts_",
                                    "nameLocation": "2088:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34894,
                                    "src": "2071:35:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34885,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2071:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34886,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2071:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2070:37:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34905,
                        "nodeType": "FunctionDefinition",
                        "src": "2170:134:149",
                        "nodes": [],
                        "body": {
                            "id": 34904,
                            "nodeType": "Block",
                            "src": "2252:52:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34902,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34900,
                                            "name": "excludedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34898,
                                            "src": "2262:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34901,
                                            "name": "_excludedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34754,
                                            "src": "2281:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2262:35:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34903,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2262:35:149"
                                }
                            ]
                        },
                        "functionSelector": "1ed7831c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSenders",
                        "nameLocation": "2179:14:149",
                        "parameters": {
                            "id": 34895,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2193:2:149"
                        },
                        "returnParameters": {
                            "id": 34899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34898,
                                    "mutability": "mutable",
                                    "name": "excludedSenders_",
                                    "nameLocation": "2234:16:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34905,
                                    "src": "2217:33:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34896,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2217:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34897,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2217:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2216:35:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34916,
                        "nodeType": "FunctionDefinition",
                        "src": "2310:140:149",
                        "nodes": [],
                        "body": {
                            "id": 34915,
                            "nodeType": "Block",
                            "src": "2394:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34913,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34911,
                                            "name": "targetedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34909,
                                            "src": "2404:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34912,
                                            "name": "_targetedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34766,
                                            "src": "2425:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2404:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 34914,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2404:39:149"
                                }
                            ]
                        },
                        "functionSelector": "85226c81",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifacts",
                        "nameLocation": "2319:15:149",
                        "parameters": {
                            "id": 34906,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2334:2:149"
                        },
                        "returnParameters": {
                            "id": 34910,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34909,
                                    "mutability": "mutable",
                                    "name": "targetedArtifacts_",
                                    "nameLocation": "2374:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34916,
                                    "src": "2358:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34907,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2358:6:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 34908,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2358:8:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2357:36:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34928,
                        "nodeType": "FunctionDefinition",
                        "src": "2456:178:149",
                        "nodes": [],
                        "body": {
                            "id": 34927,
                            "nodeType": "Block",
                            "src": "2562:72:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34925,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34923,
                                            "name": "targetedArtifactSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34921,
                                            "src": "2572:26:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34924,
                                            "name": "_targetedArtifactSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34770,
                                            "src": "2601:26:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2572:55:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 34926,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2572:55:149"
                                }
                            ]
                        },
                        "functionSelector": "66d9a9a0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelectors",
                        "nameLocation": "2465:23:149",
                        "parameters": {
                            "id": 34917,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2488:2:149"
                        },
                        "returnParameters": {
                            "id": 34922,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34921,
                                    "mutability": "mutable",
                                    "name": "targetedArtifactSelectors_",
                                    "nameLocation": "2534:26:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34928,
                                    "src": "2512:48:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34919,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 34918,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2512:12:149"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 34748,
                                                "src": "2512:12:149"
                                            },
                                            "referencedDeclaration": 34748,
                                            "src": "2512:12:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$34748_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 34920,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2512:14:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2511:50:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34939,
                        "nodeType": "FunctionDefinition",
                        "src": "2640:141:149",
                        "nodes": [],
                        "body": {
                            "id": 34938,
                            "nodeType": "Block",
                            "src": "2725:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34936,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34934,
                                            "name": "targetedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34932,
                                            "src": "2735:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34935,
                                            "name": "_targetedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34757,
                                            "src": "2756:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2735:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34937,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2735:39:149"
                                }
                            ]
                        },
                        "functionSelector": "3f7286f4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContracts",
                        "nameLocation": "2649:15:149",
                        "parameters": {
                            "id": 34929,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2664:2:149"
                        },
                        "returnParameters": {
                            "id": 34933,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34932,
                                    "mutability": "mutable",
                                    "name": "targetedContracts_",
                                    "nameLocation": "2705:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34939,
                                    "src": "2688:35:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34930,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2688:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34931,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2688:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2687:37:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34951,
                        "nodeType": "FunctionDefinition",
                        "src": "2787:146:149",
                        "nodes": [],
                        "body": {
                            "id": 34950,
                            "nodeType": "Block",
                            "src": "2877:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34948,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34946,
                                            "name": "targetedSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34944,
                                            "src": "2887:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34947,
                                            "name": "_targetedSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34774,
                                            "src": "2908:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2887:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 34949,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2887:39:149"
                                }
                            ]
                        },
                        "functionSelector": "916a17c6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelectors",
                        "nameLocation": "2796:15:149",
                        "parameters": {
                            "id": 34940,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2811:2:149"
                        },
                        "returnParameters": {
                            "id": 34945,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34944,
                                    "mutability": "mutable",
                                    "name": "targetedSelectors_",
                                    "nameLocation": "2857:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34951,
                                    "src": "2835:40:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34942,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 34941,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2835:12:149"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 34748,
                                                "src": "2835:12:149"
                                            },
                                            "referencedDeclaration": 34748,
                                            "src": "2835:12:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$34748_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 34943,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2835:14:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34748_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2834:42:149"
                        },
                        "scope": 34963,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34962,
                        "nodeType": "FunctionDefinition",
                        "src": "2939:133:149",
                        "nodes": [],
                        "body": {
                            "id": 34961,
                            "nodeType": "Block",
                            "src": "3020:52:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34959,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34957,
                                            "name": "targetedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34955,
                                            "src": "3030:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34958,
                                            "name": "_targetedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34760,
                                            "src": "3049:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "3030:35:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34960,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3030:35:149"
                                }
                            ]
                        },
                        "functionSelector": "3e5e3c23",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSenders",
                        "nameLocation": "2948:13:149",
                        "parameters": {
                            "id": 34952,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2961:2:149"
                        },
                        "returnParameters": {
                            "id": 34956,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34955,
                                    "mutability": "mutable",
                                    "name": "targetedSenders_",
                                    "nameLocation": "3002:16:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34962,
                                    "src": "2985:33:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34953,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2985:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34954,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2985:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2984:35:149"
                        },
                        "scope": 34963,
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
                    34963
                ],
                "name": "StdInvariant",
                "nameLocation": "118:12:149",
                "scope": 34964,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 149
};
