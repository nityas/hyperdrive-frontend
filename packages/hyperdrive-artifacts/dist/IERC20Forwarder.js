export const IERC20Forwarder = {
    "abi": [
        {
            "inputs": [],
            "name": "ExpiredDeadline",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "InvalidSignature",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "RestrictedZeroAddress",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
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
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
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
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "domainSeparator",
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
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
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
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "token",
            "outputs": [
                {
                    "internalType": "contract IMultiToken",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "tokenId",
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
            "inputs": [],
            "name": "totalSupply",
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
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
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
        "PERMIT_TYPEHASH()": "30adf81f",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "decimals()": "313ce567",
        "domainSeparator()": "f698da25",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "symbol()": "95d89b41",
        "token()": "fc0c546a",
        "tokenId()": "17d70f7c",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ExpiredDeadline\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidSignature\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"domainSeparator\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"token\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"tokenId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"returns\":{\"_0\":\"The permit typehash.\"}},\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"domainSeparator()\":{\"returns\":{\"_0\":\"The domain separator.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"nonces(address)\":{\"params\":{\"user\":\"The user's address.\"},\"returns\":{\"_0\":\"The nonce.\"}},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"details\":\"The signature for this function follows EIP712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values. Those values are not      supported.\",\"params\":{\"deadline\":\"The timestamp which the signature must be submitted by        to be valid.\",\"owner\":\"The owner of the account which is having the new approval set.\",\"r\":\"The r component of the ECDSA signature.\",\"s\":\"The s component of the ECDSA signature.\",\"spender\":\"The address which will be allowed to spend owner's tokens.\",\"v\":\"Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.\",\"value\":\"The new allowance value.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"token()\":{\"returns\":{\"_0\":\"The target MultiToken.\"}},\"tokenId()\":{\"returns\":{\"_0\":\"The target token ID.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"ExpiredDeadline()\":[{\"notice\":\"Thrown when a permit signature is submitted after its deadline         has expired.\"}],\"InvalidSignature()\":[{\"notice\":\"Thrown when a permit signature doesn't recover to the owner's         address.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when a permit signature recovers to the zero address.\"}]},\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"PERMIT_TYPEHASH()\":{\"notice\":\"The EIP712 typehash for the permit struct used by this contract.\"},\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"domainSeparator()\":{\"notice\":\"The EIP712 domain separator for this contract.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"nonces(address)\":{\"notice\":\"Gets a user's nonce for permit.\"},\"permit(address,address,uint256,uint256,uint8,bytes32,bytes32)\":{\"notice\":\"This function allows a caller who is not the owner of an account         to execute the functionality of 'approve' with the owner's         signature.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"token()\":{\"notice\":\"Gets the target MultiToken of this forwarder.\"},\"tokenId()\":{\"notice\":\"Gets the target token ID of this forwarder.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20Forwarder.sol\":\"IERC20Forwarder\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC20Forwarder.sol\":{\"keccak256\":\"0xeb9152fad7b2431ab4e9f0db4945462104825ac0ca2541319fafb1ea3e726592\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ab76c60cc144e299295e24f00f4e642ab093eab7c0157de6201b96cd2097892e\",\"dweb:/ipfs/QmYLiPgwNvZgUKzuLqsJKAotqFoq1Yw7y5NQZgbUcdCWgV\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "ExpiredDeadline"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidSignature"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "RestrictedZeroAddress"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "PERMIT_TYPEHASH",
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
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "allowance",
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
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "domainSeparator",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
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
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "token",
                    "outputs": [
                        {
                            "internalType": "contract IMultiToken",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "tokenId",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalSupply",
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
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transfer",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "PERMIT_TYPEHASH()": {
                        "returns": {
                            "_0": "The permit typehash."
                        }
                    },
                    "allowance(address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens."
                        },
                        "returns": {
                            "_0": "The allowance of the spender for the owner."
                        }
                    },
                    "approve(address,uint256)": {
                        "params": {
                            "amount": "The new allowance of the spender.",
                            "spender": "The account with the allowance."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the approval succeeded."
                        }
                    },
                    "balanceOf(address)": {
                        "params": {
                            "account": "The owner of the tokens."
                        },
                        "returns": {
                            "_0": "The account's balance."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The token's decimals."
                        }
                    },
                    "domainSeparator()": {
                        "returns": {
                            "_0": "The domain separator."
                        }
                    },
                    "name()": {
                        "returns": {
                            "_0": "The token's name."
                        }
                    },
                    "nonces(address)": {
                        "params": {
                            "user": "The user's address."
                        },
                        "returns": {
                            "_0": "The nonce."
                        }
                    },
                    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
                        "details": "The signature for this function follows EIP712 standard and should      be generated with the eth_signTypedData JSON RPC call instead of      the eth_sign JSON RPC call. If using out of date parity signing      libraries the v component may need to be adjusted. Also it is very      rare but possible for v to be other values. Those values are not      supported.",
                        "params": {
                            "deadline": "The timestamp which the signature must be submitted by        to be valid.",
                            "owner": "The owner of the account which is having the new approval set.",
                            "r": "The r component of the ECDSA signature.",
                            "s": "The s component of the ECDSA signature.",
                            "spender": "The address which will be allowed to spend owner's tokens.",
                            "v": "Extra ECDSA data which allows public key recovery from        signature assumed to be 27 or 28.",
                            "value": "The new allowance value."
                        }
                    },
                    "symbol()": {
                        "returns": {
                            "_0": "The token's symbol."
                        }
                    },
                    "token()": {
                        "returns": {
                            "_0": "The target MultiToken."
                        }
                    },
                    "tokenId()": {
                        "returns": {
                            "_0": "The target token ID."
                        }
                    },
                    "totalSupply()": {
                        "returns": {
                            "_0": "The token's total supply."
                        }
                    },
                    "transfer(address,uint256)": {
                        "params": {
                            "amount": "The amount of tokens that will be transferred.",
                            "to": "The recipient of the tokens."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the transfer succeeded."
                        }
                    },
                    "transferFrom(address,address,uint256)": {
                        "params": {
                            "amount": "The amount of tokens that will be transferred.",
                            "from": "The owner of the tokens.",
                            "to": "The recipient of the tokens."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the transfer succeeded."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "PERMIT_TYPEHASH()": {
                        "notice": "The EIP712 typehash for the permit struct used by this contract."
                    },
                    "allowance(address,address)": {
                        "notice": "Gets the allowance of a spender for an owner."
                    },
                    "approve(address,uint256)": {
                        "notice": "Updates the allowance of a spender on behalf of the sender."
                    },
                    "balanceOf(address)": {
                        "notice": "Gets the balance of an account."
                    },
                    "decimals()": {
                        "notice": "Gets the token's decimals."
                    },
                    "domainSeparator()": {
                        "notice": "The EIP712 domain separator for this contract."
                    },
                    "name()": {
                        "notice": "Gets the token's name."
                    },
                    "nonces(address)": {
                        "notice": "Gets a user's nonce for permit."
                    },
                    "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": {
                        "notice": "This function allows a caller who is not the owner of an account         to execute the functionality of 'approve' with the owner's         signature."
                    },
                    "symbol()": {
                        "notice": "Gets the token's symbol."
                    },
                    "token()": {
                        "notice": "Gets the target MultiToken of this forwarder."
                    },
                    "tokenId()": {
                        "notice": "Gets the target token ID of this forwarder."
                    },
                    "totalSupply()": {
                        "notice": "Gets the token's total supply."
                    },
                    "transfer(address,uint256)": {
                        "notice": "Transfers tokens from the sender's account to another account."
                    },
                    "transferFrom(address,address,uint256)": {
                        "notice": "Transfers tokens from an owner to a recipient. This draws from         the sender's allowance."
                    }
                },
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
                "contracts/src/interfaces/IERC20Forwarder.sol": "IERC20Forwarder"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20Forwarder.sol": {
                "keccak256": "0xeb9152fad7b2431ab4e9f0db4945462104825ac0ca2541319fafb1ea3e726592",
                "urls": [
                    "bzz-raw://ab76c60cc144e299295e24f00f4e642ab093eab7c0157de6201b96cd2097892e",
                    "dweb:/ipfs/QmYLiPgwNvZgUKzuLqsJKAotqFoq1Yw7y5NQZgbUcdCWgV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IERC20Forwarder.sol",
        "id": 9736,
        "exportedSymbols": {
            "IERC20": [
                9666
            ],
            "IERC20Forwarder": [
                9735
            ],
            "IMultiToken": [
                11334
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2823:80",
        "nodes": [
            {
                "id": 9668,
                "nodeType": "PragmaDirective",
                "src": "39:23:80",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 9670,
                "nodeType": "ImportDirective",
                "src": "64:38:80",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9736,
                "sourceUnit": 9667,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9669,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9666,
                            "src": "73:6:80",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9672,
                "nodeType": "ImportDirective",
                "src": "103:48:80",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
                "file": "./IMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 9736,
                "sourceUnit": 11335,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 9671,
                            "name": "IMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11334,
                            "src": "112:11:80",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 9735,
                "nodeType": "ContractDefinition",
                "src": "153:2708:80",
                "nodes": [
                    {
                        "id": 9677,
                        "nodeType": "ErrorDefinition",
                        "src": "323:24:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9675,
                            "nodeType": "StructuredDocumentation",
                            "src": "215:103:80",
                            "text": "@notice Thrown when a permit signature is submitted after its deadline\n         has expired."
                        },
                        "errorSelector": "f87d9271",
                        "name": "ExpiredDeadline",
                        "nameLocation": "329:15:80",
                        "parameters": {
                            "id": 9676,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "344:2:80"
                        }
                    },
                    {
                        "id": 9680,
                        "nodeType": "ErrorDefinition",
                        "src": "456:25:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9678,
                            "nodeType": "StructuredDocumentation",
                            "src": "353:98:80",
                            "text": "@notice Thrown when a permit signature doesn't recover to the owner's\n         address."
                        },
                        "errorSelector": "8baa579f",
                        "name": "InvalidSignature",
                        "nameLocation": "462:16:80",
                        "parameters": {
                            "id": 9679,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "478:2:80"
                        }
                    },
                    {
                        "id": 9683,
                        "nodeType": "ErrorDefinition",
                        "src": "564:30:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9681,
                            "nodeType": "StructuredDocumentation",
                            "src": "487:72:80",
                            "text": "@notice Thrown when a permit signature recovers to the zero address."
                        },
                        "errorSelector": "f0dd15fd",
                        "name": "RestrictedZeroAddress",
                        "nameLocation": "570:21:80",
                        "parameters": {
                            "id": 9682,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "591:2:80"
                        }
                    },
                    {
                        "id": 9701,
                        "nodeType": "FunctionDefinition",
                        "src": "1777:183:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9684,
                            "nodeType": "StructuredDocumentation",
                            "src": "623:1149:80",
                            "text": "@notice This function allows a caller who is not the owner of an account\n         to execute the functionality of 'approve' with the owner's\n         signature.\n @dev The signature for this function follows EIP712 standard and should\n      be generated with the eth_signTypedData JSON RPC call instead of\n      the eth_sign JSON RPC call. If using out of date parity signing\n      libraries the v component may need to be adjusted. Also it is very\n      rare but possible for v to be other values. Those values are not\n      supported.\n @param owner The owner of the account which is having the new approval set.\n @param spender The address which will be allowed to spend owner's tokens.\n @param value The new allowance value.\n @param deadline The timestamp which the signature must be submitted by\n        to be valid.\n @param v Extra ECDSA data which allows public key recovery from\n        signature assumed to be 27 or 28.\n @param r The r component of the ECDSA signature.\n @param s The s component of the ECDSA signature."
                        },
                        "functionSelector": "d505accf",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permit",
                        "nameLocation": "1786:6:80",
                        "parameters": {
                            "id": 9699,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9686,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "1810:5:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1802:13:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9685,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1802:7:80",
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
                                    "id": 9688,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1833:7:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1825:15:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9687,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1825:7:80",
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
                                    "id": 9690,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "1858:5:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1850:13:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9689,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1850:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9692,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "1881:8:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1873:16:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9691,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1873:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9694,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "1905:1:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1899:7:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 9693,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1899:5:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9696,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "1924:1:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1916:9:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 9695,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1916:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 9698,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "1943:1:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9701,
                                    "src": "1935:9:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 9697,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1935:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1792:158:80"
                        },
                        "returnParameters": {
                            "id": 9700,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1959:0:80"
                        },
                        "scope": 9735,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9709,
                        "nodeType": "FunctionDefinition",
                        "src": "2081:62:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9702,
                            "nodeType": "StructuredDocumentation",
                            "src": "1966:110:80",
                            "text": "@notice Gets a user's nonce for permit.\n @param user The user's address.\n @return The nonce."
                        },
                        "functionSelector": "7ecebe00",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nonces",
                        "nameLocation": "2090:6:80",
                        "parameters": {
                            "id": 9705,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9704,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "2105:4:80",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9709,
                                    "src": "2097:12:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9703,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2097:7:80",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2096:14:80"
                        },
                        "returnParameters": {
                            "id": 9708,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9707,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9709,
                                    "src": "2134:7:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9706,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2134:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2133:9:80"
                        },
                        "scope": 9735,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9716,
                        "nodeType": "FunctionDefinition",
                        "src": "2250:53:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9710,
                            "nodeType": "StructuredDocumentation",
                            "src": "2149:96:80",
                            "text": "@notice Gets the target MultiToken of this forwarder.\n @return The target MultiToken."
                        },
                        "functionSelector": "fc0c546a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "token",
                        "nameLocation": "2259:5:80",
                        "parameters": {
                            "id": 9711,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2264:2:80"
                        },
                        "returnParameters": {
                            "id": 9715,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9714,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9716,
                                    "src": "2290:11:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$11334",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 9713,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 9712,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "2290:11:80"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 11334,
                                            "src": "2290:11:80"
                                        },
                                        "referencedDeclaration": 11334,
                                        "src": "2290:11:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$11334",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2289:13:80"
                        },
                        "scope": 9735,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9722,
                        "nodeType": "FunctionDefinition",
                        "src": "2406:51:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9717,
                            "nodeType": "StructuredDocumentation",
                            "src": "2309:92:80",
                            "text": "@notice Gets the target token ID of this forwarder.\n @return The target token ID."
                        },
                        "functionSelector": "17d70f7c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "tokenId",
                        "nameLocation": "2415:7:80",
                        "parameters": {
                            "id": 9718,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2422:2:80"
                        },
                        "returnParameters": {
                            "id": 9721,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9720,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9722,
                                    "src": "2448:7:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9719,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2448:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2447:9:80"
                        },
                        "scope": 9735,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9728,
                        "nodeType": "FunctionDefinition",
                        "src": "2564:59:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9723,
                            "nodeType": "StructuredDocumentation",
                            "src": "2463:96:80",
                            "text": "@notice The EIP712 domain separator for this contract.\n @return The domain separator."
                        },
                        "functionSelector": "f698da25",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "domainSeparator",
                        "nameLocation": "2573:15:80",
                        "parameters": {
                            "id": 9724,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2588:2:80"
                        },
                        "returnParameters": {
                            "id": 9727,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9726,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9728,
                                    "src": "2614:7:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 9725,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2614:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2613:9:80"
                        },
                        "scope": 9735,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9734,
                        "nodeType": "FunctionDefinition",
                        "src": "2800:59:80",
                        "nodes": [],
                        "documentation": {
                            "id": 9729,
                            "nodeType": "StructuredDocumentation",
                            "src": "2629:113:80",
                            "text": "@notice The EIP712 typehash for the permit struct used by this contract.\n @return The permit typehash."
                        },
                        "functionSelector": "30adf81f",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "PERMIT_TYPEHASH",
                        "nameLocation": "2809:15:80",
                        "parameters": {
                            "id": 9730,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2824:2:80"
                        },
                        "returnParameters": {
                            "id": 9733,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9732,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9734,
                                    "src": "2850:7:80",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 9731,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2850:7:80",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2849:9:80"
                        },
                        "scope": 9735,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 9673,
                            "name": "IERC20",
                            "nameLocations": [
                                "182:6:80"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9666,
                            "src": "182:6:80"
                        },
                        "id": 9674,
                        "nodeType": "InheritanceSpecifier",
                        "src": "182:6:80"
                    }
                ],
                "canonicalName": "IERC20Forwarder",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    9735,
                    9666
                ],
                "name": "IERC20Forwarder",
                "nameLocation": "163:15:80",
                "scope": 9736,
                "usedErrors": [
                    9677,
                    9680,
                    9683
                ],
                "usedEvents": [
                    9582,
                    9591
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 80
};
