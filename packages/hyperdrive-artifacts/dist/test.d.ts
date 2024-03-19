export declare const test: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "IS_TEST";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
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
        readonly name: "failed";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
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
    }, {
        readonly type: "event";
        readonly name: "log";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_address";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_array";
        readonly inputs: readonly [{
            readonly name: "val";
            readonly type: "uint256[]";
            readonly indexed: false;
            readonly internalType: "uint256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_array";
        readonly inputs: readonly [{
            readonly name: "val";
            readonly type: "int256[]";
            readonly indexed: false;
            readonly internalType: "int256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_array";
        readonly inputs: readonly [{
            readonly name: "val";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_bytes";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_bytes32";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_int";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_address";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_array";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256[]";
            readonly indexed: false;
            readonly internalType: "uint256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_array";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256[]";
            readonly indexed: false;
            readonly internalType: "int256[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_array";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "address[]";
            readonly indexed: false;
            readonly internalType: "address[]";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_bytes";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_bytes32";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_decimal_int";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_decimal_uint";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "decimals";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_int";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "int256";
            readonly indexed: false;
            readonly internalType: "int256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_string";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_named_uint";
        readonly inputs: readonly [{
            readonly name: "key";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "val";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_string";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "log_uint";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "logs";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
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
        readonly "IS_TEST()": "fa7626d4";
        readonly "excludeArtifacts()": "b5508aa9";
        readonly "excludeContracts()": "e20c9f71";
        readonly "excludeSenders()": "1ed7831c";
        readonly "failed()": "ba414fa6";
        readonly "targetArtifactSelectors()": "66d9a9a0";
        readonly "targetArtifacts()": "85226c81";
        readonly "targetContracts()": "3f7286f4";
        readonly "targetSelectors()": "916a17c6";
        readonly "targetSenders()": "3e5e3c23";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"log_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"log_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"log_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"name\":\"log_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"val\",\"type\":\"address\"}],\"name\":\"log_named_address\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"val\",\"type\":\"uint256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256[]\",\"name\":\"val\",\"type\":\"int256[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"address[]\",\"name\":\"val\",\"type\":\"address[]\"}],\"name\":\"log_named_array\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"val\",\"type\":\"bytes\"}],\"name\":\"log_named_bytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"val\",\"type\":\"bytes32\"}],\"name\":\"log_named_bytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"decimals\",\"type\":\"uint256\"}],\"name\":\"log_named_decimal_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"int256\",\"name\":\"val\",\"type\":\"int256\"}],\"name\":\"log_named_int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"val\",\"type\":\"string\"}],\"name\":\"log_named_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"val\",\"type\":\"uint256\"}],\"name\":\"log_named_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"name\":\"log_string\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"log_uint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"name\":\"logs\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"IS_TEST\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"failed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/Test.sol\":\"Test\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/lib/ds-test/src/test.sol\":{\"keccak256\":\"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b\",\"license\":\"GPL-3.0-or-later\",\"urls\":[\"bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240\",\"dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k\"]},\"lib/forge-std/src/Base.sol\":{\"keccak256\":\"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224\",\"dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK\"]},\"lib/forge-std/src/StdAssertions.sol\":{\"keccak256\":\"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b\",\"dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL\"]},\"lib/forge-std/src/StdChains.sol\":{\"keccak256\":\"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4\",\"dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1\"]},\"lib/forge-std/src/StdCheats.sol\":{\"keccak256\":\"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a\",\"dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe\"]},\"lib/forge-std/src/StdError.sol\":{\"keccak256\":\"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6\",\"dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj\"]},\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]},\"lib/forge-std/src/StdJson.sol\":{\"keccak256\":\"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c\",\"dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV\"]},\"lib/forge-std/src/StdMath.sol\":{\"keccak256\":\"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92\",\"dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC\"]},\"lib/forge-std/src/StdStorage.sol\":{\"keccak256\":\"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26\",\"dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9\"]},\"lib/forge-std/src/StdStyle.sol\":{\"keccak256\":\"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8\",\"dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK\"]},\"lib/forge-std/src/StdUtils.sol\":{\"keccak256\":\"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140\",\"dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi\"]},\"lib/forge-std/src/Test.sol\":{\"keccak256\":\"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765\",\"dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri\"]},\"lib/forge-std/src/Vm.sol\":{\"keccak256\":\"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241\",\"dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx\"]},\"lib/forge-std/src/console.sol\":{\"keccak256\":\"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70\",\"dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec\"]},\"lib/forge-std/src/console2.sol\":{\"keccak256\":\"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973\",\"dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF\"]},\"lib/forge-std/src/interfaces/IMulticall3.sol\":{\"keccak256\":\"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0\",\"dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2\"]},\"lib/forge-std/src/safeconsole.sol\":{\"keccak256\":\"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae\",\"dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_address";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "val";
                    readonly type: "uint256[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_array";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "int256[]";
                    readonly name: "val";
                    readonly type: "int256[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_array";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address[]";
                    readonly name: "val";
                    readonly type: "address[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_array";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "";
                    readonly type: "bytes";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_bytes";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes32";
                    readonly name: "";
                    readonly type: "bytes32";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_bytes32";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_int";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "address";
                    readonly name: "val";
                    readonly type: "address";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_address";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256[]";
                    readonly name: "val";
                    readonly type: "uint256[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_array";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "int256[]";
                    readonly name: "val";
                    readonly type: "int256[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_array";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "address[]";
                    readonly name: "val";
                    readonly type: "address[]";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_array";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bytes";
                    readonly name: "val";
                    readonly type: "bytes";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_bytes";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bytes32";
                    readonly name: "val";
                    readonly type: "bytes32";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_bytes32";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "int256";
                    readonly name: "val";
                    readonly type: "int256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "decimals";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_decimal_int";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "val";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "decimals";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_decimal_uint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "int256";
                    readonly name: "val";
                    readonly type: "int256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_int";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "string";
                    readonly name: "val";
                    readonly type: "string";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_string";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "key";
                    readonly type: "string";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "val";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_named_uint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_string";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "log_uint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bytes";
                    readonly name: "";
                    readonly type: "bytes";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "logs";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "IS_TEST";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
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
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "failed";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
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
                readonly "lib/forge-std/src/Test.sol": "Test";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "lib/forge-std/lib/ds-test/src/test.sol": {
                readonly keccak256: "0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b";
                readonly urls: readonly ["bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240", "dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"];
                readonly license: "GPL-3.0-or-later";
            };
            readonly "lib/forge-std/src/Base.sol": {
                readonly keccak256: "0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c";
                readonly urls: readonly ["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224", "dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdAssertions.sol": {
                readonly keccak256: "0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60";
                readonly urls: readonly ["bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b", "dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdChains.sol": {
                readonly keccak256: "0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d";
                readonly urls: readonly ["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4", "dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdCheats.sol": {
                readonly keccak256: "0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5";
                readonly urls: readonly ["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a", "dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdError.sol": {
                readonly keccak256: "0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77";
                readonly urls: readonly ["bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6", "dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdInvariant.sol": {
                readonly keccak256: "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1";
                readonly urls: readonly ["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c", "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdJson.sol": {
                readonly keccak256: "0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b";
                readonly urls: readonly ["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c", "dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdMath.sol": {
                readonly keccak256: "0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2";
                readonly urls: readonly ["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92", "dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdStorage.sol": {
                readonly keccak256: "0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d";
                readonly urls: readonly ["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26", "dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdStyle.sol": {
                readonly keccak256: "0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d";
                readonly urls: readonly ["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8", "dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/StdUtils.sol": {
                readonly keccak256: "0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1";
                readonly urls: readonly ["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140", "dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Test.sol": {
                readonly keccak256: "0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0";
                readonly urls: readonly ["bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765", "dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/Vm.sol": {
                readonly keccak256: "0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4";
                readonly urls: readonly ["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241", "dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/console.sol": {
                readonly keccak256: "0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba";
                readonly urls: readonly ["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70", "dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/console2.sol": {
                readonly keccak256: "0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea";
                readonly urls: readonly ["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973", "dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/interfaces/IMulticall3.sol": {
                readonly keccak256: "0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a";
                readonly urls: readonly ["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0", "dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"];
                readonly license: "MIT";
            };
            readonly "lib/forge-std/src/safeconsole.sol": {
                readonly keccak256: "0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381";
                readonly urls: readonly ["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae", "dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"];
                readonly license: "MIT";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "lib/forge-std/src/Test.sol";
        readonly id: 39646;
        readonly exportedSymbols: {
            readonly DSTest: readonly [30011];
            readonly StdAssertions: readonly [31504];
            readonly StdChains: readonly [32224];
            readonly StdCheats: readonly [35042];
            readonly StdInvariant: readonly [35332];
            readonly StdStorage: readonly [36082];
            readonly StdStyle: readonly [38746];
            readonly StdUtils: readonly [39594];
            readonly Test: readonly [39645];
            readonly TestBase: readonly [30077];
            readonly Vm: readonly [41182];
            readonly console: readonly [49246];
            readonly console2: readonly [57371];
            readonly safeconsole: readonly [70609];
            readonly stdError: readonly [35108];
            readonly stdJson: readonly [35908];
            readonly stdMath: readonly [36050];
            readonly stdStorage: readonly [37535];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "32:1126:157";
        readonly nodes: readonly [{
            readonly id: 39596;
            readonly nodeType: "PragmaDirective";
            readonly src: "32:31:157";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", ">=", "0.6", ".2", "<", "0.9", ".0"];
        }, {
            readonly id: 39597;
            readonly nodeType: "PragmaDirective";
            readonly src: "65:33:157";
            readonly nodes: readonly [];
            readonly literals: readonly ["experimental", "ABIEncoderV2"];
        }, {
            readonly id: 39599;
            readonly nodeType: "ImportDirective";
            readonly src: "160:38:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/console.sol";
            readonly file: "./console.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 49247;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39598;
                    readonly name: "console";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 49246;
                    readonly src: "168:7:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39601;
            readonly nodeType: "ImportDirective";
            readonly src: "199:40:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/console2.sol";
            readonly file: "./console2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 57372;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39600;
                    readonly name: "console2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 57371;
                    readonly src: "207:8:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39603;
            readonly nodeType: "ImportDirective";
            readonly src: "240:46:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/safeconsole.sol";
            readonly file: "./safeconsole.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 70610;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39602;
                    readonly name: "safeconsole";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 70609;
                    readonly src: "248:11:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39605;
            readonly nodeType: "ImportDirective";
            readonly src: "287:50:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdAssertions.sol";
            readonly file: "./StdAssertions.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 31505;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39604;
                    readonly name: "StdAssertions";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 31504;
                    readonly src: "295:13:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39607;
            readonly nodeType: "ImportDirective";
            readonly src: "338:42:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdChains.sol";
            readonly file: "./StdChains.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 32225;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39606;
                    readonly name: "StdChains";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 32224;
                    readonly src: "346:9:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39609;
            readonly nodeType: "ImportDirective";
            readonly src: "381:42:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdCheats.sol";
            readonly file: "./StdCheats.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 35043;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39608;
                    readonly name: "StdCheats";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35042;
                    readonly src: "389:9:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39611;
            readonly nodeType: "ImportDirective";
            readonly src: "424:40:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdError.sol";
            readonly file: "./StdError.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 35109;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39610;
                    readonly name: "stdError";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35108;
                    readonly src: "432:8:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39613;
            readonly nodeType: "ImportDirective";
            readonly src: "465:48:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdInvariant.sol";
            readonly file: "./StdInvariant.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 35333;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39612;
                    readonly name: "StdInvariant";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35332;
                    readonly src: "473:12:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39615;
            readonly nodeType: "ImportDirective";
            readonly src: "514:38:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdJson.sol";
            readonly file: "./StdJson.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 35909;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39614;
                    readonly name: "stdJson";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 35908;
                    readonly src: "522:7:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39617;
            readonly nodeType: "ImportDirective";
            readonly src: "553:38:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdMath.sol";
            readonly file: "./StdMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 36051;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39616;
                    readonly name: "stdMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 36050;
                    readonly src: "561:7:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39620;
            readonly nodeType: "ImportDirective";
            readonly src: "592:56:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdStorage.sol";
            readonly file: "./StdStorage.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 37536;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39618;
                    readonly name: "StdStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 36082;
                    readonly src: "600:10:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }, {
                readonly foreign: {
                    readonly id: 39619;
                    readonly name: "stdStorage";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 37535;
                    readonly src: "612:10:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39622;
            readonly nodeType: "ImportDirective";
            readonly src: "649:40:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdStyle.sol";
            readonly file: "./StdStyle.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 38747;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39621;
                    readonly name: "StdStyle";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 38746;
                    readonly src: "657:8:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39624;
            readonly nodeType: "ImportDirective";
            readonly src: "690:40:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/StdUtils.sol";
            readonly file: "./StdUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 39595;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39623;
                    readonly name: "StdUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 39594;
                    readonly src: "698:8:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39626;
            readonly nodeType: "ImportDirective";
            readonly src: "731:28:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Vm.sol";
            readonly file: "./Vm.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 41183;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39625;
                    readonly name: "Vm";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 41182;
                    readonly src: "739:2:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39628;
            readonly nodeType: "ImportDirective";
            readonly src: "781:36:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/src/Base.sol";
            readonly file: "./Base.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 30087;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39627;
                    readonly name: "TestBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 30077;
                    readonly src: "789:8:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39630;
            readonly nodeType: "ImportDirective";
            readonly src: "818:40:157";
            readonly nodes: readonly [];
            readonly absolutePath: "lib/forge-std/lib/ds-test/src/test.sol";
            readonly file: "ds-test/test.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 39646;
            readonly sourceUnit: 30012;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 39629;
                    readonly name: "DSTest";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 30011;
                    readonly src: "826:6:157";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 39645;
            readonly nodeType: "ContractDefinition";
            readonly src: "875:282:157";
            readonly nodes: readonly [];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 39631;
                    readonly name: "TestBase";
                    readonly nameLocations: readonly ["901:8:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 30077;
                    readonly src: "901:8:157";
                };
                readonly id: 39632;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "901:8:157";
            }, {
                readonly baseName: {
                    readonly id: 39633;
                    readonly name: "DSTest";
                    readonly nameLocations: readonly ["911:6:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 30011;
                    readonly src: "911:6:157";
                };
                readonly id: 39634;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "911:6:157";
            }, {
                readonly baseName: {
                    readonly id: 39635;
                    readonly name: "StdAssertions";
                    readonly nameLocations: readonly ["919:13:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 31504;
                    readonly src: "919:13:157";
                };
                readonly id: 39636;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "919:13:157";
            }, {
                readonly baseName: {
                    readonly id: 39637;
                    readonly name: "StdChains";
                    readonly nameLocations: readonly ["934:9:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 32224;
                    readonly src: "934:9:157";
                };
                readonly id: 39638;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "934:9:157";
            }, {
                readonly baseName: {
                    readonly id: 39639;
                    readonly name: "StdCheats";
                    readonly nameLocations: readonly ["945:9:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 35042;
                    readonly src: "945:9:157";
                };
                readonly id: 39640;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "945:9:157";
            }, {
                readonly baseName: {
                    readonly id: 39641;
                    readonly name: "StdInvariant";
                    readonly nameLocations: readonly ["956:12:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 35332;
                    readonly src: "956:12:157";
                };
                readonly id: 39642;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "956:12:157";
            }, {
                readonly baseName: {
                    readonly id: 39643;
                    readonly name: "StdUtils";
                    readonly nameLocations: readonly ["970:8:157"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 39594;
                    readonly src: "970:8:157";
                };
                readonly id: 39644;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "970:8:157";
            }];
            readonly canonicalName: "Test";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [39645, 39594, 35332, 35042, 34278, 32224, 31504, 30011, 30077, 30074];
            readonly name: "Test";
            readonly nameLocation: "893:4:157";
            readonly scope: 39646;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [27725, 27729, 27733, 27737, 27741, 27745, 27749, 27753, 27759, 27765, 27773, 27781, 27787, 27793, 27799, 27805, 30099, 30104, 30109, 30116, 30123, 30130];
        }];
        readonly license: "MIT";
    };
    readonly id: 157;
};
//# sourceMappingURL=test.d.ts.map