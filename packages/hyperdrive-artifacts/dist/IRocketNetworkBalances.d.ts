export declare const IRocketNetworkBalances: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_totalEth";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_stakingEth";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_rethSupply";
            readonly type: "uint256";
        }];
        readonly name: "executeUpdateBalances";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getBalancesBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getETHUtilizationRate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLatestReportableBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getStakingETHBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalETHBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getTotalRETHSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_block";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_total";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_staking";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_rethSupply";
            readonly type: "uint256";
        }];
        readonly name: "submitBalances";
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
        readonly "executeUpdateBalances(uint256,uint256,uint256,uint256)": "56ff3625";
        readonly "getBalancesBlock()": "9100c13d";
        readonly "getETHUtilizationRate()": "9dba66af";
        readonly "getLatestReportableBlock()": "a9bb16ed";
        readonly "getStakingETHBalance()": "f1eda634";
        readonly "getTotalETHBalance()": "964d042c";
        readonly "getTotalRETHSupply()": "c4c8d0ad";
        readonly "submitBalances(uint256,uint256,uint256,uint256)": "32db5470";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_stakingEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rethSupply\",\"type\":\"uint256\"}],\"name\":\"executeUpdateBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalancesBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getETHUtilizationRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestReportableBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakingETHBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalETHBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalRETHSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_total\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_staking\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rethSupply\",\"type\":\"uint256\"}],\"name\":\"submitBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketNetworkBalances.sol\":\"IRocketNetworkBalances\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketNetworkBalances.sol\":{\"keccak256\":\"0xd97697fbb8156373f0cbcdfcbbfdd9a0a872e35e924031b61f53696693e780ef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://300dd50b3f96c9f65e6cc1c677a2faa8b2542f0366041d85d4e83060ad530fb8\",\"dweb:/ipfs/QmQnNPYvWNDGqPyQ6ugP3LWJR9cEftteCYouHJ51xckFXa\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_block";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_totalEth";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_stakingEth";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_rethSupply";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "executeUpdateBalances";
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getBalancesBlock";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getETHUtilizationRate";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getLatestReportableBlock";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getStakingETHBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTotalETHBalance";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getTotalRETHSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_block";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_total";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_staking";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_rethSupply";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "submitBalances";
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
                readonly "contracts/src/interfaces/IRocketNetworkBalances.sol": "IRocketNetworkBalances";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IRocketNetworkBalances.sol": {
                readonly keccak256: "0xd97697fbb8156373f0cbcdfcbbfdd9a0a872e35e924031b61f53696693e780ef";
                readonly urls: readonly ["bzz-raw://300dd50b3f96c9f65e6cc1c677a2faa8b2542f0366041d85d4e83060ad530fb8", "dweb:/ipfs/QmQnNPYvWNDGqPyQ6ugP3LWJR9cEftteCYouHJ51xckFXa"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IRocketNetworkBalances.sol";
        readonly id: 12121;
        readonly exportedSymbols: {
            readonly IRocketNetworkBalances: readonly [12120];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:787:106";
        readonly nodes: readonly [{
            readonly id: 12067;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:106";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12120;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:761:106";
            readonly nodes: readonly [{
                readonly id: 12072;
                readonly nodeType: "FunctionDefinition";
                readonly src: "103:60:106";
                readonly nodes: readonly [];
                readonly functionSelector: "9100c13d";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getBalancesBlock";
                readonly nameLocation: "112:16:106";
                readonly parameters: {
                    readonly id: 12068;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "128:2:106";
                };
                readonly returnParameters: {
                    readonly id: 12071;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12070;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12072;
                        readonly src: "154:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12069;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "154:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "153:9:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12077;
                readonly nodeType: "FunctionDefinition";
                readonly src: "169:68:106";
                readonly nodes: readonly [];
                readonly functionSelector: "a9bb16ed";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getLatestReportableBlock";
                readonly nameLocation: "178:24:106";
                readonly parameters: {
                    readonly id: 12073;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "202:2:106";
                };
                readonly returnParameters: {
                    readonly id: 12076;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12075;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12077;
                        readonly src: "228:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12074;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "228:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "227:9:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12082;
                readonly nodeType: "FunctionDefinition";
                readonly src: "243:62:106";
                readonly nodes: readonly [];
                readonly functionSelector: "964d042c";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalETHBalance";
                readonly nameLocation: "252:18:106";
                readonly parameters: {
                    readonly id: 12078;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "270:2:106";
                };
                readonly returnParameters: {
                    readonly id: 12081;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12080;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12082;
                        readonly src: "296:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12079;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "296:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "295:9:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12087;
                readonly nodeType: "FunctionDefinition";
                readonly src: "311:64:106";
                readonly nodes: readonly [];
                readonly functionSelector: "f1eda634";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getStakingETHBalance";
                readonly nameLocation: "320:20:106";
                readonly parameters: {
                    readonly id: 12083;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "340:2:106";
                };
                readonly returnParameters: {
                    readonly id: 12086;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12085;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12087;
                        readonly src: "366:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12084;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "366:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "365:9:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12092;
                readonly nodeType: "FunctionDefinition";
                readonly src: "381:62:106";
                readonly nodes: readonly [];
                readonly functionSelector: "c4c8d0ad";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalRETHSupply";
                readonly nameLocation: "390:18:106";
                readonly parameters: {
                    readonly id: 12088;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "408:2:106";
                };
                readonly returnParameters: {
                    readonly id: 12091;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12090;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12092;
                        readonly src: "434:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12089;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "434:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "433:9:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12097;
                readonly nodeType: "FunctionDefinition";
                readonly src: "449:65:106";
                readonly nodes: readonly [];
                readonly functionSelector: "9dba66af";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getETHUtilizationRate";
                readonly nameLocation: "458:21:106";
                readonly parameters: {
                    readonly id: 12093;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "479:2:106";
                };
                readonly returnParameters: {
                    readonly id: 12096;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12095;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12097;
                        readonly src: "505:7:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12094;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "505:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "504:9:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12108;
                readonly nodeType: "FunctionDefinition";
                readonly src: "520:142:106";
                readonly nodes: readonly [];
                readonly functionSelector: "32db5470";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "submitBalances";
                readonly nameLocation: "529:14:106";
                readonly parameters: {
                    readonly id: 12106;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12099;
                        readonly mutability: "mutable";
                        readonly name: "_block";
                        readonly nameLocation: "561:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12108;
                        readonly src: "553:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12098;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "553:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12101;
                        readonly mutability: "mutable";
                        readonly name: "_total";
                        readonly nameLocation: "585:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12108;
                        readonly src: "577:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12100;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "577:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12103;
                        readonly mutability: "mutable";
                        readonly name: "_staking";
                        readonly nameLocation: "609:8:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12108;
                        readonly src: "601:16:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12102;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "601:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12105;
                        readonly mutability: "mutable";
                        readonly name: "_rethSupply";
                        readonly nameLocation: "635:11:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12108;
                        readonly src: "627:19:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12104;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "627:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "543:109:106";
                };
                readonly returnParameters: {
                    readonly id: 12107;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "661:0:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 12119;
                readonly nodeType: "FunctionDefinition";
                readonly src: "668:155:106";
                readonly nodes: readonly [];
                readonly functionSelector: "56ff3625";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "executeUpdateBalances";
                readonly nameLocation: "677:21:106";
                readonly parameters: {
                    readonly id: 12117;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12110;
                        readonly mutability: "mutable";
                        readonly name: "_block";
                        readonly nameLocation: "716:6:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12119;
                        readonly src: "708:14:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12109;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "708:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12112;
                        readonly mutability: "mutable";
                        readonly name: "_totalEth";
                        readonly nameLocation: "740:9:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12119;
                        readonly src: "732:17:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12111;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "732:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12114;
                        readonly mutability: "mutable";
                        readonly name: "_stakingEth";
                        readonly nameLocation: "767:11:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12119;
                        readonly src: "759:19:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12113;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "759:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 12116;
                        readonly mutability: "mutable";
                        readonly name: "_rethSupply";
                        readonly nameLocation: "796:11:106";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12119;
                        readonly src: "788:19:106";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 12115;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "788:7:106";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "698:115:106";
                };
                readonly returnParameters: {
                    readonly id: 12118;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "822:0:106";
                };
                readonly scope: 12120;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IRocketNetworkBalances";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [12120];
            readonly name: "IRocketNetworkBalances";
            readonly nameLocation: "74:22:106";
            readonly scope: 12121;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 106;
};
//# sourceMappingURL=IRocketNetworkBalances.d.ts.map