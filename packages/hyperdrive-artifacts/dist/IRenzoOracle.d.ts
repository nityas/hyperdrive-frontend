export declare const IRenzoOracle: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_currentValueInProtocol";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_newValueAdded";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_existingEzETHSupply";
            readonly type: "uint256";
        }];
        readonly name: "calculateMintAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_ezETHBeingBurned";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_existingEzETHSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_currentValueInProtocol";
            readonly type: "uint256";
        }];
        readonly name: "calculateRedeemAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }];
        readonly name: "lookupTokenAmountFromValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_balance";
            readonly type: "uint256";
        }];
        readonly name: "lookupTokenValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20[]";
            readonly name: "_tokens";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_balances";
            readonly type: "uint256[]";
        }];
        readonly name: "lookupTokenValues";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x";
        readonly sourceMap: "";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {
        readonly "calculateMintAmount(uint256,uint256,uint256)": "8f686e6a";
        readonly "calculateRedeemAmount(uint256,uint256,uint256)": "c5c83cb0";
        readonly "lookupTokenAmountFromValue(address,uint256)": "37933625";
        readonly "lookupTokenValue(address,uint256)": "0052e3fd";
        readonly "lookupTokenValues(address[],uint256[])": "ba28a571";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_currentValueInProtocol\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newValueAdded\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_existingEzETHSupply\",\"type\":\"uint256\"}],\"name\":\"calculateMintAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ezETHBeingBurned\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_existingEzETHSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_currentValueInProtocol\",\"type\":\"uint256\"}],\"name\":\"calculateRedeemAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"lookupTokenAmountFromValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_balance\",\"type\":\"uint256\"}],\"name\":\"lookupTokenValue\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IERC20[]\",\"name\":\"_tokens\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"_balances\",\"type\":\"uint256[]\"}],\"name\":\"lookupTokenValues\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRenzo.sol\":\"IRenzoOracle\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IRenzo.sol\":{\"keccak256\":\"0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d\",\"dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_currentValueInProtocol";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_newValueAdded";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_existingEzETHSupply";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateMintAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_ezETHBeingBurned";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_existingEzETHSupply";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_currentValueInProtocol";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "pure";
                readonly type: "function";
                readonly name: "calculateRedeemAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_value";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "lookupTokenAmountFromValue";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20";
                    readonly name: "_token";
                    readonly type: "address";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_balance";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "lookupTokenValue";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "contract IERC20[]";
                    readonly name: "_tokens";
                    readonly type: "address[]";
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "_balances";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "lookupTokenValues";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {};
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {};
                readonly version: 1;
            };
        };
        readonly settings: {
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/interfaces/IRenzo.sol": "IRenzoOracle";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IRenzo.sol": {
                readonly keccak256: "0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00";
                readonly urls: readonly ["bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d", "dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IRenzo.sol";
        readonly id: 11675;
        readonly exportedSymbols: {
            readonly IDepositQueue: readonly [11674];
            readonly IERC20: readonly [9666];
            readonly IRenzoOracle: readonly [11663];
            readonly IRestakeManager: readonly [11608];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:2264:103";
        readonly nodes: readonly [{
            readonly id: 11576;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:103";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11578;
            readonly nodeType: "ImportDirective";
            readonly src: "64:38:103";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IERC20.sol";
            readonly file: "./IERC20.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 11675;
            readonly sourceUnit: 9667;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 11577;
                    readonly name: "IERC20";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 9666;
                    readonly src: "73:6:103";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 11608;
            readonly nodeType: "ContractDefinition";
            readonly src: "104:1246:103";
            readonly nodes: readonly [{
                readonly id: 11584;
                readonly nodeType: "FunctionDefinition";
                readonly src: "289:49:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11579;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "136:148:103";
                    readonly text: " @notice Returns the ezETH token contract address\n @dev Getter for public state variable of the ezETH token contract address";
                };
                readonly functionSelector: "13a73c78";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "ezETH";
                readonly nameLocation: "298:5:103";
                readonly parameters: {
                    readonly id: 11580;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "303:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11583;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11582;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11584;
                        readonly src: "329:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11581;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "329:7:103";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "328:9:103";
                };
                readonly scope: 11608;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11590;
                readonly nodeType: "FunctionDefinition";
                readonly src: "499:55:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11585;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "344:150:103";
                    readonly text: " @notice Returns the renzo oracle contract address\n @dev Getter for public state variable of the renzo oracle contract address";
                };
                readonly functionSelector: "892866a4";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "renzoOracle";
                readonly nameLocation: "508:11:103";
                readonly parameters: {
                    readonly id: 11586;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "519:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11589;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11588;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11590;
                        readonly src: "545:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11587;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "545:7:103";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "544:9:103";
                };
                readonly scope: 11608;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11594;
                readonly nodeType: "FunctionDefinition";
                readonly src: "756:39:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11591;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "560:191:103";
                    readonly text: " @notice  Allows a user to deposit ETH into the protocol and get back ezETH\n @dev     Convenience function to deposit without a referral ID and backwards compatibility";
                };
                readonly functionSelector: "f6326fb3";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "depositETH";
                readonly nameLocation: "765:10:103";
                readonly parameters: {
                    readonly id: 11592;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "775:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11593;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "794:0:103";
                };
                readonly scope: 11608;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11607;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:119:103";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11595;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "801:423:103";
                    readonly text: "@dev This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.\n @return operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array\n @return operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array\n @return totalTVL The total TVL across all operator delegators.";
                };
                readonly functionSelector: "ff9969cd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTVLs";
                readonly nameLocation: "1238:13:103";
                readonly parameters: {
                    readonly id: 11596;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1251:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11606;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11600;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11607;
                        readonly src: "1301:18:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_array$_t_uint256_$dyn_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "uint256[][]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly baseType: {
                                    readonly id: 11597;
                                    readonly name: "uint256";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "1301:7:103";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 11598;
                                readonly nodeType: "ArrayTypeName";
                                readonly src: "1301:9:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                    readonly typeString: "uint256[]";
                                };
                            };
                            readonly id: 11599;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1301:11:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_array$_t_uint256_$dyn_storage_$dyn_storage_ptr";
                                readonly typeString: "uint256[][]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11603;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11607;
                        readonly src: "1321:16:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11601;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1321:7:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 11602;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1321:9:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11605;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11607;
                        readonly src: "1339:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11604;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1339:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1300:47:103";
                };
                readonly scope: 11608;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRestakeManager";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11608];
            readonly name: "IRestakeManager";
            readonly nameLocation: "114:15:103";
            readonly scope: 11675;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 11663;
            readonly nodeType: "ContractDefinition";
            readonly src: "1352:784:103";
            readonly nodes: readonly [{
                readonly id: 11618;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1381:113:103";
                readonly nodes: readonly [];
                readonly functionSelector: "0052e3fd";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenValue";
                readonly nameLocation: "1390:16:103";
                readonly parameters: {
                    readonly id: 11614;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11611;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1423:6:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11618;
                        readonly src: "1416:13:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 11610;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11609;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1416:6:103"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 9666;
                                readonly src: "1416:6:103";
                            };
                            readonly referencedDeclaration: 9666;
                            readonly src: "1416:6:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11613;
                        readonly mutability: "mutable";
                        readonly name: "_balance";
                        readonly nameLocation: "1447:8:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11618;
                        readonly src: "1439:16:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11612;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1439:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1406:55:103";
                };
                readonly returnParameters: {
                    readonly id: 11617;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11616;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11618;
                        readonly src: "1485:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11615;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1485:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1484:9:103";
                };
                readonly scope: 11663;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11628;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1500:121:103";
                readonly nodes: readonly [];
                readonly functionSelector: "37933625";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenAmountFromValue";
                readonly nameLocation: "1509:26:103";
                readonly parameters: {
                    readonly id: 11624;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11621;
                        readonly mutability: "mutable";
                        readonly name: "_token";
                        readonly nameLocation: "1552:6:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11628;
                        readonly src: "1545:13:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IERC20_$9666";
                            readonly typeString: "contract IERC20";
                        };
                        readonly typeName: {
                            readonly id: 11620;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 11619;
                                readonly name: "IERC20";
                                readonly nameLocations: readonly ["1545:6:103"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 9666;
                                readonly src: "1545:6:103";
                            };
                            readonly referencedDeclaration: 9666;
                            readonly src: "1545:6:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                readonly typeString: "contract IERC20";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11623;
                        readonly mutability: "mutable";
                        readonly name: "_value";
                        readonly nameLocation: "1576:6:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11628;
                        readonly src: "1568:14:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11622;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1568:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1535:53:103";
                };
                readonly returnParameters: {
                    readonly id: 11627;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11626;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11628;
                        readonly src: "1612:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11625;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1612:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1611:9:103";
                };
                readonly scope: 11663;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11640;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1627:134:103";
                readonly nodes: readonly [];
                readonly functionSelector: "ba28a571";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lookupTokenValues";
                readonly nameLocation: "1636:17:103";
                readonly parameters: {
                    readonly id: 11636;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11632;
                        readonly mutability: "mutable";
                        readonly name: "_tokens";
                        readonly nameLocation: "1679:7:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11640;
                        readonly src: "1663:23:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_contract$_IERC20_$9666_$dyn_memory_ptr";
                            readonly typeString: "contract IERC20[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11630;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 11629;
                                    readonly name: "IERC20";
                                    readonly nameLocations: readonly ["1663:6:103"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 9666;
                                    readonly src: "1663:6:103";
                                };
                                readonly referencedDeclaration: 9666;
                                readonly src: "1663:6:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_IERC20_$9666";
                                    readonly typeString: "contract IERC20";
                                };
                            };
                            readonly id: 11631;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1663:8:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_contract$_IERC20_$9666_$dyn_storage_ptr";
                                readonly typeString: "contract IERC20[]";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11635;
                        readonly mutability: "mutable";
                        readonly name: "_balances";
                        readonly nameLocation: "1713:9:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11640;
                        readonly src: "1696:26:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 11633;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1696:7:103";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 11634;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1696:9:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1653:75:103";
                };
                readonly returnParameters: {
                    readonly id: 11639;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11638;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11640;
                        readonly src: "1752:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11637;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1752:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1751:9:103";
                };
                readonly scope: 11663;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11651;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1767:178:103";
                readonly nodes: readonly [];
                readonly functionSelector: "8f686e6a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateMintAmount";
                readonly nameLocation: "1776:19:103";
                readonly parameters: {
                    readonly id: 11647;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11642;
                        readonly mutability: "mutable";
                        readonly name: "_currentValueInProtocol";
                        readonly nameLocation: "1813:23:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11651;
                        readonly src: "1805:31:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11641;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1805:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11644;
                        readonly mutability: "mutable";
                        readonly name: "_newValueAdded";
                        readonly nameLocation: "1854:14:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11651;
                        readonly src: "1846:22:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11643;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1846:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11646;
                        readonly mutability: "mutable";
                        readonly name: "_existingEzETHSupply";
                        readonly nameLocation: "1886:20:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11651;
                        readonly src: "1878:28:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11645;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1878:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1795:117:103";
                };
                readonly returnParameters: {
                    readonly id: 11650;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11649;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11651;
                        readonly src: "1936:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11648;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1936:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1935:9:103";
                };
                readonly scope: 11663;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11662;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1951:183:103";
                readonly nodes: readonly [];
                readonly functionSelector: "c5c83cb0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateRedeemAmount";
                readonly nameLocation: "1960:21:103";
                readonly parameters: {
                    readonly id: 11658;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11653;
                        readonly mutability: "mutable";
                        readonly name: "_ezETHBeingBurned";
                        readonly nameLocation: "1999:17:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11662;
                        readonly src: "1991:25:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11652;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1991:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11655;
                        readonly mutability: "mutable";
                        readonly name: "_existingEzETHSupply";
                        readonly nameLocation: "2034:20:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11662;
                        readonly src: "2026:28:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11654;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2026:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 11657;
                        readonly mutability: "mutable";
                        readonly name: "_currentValueInProtocol";
                        readonly nameLocation: "2072:23:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11662;
                        readonly src: "2064:31:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11656;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2064:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1981:120:103";
                };
                readonly returnParameters: {
                    readonly id: 11661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11660;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11662;
                        readonly src: "2125:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11659;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2125:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2124:9:103";
                };
                readonly scope: 11663;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRenzoOracle";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11663];
            readonly name: "IRenzoOracle";
            readonly nameLocation: "1362:12:103";
            readonly scope: 11675;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 11674;
            readonly nodeType: "ContractDefinition";
            readonly src: "2138:164:103";
            readonly nodes: readonly [{
                readonly id: 11666;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2168:51:103";
                readonly nodes: readonly [];
                readonly functionSelector: "d123ccd5";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "depositETHFromProtocol";
                readonly nameLocation: "2177:22:103";
                readonly parameters: {
                    readonly id: 11664;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2199:2:103";
                };
                readonly returnParameters: {
                    readonly id: 11665;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2218:0:103";
                };
                readonly scope: 11674;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11673;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2225:75:103";
                readonly nodes: readonly [];
                readonly functionSelector: "649aca4a";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "totalEarned";
                readonly nameLocation: "2234:11:103";
                readonly parameters: {
                    readonly id: 11669;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11668;
                        readonly mutability: "mutable";
                        readonly name: "tokenAddress";
                        readonly nameLocation: "2254:12:103";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11673;
                        readonly src: "2246:20:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 11667;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2246:7:103";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2245:22:103";
                };
                readonly returnParameters: {
                    readonly id: 11672;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11671;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11673;
                        readonly src: "2291:7:103";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 11670;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2291:7:103";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2290:9:103";
                };
                readonly scope: 11674;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IDepositQueue";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11674];
            readonly name: "IDepositQueue";
            readonly nameLocation: "2148:13:103";
            readonly scope: 11675;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 103;
};
//# sourceMappingURL=IRenzoOracle.d.ts.map