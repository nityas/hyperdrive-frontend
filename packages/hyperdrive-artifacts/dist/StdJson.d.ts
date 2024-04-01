export declare const stdJson: {
    readonly abi: readonly [];
    readonly bytecode: {
        readonly object: "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220de85fd6d5d2fa863e4fdb1e677deff5459de250f3e3e86b1f67d678243ad8be264736f6c63430008140033";
        readonly sourceMap: "830:5374:150:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;830:5374:150;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220de85fd6d5d2fa863e4fdb1e677deff5459de250f3e3e86b1f67d678243ad8be264736f6c63430008140033";
        readonly sourceMap: "830:5374:150:-:0;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdJson.sol\":\"stdJson\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [];
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
                readonly "lib/forge-std/src/StdJson.sol": "stdJson";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/src/StdJson.sol": {
                readonly keccak256: "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b";
                readonly urls: readonly ["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c", "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/StdJson.sol";
        readonly id: 35540;
        readonly exportedSymbols: {
            readonly VmSafe: readonly [40341];
            readonly stdJson: readonly [35539];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:6173:150";
        readonly nodes: readonly [{
            readonly id: 34965;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:150";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".0", "<", "0.9", ".0"];
        }, {
            readonly id: 34966;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:150";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 34968;
            readonly nodeType: "ImportDirective";
            readonly src: "100:32:150";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 35540;
            readonly sourceUnit: 40814;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 34967;
                    readonly name: "VmSafe";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 40341;
                    readonly src: "108:6:150";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 35539;
            readonly nodeType: "ContractDefinition";
            readonly src: "830:5374:150";
            readonly nodes: readonly [{
                readonly id: 34985;
                readonly nodeType: "VariableDeclaration";
                readonly src: "852:92:150";
                readonly nodes: readonly [];
                readonly constant: true;
                readonly mutability: "constant";
                readonly name: "vm";
                readonly nameLocation: "876:2:150";
                readonly scope: 35539;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                    readonly typeString: "contract VmSafe";
                };
                readonly typeName: {
                    readonly id: 34970;
                    readonly nodeType: "UserDefinedTypeName";
                    readonly pathNode: {
                        readonly id: 34969;
                        readonly name: "VmSafe";
                        readonly nameLocations: readonly ["852:6:150"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 40341;
                        readonly src: "852:6:150";
                    };
                    readonly referencedDeclaration: 40341;
                    readonly src: "852:6:150";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly value: {
                    readonly arguments: readonly [{
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly hexValue: "6865766d20636865617420636f6465";
                                        readonly id: 34979;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly kind: "string";
                                        readonly lValueRequested: false;
                                        readonly nodeType: "Literal";
                                        readonly src: "922:17:150";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d";
                                            readonly typeString: "literal_string \"hevm cheat code\"";
                                        };
                                        readonly value: "hevm cheat code";
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_stringliteral_885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d";
                                            readonly typeString: "literal_string \"hevm cheat code\"";
                                        }];
                                        readonly id: 34978;
                                        readonly name: "keccak256";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -8;
                                        readonly src: "912:9:150";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$";
                                            readonly typeString: "function (bytes memory) pure returns (bytes32)";
                                        };
                                    };
                                    readonly id: 34980;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "912:28:150";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_bytes32";
                                        readonly typeString: "bytes32";
                                    }];
                                    readonly id: 34977;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "904:7:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_uint256_$";
                                        readonly typeString: "type(uint256)";
                                    };
                                    readonly typeName: {
                                        readonly id: 34976;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "904:7:150";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 34981;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "904:37:150";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 34975;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly lValueRequested: false;
                                readonly nodeType: "ElementaryTypeNameExpression";
                                readonly src: "896:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_type$_t_uint160_$";
                                    readonly typeString: "type(uint160)";
                                };
                                readonly typeName: {
                                    readonly id: 34974;
                                    readonly name: "uint160";
                                    readonly nodeType: "ElementaryTypeName";
                                    readonly src: "896:7:150";
                                    readonly typeDescriptions: {};
                                };
                            };
                            readonly id: 34982;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "typeConversion";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "896:46:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint160";
                                readonly typeString: "uint160";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_uint160";
                                readonly typeString: "uint160";
                            }];
                            readonly id: 34973;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "888:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 34972;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "888:7:150";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 34983;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: true;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "888:55:150";
                        readonly tryCall: false;
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
                        readonly id: 34971;
                        readonly name: "VmSafe";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 40341;
                        readonly src: "881:6:150";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_type$_t_contract$_VmSafe_$40341_$";
                            readonly typeString: "type(contract VmSafe)";
                        };
                    };
                    readonly id: 34984;
                    readonly isConstant: false;
                    readonly isLValue: false;
                    readonly isPure: true;
                    readonly kind: "typeConversion";
                    readonly lValueRequested: false;
                    readonly nameLocations: readonly [];
                    readonly names: readonly [];
                    readonly nodeType: "FunctionCall";
                    readonly src: "881:63:150";
                    readonly tryCall: false;
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                        readonly typeString: "contract VmSafe";
                    };
                };
                readonly visibility: "private";
            }, {
                readonly id: 35001;
                readonly nodeType: "FunctionDefinition";
                readonly src: "951:141:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35000;
                    readonly nodeType: "Block";
                    readonly src: "1045:47:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 34996;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34987;
                                readonly src: "1075:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 34997;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 34989;
                                readonly src: "1081:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 34994;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1062:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 34995;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1065:9:150";
                                readonly memberName: "parseJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39968;
                                readonly src: "1062:12:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_pure$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) pure external returns (bytes memory)";
                                };
                            };
                            readonly id: 34998;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1062:23:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 34993;
                        readonly id: 34999;
                        readonly nodeType: "Return";
                        readonly src: "1055:30:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "parseRaw";
                readonly nameLocation: "960:8:150";
                readonly parameters: {
                    readonly id: 34990;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34987;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "983:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35001;
                        readonly src: "969:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34986;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "969:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 34989;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1003:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35001;
                        readonly src: "989:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 34988;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "989:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "968:39:150";
                };
                readonly returnParameters: {
                    readonly id: 34993;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 34992;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35001;
                        readonly src: "1031:12:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 34991;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1031:5:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1030:14:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "pure";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35017;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1098:135:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35016;
                    readonly nodeType: "Block";
                    readonly src: "1182:51:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35012;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35003;
                                readonly src: "1216:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35013;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35005;
                                readonly src: "1222:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35010;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1199:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35011;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1202:13:150";
                                readonly memberName: "parseJsonUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39984;
                                readonly src: "1199:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_uint256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256)";
                                };
                            };
                            readonly id: 35014;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1199:27:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 35009;
                        readonly id: 35015;
                        readonly nodeType: "Return";
                        readonly src: "1192:34:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUint";
                readonly nameLocation: "1107:8:150";
                readonly parameters: {
                    readonly id: 35006;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35003;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1130:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35017;
                        readonly src: "1116:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35002;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1116:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35005;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1150:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35017;
                        readonly src: "1136:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35004;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1136:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1115:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35009;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35008;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35017;
                        readonly src: "1173:7:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35007;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1173:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1172:9:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35034;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1239:154:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35033;
                    readonly nodeType: "Block";
                    readonly src: "1337:56:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35029;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35019;
                                readonly src: "1376:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35030;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35021;
                                readonly src: "1382:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35027;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1354:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35028;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1357:18:150";
                                readonly memberName: "parseJsonUintArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 39994;
                                readonly src: "1354:21:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_uint256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (uint256[] memory)";
                                };
                            };
                            readonly id: 35031;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1354:32:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                readonly typeString: "uint256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35026;
                        readonly id: 35032;
                        readonly nodeType: "Return";
                        readonly src: "1347:39:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readUintArray";
                readonly nameLocation: "1248:13:150";
                readonly parameters: {
                    readonly id: 35022;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35019;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1276:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35034;
                        readonly src: "1262:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35018;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1262:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35021;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1296:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35034;
                        readonly src: "1282:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35020;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1282:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1261:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35026;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35025;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35034;
                        readonly src: "1319:16:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35023;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1319:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 35024;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1319:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1318:18:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35050;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1399:132:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35049;
                    readonly nodeType: "Block";
                    readonly src: "1481:50:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35045;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35036;
                                readonly src: "1514:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35046;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35038;
                                readonly src: "1520:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35043;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1498:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35044;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1501:12:150";
                                readonly memberName: "parseJsonInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40003;
                                readonly src: "1498:15:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_int256_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256)";
                                };
                            };
                            readonly id: 35047;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1498:26:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly functionReturnParameters: 35042;
                        readonly id: 35048;
                        readonly nodeType: "Return";
                        readonly src: "1491:33:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readInt";
                readonly nameLocation: "1408:7:150";
                readonly parameters: {
                    readonly id: 35039;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35036;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1430:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35050;
                        readonly src: "1416:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35035;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1416:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35038;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1450:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35050;
                        readonly src: "1436:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35037;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1436:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1415:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35042;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35041;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35050;
                        readonly src: "1473:6:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35040;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1473:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1472:8:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35067;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1537:151:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35066;
                    readonly nodeType: "Block";
                    readonly src: "1633:55:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35062;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35052;
                                readonly src: "1671:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35063;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35054;
                                readonly src: "1677:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35060;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1650:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35061;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1653:17:150";
                                readonly memberName: "parseJsonIntArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40013;
                                readonly src: "1650:20:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_int256_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (int256[] memory)";
                                };
                            };
                            readonly id: 35064;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1650:31:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                readonly typeString: "int256[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35059;
                        readonly id: 35065;
                        readonly nodeType: "Return";
                        readonly src: "1643:38:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readIntArray";
                readonly nameLocation: "1546:12:150";
                readonly parameters: {
                    readonly id: 35055;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35052;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1573:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35067;
                        readonly src: "1559:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35051;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1559:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35054;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1593:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35067;
                        readonly src: "1579:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35053;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1579:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1558:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35059;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35058;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35067;
                        readonly src: "1616:15:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35056;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1616:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 35057;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1616:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:17:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35083;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1694:141:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35082;
                    readonly nodeType: "Block";
                    readonly src: "1781:54:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35078;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35069;
                                readonly src: "1818:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35079;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35071;
                                readonly src: "1824:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35076;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1798:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35077;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1801:16:150";
                                readonly memberName: "parseJsonBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40098;
                                readonly src: "1798:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes32_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32)";
                                };
                            };
                            readonly id: 35080;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1798:30:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly functionReturnParameters: 35075;
                        readonly id: 35081;
                        readonly nodeType: "Return";
                        readonly src: "1791:37:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32";
                readonly nameLocation: "1703:11:150";
                readonly parameters: {
                    readonly id: 35072;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35069;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1729:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35083;
                        readonly src: "1715:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35068;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1715:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35071;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1749:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35083;
                        readonly src: "1735:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35070;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1735:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1714:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35075;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35074;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35083;
                        readonly src: "1772:7:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 35073;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1772:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1771:9:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35100;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1841:160:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35099;
                    readonly nodeType: "Block";
                    readonly src: "1942:59:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35095;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35085;
                                readonly src: "1984:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35096;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35087;
                                readonly src: "1990:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35093;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "1959:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35094;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "1962:21:150";
                                readonly memberName: "parseJsonBytes32Array";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40108;
                                readonly src: "1959:24:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes32_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes32[] memory)";
                                };
                            };
                            readonly id: 35097;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "1959:35:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                readonly typeString: "bytes32[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35092;
                        readonly id: 35098;
                        readonly nodeType: "Return";
                        readonly src: "1952:42:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes32Array";
                readonly nameLocation: "1850:16:150";
                readonly parameters: {
                    readonly id: 35088;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35085;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "1881:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35100;
                        readonly src: "1867:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35084;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1867:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35087;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "1901:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35100;
                        readonly src: "1887:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35086;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1887:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1866:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35092;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35091;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35100;
                        readonly src: "1924:16:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35089;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "1924:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 35090;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "1924:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1923:18:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35116;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2007:145:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35115;
                    readonly nodeType: "Block";
                    readonly src: "2099:53:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35111;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35102;
                                readonly src: "2135:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35112;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35104;
                                readonly src: "2141:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35109;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "2116:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35110;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2119:15:150";
                                readonly memberName: "parseJsonString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40060;
                                readonly src: "2116:18:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35113;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2116:29:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35108;
                        readonly id: 35114;
                        readonly nodeType: "Return";
                        readonly src: "2109:36:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readString";
                readonly nameLocation: "2016:10:150";
                readonly parameters: {
                    readonly id: 35105;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35102;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2041:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35116;
                        readonly src: "2027:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35101;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2027:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35104;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2061:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35116;
                        readonly src: "2047:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35103;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2047:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2026:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35108;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35107;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35116;
                        readonly src: "2084:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35106;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2084:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2083:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35133;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2158:157:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35132;
                    readonly nodeType: "Block";
                    readonly src: "2257:58:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35128;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35118;
                                readonly src: "2298:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35129;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35120;
                                readonly src: "2304:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35126;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "2274:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35127;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2277:20:150";
                                readonly memberName: "parseJsonStringArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40070;
                                readonly src: "2274:23:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (string memory[] memory)";
                                };
                            };
                            readonly id: 35130;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2274:34:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "string memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35125;
                        readonly id: 35131;
                        readonly nodeType: "Return";
                        readonly src: "2267:41:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readStringArray";
                readonly nameLocation: "2167:15:150";
                readonly parameters: {
                    readonly id: 35121;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35118;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2197:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35133;
                        readonly src: "2183:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35117;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2183:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35120;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2217:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35133;
                        readonly src: "2203:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35119;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2203:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2182:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35125;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35124;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35133;
                        readonly src: "2240:15:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35122;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2240:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35123;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2240:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2239:17:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35149;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2321:141:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35148;
                    readonly nodeType: "Block";
                    readonly src: "2408:54:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35144;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35135;
                                readonly src: "2445:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35145;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35137;
                                readonly src: "2451:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35142;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "2425:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35143;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2428:16:150";
                                readonly memberName: "parseJsonAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40041;
                                readonly src: "2425:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_address_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address)";
                                };
                            };
                            readonly id: 35146;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2425:30:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 35141;
                        readonly id: 35147;
                        readonly nodeType: "Return";
                        readonly src: "2418:37:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddress";
                readonly nameLocation: "2330:11:150";
                readonly parameters: {
                    readonly id: 35138;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35135;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2356:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35149;
                        readonly src: "2342:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35134;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2342:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35137;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2376:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35149;
                        readonly src: "2362:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35136;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2362:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2341:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35141;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35140;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35149;
                        readonly src: "2399:7:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35139;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2399:7:150";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2398:9:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35166;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2468:160:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35165;
                    readonly nodeType: "Block";
                    readonly src: "2569:59:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35161;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35151;
                                readonly src: "2611:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35162;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35153;
                                readonly src: "2617:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35159;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "2586:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35160;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2589:21:150";
                                readonly memberName: "parseJsonAddressArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40051;
                                readonly src: "2586:24:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (address[] memory)";
                                };
                            };
                            readonly id: 35163;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2586:35:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                readonly typeString: "address[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35158;
                        readonly id: 35164;
                        readonly nodeType: "Return";
                        readonly src: "2579:42:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readAddressArray";
                readonly nameLocation: "2477:16:150";
                readonly parameters: {
                    readonly id: 35154;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35151;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2508:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35166;
                        readonly src: "2494:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35150;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2494:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35153;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2528:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35166;
                        readonly src: "2514:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35152;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2514:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2493:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35158;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35157;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35166;
                        readonly src: "2551:16:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35155;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2551:7:150";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35156;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2551:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2550:18:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35182;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2634:132:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35181;
                    readonly nodeType: "Block";
                    readonly src: "2715:51:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35177;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35168;
                                readonly src: "2749:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35178;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35170;
                                readonly src: "2755:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35175;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "2732:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35176;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2735:13:150";
                                readonly memberName: "parseJsonBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40022;
                                readonly src: "2732:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bool_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool)";
                                };
                            };
                            readonly id: 35179;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2732:27:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly functionReturnParameters: 35174;
                        readonly id: 35180;
                        readonly nodeType: "Return";
                        readonly src: "2725:34:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBool";
                readonly nameLocation: "2643:8:150";
                readonly parameters: {
                    readonly id: 35171;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35168;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2666:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35182;
                        readonly src: "2652:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35167;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2652:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35170;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2686:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35182;
                        readonly src: "2672:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35169;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2672:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2651:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35174;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35173;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35182;
                        readonly src: "2709:4:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 35172;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2709:4:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2708:6:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35199;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2772:151:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35198;
                    readonly nodeType: "Block";
                    readonly src: "2867:56:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35194;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35184;
                                readonly src: "2906:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35195;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35186;
                                readonly src: "2912:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35192;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "2884:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35193;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "2887:18:150";
                                readonly memberName: "parseJsonBoolArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40032;
                                readonly src: "2884:21:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bool_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bool[] memory)";
                                };
                            };
                            readonly id: 35196;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "2884:32:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                readonly typeString: "bool[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35191;
                        readonly id: 35197;
                        readonly nodeType: "Return";
                        readonly src: "2877:39:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBoolArray";
                readonly nameLocation: "2781:13:150";
                readonly parameters: {
                    readonly id: 35187;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35184;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2809:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35199;
                        readonly src: "2795:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35183;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2795:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35186;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2829:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35199;
                        readonly src: "2815:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35185;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2815:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2794:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35191;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35190;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35199;
                        readonly src: "2852:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35188;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2852:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 35189;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "2852:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2851:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35215;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2929:142:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35214;
                    readonly nodeType: "Block";
                    readonly src: "3019:52:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35210;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35201;
                                readonly src: "3054:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35211;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35203;
                                readonly src: "3060:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35208;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "3036:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35209;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3039:14:150";
                                readonly memberName: "parseJsonBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40079;
                                readonly src: "3036:17:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_bytes_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory)";
                                };
                            };
                            readonly id: 35212;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3036:28:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_memory_ptr";
                                readonly typeString: "bytes memory";
                            };
                        };
                        readonly functionReturnParameters: 35207;
                        readonly id: 35213;
                        readonly nodeType: "Return";
                        readonly src: "3029:35:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytes";
                readonly nameLocation: "2938:9:150";
                readonly parameters: {
                    readonly id: 35204;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35201;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "2962:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35215;
                        readonly src: "2948:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35200;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2948:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35203;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "2982:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35215;
                        readonly src: "2968:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35202;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2968:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2947:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35207;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35206;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35215;
                        readonly src: "3005:12:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35205;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3005:5:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3004:14:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35232;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3077:154:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35231;
                    readonly nodeType: "Block";
                    readonly src: "3174:57:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35227;
                                readonly name: "json";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35217;
                                readonly src: "3214:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35228;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35219;
                                readonly src: "3220:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35225;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "3191:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35226;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3194:19:150";
                                readonly memberName: "parseJsonBytesArray";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40089;
                                readonly src: "3191:22:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory) external returns (bytes memory[] memory)";
                                };
                            };
                            readonly id: 35229;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3191:33:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                readonly typeString: "bytes memory[] memory";
                            };
                        };
                        readonly functionReturnParameters: 35224;
                        readonly id: 35230;
                        readonly nodeType: "Return";
                        readonly src: "3184:40:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "readBytesArray";
                readonly nameLocation: "3086:14:150";
                readonly parameters: {
                    readonly id: 35220;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35217;
                        readonly mutability: "mutable";
                        readonly name: "json";
                        readonly nameLocation: "3115:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35232;
                        readonly src: "3101:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35216;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3101:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35219;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3135:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35232;
                        readonly src: "3121:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35218;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3121:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3100:39:150";
                };
                readonly returnParameters: {
                    readonly id: 35224;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35223;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35232;
                        readonly src: "3158:14:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35221;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3158:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 35222;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3158:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3157:16:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35251;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3237:167:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35250;
                    readonly nodeType: "Block";
                    readonly src: "3343:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35245;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35234;
                                readonly src: "3377:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35246;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35236;
                                readonly src: "3386:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35247;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35238;
                                readonly src: "3391:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                }];
                                readonly expression: {
                                    readonly id: 35243;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "3360:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35244;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3363:13:150";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40129;
                                readonly src: "3360:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bool_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool) external returns (string memory)";
                                };
                            };
                            readonly id: 35248;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3360:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35242;
                        readonly id: 35249;
                        readonly nodeType: "Return";
                        readonly src: "3353:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3246:9:150";
                readonly parameters: {
                    readonly id: 35239;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35234;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3270:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35251;
                        readonly src: "3256:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35233;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3256:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35236;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3293:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35251;
                        readonly src: "3279:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35235;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3279:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35238;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3303:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35251;
                        readonly src: "3298:10:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bool";
                            readonly typeString: "bool";
                        };
                        readonly typeName: {
                            readonly id: 35237;
                            readonly name: "bool";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3298:4:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3255:54:150";
                };
                readonly returnParameters: {
                    readonly id: 35242;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35241;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35251;
                        readonly src: "3328:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35240;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3328:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3327:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35271;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3410:196:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35270;
                    readonly nodeType: "Block";
                    readonly src: "3545:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35265;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35253;
                                readonly src: "3579:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35266;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35255;
                                readonly src: "3588:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35267;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35258;
                                readonly src: "3593:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                    readonly typeString: "bool[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                                    readonly typeString: "bool[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35263;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "3562:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35264;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3565:13:150";
                                readonly memberName: "serializeBool";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40207;
                                readonly src: "3562:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bool_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bool[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35268;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3562:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35262;
                        readonly id: 35269;
                        readonly nodeType: "Return";
                        readonly src: "3555:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3419:9:150";
                readonly parameters: {
                    readonly id: 35259;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35253;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3443:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35271;
                        readonly src: "3429:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35252;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3429:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35255;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3466:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35271;
                        readonly src: "3452:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35254;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3452:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35258;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3485:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35271;
                        readonly src: "3471:19:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bool_$dyn_memory_ptr";
                            readonly typeString: "bool[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35256;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3471:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 35257;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3471:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bool_$dyn_storage_ptr";
                                readonly typeString: "bool[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3428:63:150";
                };
                readonly returnParameters: {
                    readonly id: 35262;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35261;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35271;
                        readonly src: "3526:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35260;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3526:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3525:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35290;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3612:170:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35289;
                    readonly nodeType: "Block";
                    readonly src: "3721:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35284;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35273;
                                readonly src: "3755:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35285;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35275;
                                readonly src: "3764:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35286;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35277;
                                readonly src: "3769:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 35282;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "3738:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35283;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3741:13:150";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40140;
                                readonly src: "3738:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_uint256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256) external returns (string memory)";
                                };
                            };
                            readonly id: 35287;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3738:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35281;
                        readonly id: 35288;
                        readonly nodeType: "Return";
                        readonly src: "3731:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3621:9:150";
                readonly parameters: {
                    readonly id: 35278;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35273;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3645:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35290;
                        readonly src: "3631:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35272;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3631:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35275;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3668:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35290;
                        readonly src: "3654:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35274;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3654:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35277;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3681:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35290;
                        readonly src: "3673:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 35276;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3673:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3630:57:150";
                };
                readonly returnParameters: {
                    readonly id: 35281;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35280;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35290;
                        readonly src: "3706:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35279;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3706:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3705:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35310;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3788:199:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35309;
                    readonly nodeType: "Block";
                    readonly src: "3926:61:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35304;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35292;
                                readonly src: "3960:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35305;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35294;
                                readonly src: "3969:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35306;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35297;
                                readonly src: "3974:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                                    readonly typeString: "uint256[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35302;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "3943:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35303;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "3946:13:150";
                                readonly memberName: "serializeUint";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40219;
                                readonly src: "3943:16:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_uint256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,uint256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35307;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3943:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35301;
                        readonly id: 35308;
                        readonly nodeType: "Return";
                        readonly src: "3936:44:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "3797:9:150";
                readonly parameters: {
                    readonly id: 35298;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35292;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "3821:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35310;
                        readonly src: "3807:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35291;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3807:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35294;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "3844:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35310;
                        readonly src: "3830:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35293;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3830:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35297;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "3866:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35310;
                        readonly src: "3849:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_uint256_$dyn_memory_ptr";
                            readonly typeString: "uint256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35295;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3849:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly id: 35296;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "3849:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_uint256_$dyn_storage_ptr";
                                readonly typeString: "uint256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3806:66:150";
                };
                readonly returnParameters: {
                    readonly id: 35301;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35300;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35310;
                        readonly src: "3907:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35299;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3907:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3906:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35329;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3993:168:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35328;
                    readonly nodeType: "Block";
                    readonly src: "4101:60:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35323;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35312;
                                readonly src: "4134:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35324;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35314;
                                readonly src: "4143:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35325;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35316;
                                readonly src: "4148:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly expression: {
                                    readonly id: 35321;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "4118:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35322;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4121:12:150";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40151;
                                readonly src: "4118:15:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_int256_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256) external returns (string memory)";
                                };
                            };
                            readonly id: 35326;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4118:36:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35320;
                        readonly id: 35327;
                        readonly nodeType: "Return";
                        readonly src: "4111:43:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4002:9:150";
                readonly parameters: {
                    readonly id: 35317;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35312;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4026:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35329;
                        readonly src: "4012:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35311;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4012:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35314;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4049:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35329;
                        readonly src: "4035:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35313;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4035:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35316;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4061:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35329;
                        readonly src: "4054:12:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 35315;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4054:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4011:56:150";
                };
                readonly returnParameters: {
                    readonly id: 35320;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35319;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35329;
                        readonly src: "4086:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35318;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4086:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4085:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35349;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4167:197:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35348;
                    readonly nodeType: "Block";
                    readonly src: "4304:60:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35343;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35331;
                                readonly src: "4337:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35344;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35333;
                                readonly src: "4346:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35345;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35336;
                                readonly src: "4351:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                    readonly typeString: "int256[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                                    readonly typeString: "int256[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35341;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "4321:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35342;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4324:12:150";
                                readonly memberName: "serializeInt";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40231;
                                readonly src: "4321:15:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_int256_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,int256[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35346;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4321:36:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35340;
                        readonly id: 35347;
                        readonly nodeType: "Return";
                        readonly src: "4314:43:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4176:9:150";
                readonly parameters: {
                    readonly id: 35337;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35331;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4200:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35349;
                        readonly src: "4186:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35330;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4186:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35333;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4223:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35349;
                        readonly src: "4209:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35332;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4209:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35336;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4244:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35349;
                        readonly src: "4228:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_int256_$dyn_memory_ptr";
                            readonly typeString: "int256[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35334;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4228:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly id: 35335;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4228:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_int256_$dyn_storage_ptr";
                                readonly typeString: "int256[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4185:65:150";
                };
                readonly returnParameters: {
                    readonly id: 35340;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35339;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35349;
                        readonly src: "4285:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35338;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4285:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4284:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35368;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4370:173:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35367;
                    readonly nodeType: "Block";
                    readonly src: "4479:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35362;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35351;
                                readonly src: "4516:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35363;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35353;
                                readonly src: "4525:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35364;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35355;
                                readonly src: "4530:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                }];
                                readonly expression: {
                                    readonly id: 35360;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "4496:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35361;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4499:16:150";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40162;
                                readonly src: "4496:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_address_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address) external returns (string memory)";
                                };
                            };
                            readonly id: 35365;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4496:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35359;
                        readonly id: 35366;
                        readonly nodeType: "Return";
                        readonly src: "4489:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4379:9:150";
                readonly parameters: {
                    readonly id: 35356;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35351;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4403:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35368;
                        readonly src: "4389:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35350;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4389:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35353;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4426:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35368;
                        readonly src: "4412:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35352;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4412:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35355;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4439:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35368;
                        readonly src: "4431:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 35354;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4431:7:150";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4388:57:150";
                };
                readonly returnParameters: {
                    readonly id: 35359;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35358;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35368;
                        readonly src: "4464:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35357;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4464:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4463:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35388;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4549:202:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35387;
                    readonly nodeType: "Block";
                    readonly src: "4687:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35382;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35370;
                                readonly src: "4724:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35383;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35372;
                                readonly src: "4733:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35384;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35375;
                                readonly src: "4738:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                                    readonly typeString: "address[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35380;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "4704:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35381;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4707:16:150";
                                readonly memberName: "serializeAddress";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40243;
                                readonly src: "4704:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_address_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,address[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35385;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4704:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35379;
                        readonly id: 35386;
                        readonly nodeType: "Return";
                        readonly src: "4697:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4558:9:150";
                readonly parameters: {
                    readonly id: 35376;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35370;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4582:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "4568:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35369;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4568:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35372;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4605:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "4591:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35371;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4591:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35375;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4627:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "4610:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_address_$dyn_memory_ptr";
                            readonly typeString: "address[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35373;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4610:7:150";
                                readonly stateMutability: "nonpayable";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly id: 35374;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4610:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_address_$dyn_storage_ptr";
                                readonly typeString: "address[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4567:66:150";
                };
                readonly returnParameters: {
                    readonly id: 35379;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35378;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35388;
                        readonly src: "4668:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35377;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4668:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4667:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35407;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4757:173:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35406;
                    readonly nodeType: "Block";
                    readonly src: "4866:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35401;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35390;
                                readonly src: "4903:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35402;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35392;
                                readonly src: "4912:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35403;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35394;
                                readonly src: "4917:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                }];
                                readonly expression: {
                                    readonly id: 35399;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "4883:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35400;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "4886:16:150";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40173;
                                readonly src: "4883:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes32_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32) external returns (string memory)";
                                };
                            };
                            readonly id: 35404;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "4883:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35398;
                        readonly id: 35405;
                        readonly nodeType: "Return";
                        readonly src: "4876:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4766:9:150";
                readonly parameters: {
                    readonly id: 35395;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35390;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4790:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35407;
                        readonly src: "4776:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35389;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4776:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35392;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4813:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35407;
                        readonly src: "4799:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35391;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4799:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35394;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "4826:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35407;
                        readonly src: "4818:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 35393;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4818:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4775:57:150";
                };
                readonly returnParameters: {
                    readonly id: 35398;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35397;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35407;
                        readonly src: "4851:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35396;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4851:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4850:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35427;
                readonly nodeType: "FunctionDefinition";
                readonly src: "4936:202:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35426;
                    readonly nodeType: "Block";
                    readonly src: "5074:64:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35421;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35409;
                                readonly src: "5111:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35422;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35411;
                                readonly src: "5120:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35423;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35414;
                                readonly src: "5125:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                    readonly typeString: "bytes32[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                                    readonly typeString: "bytes32[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35419;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "5091:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35420;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5094:16:150";
                                readonly memberName: "serializeBytes32";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40255;
                                readonly src: "5091:19:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes32_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes32[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35424;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5091:40:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35418;
                        readonly id: 35425;
                        readonly nodeType: "Return";
                        readonly src: "5084:47:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "4945:9:150";
                readonly parameters: {
                    readonly id: 35415;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35409;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "4969:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35427;
                        readonly src: "4955:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35408;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4955:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35411;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "4992:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35427;
                        readonly src: "4978:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35410;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "4978:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35414;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5014:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35427;
                        readonly src: "4997:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes32_$dyn_memory_ptr";
                            readonly typeString: "bytes32[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35412;
                                readonly name: "bytes32";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4997:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes32";
                                    readonly typeString: "bytes32";
                                };
                            };
                            readonly id: 35413;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "4997:9:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes32_$dyn_storage_ptr";
                                readonly typeString: "bytes32[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "4954:66:150";
                };
                readonly returnParameters: {
                    readonly id: 35418;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35417;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35427;
                        readonly src: "5055:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35416;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5055:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5054:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35446;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5144:176:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35445;
                    readonly nodeType: "Block";
                    readonly src: "5258:62:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35440;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35429;
                                readonly src: "5293:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35441;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35431;
                                readonly src: "5302:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35442;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35433;
                                readonly src: "5307:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly expression: {
                                    readonly id: 35438;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "5275:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35439;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5278:14:150";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40195;
                                readonly src: "5275:17:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_bytes_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35443;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5275:38:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35437;
                        readonly id: 35444;
                        readonly nodeType: "Return";
                        readonly src: "5268:45:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5153:9:150";
                readonly parameters: {
                    readonly id: 35434;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35429;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5177:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35446;
                        readonly src: "5163:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35428;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5163:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35431;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5200:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35446;
                        readonly src: "5186:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35430;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5186:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35433;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5218:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35446;
                        readonly src: "5205:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_memory_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 35432;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5205:5:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5162:62:150";
                };
                readonly returnParameters: {
                    readonly id: 35437;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35436;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35446;
                        readonly src: "5243:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35435;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5242:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35466;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5326:198:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35465;
                    readonly nodeType: "Block";
                    readonly src: "5462:62:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35460;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35448;
                                readonly src: "5497:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35461;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35450;
                                readonly src: "5506:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35462;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35453;
                                readonly src: "5511:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "bytes memory[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "bytes memory[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35458;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "5479:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35459;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5482:14:150";
                                readonly memberName: "serializeBytes";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40279;
                                readonly src: "5479:17:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_bytes_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,bytes memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35463;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5479:38:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35457;
                        readonly id: 35464;
                        readonly nodeType: "Return";
                        readonly src: "5472:45:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5335:9:150";
                readonly parameters: {
                    readonly id: 35454;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35448;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5359:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35466;
                        readonly src: "5345:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35447;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5345:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35450;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5382:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35466;
                        readonly src: "5368:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35449;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5368:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35453;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5402:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35466;
                        readonly src: "5387:20:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_bytes_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "bytes[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35451;
                                readonly name: "bytes";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5387:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_storage_ptr";
                                    readonly typeString: "bytes";
                                };
                            };
                            readonly id: 35452;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5387:7:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_bytes_storage_$dyn_storage_ptr";
                                readonly typeString: "bytes[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5344:64:150";
                };
                readonly returnParameters: {
                    readonly id: 35457;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35456;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35466;
                        readonly src: "5443:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35455;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5443:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5442:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35485;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5530:198:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35484;
                    readonly nodeType: "Block";
                    readonly src: "5665:63:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35479;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35468;
                                readonly src: "5701:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35480;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35470;
                                readonly src: "5710:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35481;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35472;
                                readonly src: "5715:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35477;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "5682:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35478;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5685:15:150";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40184;
                                readonly src: "5682:18:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35482;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5682:39:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35476;
                        readonly id: 35483;
                        readonly nodeType: "Return";
                        readonly src: "5675:46:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5539:9:150";
                readonly parameters: {
                    readonly id: 35473;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35468;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5563:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35485;
                        readonly src: "5549:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35467;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5549:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35470;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5586:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35485;
                        readonly src: "5572:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35469;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5572:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35472;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5605:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35485;
                        readonly src: "5591:19:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35471;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5591:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5548:63:150";
                };
                readonly returnParameters: {
                    readonly id: 35476;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35475;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35485;
                        readonly src: "5646:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35474;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5646:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5645:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35505;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5734:200:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35504;
                    readonly nodeType: "Block";
                    readonly src: "5871:63:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35499;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35487;
                                readonly src: "5907:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35500;
                                readonly name: "key";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35489;
                                readonly src: "5916:3:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35501;
                                readonly name: "value";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35492;
                                readonly src: "5921:5:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                                    readonly typeString: "string memory[] memory";
                                }];
                                readonly expression: {
                                    readonly id: 35497;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "5888:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35498;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "5891:15:150";
                                readonly memberName: "serializeString";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40267;
                                readonly src: "5888:18:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_array$_t_string_memory_ptr_$dyn_memory_ptr_$returns$_t_string_memory_ptr_$";
                                    readonly typeString: "function (string memory,string memory,string memory[] memory) external returns (string memory)";
                                };
                            };
                            readonly id: 35502;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5888:39:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_memory_ptr";
                                readonly typeString: "string memory";
                            };
                        };
                        readonly functionReturnParameters: 35496;
                        readonly id: 35503;
                        readonly nodeType: "Return";
                        readonly src: "5881:46:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "serialize";
                readonly nameLocation: "5743:9:150";
                readonly parameters: {
                    readonly id: 35493;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35487;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5767:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35505;
                        readonly src: "5753:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35486;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5753:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35489;
                        readonly mutability: "mutable";
                        readonly name: "key";
                        readonly nameLocation: "5790:3:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35505;
                        readonly src: "5776:17:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35488;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5776:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35492;
                        readonly mutability: "mutable";
                        readonly name: "value";
                        readonly nameLocation: "5811:5:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35505;
                        readonly src: "5795:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_array$_t_string_memory_ptr_$dyn_memory_ptr";
                            readonly typeString: "string[]";
                        };
                        readonly typeName: {
                            readonly baseType: {
                                readonly id: 35490;
                                readonly name: "string";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5795:6:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_storage_ptr";
                                    readonly typeString: "string";
                                };
                            };
                            readonly id: 35491;
                            readonly nodeType: "ArrayTypeName";
                            readonly src: "5795:8:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_array$_t_string_storage_$dyn_storage_ptr";
                                readonly typeString: "string[]";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5752:65:150";
                };
                readonly returnParameters: {
                    readonly id: 35496;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35495;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35505;
                        readonly src: "5852:13:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35494;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5852:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5851:15:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35520;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5940:111:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35519;
                    readonly nodeType: "Block";
                    readonly src: "6007:44:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35515;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35507;
                                readonly src: "6030:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35516;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35509;
                                readonly src: "6039:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35512;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "6017:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35514;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6020:9:150";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40286;
                                readonly src: "6017:12:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory) external";
                                };
                            };
                            readonly id: 35517;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6017:27:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35518;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6017:27:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "5949:5:150";
                readonly parameters: {
                    readonly id: 35510;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35507;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "5969:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35520;
                        readonly src: "5955:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35506;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5955:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35509;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "5992:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35520;
                        readonly src: "5978:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35508;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5978:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5954:43:150";
                };
                readonly returnParameters: {
                    readonly id: 35511;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6007:0:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 35538;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6057:145:150";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 35537;
                    readonly nodeType: "Block";
                    readonly src: "6148:54:150";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 35532;
                                readonly name: "jsonKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35522;
                                readonly src: "6171:7:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35533;
                                readonly name: "path";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35524;
                                readonly src: "6180:4:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }, {
                                readonly id: 35534;
                                readonly name: "valueKey";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 35526;
                                readonly src: "6186:8:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }, {
                                    readonly typeIdentifier: "t_string_memory_ptr";
                                    readonly typeString: "string memory";
                                }];
                                readonly expression: {
                                    readonly id: 35529;
                                    readonly name: "vm";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 34985;
                                    readonly src: "6158:2:150";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_VmSafe_$40341";
                                        readonly typeString: "contract VmSafe";
                                    };
                                };
                                readonly id: 35531;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "6161:9:150";
                                readonly memberName: "writeJson";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 40295;
                                readonly src: "6158:12:150";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$";
                                    readonly typeString: "function (string memory,string memory,string memory) external";
                                };
                            };
                            readonly id: 35535;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6158:37:150";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 35536;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6158:37:150";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "write";
                readonly nameLocation: "6066:5:150";
                readonly parameters: {
                    readonly id: 35527;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 35522;
                        readonly mutability: "mutable";
                        readonly name: "jsonKey";
                        readonly nameLocation: "6086:7:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35538;
                        readonly src: "6072:21:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35521;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6072:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35524;
                        readonly mutability: "mutable";
                        readonly name: "path";
                        readonly nameLocation: "6109:4:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35538;
                        readonly src: "6095:18:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35523;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6095:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 35526;
                        readonly mutability: "mutable";
                        readonly name: "valueKey";
                        readonly nameLocation: "6129:8:150";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 35538;
                        readonly src: "6115:22:150";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_string_memory_ptr";
                            readonly typeString: "string";
                        };
                        readonly typeName: {
                            readonly id: 35525;
                            readonly name: "string";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6115:6:150";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_string_storage_ptr";
                                readonly typeString: "string";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6071:67:150";
                };
                readonly returnParameters: {
                    readonly id: 35528;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6148:0:150";
                };
                readonly scope: 35539;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "stdJson";
            readonly contractDependencies: readonly [];
            readonly contractKind: "library";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [35539];
            readonly name: "stdJson";
            readonly nameLocation: "838:7:150";
            readonly scope: 35540;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 150;
};
//# sourceMappingURL=stdJson.d.ts.map