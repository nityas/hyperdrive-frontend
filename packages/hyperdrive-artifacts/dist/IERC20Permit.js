export const IERC20Permit = {
    "abi": [
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "nonces",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
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
    "methodIdentifiers": {
        "DOMAIN_SEPARATOR()": "3644e515",
        "nonces(address)": "7ecebe00",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in https://eips.ethereum.org/EIPS/eip-2612[EIP-2612]. Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't need to send a transaction, and thus is not required to hold Ether at all. ==== Security Considerations There are two important considerations concerning the use of `permit`. The first is that a valid permit signature expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be considered as an intention to spend the allowance in any specific way. The second is that because permits have built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be generally recommended is: ```solidity function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}     doThing(..., value); } function doThing(..., uint256 value) public {     token.safeTransferFrom(msg.sender, address(this), value);     ... } ``` Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also {SafeERC20-safeTransferFrom}). Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so contracts should have entry points that don't rely on permit.\",\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"details\":\"Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\"},\"nonces(address)\":{\"details\":\"Returns the current nonce for `owner`. This value must be included whenever a signature is generated for {permit}. Every successful call to {permit} increases ``owner``'s nonce by one. This prevents a signature from being used multiple times.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"Sets `value` as the allowance of `spender` over ``owner``'s tokens, given ``owner``'s signed approval. IMPORTANT: The same issues {IERC20-approve} has related to transaction ordering also apply here. Emits an {Approval} event. Requirements: - `spender` cannot be the zero address. - `deadline` must be a timestamp in the future. - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments. - the signature must use ``owner``'s current nonce (see {nonces}). For more information on the signature format, see the https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section]. CAUTION: See Security Considerations above.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":\"IERC20Permit\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "nonces",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permit"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "DOMAIN_SEPARATOR()": {
                        "details": "Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}."
                    },
                    "nonces(address)": {
                        "details": "Returns the current nonce for `owner`. This value must be included whenever a signature is generated for {permit}. Every successful call to {permit} increases ``owner``'s nonce by one. This prevents a signature from being used multiple times."
                    },
                    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
                        "details": "Sets `value` as the allowance of `spender` over ``owner``'s tokens, given ``owner``'s signed approval. IMPORTANT: The same issues {IERC20-approve} has related to transaction ordering also apply here. Emits an {Approval} event. Requirements: - `spender` cannot be the zero address. - `deadline` must be a timestamp in the future. - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner` over the EIP712-formatted function arguments. - the signature must use ``owner``'s current nonce (see {nonces}). For more information on the signature format, see the https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP section]. CAUTION: See Security Considerations above."
                    }
                },
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
                "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": "IERC20Permit"
            },
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
                "urls": [
                    "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
                    "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol",
        "id": 70998,
        "exportedSymbols": {
            "IERC20Permit": [
                70997
            ]
        },
        "nodeType": "SourceUnit",
        "src": "123:3680:165",
        "nodes": [
            {
                "id": 70963,
                "nodeType": "PragmaDirective",
                "src": "123:24:165",
                "nodes": [],
                "literals": [
                    "solidity",
                    "^",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 70997,
                "nodeType": "ContractDefinition",
                "src": "2113:1689:165",
                "nodes": [
                    {
                        "id": 70982,
                        "nodeType": "FunctionDefinition",
                        "src": "2997:183:165",
                        "nodes": [],
                        "documentation": {
                            "id": 70965,
                            "nodeType": "StructuredDocumentation",
                            "src": "2142:850:165",
                            "text": " @dev Sets `value` as the allowance of `spender` over ``owner``'s tokens,\n given ``owner``'s signed approval.\n IMPORTANT: The same issues {IERC20-approve} has related to transaction\n ordering also apply here.\n Emits an {Approval} event.\n Requirements:\n - `spender` cannot be the zero address.\n - `deadline` must be a timestamp in the future.\n - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\n over the EIP712-formatted function arguments.\n - the signature must use ``owner``'s current nonce (see {nonces}).\n For more information on the signature format, see the\n https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\n section].\n CAUTION: See Security Considerations above."
                        },
                        "functionSelector": "d505accf",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permit",
                        "nameLocation": "3006:6:165",
                        "parameters": {
                            "id": 70980,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70967,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3030:5:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3022:13:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70966,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3022:7:165",
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
                                    "id": 70969,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3053:7:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3045:15:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70968,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3045:7:165",
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
                                    "id": 70971,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3078:5:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3070:13:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70970,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3070:7:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70973,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "3101:8:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3093:16:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70972,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3093:7:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70975,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "3125:1:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3119:7:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 70974,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3119:5:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70977,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "3144:1:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3136:9:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 70976,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3136:7:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 70979,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "3163:1:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70982,
                                    "src": "3155:9:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 70978,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3155:7:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3012:158:165"
                        },
                        "returnParameters": {
                            "id": 70981,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3179:0:165"
                        },
                        "scope": 70997,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 70990,
                        "nodeType": "FunctionDefinition",
                        "src": "3485:63:165",
                        "nodes": [],
                        "documentation": {
                            "id": 70983,
                            "nodeType": "StructuredDocumentation",
                            "src": "3186:294:165",
                            "text": " @dev Returns the current nonce for `owner`. This value must be\n included whenever a signature is generated for {permit}.\n Every successful call to {permit} increases ``owner``'s nonce by one. This\n prevents a signature from being used multiple times."
                        },
                        "functionSelector": "7ecebe00",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nonces",
                        "nameLocation": "3494:6:165",
                        "parameters": {
                            "id": 70986,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70985,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3509:5:165",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70990,
                                    "src": "3501:13:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 70984,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3501:7:165",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3500:15:165"
                        },
                        "returnParameters": {
                            "id": 70989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70988,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70990,
                                    "src": "3539:7:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 70987,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3539:7:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3538:9:165"
                        },
                        "scope": 70997,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 70996,
                        "nodeType": "FunctionDefinition",
                        "src": "3740:60:165",
                        "nodes": [],
                        "documentation": {
                            "id": 70991,
                            "nodeType": "StructuredDocumentation",
                            "src": "3554:128:165",
                            "text": " @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}."
                        },
                        "functionSelector": "3644e515",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "DOMAIN_SEPARATOR",
                        "nameLocation": "3749:16:165",
                        "parameters": {
                            "id": 70992,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "3765:2:165"
                        },
                        "returnParameters": {
                            "id": 70995,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70994,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 70996,
                                    "src": "3791:7:165",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 70993,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3791:7:165",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3790:9:165"
                        },
                        "scope": 70997,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IERC20Permit",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 70964,
                    "nodeType": "StructuredDocumentation",
                    "src": "149:1963:165",
                    "text": " @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\n https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\n Adds the {permit} method, which can be used to change an account's ERC20 allowance (see {IERC20-allowance}) by\n presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn't\n need to send a transaction, and thus is not required to hold Ether at all.\n ==== Security Considerations\n There are two important considerations concerning the use of `permit`. The first is that a valid permit signature\n expresses an allowance, and it should not be assumed to convey additional meaning. In particular, it should not be\n considered as an intention to spend the allowance in any specific way. The second is that because permits have\n built-in replay protection and can be submitted by anyone, they can be frontrun. A protocol that uses permits should\n take this into consideration and allow a `permit` call to fail. Combining these two aspects, a pattern that may be\n generally recommended is:\n ```solidity\n function doThingWithPermit(..., uint256 value, uint256 deadline, uint8 v, bytes32 r, bytes32 s) public {\n     try token.permit(msg.sender, address(this), value, deadline, v, r, s) {} catch {}\n     doThing(..., value);\n }\n function doThing(..., uint256 value) public {\n     token.safeTransferFrom(msg.sender, address(this), value);\n     ...\n }\n ```\n Observe that: 1) `msg.sender` is used as the owner, leaving no ambiguity as to the signer intent, and 2) the use of\n `try/catch` allows the permit to fail and makes the code tolerant to frontrunning. (See also\n {SafeERC20-safeTransferFrom}).\n Additionally, note that smart contract wallets (such as Argent or Safe) are not able to produce permit signatures, so\n contracts should have entry points that don't rely on permit."
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    70997
                ],
                "name": "IERC20Permit",
                "nameLocation": "2123:12:165",
                "scope": 70998,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 165
};
