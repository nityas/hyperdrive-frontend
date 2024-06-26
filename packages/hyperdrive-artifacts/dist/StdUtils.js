export const StdUtils = {
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdUtils.sol\":\"StdUtils\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]}},\"version\":1}",
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
                "lib/forge-std/src/StdUtils.sol": "StdUtils"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdUtils.sol": {
                "keccak256": "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1",
                "urls": [
                    "bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140",
                    "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"
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
            },
            "lib/forge-std/src/interfaces/IMulticall3.sol": {
                "keccak256": "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a",
                "urls": [
                    "bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0",
                    "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/StdUtils.sol",
        "id": 39191,
        "exportedSymbols": {
            "IMulticall3": [
                57130
            ],
            "StdUtils": [
                39190
            ],
            "VmSafe": [
                40306
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:10492:154",
        "nodes": [
            {
                "id": 38344,
                "nodeType": "PragmaDirective",
                "src": "32:31:154",
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
                "id": 38345,
                "nodeType": "PragmaDirective",
                "src": "65:33:154",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 38347,
                "nodeType": "ImportDirective",
                "src": "100:57:154",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/interfaces/IMulticall3.sol",
                "file": "./interfaces/IMulticall3.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 39191,
                "sourceUnit": 57131,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 38346,
                            "name": "IMulticall3",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 57130,
                            "src": "108:11:154",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 38349,
                "nodeType": "ImportDirective",
                "src": "158:32:154",
                "nodes": [],
                "absolutePath": "lib/forge-std/src/Vm.sol",
                "file": "./Vm.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 39191,
                "sourceUnit": 40779,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 38348,
                            "name": "VmSafe",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 40306,
                            "src": "166:6:154",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 39190,
                "nodeType": "ContractDefinition",
                "src": "192:10331:154",
                "nodes": [
                    {
                        "id": 38355,
                        "nodeType": "VariableDeclaration",
                        "src": "435:96:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "multicall",
                        "nameLocation": "464:9:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IMulticall3_$57130",
                            "typeString": "contract IMulticall3"
                        },
                        "typeName": {
                            "id": 38351,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 38350,
                                "name": "IMulticall3",
                                "nameLocations": [
                                    "435:11:154"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 57130,
                                "src": "435:11:154"
                            },
                            "referencedDeclaration": 57130,
                            "src": "435:11:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IMulticall3_$57130",
                                "typeString": "contract IMulticall3"
                            }
                        },
                        "value": {
                            "arguments": [
                                {
                                    "hexValue": "307863413131626465303539373762333633313136373032383836326245326131373339373643413131",
                                    "id": 38353,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "488:42:154",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "value": "0xcA11bde05977b3631167028862bE2a173976CA11"
                                }
                            ],
                            "expression": {
                                "argumentTypes": [
                                    {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                ],
                                "id": 38352,
                                "name": "IMulticall3",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 57130,
                                "src": "476:11:154",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_IMulticall3_$57130_$",
                                    "typeString": "type(contract IMulticall3)"
                                }
                            },
                            "id": 38354,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "476:55:154",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_IMulticall3_$57130",
                                "typeString": "contract IMulticall3"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38372,
                        "nodeType": "VariableDeclaration",
                        "src": "537:92:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "vm",
                        "nameLocation": "561:2:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                            "typeString": "contract VmSafe"
                        },
                        "typeName": {
                            "id": 38357,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 38356,
                                "name": "VmSafe",
                                "nameLocations": [
                                    "537:6:154"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 40306,
                                "src": "537:6:154"
                            },
                            "referencedDeclaration": 40306,
                            "src": "537:6:154",
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
                                                                    "id": 38366,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "string",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "607:17:154",
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
                                                                "id": 38365,
                                                                "name": "keccak256",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -8,
                                                                "src": "597:9:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                    "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                }
                                                            },
                                                            "id": 38367,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "597:28:154",
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
                                                        "id": 38364,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "589:7:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 38363,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "589:7:154",
                                                            "typeDescriptions": {}
                                                        }
                                                    },
                                                    "id": 38368,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "typeConversion",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "589:37:154",
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
                                                "id": 38362,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "ElementaryTypeNameExpression",
                                                "src": "581:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint160_$",
                                                    "typeString": "type(uint160)"
                                                },
                                                "typeName": {
                                                    "id": 38361,
                                                    "name": "uint160",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "581:7:154",
                                                    "typeDescriptions": {}
                                                }
                                            },
                                            "id": 38369,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "typeConversion",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "581:46:154",
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
                                        "id": 38360,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "573:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                        },
                                        "typeName": {
                                            "id": 38359,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "573:7:154",
                                            "typeDescriptions": {}
                                        }
                                    },
                                    "id": 38370,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "573:55:154",
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
                                "id": 38358,
                                "name": "VmSafe",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 40306,
                                "src": "566:6:154",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_VmSafe_$40306_$",
                                    "typeString": "type(contract VmSafe)"
                                }
                            },
                            "id": 38371,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "566:63:154",
                            "tryCall": false,
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_VmSafe_$40306",
                                "typeString": "contract VmSafe"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38375,
                        "nodeType": "VariableDeclaration",
                        "src": "635:86:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CONSOLE2_ADDRESS",
                        "nameLocation": "660:16:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 38373,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "635:7:154",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": {
                            "hexValue": "307830303030303030303030303030303030303036333646366537333646366336353265366336663637",
                            "id": 38374,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "679:42:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            },
                            "value": "0x000000000000000000636F6e736F6c652e6c6f67"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38378,
                        "nodeType": "VariableDeclaration",
                        "src": "727:127:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "INT256_MIN_ABS",
                        "nameLocation": "752:14:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 38376,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "727:7:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "3537383936303434363138363538303937373131373835343932353034333433393533393236363334393932333332383230323832303139373238373932303033393536353634383139393638",
                            "id": 38377,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "777:77:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_57896044618658097711785492504343953926634992332820282019728792003956564819968_by_1",
                                "typeString": "int_const 5789...(69 digits omitted)...9968"
                            },
                            "value": "57896044618658097711785492504343953926634992332820282019728792003956564819968"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38381,
                        "nodeType": "VariableDeclaration",
                        "src": "860:129:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "SECP256K1_ORDER",
                        "nameLocation": "885:15:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 38379,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "860:7:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313135373932303839323337333136313935343233353730393835303038363837393037383532383337353634323739303734393034333832363035313633313431353138313631343934333337",
                            "id": 38380,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "911:78:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907852837564279074904382605163141518161494337_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...4337"
                            },
                            "value": "115792089237316195423570985008687907852837564279074904382605163141518161494337"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38384,
                        "nodeType": "VariableDeclaration",
                        "src": "995:125:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "UINT256_MAX",
                        "nameLocation": "1020:11:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 38382,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "995:7:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "value": {
                            "hexValue": "313135373932303839323337333136313935343233353730393835303038363837393037383533323639393834363635363430353634303339343537353834303037393133313239363339393335",
                            "id": 38383,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1042:78:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                                "typeString": "int_const 1157...(70 digits omitted)...9935"
                            },
                            "value": "115792089237316195423570985008687907853269984665640564039457584007913129639935"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38387,
                        "nodeType": "VariableDeclaration",
                        "src": "1239:85:154",
                        "nodes": [],
                        "constant": true,
                        "mutability": "constant",
                        "name": "CREATE2_FACTORY",
                        "nameLocation": "1264:15:154",
                        "scope": 39190,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 38385,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "1239:7:154",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "value": {
                            "hexValue": "307834653539623434383437623337393537383538383932306341373846624632366330423439353643",
                            "id": 38386,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1282:42:154",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            },
                            "value": "0x4e59b44847b379578588920cA78FbF26c0B4956C"
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 38517,
                        "nodeType": "FunctionDefinition",
                        "src": "1546:1263:154",
                        "nodes": [],
                        "body": {
                            "id": 38516,
                            "nodeType": "Block",
                            "src": "1646:1163:154",
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
                                                "id": 38401,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 38399,
                                                    "name": "min",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38391,
                                                    "src": "1664:3:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 38400,
                                                    "name": "max",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38393,
                                                    "src": "1671:3:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "1664:10:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5374645574696c7320626f756e642875696e743235362c75696e743235362c75696e74323536293a204d6178206973206c657373207468616e206d696e2e",
                                                "id": 38402,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1676:64:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_16c21f4eccdbbd49e5dc1331f271d929c25cafaf25207892b67e15553a16c5f2",
                                                    "typeString": "literal_string \"StdUtils bound(uint256,uint256,uint256): Max is less than min.\""
                                                },
                                                "value": "StdUtils bound(uint256,uint256,uint256): Max is less than min."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_16c21f4eccdbbd49e5dc1331f271d929c25cafaf25207892b67e15553a16c5f2",
                                                    "typeString": "literal_string \"StdUtils bound(uint256,uint256,uint256): Max is less than min.\""
                                                }
                                            ],
                                            "id": 38398,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1656:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 38403,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1656:85:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 38404,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1656:85:154"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 38411,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38407,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38405,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "1970:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">=",
                                            "rightExpression": {
                                                "id": 38406,
                                                "name": "min",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38391,
                                                "src": "1975:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1970:8:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38410,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38408,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "1982:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<=",
                                            "rightExpression": {
                                                "id": 38409,
                                                "name": "max",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38393,
                                                "src": "1987:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "1982:8:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1970:20:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38414,
                                    "nodeType": "IfStatement",
                                    "src": "1966:34:154",
                                    "trueBody": {
                                        "expression": {
                                            "id": 38412,
                                            "name": "x",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38389,
                                            "src": "1999:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 38397,
                                        "id": 38413,
                                        "nodeType": "Return",
                                        "src": "1992:8:154"
                                    }
                                },
                                {
                                    "assignments": [
                                        38416
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 38416,
                                            "mutability": "mutable",
                                            "name": "size",
                                            "nameLocation": "2019:4:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 38516,
                                            "src": "2011:12:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 38415,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "2011:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 38422,
                                    "initialValue": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38421,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38419,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38417,
                                                "name": "max",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38393,
                                                "src": "2026:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "id": 38418,
                                                "name": "min",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38391,
                                                "src": "2032:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2026:9:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "+",
                                        "rightExpression": {
                                            "hexValue": "31",
                                            "id": 38420,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2038:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_1_by_1",
                                                "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                        },
                                        "src": "2026:13:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "2011:28:154"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 38429,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38425,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38423,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "2229:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<=",
                                            "rightExpression": {
                                                "hexValue": "33",
                                                "id": 38424,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2234:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_3_by_1",
                                                    "typeString": "int_const 3"
                                                },
                                                "value": "3"
                                            },
                                            "src": "2229:6:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38428,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38426,
                                                "name": "size",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38416,
                                                "src": "2239:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "id": 38427,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "2246:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2239:8:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "2229:18:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38434,
                                    "nodeType": "IfStatement",
                                    "src": "2225:38:154",
                                    "trueBody": {
                                        "expression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38432,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38430,
                                                "name": "min",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38391,
                                                "src": "2256:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "id": 38431,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "2262:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2256:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 38397,
                                        "id": 38433,
                                        "nodeType": "Return",
                                        "src": "2249:14:154"
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 38445,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38439,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38435,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "2277:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">=",
                                            "rightExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 38438,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 38436,
                                                    "name": "UINT256_MAX",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38384,
                                                    "src": "2282:11:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "hexValue": "33",
                                                    "id": 38437,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "2296:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_3_by_1",
                                                        "typeString": "int_const 3"
                                                    },
                                                    "value": "3"
                                                },
                                                "src": "2282:15:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2277:20:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "&&",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38444,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38440,
                                                "name": "size",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38416,
                                                "src": "2301:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": ">",
                                            "rightExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 38443,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 38441,
                                                    "name": "UINT256_MAX",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38384,
                                                    "src": "2308:11:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 38442,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38389,
                                                    "src": "2322:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2308:15:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2301:22:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "2277:46:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38453,
                                    "nodeType": "IfStatement",
                                    "src": "2273:82:154",
                                    "trueBody": {
                                        "expression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38451,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38446,
                                                "name": "max",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38393,
                                                "src": "2332:3:154",
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
                                                        "id": 38449,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38447,
                                                            "name": "UINT256_MAX",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38384,
                                                            "src": "2339:11:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 38448,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38389,
                                                            "src": "2353:1:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2339:15:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "id": 38450,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "2338:17:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2332:23:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 38397,
                                        "id": 38452,
                                        "nodeType": "Return",
                                        "src": "2325:30:154"
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 38454,
                                            "name": "x",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38389,
                                            "src": "2455:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": ">",
                                        "rightExpression": {
                                            "id": 38455,
                                            "name": "max",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38393,
                                            "src": "2459:3:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2455:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "falseBody": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 38486,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38484,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38389,
                                                "src": "2634:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "id": 38485,
                                                "name": "min",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38391,
                                                "src": "2638:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2634:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "id": 38514,
                                        "nodeType": "IfStatement",
                                        "src": "2630:173:154",
                                        "trueBody": {
                                            "id": 38513,
                                            "nodeType": "Block",
                                            "src": "2643:160:154",
                                            "statements": [
                                                {
                                                    "assignments": [
                                                        38488
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 38488,
                                                            "mutability": "mutable",
                                                            "name": "diff",
                                                            "nameLocation": "2665:4:154",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 38513,
                                                            "src": "2657:12:154",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "typeName": {
                                                                "id": 38487,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2657:7:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 38492,
                                                    "initialValue": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38491,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38489,
                                                            "name": "min",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38391,
                                                            "src": "2672:3:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 38490,
                                                            "name": "x",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38389,
                                                            "src": "2678:1:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2672:7:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2657:22:154"
                                                },
                                                {
                                                    "assignments": [
                                                        38494
                                                    ],
                                                    "declarations": [
                                                        {
                                                            "constant": false,
                                                            "id": 38494,
                                                            "mutability": "mutable",
                                                            "name": "rem",
                                                            "nameLocation": "2701:3:154",
                                                            "nodeType": "VariableDeclaration",
                                                            "scope": 38513,
                                                            "src": "2693:11:154",
                                                            "stateVariable": false,
                                                            "storageLocation": "default",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "typeName": {
                                                                "id": 38493,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "2693:7:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "visibility": "internal"
                                                        }
                                                    ],
                                                    "id": 38498,
                                                    "initialValue": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38497,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38495,
                                                            "name": "diff",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38488,
                                                            "src": "2707:4:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "%",
                                                        "rightExpression": {
                                                            "id": 38496,
                                                            "name": "size",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38416,
                                                            "src": "2714:4:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2707:11:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "VariableDeclarationStatement",
                                                    "src": "2693:25:154"
                                                },
                                                {
                                                    "condition": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38501,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38499,
                                                            "name": "rem",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38494,
                                                            "src": "2736:3:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "==",
                                                        "rightExpression": {
                                                            "hexValue": "30",
                                                            "id": 38500,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2743:1:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_0_by_1",
                                                                "typeString": "int_const 0"
                                                            },
                                                            "value": "0"
                                                        },
                                                        "src": "2736:8:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "id": 38504,
                                                    "nodeType": "IfStatement",
                                                    "src": "2732:24:154",
                                                    "trueBody": {
                                                        "expression": {
                                                            "id": 38502,
                                                            "name": "min",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38391,
                                                            "src": "2753:3:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "functionReturnParameters": 38397,
                                                        "id": 38503,
                                                        "nodeType": "Return",
                                                        "src": "2746:10:154"
                                                    }
                                                },
                                                {
                                                    "expression": {
                                                        "id": 38511,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftHandSide": {
                                                            "id": 38505,
                                                            "name": "result",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38396,
                                                            "src": "2770:6:154",
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
                                                            "id": 38510,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 38508,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "id": 38506,
                                                                    "name": "max",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38393,
                                                                    "src": "2779:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "-",
                                                                "rightExpression": {
                                                                    "id": 38507,
                                                                    "name": "rem",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38494,
                                                                    "src": "2785:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "2779:9:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "hexValue": "31",
                                                                "id": 38509,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "number",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "2791:1:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_rational_1_by_1",
                                                                    "typeString": "int_const 1"
                                                                },
                                                                "value": "1"
                                                            },
                                                            "src": "2779:13:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "2770:22:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 38512,
                                                    "nodeType": "ExpressionStatement",
                                                    "src": "2770:22:154"
                                                }
                                            ]
                                        }
                                    },
                                    "id": 38515,
                                    "nodeType": "IfStatement",
                                    "src": "2451:352:154",
                                    "trueBody": {
                                        "id": 38483,
                                        "nodeType": "Block",
                                        "src": "2464:160:154",
                                        "statements": [
                                            {
                                                "assignments": [
                                                    38458
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 38458,
                                                        "mutability": "mutable",
                                                        "name": "diff",
                                                        "nameLocation": "2486:4:154",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 38483,
                                                        "src": "2478:12:154",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 38457,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2478:7:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 38462,
                                                "initialValue": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38461,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 38459,
                                                        "name": "x",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38389,
                                                        "src": "2493:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "id": 38460,
                                                        "name": "max",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38393,
                                                        "src": "2497:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2493:7:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2478:22:154"
                                            },
                                            {
                                                "assignments": [
                                                    38464
                                                ],
                                                "declarations": [
                                                    {
                                                        "constant": false,
                                                        "id": 38464,
                                                        "mutability": "mutable",
                                                        "name": "rem",
                                                        "nameLocation": "2522:3:154",
                                                        "nodeType": "VariableDeclaration",
                                                        "scope": 38483,
                                                        "src": "2514:11:154",
                                                        "stateVariable": false,
                                                        "storageLocation": "default",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "typeName": {
                                                            "id": 38463,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "2514:7:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "visibility": "internal"
                                                    }
                                                ],
                                                "id": 38468,
                                                "initialValue": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38467,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 38465,
                                                        "name": "diff",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38458,
                                                        "src": "2528:4:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "%",
                                                    "rightExpression": {
                                                        "id": 38466,
                                                        "name": "size",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38416,
                                                        "src": "2535:4:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2528:11:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "VariableDeclarationStatement",
                                                "src": "2514:25:154"
                                            },
                                            {
                                                "condition": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38471,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 38469,
                                                        "name": "rem",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38464,
                                                        "src": "2557:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 38470,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "2564:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "2557:8:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "id": 38474,
                                                "nodeType": "IfStatement",
                                                "src": "2553:24:154",
                                                "trueBody": {
                                                    "expression": {
                                                        "id": 38472,
                                                        "name": "max",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38393,
                                                        "src": "2574:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "functionReturnParameters": 38397,
                                                    "id": 38473,
                                                    "nodeType": "Return",
                                                    "src": "2567:10:154"
                                                }
                                            },
                                            {
                                                "expression": {
                                                    "id": 38481,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "id": 38475,
                                                        "name": "result",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38396,
                                                        "src": "2591:6:154",
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
                                                        "id": 38480,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            },
                                                            "id": 38478,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 38476,
                                                                "name": "min",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38391,
                                                                "src": "2600:3:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "+",
                                                            "rightExpression": {
                                                                "id": 38477,
                                                                "name": "rem",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38464,
                                                                "src": "2606:3:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            },
                                                            "src": "2600:9:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "hexValue": "31",
                                                            "id": 38479,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "2612:1:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "2600:13:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "2591:22:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 38482,
                                                "nodeType": "ExpressionStatement",
                                                "src": "2591:22:154"
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_bound",
                        "nameLocation": "1555:6:154",
                        "parameters": {
                            "id": 38394,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38389,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "1570:1:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38517,
                                    "src": "1562:9:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38388,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1562:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38391,
                                    "mutability": "mutable",
                                    "name": "min",
                                    "nameLocation": "1581:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38517,
                                    "src": "1573:11:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38390,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1573:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38393,
                                    "mutability": "mutable",
                                    "name": "max",
                                    "nameLocation": "1594:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38517,
                                    "src": "1586:11:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38392,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1586:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1561:37:154"
                        },
                        "returnParameters": {
                            "id": 38397,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38396,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "1638:6:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38517,
                                    "src": "1630:14:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38395,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1630:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1629:16:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38542,
                        "nodeType": "FunctionDefinition",
                        "src": "2815:190:154",
                        "nodes": [],
                        "body": {
                            "id": 38541,
                            "nodeType": "Block",
                            "src": "2914:91:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 38534,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 38528,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38526,
                                            "src": "2924:6:154",
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
                                                    "id": 38530,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38519,
                                                    "src": "2940:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 38531,
                                                    "name": "min",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38521,
                                                    "src": "2943:3:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "id": 38532,
                                                    "name": "max",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38523,
                                                    "src": "2948:3:154",
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
                                                    }
                                                ],
                                                "id": 38529,
                                                "name": "_bound",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    38517,
                                                    38664
                                                ],
                                                "referencedDeclaration": 38517,
                                                "src": "2933:6:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 38533,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2933:19:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2924:28:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 38535,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2924:28:154"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "426f756e6420526573756c74",
                                                "id": 38537,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "2975:14:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52",
                                                    "typeString": "literal_string \"Bound Result\""
                                                },
                                                "value": "Bound Result"
                                            },
                                            {
                                                "id": 38538,
                                                "name": "result",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38526,
                                                "src": "2991:6:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_stringliteral_237b64d156191d73cf174e4433495e27feb7a7083e87d06235be591548fb5c52",
                                                    "typeString": "literal_string \"Bound Result\""
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 38536,
                                            "name": "console2_log",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                39164,
                                                39189
                                            ],
                                            "referencedDeclaration": 39164,
                                            "src": "2962:12:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                                                "typeString": "function (string memory,uint256) view"
                                            }
                                        },
                                        "id": 38539,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2962:36:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 38540,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2962:36:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bound",
                        "nameLocation": "2824:5:154",
                        "parameters": {
                            "id": 38524,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38519,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "2838:1:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38542,
                                    "src": "2830:9:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38518,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2830:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38521,
                                    "mutability": "mutable",
                                    "name": "min",
                                    "nameLocation": "2849:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38542,
                                    "src": "2841:11:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38520,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2841:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38523,
                                    "mutability": "mutable",
                                    "name": "max",
                                    "nameLocation": "2862:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38542,
                                    "src": "2854:11:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38522,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2854:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2829:37:154"
                        },
                        "returnParameters": {
                            "id": 38527,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38526,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "2906:6:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38542,
                                    "src": "2898:14:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38525,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2898:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2897:16:154"
                        },
                        "scope": 39190,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38664,
                        "nodeType": "FunctionDefinition",
                        "src": "3011:1145:154",
                        "nodes": [],
                        "body": {
                            "id": 38663,
                            "nodeType": "Block",
                            "src": "3107:1049:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                },
                                                "id": 38556,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 38554,
                                                    "name": "min",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38546,
                                                    "src": "3125:3:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "id": 38555,
                                                    "name": "max",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38548,
                                                    "src": "3132:3:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                "src": "3125:10:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5374645574696c7320626f756e6428696e743235362c696e743235362c696e74323536293a204d6178206973206c657373207468616e206d696e2e",
                                                "id": 38557,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3137:61:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_0fd736be0f0596d130ab62399a2ecc4855db1de6a3b01be590df45aa0de73247",
                                                    "typeString": "literal_string \"StdUtils bound(int256,int256,int256): Max is less than min.\""
                                                },
                                                "value": "StdUtils bound(int256,int256,int256): Max is less than min."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_0fd736be0f0596d130ab62399a2ecc4855db1de6a3b01be590df45aa0de73247",
                                                    "typeString": "literal_string \"StdUtils bound(int256,int256,int256): Max is less than min.\""
                                                }
                                            ],
                                            "id": 38553,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "3117:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 38558,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3117:82:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 38559,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3117:82:154"
                                },
                                {
                                    "assignments": [
                                        38561
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 38561,
                                            "mutability": "mutable",
                                            "name": "_x",
                                            "nameLocation": "3635:2:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 38663,
                                            "src": "3627:10:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 38560,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3627:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 38583,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 38564,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38562,
                                                "name": "x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38544,
                                                "src": "3640:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 38563,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3644:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3640:5:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38580,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "id": 38577,
                                                                "name": "x",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38544,
                                                                "src": "3694:1:154",
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
                                                            "id": 38576,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3686:7:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 38575,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3686:7:154",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 38578,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3686:10:154",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 38579,
                                                        "name": "INT256_MIN_ABS",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38378,
                                                        "src": "3699:14:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3686:27:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 38581,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3685:29:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 38582,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "3640:74:154",
                                        "trueExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38573,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38571,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38565,
                                                            "name": "INT256_MIN_ABS",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38378,
                                                            "src": "3649:14:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 38570,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "~",
                                                            "prefix": true,
                                                            "src": "3666:11:154",
                                                            "subExpression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 38568,
                                                                        "name": "x",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 38544,
                                                                        "src": "3675:1:154",
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
                                                                    "id": 38567,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "3667:7:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38566,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "3667:7:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38569,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3667:10:154",
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
                                                        "src": "3649:28:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "31",
                                                        "id": 38572,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3680:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    "src": "3649:32:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 38574,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3648:34:154",
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
                                    "src": "3627:87:154"
                                },
                                {
                                    "assignments": [
                                        38585
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 38585,
                                            "mutability": "mutable",
                                            "name": "_min",
                                            "nameLocation": "3732:4:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 38663,
                                            "src": "3724:12:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 38584,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3724:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 38607,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 38588,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38586,
                                                "name": "min",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38546,
                                                "src": "3739:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 38587,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3745:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3739:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38604,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "id": 38601,
                                                                "name": "min",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38546,
                                                                "src": "3797:3:154",
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
                                                            "id": 38600,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3789:7:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 38599,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3789:7:154",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 38602,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3789:12:154",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 38603,
                                                        "name": "INT256_MIN_ABS",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38378,
                                                        "src": "3804:14:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3789:29:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 38605,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3788:31:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 38606,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "3739:80:154",
                                        "trueExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38597,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38595,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38589,
                                                            "name": "INT256_MIN_ABS",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38378,
                                                            "src": "3750:14:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 38594,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "~",
                                                            "prefix": true,
                                                            "src": "3767:13:154",
                                                            "subExpression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 38592,
                                                                        "name": "min",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 38546,
                                                                        "src": "3776:3:154",
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
                                                                    "id": 38591,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "3768:7:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38590,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "3768:7:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38593,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3768:12:154",
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
                                                        "src": "3750:30:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "31",
                                                        "id": 38596,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3783:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    "src": "3750:34:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 38598,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3749:36:154",
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
                                    "src": "3724:95:154"
                                },
                                {
                                    "assignments": [
                                        38609
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 38609,
                                            "mutability": "mutable",
                                            "name": "_max",
                                            "nameLocation": "3837:4:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 38663,
                                            "src": "3829:12:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 38608,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3829:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 38631,
                                    "initialValue": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            },
                                            "id": 38612,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 38610,
                                                "name": "max",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38548,
                                                "src": "3844:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "<",
                                            "rightExpression": {
                                                "hexValue": "30",
                                                "id": 38611,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "3850:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_0_by_1",
                                                    "typeString": "int_const 0"
                                                },
                                                "value": "0"
                                            },
                                            "src": "3844:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38628,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "id": 38625,
                                                                "name": "max",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38548,
                                                                "src": "3902:3:154",
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
                                                            "id": 38624,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "3894:7:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 38623,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "3894:7:154",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 38626,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "3894:12:154",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "+",
                                                    "rightExpression": {
                                                        "id": 38627,
                                                        "name": "INT256_MIN_ABS",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38378,
                                                        "src": "3909:14:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "3894:29:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 38629,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3893:31:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 38630,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "3844:80:154",
                                        "trueExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38621,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38619,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38613,
                                                            "name": "INT256_MIN_ABS",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38378,
                                                            "src": "3855:14:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 38618,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "~",
                                                            "prefix": true,
                                                            "src": "3872:13:154",
                                                            "subExpression": {
                                                                "arguments": [
                                                                    {
                                                                        "id": 38616,
                                                                        "name": "max",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 38548,
                                                                        "src": "3881:3:154",
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
                                                                    "id": 38615,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "3873:7:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint256_$",
                                                                        "typeString": "type(uint256)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38614,
                                                                        "name": "uint256",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "3873:7:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38617,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "3873:12:154",
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
                                                        "src": "3855:30:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "31",
                                                        "id": 38620,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "3888:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    "src": "3855:34:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                }
                                            ],
                                            "id": 38622,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "3854:36:154",
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
                                    "src": "3829:95:154"
                                },
                                {
                                    "assignments": [
                                        38633
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 38633,
                                            "mutability": "mutable",
                                            "name": "y",
                                            "nameLocation": "3943:1:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 38663,
                                            "src": "3935:9:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 38632,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3935:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 38639,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 38635,
                                                "name": "_x",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38561,
                                                "src": "3954:2:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 38636,
                                                "name": "_min",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38585,
                                                "src": "3958:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            {
                                                "id": 38637,
                                                "name": "_max",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38609,
                                                "src": "3964:4:154",
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
                                                }
                                            ],
                                            "id": 38634,
                                            "name": "_bound",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38517,
                                                38664
                                            ],
                                            "referencedDeclaration": 38517,
                                            "src": "3947:6:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                            }
                                        },
                                        "id": 38638,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3947:22:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3935:34:154"
                                },
                                {
                                    "expression": {
                                        "id": 38661,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 38640,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38551,
                                            "src": "4057:6:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
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
                                                "id": 38643,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 38641,
                                                    "name": "y",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38633,
                                                    "src": "4066:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<",
                                                "rightExpression": {
                                                    "id": 38642,
                                                    "name": "INT256_MIN_ABS",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38378,
                                                    "src": "4070:14:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "4066:18:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "falseExpression": {
                                                "arguments": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38658,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38656,
                                                            "name": "y",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38633,
                                                            "src": "4130:1:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "-",
                                                        "rightExpression": {
                                                            "id": 38657,
                                                            "name": "INT256_MIN_ABS",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 38378,
                                                            "src": "4134:14:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "src": "4130:18:154",
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
                                                    "id": 38655,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4123:6:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_int256_$",
                                                        "typeString": "type(int256)"
                                                    },
                                                    "typeName": {
                                                        "id": 38654,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4123:6:154",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 38659,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4123:26:154",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "id": 38660,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "Conditional",
                                            "src": "4066:83:154",
                                            "trueExpression": {
                                                "arguments": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        "id": 38652,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "id": 38650,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "UnaryOperation",
                                                            "operator": "~",
                                                            "prefix": true,
                                                            "src": "4094:21:154",
                                                            "subExpression": {
                                                                "components": [
                                                                    {
                                                                        "commonType": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        },
                                                                        "id": 38648,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "leftExpression": {
                                                                            "id": 38646,
                                                                            "name": "INT256_MIN_ABS",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 38378,
                                                                            "src": "4096:14:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "nodeType": "BinaryOperation",
                                                                        "operator": "-",
                                                                        "rightExpression": {
                                                                            "id": 38647,
                                                                            "name": "y",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 38633,
                                                                            "src": "4113:1:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_uint256",
                                                                                "typeString": "uint256"
                                                                            }
                                                                        },
                                                                        "src": "4096:18:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 38649,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "4095:20:154",
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
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "+",
                                                        "rightExpression": {
                                                            "hexValue": "31",
                                                            "id": 38651,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "number",
                                                            "lValueRequested": false,
                                                            "nodeType": "Literal",
                                                            "src": "4118:1:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_rational_1_by_1",
                                                                "typeString": "int_const 1"
                                                            },
                                                            "value": "1"
                                                        },
                                                        "src": "4094:25:154",
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
                                                    "id": 38645,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "4087:6:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_int256_$",
                                                        "typeString": "type(int256)"
                                                    },
                                                    "typeName": {
                                                        "id": 38644,
                                                        "name": "int256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4087:6:154",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 38653,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4087:33:154",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_int256",
                                                    "typeString": "int256"
                                                }
                                            },
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "4057:92:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 38662,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4057:92:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_bound",
                        "nameLocation": "3020:6:154",
                        "parameters": {
                            "id": 38549,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38544,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "3034:1:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38664,
                                    "src": "3027:8:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38543,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3027:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38546,
                                    "mutability": "mutable",
                                    "name": "min",
                                    "nameLocation": "3044:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38664,
                                    "src": "3037:10:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38545,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3037:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38548,
                                    "mutability": "mutable",
                                    "name": "max",
                                    "nameLocation": "3056:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38664,
                                    "src": "3049:10:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38547,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3049:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3026:34:154"
                        },
                        "returnParameters": {
                            "id": 38552,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38551,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "3099:6:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38664,
                                    "src": "3092:13:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38550,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3092:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3091:15:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38692,
                        "nodeType": "FunctionDefinition",
                        "src": "4162:199:154",
                        "nodes": [],
                        "body": {
                            "id": 38691,
                            "nodeType": "Block",
                            "src": "4257:104:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 38681,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 38675,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38673,
                                            "src": "4267:6:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 38677,
                                                    "name": "x",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38666,
                                                    "src": "4283:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "id": 38678,
                                                    "name": "min",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38668,
                                                    "src": "4286:3:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                },
                                                {
                                                    "id": 38679,
                                                    "name": "max",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38670,
                                                    "src": "4291:3:154",
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
                                                    },
                                                    {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_int256",
                                                        "typeString": "int256"
                                                    }
                                                ],
                                                "id": 38676,
                                                "name": "_bound",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    38517,
                                                    38664
                                                ],
                                                "referencedDeclaration": 38664,
                                                "src": "4276:6:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$_t_int256_$returns$_t_int256_$",
                                                    "typeString": "function (int256,int256,int256) pure returns (int256)"
                                                }
                                            },
                                            "id": 38680,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4276:19:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_int256",
                                                "typeString": "int256"
                                            }
                                        },
                                        "src": "4267:28:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "id": 38682,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4267:28:154"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "hexValue": "426f756e6420726573756c74",
                                                "id": 38684,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4318:14:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f",
                                                    "typeString": "literal_string \"Bound result\""
                                                },
                                                "value": "Bound result"
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 38687,
                                                        "name": "result",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38673,
                                                        "src": "4346:6:154",
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
                                                    "expression": {
                                                        "id": 38685,
                                                        "name": "vm",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38372,
                                                        "src": "4334:2:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_contract$_VmSafe_$40306",
                                                            "typeString": "contract VmSafe"
                                                        }
                                                    },
                                                    "id": 38686,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4337:8:154",
                                                    "memberName": "toString",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 39845,
                                                    "src": "4334:11:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_external_pure$_t_int256_$returns$_t_string_memory_ptr_$",
                                                        "typeString": "function (int256) pure external returns (string memory)"
                                                    }
                                                },
                                                "id": 38688,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4334:19:154",
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
                                                    "typeIdentifier": "t_stringliteral_81387530263afdcc351da6c89e6a10d49583b5beb1fecaddd0371443f1cd026f",
                                                    "typeString": "literal_string \"Bound result\""
                                                },
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "id": 38683,
                                            "name": "console2_log",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                39164,
                                                39189
                                            ],
                                            "referencedDeclaration": 39189,
                                            "src": "4305:12:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (string memory,string memory) view"
                                            }
                                        },
                                        "id": 38689,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4305:49:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 38690,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4305:49:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bound",
                        "nameLocation": "4171:5:154",
                        "parameters": {
                            "id": 38671,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38666,
                                    "mutability": "mutable",
                                    "name": "x",
                                    "nameLocation": "4184:1:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38692,
                                    "src": "4177:8:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38665,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4177:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38668,
                                    "mutability": "mutable",
                                    "name": "min",
                                    "nameLocation": "4194:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38692,
                                    "src": "4187:10:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38667,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4187:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38670,
                                    "mutability": "mutable",
                                    "name": "max",
                                    "nameLocation": "4206:3:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38692,
                                    "src": "4199:10:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38669,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4199:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4176:34:154"
                        },
                        "returnParameters": {
                            "id": 38674,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38673,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "4249:6:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38692,
                                    "src": "4242:13:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 38672,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4242:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4241:15:154"
                        },
                        "scope": 39190,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38710,
                        "nodeType": "FunctionDefinition",
                        "src": "4367:160:154",
                        "nodes": [],
                        "body": {
                            "id": 38709,
                            "nodeType": "Block",
                            "src": "4459:68:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 38707,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 38699,
                                            "name": "result",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38697,
                                            "src": "4469:6:154",
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
                                                    "id": 38701,
                                                    "name": "privateKey",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 38694,
                                                    "src": "4485:10:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                {
                                                    "hexValue": "31",
                                                    "id": 38702,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4497:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    "value": "1"
                                                },
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 38705,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "id": 38703,
                                                        "name": "SECP256K1_ORDER",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38381,
                                                        "src": "4500:15:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "-",
                                                    "rightExpression": {
                                                        "hexValue": "31",
                                                        "id": 38704,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "4518:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_1_by_1",
                                                            "typeString": "int_const 1"
                                                        },
                                                        "value": "1"
                                                    },
                                                    "src": "4500:19:154",
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
                                                        "typeIdentifier": "t_rational_1_by_1",
                                                        "typeString": "int_const 1"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                ],
                                                "id": 38700,
                                                "name": "_bound",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    38517,
                                                    38664
                                                ],
                                                "referencedDeclaration": 38517,
                                                "src": "4478:6:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                                    "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                                }
                                            },
                                            "id": 38706,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "4478:42:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "4469:51:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 38708,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4469:51:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "boundPrivateKey",
                        "nameLocation": "4376:15:154",
                        "parameters": {
                            "id": 38695,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38694,
                                    "mutability": "mutable",
                                    "name": "privateKey",
                                    "nameLocation": "4400:10:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38710,
                                    "src": "4392:18:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38693,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4392:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4391:20:154"
                        },
                        "returnParameters": {
                            "id": 38698,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38697,
                                    "mutability": "mutable",
                                    "name": "result",
                                    "nameLocation": "4451:6:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38710,
                                    "src": "4443:14:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38696,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4443:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4442:16:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38744,
                        "nodeType": "FunctionDefinition",
                        "src": "4533:259:154",
                        "nodes": [],
                        "body": {
                            "id": 38743,
                            "nodeType": "Block",
                            "src": "4610:182:154",
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
                                                "id": 38721,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "expression": {
                                                        "id": 38718,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38712,
                                                        "src": "4628:1:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    "id": 38719,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4630:6:154",
                                                    "memberName": "length",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4628:8:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "<=",
                                                "rightExpression": {
                                                    "hexValue": "3332",
                                                    "id": 38720,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "4640:2:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_32_by_1",
                                                        "typeString": "int_const 32"
                                                    },
                                                    "value": "32"
                                                },
                                                "src": "4628:14:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5374645574696c73206279746573546f55696e74286279746573293a204279746573206c656e67746820657863656564732033322e",
                                                "id": 38722,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4644:55:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_15bc16f8ce72c26d4fbf91f28e31f7cbe900e6386b04cf90f353bff0f5b2da88",
                                                    "typeString": "literal_string \"StdUtils bytesToUint(bytes): Bytes length exceeds 32.\""
                                                },
                                                "value": "StdUtils bytesToUint(bytes): Bytes length exceeds 32."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_15bc16f8ce72c26d4fbf91f28e31f7cbe900e6386b04cf90f353bff0f5b2da88",
                                                    "typeString": "literal_string \"StdUtils bytesToUint(bytes): Bytes length exceeds 32.\""
                                                }
                                            ],
                                            "id": 38717,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4620:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 38723,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4620:80:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 38724,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4620:80:154"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "commonType": {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                },
                                                                "id": 38734,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "leftExpression": {
                                                                    "hexValue": "3332",
                                                                    "id": 38731,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "4755:2:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_32_by_1",
                                                                        "typeString": "int_const 32"
                                                                    },
                                                                    "value": "32"
                                                                },
                                                                "nodeType": "BinaryOperation",
                                                                "operator": "-",
                                                                "rightExpression": {
                                                                    "expression": {
                                                                        "id": 38732,
                                                                        "name": "b",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 38712,
                                                                        "src": "4760:1:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                                            "typeString": "bytes memory"
                                                                        }
                                                                    },
                                                                    "id": 38733,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4762:6:154",
                                                                    "memberName": "length",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "4760:8:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint256",
                                                                        "typeString": "uint256"
                                                                    }
                                                                },
                                                                "src": "4755:13:154",
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
                                                            "id": 38730,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "NewExpression",
                                                            "src": "4745:9:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function (uint256) pure returns (bytes memory)"
                                                            },
                                                            "typeName": {
                                                                "id": 38729,
                                                                "name": "bytes",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "4749:5:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                                    "typeString": "bytes"
                                                                }
                                                            }
                                                        },
                                                        "id": 38735,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4745:24:154",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 38736,
                                                        "name": "b",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38712,
                                                        "src": "4771:1:154",
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
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38727,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "4728:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 38728,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4732:12:154",
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4728:16:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 38737,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4728:45:154",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "components": [
                                                    {
                                                        "id": 38739,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "4776:7:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 38738,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "4776:7:154",
                                                            "typeDescriptions": {}
                                                        }
                                                    }
                                                ],
                                                "id": 38740,
                                                "isConstant": false,
                                                "isInlineArray": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "TupleExpression",
                                                "src": "4775:9:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                    "typeString": "type(uint256)"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                    "typeString": "type(uint256)"
                                                }
                                            ],
                                            "expression": {
                                                "id": 38725,
                                                "name": "abi",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -1,
                                                "src": "4717:3:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_abi",
                                                    "typeString": "abi"
                                                }
                                            },
                                            "id": 38726,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "4721:6:154",
                                            "memberName": "decode",
                                            "nodeType": "MemberAccess",
                                            "src": "4717:10:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                "typeString": "function () pure"
                                            }
                                        },
                                        "id": 38741,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4717:68:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 38716,
                                    "id": 38742,
                                    "nodeType": "Return",
                                    "src": "4710:75:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "bytesToUint",
                        "nameLocation": "4542:11:154",
                        "parameters": {
                            "id": 38713,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38712,
                                    "mutability": "mutable",
                                    "name": "b",
                                    "nameLocation": "4567:1:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38744,
                                    "src": "4554:14:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38711,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4554:5:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4553:16:154"
                        },
                        "returnParameters": {
                            "id": 38716,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38715,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38744,
                                    "src": "4601:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38714,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "4601:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "4600:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38929,
                        "nodeType": "FunctionDefinition",
                        "src": "5026:1962:154",
                        "nodes": [],
                        "body": {
                            "id": 38928,
                            "nodeType": "Block",
                            "src": "5129:1859:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38756,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 38754,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38749,
                                            "src": "5455:5:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "==",
                                        "rightExpression": {
                                            "hexValue": "30783030",
                                            "id": 38755,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5464:4:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0x00"
                                        },
                                        "src": "5455:13:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38778,
                                    "nodeType": "IfStatement",
                                    "src": "5451:134:154",
                                    "trueBody": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30786436",
                                                                            "id": 38763,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5539:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_214_by_1",
                                                                                "typeString": "int_const 214"
                                                                            },
                                                                            "value": "0xd6"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_214_by_1",
                                                                                "typeString": "int_const 214"
                                                                            }
                                                                        ],
                                                                        "id": 38762,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5532:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38761,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5532:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38764,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5532:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783934",
                                                                            "id": 38767,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5553:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            },
                                                                            "value": "0x94"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            }
                                                                        ],
                                                                        "id": 38766,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5546:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38765,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5546:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38768,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5546:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 38769,
                                                                    "name": "deployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38747,
                                                                    "src": "5560:8:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783830",
                                                                            "id": 38772,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5577:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_128_by_1",
                                                                                "typeString": "int_const 128"
                                                                            },
                                                                            "value": "0x80"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_128_by_1",
                                                                                "typeString": "int_const 128"
                                                                            }
                                                                        ],
                                                                        "id": 38771,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5570:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38770,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5570:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38773,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5570:12:154",
                                                                    "tryCall": false,
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
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 38759,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "5515:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 38760,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5519:12:154",
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5515:16:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 38774,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5515:68:154",
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
                                                        "id": 38758,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "5505:9:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 38775,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5505:79:154",
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
                                                "id": 38757,
                                                "name": "addressFromLast20Bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39139,
                                                "src": "5482:22:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) pure returns (address)"
                                                }
                                            },
                                            "id": 38776,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5482:103:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "functionReturnParameters": 38753,
                                        "id": 38777,
                                        "nodeType": "Return",
                                        "src": "5475:110:154"
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38781,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 38779,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38749,
                                            "src": "5599:5:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "hexValue": "30783766",
                                            "id": 38780,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "5608:4:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_127_by_1",
                                                "typeString": "int_const 127"
                                            },
                                            "value": "0x7f"
                                        },
                                        "src": "5599:13:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38803,
                                    "nodeType": "IfStatement",
                                    "src": "5595:134:154",
                                    "trueBody": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30786436",
                                                                            "id": 38788,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5683:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_214_by_1",
                                                                                "typeString": "int_const 214"
                                                                            },
                                                                            "value": "0xd6"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_214_by_1",
                                                                                "typeString": "int_const 214"
                                                                            }
                                                                        ],
                                                                        "id": 38787,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5676:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38786,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5676:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38789,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5676:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783934",
                                                                            "id": 38792,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5697:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            },
                                                                            "value": "0x94"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            }
                                                                        ],
                                                                        "id": 38791,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5690:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38790,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5690:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38793,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5690:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 38794,
                                                                    "name": "deployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38747,
                                                                    "src": "5704:8:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 38797,
                                                                            "name": "nonce",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 38749,
                                                                            "src": "5720:5:154",
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
                                                                        "id": 38796,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5714:5:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                                            "typeString": "type(uint8)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38795,
                                                                            "name": "uint8",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5714:5:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38798,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5714:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint8",
                                                                        "typeString": "uint8"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_uint8",
                                                                        "typeString": "uint8"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 38784,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "5659:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 38785,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5663:12:154",
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5659:16:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 38799,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5659:68:154",
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
                                                        "id": 38783,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "5649:9:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 38800,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5649:79:154",
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
                                                "id": 38782,
                                                "name": "addressFromLast20Bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39139,
                                                "src": "5626:22:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) pure returns (address)"
                                                }
                                            },
                                            "id": 38801,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5626:103:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "functionReturnParameters": 38753,
                                        "id": 38802,
                                        "nodeType": "Return",
                                        "src": "5619:110:154"
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38810,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 38804,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38749,
                                            "src": "5882:5:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_rational_255_by_1",
                                                "typeString": "int_const 255"
                                            },
                                            "id": 38809,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_rational_256_by_1",
                                                    "typeString": "int_const 256"
                                                },
                                                "id": 38807,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "hexValue": "32",
                                                    "id": 38805,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5891:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_2_by_1",
                                                        "typeString": "int_const 2"
                                                    },
                                                    "value": "2"
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "**",
                                                "rightExpression": {
                                                    "hexValue": "38",
                                                    "id": 38806,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "5894:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_8_by_1",
                                                        "typeString": "int_const 8"
                                                    },
                                                    "value": "8"
                                                },
                                                "src": "5891:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_256_by_1",
                                                    "typeString": "int_const 256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "hexValue": "31",
                                                "id": 38808,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "5898:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "5891:8:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_255_by_1",
                                                "typeString": "int_const 255"
                                            }
                                        },
                                        "src": "5882:17:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38836,
                                    "nodeType": "IfStatement",
                                    "src": "5878:148:154",
                                    "trueBody": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30786437",
                                                                            "id": 38817,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5966:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_215_by_1",
                                                                                "typeString": "int_const 215"
                                                                            },
                                                                            "value": "0xd7"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_215_by_1",
                                                                                "typeString": "int_const 215"
                                                                            }
                                                                        ],
                                                                        "id": 38816,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5959:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38815,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5959:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38818,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5959:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783934",
                                                                            "id": 38821,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "5980:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            },
                                                                            "value": "0x94"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            }
                                                                        ],
                                                                        "id": 38820,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5973:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38819,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5973:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38822,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5973:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 38823,
                                                                    "name": "deployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38747,
                                                                    "src": "5987:8:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783831",
                                                                            "id": 38826,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6004:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_129_by_1",
                                                                                "typeString": "int_const 129"
                                                                            },
                                                                            "value": "0x81"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_129_by_1",
                                                                                "typeString": "int_const 129"
                                                                            }
                                                                        ],
                                                                        "id": 38825,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "5997:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38824,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "5997:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38827,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "5997:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 38830,
                                                                            "name": "nonce",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 38749,
                                                                            "src": "6017:5:154",
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
                                                                        "id": 38829,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6011:5:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_uint8_$",
                                                                            "typeString": "type(uint8)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38828,
                                                                            "name": "uint8",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6011:5:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38831,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6011:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint8",
                                                                        "typeString": "uint8"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_uint8",
                                                                        "typeString": "uint8"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 38813,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "5942:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 38814,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "5946:12:154",
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "5942:16:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 38832,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "5942:82:154",
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
                                                        "id": 38812,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "5932:9:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 38833,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "5932:93:154",
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
                                                "id": 38811,
                                                "name": "addressFromLast20Bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39139,
                                                "src": "5909:22:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) pure returns (address)"
                                                }
                                            },
                                            "id": 38834,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5909:117:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "functionReturnParameters": 38753,
                                        "id": 38835,
                                        "nodeType": "Return",
                                        "src": "5902:124:154"
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38843,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 38837,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38749,
                                            "src": "6040:5:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_rational_65535_by_1",
                                                "typeString": "int_const 65535"
                                            },
                                            "id": 38842,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_rational_65536_by_1",
                                                    "typeString": "int_const 65536"
                                                },
                                                "id": 38840,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "hexValue": "32",
                                                    "id": 38838,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6049:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_2_by_1",
                                                        "typeString": "int_const 2"
                                                    },
                                                    "value": "2"
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "**",
                                                "rightExpression": {
                                                    "hexValue": "3136",
                                                    "id": 38839,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6052:2:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_16_by_1",
                                                        "typeString": "int_const 16"
                                                    },
                                                    "value": "16"
                                                },
                                                "src": "6049:5:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_65536_by_1",
                                                    "typeString": "int_const 65536"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "hexValue": "31",
                                                "id": 38841,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6057:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "6049:9:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_65535_by_1",
                                                "typeString": "int_const 65535"
                                            }
                                        },
                                        "src": "6040:18:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38869,
                                    "nodeType": "IfStatement",
                                    "src": "6036:149:154",
                                    "trueBody": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30786438",
                                                                            "id": 38850,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6124:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_216_by_1",
                                                                                "typeString": "int_const 216"
                                                                            },
                                                                            "value": "0xd8"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_216_by_1",
                                                                                "typeString": "int_const 216"
                                                                            }
                                                                        ],
                                                                        "id": 38849,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6117:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38848,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6117:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38851,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6117:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783934",
                                                                            "id": 38854,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6138:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            },
                                                                            "value": "0x94"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            }
                                                                        ],
                                                                        "id": 38853,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6131:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38852,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6131:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38855,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6131:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 38856,
                                                                    "name": "deployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38747,
                                                                    "src": "6145:8:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783832",
                                                                            "id": 38859,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6162:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_130_by_1",
                                                                                "typeString": "int_const 130"
                                                                            },
                                                                            "value": "0x82"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_130_by_1",
                                                                                "typeString": "int_const 130"
                                                                            }
                                                                        ],
                                                                        "id": 38858,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6155:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38857,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6155:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38860,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6155:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 38863,
                                                                            "name": "nonce",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 38749,
                                                                            "src": "6176:5:154",
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
                                                                        "id": 38862,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6169:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_uint16_$",
                                                                            "typeString": "type(uint16)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38861,
                                                                            "name": "uint16",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6169:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38864,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6169:13:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint16",
                                                                        "typeString": "uint16"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_uint16",
                                                                        "typeString": "uint16"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 38846,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "6100:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 38847,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "6104:12:154",
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "6100:16:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 38865,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "6100:83:154",
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
                                                        "id": 38845,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "6090:9:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 38866,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6090:94:154",
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
                                                "id": 38844,
                                                "name": "addressFromLast20Bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39139,
                                                "src": "6067:22:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) pure returns (address)"
                                                }
                                            },
                                            "id": 38867,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6067:118:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "functionReturnParameters": 38753,
                                        "id": 38868,
                                        "nodeType": "Return",
                                        "src": "6060:125:154"
                                    }
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 38876,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 38870,
                                            "name": "nonce",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 38749,
                                            "src": "6199:5:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<=",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_rational_16777215_by_1",
                                                "typeString": "int_const 16777215"
                                            },
                                            "id": 38875,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_rational_16777216_by_1",
                                                    "typeString": "int_const 16777216"
                                                },
                                                "id": 38873,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "hexValue": "32",
                                                    "id": 38871,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6208:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_2_by_1",
                                                        "typeString": "int_const 2"
                                                    },
                                                    "value": "2"
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "**",
                                                "rightExpression": {
                                                    "hexValue": "3234",
                                                    "id": 38872,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "6211:2:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_24_by_1",
                                                        "typeString": "int_const 24"
                                                    },
                                                    "value": "24"
                                                },
                                                "src": "6208:5:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_16777216_by_1",
                                                    "typeString": "int_const 16777216"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "-",
                                            "rightExpression": {
                                                "hexValue": "31",
                                                "id": 38874,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "6216:1:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "6208:9:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_16777215_by_1",
                                                "typeString": "int_const 16777215"
                                            }
                                        },
                                        "src": "6199:18:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 38902,
                                    "nodeType": "IfStatement",
                                    "src": "6195:149:154",
                                    "trueBody": {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "arguments": [
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30786439",
                                                                            "id": 38883,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6283:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_217_by_1",
                                                                                "typeString": "int_const 217"
                                                                            },
                                                                            "value": "0xd9"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_217_by_1",
                                                                                "typeString": "int_const 217"
                                                                            }
                                                                        ],
                                                                        "id": 38882,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6276:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38881,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6276:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38884,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6276:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783934",
                                                                            "id": 38887,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6297:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            },
                                                                            "value": "0x94"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_148_by_1",
                                                                                "typeString": "int_const 148"
                                                                            }
                                                                        ],
                                                                        "id": 38886,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6290:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38885,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6290:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38888,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6290:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "id": 38889,
                                                                    "name": "deployer",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 38747,
                                                                    "src": "6304:8:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "hexValue": "30783833",
                                                                            "id": 38892,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "kind": "number",
                                                                            "lValueRequested": false,
                                                                            "nodeType": "Literal",
                                                                            "src": "6321:4:154",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_rational_131_by_1",
                                                                                "typeString": "int_const 131"
                                                                            },
                                                                            "value": "0x83"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "argumentTypes": [
                                                                            {
                                                                                "typeIdentifier": "t_rational_131_by_1",
                                                                                "typeString": "int_const 131"
                                                                            }
                                                                        ],
                                                                        "id": 38891,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6314:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_bytes1_$",
                                                                            "typeString": "type(bytes1)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38890,
                                                                            "name": "bytes1",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6314:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38893,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6314:12:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    }
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "id": 38896,
                                                                            "name": "nonce",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 38749,
                                                                            "src": "6335:5:154",
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
                                                                        "id": 38895,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "6328:6:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_uint24_$",
                                                                            "typeString": "type(uint24)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 38894,
                                                                            "name": "uint24",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "6328:6:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    },
                                                                    "id": 38897,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "kind": "typeConversion",
                                                                    "lValueRequested": false,
                                                                    "nameLocations": [],
                                                                    "names": [],
                                                                    "nodeType": "FunctionCall",
                                                                    "src": "6328:13:154",
                                                                    "tryCall": false,
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_uint24",
                                                                        "typeString": "uint24"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_address",
                                                                        "typeString": "address"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_bytes1",
                                                                        "typeString": "bytes1"
                                                                    },
                                                                    {
                                                                        "typeIdentifier": "t_uint24",
                                                                        "typeString": "uint24"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "id": 38879,
                                                                    "name": "abi",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -1,
                                                                    "src": "6259:3:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_magic_abi",
                                                                        "typeString": "abi"
                                                                    }
                                                                },
                                                                "id": 38880,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "memberLocation": "6263:12:154",
                                                                "memberName": "encodePacked",
                                                                "nodeType": "MemberAccess",
                                                                "src": "6259:16:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                    "typeString": "function () pure returns (bytes memory)"
                                                                }
                                                            },
                                                            "id": 38898,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "functionCall",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "6259:83:154",
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
                                                        "id": 38878,
                                                        "name": "keccak256",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -8,
                                                        "src": "6249:9:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                            "typeString": "function (bytes memory) pure returns (bytes32)"
                                                        }
                                                    },
                                                    "id": 38899,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "6249:94:154",
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
                                                "id": 38877,
                                                "name": "addressFromLast20Bytes",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39139,
                                                "src": "6226:22:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                    "typeString": "function (bytes32) pure returns (address)"
                                                }
                                            },
                                            "id": 38900,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "6226:118:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "functionReturnParameters": 38753,
                                        "id": 38901,
                                        "nodeType": "Return",
                                        "src": "6219:125:154"
                                    }
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "30786461",
                                                                        "id": 38909,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6911:4:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_218_by_1",
                                                                            "typeString": "int_const 218"
                                                                        },
                                                                        "value": "0xda"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_218_by_1",
                                                                            "typeString": "int_const 218"
                                                                        }
                                                                    ],
                                                                    "id": 38908,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "6904:6:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes1_$",
                                                                        "typeString": "type(bytes1)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38907,
                                                                        "name": "bytes1",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6904:6:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38910,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6904:12:154",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "30783934",
                                                                        "id": 38913,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6925:4:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_148_by_1",
                                                                            "typeString": "int_const 148"
                                                                        },
                                                                        "value": "0x94"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_148_by_1",
                                                                            "typeString": "int_const 148"
                                                                        }
                                                                    ],
                                                                    "id": 38912,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "6918:6:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes1_$",
                                                                        "typeString": "type(bytes1)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38911,
                                                                        "name": "bytes1",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6918:6:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38914,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6918:12:154",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            {
                                                                "id": 38915,
                                                                "name": "deployer",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38747,
                                                                "src": "6932:8:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "30783834",
                                                                        "id": 38918,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "6949:4:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_132_by_1",
                                                                            "typeString": "int_const 132"
                                                                        },
                                                                        "value": "0x84"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_132_by_1",
                                                                            "typeString": "int_const 132"
                                                                        }
                                                                    ],
                                                                    "id": 38917,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "6942:6:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes1_$",
                                                                        "typeString": "type(bytes1)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38916,
                                                                        "name": "bytes1",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6942:6:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38919,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6942:12:154",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 38922,
                                                                        "name": "nonce",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 38749,
                                                                        "src": "6963:5:154",
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
                                                                    "id": 38921,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "6956:6:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_uint32_$",
                                                                        "typeString": "type(uint32)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38920,
                                                                        "name": "uint32",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "6956:6:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38923,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "6956:13:154",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_uint32",
                                                                    "typeString": "uint32"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_uint32",
                                                                    "typeString": "uint32"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 38905,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "6887:3:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 38906,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "6891:12:154",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "6887:16:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 38924,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "6887:83:154",
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
                                                    "id": 38904,
                                                    "name": "keccak256",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -8,
                                                    "src": "6877:9:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                    }
                                                },
                                                "id": 38925,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6877:94:154",
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
                                            "id": 38903,
                                            "name": "addressFromLast20Bytes",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39139,
                                            "src": "6841:22:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                "typeString": "function (bytes32) pure returns (address)"
                                            }
                                        },
                                        "id": 38926,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6841:140:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 38753,
                                    "id": 38927,
                                    "nodeType": "Return",
                                    "src": "6834:147:154"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 38745,
                            "nodeType": "StructuredDocumentation",
                            "src": "4798:223:154",
                            "text": "@dev Compute the address a contract will be deployed at for a given deployer address and nonce\n @notice adapted from Solmate implementation (https://github.com/Rari-Capital/solmate/blob/main/src/utils/LibRLP.sol)"
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "computeCreateAddress",
                        "nameLocation": "5035:20:154",
                        "parameters": {
                            "id": 38750,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38747,
                                    "mutability": "mutable",
                                    "name": "deployer",
                                    "nameLocation": "5064:8:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38929,
                                    "src": "5056:16:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38746,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5056:7:154",
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
                                    "id": 38749,
                                    "mutability": "mutable",
                                    "name": "nonce",
                                    "nameLocation": "5082:5:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38929,
                                    "src": "5074:13:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 38748,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5074:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5055:33:154"
                        },
                        "returnParameters": {
                            "id": 38753,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38752,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38929,
                                    "src": "5120:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38751,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5120:7:154",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5119:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38956,
                        "nodeType": "FunctionDefinition",
                        "src": "6994:280:154",
                        "nodes": [],
                        "body": {
                            "id": 38955,
                            "nodeType": "Block",
                            "src": "7155:119:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "30786666",
                                                                        "id": 38946,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "7229:4:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_255_by_1",
                                                                            "typeString": "int_const 255"
                                                                        },
                                                                        "value": "0xff"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_255_by_1",
                                                                            "typeString": "int_const 255"
                                                                        }
                                                                    ],
                                                                    "id": 38945,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "7222:6:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes1_$",
                                                                        "typeString": "type(bytes1)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 38944,
                                                                        "name": "bytes1",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "7222:6:154",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 38947,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "7222:12:154",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                }
                                                            },
                                                            {
                                                                "id": 38948,
                                                                "name": "deployer",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38935,
                                                                "src": "7236:8:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 38949,
                                                                "name": "salt",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38931,
                                                                "src": "7246:4:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            },
                                                            {
                                                                "id": 38950,
                                                                "name": "initcodeHash",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 38933,
                                                                "src": "7252:12:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes1",
                                                                    "typeString": "bytes1"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 38942,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "7205:3:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 38943,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "7209:12:154",
                                                            "memberName": "encodePacked",
                                                            "nodeType": "MemberAccess",
                                                            "src": "7205:16:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                "typeString": "function () pure returns (bytes memory)"
                                                            }
                                                        },
                                                        "id": 38951,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "7205:60:154",
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
                                                    "id": 38941,
                                                    "name": "keccak256",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -8,
                                                    "src": "7195:9:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                        "typeString": "function (bytes memory) pure returns (bytes32)"
                                                    }
                                                },
                                                "id": 38952,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "7195:71:154",
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
                                            "id": 38940,
                                            "name": "addressFromLast20Bytes",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39139,
                                            "src": "7172:22:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$",
                                                "typeString": "function (bytes32) pure returns (address)"
                                            }
                                        },
                                        "id": 38953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7172:95:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 38939,
                                    "id": 38954,
                                    "nodeType": "Return",
                                    "src": "7165:102:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "computeCreate2Address",
                        "nameLocation": "7003:21:154",
                        "parameters": {
                            "id": 38936,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38931,
                                    "mutability": "mutable",
                                    "name": "salt",
                                    "nameLocation": "7033:4:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38956,
                                    "src": "7025:12:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38930,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7025:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38933,
                                    "mutability": "mutable",
                                    "name": "initcodeHash",
                                    "nameLocation": "7047:12:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38956,
                                    "src": "7039:20:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38932,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7039:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38935,
                                    "mutability": "mutable",
                                    "name": "deployer",
                                    "nameLocation": "7069:8:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38956,
                                    "src": "7061:16:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38934,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7061:7:154",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7024:54:154"
                        },
                        "returnParameters": {
                            "id": 38939,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38938,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38956,
                                    "src": "7142:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38937,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7142:7:154",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7141:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 38973,
                        "nodeType": "FunctionDefinition",
                        "src": "7383:181:154",
                        "nodes": [],
                        "body": {
                            "id": 38972,
                            "nodeType": "Block",
                            "src": "7482:82:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38967,
                                                "name": "salt",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38959,
                                                "src": "7521:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 38968,
                                                "name": "initCodeHash",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38961,
                                                "src": "7527:12:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "id": 38969,
                                                "name": "CREATE2_FACTORY",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38387,
                                                "src": "7541:15:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 38966,
                                            "name": "computeCreate2Address",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38956,
                                                38973
                                            ],
                                            "referencedDeclaration": 38956,
                                            "src": "7499:21:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes32_$_t_bytes32_$_t_address_$returns$_t_address_$",
                                                "typeString": "function (bytes32,bytes32,address) pure returns (address)"
                                            }
                                        },
                                        "id": 38970,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7499:58:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 38965,
                                    "id": 38971,
                                    "nodeType": "Return",
                                    "src": "7492:65:154"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 38957,
                            "nodeType": "StructuredDocumentation",
                            "src": "7280:98:154",
                            "text": "@dev returns the address of a contract created with CREATE2 using the default CREATE2 deployer"
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "computeCreate2Address",
                        "nameLocation": "7392:21:154",
                        "parameters": {
                            "id": 38962,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38959,
                                    "mutability": "mutable",
                                    "name": "salt",
                                    "nameLocation": "7422:4:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38973,
                                    "src": "7414:12:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38958,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7414:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38961,
                                    "mutability": "mutable",
                                    "name": "initCodeHash",
                                    "nameLocation": "7436:12:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38973,
                                    "src": "7428:20:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38960,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7428:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7413:36:154"
                        },
                        "returnParameters": {
                            "id": 38965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38964,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38973,
                                    "src": "7473:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 38963,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7473:7:154",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7472:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 38987,
                        "nodeType": "FunctionDefinition",
                        "src": "7788:135:154",
                        "nodes": [],
                        "body": {
                            "id": 38986,
                            "nodeType": "Block",
                            "src": "7869:54:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 38982,
                                                "name": "creationCode",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38976,
                                                "src": "7899:12:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            {
                                                "hexValue": "",
                                                "id": 38983,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "7913:2:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                },
                                                "value": ""
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                    "typeString": "literal_string \"\""
                                                }
                                            ],
                                            "id": 38981,
                                            "name": "hashInitCode",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                38987,
                                                39006
                                            ],
                                            "referencedDeclaration": 39006,
                                            "src": "7886:12:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_internal_pure$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory,bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 38984,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "7886:30:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 38980,
                                    "id": 38985,
                                    "nodeType": "Return",
                                    "src": "7879:37:154"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 38974,
                            "nodeType": "StructuredDocumentation",
                            "src": "7570:213:154",
                            "text": "@dev returns the hash of the init code (creation code + no args) used in CREATE2 with no constructor arguments\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode"
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "hashInitCode",
                        "nameLocation": "7797:12:154",
                        "parameters": {
                            "id": 38977,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38976,
                                    "mutability": "mutable",
                                    "name": "creationCode",
                                    "nameLocation": "7823:12:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38987,
                                    "src": "7810:25:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38975,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7810:5:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7809:27:154"
                        },
                        "returnParameters": {
                            "id": 38980,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38979,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 38987,
                                    "src": "7860:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38978,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "7860:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "7859:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 39006,
                        "nodeType": "FunctionDefinition",
                        "src": "8196:171:154",
                        "nodes": [],
                        "body": {
                            "id": 39005,
                            "nodeType": "Block",
                            "src": "8296:71:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "id": 39000,
                                                        "name": "creationCode",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38990,
                                                        "src": "8340:12:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 39001,
                                                        "name": "args",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38992,
                                                        "src": "8354:4:154",
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
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes_memory_ptr",
                                                            "typeString": "bytes memory"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 38998,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "8323:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 38999,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "8327:12:154",
                                                    "memberName": "encodePacked",
                                                    "nodeType": "MemberAccess",
                                                    "src": "8323:16:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 39002,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "8323:36:154",
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
                                            "id": 38997,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -8,
                                            "src": "8313:9:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 39003,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8313:47:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 38996,
                                    "id": 39004,
                                    "nodeType": "Return",
                                    "src": "8306:54:154"
                                }
                            ]
                        },
                        "documentation": {
                            "id": 38988,
                            "nodeType": "StructuredDocumentation",
                            "src": "7929:262:154",
                            "text": "@dev returns the hash of the init code (creation code + ABI-encoded args) used in CREATE2\n @param creationCode the creation code of a contract C, as returned by type(C).creationCode\n @param args the ABI-encoded arguments to the constructor of C"
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "hashInitCode",
                        "nameLocation": "8205:12:154",
                        "parameters": {
                            "id": 38993,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38990,
                                    "mutability": "mutable",
                                    "name": "creationCode",
                                    "nameLocation": "8231:12:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39006,
                                    "src": "8218:25:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38989,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8218:5:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 38992,
                                    "mutability": "mutable",
                                    "name": "args",
                                    "nameLocation": "8258:4:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39006,
                                    "src": "8245:17:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_memory_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 38991,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8245:5:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8217:46:154"
                        },
                        "returnParameters": {
                            "id": 38996,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 38995,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39006,
                                    "src": "8287:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 38994,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8287:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8286:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 39120,
                        "nodeType": "FunctionDefinition",
                        "src": "8478:1124:154",
                        "nodes": [],
                        "body": {
                            "id": 39119,
                            "nodeType": "Block",
                            "src": "8628:974:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        39018
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 39018,
                                            "mutability": "mutable",
                                            "name": "tokenCodeSize",
                                            "nameLocation": "8646:13:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 39119,
                                            "src": "8638:21:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 39017,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8638:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 39019,
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8638:21:154"
                                },
                                {
                                    "AST": {
                                        "nodeType": "YulBlock",
                                        "src": "8678:59:154",
                                        "statements": [
                                            {
                                                "nodeType": "YulAssignment",
                                                "src": "8692:35:154",
                                                "value": {
                                                    "arguments": [
                                                        {
                                                            "name": "token",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "8721:5:154"
                                                        }
                                                    ],
                                                    "functionName": {
                                                        "name": "extcodesize",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8709:11:154"
                                                    },
                                                    "nodeType": "YulFunctionCall",
                                                    "src": "8709:18:154"
                                                },
                                                "variableNames": [
                                                    {
                                                        "name": "tokenCodeSize",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8692:13:154"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "evmVersion": "paris",
                                    "externalReferences": [
                                        {
                                            "declaration": 39008,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8721:5:154",
                                            "valueSize": 1
                                        },
                                        {
                                            "declaration": 39018,
                                            "isOffset": false,
                                            "isSlot": false,
                                            "src": "8692:13:154",
                                            "valueSize": 1
                                        }
                                    ],
                                    "id": 39020,
                                    "nodeType": "InlineAssembly",
                                    "src": "8669:68:154"
                                },
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 39024,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 39022,
                                                    "name": "tokenCodeSize",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 39018,
                                                    "src": "8754:13:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">",
                                                "rightExpression": {
                                                    "hexValue": "30",
                                                    "id": 39023,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "8770:1:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "8754:17:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5374645574696c7320676574546f6b656e42616c616e63657328616464726573732c616464726573735b5d293a20546f6b656e2061646472657373206973206e6f74206120636f6e74726163742e",
                                                "id": 39025,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "8773:80:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_e1cfd8db054d28c838f90dd4aca17e279a1b93ad4e1fab977a6ceb92cad655fe",
                                                    "typeString": "literal_string \"StdUtils getTokenBalances(address,address[]): Token address is not a contract.\""
                                                },
                                                "value": "StdUtils getTokenBalances(address,address[]): Token address is not a contract."
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_e1cfd8db054d28c838f90dd4aca17e279a1b93ad4e1fab977a6ceb92cad655fe",
                                                    "typeString": "literal_string \"StdUtils getTokenBalances(address,address[]): Token address is not a contract.\""
                                                }
                                            ],
                                            "id": 39021,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "8746:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 39026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8746:108:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 39027,
                                    "nodeType": "ExpressionStatement",
                                    "src": "8746:108:154"
                                },
                                {
                                    "assignments": [
                                        39029
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 39029,
                                            "mutability": "mutable",
                                            "name": "length",
                                            "nameLocation": "8929:6:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 39119,
                                            "src": "8921:14:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 39028,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "8921:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 39032,
                                    "initialValue": {
                                        "expression": {
                                            "id": 39030,
                                            "name": "addresses",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39011,
                                            "src": "8938:9:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "id": 39031,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "8948:6:154",
                                        "memberName": "length",
                                        "nodeType": "MemberAccess",
                                        "src": "8938:16:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8921:33:154"
                                },
                                {
                                    "assignments": [
                                        39038
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 39038,
                                            "mutability": "mutable",
                                            "name": "calls",
                                            "nameLocation": "8990:5:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 39119,
                                            "src": "8964:31:154",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct IMulticall3.Call[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 39036,
                                                    "nodeType": "UserDefinedTypeName",
                                                    "pathNode": {
                                                        "id": 39035,
                                                        "name": "IMulticall3.Call",
                                                        "nameLocations": [
                                                            "8964:11:154",
                                                            "8976:4:154"
                                                        ],
                                                        "nodeType": "IdentifierPath",
                                                        "referencedDeclaration": 56975,
                                                        "src": "8964:16:154"
                                                    },
                                                    "referencedDeclaration": 56975,
                                                    "src": "8964:16:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Call_$56975_storage_ptr",
                                                        "typeString": "struct IMulticall3.Call"
                                                    }
                                                },
                                                "id": 39037,
                                                "nodeType": "ArrayTypeName",
                                                "src": "8964:18:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Call_$56975_storage_$dyn_storage_ptr",
                                                    "typeString": "struct IMulticall3.Call[]"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 39045,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 39043,
                                                "name": "length",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39029,
                                                "src": "9021:6:154",
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
                                            "id": 39042,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "NewExpression",
                                            "src": "8998:22:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (uint256) pure returns (struct IMulticall3.Call memory[] memory)"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 39040,
                                                    "nodeType": "UserDefinedTypeName",
                                                    "pathNode": {
                                                        "id": 39039,
                                                        "name": "IMulticall3.Call",
                                                        "nameLocations": [
                                                            "9002:11:154",
                                                            "9014:4:154"
                                                        ],
                                                        "nodeType": "IdentifierPath",
                                                        "referencedDeclaration": 56975,
                                                        "src": "9002:16:154"
                                                    },
                                                    "referencedDeclaration": 56975,
                                                    "src": "9002:16:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Call_$56975_storage_ptr",
                                                        "typeString": "struct IMulticall3.Call"
                                                    }
                                                },
                                                "id": 39041,
                                                "nodeType": "ArrayTypeName",
                                                "src": "9002:18:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Call_$56975_storage_$dyn_storage_ptr",
                                                    "typeString": "struct IMulticall3.Call[]"
                                                }
                                            }
                                        },
                                        "id": 39044,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "8998:30:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct IMulticall3.Call memory[] memory"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "8964:64:154"
                                },
                                {
                                    "body": {
                                        "id": 39073,
                                        "nodeType": "Block",
                                        "src": "9075:189:154",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 39071,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 39056,
                                                            "name": "calls",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 39038,
                                                            "src": "9147:5:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr",
                                                                "typeString": "struct IMulticall3.Call memory[] memory"
                                                            }
                                                        },
                                                        "id": 39058,
                                                        "indexExpression": {
                                                            "id": 39057,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 39047,
                                                            "src": "9153:1:154",
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
                                                        "src": "9147:8:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Call_$56975_memory_ptr",
                                                            "typeString": "struct IMulticall3.Call memory"
                                                        }
                                                    },
                                                    "nodeType": "Assignment",
                                                    "operator": "=",
                                                    "rightHandSide": {
                                                        "arguments": [
                                                            {
                                                                "id": 39061,
                                                                "name": "token",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 39008,
                                                                "src": "9184:5:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "30783730613038323331",
                                                                        "id": 39064,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "9224:10:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_1889567281_by_1",
                                                                            "typeString": "int_const 1889567281"
                                                                        },
                                                                        "value": "0x70a08231"
                                                                    },
                                                                    {
                                                                        "components": [
                                                                            {
                                                                                "baseExpression": {
                                                                                    "id": 39065,
                                                                                    "name": "addresses",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 39011,
                                                                                    "src": "9237:9:154",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                                                        "typeString": "address[] memory"
                                                                                    }
                                                                                },
                                                                                "id": 39067,
                                                                                "indexExpression": {
                                                                                    "id": 39066,
                                                                                    "name": "i",
                                                                                    "nodeType": "Identifier",
                                                                                    "overloadedDeclarations": [],
                                                                                    "referencedDeclaration": 39047,
                                                                                    "src": "9247:1:154",
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
                                                                                "src": "9237:12:154",
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_address",
                                                                                    "typeString": "address"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "id": 39068,
                                                                        "isConstant": false,
                                                                        "isInlineArray": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "TupleExpression",
                                                                        "src": "9236:14:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_1889567281_by_1",
                                                                            "typeString": "int_const 1889567281"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "id": 39062,
                                                                        "name": "abi",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -1,
                                                                        "src": "9201:3:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_abi",
                                                                            "typeString": "abi"
                                                                        }
                                                                    },
                                                                    "id": 39063,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "9205:18:154",
                                                                    "memberName": "encodeWithSelector",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "9201:22:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_abiencodewithselector_pure$_t_bytes4_$returns$_t_bytes_memory_ptr_$",
                                                                        "typeString": "function (bytes4) pure returns (bytes memory)"
                                                                    }
                                                                },
                                                                "id": 39069,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "9201:50:154",
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
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 39059,
                                                                "name": "IMulticall3",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 57130,
                                                                "src": "9158:11:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_contract$_IMulticall3_$57130_$",
                                                                    "typeString": "type(contract IMulticall3)"
                                                                }
                                                            },
                                                            "id": 39060,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9170:4:154",
                                                            "memberName": "Call",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 56975,
                                                            "src": "9158:16:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_struct$_Call_$56975_storage_ptr_$",
                                                                "typeString": "type(struct IMulticall3.Call storage pointer)"
                                                            }
                                                        },
                                                        "id": 39070,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "structConstructorCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [
                                                            "9176:6:154",
                                                            "9191:8:154"
                                                        ],
                                                        "names": [
                                                            "target",
                                                            "callData"
                                                        ],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9158:95:154",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Call_$56975_memory_ptr",
                                                            "typeString": "struct IMulticall3.Call memory"
                                                        }
                                                    },
                                                    "src": "9147:106:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Call_$56975_memory_ptr",
                                                        "typeString": "struct IMulticall3.Call memory"
                                                    }
                                                },
                                                "id": 39072,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9147:106:154"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 39052,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 39050,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39047,
                                            "src": "9058:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 39051,
                                            "name": "length",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39029,
                                            "src": "9062:6:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9058:10:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 39074,
                                    "initializationExpression": {
                                        "assignments": [
                                            39047
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 39047,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "9051:1:154",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 39074,
                                                "src": "9043:9:154",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 39046,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "9043:7:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 39049,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 39048,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "9055:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "9043:13:154"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 39054,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": true,
                                            "src": "9070:3:154",
                                            "subExpression": {
                                                "id": 39053,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39047,
                                                "src": "9072:1:154",
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
                                        "id": 39055,
                                        "nodeType": "ExpressionStatement",
                                        "src": "9070:3:154"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "9038:226:154"
                                },
                                {
                                    "assignments": [
                                        null,
                                        39079
                                    ],
                                    "declarations": [
                                        null,
                                        {
                                            "constant": false,
                                            "id": 39079,
                                            "mutability": "mutable",
                                            "name": "returnData",
                                            "nameLocation": "9328:10:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 39119,
                                            "src": "9313:25:154",
                                            "stateVariable": false,
                                            "storageLocation": "memory",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "bytes[]"
                                            },
                                            "typeName": {
                                                "baseType": {
                                                    "id": 39077,
                                                    "name": "bytes",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "9313:5:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes_storage_ptr",
                                                        "typeString": "bytes"
                                                    }
                                                },
                                                "id": 39078,
                                                "nodeType": "ArrayTypeName",
                                                "src": "9313:7:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_bytes_storage_$dyn_storage_ptr",
                                                    "typeString": "bytes[]"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 39084,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "id": 39082,
                                                "name": "calls",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39038,
                                                "src": "9362:5:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "struct IMulticall3.Call memory[] memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr",
                                                    "typeString": "struct IMulticall3.Call memory[] memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 39080,
                                                "name": "multicall",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 38355,
                                                "src": "9342:9:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_IMulticall3_$57130",
                                                    "typeString": "contract IMulticall3"
                                                }
                                            },
                                            "id": 39081,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "9352:9:154",
                                            "memberName": "aggregate",
                                            "nodeType": "MemberAccess",
                                            "referencedDeclaration": 57008,
                                            "src": "9342:19:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_external_payable$_t_array$_t_struct$_Call_$56975_memory_ptr_$dyn_memory_ptr_$returns$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                                                "typeString": "function (struct IMulticall3.Call memory[] memory) payable external returns (uint256,bytes memory[] memory)"
                                            }
                                        },
                                        "id": 39083,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9342:26:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_uint256_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$",
                                            "typeString": "tuple(uint256,bytes memory[] memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "9310:58:154"
                                },
                                {
                                    "expression": {
                                        "id": 39091,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 39085,
                                            "name": "balances",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39015,
                                            "src": "9442:8:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [
                                                {
                                                    "id": 39089,
                                                    "name": "length",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 39029,
                                                    "src": "9467:6:154",
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
                                                "id": 39088,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "lValueRequested": false,
                                                "nodeType": "NewExpression",
                                                "src": "9453:13:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$",
                                                    "typeString": "function (uint256) pure returns (uint256[] memory)"
                                                },
                                                "typeName": {
                                                    "baseType": {
                                                        "id": 39086,
                                                        "name": "uint256",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "9457:7:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "id": 39087,
                                                    "nodeType": "ArrayTypeName",
                                                    "src": "9457:9:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                        "typeString": "uint256[]"
                                                    }
                                                }
                                            },
                                            "id": 39090,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "9453:21:154",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                "typeString": "uint256[] memory"
                                            }
                                        },
                                        "src": "9442:32:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                            "typeString": "uint256[] memory"
                                        }
                                    },
                                    "id": 39092,
                                    "nodeType": "ExpressionStatement",
                                    "src": "9442:32:154"
                                },
                                {
                                    "body": {
                                        "id": 39117,
                                        "nodeType": "Block",
                                        "src": "9521:75:154",
                                        "statements": [
                                            {
                                                "expression": {
                                                    "id": 39115,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftHandSide": {
                                                        "baseExpression": {
                                                            "id": 39103,
                                                            "name": "balances",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 39015,
                                                            "src": "9535:8:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                                                "typeString": "uint256[] memory"
                                                            }
                                                        },
                                                        "id": 39105,
                                                        "indexExpression": {
                                                            "id": 39104,
                                                            "name": "i",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 39094,
                                                            "src": "9544:1:154",
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
                                                        "src": "9535:11:154",
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
                                                                "baseExpression": {
                                                                    "id": 39108,
                                                                    "name": "returnData",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 39079,
                                                                    "src": "9560:10:154",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr",
                                                                        "typeString": "bytes memory[] memory"
                                                                    }
                                                                },
                                                                "id": 39110,
                                                                "indexExpression": {
                                                                    "id": 39109,
                                                                    "name": "i",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 39094,
                                                                    "src": "9571:1:154",
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
                                                                "src": "9560:13:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            },
                                                            {
                                                                "components": [
                                                                    {
                                                                        "id": 39112,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "lValueRequested": false,
                                                                        "nodeType": "ElementaryTypeNameExpression",
                                                                        "src": "9576:7:154",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                                            "typeString": "type(uint256)"
                                                                        },
                                                                        "typeName": {
                                                                            "id": 39111,
                                                                            "name": "uint256",
                                                                            "nodeType": "ElementaryTypeName",
                                                                            "src": "9576:7:154",
                                                                            "typeDescriptions": {}
                                                                        }
                                                                    }
                                                                ],
                                                                "id": 39113,
                                                                "isConstant": false,
                                                                "isInlineArray": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "TupleExpression",
                                                                "src": "9575:9:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_type$_t_uint256_$",
                                                                    "typeString": "type(uint256)"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 39106,
                                                                "name": "abi",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -1,
                                                                "src": "9549:3:154",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_abi",
                                                                    "typeString": "abi"
                                                                }
                                                            },
                                                            "id": 39107,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "memberLocation": "9553:6:154",
                                                            "memberName": "decode",
                                                            "nodeType": "MemberAccess",
                                                            "src": "9549:10:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_abidecode_pure$__$returns$__$",
                                                                "typeString": "function () pure"
                                                            }
                                                        },
                                                        "id": 39114,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9549:36:154",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "9535:50:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "id": 39116,
                                                "nodeType": "ExpressionStatement",
                                                "src": "9535:50:154"
                                            }
                                        ]
                                    },
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 39099,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 39097,
                                            "name": "i",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39094,
                                            "src": "9504:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "<",
                                        "rightExpression": {
                                            "id": 39098,
                                            "name": "length",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 39029,
                                            "src": "9508:6:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "9504:10:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 39118,
                                    "initializationExpression": {
                                        "assignments": [
                                            39094
                                        ],
                                        "declarations": [
                                            {
                                                "constant": false,
                                                "id": 39094,
                                                "mutability": "mutable",
                                                "name": "i",
                                                "nameLocation": "9497:1:154",
                                                "nodeType": "VariableDeclaration",
                                                "scope": 39118,
                                                "src": "9489:9:154",
                                                "stateVariable": false,
                                                "storageLocation": "default",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "typeName": {
                                                    "id": 39093,
                                                    "name": "uint256",
                                                    "nodeType": "ElementaryTypeName",
                                                    "src": "9489:7:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "visibility": "internal"
                                            }
                                        ],
                                        "id": 39096,
                                        "initialValue": {
                                            "hexValue": "30",
                                            "id": 39095,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "9501:1:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_rational_0_by_1",
                                                "typeString": "int_const 0"
                                            },
                                            "value": "0"
                                        },
                                        "nodeType": "VariableDeclarationStatement",
                                        "src": "9489:13:154"
                                    },
                                    "loopExpression": {
                                        "expression": {
                                            "id": 39101,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "UnaryOperation",
                                            "operator": "++",
                                            "prefix": true,
                                            "src": "9516:3:154",
                                            "subExpression": {
                                                "id": 39100,
                                                "name": "i",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 39094,
                                                "src": "9518:1:154",
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
                                        "id": 39102,
                                        "nodeType": "ExpressionStatement",
                                        "src": "9516:3:154"
                                    },
                                    "nodeType": "ForStatement",
                                    "src": "9484:112:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTokenBalances",
                        "nameLocation": "8487:16:154",
                        "parameters": {
                            "id": 39012,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 39008,
                                    "mutability": "mutable",
                                    "name": "token",
                                    "nameLocation": "8512:5:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39120,
                                    "src": "8504:13:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 39007,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "8504:7:154",
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
                                    "id": 39011,
                                    "mutability": "mutable",
                                    "name": "addresses",
                                    "nameLocation": "8536:9:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39120,
                                    "src": "8519:26:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 39009,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8519:7:154",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 39010,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8519:9:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8503:43:154"
                        },
                        "returnParameters": {
                            "id": 39016,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 39015,
                                    "mutability": "mutable",
                                    "name": "balances",
                                    "nameLocation": "8614:8:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39120,
                                    "src": "8597:25:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 39013,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "8597:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 39014,
                                        "nodeType": "ArrayTypeName",
                                        "src": "8597:9:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "8596:27:154"
                        },
                        "scope": 39190,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 39139,
                        "nodeType": "FunctionDefinition",
                        "src": "9822:144:154",
                        "nodes": [],
                        "body": {
                            "id": 39138,
                            "nodeType": "Block",
                            "src": "9905:61:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 39133,
                                                                "name": "bytesValue",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 39122,
                                                                "src": "9946:10:154",
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
                                                            "id": 39132,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "9938:7:154",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_uint256_$",
                                                                "typeString": "type(uint256)"
                                                            },
                                                            "typeName": {
                                                                "id": 39131,
                                                                "name": "uint256",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "9938:7:154",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 39134,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "9938:19:154",
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
                                                    "id": 39130,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "9930:7:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_uint160_$",
                                                        "typeString": "type(uint160)"
                                                    },
                                                    "typeName": {
                                                        "id": 39129,
                                                        "name": "uint160",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "9930:7:154",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 39135,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "9930:28:154",
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
                                            "id": 39128,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "nodeType": "ElementaryTypeNameExpression",
                                            "src": "9922:7:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_type$_t_address_$",
                                                "typeString": "type(address)"
                                            },
                                            "typeName": {
                                                "id": 39127,
                                                "name": "address",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "9922:7:154",
                                                "typeDescriptions": {}
                                            }
                                        },
                                        "id": 39136,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "9922:37:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 39126,
                                    "id": 39137,
                                    "nodeType": "Return",
                                    "src": "9915:44:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "addressFromLast20Bytes",
                        "nameLocation": "9831:22:154",
                        "parameters": {
                            "id": 39123,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 39122,
                                    "mutability": "mutable",
                                    "name": "bytesValue",
                                    "nameLocation": "9862:10:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39139,
                                    "src": "9854:18:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 39121,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9854:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9853:20:154"
                        },
                        "returnParameters": {
                            "id": 39126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 39125,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39139,
                                    "src": "9896:7:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 39124,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "9896:7:154",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "9895:9:154"
                        },
                        "scope": 39190,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 39164,
                        "nodeType": "FunctionDefinition",
                        "src": "10096:207:154",
                        "nodes": [],
                        "body": {
                            "id": 39163,
                            "nodeType": "Block",
                            "src": "10161:142:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        39147,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 39147,
                                            "mutability": "mutable",
                                            "name": "status",
                                            "nameLocation": "10177:6:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 39163,
                                            "src": "10172:11:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 39146,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10172:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 39160,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "6c6f6728737472696e672c75696e7432353629",
                                                        "id": 39155,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10249:21:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e",
                                                            "typeString": "literal_string \"log(string,uint256)\""
                                                        },
                                                        "value": "log(string,uint256)"
                                                    },
                                                    {
                                                        "id": 39156,
                                                        "name": "p0",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 39141,
                                                        "src": "10272:2:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 39157,
                                                        "name": "p1",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 39143,
                                                        "src": "10276:2:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_b60e72ccf6d57ab53eb84d7e94a9545806ed7f93c4d5673f11a64f03471e584e",
                                                            "typeString": "literal_string \"log(string,uint256)\""
                                                        },
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 39153,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "10225:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 39154,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10229:19:154",
                                                    "memberName": "encodeWithSignature",
                                                    "nodeType": "MemberAccess",
                                                    "src": "10225:23:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function (string memory) pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 39158,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10225:54:154",
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
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 39150,
                                                        "name": "CONSOLE2_ADDRESS",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38375,
                                                        "src": "10196:16:154",
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
                                                    "id": 39149,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "10188:7:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 39148,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "10188:7:154",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 39151,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10188:25:154",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 39152,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10214:10:154",
                                            "memberName": "staticcall",
                                            "nodeType": "MemberAccess",
                                            "src": "10188:36:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 39159,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10188:92:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10171:109:154"
                                },
                                {
                                    "expression": {
                                        "id": 39161,
                                        "name": "status",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 39147,
                                        "src": "10290:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 39162,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10290:6:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "console2_log",
                        "nameLocation": "10105:12:154",
                        "parameters": {
                            "id": 39144,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 39141,
                                    "mutability": "mutable",
                                    "name": "p0",
                                    "nameLocation": "10132:2:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39164,
                                    "src": "10118:16:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 39140,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10118:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 39143,
                                    "mutability": "mutable",
                                    "name": "p1",
                                    "nameLocation": "10144:2:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39164,
                                    "src": "10136:10:154",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 39142,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10136:7:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10117:30:154"
                        },
                        "returnParameters": {
                            "id": 39145,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10161:0:154"
                        },
                        "scope": 39190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "private"
                    },
                    {
                        "id": 39189,
                        "nodeType": "FunctionDefinition",
                        "src": "10309:212:154",
                        "nodes": [],
                        "body": {
                            "id": 39188,
                            "nodeType": "Block",
                            "src": "10380:141:154",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        39172,
                                        null
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 39172,
                                            "mutability": "mutable",
                                            "name": "status",
                                            "nameLocation": "10396:6:154",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 39188,
                                            "src": "10391:11:154",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            },
                                            "typeName": {
                                                "id": 39171,
                                                "name": "bool",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "10391:4:154",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            "visibility": "internal"
                                        },
                                        null
                                    ],
                                    "id": 39185,
                                    "initialValue": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "6c6f6728737472696e672c737472696e6729",
                                                        "id": 39180,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "10468:20:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac",
                                                            "typeString": "literal_string \"log(string,string)\""
                                                        },
                                                        "value": "log(string,string)"
                                                    },
                                                    {
                                                        "id": 39181,
                                                        "name": "p0",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 39166,
                                                        "src": "10490:2:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    },
                                                    {
                                                        "id": 39182,
                                                        "name": "p1",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 39168,
                                                        "src": "10494:2:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_stringliteral_4b5c4277d556d03fbf5ee534fba41dc13982b44f2fa82f1d48fdd8b5b5b692ac",
                                                            "typeString": "literal_string \"log(string,string)\""
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
                                                    "expression": {
                                                        "id": 39178,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "10444:3:154",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 39179,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "10448:19:154",
                                                    "memberName": "encodeWithSignature",
                                                    "nodeType": "MemberAccess",
                                                    "src": "10444:23:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencodewithsignature_pure$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function (string memory) pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 39183,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10444:53:154",
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
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 39175,
                                                        "name": "CONSOLE2_ADDRESS",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 38375,
                                                        "src": "10415:16:154",
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
                                                    "id": 39174,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "10407:7:154",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 39173,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "10407:7:154",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 39176,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "10407:25:154",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "id": 39177,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "10433:10:154",
                                            "memberName": "staticcall",
                                            "nodeType": "MemberAccess",
                                            "src": "10407:36:154",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_barestaticcall_view$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$",
                                                "typeString": "function (bytes memory) view returns (bool,bytes memory)"
                                            }
                                        },
                                        "id": 39184,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "10407:91:154",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$_t_bool_$_t_bytes_memory_ptr_$",
                                            "typeString": "tuple(bool,bytes memory)"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "10390:108:154"
                                },
                                {
                                    "expression": {
                                        "id": 39186,
                                        "name": "status",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 39172,
                                        "src": "10508:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 39187,
                                    "nodeType": "ExpressionStatement",
                                    "src": "10508:6:154"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "console2_log",
                        "nameLocation": "10318:12:154",
                        "parameters": {
                            "id": 39169,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 39166,
                                    "mutability": "mutable",
                                    "name": "p0",
                                    "nameLocation": "10345:2:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39189,
                                    "src": "10331:16:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 39165,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10331:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 39168,
                                    "mutability": "mutable",
                                    "name": "p1",
                                    "nameLocation": "10363:2:154",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 39189,
                                    "src": "10349:16:154",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 39167,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "10349:6:154",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "10330:36:154"
                        },
                        "returnParameters": {
                            "id": 39170,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "10380:0:154"
                        },
                        "scope": 39190,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "private"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "StdUtils",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    39190
                ],
                "name": "StdUtils",
                "nameLocation": "210:8:154",
                "scope": 39191,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 154
};
