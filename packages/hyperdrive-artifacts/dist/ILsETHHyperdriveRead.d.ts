export declare const ILsETHHyperdriveRead: {
    readonly abi: readonly [{
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "baseToken";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCheckpoint";
        readonly inputs: readonly [{
            readonly name: "_checkpointTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.Checkpoint";
            readonly components: readonly [{
                readonly name: "vaultSharePrice";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getCheckpointExposure";
        readonly inputs: readonly [{
            readonly name: "_checkpointTime";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "int256";
            readonly internalType: "int256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getMarketState";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.MarketState";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "longExposure";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int128";
                readonly internalType: "int128";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "longAverageMaturityTime";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "shortAverageMaturityTime";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "isInitialized";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "isPaused";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "zombieBaseProceeds";
                readonly type: "uint112";
                readonly internalType: "uint112";
            }, {
                readonly name: "zombieShareReserves";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolConfig";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolConfig";
            readonly components: readonly [{
                readonly name: "baseToken";
                readonly type: "address";
                readonly internalType: "contract IERC20";
            }, {
                readonly name: "linkerFactory";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "linkerCodeHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "initialVaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minimumTransactionAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "positionDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "checkpointDuration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "timeStretch";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "governance";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "feeCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sweepCollector";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct IHyperdrive.Fees";
                readonly components: readonly [{
                    readonly name: "curve";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "flat";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceLP";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "governanceZombie";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }];
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getPoolInfo";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.PoolInfo";
            readonly components: readonly [{
                readonly name: "shareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shareAdjustment";
                readonly type: "int256";
                readonly internalType: "int256";
            }, {
                readonly name: "zombieBaseProceeds";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "zombieShareReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "bondReserves";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lpTotalSupply";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "vaultSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longAverageMaturityTime";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortsOutstanding";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "shortAverageMaturityTime";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesReadyToWithdraw";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "withdrawalSharesProceeds";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "lpSharePrice";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "longExposure";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getUncollectedGovernanceFees";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getWithdrawPool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct IHyperdrive.WithdrawPool";
            readonly components: readonly [{
                readonly name: "readyToWithdraw";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "proceeds";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }];
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isApprovedForAll";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isPauser";
        readonly inputs: readonly [{
            readonly name: "_account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "load";
        readonly inputs: readonly [{
            readonly name: "_slots";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32[]";
            readonly internalType: "bytes32[]";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "lsEth";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IRiverV1";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "perTokenApprovals";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [{
            readonly name: "tokenId";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
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
        readonly "balanceOf(uint256,address)": "3656eec2";
        readonly "baseToken()": "c55dae63";
        readonly "decimals()": "313ce567";
        readonly "getCheckpoint(uint256)": "20fc4881";
        readonly "getCheckpointExposure(uint256)": "cf210e65";
        readonly "getMarketState()": "d8165743";
        readonly "getPoolConfig()": "b0d96580";
        readonly "getPoolInfo()": "60246c88";
        readonly "getUncollectedGovernanceFees()": "c69e16ad";
        readonly "getWithdrawPool()": "fba56008";
        readonly "isApprovedForAll(address,address)": "e985e9c5";
        readonly "isPauser(address)": "46fbf68e";
        readonly "load(uint256[])": "becee9c3";
        readonly "lsEth()": "437c63bb";
        readonly "name(uint256)": "00ad800c";
        readonly "nonces(address)": "7ecebe00";
        readonly "perTokenApprovals(uint256,address,address)": "21ff32a9";
        readonly "symbol(uint256)": "4e41a1fb";
        readonly "totalSupply(uint256)": "bd85b039";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lsEth\",\"outputs\":[{\"internalType\":\"contract IRiverV1\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The balance of the owner.\"}},\"baseToken()\":{\"returns\":{\"_0\":\"The base token.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"getCheckpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint.\"}},\"getCheckpointExposure(uint256)\":{\"params\":{\"_checkpointTime\":\"The checkpoint time.\"},\"returns\":{\"_0\":\"The checkpoint exposure.\"}},\"getMarketState()\":{\"returns\":{\"_0\":\"The market state.\"}},\"getPoolConfig()\":{\"returns\":{\"_0\":\"The pool configuration.\"}},\"getPoolInfo()\":{\"returns\":{\"_0\":\"The pool info.\"}},\"getUncollectedGovernanceFees()\":{\"returns\":{\"_0\":\"The amount of uncollected governance fees.\"}},\"getWithdrawPool()\":{\"returns\":{\"_0\":\"The withdrawal pool information.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The approval-for-all status of the spender for the owner.\"}},\"isPauser(address)\":{\"params\":{\"_account\":\"The account to check.\"},\"returns\":{\"_0\":\"The account's pauser status.\"}},\"load(uint256[])\":{\"details\":\"This serves as a generalized getter that allows consumers to create      custom getters to suit their purposes.\",\"params\":{\"_slots\":\"The storage slots to load.\"},\"returns\":{\"_0\":\"The values at the specified slots.\"}},\"lsEth()\":{\"returns\":{\"_0\":\"The LsETH token contract.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The name of the MultiToken.\"}},\"nonces(address)\":{\"params\":{\"owner\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The permit nonce of the owner.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The symbol of the MultiToken.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The total supply of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets the balance of a spender for a sub-token.\"},\"baseToken()\":{\"notice\":\"Gets the Hyperdrive pool's base token.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken.\"},\"getCheckpoint(uint256)\":{\"notice\":\"Gets one of the pool's checkpoints.\"},\"getCheckpointExposure(uint256)\":{\"notice\":\"Gets the pool's exposure from a checkpoint. This is the number         of non-netted longs in the checkpoint.\"},\"getMarketState()\":{\"notice\":\"Gets the pool's state relating to the Hyperdrive market.\"},\"getPoolConfig()\":{\"notice\":\"Gets the pool's configuration parameters.\"},\"getPoolInfo()\":{\"notice\":\"Gets info about the pool's reserves and other state that is         important to evaluate potential trades.\"},\"getUncollectedGovernanceFees()\":{\"notice\":\"Gets the amount of governance fees that haven't been collected.\"},\"getWithdrawPool()\":{\"notice\":\"Gets information relating to the pool's withdrawal pool. This         includes the total proceeds underlying the withdrawal pool and         the number of withdrawal shares ready to be redeemed.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval-for-all status of a spender on behalf of an         owner.\"},\"isPauser(address)\":{\"notice\":\"Gets an account's pauser status within the Hyperdrive pool.\"},\"load(uint256[])\":{\"notice\":\"Gets the storage values at the specified slots.\"},\"lsEth()\":{\"notice\":\"Gets the LsETH token contract.\"},\"name(uint256)\":{\"notice\":\"Gets the name of the MultiToken.\"},\"nonces(address)\":{\"notice\":\"Gets the permit nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the allowance of a spender for a sub-token.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of the MultiToken.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/lseth/ILsETHHyperdriveRead.sol\":\"ILsETHHyperdriveRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf\",\"dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c\",\"dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf\",\"dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/interfaces/lseth/ILsETHHyperdriveRead.sol\":{\"keccak256\":\"0xa95a3c43998b48be8bc379912ca7c77a7625436497c979da261b179a296ef5d3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d3bccd82079b1106752a10fcf3f54e74f5fbf217ed52a8a9d7dc6f34bf7ca713\",\"dweb:/ipfs/QmZetNGhAQY5eyJ5ayThSq4SFA6H8gvXGmzPZJZoUmfvZ7\"]},\"contracts/src/interfaces/lseth/IRiverV1.sol\":{\"keccak256\":\"0xc2f6a1eb3bee83413bddd417044c687f2375eab216de4f6bbeee6c00afc79814\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://07e3bfeecba789bde03e9d7dda046fc5932f19ce19d272a6c79e2486cb5bee65\",\"dweb:/ipfs/QmNtefA3d9X7EWDzjVvmrSeaEQWeENDFPdWBSGjF3TL3Nd\"]},\"contracts/src/interfaces/lseth/ISharesManagerV1.sol\":{\"keccak256\":\"0xfefc57da6aa97835543b9e28aa70912334634001bbade60b95b250d5a2e85581\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0d4a2fbbc6d68a1549bd0350080f0f7cd871d7733e47f23148bf4893bcceaca\",\"dweb:/ipfs/QmfQdu9SZKmMziHa3HgHWkdj6Bw6izZrJT1pSBaWWgumwv\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "balanceOf";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "baseToken";
                readonly outputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "decimals";
                readonly outputs: readonly [{
                    readonly internalType: "uint8";
                    readonly name: "";
                    readonly type: "uint8";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCheckpoint";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.Checkpoint";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint128";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint128";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getCheckpointExposure";
                readonly outputs: readonly [{
                    readonly internalType: "int256";
                    readonly name: "";
                    readonly type: "int256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getMarketState";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.MarketState";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint128";
                        readonly name: "shareReserves";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "bondReserves";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "longExposure";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "longsOutstanding";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "int128";
                        readonly name: "shareAdjustment";
                        readonly type: "int128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "longAverageMaturityTime";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "shortAverageMaturityTime";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "isInitialized";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "isPaused";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "uint112";
                        readonly name: "zombieBaseProceeds";
                        readonly type: "uint112";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "zombieShareReserves";
                        readonly type: "uint128";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getPoolConfig";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.PoolConfig";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "contract IERC20";
                        readonly name: "baseToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "linkerFactory";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bytes32";
                        readonly name: "linkerCodeHash";
                        readonly type: "bytes32";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "initialVaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "minimumTransactionAmount";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "positionDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "checkpointDuration";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "timeStretch";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "address";
                        readonly name: "governance";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "feeCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sweepCollector";
                        readonly type: "address";
                    }, {
                        readonly internalType: "struct IHyperdrive.Fees";
                        readonly name: "fees";
                        readonly type: "tuple";
                        readonly components: readonly [{
                            readonly internalType: "uint256";
                            readonly name: "curve";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "flat";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceLP";
                            readonly type: "uint256";
                        }, {
                            readonly internalType: "uint256";
                            readonly name: "governanceZombie";
                            readonly type: "uint256";
                        }];
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getPoolInfo";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.PoolInfo";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint256";
                        readonly name: "shareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "int256";
                        readonly name: "shareAdjustment";
                        readonly type: "int256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "zombieBaseProceeds";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "zombieShareReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "bondReserves";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "lpTotalSupply";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "vaultSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longAverageMaturityTime";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortsOutstanding";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "shortAverageMaturityTime";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesReadyToWithdraw";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "withdrawalSharesProceeds";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "lpSharePrice";
                        readonly type: "uint256";
                    }, {
                        readonly internalType: "uint256";
                        readonly name: "longExposure";
                        readonly type: "uint256";
                    }];
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getUncollectedGovernanceFees";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "getWithdrawPool";
                readonly outputs: readonly [{
                    readonly internalType: "struct IHyperdrive.WithdrawPool";
                    readonly name: "";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "uint128";
                        readonly name: "readyToWithdraw";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "proceeds";
                        readonly type: "uint128";
                    }];
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isApprovedForAll";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "_account";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "isPauser";
                readonly outputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "";
                    readonly type: "bool";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256[]";
                    readonly name: "_slots";
                    readonly type: "uint256[]";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "load";
                readonly outputs: readonly [{
                    readonly internalType: "bytes32[]";
                    readonly name: "";
                    readonly type: "bytes32[]";
                }];
            }, {
                readonly inputs: readonly [];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "lsEth";
                readonly outputs: readonly [{
                    readonly internalType: "contract IRiverV1";
                    readonly name: "";
                    readonly type: "address";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "name";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "nonces";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "perTokenApprovals";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "symbol";
                readonly outputs: readonly [{
                    readonly internalType: "string";
                    readonly name: "";
                    readonly type: "string";
                }];
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "tokenId";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "view";
                readonly type: "function";
                readonly name: "totalSupply";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "balanceOf(uint256,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The balance of the owner.";
                        };
                    };
                    readonly "baseToken()": {
                        readonly returns: {
                            readonly _0: "The base token.";
                        };
                    };
                    readonly "decimals()": {
                        readonly returns: {
                            readonly _0: "The decimals of the MultiToken.";
                        };
                    };
                    readonly "getCheckpoint(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The checkpoint time.";
                        };
                        readonly returns: {
                            readonly _0: "The checkpoint.";
                        };
                    };
                    readonly "getCheckpointExposure(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The checkpoint time.";
                        };
                        readonly returns: {
                            readonly _0: "The checkpoint exposure.";
                        };
                    };
                    readonly "getMarketState()": {
                        readonly returns: {
                            readonly _0: "The market state.";
                        };
                    };
                    readonly "getPoolConfig()": {
                        readonly returns: {
                            readonly _0: "The pool configuration.";
                        };
                    };
                    readonly "getPoolInfo()": {
                        readonly returns: {
                            readonly _0: "The pool info.";
                        };
                    };
                    readonly "getUncollectedGovernanceFees()": {
                        readonly returns: {
                            readonly _0: "The amount of uncollected governance fees.";
                        };
                    };
                    readonly "getWithdrawPool()": {
                        readonly returns: {
                            readonly _0: "The withdrawal pool information.";
                        };
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The approval-for-all status of the spender for the owner.";
                        };
                    };
                    readonly "isPauser(address)": {
                        readonly params: {
                            readonly _account: "The account to check.";
                        };
                        readonly returns: {
                            readonly _0: "The account's pauser status.";
                        };
                    };
                    readonly "load(uint256[])": {
                        readonly details: "This serves as a generalized getter that allows consumers to create      custom getters to suit their purposes.";
                        readonly params: {
                            readonly _slots: "The storage slots to load.";
                        };
                        readonly returns: {
                            readonly _0: "The values at the specified slots.";
                        };
                    };
                    readonly "lsEth()": {
                        readonly returns: {
                            readonly _0: "The LsETH token contract.";
                        };
                    };
                    readonly "name(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The name of the MultiToken.";
                        };
                    };
                    readonly "nonces(address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                        };
                        readonly returns: {
                            readonly _0: "The permit nonce of the owner.";
                        };
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly params: {
                            readonly owner: "The owner of the tokens.";
                            readonly spender: "The spender of the tokens.";
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The allowance of the spender for the owner.";
                        };
                    };
                    readonly "symbol(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The symbol of the MultiToken.";
                        };
                    };
                    readonly "totalSupply(uint256)": {
                        readonly params: {
                            readonly tokenId: "The sub-token ID.";
                        };
                        readonly returns: {
                            readonly _0: "The total supply of the MultiToken.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "balanceOf(uint256,address)": {
                        readonly notice: "Gets the balance of a spender for a sub-token.";
                    };
                    readonly "baseToken()": {
                        readonly notice: "Gets the Hyperdrive pool's base token.";
                    };
                    readonly "decimals()": {
                        readonly notice: "Gets the decimals of the MultiToken.";
                    };
                    readonly "getCheckpoint(uint256)": {
                        readonly notice: "Gets one of the pool's checkpoints.";
                    };
                    readonly "getCheckpointExposure(uint256)": {
                        readonly notice: "Gets the pool's exposure from a checkpoint. This is the number         of non-netted longs in the checkpoint.";
                    };
                    readonly "getMarketState()": {
                        readonly notice: "Gets the pool's state relating to the Hyperdrive market.";
                    };
                    readonly "getPoolConfig()": {
                        readonly notice: "Gets the pool's configuration parameters.";
                    };
                    readonly "getPoolInfo()": {
                        readonly notice: "Gets info about the pool's reserves and other state that is         important to evaluate potential trades.";
                    };
                    readonly "getUncollectedGovernanceFees()": {
                        readonly notice: "Gets the amount of governance fees that haven't been collected.";
                    };
                    readonly "getWithdrawPool()": {
                        readonly notice: "Gets information relating to the pool's withdrawal pool. This         includes the total proceeds underlying the withdrawal pool and         the number of withdrawal shares ready to be redeemed.";
                    };
                    readonly "isApprovedForAll(address,address)": {
                        readonly notice: "Gets the approval-for-all status of a spender on behalf of an         owner.";
                    };
                    readonly "isPauser(address)": {
                        readonly notice: "Gets an account's pauser status within the Hyperdrive pool.";
                    };
                    readonly "load(uint256[])": {
                        readonly notice: "Gets the storage values at the specified slots.";
                    };
                    readonly "lsEth()": {
                        readonly notice: "Gets the LsETH token contract.";
                    };
                    readonly "name(uint256)": {
                        readonly notice: "Gets the name of the MultiToken.";
                    };
                    readonly "nonces(address)": {
                        readonly notice: "Gets the permit nonce for an account.";
                    };
                    readonly "perTokenApprovals(uint256,address,address)": {
                        readonly notice: "Gets the allowance of a spender for a sub-token.";
                    };
                    readonly "symbol(uint256)": {
                        readonly notice: "Gets the symbol of the MultiToken.";
                    };
                    readonly "totalSupply(uint256)": {
                        readonly notice: "Gets the total supply of the MultiToken.";
                    };
                };
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
                readonly "contracts/src/interfaces/lseth/ILsETHHyperdriveRead.sol": "ILsETHHyperdriveRead";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xb8ee04f3090b498966970e210f7de0f982f6445628556f2f176385423d8c5952";
                readonly urls: readonly ["bzz-raw://db789f03faa935c6e3b0882b6e873e8f683c9c8841a4b128366dcbe7321911bf", "dweb:/ipfs/QmSQh1cX79nApuSAfJbVN99dmEaE4CK9QwWfEGcwhJMBLK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x812ccb32dff907e8614c89a65196eec239eceb3e63f9f14dde2b2269c75a67c0";
                readonly urls: readonly ["bzz-raw://da5f2ce974bfcd8185342c121c879ba5aef23e1e4e7b36cf9fcba68296b8892c", "dweb:/ipfs/QmSho3PWs9bzejTYYjySuXcH9tVP4xFnkbUmSzQA54g8eG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0x5922cbd86a7267c8fd19e3dc7a6f2636bad2b3330c28bca8e66adc7cd8ce2b55";
                readonly urls: readonly ["bzz-raw://ced8bce3f3c15a9f0bcdd11ba16e69651179edd6b16e267936788f4ab4d6eabf", "dweb:/ipfs/QmcoZPj4h2ym6r13KDU7JG2GoVdDWa1GwfKL2jjFRsp8H6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiToken.sol": {
                readonly keccak256: "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f";
                readonly urls: readonly ["bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7", "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenCore.sol": {
                readonly keccak256: "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501";
                readonly urls: readonly ["bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae", "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenEvents.sol": {
                readonly keccak256: "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb";
                readonly urls: readonly ["bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222", "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                readonly keccak256: "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca";
                readonly urls: readonly ["bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3", "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IMultiTokenRead.sol": {
                readonly keccak256: "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0";
                readonly urls: readonly ["bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11", "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/lseth/ILsETHHyperdriveRead.sol": {
                readonly keccak256: "0xa95a3c43998b48be8bc379912ca7c77a7625436497c979da261b179a296ef5d3";
                readonly urls: readonly ["bzz-raw://d3bccd82079b1106752a10fcf3f54e74f5fbf217ed52a8a9d7dc6f34bf7ca713", "dweb:/ipfs/QmZetNGhAQY5eyJ5ayThSq4SFA6H8gvXGmzPZJZoUmfvZ7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/lseth/IRiverV1.sol": {
                readonly keccak256: "0xc2f6a1eb3bee83413bddd417044c687f2375eab216de4f6bbeee6c00afc79814";
                readonly urls: readonly ["bzz-raw://07e3bfeecba789bde03e9d7dda046fc5932f19ce19d272a6c79e2486cb5bee65", "dweb:/ipfs/QmNtefA3d9X7EWDzjVvmrSeaEQWeENDFPdWBSGjF3TL3Nd"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/lseth/ISharesManagerV1.sol": {
                readonly keccak256: "0xfefc57da6aa97835543b9e28aa70912334634001bbade60b95b250d5a2e85581";
                readonly urls: readonly ["bzz-raw://f0d4a2fbbc6d68a1549bd0350080f0f7cd871d7733e47f23148bf4893bcceaca", "dweb:/ipfs/QmfQdu9SZKmMziHa3HgHWkdj6Bw6izZrJT1pSBaWWgumwv"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/src/interfaces/lseth/ILsETHHyperdriveRead.sol";
        readonly id: 12917;
        readonly exportedSymbols: {
            readonly IHyperdriveRead: readonly [11980];
            readonly ILsETHHyperdriveRead: readonly [12916];
            readonly IRiverV1: readonly [12924];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:325:114";
        readonly nodes: readonly [{
            readonly id: 12902;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:114";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 12904;
            readonly nodeType: "ImportDirective";
            readonly src: "64:57:114";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdriveRead.sol";
            readonly file: "../IHyperdriveRead.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 12917;
            readonly sourceUnit: 11981;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12903;
                    readonly name: "IHyperdriveRead";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 11980;
                    readonly src: "73:15:114";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12906;
            readonly nodeType: "ImportDirective";
            readonly src: "122:42:114";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/lseth/IRiverV1.sol";
            readonly file: "./IRiverV1.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 12917;
            readonly sourceUnit: 12925;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 12905;
                    readonly name: "IRiverV1";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 12924;
                    readonly src: "131:8:114";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 12916;
            readonly nodeType: "ContractDefinition";
            readonly src: "166:197:114";
            readonly nodes: readonly [{
                readonly id: 12915;
                readonly nodeType: "FunctionDefinition";
                readonly src: "311:50:114";
                readonly nodes: readonly [];
                readonly documentation: {
                    readonly id: 12909;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "222:84:114";
                    readonly text: "@notice Gets the LsETH token contract.\n @return The LsETH token contract.";
                };
                readonly functionSelector: "437c63bb";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "lsEth";
                readonly nameLocation: "320:5:114";
                readonly parameters: {
                    readonly id: 12910;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "325:2:114";
                };
                readonly returnParameters: {
                    readonly id: 12914;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 12913;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 12915;
                        readonly src: "351:8:114";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_contract$_IRiverV1_$12924";
                            readonly typeString: "contract IRiverV1";
                        };
                        readonly typeName: {
                            readonly id: 12912;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 12911;
                                readonly name: "IRiverV1";
                                readonly nameLocations: readonly ["351:8:114"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 12924;
                                readonly src: "351:8:114";
                            };
                            readonly referencedDeclaration: 12924;
                            readonly src: "351:8:114";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_IRiverV1_$12924";
                                readonly typeString: "contract IRiverV1";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "350:10:114";
                };
                readonly scope: 12916;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 12907;
                    readonly name: "IHyperdriveRead";
                    readonly nameLocations: readonly ["200:15:114"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 11980;
                    readonly src: "200:15:114";
                };
                readonly id: 12908;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "200:15:114";
            }];
            readonly canonicalName: "ILsETHHyperdriveRead";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [12916, 11980, 12320];
            readonly name: "ILsETHHyperdriveRead";
            readonly nameLocation: "176:20:114";
            readonly scope: 12917;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 114;
};
//# sourceMappingURL=ILsETHHyperdriveRead.d.ts.map