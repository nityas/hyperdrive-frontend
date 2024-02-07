export declare const StdInvariant: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "excludeArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "excludeSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "excludedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifactSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifactSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetArtifacts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedArtifacts_";
            readonly type: "string[]";
            readonly internalType: "string[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetContracts";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedContracts_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSelectors";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSelectors_";
            readonly type: "tuple[]";
            readonly internalType: "struct StdInvariant.FuzzSelector[]";
            readonly components: readonly [{
                readonly name: "addr";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "selectors";
                readonly type: "bytes4[]";
                readonly internalType: "bytes4[]";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "targetSenders";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "targetedSenders_";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly stateMutability: "view";
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
        readonly "excludeArtifacts()": "b5508aa9";
        readonly "excludeContracts()": "e20c9f71";
        readonly "excludeSenders()": "1ed7831c";
        readonly "targetArtifactSelectors()": "66d9a9a0";
        readonly "targetArtifacts()": "85226c81";
        readonly "targetContracts()": "3f7286f4";
        readonly "targetSelectors()": "916a17c6";
        readonly "targetSenders()": "3e5e3c23";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "excludeArtifacts";
                readonly outputs: readonly [{
                    readonly internalType: "string[]";
                    readonly name: "excludedArtifacts_";
                    readonly type: "string[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "excludeContracts";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "excludedContracts_";
                    readonly type: "address[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "excludeSenders";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "excludedSenders_";
                    readonly type: "address[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetArtifactSelectors";
                readonly outputs: readonly [{
                    readonly internalType: "struct StdInvariant.FuzzSelector[]";
                    readonly name: "targetedArtifactSelectors_";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "addr";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4[]";
                        readonly name: "selectors";
                        readonly type: "bytes4[]";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetArtifacts";
                readonly outputs: readonly [{
                    readonly internalType: "string[]";
                    readonly name: "targetedArtifacts_";
                    readonly type: "string[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetContracts";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "targetedContracts_";
                    readonly type: "address[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetSelectors";
                readonly outputs: readonly [{
                    readonly internalType: "struct StdInvariant.FuzzSelector[]";
                    readonly name: "targetedSelectors_";
                    readonly type: "tuple[]";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "addr";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes4[]";
                        readonly name: "selectors";
                        readonly type: "bytes4[]";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "targetSenders";
                readonly outputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "targetedSenders_";
                    readonly type: "address[]";
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
            readonly remappings: readonly ["@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/", "aave-v3-core/=lib/aave-v3-core/", "ds-test/=lib/forge-std/lib/ds-test/src/", "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/", "forge-std/=lib/forge-std/src/", "openzeppelin-contracts/=lib/openzeppelin-contracts/", "openzeppelin/=lib/openzeppelin-contracts/contracts/", "solmate/=lib/solmate/src/"];
            readonly optimizer: {
                readonly enabled: true;
                readonly runs: 200;
            };
            readonly metadata: {
                readonly bytecodeHash: "ipfs";
            };
            readonly compilationTarget: {
                readonly "lib/forge-std/src/StdInvariant.sol": "StdInvariant";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdInvariant.sol": {
                readonly keccak256: "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1";
                readonly urls: readonly ["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c", "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/StdInvariant.sol";
        readonly id: 30396;
        readonly exportedSymbols: {
            readonly StdInvariant: readonly [30395];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:3043:101";
        readonly nodes: readonly [{
            readonly id: 30173;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:101";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 30174;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:101";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 30395;
            readonly nodeType: "ContractDefinition";
            readonly src: "100:2974:101";
            readonly nodes: readonly [{
                readonly id: 30180;
                readonly nodeType: "StructDefinition";
                readonly src: "137:77:101";
                readonly nodes: readonly [];
                readonly canonicalName: "StdInvariant.FuzzSelector";
                readonly members: readonly [{
                    readonly constant: false;
                    readonly id: 30176;
                    readonly mutability: "mutable";
                    readonly name: "addr";
                    readonly nameLocation: "175:4:101";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 30180;
                    readonly src: "167:12:101";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                    readonly typeName: {
                        readonly id: 30175;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "167:7:101";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly visibility: "internal";
                }, {
                    readonly constant: false;
                    readonly id: 30179;
                    readonly mutability: "mutable";
                    readonly name: "selectors";
                    readonly nameLocation: "198:9:101";
                    readonly nodeType: "VariableDeclaration";
                    readonly scope: 30180;
                    readonly src: "189:18:101";
                    readonly stateVariable: false;
                    readonly storageLocation: "default";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                        readonly typeString: "bytes4[]";
                    };
                    readonly typeName: {
                        readonly baseType: {
                            readonly id: 30177;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "189:6:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly id: 30178;
                        readonly nodeType: "ArrayTypeName";
                        readonly src: "189:8:101";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes4_$dyn_storage_ptr";
                            readonly typeString: "bytes4[]";
                        };
                    };
                    readonly visibility: "internal";
                }];
                readonly name: "FuzzSelector";
                readonly nameLocation: "144:12:101";
                readonly scope: 30395;
                readonly visibility: "public";
            }, {
                readonly id: 30183;
                readonly nodeType: "VariableDeclaration";
                readonly src: "220:36:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedContracts";
                readonly nameLocation: "238:18:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30181;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "220:7:101";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 30182;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "220:9:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30186;
                readonly nodeType: "VariableDeclaration";
                readonly src: "262:34:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedSenders";
                readonly nameLocation: "280:16:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30184;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "262:7:101";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 30185;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "262:9:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30189;
                readonly nodeType: "VariableDeclaration";
                readonly src: "302:36:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedContracts";
                readonly nameLocation: "320:18:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30187;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "302:7:101";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 30188;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "302:9:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30192;
                readonly nodeType: "VariableDeclaration";
                readonly src: "344:34:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSenders";
                readonly nameLocation: "362:16:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                    readonly typeString: "address[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30190;
                        readonly name: "address";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "344:7:101";
                        readonly stateMutability: "nonpayable";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    };
                    readonly id: 30191;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "344:9:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                        readonly typeString: "address[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30195;
                readonly nodeType: "VariableDeclaration";
                readonly src: "385:35:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_excludedArtifacts";
                readonly nameLocation: "402:18:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30193;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "385:6:101";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 30194;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "385:8:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30198;
                readonly nodeType: "VariableDeclaration";
                readonly src: "426:35:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifacts";
                readonly nameLocation: "443:18:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                    readonly typeString: "string[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30196;
                        readonly name: "string";
                        readonly nodeType: "ElementaryTypeName";
                        readonly src: "426:6:101";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_storage_ptr";
                            readonly typeString: "string";
                        };
                    };
                    readonly id: 30197;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "426:8:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                        readonly typeString: "string[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30202;
                readonly nodeType: "VariableDeclaration";
                readonly src: "468:49:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedArtifactSelectors";
                readonly nameLocation: "491:26:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30200;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 30199;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["468:12:101"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 30180;
                            readonly src: "468:12:101";
                        };
                        readonly referencedDeclaration: 30180;
                        readonly src: "468:12:101";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 30201;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "468:14:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30206;
                readonly nodeType: "VariableDeclaration";
                readonly src: "523:41:101";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "_targetedSelectors";
                readonly nameLocation: "546:18:101";
                readonly scope: 30395;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage";
                    readonly typeString: "struct StdInvariant.FuzzSelector[]";
                };
                readonly typeName: {
                    readonly baseType: {
                        readonly id: 30204;
                        readonly nodeType: "UserDefinedTypeName";
                        readonly pathNode: {
                            readonly id: 30203;
                            readonly name: "FuzzSelector";
                            readonly nameLocations: readonly ["523:12:101"];
                            readonly nodeType: "IdentifierPath";
                            readonly referencedDeclaration: 30180;
                            readonly src: "523:12:101";
                        };
                        readonly referencedDeclaration: 30180;
                        readonly src: "523:12:101";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_storage_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                    };
                    readonly id: 30205;
                    readonly nodeType: "ArrayTypeName";
                    readonly src: "523:14:101";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr";
                        readonly typeString: "struct StdInvariant.FuzzSelector[]";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 30218;
                readonly nodeType: "FunctionDefinition";
                readonly src: "649:126:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30217;
                    readonly nodeType: "Block";
                    readonly src: "713:62:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30214;
                                readonly name: "newExcludedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30208;
                                readonly src: "747:20:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 30211;
                                    readonly name: "_excludedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30183;
                                    readonly src: "723:18:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 30213;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "742:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "723:23:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 30215;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "723:45:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30216;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "723:45:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContract";
                readonly nameLocation: "658:15:101";
                readonly parameters: {
                    readonly id: 30209;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30208;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedContract_";
                        readonly nameLocation: "682:20:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30218;
                        readonly src: "674:28:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 30207;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "674:7:101";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "673:30:101";
                };
                readonly returnParameters: {
                    readonly id: 30210;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "713:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30230;
                readonly nodeType: "FunctionDefinition";
                readonly src: "781:118:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30229;
                    readonly nodeType: "Block";
                    readonly src: "841:58:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30226;
                                readonly name: "newExcludedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30220;
                                readonly src: "873:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 30223;
                                    readonly name: "_excludedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30186;
                                    readonly src: "851:16:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 30225;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "868:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "851:21:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 30227;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "851:41:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30228;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "851:41:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSender";
                readonly nameLocation: "790:13:101";
                readonly parameters: {
                    readonly id: 30221;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30220;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedSender_";
                        readonly nameLocation: "812:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30230;
                        readonly src: "804:26:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 30219;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "804:7:101";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "803:28:101";
                };
                readonly returnParameters: {
                    readonly id: 30222;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "841:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30242;
                readonly nodeType: "FunctionDefinition";
                readonly src: "905:132:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30241;
                    readonly nodeType: "Block";
                    readonly src: "975:62:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30238;
                                readonly name: "newExcludedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30232;
                                readonly src: "1009:20:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 30235;
                                    readonly name: "_excludedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30195;
                                    readonly src: "985:18:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 30237;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1004:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "985:23:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 30239;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "985:45:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30240;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "985:45:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifact";
                readonly nameLocation: "914:15:101";
                readonly parameters: {
                    readonly id: 30233;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30232;
                        readonly mutability: "mutable";
                        readonly name: "newExcludedArtifact_";
                        readonly nameLocation: "944:20:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30242;
                        readonly src: "930:34:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30231;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "930:6:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "929:36:101";
                };
                readonly returnParameters: {
                    readonly id: 30234;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "975:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30254;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1043:131:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30253;
                    readonly nodeType: "Block";
                    readonly src: "1112:62:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30250;
                                readonly name: "newTargetedArtifact_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30244;
                                readonly src: "1146:20:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 30247;
                                    readonly name: "_targetedArtifacts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30198;
                                    readonly src: "1122:18:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                        readonly typeString: "string storage ref[] storage ref";
                                    };
                                };
                                readonly id: 30249;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1141:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1122:23:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (string storage ref[] storage pointer,string storage ref)";
                                };
                            };
                            readonly id: 30251;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1122:45:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30252;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1122:45:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifact";
                readonly nameLocation: "1052:14:101";
                readonly parameters: {
                    readonly id: 30245;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30244;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifact_";
                        readonly nameLocation: "1081:20:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30254;
                        readonly src: "1067:34:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 30243;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1067:6:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1066:36:101";
                };
                readonly returnParameters: {
                    readonly id: 30246;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1112:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30267;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1180:169:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30266;
                    readonly nodeType: "Block";
                    readonly src: "1271:78:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30263;
                                readonly name: "newTargetedArtifactSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30257;
                                readonly src: "1313:28:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 30260;
                                    readonly name: "_targetedArtifactSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30202;
                                    readonly src: "1281:26:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 30262;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1308:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1281:31:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$30180_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 30264;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1281:61:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30265;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1281:61:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelector";
                readonly nameLocation: "1189:22:101";
                readonly parameters: {
                    readonly id: 30258;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30257;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedArtifactSelector_";
                        readonly nameLocation: "1232:28:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30267;
                        readonly src: "1212:48:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 30256;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 30255;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1212:12:101"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 30180;
                                readonly src: "1212:12:101";
                            };
                            readonly referencedDeclaration: 30180;
                            readonly src: "1212:12:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1211:50:101";
                };
                readonly returnParameters: {
                    readonly id: 30259;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1271:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30279;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1355:125:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30278;
                    readonly nodeType: "Block";
                    readonly src: "1418:62:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30275;
                                readonly name: "newTargetedContract_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30269;
                                readonly src: "1452:20:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 30272;
                                    readonly name: "_targetedContracts";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30189;
                                    readonly src: "1428:18:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 30274;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1447:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1428:23:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 30276;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1428:45:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30277;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1428:45:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContract";
                readonly nameLocation: "1364:14:101";
                readonly parameters: {
                    readonly id: 30270;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30269;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedContract_";
                        readonly nameLocation: "1387:20:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30279;
                        readonly src: "1379:28:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 30268;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1379:7:101";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1378:30:101";
                };
                readonly returnParameters: {
                    readonly id: 30271;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1418:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30292;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1486:137:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30291;
                    readonly nodeType: "Block";
                    readonly src: "1561:62:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30288;
                                readonly name: "newTargetedSelector_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30282;
                                readonly src: "1595:20:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory";
                                }];
                                readonly expression: {
                                    readonly id: 30285;
                                    readonly name: "_targetedSelectors";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30206;
                                    readonly src: "1571:18:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage";
                                        readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                    };
                                };
                                readonly id: 30287;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1590:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1571:23:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$30180_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr_$";
                                    readonly typeString: "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)";
                                };
                            };
                            readonly id: 30289;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1571:45:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30290;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1571:45:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelector";
                readonly nameLocation: "1495:14:101";
                readonly parameters: {
                    readonly id: 30283;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30282;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSelector_";
                        readonly nameLocation: "1530:20:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30292;
                        readonly src: "1510:40:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector";
                        };
                        readonly typeName: {
                            readonly id: 30281;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 30280;
                                readonly name: "FuzzSelector";
                                readonly nameLocations: readonly ["1510:12:101"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 30180;
                                readonly src: "1510:12:101";
                            };
                            readonly referencedDeclaration: 30180;
                            readonly src: "1510:12:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1509:42:101";
                };
                readonly returnParameters: {
                    readonly id: 30284;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1561:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30304;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1629:117:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30303;
                    readonly nodeType: "Block";
                    readonly src: "1688:58:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 30300;
                                readonly name: "newTargetedSender_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30294;
                                readonly src: "1720:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 30297;
                                    readonly name: "_targetedSenders";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 30192;
                                    readonly src: "1698:16:101";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                        readonly typeString: "address[] storage ref";
                                    };
                                };
                                readonly id: 30299;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1715:4:101";
                                readonly memberName: "push";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1698:21:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$";
                                    readonly typeString: "function (address[] storage pointer,address)";
                                };
                            };
                            readonly id: 30301;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1698:41:101";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 30302;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1698:41:101";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSender";
                readonly nameLocation: "1638:12:101";
                readonly parameters: {
                    readonly id: 30295;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30294;
                        readonly mutability: "mutable";
                        readonly name: "newTargetedSender_";
                        readonly nameLocation: "1659:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30304;
                        readonly src: "1651:26:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 30293;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1651:7:101";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1650:28:101";
                };
                readonly returnParameters: {
                    readonly id: 30296;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1688:0:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 30315;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1875:141:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30314;
                    readonly nodeType: "Block";
                    readonly src: "1960:56:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30312;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30310;
                                readonly name: "excludedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30308;
                                readonly src: "1970:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30311;
                                readonly name: "_excludedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30195;
                                readonly src: "1991:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "1970:39:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 30313;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1970:39:101";
                    }];
                };
                readonly functionSelector: "b5508aa9";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeArtifacts";
                readonly nameLocation: "1884:16:101";
                readonly parameters: {
                    readonly id: 30305;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1900:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30309;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30308;
                        readonly mutability: "mutable";
                        readonly name: "excludedArtifacts_";
                        readonly nameLocation: "1940:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30315;
                        readonly src: "1924:34:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30306;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:6:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 30307;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:8:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:36:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30326;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2022:142:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30325;
                    readonly nodeType: "Block";
                    readonly src: "2108:56:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30323;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30321;
                                readonly name: "excludedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30319;
                                readonly src: "2118:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30322;
                                readonly name: "_excludedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30183;
                                readonly src: "2139:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2118:39:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 30324;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2118:39:101";
                    }];
                };
                readonly functionSelector: "e20c9f71";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeContracts";
                readonly nameLocation: "2031:16:101";
                readonly parameters: {
                    readonly id: 30316;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2047:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30320;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30319;
                        readonly mutability: "mutable";
                        readonly name: "excludedContracts_";
                        readonly nameLocation: "2088:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30326;
                        readonly src: "2071:35:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30317;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2071:7:101";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 30318;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2071:9:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2070:37:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30337;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2170:134:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30336;
                    readonly nodeType: "Block";
                    readonly src: "2252:52:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30334;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30332;
                                readonly name: "excludedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30330;
                                readonly src: "2262:16:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30333;
                                readonly name: "_excludedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30186;
                                readonly src: "2281:16:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2262:35:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 30335;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2262:35:101";
                    }];
                };
                readonly functionSelector: "1ed7831c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "excludeSenders";
                readonly nameLocation: "2179:14:101";
                readonly parameters: {
                    readonly id: 30327;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2193:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30331;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30330;
                        readonly mutability: "mutable";
                        readonly name: "excludedSenders_";
                        readonly nameLocation: "2234:16:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30337;
                        readonly src: "2217:33:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30328;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2217:7:101";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 30329;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2217:9:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2216:35:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30348;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2310:140:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30347;
                    readonly nodeType: "Block";
                    readonly src: "2394:56:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30345;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30343;
                                readonly name: "targetedArtifacts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30341;
                                readonly src: "2404:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30344;
                                readonly name: "_targetedArtifacts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30198;
                                readonly src: "2425:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage";
                                    readonly typeString: "string storage ref[] storage ref";
                                };
                            };
                            readonly src: "2404:39:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly id: 30346;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2404:39:101";
                    }];
                };
                readonly functionSelector: "85226c81";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifacts";
                readonly nameLocation: "2319:15:101";
                readonly parameters: {
                    readonly id: 30338;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2334:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30342;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30341;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifacts_";
                        readonly nameLocation: "2374:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30348;
                        readonly src: "2358:34:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30339;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2358:6:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 30340;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2358:8:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2357:36:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30360;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2456:178:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30359;
                    readonly nodeType: "Block";
                    readonly src: "2562:72:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30357;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30355;
                                readonly name: "targetedArtifactSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30353;
                                readonly src: "2572:26:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30356;
                                readonly name: "_targetedArtifactSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30202;
                                readonly src: "2601:26:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2572:55:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 30358;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2572:55:101";
                    }];
                };
                readonly functionSelector: "66d9a9a0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetArtifactSelectors";
                readonly nameLocation: "2465:23:101";
                readonly parameters: {
                    readonly id: 30349;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2488:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30354;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30353;
                        readonly mutability: "mutable";
                        readonly name: "targetedArtifactSelectors_";
                        readonly nameLocation: "2534:26:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30360;
                        readonly src: "2512:48:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30351;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 30350;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2512:12:101"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 30180;
                                    readonly src: "2512:12:101";
                                };
                                readonly referencedDeclaration: 30180;
                                readonly src: "2512:12:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 30352;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2512:14:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2511:50:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30371;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2640:141:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30370;
                    readonly nodeType: "Block";
                    readonly src: "2725:56:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30368;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30366;
                                readonly name: "targetedContracts_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30364;
                                readonly src: "2735:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30367;
                                readonly name: "_targetedContracts";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30189;
                                readonly src: "2756:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "2735:39:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 30369;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2735:39:101";
                    }];
                };
                readonly functionSelector: "3f7286f4";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetContracts";
                readonly nameLocation: "2649:15:101";
                readonly parameters: {
                    readonly id: 30361;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2664:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30365;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30364;
                        readonly mutability: "mutable";
                        readonly name: "targetedContracts_";
                        readonly nameLocation: "2705:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30371;
                        readonly src: "2688:35:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30362;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2688:7:101";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 30363;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2688:9:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2687:37:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30383;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2787:146:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30382;
                    readonly nodeType: "Block";
                    readonly src: "2877:56:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30380;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30378;
                                readonly name: "targetedSelectors_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30376;
                                readonly src: "2887:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30379;
                                readonly name: "_targetedSelectors";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30206;
                                readonly src: "2908:18:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage";
                                    readonly typeString: "struct StdInvariant.FuzzSelector storage ref[] storage ref";
                                };
                            };
                            readonly src: "2887:39:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector memory[] memory";
                            };
                        };
                        readonly id: 30381;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2887:39:101";
                    }];
                };
                readonly functionSelector: "916a17c6";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSelectors";
                readonly nameLocation: "2796:15:101";
                readonly parameters: {
                    readonly id: 30372;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2811:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30377;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30376;
                        readonly mutability: "mutable";
                        readonly name: "targetedSelectors_";
                        readonly nameLocation: "2857:18:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30383;
                        readonly src: "2835:40:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "struct StdInvariant.FuzzSelector[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30374;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 30373;
                                    readonly name: "FuzzSelector";
                                    readonly nameLocations: readonly ["2835:12:101"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 30180;
                                    readonly src: "2835:12:101";
                                };
                                readonly referencedDeclaration: 30180;
                                readonly src: "2835:12:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_FuzzSelector_$30180_storage_ptr";
                                    readonly typeString: "struct StdInvariant.FuzzSelector";
                                };
                            };
                            readonly id: 30375;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2835:14:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_struct$_FuzzSelector_$30180_storage_$dyn_storage_ptr";
                                readonly typeString: "struct StdInvariant.FuzzSelector[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2834:42:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 30394;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2939:133:101";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 30393;
                    readonly nodeType: "Block";
                    readonly src: "3020:52:101";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 30391;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 30389;
                                readonly name: "targetedSenders_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30387;
                                readonly src: "3030:16:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 30390;
                                readonly name: "_targetedSenders";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 30192;
                                readonly src: "3049:16:101";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_storage";
                                    readonly typeString: "address[] storage ref";
                                };
                            };
                            readonly src: "3030:35:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly id: 30392;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "3030:35:101";
                    }];
                };
                readonly functionSelector: "3e5e3c23";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "targetSenders";
                readonly nameLocation: "2948:13:101";
                readonly parameters: {
                    readonly id: 30384;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2961:2:101";
                };
                readonly returnParameters: {
                    readonly id: 30388;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 30387;
                        readonly mutability: "mutable";
                        readonly name: "targetedSenders_";
                        readonly nameLocation: "3002:16:101";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 30394;
                        readonly src: "2985:33:101";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 30385;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2985:7:101";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 30386;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2985:9:101";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2984:35:101";
                };
                readonly scope: 30395;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "StdInvariant";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [30395];
            readonly name: "StdInvariant";
            readonly nameLocation: "118:12:101";
            readonly scope: 30396;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 101;
};
//# sourceMappingURL=StdInvariant.d.ts.map