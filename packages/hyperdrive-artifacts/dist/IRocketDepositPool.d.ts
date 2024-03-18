export declare const IRocketDepositPool: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "assignDeposits";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getExcessBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMaximumDepositAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNodeBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getUserBalance";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "maybeAssignDeposits";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "nodeCreditWithdrawal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_totalAmount";
            readonly type: "uint256";
        }];
        readonly name: "nodeDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recycleDissolvedDeposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recycleExcessCollateral";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "recycleLiquidatedStake";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawExcessBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly "assignDeposits()": "27c8f193";
        readonly "deposit()": "d0e30db0";
        readonly "getBalance()": "12065fe0";
        readonly "getExcessBalance()": "888b042f";
        readonly "getMaximumDepositAmount()": "1eddb626";
        readonly "getNodeBalance()": "1e35fed8";
        readonly "getUserBalance()": "b7013dc1";
        readonly "maybeAssignDeposits()": "3b36f592";
        readonly "nodeCreditWithdrawal(uint256)": "606b6497";
        readonly "nodeDeposit(uint256)": "22b1751d";
        readonly "recycleDissolvedDeposit()": "72f5158d";
        readonly "recycleExcessCollateral()": "db82047b";
        readonly "recycleLiquidatedStake()": "1b7dd4c0";
        readonly "withdrawExcessBalance(uint256)": "63a5db9e";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"assignDeposits\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getExcessBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMaximumDepositAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getNodeBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUserBalance\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maybeAssignDeposits\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"nodeCreditWithdrawal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalAmount\",\"type\":\"uint256\"}],\"name\":\"nodeDeposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleDissolvedDeposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleExcessCollateral\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleLiquidatedStake\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdrawExcessBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketDepositPool.sol\":\"IRocketDepositPool\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketDepositPool.sol\":{\"keccak256\":\"0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff\",\"dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "assignDeposits";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "deposit";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getExcessBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getMaximumDepositAmount";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getNodeBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getUserBalance";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "maybeAssignDeposits";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "nodeCreditWithdrawal";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_totalAmount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "nodeDeposit";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "recycleDissolvedDeposit";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "recycleExcessCollateral";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "recycleLiquidatedStake";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_amount";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "withdrawExcessBalance";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "contracts/src/interfaces/IRocketDepositPool.sol": "IRocketDepositPool";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IRocketDepositPool.sol": {
                readonly keccak256: "0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a";
                readonly urls: readonly ["bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff", "dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IRocketDepositPool.sol";
        readonly id: 12369;
        readonly exportedSymbols: {
            readonly IRocketDepositPool: readonly [12368];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:891:104";
        readonly nodes: readonly [{
            readonly id: 12307;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:104";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12368;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:865:104";
            readonly nodes: readonly [{
                readonly id: 12312;
                readonly nodeType: "FunctionDefinition";
                readonly src: "99:54:104";
                readonly nodes: readonly [];
                readonly functionSelector: "12065fe0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBalance";
                readonly nameLocation: "108:10:104";
                readonly parameters: {
                    readonly id: 12308;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "118:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12311;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12310;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12312;
                        readonly src: "144:7:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12309;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "144:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "143:9:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12317;
                readonly nodeType: "FunctionDefinition";
                readonly src: "159:58:104";
                readonly nodes: readonly [];
                readonly functionSelector: "1e35fed8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getNodeBalance";
                readonly nameLocation: "168:14:104";
                readonly parameters: {
                    readonly id: 12313;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "182:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12316;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12315;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12317;
                        readonly src: "208:7:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12314;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "208:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "207:9:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12322;
                readonly nodeType: "FunctionDefinition";
                readonly src: "223:57:104";
                readonly nodes: readonly [];
                readonly functionSelector: "b7013dc1";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getUserBalance";
                readonly nameLocation: "232:14:104";
                readonly parameters: {
                    readonly id: 12318;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "246:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12321;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12320;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12322;
                        readonly src: "272:6:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 12319;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "272:6:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "271:8:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12327;
                readonly nodeType: "FunctionDefinition";
                readonly src: "286:60:104";
                readonly nodes: readonly [];
                readonly functionSelector: "888b042f";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getExcessBalance";
                readonly nameLocation: "295:16:104";
                readonly parameters: {
                    readonly id: 12323;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "311:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12326;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12325;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12327;
                        readonly src: "337:7:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12324;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "337:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "336:9:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12330;
                readonly nodeType: "FunctionDefinition";
                readonly src: "352:36:104";
                readonly nodes: readonly [];
                readonly functionSelector: "d0e30db0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "deposit";
                readonly nameLocation: "361:7:104";
                readonly parameters: {
                    readonly id: 12328;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "368:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12329;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "387:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12335;
                readonly nodeType: "FunctionDefinition";
                readonly src: "394:67:104";
                readonly nodes: readonly [];
                readonly functionSelector: "1eddb626";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getMaximumDepositAmount";
                readonly nameLocation: "403:23:104";
                readonly parameters: {
                    readonly id: 12331;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "426:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12334;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12333;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12335;
                        readonly src: "452:7:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12332;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "452:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "451:9:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12340;
                readonly nodeType: "FunctionDefinition";
                readonly src: "467:60:104";
                readonly nodes: readonly [];
                readonly functionSelector: "22b1751d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "nodeDeposit";
                readonly nameLocation: "476:11:104";
                readonly parameters: {
                    readonly id: 12338;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12337;
                        readonly mutability: "mutable";
                        readonly name: "_totalAmount";
                        readonly nameLocation: "496:12:104";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12340;
                        readonly src: "488:20:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12336;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "488:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "487:22:104";
                };
                readonly returnParameters: {
                    readonly id: 12339;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "526:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12345;
                readonly nodeType: "FunctionDefinition";
                readonly src: "533:56:104";
                readonly nodes: readonly [];
                readonly functionSelector: "606b6497";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "nodeCreditWithdrawal";
                readonly nameLocation: "542:20:104";
                readonly parameters: {
                    readonly id: 12343;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12342;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "571:7:104";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12345;
                        readonly src: "563:15:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12341;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "563:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "562:17:104";
                };
                readonly returnParameters: {
                    readonly id: 12344;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "588:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12348;
                readonly nodeType: "FunctionDefinition";
                readonly src: "595:52:104";
                readonly nodes: readonly [];
                readonly functionSelector: "72f5158d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "recycleDissolvedDeposit";
                readonly nameLocation: "604:23:104";
                readonly parameters: {
                    readonly id: 12346;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "627:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12347;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "646:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12351;
                readonly nodeType: "FunctionDefinition";
                readonly src: "653:52:104";
                readonly nodes: readonly [];
                readonly functionSelector: "db82047b";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "recycleExcessCollateral";
                readonly nameLocation: "662:23:104";
                readonly parameters: {
                    readonly id: 12349;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "685:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12350;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "704:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12354;
                readonly nodeType: "FunctionDefinition";
                readonly src: "711:51:104";
                readonly nodes: readonly [];
                readonly functionSelector: "1b7dd4c0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "recycleLiquidatedStake";
                readonly nameLocation: "720:22:104";
                readonly parameters: {
                    readonly id: 12352;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "742:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12353;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "761:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "payable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12357;
                readonly nodeType: "FunctionDefinition";
                readonly src: "768:35:104";
                readonly nodes: readonly [];
                readonly functionSelector: "27c8f193";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "assignDeposits";
                readonly nameLocation: "777:14:104";
                readonly parameters: {
                    readonly id: 12355;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "791:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12356;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "802:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12362;
                readonly nodeType: "FunctionDefinition";
                readonly src: "809:55:104";
                readonly nodes: readonly [];
                readonly functionSelector: "3b36f592";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "maybeAssignDeposits";
                readonly nameLocation: "818:19:104";
                readonly parameters: {
                    readonly id: 12358;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "837:2:104";
                };
                readonly returnParameters: {
                    readonly id: 12361;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12360;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12362;
                        readonly src: "858:4:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 12359;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "858:4:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "857:6:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12367;
                readonly nodeType: "FunctionDefinition";
                readonly src: "870:57:104";
                readonly nodes: readonly [];
                readonly functionSelector: "63a5db9e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "withdrawExcessBalance";
                readonly nameLocation: "879:21:104";
                readonly parameters: {
                    readonly id: 12365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12364;
                        readonly mutability: "mutable";
                        readonly name: "_amount";
                        readonly nameLocation: "909:7:104";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12367;
                        readonly src: "901:15:104";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12363;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "901:7:104";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "900:17:104";
                };
                readonly returnParameters: {
                    readonly id: 12366;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "926:0:104";
                };
                readonly scope: 12368;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRocketDepositPool";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [12368];
            readonly name: "IRocketDepositPool";
            readonly nameLocation: "74:18:104";
            readonly scope: 12369;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 104;
};
//# sourceMappingURL=IRocketDepositPool.d.ts.map