export declare const Context: {
    readonly abi: readonly [];
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
    readonly methodIdentifiers: {};
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"details\":\"Provides information about the current execution context, including the sender of the transaction and its data. While these are generally available via msg.sender and msg.data, they should not be accessed in such a direct manner, since when dealing with meta-transactions the account sending and paying for execution may not be the actual sender (as far as an application is concerned). This contract is only required for intermediate, library-like contracts.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":\"Context\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]}},\"version\":1}";
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
                readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": "Context";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/openzeppelin-contracts/contracts/utils/Context.sol";
        readonly id: 71571;
        readonly exportedSymbols: {
            readonly Context: readonly [71570];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "101:862:168";
        readonly nodes: readonly [{
            readonly id: 71542;
            readonly nodeType: "PragmaDirective";
            readonly src: "101:24:168";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "^", "0.8", ".20"];
        }, {
            readonly id: 71570;
            readonly nodeType: "ContractDefinition";
            readonly src: "624:338:168";
            readonly nodes: readonly [{
                readonly id: 71552;
                readonly nodeType: "FunctionDefinition";
                readonly src: "656:96:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71551;
                    readonly nodeType: "Block";
                    readonly src: "718:34:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly expression: {
                                readonly id: 71548;
                                readonly name: "msg";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -15;
                                readonly src: "735:3:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_magic_message";
                                    readonly typeString: "msg";
                                };
                            };
                            readonly id: 71549;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "739:6:168";
                            readonly memberName: "sender";
                            readonly nodeType: "MemberAccess";
                            readonly src: "735:10:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly functionReturnParameters: 71547;
                        readonly id: 71550;
                        readonly nodeType: "Return";
                        readonly src: "728:17:168";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_msgSender";
                readonly nameLocation: "665:10:168";
                readonly parameters: {
                    readonly id: 71544;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "675:2:168";
                };
                readonly returnParameters: {
                    readonly id: 71547;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71546;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71552;
                        readonly src: "709:7:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 71545;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "709:7:168";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "708:9:168";
                };
                readonly scope: 71570;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 71561;
                readonly nodeType: "FunctionDefinition";
                readonly src: "758:99:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71560;
                    readonly nodeType: "Block";
                    readonly src: "825:32:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly expression: {
                                readonly id: 71557;
                                readonly name: "msg";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: -15;
                                readonly src: "842:3:168";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_magic_message";
                                    readonly typeString: "msg";
                                };
                            };
                            readonly id: 71558;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly memberLocation: "846:4:168";
                            readonly memberName: "data";
                            readonly nodeType: "MemberAccess";
                            readonly src: "842:8:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_calldata_ptr";
                                readonly typeString: "bytes calldata";
                            };
                        };
                        readonly functionReturnParameters: 71556;
                        readonly id: 71559;
                        readonly nodeType: "Return";
                        readonly src: "835:15:168";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_msgData";
                readonly nameLocation: "767:8:168";
                readonly parameters: {
                    readonly id: 71553;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "775:2:168";
                };
                readonly returnParameters: {
                    readonly id: 71556;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71555;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71561;
                        readonly src: "809:14:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 71554;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "809:5:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "808:16:168";
                };
                readonly scope: 71570;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }, {
                readonly id: 71569;
                readonly nodeType: "FunctionDefinition";
                readonly src: "863:97:168";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 71568;
                    readonly nodeType: "Block";
                    readonly src: "935:25:168";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly hexValue: "30";
                            readonly id: 71566;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "number";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "952:1:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_rational_0_by_1";
                                readonly typeString: "int_const 0";
                            };
                            readonly value: "0";
                        };
                        readonly functionReturnParameters: 71565;
                        readonly id: 71567;
                        readonly nodeType: "Return";
                        readonly src: "945:8:168";
                    }];
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_contextSuffixLength";
                readonly nameLocation: "872:20:168";
                readonly parameters: {
                    readonly id: 71562;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "892:2:168";
                };
                readonly returnParameters: {
                    readonly id: 71565;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 71564;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 71569;
                        readonly src: "926:7:168";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 71563;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "926:7:168";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "925:9:168";
                };
                readonly scope: 71570;
                readonly stateMutability: "view";
                readonly virtual: true;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [];
            readonly canonicalName: "Context";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly documentation: {
                readonly id: 71543;
                readonly nodeType: "StructuredDocumentation";
                readonly src: "127:496:168";
                readonly text: " @dev Provides information about the current execution context, including the\n sender of the transaction and its data. While these are generally available\n via msg.sender and msg.data, they should not be accessed in such a direct\n manner, since when dealing with meta-transactions the account sending and\n paying for execution may not be the actual sender (as far as an application\n is concerned).\n This contract is only required for intermediate, library-like contracts.";
            };
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [71570];
            readonly name: "Context";
            readonly nameLocation: "642:7:168";
            readonly scope: 71571;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "MIT";
    };
    readonly id: 168;
};
//# sourceMappingURL=Context.d.ts.map