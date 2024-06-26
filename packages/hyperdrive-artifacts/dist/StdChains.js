export const StdChains = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"StdChains provides information about EVM compatible chains that can be used in scripts/tests. For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the alias used in this contract, which can be found as the first argument to the `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function. There are two main ways to use this contract:   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or      `setChain(string memory chainAlias, Chain memory chain)`   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`. The first time either of those are used, chains are initialized with the default set of RPC URLs. This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in `defaultRpcUrls`. The `setChain` function is straightforward, and it simply saves off the given chain data. The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say we want to retrieve the RPC URL for `mainnet`:   - If you have specified data with `setChain`, it will return that.   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it     is valid (e.g. a URL is specified, or an environment variable is given and exists).   - If neither of the above conditions is met, the default data is returned. Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdChains.sol\":\"StdChains\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}",
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
                "lib/forge-std/src/StdChains.sol": "StdChains"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdChains.sol": {
                "keccak256": "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d",
                "urls": [
                    "bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4",
                    "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"
                ],
                "license": "MIT"
            },
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
        "absolutePath": "lib/forge-std/src/StdChains.sol",
        "id": 31821,
        "exportedSymbols": {
            "StdChains": [
                31820
            ],
            "VmSafe": [
                40306
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10885:146",
        "nodes": [
            {
                "id": 31102,
                "nodeType": "PragmaDirective",
                "src": "32:31:146",
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
                "id": 31104,
                "nodeType": "ImportDirective",
                "src": "65:32:146",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 31821,
                "sourceUnit": 40779,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 31103,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40306,
                            "src": "73:6:146",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 31820,
                "nodeType": "ContractDefinition",
                "src": "1899:9017:146",
                "nodes": [
                    {
                        "id": 31122,
                        "nodeType": "VariableDeclaration",
                        "src": "1933:92:146",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "1957:2:146",
                        "scope": 31820,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 31107,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 31106,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "1933:6:146"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40306,
                                "src": "1933:6:146"
                            },
                            "referencedDeclaration": 40306,
                            "src": "1933:6:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "arguments": [
                                        {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "hexValue": "6865766d20636865617420636f6465",
                                                                    "id": 31116,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "2003:17:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                                                        "typeString": "literal_string \"hevm cheat code\""
                                                                    },
                                                                    "value": "hevm cheat code"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d",
                                                                        "typeString": "literal_string \"hevm cheat code\""
                                                                    }
                                                                ],
                                                                "id": 31115,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "1993:9:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 31117,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1993:28:146",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_bytes32",
                                                                "typeString": "bytes32"
                                                            }
                                                        ],
                                                        "id": 31114,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "1985:7:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 31113,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "1985:7:146",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 31118,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1985:37:146",
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
                                                "id": 31112,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "1977:7:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint160_$",
                                                    "typeString": "type(uint160)"
                                                },
                                                "typeName": {
                                                    "id": 31111,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "1977:7:146",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 31119,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1977:46:146",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint160",
                                                "typeString": "uint160"
                                            }
                                        }
                                    ],
                                    "expression": {
                                        "argumentTypes": [
                                            {
                                                "typeIdentifier": "t_uint160",
                                                "typeString": "uint160"
                                            }
                                        ],
                                        "id": 31110,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "1969:7:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                        },
                                        "typeName": {
                                            "id": 31109,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1969:7:146",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 31120,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "1969:55:146",
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
                                "id": 31108,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40306,
                                "src": "1962:6:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40306_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 31121,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1962:63:146",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31124,
                        "nodeType": "VariableDeclaration",
                        "src": "2032:33:146",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "stdChainsInitialized",
                        "nameLocation": "2045:20:146",
                        "scope": 31820,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 31123,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "2032:4:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31131,
                        "nodeType": "StructDefinition",
                        "src": "2072:93:146",
                        "nodes": [],
                        "canonicalName": "StdChains.ChainData",
                        "members": [
                            {
                                "constant": false,
                                "id": 31126,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "2106:4:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31131,
                                "src": "2099:11:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31125,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2099:6:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31128,
                                "mutability": "mutable",
                                "name": "chainId",
                                "nameLocation": "2128:7:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31131,
                                "src": "2120:15:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 31127,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2120:7:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31130,
                                "mutability": "mutable",
                                "name": "rpcUrl",
                                "nameLocation": "2152:6:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31131,
                                "src": "2145:13:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31129,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2145:6:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "ChainData",
                        "nameLocation": "2079:9:146",
                        "scope": 31820,
                        "visibility": "public"
                    },
                    {
                        "id": 31140,
                        "nodeType": "StructDefinition",
                        "src": "2171:598:146",
                        "nodes": [],
                        "canonicalName": "StdChains.Chain",
                        "members": [
                            {
                                "constant": false,
                                "id": 31133,
                                "mutability": "mutable",
                                "name": "name",
                                "nameLocation": "2228:4:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31140,
                                "src": "2221:11:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31132,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2221:6:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31135,
                                "mutability": "mutable",
                                "name": "chainId",
                                "nameLocation": "2283:7:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31140,
                                "src": "2275:15:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                },
                                "typeName": {
                                    "id": 31134,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2275:7:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31137,
                                "mutability": "mutable",
                                "name": "chainAlias",
                                "nameLocation": "2383:10:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31140,
                                "src": "2376:17:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31136,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2376:6:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            },
                            {
                                "constant": false,
                                "id": 31139,
                                "mutability": "mutable",
                                "name": "rpcUrl",
                                "nameLocation": "2756:6:146",
                                "nodeType": "VariableDeclaration",
                                "scope": 31140,
                                "src": "2749:13:146",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                },
                                "typeName": {
                                    "id": 31138,
                                    "name": "string",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2749:6:146",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_storage_ptr",
                                        "typeString": "string"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "Chain",
                        "nameLocation": "2178:5:146",
                        "scope": 31820,
                        "visibility": "public"
                    },
                    {
                        "id": 31145,
                        "nodeType": "VariableDeclaration",
                        "src": "2873:39:146",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "chains",
                        "nameLocation": "2906:6:146",
                        "scope": 31820,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31140_storage_$",
                            "typeString": "mapping(string => struct StdChains.Chain)"
                        },
                        "typeName": {
                            "id": 31144,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 31141,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2881:6:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2873:24:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31140_storage_$",
                                "typeString": "mapping(string => struct StdChains.Chain)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 31143,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 31142,
                                    "name": "Chain",
                                    "nameLocations": [
                                        "2891:5:146"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 31140,
                                    "src": "2891:5:146"
                                },
                                "referencedDeclaration": 31140,
                                "src": "2891:5:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Chain_$31140_storage_ptr",
                                    "typeString": "struct StdChains.Chain"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31149,
                        "nodeType": "VariableDeclaration",
                        "src": "2978:48:146",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "defaultRpcUrls",
                        "nameLocation": "3012:14:146",
                        "scope": 31820,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                            "typeString": "mapping(string => string)"
                        },
                        "typeName": {
                            "id": 31148,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 31146,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2986:6:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "2978:25:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                "typeString": "mapping(string => string)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 31147,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "2996:6:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31153,
                        "nodeType": "VariableDeclaration",
                        "src": "3075:44:146",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "idToAlias",
                        "nameLocation": "3110:9:146",
                        "scope": 31820,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                            "typeString": "mapping(uint256 => string)"
                        },
                        "typeName": {
                            "id": 31152,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 31150,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "3083:7:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "3075:26:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                "typeString": "mapping(uint256 => string)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 31151,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "3094:6:146",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31156,
                        "nodeType": "VariableDeclaration",
                        "src": "3126:44:146",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "fallbackToDefaultRpcUrls",
                        "nameLocation": "3139:24:146",
                        "scope": 31820,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                        },
                        "typeName": {
                            "id": 31154,
                            "name": "bool",
                            "nodeType": "ElementaryTypeName",
                            "src": "3126:4:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            }
                        },
                        "value": {
                            "hexValue": "74727565",
                            "id": 31155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3166:4:146",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                            },
                            "value": "true"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 31208,
                        "nodeType": "FunctionDefinition",
                        "src": "3255:524:146",
                        "nodes": [],
                        "body": {
                            "id": 31207,
                            "nodeType": "Block",
                            "src": "3345:434:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31171,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 31167,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31158,
                                                                "src": "3369:10:146",
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
                                                            "id": 31166,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3363:5:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 31165,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3363:5:146",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 31168,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3363:17:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 31169,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3381:6:146",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3363:24:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31170,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3391:1:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3363:29:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                                                "id": 31172,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3394:69:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70",
                                                    "typeString": "literal_string \"StdChains getChain(string): Chain alias cannot be the empty string.\""
                                                },
                                                "value": "StdChains getChain(string): Chain alias cannot be the empty string."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_3d920aad82cc068f1a73b0fb2c703d0169baa46c8c67097012e1aca0cc8c8b70",
                                                    "typeString": "literal_string \"StdChains getChain(string): Chain alias cannot be the empty string.\""
                                                }
                                            ],
                                            "id": 31164,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3355:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31173,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3355:109:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31174,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3355:109:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 31175,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31782,
                                            "src": "3475:19:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 31176,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3475:21:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31177,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3475:21:146"
                                },
                                {
                                    "expression": {
                                        "id": 31182,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31178,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31162,
                                            "src": "3506:5:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "baseExpression": {
                                                "id": 31179,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31145,
                                                "src": "3514:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31140_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31181,
                                            "indexExpression": {
                                                "id": 31180,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31158,
                                                "src": "3521:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "3514:18:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "src": "3506:26:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31183,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3506:26:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31188,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 31185,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31162,
                                                        "src": "3563:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                            "typeString": "struct StdChains.Chain memory"
                                                        }
                                                    },
                                                    "id": 31186,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3569:7:146",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31135,
                                                    "src": "3563:13:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31187,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3580:1:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3563:18:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "537464436861696e7320676574436861696e28737472696e67293a20436861696e207769746820616c6961732022",
                                                                "id": 31193,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3619:49:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                                                    "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                                                },
                                                                "value": "StdChains getChain(string): Chain with alias \""
                                                            },
                                                            {
                                                                "id": 31194,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31158,
                                                                "src": "3670:10:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "22206e6f7420666f756e642e",
                                                                "id": 31195,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "3682:15:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397",
                                                                    "typeString": "literal_string \"\" not found.\""
                                                                },
                                                                "value": "\" not found."
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_be183459e9329da9bfc4a2fec17224f102b8a68c1139772e954a2d6fd9877e00",
                                                                    "typeString": "literal_string \"StdChains getChain(string): Chain with alias \"\""
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_be956cec6682d51b49f30c9beff2857436402411b7eee4082594e44819bcd397",
                                                                    "typeString": "literal_string \"\" not found.\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 31191,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "3602:3:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 31192,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "3606:12:146",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "3602:16:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 31196,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3602:96:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "id": 31190,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "3595:6:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31189,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "3595:6:146",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31197,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3595:104:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "id": 31184,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3542:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31198,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3542:167:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31199,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3542:167:146"
                                },
                                {
                                    "expression": {
                                        "id": 31205,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31200,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31162,
                                            "src": "3720:5:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 31202,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31158,
                                                    "src": "3754:10:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 31203,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31162,
                                                    "src": "3766:5:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                ],
                                                "id": 31201,
                                                "name": "getChainWithUpdatedRpcUrl",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31590,
                                                "src": "3728:25:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$31140_memory_ptr_$returns$_t_struct$_Chain_$31140_memory_ptr_$",
                                                    "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                                                }
                                            },
                                            "id": 31204,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "3728:44:146",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "3720:52:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31206,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3720:52:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChain",
                        "nameLocation": "3264:8:146",
                        "parameters": {
                            "id": 31159,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31158,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "3287:10:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31208,
                                    "src": "3273:24:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31157,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3273:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3272:26:146"
                        },
                        "returnParameters": {
                            "id": 31163,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31162,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "3338:5:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31208,
                                    "src": "3325:18:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31161,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31160,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "3325:5:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31140,
                                            "src": "3325:5:146"
                                        },
                                        "referencedDeclaration": 31140,
                                        "src": "3325:5:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3324:20:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31265,
                        "nodeType": "FunctionDefinition",
                        "src": "3785:541:146",
                        "nodes": [],
                        "body": {
                            "id": 31264,
                            "nodeType": "Block",
                            "src": "3866:460:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31219,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 31217,
                                                    "name": "chainId",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31210,
                                                    "src": "3884:7:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31218,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "3895:1:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "3884:12:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e2049442063616e6e6f7420626520302e",
                                                "id": 31220,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3898:52:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a",
                                                    "typeString": "literal_string \"StdChains getChain(uint256): Chain ID cannot be 0.\""
                                                },
                                                "value": "StdChains getChain(uint256): Chain ID cannot be 0."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_64f1cd082b277ed92a70b6890cc1e3b6ebd77bc6c9299e7ce82305de04926a4a",
                                                    "typeString": "literal_string \"StdChains getChain(uint256): Chain ID cannot be 0.\""
                                                }
                                            ],
                                            "id": 31216,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3876:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31221,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3876:75:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31222,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3876:75:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 31223,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31782,
                                            "src": "3961:19:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 31224,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3961:21:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31225,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3961:21:146"
                                },
                                {
                                    "assignments": [
                                        31227
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31227,
                                            "mutability": "mutable",
                                            "name": "chainAlias",
                                            "nameLocation": "4006:10:146",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31264,
                                            "src": "3992:24:146",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 31226,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3992:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31231,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 31228,
                                            "name": "idToAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31153,
                                            "src": "4019:9:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                "typeString": "mapping(uint256 => string storage ref)"
                                            }
                                        },
                                        "id": 31230,
                                        "indexExpression": {
                                            "id": 31229,
                                            "name": "chainId",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31210,
                                            "src": "4029:7:146",
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
                                        "src": "4019:18:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3992:45:146"
                                },
                                {
                                    "expression": {
                                        "id": 31236,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31232,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31214,
                                            "src": "4048:5:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "baseExpression": {
                                                "id": 31233,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31145,
                                                "src": "4056:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31140_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31235,
                                            "indexExpression": {
                                                "id": 31234,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31227,
                                                "src": "4063:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "4056:18:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "src": "4048:26:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31237,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4048:26:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31242,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 31239,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31214,
                                                        "src": "4106:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                            "typeString": "struct StdChains.Chain memory"
                                                        }
                                                    },
                                                    "id": 31240,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4112:7:146",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31135,
                                                    "src": "4106:13:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31241,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4123:1:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4106:18:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "537464436861696e7320676574436861696e2875696e74323536293a20436861696e207769746820494420",
                                                                "id": 31247,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "4162:45:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                                                    "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                                                },
                                                                "value": "StdChains getChain(uint256): Chain with ID "
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 31250,
                                                                        "name": "chainId",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31210,
                                                                        "src": "4221:7:146",
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
                                                                        "id": 31248,
                                                                        "name": "vm",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31122,
                                                                        "src": "4209:2:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                                            "typeString": "contract VmSafe"
                                                                        }
                                                                    },
                                                                    "id": 31249,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4212:8:146",
                                                                    "memberName": "toString",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 39838,
                                                                    "src": "4209:11:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                                    }
                                                                },
                                                                "id": 31251,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4209:20:146",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "206e6f7420666f756e642e",
                                                                "id": 31252,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "4231:13:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b",
                                                                    "typeString": "literal_string \" not found.\""
                                                                },
                                                                "value": " not found."
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_ce7b2cad45f1a6d0b9b7bb125e9a8742fce8fed7d742c83265d4a2da4caf457d",
                                                                    "typeString": "literal_string \"StdChains getChain(uint256): Chain with ID \""
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_f310d2efb88747fac959fa7567a0a1a161dd43a77ba9af074f6191cf5bcf4f8b",
                                                                    "typeString": "literal_string \" not found.\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 31245,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "4145:3:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 31246,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "4149:12:146",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "4145:16:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 31253,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4145:100:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "id": 31244,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4138:6:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31243,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4138:6:146",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31254,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4138:108:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "id": 31238,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4085:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31255,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4085:171:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31256,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4085:171:146"
                                },
                                {
                                    "expression": {
                                        "id": 31262,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31257,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31214,
                                            "src": "4267:5:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 31259,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31227,
                                                    "src": "4301:10:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "id": 31260,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31214,
                                                    "src": "4313:5:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                        "typeString": "struct StdChains.Chain memory"
                                                    }
                                                ],
                                                "id": 31258,
                                                "name": "getChainWithUpdatedRpcUrl",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31590,
                                                "src": "4275:25:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_Chain_$31140_memory_ptr_$returns$_t_struct$_Chain_$31140_memory_ptr_$",
                                                    "typeString": "function (string memory,struct StdChains.Chain memory) returns (struct StdChains.Chain memory)"
                                                }
                                            },
                                            "id": 31261,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4275:44:146",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "4267:52:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "id": 31263,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4267:52:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChain",
                        "nameLocation": "3794:8:146",
                        "parameters": {
                            "id": 31211,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31210,
                                    "mutability": "mutable",
                                    "name": "chainId",
                                    "nameLocation": "3811:7:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31265,
                                    "src": "3803:15:146",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 31209,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3803:7:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3802:17:146"
                        },
                        "returnParameters": {
                            "id": 31215,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31214,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "3859:5:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31265,
                                    "src": "3846:18:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31213,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31212,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "3846:5:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31140,
                                            "src": "3846:5:146"
                                        },
                                        "referencedDeclaration": 31140,
                                        "src": "3846:5:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3845:20:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31375,
                        "nodeType": "FunctionDefinition",
                        "src": "4397:1173:146",
                        "nodes": [],
                        "body": {
                            "id": 31374,
                            "nodeType": "Block",
                            "src": "4482:1088:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31280,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "arguments": [
                                                            {
                                                                "id": 31276,
                                                                "name": "chainAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31267,
                                                                "src": "4519:10:146",
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
                                                            "id": 31275,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "4513:5:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                "typeString": "type(bytes storage pointer)"
                                                            },
                                                            "typeName": {
                                                                "id": 31274,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4513:5:146",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 31277,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4513:17:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 31278,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4531:6:146",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4513:24:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31279,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4541:1:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4513:29:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20616c6961732063616e6e6f742062652074686520656d70747920737472696e672e",
                                                "id": 31281,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4556:79:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354",
                                                    "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain alias cannot be the empty string.\""
                                                },
                                                "value": "StdChains setChain(string,ChainData): Chain alias cannot be the empty string."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_30b2334ec57cbeeece39c6405e10d3437560135ecd84835d6b9144db1d575354",
                                                    "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain alias cannot be the empty string.\""
                                                }
                                            ],
                                            "id": 31273,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4492:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31282,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4492:153:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31283,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4492:153:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 31288,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 31285,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31270,
                                                        "src": "4664:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31286,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4670:7:146",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31128,
                                                    "src": "4664:13:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 31287,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4681:1:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "4664:18:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e2049442063616e6e6f7420626520302e",
                                                "id": 31289,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4684:61:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4",
                                                    "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID cannot be 0.\""
                                                },
                                                "value": "StdChains setChain(string,ChainData): Chain ID cannot be 0."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_ab0ba8dace83d80dc1941286e8d0551223497db1b420e58abff2f3db2ad3fbf4",
                                                    "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID cannot be 0.\""
                                                }
                                            ],
                                            "id": 31284,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4656:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31290,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4656:90:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31291,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4656:90:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [],
                                        "expression": {
                                            "argumentTypes": [],
                                            "id": 31292,
                                            "name": "initializeStdChains",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31782,
                                            "src": "4757:19:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                "typeString": "function ()"
                                            }
                                        },
                                        "id": 31293,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4757:21:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31294,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4757:21:146"
                                },
                                {
                                    "assignments": [
                                        31296
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31296,
                                            "mutability": "mutable",
                                            "name": "foundAlias",
                                            "nameLocation": "4802:10:146",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31374,
                                            "src": "4788:24:146",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 31295,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "4788:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31301,
                                    "initialValue": {
                                        "baseExpression": {
                                            "id": 31297,
                                            "name": "idToAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31153,
                                            "src": "4815:9:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                "typeString": "mapping(uint256 => string storage ref)"
                                            }
                                        },
                                        "id": 31300,
                                        "indexExpression": {
                                            "expression": {
                                                "id": 31298,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31270,
                                                "src": "4825:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 31299,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "4831:7:146",
                                            "memberName": "chainId",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31128,
                                            "src": "4825:13:146",
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
                                        "src": "4815:24:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "4788:51:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 31323,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 31309,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 31305,
                                                                    "name": "foundAlias",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 31296,
                                                                    "src": "4877:10:146",
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
                                                                "id": 31304,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "4871:5:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                    "typeString": "type(bytes storage pointer)"
                                                                },
                                                                "typeName": {
                                                                    "id": 31303,
                                                                    "name": "bytes",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "4871:5:146",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 31306,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "4871:17:146",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                "typeString": "bytes memory"
                                                            }
                                                        },
                                                        "id": 31307,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "4889:6:146",
                                                        "memberName": "length",
                                                        "nodeType": "MemberAccess",
                                                        "src": "4871:24:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 31308,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4899:1:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "4871:29:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "||",
                                                "rightExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 31322,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 31313,
                                                                        "name": "foundAlias",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31296,
                                                                        "src": "4920:10:146",
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
                                                                    "id": 31312,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4914:5:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31311,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4914:5:146",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 31314,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4914:17:146",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 31310,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4904:9:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 31315,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4904:28:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 31319,
                                                                        "name": "chainAlias",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31267,
                                                                        "src": "4952:10:146",
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
                                                                    "id": 31318,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "4946:5:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31317,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "4946:5:146",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 31320,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4946:17:146",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 31316,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4936:9:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 31321,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4936:28:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "4904:60:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "4871:93:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "537464436861696e7320736574436861696e28737472696e672c436861696e44617461293a20436861696e20494420",
                                                                "id": 31328,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5040:49:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0",
                                                                    "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID \""
                                                                },
                                                                "value": "StdChains setChain(string,ChainData): Chain ID "
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "expression": {
                                                                            "id": 31331,
                                                                            "name": "chain",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 31270,
                                                                            "src": "5123:5:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                                                "typeString": "struct StdChains.ChainData memory"
                                                                            }
                                                                        },
                                                                        "id": 31332,
                                                                        "isConstant": false,
                                                                        "isLValue": true,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberLocation": "5129:7:146",
                                                                        "memberName": "chainId",
                                                                        "nodeType": "MemberAccess",
                                                                        "referencedDeclaration": 31128,
                                                                        "src": "5123:13:146",
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
                                                                        "id": 31329,
                                                                        "name": "vm",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31122,
                                                                        "src": "5111:2:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                                            "typeString": "contract VmSafe"
                                                                        }
                                                                    },
                                                                    "id": 31330,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "5114:8:146",
                                                                    "memberName": "toString",
                                                                    "nodeType": "MemberAccess",
                                                                    "referencedDeclaration": 39838,
                                                                    "src": "5111:11:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_external_pure$_t_uint256_$returns$_t_string_memory_ptr_$",
                                                                        "typeString": "function (uint256) pure external returns (string memory)"
                                                                    }
                                                                },
                                                                "id": 31333,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5111:26:146",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "20616c726561647920757365642062792022",
                                                                "id": 31334,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5159:21:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                                                    "typeString": "literal_string \" already used by \"\""
                                                                },
                                                                "value": " already used by \""
                                                            },
                                                            {
                                                                "id": 31335,
                                                                "name": "foundAlias",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 31296,
                                                                "src": "5202:10:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                }
                                                            },
                                                            {
                                                                "hexValue": "222e",
                                                                "id": 31336,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5234:5:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193",
                                                                    "typeString": "literal_string \"\".\""
                                                                },
                                                                "value": "\"."
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_2f5ddfff35cec202bbf760c515d7332e259c9b0c330efa0b2d03073b34906ba0",
                                                                    "typeString": "literal_string \"StdChains setChain(string,ChainData): Chain ID \""
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_03dcc98944d744f10105f4b63a1d5b4f5b14493812e66201e5f21a3da2662077",
                                                                    "typeString": "literal_string \" already used by \"\""
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                    "typeString": "string memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_cb54fc3dbdac1cb7b87378fdaddeb9e7549db2a108b5270efaa4bcd576270193",
                                                                    "typeString": "literal_string \"\".\""
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 31326,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "5002:3:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 31327,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "5006:12:146",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "5002:16:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 31337,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5002:255:146",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "id": 31325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4978:6:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                        "typeString": "type(string storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31324,
                                                        "name": "string",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4978:6:146",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31338,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4978:293:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "id": 31302,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4850:7:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 31339,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4850:431:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31340,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4850:431:146"
                                },
                                {
                                    "assignments": [
                                        31342
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31342,
                                            "mutability": "mutable",
                                            "name": "oldChainId",
                                            "nameLocation": "5300:10:146",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31374,
                                            "src": "5292:18:146",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 31341,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5292:7:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31347,
                                    "initialValue": {
                                        "expression": {
                                            "baseExpression": {
                                                "id": 31343,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31145,
                                                "src": "5313:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31140_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31345,
                                            "indexExpression": {
                                                "id": 31344,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31267,
                                                "src": "5320:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "5313:18:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "id": 31346,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "5332:7:146",
                                        "memberName": "chainId",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 31135,
                                        "src": "5313:26:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5292:47:146"
                                },
                                {
                                    "expression": {
                                        "id": 31351,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "delete",
                                        "prefix": true,
                                        "src": "5349:28:146",
                                        "subExpression": {
                                            "baseExpression": {
                                                "id": 31348,
                                                "name": "idToAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31153,
                                                "src": "5356:9:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                    "typeString": "mapping(uint256 => string storage ref)"
                                                }
                                            },
                                            "id": 31350,
                                            "indexExpression": {
                                                "id": 31349,
                                                "name": "oldChainId",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31342,
                                                "src": "5366:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5356:21:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31352,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5349:28:146"
                                },
                                {
                                    "expression": {
                                        "id": 31365,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 31353,
                                                "name": "chains",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31145,
                                                "src": "5388:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_struct$_Chain_$31140_storage_$",
                                                    "typeString": "mapping(string memory => struct StdChains.Chain storage ref)"
                                                }
                                            },
                                            "id": 31355,
                                            "indexExpression": {
                                                "id": 31354,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31267,
                                                "src": "5395:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5388:18:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_storage",
                                                "typeString": "struct StdChains.Chain storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 31357,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31270,
                                                        "src": "5434:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31358,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5440:4:146",
                                                    "memberName": "name",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31126,
                                                    "src": "5434:10:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 31359,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31270,
                                                        "src": "5455:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31360,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5461:7:146",
                                                    "memberName": "chainId",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31128,
                                                    "src": "5455:13:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 31361,
                                                    "name": "chainAlias",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31267,
                                                    "src": "5482:10:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 31362,
                                                        "name": "chain",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31270,
                                                        "src": "5502:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                            "typeString": "struct StdChains.ChainData memory"
                                                        }
                                                    },
                                                    "id": 31363,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5508:6:146",
                                                    "memberName": "rpcUrl",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 31130,
                                                    "src": "5502:12:146",
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
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                ],
                                                "id": 31356,
                                                "name": "Chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31140,
                                                "src": "5421:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_struct$_Chain_$31140_storage_ptr_$",
                                                    "typeString": "type(struct StdChains.Chain storage pointer)"
                                                }
                                            },
                                            "id": 31364,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "structConstructorCall",
                                            "lValueRequested": false,
                                            "nameLocations": [
                                                "5428:4:146",
                                                "5446:7:146",
                                                "5470:10:146",
                                                "5494:6:146"
                                            ],
                                            "names": [
                                                "name",
                                                "chainId",
                                                "chainAlias",
                                                "rpcUrl"
                                            ],
                                            "nodeType": "FunctionCall",
                                            "src": "5421:95:146",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                "typeString": "struct StdChains.Chain memory"
                                            }
                                        },
                                        "src": "5388:128:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_storage",
                                            "typeString": "struct StdChains.Chain storage ref"
                                        }
                                    },
                                    "id": 31366,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5388:128:146"
                                },
                                {
                                    "expression": {
                                        "id": 31372,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 31367,
                                                "name": "idToAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31153,
                                                "src": "5526:9:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                                                    "typeString": "mapping(uint256 => string storage ref)"
                                                }
                                            },
                                            "id": 31370,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 31368,
                                                    "name": "chain",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31270,
                                                    "src": "5536:5:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                        "typeString": "struct StdChains.ChainData memory"
                                                    }
                                                },
                                                "id": 31369,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5542:7:146",
                                                "memberName": "chainId",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 31128,
                                                "src": "5536:13:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "5526:24:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 31371,
                                            "name": "chainAlias",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31267,
                                            "src": "5553:10:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "5526:37:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 31373,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5526:37:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChain",
                        "nameLocation": "4406:8:146",
                        "parameters": {
                            "id": 31271,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31267,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "4429:10:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31375,
                                    "src": "4415:24:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31266,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4415:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31270,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "4458:5:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31375,
                                    "src": "4441:22:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                        "typeString": "struct StdChains.ChainData"
                                    },
                                    "typeName": {
                                        "id": 31269,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31268,
                                            "name": "ChainData",
                                            "nameLocations": [
                                                "4441:9:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31131,
                                            "src": "4441:9:146"
                                        },
                                        "referencedDeclaration": 31131,
                                        "src": "4441:9:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_ChainData_$31131_storage_ptr",
                                            "typeString": "struct StdChains.ChainData"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4414:50:146"
                        },
                        "returnParameters": {
                            "id": 31272,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4482:0:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31396,
                        "nodeType": "FunctionDefinition",
                        "src": "5641:195:146",
                        "nodes": [],
                        "body": {
                            "id": 31395,
                            "nodeType": "Block",
                            "src": "5722:114:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 31384,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31377,
                                                "src": "5741:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 31386,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31380,
                                                            "src": "5770:5:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31387,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5776:4:146",
                                                        "memberName": "name",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31133,
                                                        "src": "5770:10:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 31388,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31380,
                                                            "src": "5791:5:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31389,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5797:7:146",
                                                        "memberName": "chainId",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31135,
                                                        "src": "5791:13:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 31390,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31380,
                                                            "src": "5814:5:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31391,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5820:6:146",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31139,
                                                        "src": "5814:12:146",
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
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    ],
                                                    "id": 31385,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "5753:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31392,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [
                                                    "5764:4:146",
                                                    "5782:7:146",
                                                    "5806:6:146"
                                                ],
                                                "names": [
                                                    "name",
                                                    "chainId",
                                                    "rpcUrl"
                                                ],
                                                "nodeType": "FunctionCall",
                                                "src": "5753:75:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31383,
                                            "name": "setChain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                31375,
                                                31396
                                            ],
                                            "referencedDeclaration": 31375,
                                            "src": "5732:8:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31393,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5732:97:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31394,
                                    "nodeType": "ExpressionStatement",
                                    "src": "5732:97:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChain",
                        "nameLocation": "5650:8:146",
                        "parameters": {
                            "id": 31381,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31377,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "5673:10:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31396,
                                    "src": "5659:24:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31376,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5659:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31380,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "5698:5:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31396,
                                    "src": "5685:18:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31379,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31378,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "5685:5:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31140,
                                            "src": "5685:5:146"
                                        },
                                        "referencedDeclaration": 31140,
                                        "src": "5685:5:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5658:46:146"
                        },
                        "returnParameters": {
                            "id": 31382,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5722:0:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 31473,
                        "nodeType": "FunctionDefinition",
                        "src": "5842:451:146",
                        "nodes": [],
                        "body": {
                            "id": 31472,
                            "nodeType": "Block",
                            "src": "5916:377:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        31404
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31404,
                                            "mutability": "mutable",
                                            "name": "strb",
                                            "nameLocation": "5939:4:146",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31472,
                                            "src": "5926:17:146",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 31403,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5926:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31409,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 31407,
                                                "name": "str",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31398,
                                                "src": "5952:3:146",
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
                                            "id": 31406,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "5946:5:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                "typeString": "type(bytes storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 31405,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5946:5:146",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 31408,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5946:10:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5926:30:146"
                                },
                                {
                                    "assignments": [
                                        31411
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31411,
                                            "mutability": "mutable",
                                            "name": "copy",
                                            "nameLocation": "5979:4:146",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31472,
                                            "src": "5966:17:146",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                "typeString": "bytes"
                                            },
                                            "typeName": {
                                                "id": 31410,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5966:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31417,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 31414,
                                                    "name": "strb",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31404,
                                                    "src": "5996:4:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                        "typeString": "bytes memory"
                                                    }
                                                },
                                                "id": 31415,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "6001:6:146",
                                                "memberName": "length",
                                                "nodeType": "MemberAccess",
                                                "src": "5996:11:146",
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
                                            "id": 31413,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "5986:9:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                            },
                                            "typeName": {
                                                "id": 31412,
                                                "name": "bytes",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "5990:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                    "typeString": "bytes"
                                                }
                                            }
                                        },
                                        "id": 31416,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5986:22:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_memory_ptr",
                                            "typeString": "bytes memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "5966:42:146"
                                },
                                {
                                    "body": {
                                        "id": 31465,
                                        "nodeType": "Block",
                                        "src": "6060:198:146",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    31430
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 31430,
                                                        "mutability": "mutable",
                                                        "name": "b",
                                                        "nameLocation": "6081:1:146",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 31465,
                                                        "src": "6074:8:146",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "typeName": {
                                                            "id": 31429,
                                                            "name": "bytes1",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "6074:6:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 31434,
                                                "initialValue": {
                                                    "baseExpression": {
                                                        "id": 31431,
                                                        "name": "strb",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31404,
                                                        "src": "6085:4:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 31433,
                                                    "indexExpression": {
                                                        "id": 31432,
                                                        "name": "i",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 31419,
                                                        "src": "6090:1:146",
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
                                                    "src": "6085:7:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes1",
                                                        "typeString": "bytes1"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "6074:18:146"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 31441,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "id": 31437,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 31435,
                                                            "name": "b",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31430,
                                                            "src": "6110:1:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": ">=",
                                                        "rightExpression": {
                                                            "hexValue": "30783631",
                                                            "id": 31436,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6115:4:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_97_by_1",
                                                                "typeString": "int_const 97"
                                                            },
                                                            "value": "0x61"
                                                        },
                                                        "src": "6110:9:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_bytes1",
                                                            "typeString": "bytes1"
                                                        },
                                                        "id": 31440,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 31438,
                                                            "name": "b",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31430,
                                                            "src": "6123:1:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes1",
                                                                "typeString": "bytes1"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "<=",
                                                        "rightExpression": {
                                                            "hexValue": "30783741",
                                                            "id": 31439,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "6128:4:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_122_by_1",
                                                                "typeString": "int_const 122"
                                                            },
                                                            "value": "0x7A"
                                                        },
                                                        "src": "6123:9:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "6110:22:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "falseBody": {
                                                    "id": 31463,
                                                    "nodeType": "Block",
                                                    "src": "6204:44:146",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 31461,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 31457,
                                                                        "name": "copy",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31411,
                                                                        "src": "6222:4:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 31459,
                                                                    "indexExpression": {
                                                                        "id": 31458,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31419,
                                                                        "src": "6227:1:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "6222:7:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "id": 31460,
                                                                    "name": "b",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 31430,
                                                                    "src": "6232:1:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "6222:11:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 31462,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6222:11:146"
                                                        }
                                                    ]
                                                },
                                                "id": 31464,
                                                "nodeType": "IfStatement",
                                                "src": "6106:142:146",
                                                "trueBody": {
                                                    "id": 31456,
                                                    "nodeType": "Block",
                                                    "src": "6134:64:146",
                                                    "statements": [
                                                        {
                                                            "expression": {
                                                                "id": 31454,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftHandSide": {
                                                                    "baseExpression": {
                                                                        "id": 31442,
                                                                        "name": "copy",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31411,
                                                                        "src": "6152:4:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 31444,
                                                                    "indexExpression": {
                                                                        "id": 31443,
                                                                        "name": "i",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31419,
                                                                        "src": "6157:1:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": true,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "6152:7:146",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "nodeType": "Assignment",
                                                                "operator": "=",
                                                                "rightHandSide": {
                                                                    "arguments": [
                                                                        {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            },
                                                                            "id": 31452,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 31449,
                                                                                        "name": "b",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 31430,
                                                                                        "src": "6175:1:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes1",
                                                                                            "typeString": "bytes1"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_bytes1",
                                                                                            "typeString": "bytes1"
                                                                                        }
                                                                                    ],
                                                                                    "id": 31448,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "6169:5:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_uint8_$",
                                                                                        "typeString": "type(uint8)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 31447,
                                                                                        "name": "uint8",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "6169:5:146",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 31450,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "6169:8:146",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint8",
                                                                                    "typeString": "uint8"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "-",
                                                                            "rightExpression": {
                                                                                "hexValue": "3332",
                                                                                "id": 31451,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "6180:2:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_32_by_1",
                                                                                    "typeString": "int_const 32"
                                                                                },
                                                                                "value": "32"
                                                                            },
                                                                            "src": "6169:13:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            }
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            }
                                                                        ],
                                                                        "id": 31446,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6162:6:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 31445,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6162:6:146",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 31453,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6162:21:146",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                "src": "6152:31:146",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            "id": 31455,
                                                            "nodeType": "ExpressionStatement",
                                                            "src": "6152:31:146"
                                                        }
                                                    ]
                                                }
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 31425,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 31422,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31419,
                                            "src": "6038:1:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "expression": {
                                                "id": 31423,
                                                "name": "strb",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31404,
                                                "src": "6042:4:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 31424,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6047:6:146",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "6042:11:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6038:15:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31466,
                                    "initializationExpression": {
                                        "assignments": [
                                            31419
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 31419,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "6031:1:146",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 31466,
                                                "src": "6023:9:146",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 31418,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "6023:7:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 31421,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 31420,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6035:1:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "6023:13:146"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 31427,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": false,
                                            "src": "6055:3:146",
                                            "subExpression": {
                                                "id": 31426,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31419,
                                                "src": "6055:1:146",
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
                                        "id": 31428,
                                        "nodeType": "ExpressionStatement",
                                        "src": "6055:3:146"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "6018:240:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 31469,
                                                "name": "copy",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31411,
                                                "src": "6281:4:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 31468,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "6274:6:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                "typeString": "type(string storage pointer)"
                                            },
                                            "typeName": {
                                                "id": 31467,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "6274:6:146",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 31470,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6274:12:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "functionReturnParameters": 31402,
                                    "id": 31471,
                                    "nodeType": "Return",
                                    "src": "6267:19:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_toUpper",
                        "nameLocation": "5851:8:146",
                        "parameters": {
                            "id": 31399,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31398,
                                    "mutability": "mutable",
                                    "name": "str",
                                    "nameLocation": "5874:3:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31473,
                                    "src": "5860:17:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31397,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5860:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5859:19:146"
                        },
                        "returnParameters": {
                            "id": 31402,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31401,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31473,
                                    "src": "5901:13:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31400,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5901:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5900:15:146"
                        },
                        "scope": 31820,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 31590,
                        "nodeType": "FunctionDefinition",
                        "src": "6429:1218:146",
                        "nodes": [],
                        "body": {
                            "id": 31589,
                            "nodeType": "Block",
                            "src": "6541:1106:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 31491,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 31486,
                                                            "name": "chain",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31478,
                                                            "src": "6561:5:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                "typeString": "struct StdChains.Chain memory"
                                                            }
                                                        },
                                                        "id": 31487,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6567:6:146",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 31139,
                                                        "src": "6561:12:146",
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
                                                    "id": 31485,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6555:5:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                        "typeString": "type(bytes storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 31484,
                                                        "name": "bytes",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6555:5:146",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 31488,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6555:19:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "id": 31489,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "6575:6:146",
                                            "memberName": "length",
                                            "nodeType": "MemberAccess",
                                            "src": "6555:26:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30",
                                            "id": 31490,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "6585:1:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "src": "6555:31:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31586,
                                    "nodeType": "IfStatement",
                                    "src": "6551:1068:146",
                                    "trueBody": {
                                        "id": 31585,
                                        "nodeType": "Block",
                                        "src": "6588:1031:146",
                                        "statements": [
                                            {
                                                "clauses": [
                                                    {
                                                        "block": {
                                                            "id": 31505,
                                                            "nodeType": "Block",
                                                            "src": "6665:60:146",
                                                            "statements": [
                                                                {
                                                                    "expression": {
                                                                        "id": 31503,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftHandSide": {
                                                                            "expression": {
                                                                                "id": 31499,
                                                                                "name": "chain",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": 31478,
                                                                                "src": "6683:5:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                                    "typeString": "struct StdChains.Chain memory"
                                                                                }
                                                                            },
                                                                            "id": 31501,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "memberLocation": "6689:6:146",
                                                                            "memberName": "rpcUrl",
                                                                            "nodeType": "MemberAccess",
                                                                            "referencedDeclaration": 31139,
                                                                            "src": "6683:12:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string memory"
                                                                            }
                                                                        },
                                                                        "nodeType": "Assignment",
                                                                        "operator": "=",
                                                                        "rightHandSide": {
                                                                            "id": 31502,
                                                                            "name": "configRpcUrl",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 31497,
                                                                            "src": "6698:12:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string memory"
                                                                            }
                                                                        },
                                                                        "src": "6683:27:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    },
                                                                    "id": 31504,
                                                                    "nodeType": "ExpressionStatement",
                                                                    "src": "6683:27:146"
                                                                }
                                                            ]
                                                        },
                                                        "errorName": "",
                                                        "id": 31506,
                                                        "nodeType": "TryCatchClause",
                                                        "parameters": {
                                                            "id": 31498,
                                                            "nodeType": "ParameterList",
                                                            "parameters": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 31497,
                                                                    "mutability": "mutable",
                                                                    "name": "configRpcUrl",
                                                                    "nameLocation": "6651:12:146",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 31506,
                                                                    "src": "6637:26:146",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "memory",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                        "typeString": "string"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31496,
                                                                        "name": "string",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6637:6:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_storage_ptr",
                                                                            "typeString": "string"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "src": "6636:28:146"
                                                        },
                                                        "src": "6628:97:146"
                                                    },
                                                    {
                                                        "block": {
                                                            "id": 31582,
                                                            "nodeType": "Block",
                                                            "src": "6751:858:146",
                                                            "statements": [
                                                                {
                                                                    "assignments": [
                                                                        31511
                                                                    ],
                                                                    "declarations": [
                                                                        {
                                                                            "constant": false,
                                                                            "id": 31511,
                                                                            "mutability": "mutable",
                                                                            "name": "envName",
                                                                            "nameLocation": "6783:7:146",
                                                                            "nodeType": "VariableDeclaration",
                                                                            "scope": 31582,
                                                                            "src": "6769:21:146",
                                                                            "stateVariable": false,
                                                                            "storageLocation": "memory",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_string_memory_ptr",
                                                                                "typeString": "string"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 31510,
                                                                                "name": "string",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "6769:6:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_string_storage_ptr",
                                                                                    "typeString": "string"
                                                                                }
                                                                            },
                                                                            "visibility": "internal"
                                                                        }
                                                                    ],
                                                                    "id": 31522,
                                                                    "initialValue": {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "id": 31517,
                                                                                                "name": "chainAlias",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31475,
                                                                                                "src": "6826:10:146",
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
                                                                                            "id": 31516,
                                                                                            "name": "_toUpper",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 31473,
                                                                                            "src": "6817:8:146",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_internal_pure$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory) pure returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31518,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "6817:20:146",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "hexValue": "5f5250435f55524c",
                                                                                        "id": 31519,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "string",
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "Literal",
                                                                                        "src": "6839:10:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9",
                                                                                            "typeString": "literal_string \"_RPC_URL\""
                                                                                        },
                                                                                        "value": "_RPC_URL"
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        },
                                                                                        {
                                                                                            "typeIdentifier": "t_stringliteral_2186fe596dea1a615b7a1cb43899fd18c5b434aa29c8de36d4b8fcc67e3d6ad9",
                                                                                            "typeString": "literal_string \"_RPC_URL\""
                                                                                        }
                                                                                    ],
                                                                                    "expression": {
                                                                                        "id": 31514,
                                                                                        "name": "abi",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -1,
                                                                                        "src": "6800:3:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                            "typeString": "abi"
                                                                                        }
                                                                                    },
                                                                                    "id": 31515,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "6804:12:146",
                                                                                    "memberName": "encodePacked",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "6800:16:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                    }
                                                                                },
                                                                                "id": 31520,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "6800:50:146",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                                    "typeString": "bytes memory"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                                    "typeString": "bytes memory"
                                                                                }
                                                                            ],
                                                                            "id": 31513,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "nodeType": "ElementaryTypeNameExpression",
                                                                            "src": "6793:6:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                                                "typeString": "type(string storage pointer)"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 31512,
                                                                                "name": "string",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "6793:6:146",
                                                                                "typeDescriptions": {}
                                                                            }
                                                                        },
                                                                        "id": 31521,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "typeConversion",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "6793:58:146",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                            "typeString": "string memory"
                                                                        }
                                                                    },
                                                                    "nodeType": "VariableDeclarationStatement",
                                                                    "src": "6769:82:146"
                                                                },
                                                                {
                                                                    "condition": {
                                                                        "id": 31523,
                                                                        "name": "fallbackToDefaultRpcUrls",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 31156,
                                                                        "src": "6873:24:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    "falseBody": {
                                                                        "id": 31546,
                                                                        "nodeType": "Block",
                                                                        "src": "7006:77:146",
                                                                        "statements": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 31544,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "leftHandSide": {
                                                                                        "expression": {
                                                                                            "id": 31537,
                                                                                            "name": "chain",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 31478,
                                                                                            "src": "7028:5:146",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                                                "typeString": "struct StdChains.Chain memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 31539,
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": true,
                                                                                        "memberLocation": "7034:6:146",
                                                                                        "memberName": "rpcUrl",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "referencedDeclaration": 31139,
                                                                                        "src": "7028:12:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "nodeType": "Assignment",
                                                                                    "operator": "=",
                                                                                    "rightHandSide": {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "id": 31542,
                                                                                                "name": "envName",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31511,
                                                                                                "src": "7056:7:146",
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
                                                                                                "id": 31540,
                                                                                                "name": "vm",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31122,
                                                                                                "src": "7043:2:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                                                                    "typeString": "contract VmSafe"
                                                                                                }
                                                                                            },
                                                                                            "id": 31541,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7046:9:146",
                                                                                            "memberName": "envString",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 39382,
                                                                                            "src": "7043:12:146",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory) view external returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31543,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "7043:21:146",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "src": "7028:36:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                        "typeString": "string memory"
                                                                                    }
                                                                                },
                                                                                "id": 31545,
                                                                                "nodeType": "ExpressionStatement",
                                                                                "src": "7028:36:146"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "id": 31547,
                                                                    "nodeType": "IfStatement",
                                                                    "src": "6869:214:146",
                                                                    "trueBody": {
                                                                        "id": 31536,
                                                                        "nodeType": "Block",
                                                                        "src": "6899:101:146",
                                                                        "statements": [
                                                                            {
                                                                                "expression": {
                                                                                    "id": 31534,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "leftHandSide": {
                                                                                        "expression": {
                                                                                            "id": 31524,
                                                                                            "name": "chain",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": 31478,
                                                                                            "src": "6921:5:146",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                                                "typeString": "struct StdChains.Chain memory"
                                                                                            }
                                                                                        },
                                                                                        "id": 31526,
                                                                                        "isConstant": false,
                                                                                        "isLValue": true,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": true,
                                                                                        "memberLocation": "6927:6:146",
                                                                                        "memberName": "rpcUrl",
                                                                                        "nodeType": "MemberAccess",
                                                                                        "referencedDeclaration": 31139,
                                                                                        "src": "6921:12:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "nodeType": "Assignment",
                                                                                    "operator": "=",
                                                                                    "rightHandSide": {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "id": 31529,
                                                                                                "name": "envName",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31511,
                                                                                                "src": "6945:7:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                                    "typeString": "string memory"
                                                                                                }
                                                                                            },
                                                                                            {
                                                                                                "baseExpression": {
                                                                                                    "id": 31530,
                                                                                                    "name": "defaultRpcUrls",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 31149,
                                                                                                    "src": "6954:14:146",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                                                                        "typeString": "mapping(string memory => string storage ref)"
                                                                                                    }
                                                                                                },
                                                                                                "id": 31532,
                                                                                                "indexExpression": {
                                                                                                    "id": 31531,
                                                                                                    "name": "chainAlias",
                                                                                                    "nodeType": "Identifier",
                                                                                                    "overloadedDeclarations": [],
                                                                                                    "referencedDeclaration": 31475,
                                                                                                    "src": "6969:10:146",
                                                                                                    "typeDescriptions": {
                                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                                        "typeString": "string memory"
                                                                                                    }
                                                                                                },
                                                                                                "isConstant": false,
                                                                                                "isLValue": true,
                                                                                                "isPure": false,
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "IndexAccess",
                                                                                                "src": "6954:26:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_string_storage",
                                                                                                    "typeString": "string storage ref"
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "expression": {
                                                                                            "argumentTypes": [
                                                                                                {
                                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                                    "typeString": "string memory"
                                                                                                },
                                                                                                {
                                                                                                    "typeIdentifier": "t_string_storage",
                                                                                                    "typeString": "string storage ref"
                                                                                                }
                                                                                            ],
                                                                                            "expression": {
                                                                                                "id": 31527,
                                                                                                "name": "vm",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31122,
                                                                                                "src": "6936:2:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                                                                    "typeString": "contract VmSafe"
                                                                                                }
                                                                                            },
                                                                                            "id": 31528,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "6939:5:146",
                                                                                            "memberName": "envOr",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 39513,
                                                                                            "src": "6936:8:146",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                                                                "typeString": "function (string memory,string memory) external returns (string memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31533,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "6936:45:146",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_string_memory_ptr",
                                                                                            "typeString": "string memory"
                                                                                        }
                                                                                    },
                                                                                    "src": "6921:60:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_string_memory_ptr",
                                                                                        "typeString": "string memory"
                                                                                    }
                                                                                },
                                                                                "id": 31535,
                                                                                "nodeType": "ExpressionStatement",
                                                                                "src": "6921:60:146"
                                                                            }
                                                                        ]
                                                                    }
                                                                },
                                                                {
                                                                    "assignments": [
                                                                        31549
                                                                    ],
                                                                    "declarations": [
                                                                        {
                                                                            "constant": false,
                                                                            "id": 31549,
                                                                            "mutability": "mutable",
                                                                            "name": "notFoundError",
                                                                            "nameLocation": "7175:13:146",
                                                                            "nodeType": "VariableDeclaration",
                                                                            "scope": 31582,
                                                                            "src": "7162:26:146",
                                                                            "stateVariable": false,
                                                                            "storageLocation": "memory",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bytes_memory_ptr",
                                                                                "typeString": "bytes"
                                                                            },
                                                                            "typeName": {
                                                                                "id": 31548,
                                                                                "name": "bytes",
                                                                                "nodeType": "ElementaryTypeName",
                                                                                "src": "7162:5:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                                                    "typeString": "bytes"
                                                                                }
                                                                            },
                                                                            "visibility": "internal"
                                                                        }
                                                                    ],
                                                                    "id": 31562,
                                                                    "initialValue": {
                                                                        "arguments": [
                                                                            {
                                                                                "hexValue": "4368656174436f64654572726f72",
                                                                                "id": 31552,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "string",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "7235:16:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf",
                                                                                    "typeString": "literal_string \"CheatCodeError\""
                                                                                },
                                                                                "value": "CheatCodeError"
                                                                            },
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "hexValue": "696e76616c6964207270632075726c20",
                                                                                                "id": 31557,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "string",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "7277:18:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                                                                    "typeString": "literal_string \"invalid rpc url \""
                                                                                                },
                                                                                                "value": "invalid rpc url "
                                                                                            },
                                                                                            {
                                                                                                "id": 31558,
                                                                                                "name": "chainAlias",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31475,
                                                                                                "src": "7297:10:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                                    "typeString": "string memory"
                                                                                                }
                                                                                            }
                                                                                        ],
                                                                                        "expression": {
                                                                                            "argumentTypes": [
                                                                                                {
                                                                                                    "typeIdentifier": "t_stringliteral_2baf3da7b122675739218e635e969f0d1b560b915d35635239551f70fe123eed",
                                                                                                    "typeString": "literal_string \"invalid rpc url \""
                                                                                                },
                                                                                                {
                                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                                    "typeString": "string memory"
                                                                                                }
                                                                                            ],
                                                                                            "expression": {
                                                                                                "id": 31555,
                                                                                                "name": "abi",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": -1,
                                                                                                "src": "7260:3:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                                    "typeString": "abi"
                                                                                                }
                                                                                            },
                                                                                            "id": 31556,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7264:12:146",
                                                                                            "memberName": "encodePacked",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "src": "7260:16:146",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                                "typeString": "function () pure returns (bytes memory)"
                                                                                            }
                                                                                        },
                                                                                        "id": 31559,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "7260:48:146",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                                            "typeString": "bytes memory"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                                            "typeString": "bytes memory"
                                                                                        }
                                                                                    ],
                                                                                    "id": 31554,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                                    "src": "7253:6:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                                                                                        "typeString": "type(string storage pointer)"
                                                                                    },
                                                                                    "typeName": {
                                                                                        "id": 31553,
                                                                                        "name": "string",
                                                                                        "nodeType": "ElementaryTypeName",
                                                                                        "src": "7253:6:146",
                                                                                        "typeDescriptions": {}
                                                                                    }
                                                                                },
                                                                                "id": 31560,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "typeConversion",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7253:56:146",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                    "typeString": "string memory"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_stringliteral_0bc445031644df03923eb2ab981d332f4354ceab11a95efce72a938e57beaadf",
                                                                                    "typeString": "literal_string \"CheatCodeError\""
                                                                                },
                                                                                {
                                                                                    "typeIdentifier": "t_string_memory_ptr",
                                                                                    "typeString": "string memory"
                                                                                }
                                                                            ],
                                                                            "expression": {
                                                                                "id": 31550,
                                                                                "name": "abi",
                                                                                "nodeType": "Identifier",
                                                                                "overloadedDeclarations": [],
                                                                                "referencedDeclaration": -1,
                                                                                "src": "7211:3:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_magic_abi",
                                                                                    "typeString": "abi"
                                                                                }
                                                                            },
                                                                            "id": 31551,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "memberLocation": "7215:19:146",
                                                                            "memberName": "encodeWithSignature",
                                                                            "nodeType": "MemberAccess",
                                                                            "src": "7211:23:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                                                "typeString": "function (string memory) pure returns (bytes memory)"
                                                                            }
                                                                        },
                                                                        "id": 31561,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "7211:99:146",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "nodeType": "VariableDeclarationStatement",
                                                                    "src": "7162:148:146"
                                                                },
                                                                {
                                                                    "condition": {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        },
                                                                        "id": 31578,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_bytes32",
                                                                                "typeString": "bytes32"
                                                                            },
                                                                            "id": 31569,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 31564,
                                                                                        "name": "notFoundError",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 31549,
                                                                                        "src": "7342:13:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                                            "typeString": "bytes memory"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                                            "typeString": "bytes memory"
                                                                                        }
                                                                                    ],
                                                                                    "id": 31563,
                                                                                    "name": "keccak256",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -8,
                                                                                    "src": "7332:9:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                    }
                                                                                },
                                                                                "id": 31565,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7332:24:146",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "!=",
                                                                            "rightExpression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "id": 31567,
                                                                                        "name": "err",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 31508,
                                                                                        "src": "7370:3:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                                            "typeString": "bytes memory"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                                            "typeString": "bytes memory"
                                                                                        }
                                                                                    ],
                                                                                    "id": 31566,
                                                                                    "name": "keccak256",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": -8,
                                                                                    "src": "7360:9:146",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                    }
                                                                                },
                                                                                "id": 31568,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "7360:14:146",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes32",
                                                                                    "typeString": "bytes32"
                                                                                }
                                                                            },
                                                                            "src": "7332:42:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bool",
                                                                                "typeString": "bool"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "||",
                                                                        "rightExpression": {
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            },
                                                                            "id": 31577,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "leftExpression": {
                                                                                "expression": {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "id": 31572,
                                                                                                "name": "chain",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 31478,
                                                                                                "src": "7384:5:146",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                                                                                    "typeString": "struct StdChains.Chain memory"
                                                                                                }
                                                                                            },
                                                                                            "id": 31573,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "memberLocation": "7390:6:146",
                                                                                            "memberName": "rpcUrl",
                                                                                            "nodeType": "MemberAccess",
                                                                                            "referencedDeclaration": 31139,
                                                                                            "src": "7384:12:146",
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
                                                                                        "id": 31571,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                                        "src": "7378:5:146",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                                            "typeString": "type(bytes storage pointer)"
                                                                                        },
                                                                                        "typeName": {
                                                                                            "id": 31570,
                                                                                            "name": "bytes",
                                                                                            "nodeType": "ElementaryTypeName",
                                                                                            "src": "7378:5:146",
                                                                                            "typeDescriptions": {}
                                                                                        }
                                                                                    },
                                                                                    "id": 31574,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "kind": "typeConversion",
                                                                                    "lValueRequested": false,
                                                                                    "nameLocations": [],
                                                                                    "names": [],
                                                                                    "nodeType": "FunctionCall",
                                                                                    "src": "7378:19:146",
                                                                                    "tryCall": false,
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                                        "typeString": "bytes memory"
                                                                                    }
                                                                                },
                                                                                "id": 31575,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "lValueRequested": false,
                                                                                "memberLocation": "7398:6:146",
                                                                                "memberName": "length",
                                                                                "nodeType": "MemberAccess",
                                                                                "src": "7378:26:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            },
                                                                            "nodeType": "BinaryOperation",
                                                                            "operator": "==",
                                                                            "rightExpression": {
                                                                                "hexValue": "30",
                                                                                "id": 31576,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": true,
                                                                                "kind": "number",
                                                                                "lValueRequested": false,
                                                                                "nodeType": "Literal",
                                                                                "src": "7408:1:146",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_rational_0_by_1",
                                                                                    "typeString": "int_const 0"
                                                                                },
                                                                                "value": "0"
                                                                            },
                                                                            "src": "7378:31:146",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_bool",
                                                                                "typeString": "bool"
                                                                            }
                                                                        },
                                                                        "src": "7332:77:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bool",
                                                                            "typeString": "bool"
                                                                        }
                                                                    },
                                                                    "id": 31581,
                                                                    "nodeType": "IfStatement",
                                                                    "src": "7328:267:146",
                                                                    "trueBody": {
                                                                        "id": 31580,
                                                                        "nodeType": "Block",
                                                                        "src": "7411:184:146",
                                                                        "statements": [
                                                                            {
                                                                                "AST": {
                                                                                    "nodeType": "YulBlock",
                                                                                    "src": "7497:80:146",
                                                                                    "statements": [
                                                                                        {
                                                                                            "expression": {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "arguments": [
                                                                                                            {
                                                                                                                "kind": "number",
                                                                                                                "nodeType": "YulLiteral",
                                                                                                                "src": "7534:2:146",
                                                                                                                "type": "",
                                                                                                                "value": "32"
                                                                                                            },
                                                                                                            {
                                                                                                                "name": "err",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "7538:3:146"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "add",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "7530:3:146"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "7530:12:146"
                                                                                                    },
                                                                                                    {
                                                                                                        "arguments": [
                                                                                                            {
                                                                                                                "name": "err",
                                                                                                                "nodeType": "YulIdentifier",
                                                                                                                "src": "7550:3:146"
                                                                                                            }
                                                                                                        ],
                                                                                                        "functionName": {
                                                                                                            "name": "mload",
                                                                                                            "nodeType": "YulIdentifier",
                                                                                                            "src": "7544:5:146"
                                                                                                        },
                                                                                                        "nodeType": "YulFunctionCall",
                                                                                                        "src": "7544:10:146"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "revert",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "7523:6:146"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "7523:32:146"
                                                                                            },
                                                                                            "nodeType": "YulExpressionStatement",
                                                                                            "src": "7523:32:146"
                                                                                        }
                                                                                    ]
                                                                                },
                                                                                "documentation": "@solidity memory-safe-assembly",
                                                                                "evmVersion": "paris",
                                                                                "externalReferences": [
                                                                                    {
                                                                                        "declaration": 31508,
                                                                                        "isOffset": false,
                                                                                        "isSlot": false,
                                                                                        "src": "7538:3:146",
                                                                                        "valueSize": 1
                                                                                    },
                                                                                    {
                                                                                        "declaration": 31508,
                                                                                        "isOffset": false,
                                                                                        "isSlot": false,
                                                                                        "src": "7550:3:146",
                                                                                        "valueSize": 1
                                                                                    }
                                                                                ],
                                                                                "id": 31579,
                                                                                "nodeType": "InlineAssembly",
                                                                                "src": "7488:89:146"
                                                                            }
                                                                        ]
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "errorName": "",
                                                        "id": 31583,
                                                        "nodeType": "TryCatchClause",
                                                        "parameters": {
                                                            "id": 31509,
                                                            "nodeType": "ParameterList",
                                                            "parameters": [
                                                                {
                                                                    "constant": false,
                                                                    "id": 31508,
                                                                    "mutability": "mutable",
                                                                    "name": "err",
                                                                    "nameLocation": "6746:3:146",
                                                                    "nodeType": "VariableDeclaration",
                                                                    "scope": 31583,
                                                                    "src": "6733:16:146",
                                                                    "stateVariable": false,
                                                                    "storageLocation": "memory",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes_memory_ptr",
                                                                        "typeString": "bytes"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 31507,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6733:5:146",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_storage_ptr",
                                                                            "typeString": "bytes"
                                                                        }
                                                                    },
                                                                    "visibility": "internal"
                                                                }
                                                            ],
                                                            "src": "6732:18:146"
                                                        },
                                                        "src": "6726:883:146"
                                                    }
                                                ],
                                                "externalCall": {
                                                    "arguments": [
                                                        {
                                                            "id": 31494,
                                                            "name": "chainAlias",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31475,
                                                            "src": "6616:10:146",
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
                                                            "id": 31492,
                                                            "name": "vm",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 31122,
                                                            "src": "6606:2:146",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                                "typeString": "contract VmSafe"
                                                            }
                                                        },
                                                        "id": 31493,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "6609:6:146",
                                                        "memberName": "rpcUrl",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 40267,
                                                        "src": "6606:9:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$",
                                                            "typeString": "function (string memory) view external returns (string memory)"
                                                        }
                                                    },
                                                    "id": 31495,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6606:21:146",
                                                    "tryCall": true,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_string_memory_ptr",
                                                        "typeString": "string memory"
                                                    }
                                                },
                                                "id": 31584,
                                                "nodeType": "TryStatement",
                                                "src": "6602:1007:146"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 31587,
                                        "name": "chain",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31478,
                                        "src": "7635:5:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                            "typeString": "struct StdChains.Chain memory"
                                        }
                                    },
                                    "functionReturnParameters": 31483,
                                    "id": 31588,
                                    "nodeType": "Return",
                                    "src": "7628:12:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getChainWithUpdatedRpcUrl",
                        "nameLocation": "6438:25:146",
                        "parameters": {
                            "id": 31479,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31475,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "6478:10:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31590,
                                    "src": "6464:24:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31474,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6464:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31478,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "6503:5:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31590,
                                    "src": "6490:18:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31477,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31476,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "6490:5:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31140,
                                            "src": "6490:5:146"
                                        },
                                        "referencedDeclaration": 31140,
                                        "src": "6490:5:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6463:46:146"
                        },
                        "returnParameters": {
                            "id": 31483,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31482,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31590,
                                    "src": "6527:12:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Chain_$31140_memory_ptr",
                                        "typeString": "struct StdChains.Chain"
                                    },
                                    "typeName": {
                                        "id": 31481,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31480,
                                            "name": "Chain",
                                            "nameLocations": [
                                                "6527:5:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31140,
                                            "src": "6527:5:146"
                                        },
                                        "referencedDeclaration": 31140,
                                        "src": "6527:5:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_Chain_$31140_storage_ptr",
                                            "typeString": "struct StdChains.Chain"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6526:14:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 31600,
                        "nodeType": "FunctionDefinition",
                        "src": "7653:117:146",
                        "nodes": [],
                        "body": {
                            "id": 31599,
                            "nodeType": "Block",
                            "src": "7716:54:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 31597,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31595,
                                            "name": "fallbackToDefaultRpcUrls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31156,
                                            "src": "7726:24:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 31596,
                                            "name": "useDefault",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31592,
                                            "src": "7753:10:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "7726:37:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31598,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7726:37:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setFallbackToDefaultRpcUrls",
                        "nameLocation": "7662:27:146",
                        "parameters": {
                            "id": 31593,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31592,
                                    "mutability": "mutable",
                                    "name": "useDefault",
                                    "nameLocation": "7695:10:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31600,
                                    "src": "7690:15:146",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 31591,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7690:4:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7689:17:146"
                        },
                        "returnParameters": {
                            "id": 31594,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7716:0:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 31782,
                        "nodeType": "FunctionDefinition",
                        "src": "7776:2751:146",
                        "nodes": [],
                        "body": {
                            "id": 31781,
                            "nodeType": "Block",
                            "src": "7815:2712:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "id": 31603,
                                        "name": "stdChainsInitialized",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 31124,
                                        "src": "7829:20:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31605,
                                    "nodeType": "IfStatement",
                                    "src": "7825:33:146",
                                    "trueBody": {
                                        "functionReturnParameters": 31602,
                                        "id": 31604,
                                        "nodeType": "Return",
                                        "src": "7851:7:146"
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 31608,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 31606,
                                            "name": "stdChainsInitialized",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31124,
                                            "src": "7868:20:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "74727565",
                                            "id": 31607,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "bool",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "7891:4:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "value": "true"
                                        },
                                        "src": "7868:27:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 31609,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7868:27:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "616e76696c",
                                                "id": 31611,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8018:7:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b",
                                                    "typeString": "literal_string \"anvil\""
                                                },
                                                "value": "anvil"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "416e76696c",
                                                        "id": 31613,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8037:7:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                                                            "typeString": "literal_string \"Anvil\""
                                                        },
                                                        "value": "Anvil"
                                                    },
                                                    {
                                                        "hexValue": "3331333337",
                                                        "id": 31614,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8046:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_31337_by_1",
                                                            "typeString": "int_const 31337"
                                                        },
                                                        "value": "31337"
                                                    },
                                                    {
                                                        "hexValue": "687474703a2f2f3132372e302e302e313a38353435",
                                                        "id": 31615,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8053:23:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0",
                                                            "typeString": "literal_string \"http://127.0.0.1:8545\""
                                                        },
                                                        "value": "http://127.0.0.1:8545"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_1ab1bd2f543bf53e1036abfe292a89809c7285bff756db6e274686afe6fb41b4",
                                                            "typeString": "literal_string \"Anvil\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_31337_by_1",
                                                            "typeString": "int_const 31337"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_308a18cf3d9de3b161a842ef1e873581d7b16a5d4ea08170e123f95d25f33fe0",
                                                            "typeString": "literal_string \"http://127.0.0.1:8545\""
                                                        }
                                                    ],
                                                    "id": 31612,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8027:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31616,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8027:50:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_a3d859b77cebfdf9da3b485434702c5090ff9e91b7b86c670ebb15f8a00eb72b",
                                                    "typeString": "literal_string \"anvil\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31610,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "7992:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31617,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7992:86:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31618,
                                    "nodeType": "ExpressionStatement",
                                    "src": "7992:86:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d61696e6e6574",
                                                "id": 31620,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8127:9:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff",
                                                    "typeString": "literal_string \"mainnet\""
                                                },
                                                "value": "mainnet"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4d61696e6e6574",
                                                        "id": 31622,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8148:9:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                                                            "typeString": "literal_string \"Mainnet\""
                                                        },
                                                        "value": "Mainnet"
                                                    },
                                                    {
                                                        "hexValue": "31",
                                                        "id": 31623,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8159:1:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6d61696e6e65742e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 31624,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8162:63:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0",
                                                            "typeString": "literal_string \"https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                                                        },
                                                        "value": "https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_8d646f556e5d9d6f1edcf7a39b77f5ac253776eb34efcfd688aacbee518efc26",
                                                            "typeString": "literal_string \"Mainnet\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_1373fea4c12f646a43ebc6d1ea0e596114d1b5b436526018c86d996c7250aef0",
                                                            "typeString": "literal_string \"https://mainnet.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                                                        }
                                                    ],
                                                    "id": 31621,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8138:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31625,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8138:88:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_7beafa94c8bfb8f1c1a43104a34f72c524268aafbfe83bff17485539345c66ff",
                                                    "typeString": "literal_string \"mainnet\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31619,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8088:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31626,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8088:148:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31627,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8088:148:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "676f65726c69",
                                                "id": 31629,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8285:8:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a",
                                                    "typeString": "literal_string \"goerli\""
                                                },
                                                "value": "goerli"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "476f65726c69",
                                                        "id": 31631,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8305:8:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                                                            "typeString": "literal_string \"Goerli\""
                                                        },
                                                        "value": "Goerli"
                                                    },
                                                    {
                                                        "hexValue": "35",
                                                        "id": 31632,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8315:1:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_5_by_1",
                                                            "typeString": "int_const 5"
                                                        },
                                                        "value": "5"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 31633,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8318:62:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42",
                                                            "typeString": "literal_string \"https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                                                        },
                                                        "value": "https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_736fc55653a3415af498a1309898240f13c5e9e33098fa3cf9e5f2a200d14c3e",
                                                            "typeString": "literal_string \"Goerli\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_5_by_1",
                                                            "typeString": "int_const 5"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_eb46d1ff6486ad38c99bfbe75b668c3e422a65114b7e15a3a7eeca36edb48a42",
                                                            "typeString": "literal_string \"https://goerli.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                                                        }
                                                    ],
                                                    "id": 31630,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8295:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31634,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8295:86:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_e24dd81d18a6354d406364c0fc25f4237534cee10d0c3099c9c2a6aa50d7dd0a",
                                                    "typeString": "literal_string \"goerli\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31628,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8246:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31635,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8246:145:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31636,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8246:145:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "7365706f6c6961",
                                                "id": 31638,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8440:9:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a",
                                                    "typeString": "literal_string \"sepolia\""
                                                },
                                                "value": "sepolia"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "5365706f6c6961",
                                                        "id": 31640,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8461:9:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                                                            "typeString": "literal_string \"Sepolia\""
                                                        },
                                                        "value": "Sepolia"
                                                    },
                                                    {
                                                        "hexValue": "3131313535313131",
                                                        "id": 31641,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8472:8:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_11155111_by_1",
                                                            "typeString": "int_const 11155111"
                                                        },
                                                        "value": "11155111"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7365706f6c69612e696e667572612e696f2f76332f6239373934616431646466383464666238633334643662623564636132303031",
                                                        "id": 31642,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8482:63:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f",
                                                            "typeString": "literal_string \"https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                                                        },
                                                        "value": "https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_a6b54cd124a84bb64f1808905ed95fb171a09730726f85e60eefcd47a4831b27",
                                                            "typeString": "literal_string \"Sepolia\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_11155111_by_1",
                                                            "typeString": "int_const 11155111"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_167447379e730a7d89231aec25edd721d4e0b02c818e31467228ef4a7c09810f",
                                                            "typeString": "literal_string \"https://sepolia.infura.io/v3/b9794ad1ddf84dfb8c34d6bb5dca2001\""
                                                        }
                                                    ],
                                                    "id": 31639,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8451:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31643,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8451:95:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_e1f58df0b51f34f4835aba989f0aa2f2e66218cab53207bafd3dbf37270bd39a",
                                                    "typeString": "literal_string \"sepolia\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31637,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8401:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31644,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8401:155:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31645,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8401:155:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6f7074696d69736d",
                                                "id": 31647,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8592:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05",
                                                    "typeString": "literal_string \"optimism\""
                                                },
                                                "value": "optimism"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4f7074696d69736d",
                                                        "id": 31649,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8614:10:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                                                            "typeString": "literal_string \"Optimism\""
                                                        },
                                                        "value": "Optimism"
                                                    },
                                                    {
                                                        "hexValue": "3130",
                                                        "id": 31650,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8626:2:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_10_by_1",
                                                            "typeString": "int_const 10"
                                                        },
                                                        "value": "10"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6d61696e6e65742e6f7074696d69736d2e696f",
                                                        "id": 31651,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8630:29:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e",
                                                            "typeString": "literal_string \"https://mainnet.optimism.io\""
                                                        },
                                                        "value": "https://mainnet.optimism.io"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_f997187c3c319ef9e33fa05f852d1612b66e309dc48d97a4b6b39832090a3bec",
                                                            "typeString": "literal_string \"Optimism\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_10_by_1",
                                                            "typeString": "int_const 10"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_38b9211512154272cdc8d9677b3720aef06041b8d31b5e68a6ffc7a4bb22d93e",
                                                            "typeString": "literal_string \"https://mainnet.optimism.io\""
                                                        }
                                                    ],
                                                    "id": 31648,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8604:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31652,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8604:56:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_09d0f27659ee556a8134fa56941e42400e672aecc2d4cfc61cdb0fcea4590e05",
                                                    "typeString": "literal_string \"optimism\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31646,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8566:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31653,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8566:95:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31654,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8566:95:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6f7074696d69736d5f676f65726c69",
                                                "id": 31656,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8697:17:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c",
                                                    "typeString": "literal_string \"optimism_goerli\""
                                                },
                                                "value": "optimism_goerli"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4f7074696d69736d20476f65726c69",
                                                        "id": 31658,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8726:17:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                                                            "typeString": "literal_string \"Optimism Goerli\""
                                                        },
                                                        "value": "Optimism Goerli"
                                                    },
                                                    {
                                                        "hexValue": "343230",
                                                        "id": 31659,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8745:3:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_420_by_1",
                                                            "typeString": "int_const 420"
                                                        },
                                                        "value": "420"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692e6f7074696d69736d2e696f",
                                                        "id": 31660,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8750:28:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad",
                                                            "typeString": "literal_string \"https://goerli.optimism.io\""
                                                        },
                                                        "value": "https://goerli.optimism.io"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_6271e061a2d4ce1b6e267081a40c4dca996efe738d092d650bcfa23669d2fd24",
                                                            "typeString": "literal_string \"Optimism Goerli\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_420_by_1",
                                                            "typeString": "int_const 420"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_ef3dbe59ba72d73e51c1959c67c0485880270dce59b4642a5dff6497ea5e55ad",
                                                            "typeString": "literal_string \"https://goerli.optimism.io\""
                                                        }
                                                    ],
                                                    "id": 31657,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8716:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31661,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8716:63:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_ecf3b2cc678a701bfbf2329b12e6edf723c3043a32339c2eea2efb7c9533c09c",
                                                    "typeString": "literal_string \"optimism_goerli\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31655,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8671:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31662,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8671:109:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31663,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8671:109:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6f6e65",
                                                "id": 31665,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8816:14:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4",
                                                    "typeString": "literal_string \"arbitrum_one\""
                                                },
                                                "value": "arbitrum_one"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "417262697472756d204f6e65",
                                                        "id": 31667,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8842:14:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                                                            "typeString": "literal_string \"Arbitrum One\""
                                                        },
                                                        "value": "Arbitrum One"
                                                    },
                                                    {
                                                        "hexValue": "3432313631",
                                                        "id": 31668,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8858:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_42161_by_1",
                                                            "typeString": "int_const 42161"
                                                        },
                                                        "value": "42161"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f617262312e617262697472756d2e696f2f727063",
                                                        "id": 31669,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8865:30:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126",
                                                            "typeString": "literal_string \"https://arb1.arbitrum.io/rpc\""
                                                        },
                                                        "value": "https://arb1.arbitrum.io/rpc"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_9e42b1aebd5463751aea2c5f6ee37505334a82b4085315a5f4b8b0f81d3b9004",
                                                            "typeString": "literal_string \"Arbitrum One\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_42161_by_1",
                                                            "typeString": "int_const 42161"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_ff28c1a1bf3c117d5956efad529d0ee22dcfc0fe5cbf5a03e0bdfcc3c6cac126",
                                                            "typeString": "literal_string \"https://arb1.arbitrum.io/rpc\""
                                                        }
                                                    ],
                                                    "id": 31666,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8832:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31670,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8832:64:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_e4b44cea7839e0679ac5072602932da9b25ebfb3a9ac42625d9c583a7b6b2eb4",
                                                    "typeString": "literal_string \"arbitrum_one\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31664,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8790:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31671,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8790:107:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31672,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8790:107:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6f6e655f676f65726c69",
                                                "id": 31674,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8946:21:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4",
                                                    "typeString": "literal_string \"arbitrum_one_goerli\""
                                                },
                                                "value": "arbitrum_one_goerli"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "417262697472756d204f6e6520476f65726c69",
                                                        "id": 31676,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "8979:21:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                                                            "typeString": "literal_string \"Arbitrum One Goerli\""
                                                        },
                                                        "value": "Arbitrum One Goerli"
                                                    },
                                                    {
                                                        "hexValue": "343231363133",
                                                        "id": 31677,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9002:6:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_421613_by_1",
                                                            "typeString": "int_const 421613"
                                                        },
                                                        "value": "421613"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f676f65726c692d726f6c6c75702e617262697472756d2e696f2f727063",
                                                        "id": 31678,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9010:39:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea",
                                                            "typeString": "literal_string \"https://goerli-rollup.arbitrum.io/rpc\""
                                                        },
                                                        "value": "https://goerli-rollup.arbitrum.io/rpc"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_57f7b6894161eb541e81676f15adf1e65eee36bdcfd592f252d22d4394480f21",
                                                            "typeString": "literal_string \"Arbitrum One Goerli\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_421613_by_1",
                                                            "typeString": "int_const 421613"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_d65fa49ed6bf0763184aace821262295f8ad23c20b74cd1f836fe5e06f5dd8ea",
                                                            "typeString": "literal_string \"https://goerli-rollup.arbitrum.io/rpc\""
                                                        }
                                                    ],
                                                    "id": 31675,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "8969:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31679,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8969:81:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_9c5068a3a5cdbd747f13200fdd6f590995f99bde231a5dcfa62a5f92af1dc3d4",
                                                    "typeString": "literal_string \"arbitrum_one_goerli\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31673,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "8907:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31680,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8907:153:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31681,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8907:153:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "617262697472756d5f6e6f7661",
                                                "id": 31683,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9096:15:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac",
                                                    "typeString": "literal_string \"arbitrum_nova\""
                                                },
                                                "value": "arbitrum_nova"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "417262697472756d204e6f7661",
                                                        "id": 31685,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9123:15:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                                                            "typeString": "literal_string \"Arbitrum Nova\""
                                                        },
                                                        "value": "Arbitrum Nova"
                                                    },
                                                    {
                                                        "hexValue": "3432313730",
                                                        "id": 31686,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9140:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_42170_by_1",
                                                            "typeString": "int_const 42170"
                                                        },
                                                        "value": "42170"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6e6f76612e617262697472756d2e696f2f727063",
                                                        "id": 31687,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9147:30:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac",
                                                            "typeString": "literal_string \"https://nova.arbitrum.io/rpc\""
                                                        },
                                                        "value": "https://nova.arbitrum.io/rpc"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_25c77b7679bf463420c39c7728b9f65b6a8f1ae05b3335eb9e394b1b61bf8f21",
                                                            "typeString": "literal_string \"Arbitrum Nova\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_42170_by_1",
                                                            "typeString": "int_const 42170"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_a77f0a686c95785c75ada33247e30dc9ac80330a7f8eb521bebdf48f492ee4ac",
                                                            "typeString": "literal_string \"https://nova.arbitrum.io/rpc\""
                                                        }
                                                    ],
                                                    "id": 31684,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9113:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31688,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9113:65:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_9338ed1403277416ebb39d4e992ebf5c49e6dded5ec79963ea5fc261cbd7fdac",
                                                    "typeString": "literal_string \"arbitrum_nova\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31682,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9070:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31689,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9070:109:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31690,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9070:109:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "706f6c79676f6e",
                                                "id": 31692,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9215:9:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408",
                                                    "typeString": "literal_string \"polygon\""
                                                },
                                                "value": "polygon"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "506f6c79676f6e",
                                                        "id": 31694,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9236:9:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                                                            "typeString": "literal_string \"Polygon\""
                                                        },
                                                        "value": "Polygon"
                                                    },
                                                    {
                                                        "hexValue": "313337",
                                                        "id": 31695,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9247:3:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_137_by_1",
                                                            "typeString": "int_const 137"
                                                        },
                                                        "value": "137"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f706f6c79676f6e2d7270632e636f6d",
                                                        "id": 31696,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9252:25:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0",
                                                            "typeString": "literal_string \"https://polygon-rpc.com\""
                                                        },
                                                        "value": "https://polygon-rpc.com"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_890af8db8ca1aa1e915857edbc2717639ebd8a22c786f9e0e776d6a1aacb5e71",
                                                            "typeString": "literal_string \"Polygon\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_137_by_1",
                                                            "typeString": "int_const 137"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_fda46ab670b83929623b4aa9bcfa97ff7b7376fa90a24a450a8561482232c5c0",
                                                            "typeString": "literal_string \"https://polygon-rpc.com\""
                                                        }
                                                    ],
                                                    "id": 31693,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9226:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31697,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9226:52:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_ac63fa1fe369e75c38d62f0f4d465b48b3cd5159f0fb416332899402031d1408",
                                                    "typeString": "literal_string \"polygon\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31691,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9189:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31698,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9189:90:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31699,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9189:90:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "706f6c79676f6e5f6d756d626169",
                                                "id": 31701,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9328:16:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0",
                                                    "typeString": "literal_string \"polygon_mumbai\""
                                                },
                                                "value": "polygon_mumbai"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "506f6c79676f6e204d756d626169",
                                                        "id": 31703,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9356:16:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                                                            "typeString": "literal_string \"Polygon Mumbai\""
                                                        },
                                                        "value": "Polygon Mumbai"
                                                    },
                                                    {
                                                        "hexValue": "3830303031",
                                                        "id": 31704,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9374:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_80001_by_1",
                                                            "typeString": "int_const 80001"
                                                        },
                                                        "value": "80001"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632d6d756d6261692e6d61746963766967696c2e636f6d",
                                                        "id": 31705,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9381:35:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121",
                                                            "typeString": "literal_string \"https://rpc-mumbai.maticvigil.com\""
                                                        },
                                                        "value": "https://rpc-mumbai.maticvigil.com"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_173b0df64039e25119e26da4408dbd53da69bf06543516209ecc66f21e0c9725",
                                                            "typeString": "literal_string \"Polygon Mumbai\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_80001_by_1",
                                                            "typeString": "int_const 80001"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_73b526a6131ddfd959c21485254bd24a6ab94de746e87b78a515c1d42c7ee121",
                                                            "typeString": "literal_string \"https://rpc-mumbai.maticvigil.com\""
                                                        }
                                                    ],
                                                    "id": 31702,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9346:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31706,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9346:71:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_a7308364e169f5f44de3933205a00d3632b7366702c91dff3452b4dbf6ed70f0",
                                                    "typeString": "literal_string \"polygon_mumbai\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31700,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9289:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31707,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9289:138:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31708,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9289:138:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6176616c616e636865",
                                                "id": 31710,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9463:11:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55",
                                                    "typeString": "literal_string \"avalanche\""
                                                },
                                                "value": "avalanche"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4176616c616e636865",
                                                        "id": 31712,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9486:11:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                                                            "typeString": "literal_string \"Avalanche\""
                                                        },
                                                        "value": "Avalanche"
                                                    },
                                                    {
                                                        "hexValue": "3433313134",
                                                        "id": 31713,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9499:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43114_by_1",
                                                            "typeString": "int_const 43114"
                                                        },
                                                        "value": "43114"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6170692e617661782e6e6574776f726b2f6578742f62632f432f727063",
                                                        "id": 31714,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9506:39:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a",
                                                            "typeString": "literal_string \"https://api.avax.network/ext/bc/C/rpc\""
                                                        },
                                                        "value": "https://api.avax.network/ext/bc/C/rpc"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_6585177c3aba6cb7ffc0a37e831a958c4ee9278e4c62c7bdad7175ca09883c40",
                                                            "typeString": "literal_string \"Avalanche\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_43114_by_1",
                                                            "typeString": "int_const 43114"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_429365eac47ed6b261c38927d854e528b743fc5a678b1b4ba631c511f305886a",
                                                            "typeString": "literal_string \"https://api.avax.network/ext/bc/C/rpc\""
                                                        }
                                                    ],
                                                    "id": 31711,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9476:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31715,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9476:70:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_6e8b0d92516ee4289145e3b78cea58daac177b1c618beeedbc6cdabd388a6e55",
                                                    "typeString": "literal_string \"avalanche\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31709,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9437:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31716,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9437:110:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31717,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9437:110:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6176616c616e6368655f66756a69",
                                                "id": 31719,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9596:16:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692",
                                                    "typeString": "literal_string \"avalanche_fuji\""
                                                },
                                                "value": "avalanche_fuji"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4176616c616e6368652046756a69",
                                                        "id": 31721,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9624:16:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                                                            "typeString": "literal_string \"Avalanche Fuji\""
                                                        },
                                                        "value": "Avalanche Fuji"
                                                    },
                                                    {
                                                        "hexValue": "3433313133",
                                                        "id": 31722,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9642:5:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_43113_by_1",
                                                            "typeString": "int_const 43113"
                                                        },
                                                        "value": "43113"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6170692e617661782d746573742e6e6574776f726b2f6578742f62632f432f727063",
                                                        "id": 31723,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9649:44:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d",
                                                            "typeString": "literal_string \"https://api.avax-test.network/ext/bc/C/rpc\""
                                                        },
                                                        "value": "https://api.avax-test.network/ext/bc/C/rpc"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_522b176494c651b1a4c5779e66ed19f885df62891abfb18fd5e45b69bdabe11b",
                                                            "typeString": "literal_string \"Avalanche Fuji\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_43113_by_1",
                                                            "typeString": "int_const 43113"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_d6621ea822eabf6c190358ea82de0c52d3503dcce8117b3366a8a3bd96eb422d",
                                                            "typeString": "literal_string \"https://api.avax-test.network/ext/bc/C/rpc\""
                                                        }
                                                    ],
                                                    "id": 31720,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9614:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31724,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9614:80:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_a1920d2f80060f1c83444622c7eb5adf4484bed8a537b8d13eae53bd800aa692",
                                                    "typeString": "literal_string \"avalanche_fuji\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31718,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9557:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31725,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9557:147:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31726,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9557:147:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "626e625f736d6172745f636861696e",
                                                "id": 31728,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9753:17:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e",
                                                    "typeString": "literal_string \"bnb_smart_chain\""
                                                },
                                                "value": "bnb_smart_chain"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "424e4220536d61727420436861696e",
                                                        "id": 31730,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9782:17:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                                                            "typeString": "literal_string \"BNB Smart Chain\""
                                                        },
                                                        "value": "BNB Smart Chain"
                                                    },
                                                    {
                                                        "hexValue": "3536",
                                                        "id": 31731,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9801:2:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_56_by_1",
                                                            "typeString": "int_const 56"
                                                        },
                                                        "value": "56"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f6273632d6461746173656564312e62696e616e63652e6f7267",
                                                        "id": 31732,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9805:35:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719",
                                                            "typeString": "literal_string \"https://bsc-dataseed1.binance.org\""
                                                        },
                                                        "value": "https://bsc-dataseed1.binance.org"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_3606544ee65d30d7c7f7d6a1f6618e0d836299fa5b85b88d71a59535c6a1550f",
                                                            "typeString": "literal_string \"BNB Smart Chain\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_56_by_1",
                                                            "typeString": "int_const 56"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_e2b4215bd50ab260c8c9f18e36ea07b1f952450853bcf024123d5767a40d4719",
                                                            "typeString": "literal_string \"https://bsc-dataseed1.binance.org\""
                                                        }
                                                    ],
                                                    "id": 31729,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9772:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31733,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9772:69:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_fa8b17ae9aa26749f5dc3a3bb333e0019db0c257f3541e870f73bb48b574361e",
                                                    "typeString": "literal_string \"bnb_smart_chain\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31727,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9714:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31734,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9714:137:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31735,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9714:137:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "626e625f736d6172745f636861696e5f746573746e6574",
                                                "id": 31737,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "9900:25:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29",
                                                    "typeString": "literal_string \"bnb_smart_chain_testnet\""
                                                },
                                                "value": "bnb_smart_chain_testnet"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "424e4220536d61727420436861696e20546573746e6574",
                                                        "id": 31739,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9949:25:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                                                            "typeString": "literal_string \"BNB Smart Chain Testnet\""
                                                        },
                                                        "value": "BNB Smart Chain Testnet"
                                                    },
                                                    {
                                                        "hexValue": "3937",
                                                        "id": 31740,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9976:2:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_97_by_1",
                                                            "typeString": "int_const 97"
                                                        },
                                                        "value": "97"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e616e6b722e636f6d2f6273635f746573746e65745f63686170656c",
                                                        "id": 31741,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "9980:41:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960",
                                                            "typeString": "literal_string \"https://rpc.ankr.com/bsc_testnet_chapel\""
                                                        },
                                                        "value": "https://rpc.ankr.com/bsc_testnet_chapel"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_3b1d88342c4ab079c9a8243ef8dfeb0bb41e1da5dc9fe62ca728dfe4ea21092c",
                                                            "typeString": "literal_string \"BNB Smart Chain Testnet\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_97_by_1",
                                                            "typeString": "int_const 97"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_6660930de41ed298fb6a2348f33b08e5736a3823e6ffb86942097b237e075960",
                                                            "typeString": "literal_string \"https://rpc.ankr.com/bsc_testnet_chapel\""
                                                        }
                                                    ],
                                                    "id": 31738,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "9939:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31742,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9939:83:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_1813de9892ab9db3d0c3b0c3eed9c8b820fe0c7e205bed860e6e89f4d7f75f29",
                                                    "typeString": "literal_string \"bnb_smart_chain_testnet\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31736,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "9861:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31743,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9861:171:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31744,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9861:171:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "676e6f7369735f636861696e",
                                                "id": 31746,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10068:14:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595",
                                                    "typeString": "literal_string \"gnosis_chain\""
                                                },
                                                "value": "gnosis_chain"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "476e6f73697320436861696e",
                                                        "id": 31748,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10094:14:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                                                            "typeString": "literal_string \"Gnosis Chain\""
                                                        },
                                                        "value": "Gnosis Chain"
                                                    },
                                                    {
                                                        "hexValue": "313030",
                                                        "id": 31749,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10110:3:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_100_by_1",
                                                            "typeString": "int_const 100"
                                                        },
                                                        "value": "100"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e676e6f736973636861696e2e636f6d",
                                                        "id": 31750,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10115:29:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df",
                                                            "typeString": "literal_string \"https://rpc.gnosischain.com\""
                                                        },
                                                        "value": "https://rpc.gnosischain.com"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_9bfc6ae4a1f5d8ea33b4f631c2f7dfbfa7d613af42ef38137c06d4cd03619b02",
                                                            "typeString": "literal_string \"Gnosis Chain\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_100_by_1",
                                                            "typeString": "int_const 100"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_127e02590d58e22164456f76136047039faabc2ca27eb41939081a3e775b50df",
                                                            "typeString": "literal_string \"https://rpc.gnosischain.com\""
                                                        }
                                                    ],
                                                    "id": 31747,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "10084:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31751,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10084:61:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_847b7ed4df59b2dfcdba377bf4ac481c502926169e9af948ee2dd45c0e6df595",
                                                    "typeString": "literal_string \"gnosis_chain\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31745,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "10042:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31752,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10042:104:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31753,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10042:104:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e6265616d",
                                                "id": 31755,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10182:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d",
                                                    "typeString": "literal_string \"moonbeam\""
                                                },
                                                "value": "moonbeam"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4d6f6f6e6265616d",
                                                        "id": 31757,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10204:10:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                                                            "typeString": "literal_string \"Moonbeam\""
                                                        },
                                                        "value": "Moonbeam"
                                                    },
                                                    {
                                                        "hexValue": "31323834",
                                                        "id": 31758,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10216:4:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1284_by_1",
                                                            "typeString": "int_const 1284"
                                                        },
                                                        "value": "1284"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 31759,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10222:34:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191",
                                                            "typeString": "literal_string \"https://rpc.api.moonbeam.network\""
                                                        },
                                                        "value": "https://rpc.api.moonbeam.network"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_99a49606e97aa9d58789783bd4cdfcc3ab4072167b449d1e303cb1135216531b",
                                                            "typeString": "literal_string \"Moonbeam\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_1284_by_1",
                                                            "typeString": "int_const 1284"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_cf5d37a68a82777d3f0adcdf64b39d98f1e820688e4ced698cd753bbd1e32191",
                                                            "typeString": "literal_string \"https://rpc.api.moonbeam.network\""
                                                        }
                                                    ],
                                                    "id": 31756,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "10194:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31760,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10194:63:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_26aaddd9933ae745bc6e39b5e8962c0d0eef85597e0bdcb35ce7e0d96b84735d",
                                                    "typeString": "literal_string \"moonbeam\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31754,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "10156:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31761,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10156:102:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31762,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10156:102:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e7269766572",
                                                "id": 31764,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10307:11:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a",
                                                    "typeString": "literal_string \"moonriver\""
                                                },
                                                "value": "moonriver"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4d6f6f6e7269766572",
                                                        "id": 31766,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10330:11:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                                                            "typeString": "literal_string \"Moonriver\""
                                                        },
                                                        "value": "Moonriver"
                                                    },
                                                    {
                                                        "hexValue": "31323835",
                                                        "id": 31767,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10343:4:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1285_by_1",
                                                            "typeString": "int_const 1285"
                                                        },
                                                        "value": "1285"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e6170692e6d6f6f6e72697665722e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 31768,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10349:44:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46",
                                                            "typeString": "literal_string \"https://rpc.api.moonriver.moonbeam.network\""
                                                        },
                                                        "value": "https://rpc.api.moonriver.moonbeam.network"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_65d5ad77d0dd38eb7219d1087db2cb9c2440e3f70be3ee1567aa2329d21dad8a",
                                                            "typeString": "literal_string \"Moonriver\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_1285_by_1",
                                                            "typeString": "int_const 1285"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_cdf0715ef9b420dea4501d55a4c023de5bc6e2be267c3e3ec8345021a77f3e46",
                                                            "typeString": "literal_string \"https://rpc.api.moonriver.moonbeam.network\""
                                                        }
                                                    ],
                                                    "id": 31765,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "10320:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31769,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10320:74:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_2eb4cae4af32e190d8881d6d0a59016ff55092d3a70bcf6b321432516acfd74a",
                                                    "typeString": "literal_string \"moonriver\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31763,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "10268:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31770,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10268:136:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31771,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10268:136:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "6d6f6f6e62617365",
                                                "id": 31773,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "10440:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e",
                                                    "typeString": "literal_string \"moonbase\""
                                                },
                                                "value": "moonbase"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "4d6f6f6e62617365",
                                                        "id": 31775,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10462:10:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                                                            "typeString": "literal_string \"Moonbase\""
                                                        },
                                                        "value": "Moonbase"
                                                    },
                                                    {
                                                        "hexValue": "31323837",
                                                        "id": 31776,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10474:4:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1287_by_1",
                                                            "typeString": "int_const 1287"
                                                        },
                                                        "value": "1287"
                                                    },
                                                    {
                                                        "hexValue": "68747470733a2f2f7270632e746573746e65742e6d6f6f6e6265616d2e6e6574776f726b",
                                                        "id": 31777,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10480:38:146",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585",
                                                            "typeString": "literal_string \"https://rpc.testnet.moonbeam.network\""
                                                        },
                                                        "value": "https://rpc.testnet.moonbeam.network"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_6f3c53069778183912da77a05fe67c3d6edb208ffdf1ca0161d51543035e3c68",
                                                            "typeString": "literal_string \"Moonbase\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_rational_1287_by_1",
                                                            "typeString": "int_const 1287"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_611da7a50d9bf940412b47209c78030562dd2047afcf97dad69e15217355b585",
                                                            "typeString": "literal_string \"https://rpc.testnet.moonbeam.network\""
                                                        }
                                                    ],
                                                    "id": 31774,
                                                    "name": "ChainData",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 31131,
                                                    "src": "10452:9:146",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_ChainData_$31131_storage_ptr_$",
                                                        "typeString": "type(struct StdChains.ChainData storage pointer)"
                                                    }
                                                },
                                                "id": 31778,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10452:67:146",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_ccd05eb377a4954d8471e48341881dadc4d2a36094f09ce309d35b3b6204f44e",
                                                    "typeString": "literal_string \"moonbase\""
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31772,
                                            "name": "setChainWithDefaultRpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31819,
                                            "src": "10414:25:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31779,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10414:106:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31780,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10414:106:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "initializeStdChains",
                        "nameLocation": "7785:19:146",
                        "parameters": {
                            "id": 31601,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7804:2:146"
                        },
                        "returnParameters": {
                            "id": 31602,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "7815:0:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 31819,
                        "nodeType": "FunctionDefinition",
                        "src": "10609:305:146",
                        "nodes": [],
                        "body": {
                            "id": 31818,
                            "nodeType": "Block",
                            "src": "10702:212:146",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        31791
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 31791,
                                            "mutability": "mutable",
                                            "name": "rpcUrl",
                                            "nameLocation": "10726:6:146",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 31818,
                                            "src": "10712:20:146",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string"
                                            },
                                            "typeName": {
                                                "id": 31790,
                                                "name": "string",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10712:6:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage_ptr",
                                                    "typeString": "string"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 31794,
                                    "initialValue": {
                                        "expression": {
                                            "id": 31792,
                                            "name": "chain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31787,
                                            "src": "10735:5:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                "typeString": "struct StdChains.ChainData memory"
                                            }
                                        },
                                        "id": 31793,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "10741:6:146",
                                        "memberName": "rpcUrl",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 31130,
                                        "src": "10735:12:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10712:35:146"
                                },
                                {
                                    "expression": {
                                        "id": 31799,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 31795,
                                                "name": "defaultRpcUrls",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31149,
                                                "src": "10757:14:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_string_memory_ptr_$_t_string_storage_$",
                                                    "typeString": "mapping(string memory => string storage ref)"
                                                }
                                            },
                                            "id": 31797,
                                            "indexExpression": {
                                                "id": 31796,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31784,
                                                "src": "10772:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "10757:26:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 31798,
                                            "name": "rpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31791,
                                            "src": "10786:6:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "10757:35:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 31800,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10757:35:146"
                                },
                                {
                                    "expression": {
                                        "id": 31805,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 31801,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31787,
                                                "src": "10802:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 31803,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "10808:6:146",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31130,
                                            "src": "10802:12:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "hexValue": "",
                                            "id": 31804,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "string",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "10817:2:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                "typeString": "literal_string \"\""
                                            },
                                            "value": ""
                                        },
                                        "src": "10802:17:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 31806,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10802:17:146"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 31808,
                                                "name": "chainAlias",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31784,
                                                "src": "10838:10:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            {
                                                "id": 31809,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31787,
                                                "src": "10850:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            ],
                                            "id": 31807,
                                            "name": "setChain",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                31375,
                                                31396
                                            ],
                                            "referencedDeclaration": 31375,
                                            "src": "10829:8:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_struct$_ChainData_$31131_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,struct StdChains.ChainData memory)"
                                            }
                                        },
                                        "id": 31810,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10829:27:146",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 31811,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10829:27:146"
                                },
                                {
                                    "expression": {
                                        "id": 31816,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "expression": {
                                                "id": 31812,
                                                "name": "chain",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 31787,
                                                "src": "10866:5:146",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                                    "typeString": "struct StdChains.ChainData memory"
                                                }
                                            },
                                            "id": 31814,
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "memberLocation": "10872:6:146",
                                            "memberName": "rpcUrl",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 31130,
                                            "src": "10866:12:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 31815,
                                            "name": "rpcUrl",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31791,
                                            "src": "10881:6:146",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "10866:21:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                        }
                                    },
                                    "id": 31817,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10866:21:146"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setChainWithDefaultRpcUrl",
                        "nameLocation": "10618:25:146",
                        "parameters": {
                            "id": 31788,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 31784,
                                    "mutability": "mutable",
                                    "name": "chainAlias",
                                    "nameLocation": "10658:10:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31819,
                                    "src": "10644:24:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 31783,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10644:6:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 31787,
                                    "mutability": "mutable",
                                    "name": "chain",
                                    "nameLocation": "10687:5:146",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31819,
                                    "src": "10670:22:146",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_ChainData_$31131_memory_ptr",
                                        "typeString": "struct StdChains.ChainData"
                                    },
                                    "typeName": {
                                        "id": 31786,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 31785,
                                            "name": "ChainData",
                                            "nameLocations": [
                                                "10670:9:146"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 31131,
                                            "src": "10670:9:146"
                                        },
                                        "referencedDeclaration": 31131,
                                        "src": "10670:9:146",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_ChainData_$31131_storage_ptr",
                                            "typeString": "struct StdChains.ChainData"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10643:50:146"
                        },
                        "returnParameters": {
                            "id": 31789,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10702:0:146"
                        },
                        "scope": 31820,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "private"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "StdChains",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 31105,
                    "nodeType": "StructuredDocumentation",
                    "src": "99:1799:146",
                    "text": " StdChains provides information about EVM compatible chains that can be used in scripts/tests.\n For each chain, the chain's name, chain ID, and a default RPC URL are provided. Chains are\n identified by their alias, which is the same as the alias in the `[rpc_endpoints]` section of\n the `foundry.toml` file. For best UX, ensure the alias in the `foundry.toml` file match the\n alias used in this contract, which can be found as the first argument to the\n `setChainWithDefaultRpcUrl` call in the `initializeStdChains` function.\n There are two main ways to use this contract:\n   1. Set a chain with `setChain(string memory chainAlias, ChainData memory chain)` or\n      `setChain(string memory chainAlias, Chain memory chain)`\n   2. Get a chain with `getChain(string memory chainAlias)` or `getChain(uint256 chainId)`.\n The first time either of those are used, chains are initialized with the default set of RPC URLs.\n This is done in `initializeStdChains`, which uses `setChainWithDefaultRpcUrl`. Defaults are recorded in\n `defaultRpcUrls`.\n The `setChain` function is straightforward, and it simply saves off the given chain data.\n The `getChain` methods use `getChainWithUpdatedRpcUrl` to return a chain. For example, let's say\n we want to retrieve the RPC URL for `mainnet`:\n   - If you have specified data with `setChain`, it will return that.\n   - If you have configured a mainnet RPC URL in `foundry.toml`, it will return the URL, provided it\n     is valid (e.g. a URL is specified, or an environment variable is given and exists).\n   - If neither of the above conditions is met, the default data is returned.\n Summarizing the above, the prioritization hierarchy is `setChain` -> `foundry.toml` -> environment variable -> defaults."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    31820
                ],
                "name": "StdChains",
                "nameLocation": "1917:9:146",
                "scope": 31821,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 146
};
