export declare const Authority: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "user";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "functionSig";
            readonly type: "bytes4";
        }];
        readonly name: "canCall";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
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
        readonly "canCall(address,address,bytes4)": "b7009613";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A generic interface for a contract which provides authorization data to an Auth instance.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Authority\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "user";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                }, {
                    readonly internalType: "bytes4";
                    readonly name: "functionSig";
                    readonly type: "bytes4";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "canCall";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
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
                readonly "lib/solmate/src/auth/Auth.sol": "Authority";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/solmate/src/auth/Auth.sol";
        readonly id: 71812;
        readonly exportedSymbols: {
            readonly Auth: readonly [71798];
            readonly Authority: readonly [71811];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "42:2535:170";
        readonly nodes: readonly [{
            readonly id: 71641;
            readonly nodeType: "PragmaDirective";
            readonly src: "42:24:170";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.8", ".0"];
        }, {
            readonly id: 71798;
            readonly nodeType: "ContractDefinition";
            readonly src: "369:1760:170";
            readonly nodes: readonly [{
                readonly id: 71648;
                readonly nodeType: "EventDefinition";
                readonly src: "398:75:170";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0";
                readonly name: "OwnershipTransferred";
                readonly nameLocation: "404:20:170";
                readonly parameters: {
                    readonly id: 71647;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71644;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "441:4:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71648;
                        readonly src: "425:20:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71643;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "425:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71646;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newOwner";
                        readonly nameLocation: "463:8:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71648;
                        readonly src: "447:24:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71645;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "447:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "424:48:170";
                };
            }, {
                readonly id: 71655;
                readonly nodeType: "EventDefinition";
                readonly src: "479:77:170";
                readonly nodes: readonly [];
                readonly anonymous: false;
                readonly eventSelector: "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198";
                readonly name: "AuthorityUpdated";
                readonly nameLocation: "485:16:170";
                readonly parameters: {
                    readonly id: 71654;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71650;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "518:4:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71655;
                        readonly src: "502:20:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71649;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "502:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71653;
                        readonly indexed: true;
                        readonly mutability: "mutable";
                        readonly name: "newAuthority";
                        readonly nameLocation: "542:12:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71655;
                        readonly src: "524:30:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$71811";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 71652;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71651;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["524:9:170"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71811;
                                readonly src: "524:9:170";
                            };
                            readonly referencedDeclaration: 71811;
                            readonly src: "524:9:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "501:54:170";
                };
            }, {
                readonly id: 71657;
                readonly nodeType: "VariableDeclaration";
                readonly src: "562:20:170";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "8da5cb5b";
                readonly mutability: "mutable";
                readonly name: "owner";
                readonly nameLocation: "577:5:170";
                readonly scope: 71798;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_address";
                    readonly typeString: "address";
                };
                readonly typeName: {
                    readonly id: 71656;
                    readonly name: "address";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "562:7:170";
                    readonly stateMutability: "nonpayable";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_address";
                        readonly typeString: "address";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 71660;
                readonly nodeType: "VariableDeclaration";
                readonly src: "589:26:170";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly functionSelector: "bf7e214f";
                readonly mutability: "mutable";
                readonly name: "authority";
                readonly nameLocation: "606:9:170";
                readonly scope: 71798;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                    readonly typeString: "contract Authority";
                };
                readonly typeName: {
                    readonly id: 71659;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 71658;
                        readonly name: "Authority";
                        readonly nameLocations: readonly ["589:9:170"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 71811;
                        readonly src: "589:9:170";
                    };
                    readonly referencedDeclaration: 71811;
                    readonly src: "589:9:170";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_Authority_$71811";
                        readonly typeString: "contract Authority";
                    };
                };
                readonly visibility: "public";
            }, {
                readonly id: 71689;
                readonly nodeType: "FunctionDefinition";
                readonly src: "622:224:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71688;
                    readonly nodeType: "Block";
                    readonly src: "672:174:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 71670;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71668;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71657;
                                readonly src: "682:5:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71669;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71662;
                                readonly src: "690:6:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "682:14:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 71671;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "682:14:170";
                    }, {
                        readonly expression: {
                            readonly id: 71674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71672;
                                readonly name: "authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71660;
                                readonly src: "706:9:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71673;
                                readonly name: "_authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71665;
                                readonly src: "718:10:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "706:22:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 71675;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "706:22:170";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71677;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "765:3:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 71678;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "769:6:170";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "765:10:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71679;
                                readonly name: "_owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71662;
                                readonly src: "777:6:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 71676;
                                readonly name: "OwnershipTransferred";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71648;
                                readonly src: "744:20:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$";
                                    readonly typeString: "function (address,address)";
                                };
                            };
                            readonly id: 71680;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "744:40:170";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71681;
                        readonly nodeType: "EmitStatement";
                        readonly src: "739:45:170";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71683;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "816:3:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 71684;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "820:6:170";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "816:10:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71685;
                                readonly name: "_authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71665;
                                readonly src: "828:10:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 71682;
                                readonly name: "AuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71655;
                                readonly src: "799:16:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$71811_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 71686;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "799:40:170";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71687;
                        readonly nodeType: "EmitStatement";
                        readonly src: "794:45:170";
                    }];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 71666;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71662;
                        readonly mutability: "mutable";
                        readonly name: "_owner";
                        readonly nameLocation: "642:6:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71689;
                        readonly src: "634:14:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71661;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "634:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71665;
                        readonly mutability: "mutable";
                        readonly name: "_authority";
                        readonly nameLocation: "660:10:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71689;
                        readonly src: "650:20:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$71811";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 71664;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71663;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["650:9:170"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71811;
                                readonly src: "650:9:170";
                            };
                            readonly referencedDeclaration: 71811;
                            readonly src: "650:9:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "633:38:170";
                };
                readonly returnParameters: {
                    readonly id: 71667;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "672:0:170";
                };
                readonly scope: 71798;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 71703;
                readonly nodeType: "ModifierDefinition";
                readonly src: "852:119:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71702;
                    readonly nodeType: "Block";
                    readonly src: "884:87:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly expression: {
                                        readonly id: 71693;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "915:3:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 71694;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "919:6:170";
                                    readonly memberName: "sender";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "915:10:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                }, {
                                    readonly expression: {
                                        readonly id: 71695;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "927:3:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 71696;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "931:3:170";
                                    readonly memberName: "sig";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "927:7:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    }, {
                                        readonly typeIdentifier: "t_bytes4";
                                        readonly typeString: "bytes4";
                                    }];
                                    readonly id: 71692;
                                    readonly name: "isAuthorized";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71743;
                                    readonly src: "902:12:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                        readonly typeString: "function (address,bytes4) view returns (bool)";
                                    };
                                };
                                readonly id: 71697;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "902:33:170";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }, {
                                readonly hexValue: "554e415554484f52495a4544";
                                readonly id: 71698;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "string";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "937:14:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528";
                                    readonly typeString: "literal_string \"UNAUTHORIZED\"";
                                };
                                readonly value: "UNAUTHORIZED";
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }, {
                                    readonly typeIdentifier: "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528";
                                    readonly typeString: "literal_string \"UNAUTHORIZED\"";
                                }];
                                readonly id: 71691;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "894:7:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bool,string memory) pure";
                                };
                            };
                            readonly id: 71699;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "894:58:170";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71700;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "894:58:170";
                    }, {
                        readonly id: 71701;
                        readonly nodeType: "PlaceholderStatement";
                        readonly src: "963:1:170";
                    }];
                };
                readonly name: "requiresAuth";
                readonly nameLocation: "861:12:170";
                readonly parameters: {
                    readonly id: 71690;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "873:2:170";
                };
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 71743;
                readonly nodeType: "FunctionDefinition";
                readonly src: "977:540:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71742;
                    readonly nodeType: "Block";
                    readonly src: "1070:447:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [71714];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 71714;
                            readonly mutability: "mutable";
                            readonly name: "auth";
                            readonly nameLocation: "1090:4:170";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 71742;
                            readonly src: "1080:14:170";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                            readonly typeName: {
                                readonly id: 71713;
                                readonly nodeType: "UserDefinedTypeName";
                                readonly pathNode: {
                                    readonly id: 71712;
                                    readonly name: "Authority";
                                    readonly nameLocations: readonly ["1080:9:170"];
                                    readonly nodeType: "IdentifierPath";
                                    readonly referencedDeclaration: 71811;
                                    readonly src: "1080:9:170";
                                };
                                readonly referencedDeclaration: 71811;
                                readonly src: "1080:9:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 71716;
                        readonly initialValue: {
                            readonly id: 71715;
                            readonly name: "authority";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 71660;
                            readonly src: "1097:9:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "1080:26:170";
                    }, {
                        readonly expression: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 71740;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly components: readonly [{
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                    readonly id: 71735;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                        readonly id: 71725;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly arguments: readonly [{
                                                readonly id: 71719;
                                                readonly name: "auth";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71714;
                                                readonly src: "1423:4:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                                    readonly typeString: "contract Authority";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                                    readonly typeString: "contract Authority";
                                                }];
                                                readonly id: 71718;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1415:7:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 71717;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1415:7:170";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 71720;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1415:13:170";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "!=";
                                        readonly rightExpression: {
                                            readonly arguments: readonly [{
                                                readonly hexValue: "30";
                                                readonly id: 71723;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly kind: "number";
                                                readonly lValueRequested: false;
                                                readonly nodeType: "Literal";
                                                readonly src: "1440:1:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                };
                                                readonly value: "0";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_rational_0_by_1";
                                                    readonly typeString: "int_const 0";
                                                }];
                                                readonly id: 71722;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1432:7:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 71721;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1432:7:170";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 71724;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1432:10:170";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly src: "1415:27:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "&&";
                                    readonly rightExpression: {
                                        readonly arguments: readonly [{
                                            readonly id: 71728;
                                            readonly name: "user";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71705;
                                            readonly src: "1459:4:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 71731;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "1473:4:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Auth_$71798";
                                                    readonly typeString: "contract Auth";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_Auth_$71798";
                                                    readonly typeString: "contract Auth";
                                                }];
                                                readonly id: 71730;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "1465:7:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 71729;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "1465:7:170";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 71732;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "1465:13:170";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 71733;
                                            readonly name: "functionSig";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71707;
                                            readonly src: "1480:11:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_bytes4";
                                                readonly typeString: "bytes4";
                                            }];
                                            readonly expression: {
                                                readonly id: 71726;
                                                readonly name: "auth";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 71714;
                                                readonly src: "1446:4:170";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                                    readonly typeString: "contract Authority";
                                                };
                                            };
                                            readonly id: 71727;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "1451:7:170";
                                            readonly memberName: "canCall";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 71810;
                                            readonly src: "1446:12:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                            };
                                        };
                                        readonly id: 71734;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1446:46:170";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "1415:77:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                }];
                                readonly id: 71736;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "TupleExpression";
                                readonly src: "1414:79:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "||";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 71739;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 71737;
                                    readonly name: "user";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71705;
                                    readonly src: "1497:4:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "==";
                                readonly rightExpression: {
                                    readonly id: 71738;
                                    readonly name: "owner";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 71657;
                                    readonly src: "1505:5:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "1497:13:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "1414:96:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 71711;
                        readonly id: 71741;
                        readonly nodeType: "Return";
                        readonly src: "1407:103:170";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "isAuthorized";
                readonly nameLocation: "986:12:170";
                readonly parameters: {
                    readonly id: 71708;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71705;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "1007:4:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71743;
                        readonly src: "999:12:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71704;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "999:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71707;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "1020:11:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71743;
                        readonly src: "1013:18:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 71706;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1013:6:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "998:34:170";
                };
                readonly returnParameters: {
                    readonly id: 71711;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71710;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71743;
                        readonly src: "1064:4:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71709;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1064:4:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1063:6:170";
                };
                readonly scope: 71798;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 71779;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1523:434:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71778;
                    readonly nodeType: "Block";
                    readonly src: "1584:373:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly commonType: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                                readonly id: 71765;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                    readonly id: 71753;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 71750;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1780:3:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 71751;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1784:6:170";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1780:10:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "==";
                                    readonly rightExpression: {
                                        readonly id: 71752;
                                        readonly name: "owner";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 71657;
                                        readonly src: "1794:5:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    };
                                    readonly src: "1780:19:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "||";
                                readonly rightExpression: {
                                    readonly arguments: readonly [{
                                        readonly expression: {
                                            readonly id: 71756;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1821:3:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 71757;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1825:6:170";
                                        readonly memberName: "sender";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1821:10:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 71760;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "1841:4:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Auth_$71798";
                                                readonly typeString: "contract Auth";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_Auth_$71798";
                                                readonly typeString: "contract Auth";
                                            }];
                                            readonly id: 71759;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "1833:7:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 71758;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "1833:7:170";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 71761;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "1833:13:170";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly expression: {
                                            readonly id: 71762;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "1848:3:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 71763;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1852:3:170";
                                        readonly memberName: "sig";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "1848:7:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_bytes4";
                                            readonly typeString: "bytes4";
                                        }];
                                        readonly expression: {
                                            readonly id: 71754;
                                            readonly name: "authority";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 71660;
                                            readonly src: "1803:9:170";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                                readonly typeString: "contract Authority";
                                            };
                                        };
                                        readonly id: 71755;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "1813:7:170";
                                        readonly memberName: "canCall";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 71810;
                                        readonly src: "1803:17:170";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$";
                                            readonly typeString: "function (address,address,bytes4) view external returns (bool)";
                                        };
                                    };
                                    readonly id: 71764;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "1803:53:170";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly src: "1780:76:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly id: 71749;
                                readonly name: "require";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [-18, -18];
                                readonly referencedDeclaration: -18;
                                readonly src: "1772:7:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_require_pure$_t_bool_$returns$__$";
                                    readonly typeString: "function (bool) pure";
                                };
                            };
                            readonly id: 71766;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1772:85:170";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71767;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1772:85:170";
                    }, {
                        readonly expression: {
                            readonly id: 71770;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71768;
                                readonly name: "authority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71660;
                                readonly src: "1868:9:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71769;
                                readonly name: "newAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71746;
                                readonly src: "1880:12:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            };
                            readonly src: "1868:24:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly id: 71771;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "1868:24:170";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71773;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "1925:3:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 71774;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1929:6:170";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "1925:10:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71775;
                                readonly name: "newAuthority";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71746;
                                readonly src: "1937:12:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_contract$_Authority_$71811";
                                    readonly typeString: "contract Authority";
                                }];
                                readonly id: 71772;
                                readonly name: "AuthorityUpdated";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71655;
                                readonly src: "1908:16:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$71811_$returns$__$";
                                    readonly typeString: "function (address,contract Authority)";
                                };
                            };
                            readonly id: 71776;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1908:42:170";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71777;
                        readonly nodeType: "EmitStatement";
                        readonly src: "1903:47:170";
                    }];
                };
                readonly functionSelector: "7a9e5e4b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setAuthority";
                readonly nameLocation: "1532:12:170";
                readonly parameters: {
                    readonly id: 71747;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71746;
                        readonly mutability: "mutable";
                        readonly name: "newAuthority";
                        readonly nameLocation: "1555:12:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71779;
                        readonly src: "1545:22:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_Authority_$71811";
                            readonly typeString: "contract Authority";
                        };
                        readonly typeName: {
                            readonly id: 71745;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 71744;
                                readonly name: "Authority";
                                readonly nameLocations: readonly ["1545:9:170"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 71811;
                                readonly src: "1545:9:170";
                            };
                            readonly referencedDeclaration: 71811;
                            readonly src: "1545:9:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_Authority_$71811";
                                readonly typeString: "contract Authority";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1544:24:170";
                };
                readonly returnParameters: {
                    readonly id: 71748;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1584:0:170";
                };
                readonly scope: 71798;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }, {
                readonly id: 71797;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1963:164:170";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71796;
                    readonly nodeType: "Block";
                    readonly src: "2036:91:170";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 71788;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 71786;
                                readonly name: "owner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71657;
                                readonly src: "2046:5:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 71787;
                                readonly name: "newOwner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71781;
                                readonly src: "2054:8:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2046:16:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly id: 71789;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "2046:16:170";
                    }, {
                        readonly eventCall: {
                            readonly arguments: readonly [{
                                readonly expression: {
                                    readonly id: 71791;
                                    readonly name: "msg";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -15;
                                    readonly src: "2099:3:170";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_magic_message";
                                        readonly typeString: "msg";
                                    };
                                };
                                readonly id: 71792;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2103:6:170";
                                readonly memberName: "sender";
                                readonly nodeType: "MemberAccess";
                                readonly src: "2099:10:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }, {
                                readonly id: 71793;
                                readonly name: "newOwner";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71781;
                                readonly src: "2111:8:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly id: 71790;
                                readonly name: "OwnershipTransferred";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 71648;
                                readonly src: "2078:20:170";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$";
                                    readonly typeString: "function (address,address)";
                                };
                            };
                            readonly id: 71794;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2078:42:170";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 71795;
                        readonly nodeType: "EmitStatement";
                        readonly src: "2073:47:170";
                    }];
                };
                readonly functionSelector: "f2fde38b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [{
                    readonly id: 71784;
                    readonly kind: "modifierInvocation";
                    readonly modifierName: {
                        readonly id: 71783;
                        readonly name: "requiresAuth";
                        readonly nameLocations: readonly ["2023:12:170"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 71703;
                        readonly src: "2023:12:170";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "2023:12:170";
                }];
                readonly name: "transferOwnership";
                readonly nameLocation: "1972:17:170";
                readonly parameters: {
                    readonly id: 71782;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71781;
                        readonly mutability: "mutable";
                        readonly name: "newOwner";
                        readonly nameLocation: "1998:8:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71797;
                        readonly src: "1990:16:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71780;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1990:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1989:18:170";
                };
                readonly returnParameters: {
                    readonly id: 71785;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "2036:0:170";
                };
                readonly scope: 71798;
                readonly stateMutability: "nonpayable";
                readonly virtual: true;
                readonly visibility: "public";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Auth";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 71642;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "68:301:170";
                readonly text: "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71798];
            readonly name: "Auth";
            readonly nameLocation: "387:4:170";
            readonly scope: 71812;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [71648, 71655];
        }, {
            readonly id: 71811;
            readonly nodeType: "ContractDefinition";
            readonly src: "2422:154:170";
            readonly nodes: readonly [{
                readonly id: 71810;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2448:126:170";
                readonly nodes: readonly [];
                readonly functionSelector: "b7009613";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "canCall";
                readonly nameLocation: "2457:7:170";
                readonly parameters: {
                    readonly id: 71806;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71801;
                        readonly mutability: "mutable";
                        readonly name: "user";
                        readonly nameLocation: "2482:4:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71810;
                        readonly src: "2474:12:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71800;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2474:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71803;
                        readonly mutability: "mutable";
                        readonly name: "target";
                        readonly nameLocation: "2504:6:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71810;
                        readonly src: "2496:14:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71802;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2496:7:170";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 71805;
                        readonly mutability: "mutable";
                        readonly name: "functionSig";
                        readonly nameLocation: "2527:11:170";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71810;
                        readonly src: "2520:18:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes4";
                            readonly typeString: "bytes4";
                        };
                        readonly typeName: {
                            readonly id: 71804;
                            readonly name: "bytes4";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2520:6:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes4";
                                readonly typeString: "bytes4";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2464:80:170";
                };
                readonly returnParameters: {
                    readonly id: 71809;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71808;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71810;
                        readonly src: "2568:4:170";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 71807;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2568:4:170";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2567:6:170";
                };
                readonly scope: 71811;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Authority";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly documentation: {
                readonly id: 71799;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "2131:291:170";
                readonly text: "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)";
            };
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [71811];
            readonly name: "Authority";
            readonly nameLocation: "2432:9:170";
            readonly scope: 71812;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "AGPL-3.0-only";
    };
    readonly id: 170;
};
//# sourceMappingURL=Authority.d.ts.map