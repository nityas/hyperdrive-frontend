export declare const IMultiTokenMetadata: {
    readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "PERMIT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "domainSeparator";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
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
        readonly "PERMIT_TYPEHASH()": "30adf81f";
        readonly "domainSeparator()": "f698da25";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"returns\":{\"_0\":\"The EIP712 permit typehash of the MultiToken.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The EIP712 domain separator of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"Gets the EIP712 permit typehash of the MultiToken.\"},\"domainSeparator()\":{\"notice\":\"Gets the EIP712 domain separator of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenMetadata.sol\":\"IMultiTokenMetadata\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]}},\"version\":1}";
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
                readonly name: "PERMIT_TYPEHASH";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "domainSeparator";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "PERMIT_TYPEHASH()": {
                        readonly returns: {
                            readonly _0: "The EIP712 permit typehash of the MultiToken.";
                        };
                    };
                    readonly "domainSeparator()": {
                        readonly returns: {
                            readonly _0: "The EIP712 domain separator of the MultiToken.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "PERMIT_TYPEHASH()": {
                        readonly notice: "Gets the EIP712 permit typehash of the MultiToken.";
                    };
                    readonly "domainSeparator()": {
                        readonly notice: "Gets the EIP712 domain separator of the MultiToken.";
                    };
                };
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
                readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": "IMultiTokenMetadata";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/IMultiTokenMetadata.sol";
        readonly id: 11475;
        readonly exportedSymbols: {
            readonly IMultiTokenMetadata: readonly [11474];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:491:99";
        readonly nodes: readonly [{
            readonly id: 11461;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:99";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 11474;
            readonly nodeType: "ContractDefinition";
            readonly src: "64:465:99";
            readonly nodes: readonly [{
                readonly id: 11467;
                readonly nodeType: "FunctionDefinition";
                readonly src: "272:59:99";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11462;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "100:124:99";
                    readonly text: "@notice Gets the EIP712 permit typehash of the MultiToken.\n @return The EIP712 permit typehash of the MultiToken.";
                };
                readonly functionSelector: "30adf81f";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "PERMIT_TYPEHASH";
                readonly nameLocation: "281:15:99";
                readonly parameters: {
                    readonly id: 11463;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "296:2:99";
                };
                readonly returnParameters: {
                    readonly id: 11466;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11465;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11467;
                        readonly src: "322:7:99";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11464;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "322:7:99";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "321:9:99";
                };
                readonly scope: 11474;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 11473;
                readonly nodeType: "FunctionDefinition";
                readonly src: "468:59:99";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 11468;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "337:126:99";
                    readonly text: "@notice Gets the EIP712 domain separator of the MultiToken.\n @return The EIP712 domain separator of the MultiToken.";
                };
                readonly functionSelector: "f698da25";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "domainSeparator";
                readonly nameLocation: "477:15:99";
                readonly parameters: {
                    readonly id: 11469;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "492:2:99";
                };
                readonly returnParameters: {
                    readonly id: 11472;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 11471;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 11473;
                        readonly src: "518:7:99";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes32";
                            readonly typeString: "bytes32";
                        };
                        readonly typeName: {
                            readonly id: 11470;
                            readonly name: "bytes32";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "518:7:99";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes32";
                                readonly typeString: "bytes32";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "517:9:99";
                };
                readonly scope: 11474;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IMultiTokenMetadata";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [11474];
            readonly name: "IMultiTokenMetadata";
            readonly nameLocation: "74:19:99";
            readonly scope: 11475;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 99;
};
//# sourceMappingURL=IMultiTokenMetadata.d.ts.map