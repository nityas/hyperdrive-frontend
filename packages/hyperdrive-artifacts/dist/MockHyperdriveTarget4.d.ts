export declare const MockHyperdriveTarget4: {
    readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract IERC20";
                readonly name: "baseToken";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC20";
                readonly name: "vaultSharesToken";
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
                readonly internalType: "struct IHyperdrive.Fees";
                readonly name: "fees";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IHyperdrive.PoolConfig";
            readonly name: "_config";
            readonly type: "tuple";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "DistributeExcessIdleFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ExpInvalidExponent";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
            readonly name: "reason";
            readonly type: "uint8";
        }];
        readonly name: "InsufficientLiquidity";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCheckpointTime";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTimestamp";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "LnInvalidInput";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinimumSharePrice";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MinimumTransactionAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotPayable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OutputLimit";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PoolIsPaused";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyGuardReentrantCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "RestrictedZeroAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt128";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToInt256";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint112";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnsafeCastToUint128";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "AddLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "approved";
            readonly type: "bool";
        }];
        readonly name: "ApprovalForAll";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basePayment";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "CloseShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fees";
            readonly type: "uint256";
        }];
        readonly name: "CollectGovernanceFee";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "checkpointTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "checkpointVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedShorts";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturedLongs";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "CreateCheckpoint";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newFeeCollector";
            readonly type: "address";
        }];
        readonly name: "FeeCollectorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newGovernance";
            readonly type: "address";
        }];
        readonly name: "GovernanceUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "apr";
            readonly type: "uint256";
        }];
        readonly name: "Initialize";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenLong";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "trader";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "assetId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "maturityTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseProceeds";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "bondAmount";
            readonly type: "uint256";
        }];
        readonly name: "OpenShort";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isPaused";
            readonly type: "bool";
        }];
        readonly name: "PauseStatusUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newPauser";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "status";
            readonly type: "bool";
        }];
        readonly name: "PauserUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }];
        readonly name: "RedeemWithdrawalShares";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "provider";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "destination";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "baseAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "vaultShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "asBase";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "withdrawalShareAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "lpSharePrice";
            readonly type: "uint256";
        }];
        readonly name: "RemoveLiquidity";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "collector";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Sweep";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newSweepCollector";
            readonly type: "address";
        }];
        readonly name: "SweepCollectorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "operator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "TransferSingle";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_checkpointTime";
            readonly type: "uint256";
        }];
        readonly name: "checkpoint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_bondAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_maxDeposit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_minVaultSharePrice";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "destination";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "asBase";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes";
                readonly name: "extraData";
                readonly type: "bytes";
            }];
            readonly internalType: "struct IHyperdrive.Options";
            readonly name: "_options";
            readonly type: "tuple";
        }];
        readonly name: "openShort";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    readonly bytecode: {
        readonly object: "0x6102406040523480156200001257600080fd5b5060405162004914380380620049148339810160408190526200003591620001e1565b600160005580516001600160a01b039081166080908152602080840151831660a0908152918401516101a0908152918401516101c05260c0808501516101e0526101008086015190915260e0808601519052610120808601519091529184018051519092528151015161014090815281516040908101516101609081529251606090810151610180908152918601518516610200528501516102205290840151600a80546001600160a01b03199081169286169290921790559184015160088054841691851691909117905590920151600980549093169116179055620002d4565b6040516101c081016001600160401b03811182821017156200014957634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200016757600080fd5b919050565b6000608082840312156200017f57600080fd5b604051608081016001600160401b0381118282101715620001b057634e487b7160e01b600052604160045260246000fd5b8060405250809150825181526020830151602082015260408301516040820152606083015160608201525092915050565b60006102208284031215620001f557600080fd5b620001ff62000117565b6200020a836200014f565b81526200021a602084016200014f565b60208201526200022d604084016200014f565b6040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101406200028c8185016200014f565b90820152610160620002a08482016200014f565b90820152610180620002b48482016200014f565b908201526101a0620002c9858583016200016c565b908201529392505050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516144b46200046060003960005050600050506000818160ec0152612679015260008181610c00015281816114c2015281816115270152818161214401528181612269015281816122a5015281816125040152612653015260008181610993015281816109f901528181611dea01528181611e7d015261262d015260006110e501526000818161120b01528181611ac70152611b400152600081816106b101528181610a93015281816111df0152611b1401526000611a9301526000818161097101528181610a1a015261269f015260008181610179015281816105ee015261303d01526000818161033b01528181610494015281816105210152610586015260005050600081816103d401528181610f1a01528181610f6301528181611be801528181611c3101528181611cc301528181611d4401528181611eeb01528181611f6c0152818161287c01526128c501526144b46000f3fe6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c36600461414b565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a6100753660046141aa565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b06103a8565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e16103d2565b6100ea8361043f565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b6000610135610475565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b600061016261048d565b9050600061017082846104c3565b9050600061019e7f0000000000000000000000000000000000000000000000000000000000000000846141d9565b905060008060006101b08d888761094b565b92509250925080600b60008282546101c891906141d9565b90915550600090506101db84898d610acd565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610aff565b50506102168e848a88610bd8565b6000610223600287610de5565b905060008f9050610247828e600001602081019061024191906141ec565b83610e1a565b848a8e8461025860208301836141ec565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610ec2565b61029f6040880160208901614223565b6102b5898f8c6102af9190614240565b90610eea565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c6103a8565b6000818152600760205260408120546001600160801b0316900361039e57600061033461048d565b90506103607f000000000000000000000000000000000000000000000000000000000000000083614269565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b61039b82610396610475565b6104c3565b50505b6100a26001600055565b6002600054036103cb57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061041f5750600034115b1561043d57604051631574f9f360e01b815260040160405180910390fd5b565b600061044e60208301836141ec565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b6000610488670de0b6b3a7640000610eff565b905090565b60006104b97f000000000000000000000000000000000000000000000000000000000000000042614269565b6104889042614240565b600082815260076020526040812080546001600160801b03161515806104e857504284115b156104fe57546001600160801b03169050610945565b60008061050961048d565b905080860361051a578491506105b4565b60006105467f0000000000000000000000000000000000000000000000000000000000000000886141d9565b90505b6000818152600760205260409020546001600160801b031692508181148015610570575082155b15610579578592505b826000036105b2576105ab7f0000000000000000000000000000000000000000000000000000000000000000826141d9565b9050610549565b505b6105bd82610ffa565b83546001600160801b0319166001600160801b03919091161783556105e185611024565b50600090506007816106137f00000000000000000000000000000000000000000000000000000000000000008a614240565b815260208101919091526040016000908120546001600160801b0316915061063c600289610de5565b6000818152600e602052604081205491925081156107825750600160008061066784878a8e856111c8565b9150915080600b600082825461067d91906141d9565b909155508c905061069a8560008561069481611297565b856112c1565b6106a482846141d9565b92508b6106d586858a8d857f000000000000000000000000000000000000000000000000000000000000000061143b565b93506106e96106e48583610eea565b611485565b6005805460029061070a9084906201000090046001600160701b031661427d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061073784610ffa565b60058054601090610759908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b600061078f60018c610de5565b6000818152600e602052604090205490915080156108a157600192508a6000806107bc848a8d868a6111c8565b9150915080600b60008282546107d291906141d9565b909155508f90506107ef856000856107e981611297565b856114ab565b6107f98284614240565b92506108086106e48486610eea565b600580546002906108299084906201000090046001600160701b031661427d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061085683610ffa565b60058054601090610878908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b82156108d8576108cd6108b385611297565b6108bc83611297565b6108c691906142bd565b60006116a0565b6108d68b611753565b505b60006108e38c6118d8565b50604080518b8152602081018f905290810187905260608101849052608081018290529091508d907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25096985050505050505050505b92915050565b60008060006109b761095b6119c8565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006119e9565b9150856109c48387611a15565b11156109d4576109d46002611a2a565b6000806000610a3e6109e46119c8565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a4e565b9050610a5489670de0b6b3a7640000838b611a6e565b50919450909250610a6790508284614240565b610a719086614240565b9450610abd88610ab78b610a85868a614240565b8b610a908e82611b7c565b8e7f0000000000000000000000000000000000000000000000000000000000000000611b92565b90611a15565b9550909250505093509350939050565b6000610adf6040830160208401614223565b15610aeb575082610af8565b610af58484611bb7565b90505b9392505050565b60008080610b136040850160208601614223565b15610b3857610b2e85610b2960408701876142dd565b611bcc565b9093509050610b54565b5034610b5085610b4b60408701876142dd565b611e60565b8492505b610b5c610475565b91508015610bcf57604051600090339083908381818185875af1925050503d8060008114610ba6576040519150601f19603f3d011682016040523d82523d6000602084013e610bab565b606091505b5050905080610bcd576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610bf657610bf66003611a2a565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610c2e908390600f0b61200a565b1015610c3e57610c3e6001611a2a565b600354610c8d90610c8890600160801b90046001600160801b0316610c6b670de0b6b3a764000086614324565b600454600160801b90046001600160801b03169190896001612032565b610ffa565b600480546001600160801b03928316600160801b029216919091179055610cb381610ffa565b600180546001600160801b0319166001600160801b0392909216919091179055610cdc85610ffa565b60018054601090610cfe908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d2b85610ffa565b60038054601090610d4d908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610d7c836120f9565b9050610d9a81610d8b88611297565b610d9590846142bd565b6116a0565b610da38461213d565b610db157610db16003611a2a565b6000610dbc85611753565b905080610ddc57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610e0f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610e4c9084906141d9565b90915550506000838152600e602052604081208054839290610e6f9084906141d9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610ed46040830160208401614223565b15610ee357610af58484611bb7565b5082610af8565b6000610af88383670de0b6b3a764000061219d565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610f4e575047610fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd6919061433b565b90505b601254600003610fea576000610af8565b601254610af8908490839061219d565b6000600160801b821061102057604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190611047908490600160801b90046001600160801b0316610eea565b6005546201000090046001600160701b031692509050818111156111c35760006110718383614240565b9050611080610c8882866121bb565b600580546010906110a2908490600160801b90046001600160801b0316614354565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110db8583611bb790919063ffffffff16565b90506000611109827f0000000000000000000000000000000000000000000000000000000000000000610eea565b905080600b600082825461111d91906141d9565b9091555061112d90508183614240565b915061113882610ffa565b600180546000906111539084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611180826121d0565b60038054600090611195908490600f0b614374565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806111d58785611bb7565b91506000611203837f0000000000000000000000000000000000000000000000000000000000000000610eea565b905061122f817f0000000000000000000000000000000000000000000000000000000000000000610eea565b91508315611252576112418282614240565b61124b9084614240565b9250611269565b61125c8282614240565b61126690846141d9565b92505b8686101561128c5761127c83878961219d565b925061128982878961219d565b91505b509550959350505050565b60006001600160ff1b038211156110205760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661130a610c88826112ed670de0b6b3a764000086614324565b600454600160801b90046001600160801b031691908a6000612032565b600480546001600160801b03928316600160801b02921691909117905561133086610ffa565b61133a9082614354565b600380546001600160801b03928316600160801b02921691909117905561136084610ffa565b6001805460009061137b9084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113a8836121fa565b600380546000906113bd908490600f0b614374565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506113ed85610ffa565b6001805460109061140f908490600160801b90046001600160801b0316614354565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806114538461144d8a888a61219d565b90611bb7565b905061146088848661219d565b61146a90826141d9565b90508681111561147a5786810391505b509695505050505050565b6000600160701b82106110205760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806114ed57507f00000000000000000000000000000000000000000000000000000000000000006114eb8583614240565b105b156114fc576114fc6003611a2a565b6003549084900390600f0b61151184826142bd565b90508361151d86611297565b13801561155257507f0000000000000000000000000000000000000000000000000000000000000000611550838361200a565b105b15611561576115616001611a2a565b600254600160801b90046001600160801b03166115a3610c888261158d670de0b6b3a764000088614324565b6004546001600160801b031691908c6000612032565b600480546001600160801b0319166001600160801b03929092169190911790556115cd8882614240565b90506115d881610ffa565b600280546001600160801b03928316600160801b0292169190911790556115fe83610ffa565b600180546001600160801b0319166001600160801b0392909216919091179055611627826121fa565b600380546001600160801b0319166001600160801b039290921691909117905561165087610ffa565b60018054601090611672908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006116c96116af8483612238565b6116ba846000612238565b6116c491906142bd565b6121fa565b9050600081600f0b131561171e57600280548291906000906116f59084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561174e57611733816143a1565b600280546000906116f59084906001600160801b0316614354565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161179e916001600160801b031690614240565b9050806000036117b15750600192915050565b60006117bc84612247565b9050806000036117d0575060019392505050565b6000806117de8385886122e9565b91509150806117f35750600095945050505050565b6000806117ff846123ef565b9150915061181d61180f82611297565b611818906143c7565b6124d7565b92508261183257506000979650505050505050565b61183b82610ffa565b600680546000906118569084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061188381610ffa565b600680546010906118a5908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060019650505050505050919050565b6000806000806118ef6118ea866125e4565b61271e565b9150915080611905575060009485945092505050565b600080861161191557600061191f565b61191f8387610eea565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161198a91906141d9565b6119949190614240565b9050806000036119ad5750600096879650945050505050565b60006119b98383611bb7565b98600198509650505050505050565b600154600354600091610488916001600160801b0390911690600f0b61200a565b6000611a0a878787611a0388670de0b6b3a7640000614240565b87876127ab565b979650505050505050565b6000610af88383670de0b6b3a76400006127d0565b80604051633c06d78b60e11b8152600401611a4591906143e3565b60405180910390fd5b6000611a6582611a5f85888861219d565b906127f6565b95945050505050565b6000808080611abf8786611ab88b610ab7611a918c670de0b6b3a7640000614240565b7f000000000000000000000000000000000000000000000000000000000000000090611a15565b91906127d0565b9350611aeb847f0000000000000000000000000000000000000000000000000000000000000000610eea565b91506000611b0c611b0489670de0b6b3a7640000614240565b8a90886127d0565b9050611b38817f0000000000000000000000000000000000000000000000000000000000000000611a15565b9350611b64847f0000000000000000000000000000000000000000000000000000000000000000610eea565b611b6e90846141d9565b915050945094509450949050565b6000818311611b8b5781610af8565b5090919050565b600080611baa84611ba48a888a6127d0565b906121bb565b90506114608884866127d0565b6000610af883670de0b6b3a76400008461219d565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611c1c575047611ca7565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611c80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca4919061433b565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d225787341015611d11576040516312171d8360e31b815260040160405180910390fd5b611d1b8834614240565b9050611dbc565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611d95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db9919061440b565b91505b81611dda576040516312171d8360e31b815260040160405180910390fd5b601254600003611e1f57611e0e887f0000000000000000000000000000000000000000000000000000000000000000611bb7565b601281905594509250611e58915050565b601254600090611e31908a908661219d565b90508060126000828254611e4591906141d9565b90915550909550909350611e5892505050565b935093915050565b6000611e6b84610eff565b9050601254600003611ea957611ea1817f0000000000000000000000000000000000000000000000000000000000000000611bb7565b601255611ecf565b6000611eb482612861565b90508060126000828254611ec891906141d9565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611f4a5782341015611f39576040516312171d8360e31b815260040160405180910390fd5b611f438334614240565b9050611fe4565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611fbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe1919061440b565b91505b81612002576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600080612017848461294a565b90925090508061202b5761202b6001611a2a565b5092915050565b600082600003612043575084611a65565b81156120b55761207461205684876141d9565b6120608587610eea565b61206a888a610eea565b61144d91906141d9565b905060006120828588612986565b905060006120908689611b7c565b9050818310156120a2578192506120ae565b808311156120ae578092505b5050611a65565b8285036120c457506000611a65565b6120ef6120d18487614240565b6120db8587611a15565b6120e5888a610eea565b61144d9190614240565b9695505050505050565b6000612121600e600061210d600286610de5565b815260200190815260200160002054611297565b612133600e600061210d600187610de5565b61094591906142bd565b60006121697f000000000000000000000000000000000000000000000000000000000000000083611a15565b60025461217f91906001600160801b03166141d9565b600154612195906001600160801b031684610eea565b101592915050565b60008260001904841183021582026121b457600080fd5b5091020490565b6000610af883670de0b6b3a7640000846127d0565b600060016001607f1b038211156110205760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280159061221b575060016001607f1b038213155b6110205760405163a5353be560e01b815260040160405180910390fd5b6000818313611b8b5781610af8565b6002546000908190612262906001600160801b0316846121bb565b905061228e7f0000000000000000000000000000000000000000000000000000000000000000826141d9565b6001546001600160801b031611156122e3576001547f0000000000000000000000000000000000000000000000000000000000000000906122d99083906001600160801b0316614240565b610af89190614240565b50919050565b6122f1614098565b6000806122fd846125e4565b9050600061230a8261271e565b935090508261231f575060009150611e589050565b6000612346612341846101600151856101400151610eea90919063ffffffff16565b611297565b612366612341856101200151866101000151611a1590919063ffffffff16565b61237091906142bd565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806124078560c001518660e0015161294a565b915091508061241d575060009485945092505050565b60006124298684612995565b92509050811580612438575080155b1561244b57506000958695509350505050565b60006124578783612aa4565b9050806000036124705750600096879650945050505050565b8660600151811161248657969095509350505050565b5060608601516000612499888685612b75565b9050806000036124b3575060009788975095505050505050565b8281106124ca575060009788975095505050505050565b9097909650945050505050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806125298787877f00000000000000000000000000000000000000000000000000000000000000008d612eda565b9350935093509350806125455750600098975050505050505050565b8684146125765761255584610ffa565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146125a757612586836121fa565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146125d5576125b782610ffa565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6125ec6140ea565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126e49116612ff2565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261271692900416612ff2565b905292915050565b600080600080600061272f86613068565b915091508061274657506000958695509350505050565b6127538660a00151611297565b61275c87613388565b8361276a8960000151611297565b6127749190614428565b61277e9190614428565b61278891906142bd565b9250505060008112156127a15750600093849350915050565b9360019350915050565b6000806127bc8888888888886133ec565b90925090508061147a5761147a6000611a2a565b60008260001904841183021582026127e757600080fd5b50910281810615159190040190565b60008160000361280f5750670de0b6b3a7640000610945565b8260000361281f57506000610945565b600061282a83611297565b9050600061283f61283a86611297565b6134b6565b9050818102612856670de0b6b3a764000082614450565b90506120ef816136dc565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128b057504761293b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612914573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612938919061433b565b90505b601254610af89084908361219d565b60008060008361295986611297565b61296391906142bd565b9050600081121561297b576000809250925050610bd1565b946001945092505050565b60008183116122e35782610af8565b60008060008460a00151126129b257505060808201516001610bd1565b60008460a001516129c2906143c7565b905060006129fe85876101000151886000015160e00151670de0b6b3a76400006129ec9190614240565b89516060810151608090910151613871565b93509050821580612a0d575080155b15612a2057600080935093505050610bd1565b6000612a2c83836121bb565b9050670de0b6b3a76400008111612a685780670de0b6b3a7640000039450612a618760c0015186610eea90919063ffffffff16565b9450612a77565b60008094509450505050610bd1565b8660800151851115612a96578660800151600194509450505050610bd1565b506001925050509250929050565b600080612ada8460c001518560e00151866101000151876000015160a00151612acc88611297565b612ad5906143c7565b612eda565b87516040810192909252602082019290925291909152905080612b01576000915050610945565b6000612b10856000015161271e565b9250905081612b2457600092505050610945565b84602001518110612b3a57600092505050610945565b600085606001518660400151612b5091906141d9565b9050612b6b8287602001518361219d9092919063ffffffff16565b6120ef9082614240565b60008084606001518560400151612b8c91906141d9565b60208601516060870151919250600091612ba6918461219d565b90508560a00151600003612bbd579150610af89050565b60005b6004811015612ed057612bd38286612986565b91506000612bfc8860c001518960e001518a61010001518b6000015160a00151612acc88611297565b8b516040810192909252602082019290925291909152905080612c26576000945050505050610af8565b6000612c35896000015161271e565b9250905081612c4c57600095505050505050610af8565b612c5789828761391d565b15612c63575050612ed0565b60008960a001511315612dc757885180516020820151604083015160a084015160e0909401518d94600094612cbd9490939092909190612cab90670de0b6b3a7640000614240565b87516060810151608090910151613989565b9450905083612cd6576000975050505050505050610af8565b808260a0015110612dc457612cea82613a8e565b909650935083612d04576000975050505050505050610af8565b612d298260c001518360e00151846101000151856000015160a00151612acc8b611297565b85516040810192909252602082019290925291909152935083612d56576000975050505050505050610af8565b815180516020820151604083015160a0909301518e5160e00151612d88949190612cab90670de0b6b3a7640000614240565b9450905083612da1576000975050505050505050610af8565b8a60a001518111612dbb5785975050505050505050610af8565b50505050612bc0565b50505b6000612dd88a8a8c60a00151613b64565b93509050821580612df15750670de0b6b3a76400008110155b15612e055760009650505050505050610af8565b80670de0b6b3a76400000390506000612e326123418c604001518d60200151611a1590919063ffffffff16565b612e3f612341858a610eea565b612e4991906142bd565b90506000811315612e7357612e628761144d8385611bb7565b612e6c90876141d9565b9550612ec1565b6000811215612eb8576000612e8d8861144d8581866143c7565b905086811015612ea1578087039650612eb2565b600098505050505050505050610af8565b50612ec1565b50505050612ed0565b84600101945050505050612bc0565b5095945050505050565b60008060008084600003612ef957508792508691508590506001612fe6565b600085612f058b611297565b612f0f9190614428565b9050612f1a87611297565b811215612f3557600080600080945094509450945050612fe6565b80945060008912612f5557612f4e612341868b8d61219d565b9350612f78565b612f6c612341612f648b6143c7565b87908d6127d0565b612f75906143c7565b93505b600080612f858c8c61294a565b9150915080612fa4576000806000809650965096509650505050612fe6565b6000612fb0888861294a565b9250905081612fd057600080600080975097509750975050505050612fe6565b612fdb8b828561219d565b955060019450505050505b95509550955095915050565b600080670de0b6b3a764000061300661048d565b6130109190614324565b905080831161302057600061302a565b61302a8184614240565b9150610af8613061670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614324565b8390611bb7565b600080600061308d612341856101600151866101400151610eea90919063ffffffff16565b6130ad612341866101200151876101000151611a1590919063ffffffff16565b6130b791906142bd565b90506000806130ce8660000151876020015161294a565b91509150806130e557506000958695509350505050565b60008313156132265760008390506000613133886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006131249190614240565b8d606001518e60800151613989565b935090508261314c575060009788975095505050505050565b8181106131ea576000613186858a60400151858c60e00151670de0b6b3a76400006131779190614240565b8d606001518e608001516133ec565b945090508315801561319b57508860c0015183105b156131b25750600098600198509650505050505050565b836131c857506000988998509650505050505050565b6131d181611297565b6131da906143c7565b9960019950975050505050505050565b6000886020015112613212576132098860a00151856123419190614240565b6119b9906143c7565b60a088015188516132099161234191614240565b600083121561337957600061323a846143c7565b9050600061326e8489604001518a60e00151670de0b6b3a764000061325f9190614240565b8b606001518c60800151613871565b9350905082613287575060009788975095505050505050565b81811061330c5760006132c1858a60400151858c60e00151670de0b6b3a76400006132b29190614240565b8d606001518e60800151613ebe565b94509050831580156132d657508860c0015183105b156132ed5750600098600198509650505050505050565b8361330357506000988998509650505050505050565b6131da81611297565b600061333e858a604001518b60e00151670de0b6b3a764000061332f9190614240565b8c606001518d60800151613f95565b945090508361335857506000988998509650505050505050565b6131da61336f8a60600151848661144d9190614240565b61234190836141d9565b50600095600195509350505050565b60006133bb612341836101200151670de0b6b3a76400006133a99190614240565b606085015161010086015191906127d0565b612133612341846101600151670de0b6b3a76400006133da9190614240565b6060860151610140870151919061219d565b60008060006133fe8989888888614044565b905061340e86611a5f898b6141d9565b9750878110156134255760008092509250506134ab565b8781036134338186886127d0565b9050670de0b6b3a7640000811061346757613460613459670de0b6b3a7640000896121bb565b82906127f6565b905061347f565b61347c613459670de0b6b3a764000089611bb7565b90505b61348981866121bb565b9050808a10156134a1576000809350935050506134ab565b8903925060019150505b965096945050505050565b60008082136134d85760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061355b9084901c611297565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136136f757506000919050565b680755bf798b4a1bf1e58212613720576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120ef74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611297565b60008060006138838888888888614044565b905060006138ae670de0b6b3a764000061389d8888611bb7565b6138a791906141d9565b83906121bb565b9050670de0b6b3a764000081106138db576138d4613459670de0b6b3a7640000896121bb565b90506138f3565b6138f0613459670de0b6b3a764000089611bb7565b90505b8088101561390957600080935093505050613913565b8703925060019150505b9550959350505050565b602083015160009061392f90846121bb565b604085015161393f908490611bb7565b10158015610af55750602084015161396f9084613968633b9aca00670de0b6b3a76400006141d9565b919061219d565b604085015161397f9084906121bb565b1115949350505050565b60008060008812156139ab5761399e886143c7565b6139a890876141d9565b95505b6000806139b88b8b61294a565b91509150806139cf57600080935093505050613a82565b60006139de838b8a8a8a614073565b905060006139fb6139f38a611a5f8a8e611a15565b8990896127d0565b905080821015613a15576000809550955050505050613a82565b808203670de0b6b3a76400008110613a4357613a3c613459670de0b6b3a76400008c611bb7565b9050613a5b565b613a58613459670de0b6b3a76400008c6121bb565b90505b8b811015613a7457600080965096505050505050613a82565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613aa857506000928392509050565b6000613ab78460000151613388565b90506000613ae3856040015186606001518760400151613ad791906141d9565b602088015191906127d0565b905060008212613b0a5780821015613afd57819003613b20565b5060009485945092505050565b613b13826143c7565b613b1d90826141d9565b90505b60e085015160c0860151613b359183906127d0565b9050808560c001511015613b50575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b8857855160400151613b819085906141d9565b9050613bc3565b6000613b93856143c7565b875160400151909150811015613bb3578651604001518190039150613bc1565b600080935093505050611e58565b505b855180516020909101516000918291613bdc919061294a565b9150915080613bf45760008094509450505050611e58565b875160e0810151604090910151600091613c2991613c1d91613c1691906127f6565b8a90610eea565b6101008b0151906121bb565b895160e0810151608090910151613c5491613c4891611a5f9088610eea565b8b5160600151906121bb565b613c5e91906141d9565b90506000613c96613c8a613c838c6000015160e00151886127f690919063ffffffff16565b8b90611a15565b6101008c015190611bb7565b905080821015613cb157600080965096505050505050611e58565b80820391506000613cf3858c60000151604001518d6000015160e00151670de0b6b3a7640000613ce19190614240565b8e516060810151608090910151614044565b90506000613d1d8c6000015160e00151670de0b6b3a7640000613d169190614240565b88906127f6565b905080821015613d3a576000809850985050505050505050611e58565b8b51608081015160609091015191830391613d569183916127d0565b9050670de0b6b3a76400008110613d9a578b5160e00151613d939061345990613d8790670de0b6b3a7640000614240565b8e5160e00151906121bb565b9050613dc9565b8b5160e00151613dc69061345990613dba90670de0b6b3a7640000614240565b8e5160e0015190611bb7565b90505b8b5160600151613ddc90859083906127d0565b935083670de0b6b3a76400001115613e005783670de0b6b3a7640000039350613e14565b600060019850985050505050505050611e58565b60008c60e0015112613e765760c08c015160e08d0151613e33916121bb565b9250670de0b6b3a76400008310613e57576000809850985050505050505050611e58565b670de0b6b3a76400009290920391613e6f8484610eea565b9350613eab565b613ea8613e8f8d60c001518e60e0015161144d906143c7565b613ea190670de0b6b3a76400006141d9565b8590610eea565b93505b50919a60019a5098505050505050505050565b6000806000613ed08989888888614044565b905086881015613ee75760008092509250506134ab565b9686900396613ef688876127f6565b975087811015613f0d5760008092509250506134ab565b878103613f1b8186886127d0565b9050670de0b6b3a76400008110613f4857613f41613459670de0b6b3a7640000896121bb565b9050613f60565b613f5d613459670de0b6b3a764000089611bb7565b90505b613f6a81866121bb565b905089811015613f82576000809350935050506134ab565b9890980398600198509650505050505050565b6000806000613fa78888888888614073565b90506000613fcb670de0b6b3a7640000613fc188886121bb565b61306191906141d9565b9050670de0b6b3a76400008110613ff857613ff1613459670de0b6b3a764000089611bb7565b9050614010565b61400d613459670de0b6b3a7640000896121bb565b90505b61401a8186611bb7565b90508881101561403257600080935093505050613913565b97909703976001975095505050505050565b600061405085856127f6565b61406961406186611a5f868b611a15565b8590856127d0565b6120ef91906141d9565b600061407f85856127f6565b61406961409086611a5f868b610eea565b85908561219d565b6040518061012001604052806140ac6140ea565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561416157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561418d57600080fd5b85016060818803121561419f57600080fd5b939692955090935050565b6000602082840312156141bc57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610945576109456141c3565b6000602082840312156141fe57600080fd5b81356001600160a01b0381168114610af857600080fd5b80151581146100a257600080fd5b60006020828403121561423557600080fd5b8135610af881614215565b81810381811115610945576109456141c3565b634e487b7160e01b600052601260045260246000fd5b60008261427857614278614253565b500690565b6001600160701b0381811683821601908082111561202b5761202b6141c3565b6001600160801b0381811683821601908082111561202b5761202b6141c3565b818103600083128015838313168383128216171561202b5761202b6141c3565b6000808335601e198436030181126142f457600080fd5b83018035915067ffffffffffffffff82111561430f57600080fd5b602001915036819003821315610bd157600080fd5b8082028115828204841417610945576109456141c3565b60006020828403121561434d57600080fd5b5051919050565b6001600160801b0382811682821603908082111561202b5761202b6141c3565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610945576109456141c3565b600081600f0b60016001607f1b031981036143be576143be6141c3565b60000392915050565b6000600160ff1b82016143dc576143dc6141c3565b5060000390565b602081016004831061440557634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561441d57600080fd5b8151610af881614215565b8082018281126000831280158216821582161715614448576144486141c3565b505092915050565b60008261445f5761445f614253565b600160ff1b821460001984141615614479576144796141c3565b50059056fea26469706673582212204304e702b901e502d9416ce37b0c94f18962e32cdbb40fd533297ce10ecdb1f964736f6c63430008140033";
        readonly sourceMap: "14659:174:135:-:0;;;14737:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1713:1:169;1917:7;:21;5298:17:118;;-1:-1:-1;;;;;5285:30:118;;;;;;;5345:24;;;;;5325:44;;;;;;5459:30;;;;5433:56;;;;5912:28;;;;5888:52;;6228:32;;;;;6200:60;;6443:26;;;;;6421:48;;;-1:-1:-1;6499:24:118;;;;6479:44;;-1:-1:-1;6548:19:118;;;;6533:34;;;6632:12;;;;;:18;6620:30;;;6671:12;;:17;;6660:28;;;;6717:12;;-1:-1:-1;6717:25:118;;;;6698:44;;;;6775:12;;-1:-1:-1;6775:29:118;;;;6752:52;;;;-1:-1:-1;;;6881:21:118;6864:38;;;;-1:-1:-1;;6930:22:118;6912:40;;7055:18;;;;7041:11;:32;;-1:-1:-1;;;;;;7041:32:118;;;;;;;;;;;;7099:20;;;;7083:13;:36;;;;;;;;;;;;;7147:22;;;;7129:15;:40;;;;;;;;;;14659:174:135;;14:347:234;81:2;75:9;123:6;111:19;;-1:-1:-1;;;;;145:34:234;;181:22;;;142:62;139:185;;;246:10;241:3;237:20;234:1;227:31;281:4;278:1;271:15;309:4;306:1;299:15;139:185;340:2;333:22;14:347;:::o;366:185::-;453:13;;-1:-1:-1;;;;;495:31:234;;485:42;;475:70;;541:1;538;531:12;475:70;366:185;;;:::o;556:681::-;618:5;666:4;654:9;649:3;645:19;641:30;638:50;;;684:1;681;674:12;638:50;717:2;711:9;759:4;747:17;;-1:-1:-1;;;;;779:34:234;;815:22;;;776:62;773:185;;;880:10;875:3;871:20;868:1;861:31;915:4;912:1;905:15;943:4;940:1;933:15;773:185;978:10;974:2;967:22;;1007:6;998:15;;1043:9;1037:16;1029:6;1022:32;1108:2;1097:9;1093:18;1087:25;1082:2;1074:6;1070:15;1063:50;1167:2;1156:9;1152:18;1146:25;1141:2;1133:6;1129:15;1122:50;1226:2;1215:9;1211:18;1205:25;1200:2;1192:6;1188:15;1181:50;;556:681;;;;:::o;1242:1405::-;1341:6;1394:3;1382:9;1373:7;1369:23;1365:33;1362:53;;;1411:1;1408;1401:12;1362:53;1437:17;;:::i;:::-;1477:48;1515:9;1477:48;:::i;:::-;1470:5;1463:63;1558:57;1611:2;1600:9;1596:18;1558:57;:::i;:::-;1553:2;1546:5;1542:14;1535:81;1648:57;1701:2;1690:9;1686:18;1648:57;:::i;:::-;1643:2;1636:5;1632:14;1625:81;1759:2;1748:9;1744:18;1738:25;1733:2;1726:5;1722:14;1715:49;1818:3;1807:9;1803:19;1797:26;1791:3;1784:5;1780:15;1773:51;1878:3;1867:9;1863:19;1857:26;1851:3;1844:5;1840:15;1833:51;1938:3;1927:9;1923:19;1917:26;1911:3;1904:5;1900:15;1893:51;1998:3;1987:9;1983:19;1977:26;1971:3;1964:5;1960:15;1953:51;2023:3;2079:2;2068:9;2064:18;2058:25;2053:2;2046:5;2042:14;2035:49;;2103:3;2159:2;2148:9;2144:18;2138:25;2133:2;2126:5;2122:14;2115:49;;2183:3;2218:57;2271:2;2260:9;2256:18;2218:57;:::i;:::-;2202:14;;;2195:81;2295:3;2330:57;2368:18;;;2330:57;:::i;:::-;2314:14;;;2307:81;2407:3;2442:57;2480:18;;;2442:57;:::i;:::-;2426:14;;;2419:81;2519:3;2554:62;2608:7;2588:18;;;2554:62;:::i;:::-;2538:14;;;2531:86;2542:5;1242:1405;-1:-1:-1;;;1242:1405:234:o;:::-;14659:174:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;";
        readonly linkReferences: {};
    };
    readonly deployedBytecode: {
        readonly object: "0x6080604052600436106100295760003560e01c8063dbbe80701461002e578063ed64bab21461005a575b600080fd5b61004161003c36600461414b565b61007c565b6040805192835260208301919091520160405180910390f35b34801561006657600080fd5b5061007a6100753660046141aa565b610099565b005b60008061008b868686866100a5565b915091505b94509492505050565b6100a281610304565b50565b6000806100b06103a8565b600554610100900460ff16156100d9576040516321081abf60e01b815260040160405180910390fd5b6100e16103d2565b6100ea8361043f565b7f000000000000000000000000000000000000000000000000000000000000000086101561012b5760405163211ddda360e11b815260040160405180910390fd5b6000610135610475565b905084811015610158576040516342af972b60e01b815260040160405180910390fd5b600061016261048d565b9050600061017082846104c3565b9050600061019e7f0000000000000000000000000000000000000000000000000000000000000000846141d9565b905060008060006101b08d888761094b565b92509250925080600b60008282546101c891906141d9565b90915550600090506101db84898d610acd565b9050808d10156101fe5760405163c972651760e01b815260040160405180910390fd5b610208818c610aff565b50506102168e848a88610bd8565b6000610223600287610de5565b905060008f9050610247828e600001602081019061024191906141ec565b83610e1a565b848a8e8461025860208301836141ec565b6001600160a01b03167fb354b32bd86ebd9f0968a338e5c2873d7f0d473aa7a668c2488e66038380258b8c8c61028f8b8888610ec2565b61029f6040880160208901614223565b6102b5898f8c6102af9190614240565b90610eea565b6040805195865260208601949094529284019190915215156060830152608082015260a0810188905260c00160405180910390a350979c50929a50505050505050505050506100906001600055565b61030c6103a8565b6000818152600760205260408120546001600160801b0316900361039e57600061033461048d565b90506103607f000000000000000000000000000000000000000000000000000000000000000083614269565b15158061036c57508181105b1561038a5760405163ecd29e8160e01b815260040160405180910390fd5b61039b82610396610475565b6104c3565b50505b6100a26001600055565b6002600054036103cb57604051633ee5aeb560e01b815260040160405180910390fd5b6002600055565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061041f5750600034115b1561043d57604051631574f9f360e01b815260040160405180910390fd5b565b600061044e60208301836141ec565b6001600160a01b0316036100a25760405163f0dd15fd60e01b815260040160405180910390fd5b6000610488670de0b6b3a7640000610eff565b905090565b60006104b97f000000000000000000000000000000000000000000000000000000000000000042614269565b6104889042614240565b600082815260076020526040812080546001600160801b03161515806104e857504284115b156104fe57546001600160801b03169050610945565b60008061050961048d565b905080860361051a578491506105b4565b60006105467f0000000000000000000000000000000000000000000000000000000000000000886141d9565b90505b6000818152600760205260409020546001600160801b031692508181148015610570575082155b15610579578592505b826000036105b2576105ab7f0000000000000000000000000000000000000000000000000000000000000000826141d9565b9050610549565b505b6105bd82610ffa565b83546001600160801b0319166001600160801b03919091161783556105e185611024565b50600090506007816106137f00000000000000000000000000000000000000000000000000000000000000008a614240565b815260208101919091526040016000908120546001600160801b0316915061063c600289610de5565b6000818152600e602052604081205491925081156107825750600160008061066784878a8e856111c8565b9150915080600b600082825461067d91906141d9565b909155508c905061069a8560008561069481611297565b856112c1565b6106a482846141d9565b92508b6106d586858a8d857f000000000000000000000000000000000000000000000000000000000000000061143b565b93506106e96106e48583610eea565b611485565b6005805460029061070a9084906201000090046001600160701b031661427d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061073784610ffa565b60058054601090610759908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b600061078f60018c610de5565b6000818152600e602052604090205490915080156108a157600192508a6000806107bc848a8d868a6111c8565b9150915080600b60008282546107d291906141d9565b909155508f90506107ef856000856107e981611297565b856114ab565b6107f98284614240565b92506108086106e48486610eea565b600580546002906108299084906201000090046001600160701b031661427d565b92506101000a8154816001600160701b0302191690836001600160701b0316021790555061085683610ffa565b60058054601090610878908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505b82156108d8576108cd6108b385611297565b6108bc83611297565b6108c691906142bd565b60006116a0565b6108d68b611753565b505b60006108e38c6118d8565b50604080518b8152602081018f905290810187905260608101849052608081018290529091508d907fff888cf98d2696e95c8c39aa98c9ad55a5378008f7a56614c9353b7137a57ab79060a00160405180910390a25096985050505050505050505b92915050565b60008060006109b761095b6119c8565b600154600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006119e9565b9150856109c48387611a15565b11156109d4576109d46002611a2a565b6000806000610a3e6109e46119c8565b600154600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611a4e565b9050610a5489670de0b6b3a7640000838b611a6e565b50919450909250610a6790508284614240565b610a719086614240565b9450610abd88610ab78b610a85868a614240565b8b610a908e82611b7c565b8e7f0000000000000000000000000000000000000000000000000000000000000000611b92565b90611a15565b9550909250505093509350939050565b6000610adf6040830160208401614223565b15610aeb575082610af8565b610af58484611bb7565b90505b9392505050565b60008080610b136040850160208601614223565b15610b3857610b2e85610b2960408701876142dd565b611bcc565b9093509050610b54565b5034610b5085610b4b60408701876142dd565b611e60565b8492505b610b5c610475565b91508015610bcf57604051600090339083908381818185875af1925050503d8060008114610ba6576040519150601f19603f3d011682016040523d82523d6000602084013e610bab565b606091505b5050905080610bcd576040516312171d8360e31b815260040160405180910390fd5b505b505b9250929050565b6001546001600160801b031683811015610bf657610bf66003611a2a565b60035490849003907f000000000000000000000000000000000000000000000000000000000000000090610c2e908390600f0b61200a565b1015610c3e57610c3e6001611a2a565b600354610c8d90610c8890600160801b90046001600160801b0316610c6b670de0b6b3a764000086614324565b600454600160801b90046001600160801b03169190896001612032565b610ffa565b600480546001600160801b03928316600160801b029216919091179055610cb381610ffa565b600180546001600160801b0319166001600160801b0392909216919091179055610cdc85610ffa565b60018054601090610cfe908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610d2b85610ffa565b60038054601090610d4d908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506000610d7c836120f9565b9050610d9a81610d8b88611297565b610d9590846142bd565b6116a0565b610da38461213d565b610db157610db16003611a2a565b6000610dbc85611753565b905080610ddc57604051638bdf918d60e01b815260040160405180910390fd5b50505050505050565b60006001600160f81b03821115610e0f5760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b6000838152600d602090815260408083206001600160a01b038616845290915281208054839290610e4c9084906141d9565b90915550506000838152600e602052604081208054839290610e6f9084906141d9565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4505050565b6000610ed46040830160208401614223565b15610ee357610af58484611bb7565b5082610af8565b6000610af88383670de0b6b3a764000061219d565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601610f4e575047610fd9565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610fb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd6919061433b565b90505b601254600003610fea576000610af8565b601254610af8908490839061219d565b6000600160801b821061102057604051630f0af95160e11b815260040160405180910390fd5b5090565b6005546000908190611047908490600160801b90046001600160801b0316610eea565b6005546201000090046001600160701b031692509050818111156111c35760006110718383614240565b9050611080610c8882866121bb565b600580546010906110a2908490600160801b90046001600160801b0316614354565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060006110db8583611bb790919063ffffffff16565b90506000611109827f0000000000000000000000000000000000000000000000000000000000000000610eea565b905080600b600082825461111d91906141d9565b9091555061112d90508183614240565b915061113882610ffa565b600180546000906111539084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550611180826121d0565b60038054600090611195908490600f0b614374565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055508493505050505b915091565b6000806111d58785611bb7565b91506000611203837f0000000000000000000000000000000000000000000000000000000000000000610eea565b905061122f817f0000000000000000000000000000000000000000000000000000000000000000610eea565b91508315611252576112418282614240565b61124b9084614240565b9250611269565b61125c8282614240565b61126690846141d9565b92505b8686101561128c5761127c83878961219d565b925061128982878961219d565b91505b509550959350505050565b60006001600160ff1b038211156110205760405163396ea70160e11b815260040160405180910390fd5b600354600160801b90046001600160801b031661130a610c88826112ed670de0b6b3a764000086614324565b600454600160801b90046001600160801b031691908a6000612032565b600480546001600160801b03928316600160801b02921691909117905561133086610ffa565b61133a9082614354565b600380546001600160801b03928316600160801b02921691909117905561136084610ffa565b6001805460009061137b9084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506113a8836121fa565b600380546000906113bd908490600f0b614374565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506113ed85610ffa565b6001805460109061140f908490600160801b90046001600160801b0316614354565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050505050565b6000806114538461144d8a888a61219d565b90611bb7565b905061146088848661219d565b61146a90826141d9565b90508681111561147a5786810391505b509695505050505050565b6000600160701b82106110205760405163086b151760e11b815260040160405180910390fd5b6001546001600160801b0316838110806114ed57507f00000000000000000000000000000000000000000000000000000000000000006114eb8583614240565b105b156114fc576114fc6003611a2a565b6003549084900390600f0b61151184826142bd565b90508361151d86611297565b13801561155257507f0000000000000000000000000000000000000000000000000000000000000000611550838361200a565b105b15611561576115616001611a2a565b600254600160801b90046001600160801b03166115a3610c888261158d670de0b6b3a764000088614324565b6004546001600160801b031691908c6000612032565b600480546001600160801b0319166001600160801b03929092169190911790556115cd8882614240565b90506115d881610ffa565b600280546001600160801b03928316600160801b0292169190911790556115fe83610ffa565b600180546001600160801b0319166001600160801b0392909216919091179055611627826121fa565b600380546001600160801b0319166001600160801b039290921691909117905561165087610ffa565b60018054601090611672908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050505050565b60006116c96116af8483612238565b6116ba846000612238565b6116c491906142bd565b6121fa565b9050600081600f0b131561171e57600280548291906000906116f59084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b600081600f0b121561174e57611733816143a1565b600280546000906116f59084906001600160801b0316614354565b505050565b600654600360f81b6000908152600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e9549091829161179e916001600160801b031690614240565b9050806000036117b15750600192915050565b60006117bc84612247565b9050806000036117d0575060019392505050565b6000806117de8385886122e9565b91509150806117f35750600095945050505050565b6000806117ff846123ef565b9150915061181d61180f82611297565b611818906143c7565b6124d7565b92508261183257506000979650505050505050565b61183b82610ffa565b600680546000906118569084906001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061188381610ffa565b600680546010906118a5908490600160801b90046001600160801b031661429d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060019650505050505050919050565b6000806000806118ef6118ea866125e4565b61271e565b9150915080611905575060009485945092505050565b600080861161191557600061191f565b61191f8387610eea565b600654600e6020527fd2d06a3478833ecfcc0864e3afb188a7ff21caef68ea336a6e4f79f78f6fb3e95460008080527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54939450926001600160801b039092169161198a91906141d9565b6119949190614240565b9050806000036119ad5750600096879650945050505050565b60006119b98383611bb7565b98600198509650505050505050565b600154600354600091610488916001600160801b0390911690600f0b61200a565b6000611a0a878787611a0388670de0b6b3a7640000614240565b87876127ab565b979650505050505050565b6000610af88383670de0b6b3a76400006127d0565b80604051633c06d78b60e11b8152600401611a4591906143e3565b60405180910390fd5b6000611a6582611a5f85888861219d565b906127f6565b95945050505050565b6000808080611abf8786611ab88b610ab7611a918c670de0b6b3a7640000614240565b7f000000000000000000000000000000000000000000000000000000000000000090611a15565b91906127d0565b9350611aeb847f0000000000000000000000000000000000000000000000000000000000000000610eea565b91506000611b0c611b0489670de0b6b3a7640000614240565b8a90886127d0565b9050611b38817f0000000000000000000000000000000000000000000000000000000000000000611a15565b9350611b64847f0000000000000000000000000000000000000000000000000000000000000000610eea565b611b6e90846141d9565b915050945094509450949050565b6000818311611b8b5781610af8565b5090919050565b600080611baa84611ba48a888a6127d0565b906121bb565b90506114608884866127d0565b6000610af883670de0b6b3a76400008461219d565b6000808073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611c1c575047611ca7565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015611c80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ca4919061433b565b90505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611d225787341015611d11576040516312171d8360e31b815260040160405180910390fd5b611d1b8834614240565b9050611dbc565b6040516323b872dd60e01b8152336004820152306024820152604481018990527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611d95573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611db9919061440b565b91505b81611dda576040516312171d8360e31b815260040160405180910390fd5b601254600003611e1f57611e0e887f0000000000000000000000000000000000000000000000000000000000000000611bb7565b601281905594509250611e58915050565b601254600090611e31908a908661219d565b90508060126000828254611e4591906141d9565b90915550909550909350611e5892505050565b935093915050565b6000611e6b84610eff565b9050601254600003611ea957611ea1817f0000000000000000000000000000000000000000000000000000000000000000611bb7565b601255611ecf565b6000611eb482612861565b90508060126000828254611ec891906141d9565b9091555050505b6001600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601611f4a5782341015611f39576040516312171d8360e31b815260040160405180910390fd5b611f438334614240565b9050611fe4565b6040516323b872dd60e01b8152336004820152306024820152604481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015611fbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe1919061440b565b91505b81612002576040516312171d8360e31b815260040160405180910390fd5b505050505050565b600080612017848461294a565b90925090508061202b5761202b6001611a2a565b5092915050565b600082600003612043575084611a65565b81156120b55761207461205684876141d9565b6120608587610eea565b61206a888a610eea565b61144d91906141d9565b905060006120828588612986565b905060006120908689611b7c565b9050818310156120a2578192506120ae565b808311156120ae578092505b5050611a65565b8285036120c457506000611a65565b6120ef6120d18487614240565b6120db8587611a15565b6120e5888a610eea565b61144d9190614240565b9695505050505050565b6000612121600e600061210d600286610de5565b815260200190815260200160002054611297565b612133600e600061210d600187610de5565b61094591906142bd565b60006121697f000000000000000000000000000000000000000000000000000000000000000083611a15565b60025461217f91906001600160801b03166141d9565b600154612195906001600160801b031684610eea565b101592915050565b60008260001904841183021582026121b457600080fd5b5091020490565b6000610af883670de0b6b3a7640000846127d0565b600060016001607f1b038211156110205760405163a5353be560e01b815260040160405180910390fd5b600060016001607f1b0319821280159061221b575060016001607f1b038213155b6110205760405163a5353be560e01b815260040160405180910390fd5b6000818313611b8b5781610af8565b6002546000908190612262906001600160801b0316846121bb565b905061228e7f0000000000000000000000000000000000000000000000000000000000000000826141d9565b6001546001600160801b031611156122e3576001547f0000000000000000000000000000000000000000000000000000000000000000906122d99083906001600160801b0316614240565b610af89190614240565b50919050565b6122f1614098565b6000806122fd846125e4565b9050600061230a8261271e565b935090508261231f575060009150611e589050565b6000612346612341846101600151856101400151610eea90919063ffffffff16565b611297565b612366612341856101200151866101000151611a1590919063ffffffff16565b61237091906142bd565b604080516101208101825285815260208082019590955260008052600e85527fe710864318d4a32f37d6ce54cb3fadbef648dd12d8dbdf53973564d56b7f881c54818301526060810199909952608089019990995260a088015250815160c087015281015160e086015290940151610100840152509092600192509050565b6000806000806124078560c001518660e0015161294a565b915091508061241d575060009485945092505050565b60006124298684612995565b92509050811580612438575080155b1561244b57506000958695509350505050565b60006124578783612aa4565b9050806000036124705750600096879650945050505050565b8660600151811161248657969095509350505050565b5060608601516000612499888685612b75565b9050806000036124b3575060009788975095505050505050565b8281106124ca575060009788975095505050505050565b9097909650945050505050565b6001546003546000916001600160801b0380821692600f0b91600160801b900416838080806125298787877f00000000000000000000000000000000000000000000000000000000000000008d612eda565b9350935093509350806125455750600098975050505050505050565b8684146125765761255584610ffa565b600180546001600160801b0319166001600160801b03929092169190911790555b8583146125a757612586836121fa565b600380546001600160801b0319166001600160801b03929092169190911790555b8482146125d5576125b782610ffa565b600180546001600160801b03928316600160801b0292169190911790555b50600198975050505050505050565b6125ec6140ea565b60408051610180810182526001546001600160801b038082168352600354600f0b6020840152600160801b91829004811693830193909352606082018590527f000000000000000000000000000000000000000000000000000000000000000060808301527f000000000000000000000000000000000000000000000000000000000000000060a08301527f000000000000000000000000000000000000000000000000000000000000000060c08301527f000000000000000000000000000000000000000000000000000000000000000060e083015260025404821661010082015260045490916101208301916126e49116612ff2565b81526003546001600160801b03600160801b918290048116602084015260045460409093019261271692900416612ff2565b905292915050565b600080600080600061272f86613068565b915091508061274657506000958695509350505050565b6127538660a00151611297565b61275c87613388565b8361276a8960000151611297565b6127749190614428565b61277e9190614428565b61278891906142bd565b9250505060008112156127a15750600093849350915050565b9360019350915050565b6000806127bc8888888888886133ec565b90925090508061147a5761147a6000611a2a565b60008260001904841183021582026127e757600080fd5b50910281810615159190040190565b60008160000361280f5750670de0b6b3a7640000610945565b8260000361281f57506000610945565b600061282a83611297565b9050600061283f61283a86611297565b6134b6565b9050818102612856670de0b6b3a764000082614450565b90506120ef816136dc565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016128b057504761293b565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015612914573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612938919061433b565b90505b601254610af89084908361219d565b60008060008361295986611297565b61296391906142bd565b9050600081121561297b576000809250925050610bd1565b946001945092505050565b60008183116122e35782610af8565b60008060008460a00151126129b257505060808201516001610bd1565b60008460a001516129c2906143c7565b905060006129fe85876101000151886000015160e00151670de0b6b3a76400006129ec9190614240565b89516060810151608090910151613871565b93509050821580612a0d575080155b15612a2057600080935093505050610bd1565b6000612a2c83836121bb565b9050670de0b6b3a76400008111612a685780670de0b6b3a7640000039450612a618760c0015186610eea90919063ffffffff16565b9450612a77565b60008094509450505050610bd1565b8660800151851115612a96578660800151600194509450505050610bd1565b506001925050509250929050565b600080612ada8460c001518560e00151866101000151876000015160a00151612acc88611297565b612ad5906143c7565b612eda565b87516040810192909252602082019290925291909152905080612b01576000915050610945565b6000612b10856000015161271e565b9250905081612b2457600092505050610945565b84602001518110612b3a57600092505050610945565b600085606001518660400151612b5091906141d9565b9050612b6b8287602001518361219d9092919063ffffffff16565b6120ef9082614240565b60008084606001518560400151612b8c91906141d9565b60208601516060870151919250600091612ba6918461219d565b90508560a00151600003612bbd579150610af89050565b60005b6004811015612ed057612bd38286612986565b91506000612bfc8860c001518960e001518a61010001518b6000015160a00151612acc88611297565b8b516040810192909252602082019290925291909152905080612c26576000945050505050610af8565b6000612c35896000015161271e565b9250905081612c4c57600095505050505050610af8565b612c5789828761391d565b15612c63575050612ed0565b60008960a001511315612dc757885180516020820151604083015160a084015160e0909401518d94600094612cbd9490939092909190612cab90670de0b6b3a7640000614240565b87516060810151608090910151613989565b9450905083612cd6576000975050505050505050610af8565b808260a0015110612dc457612cea82613a8e565b909650935083612d04576000975050505050505050610af8565b612d298260c001518360e00151846101000151856000015160a00151612acc8b611297565b85516040810192909252602082019290925291909152935083612d56576000975050505050505050610af8565b815180516020820151604083015160a0909301518e5160e00151612d88949190612cab90670de0b6b3a7640000614240565b9450905083612da1576000975050505050505050610af8565b8a60a001518111612dbb5785975050505050505050610af8565b50505050612bc0565b50505b6000612dd88a8a8c60a00151613b64565b93509050821580612df15750670de0b6b3a76400008110155b15612e055760009650505050505050610af8565b80670de0b6b3a76400000390506000612e326123418c604001518d60200151611a1590919063ffffffff16565b612e3f612341858a610eea565b612e4991906142bd565b90506000811315612e7357612e628761144d8385611bb7565b612e6c90876141d9565b9550612ec1565b6000811215612eb8576000612e8d8861144d8581866143c7565b905086811015612ea1578087039650612eb2565b600098505050505050505050610af8565b50612ec1565b50505050612ed0565b84600101945050505050612bc0565b5095945050505050565b60008060008084600003612ef957508792508691508590506001612fe6565b600085612f058b611297565b612f0f9190614428565b9050612f1a87611297565b811215612f3557600080600080945094509450945050612fe6565b80945060008912612f5557612f4e612341868b8d61219d565b9350612f78565b612f6c612341612f648b6143c7565b87908d6127d0565b612f75906143c7565b93505b600080612f858c8c61294a565b9150915080612fa4576000806000809650965096509650505050612fe6565b6000612fb0888861294a565b9250905081612fd057600080600080975097509750975050505050612fe6565b612fdb8b828561219d565b955060019450505050505b95509550955095915050565b600080670de0b6b3a764000061300661048d565b6130109190614324565b905080831161302057600061302a565b61302a8184614240565b9150610af8613061670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000614324565b8390611bb7565b600080600061308d612341856101600151866101400151610eea90919063ffffffff16565b6130ad612341866101200151876101000151611a1590919063ffffffff16565b6130b791906142bd565b90506000806130ce8660000151876020015161294a565b91509150806130e557506000958695509350505050565b60008313156132265760008390506000613133886000015189602001518a604001518b60a001518c60e00151670de0b6b3a76400006131249190614240565b8d606001518e60800151613989565b935090508261314c575060009788975095505050505050565b8181106131ea576000613186858a60400151858c60e00151670de0b6b3a76400006131779190614240565b8d606001518e608001516133ec565b945090508315801561319b57508860c0015183105b156131b25750600098600198509650505050505050565b836131c857506000988998509650505050505050565b6131d181611297565b6131da906143c7565b9960019950975050505050505050565b6000886020015112613212576132098860a00151856123419190614240565b6119b9906143c7565b60a088015188516132099161234191614240565b600083121561337957600061323a846143c7565b9050600061326e8489604001518a60e00151670de0b6b3a764000061325f9190614240565b8b606001518c60800151613871565b9350905082613287575060009788975095505050505050565b81811061330c5760006132c1858a60400151858c60e00151670de0b6b3a76400006132b29190614240565b8d606001518e60800151613ebe565b94509050831580156132d657508860c0015183105b156132ed5750600098600198509650505050505050565b8361330357506000988998509650505050505050565b6131da81611297565b600061333e858a604001518b60e00151670de0b6b3a764000061332f9190614240565b8c606001518d60800151613f95565b945090508361335857506000988998509650505050505050565b6131da61336f8a60600151848661144d9190614240565b61234190836141d9565b50600095600195509350505050565b60006133bb612341836101200151670de0b6b3a76400006133a99190614240565b606085015161010086015191906127d0565b612133612341846101600151670de0b6b3a76400006133da9190614240565b6060860151610140870151919061219d565b60008060006133fe8989888888614044565b905061340e86611a5f898b6141d9565b9750878110156134255760008092509250506134ab565b8781036134338186886127d0565b9050670de0b6b3a7640000811061346757613460613459670de0b6b3a7640000896121bb565b82906127f6565b905061347f565b61347c613459670de0b6b3a764000089611bb7565b90505b61348981866121bb565b9050808a10156134a1576000809350935050506134ab565b8903925060019150505b965096945050505050565b60008082136134d85760405163e61b497560e01b815260040160405180910390fd5b506001600160801b03811160071b81811c67ffffffffffffffff1060061b1781811c63ffffffff1060051b1781811c61ffff1060041b1781811c60ff10600390811b90911782811c600f1060021b1782811c909110600190811b90911782811c90911017609f8181036060019290921b91605f1982019061355b9084901c611297565b6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b391909102017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b6000680248ce36a70cb26b3e1982136136f757506000919050565b680755bf798b4a1bf1e58212613720576040516373a2d6b160e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b3988102909303926c240c330e9fb2d9cbaf0fd5aafb1984018402606090811d6d0277594991cfc85f6e2461837cd9018502811d6d1a521255e34f6a5061b25ef1c9c319018502811d6db1bbb201f443cf962f1a1d3db4a5018502811d6e02c72388d9f74f51a9331fed693f1419018502811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765087018702831d9081019087016d01d3967ed30fc4f89c02bab570811901810290921d6e0587f503bb6ea29d25fcb7401964500186026d360d7aeea093263ecc6e0ecb291760621b0181810595509293509091906120ef74029d9dc38563c32e5c2f6dc192ee70ef65f9978af3860260c38690031c611297565b60008060006138838888888888614044565b905060006138ae670de0b6b3a764000061389d8888611bb7565b6138a791906141d9565b83906121bb565b9050670de0b6b3a764000081106138db576138d4613459670de0b6b3a7640000896121bb565b90506138f3565b6138f0613459670de0b6b3a764000089611bb7565b90505b8088101561390957600080935093505050613913565b8703925060019150505b9550959350505050565b602083015160009061392f90846121bb565b604085015161393f908490611bb7565b10158015610af55750602084015161396f9084613968633b9aca00670de0b6b3a76400006141d9565b919061219d565b604085015161397f9084906121bb565b1115949350505050565b60008060008812156139ab5761399e886143c7565b6139a890876141d9565b95505b6000806139b88b8b61294a565b91509150806139cf57600080935093505050613a82565b60006139de838b8a8a8a614073565b905060006139fb6139f38a611a5f8a8e611a15565b8990896127d0565b905080821015613a15576000809550955050505050613a82565b808203670de0b6b3a76400008110613a4357613a3c613459670de0b6b3a76400008c611bb7565b9050613a5b565b613a58613459670de0b6b3a76400008c6121bb565b90505b8b811015613a7457600080965096505050505050613a82565b8b9003955060019450505050505b97509795505050505050565b60008060008360e0015113613aa857506000928392509050565b6000613ab78460000151613388565b90506000613ae3856040015186606001518760400151613ad791906141d9565b602088015191906127d0565b905060008212613b0a5780821015613afd57819003613b20565b5060009485945092505050565b613b13826143c7565b613b1d90826141d9565b90505b60e085015160c0860151613b359183906127d0565b9050808560c001511015613b50575060009485945092505050565b808560c00151036001935093505050915091565b6000806000808412613b8857855160400151613b819085906141d9565b9050613bc3565b6000613b93856143c7565b875160400151909150811015613bb3578651604001518190039150613bc1565b600080935093505050611e58565b505b855180516020909101516000918291613bdc919061294a565b9150915080613bf45760008094509450505050611e58565b875160e0810151604090910151600091613c2991613c1d91613c1691906127f6565b8a90610eea565b6101008b0151906121bb565b895160e0810151608090910151613c5491613c4891611a5f9088610eea565b8b5160600151906121bb565b613c5e91906141d9565b90506000613c96613c8a613c838c6000015160e00151886127f690919063ffffffff16565b8b90611a15565b6101008c015190611bb7565b905080821015613cb157600080965096505050505050611e58565b80820391506000613cf3858c60000151604001518d6000015160e00151670de0b6b3a7640000613ce19190614240565b8e516060810151608090910151614044565b90506000613d1d8c6000015160e00151670de0b6b3a7640000613d169190614240565b88906127f6565b905080821015613d3a576000809850985050505050505050611e58565b8b51608081015160609091015191830391613d569183916127d0565b9050670de0b6b3a76400008110613d9a578b5160e00151613d939061345990613d8790670de0b6b3a7640000614240565b8e5160e00151906121bb565b9050613dc9565b8b5160e00151613dc69061345990613dba90670de0b6b3a7640000614240565b8e5160e0015190611bb7565b90505b8b5160600151613ddc90859083906127d0565b935083670de0b6b3a76400001115613e005783670de0b6b3a7640000039350613e14565b600060019850985050505050505050611e58565b60008c60e0015112613e765760c08c015160e08d0151613e33916121bb565b9250670de0b6b3a76400008310613e57576000809850985050505050505050611e58565b670de0b6b3a76400009290920391613e6f8484610eea565b9350613eab565b613ea8613e8f8d60c001518e60e0015161144d906143c7565b613ea190670de0b6b3a76400006141d9565b8590610eea565b93505b50919a60019a5098505050505050505050565b6000806000613ed08989888888614044565b905086881015613ee75760008092509250506134ab565b9686900396613ef688876127f6565b975087811015613f0d5760008092509250506134ab565b878103613f1b8186886127d0565b9050670de0b6b3a76400008110613f4857613f41613459670de0b6b3a7640000896121bb565b9050613f60565b613f5d613459670de0b6b3a764000089611bb7565b90505b613f6a81866121bb565b905089811015613f82576000809350935050506134ab565b9890980398600198509650505050505050565b6000806000613fa78888888888614073565b90506000613fcb670de0b6b3a7640000613fc188886121bb565b61306191906141d9565b9050670de0b6b3a76400008110613ff857613ff1613459670de0b6b3a764000089611bb7565b9050614010565b61400d613459670de0b6b3a7640000896121bb565b90505b61401a8186611bb7565b90508881101561403257600080935093505050613913565b97909703976001975095505050505050565b600061405085856127f6565b61406961406186611a5f868b611a15565b8590856127d0565b6120ef91906141d9565b600061407f85856127f6565b61406961409086611a5f868b610eea565b85908561219d565b6040518061012001604052806140ac6140ea565b815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b6000806000806080858703121561416157600080fd5b843593506020850135925060408501359150606085013567ffffffffffffffff81111561418d57600080fd5b85016060818803121561419f57600080fd5b939692955090935050565b6000602082840312156141bc57600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b80820180821115610945576109456141c3565b6000602082840312156141fe57600080fd5b81356001600160a01b0381168114610af857600080fd5b80151581146100a257600080fd5b60006020828403121561423557600080fd5b8135610af881614215565b81810381811115610945576109456141c3565b634e487b7160e01b600052601260045260246000fd5b60008261427857614278614253565b500690565b6001600160701b0381811683821601908082111561202b5761202b6141c3565b6001600160801b0381811683821601908082111561202b5761202b6141c3565b818103600083128015838313168383128216171561202b5761202b6141c3565b6000808335601e198436030181126142f457600080fd5b83018035915067ffffffffffffffff82111561430f57600080fd5b602001915036819003821315610bd157600080fd5b8082028115828204841417610945576109456141c3565b60006020828403121561434d57600080fd5b5051919050565b6001600160801b0382811682821603908082111561202b5761202b6141c3565b600f81810b9083900b0160016001607f1b03811360016001607f1b031982121715610945576109456141c3565b600081600f0b60016001607f1b031981036143be576143be6141c3565b60000392915050565b6000600160ff1b82016143dc576143dc6141c3565b5060000390565b602081016004831061440557634e487b7160e01b600052602160045260246000fd5b91905290565b60006020828403121561441d57600080fd5b8151610af881614215565b8082018281126000831280158216821582161715614448576144486141c3565b505092915050565b60008261445f5761445f614253565b600160ff1b821460001984141615614479576144796141c3565b50059056fea26469706673582212204304e702b901e502d9416ce37b0c94f18962e32cdbb40fd533297ce10ecdb1f964736f6c63430008140033";
        readonly sourceMap: "14659:174:135:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;2220:314:41;;;;;;:::i;:::-;;:::i;:::-;;;;785:25:234;;;841:2;826:18;;819:34;;;;758:18;2220:314:41;;;;;;;2690:99;;;;;;;;;;-1:-1:-1;2690:99:41;;;;;:::i;:::-;;:::i;:::-;;2220:314;2413:7;2422;2460:67;2471:11;2484;2497:19;2518:8;2460:10;:67::i;:::-;2441:86;;;;2220:314;;;;;;;;:::o;2690:99::-;2754:28;2766:15;2754:11;:28::i;:::-;2690:99;:::o;1957:4443:117:-;2168:7;2177;2356:21:169;:19;:21::i;:::-;9562::112;;::::1;::::0;::::1;;;9558:85;;;9606:26;;-1:-1:-1::0;;;9606:26:112::1;;;;;;;;;;;9558:85;2246:20:117::2;:18;:20::i;:::-;2331:23;2345:8;2331:13;:23::i;:::-;2493:25;2479:11;:39;2475:115;;;2541:38;;-1:-1:-1::0;;;2541:38:117::2;;;;;;;;;;;2475:115;2916:23;2942:21;:19;:21::i;:::-;2916:47;;2995:19;2977:15;:37;2973:106;;;3037:31;;-1:-1:-1::0;;;3037:31:117::2;;;;;;;;;;;2973:106;3088:24;3115:19;:17;:19::i;:::-;3088:46;;3144:27;3174:85;3204:16;3234:15;3174:16;:85::i;:::-;3144:115:::0;-1:-1:-1;3498:20:117::2;3521:36;3540:17;3521:16:::0;:36:::2;:::i;:::-;3498:59;;3581:19;3614:26:::0;3654::::2;3693:132;3730:11;3759:15;3792:19;3693;:132::i;:::-;3567:258;;;;;;3904:18;3878:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;4556:15:117::2;::::0;-1:-1:-1;4574:110:117::2;4612:11:::0;4637:15;4666:8;4574:24:::2;:110::i;:::-;4556:128;;4712:7;4698:11;:21;4694:84;;;4742:25;;-1:-1:-1::0;;;4742:25:117::2;;;;;;;;;;;4694:84;4787:27;4796:7;4805:8;4787;:27::i;:::-;;;5042:137;5071:11;5096:18;5128:15;5157:12;5042:15;:137::i;:::-;5238:15;5256:98;5291:27;5332:12;5256:21;:98::i;:::-;5238:116;;5364:18;5385:11;5364:32;;5437:48;5443:7;5452:8;:20;;;;;;;;;;:::i;:::-;5474:10;5437:5;:48::i;:::-;5562:18:::0;5648:15;5743:8;5822:7;5789:19:::2;;::::0;::::2;5743:8:::0;5789:19:::2;:::i;:::-;-1:-1:-1::0;;;;;5766:586:117::2;;5843:12;5869:11;5910:67;5942:7;5951:16;5969:7;5910:31;:67::i;:::-;6015:14;::::0;;;::::2;::::0;::::2;;:::i;:::-;6220:98;6288:16;6243:18;6221:19;:40;;;;:::i;:::-;6220:50:::0;::::2;:98::i;:::-;5766:586;::::0;;2385:25:234;;;2441:2;2426:18;;2419:34;;;;2469:18;;;2462:34;;;;2539:14;2532:22;2527:2;2512:18;;2505:50;2586:3;2571:19;;2564:35;2630:3;2615:19;;2608:35;;;2372:3;2357:19;5766:586:117::2;;;;;;;-1:-1:-1::0;6371:12:117;;-1:-1:-1;6385:7:117;;-1:-1:-1;;;;;;;;;;;2398:20:169;1713:1;2924:7;:21;2744:208;1347:758:113;2356:21:169;:19;:21::i;:::-;1494:29:113::1;::::0;;;:12:::1;:29;::::0;;;;:45;-1:-1:-1;;;;;1494:45:113::1;:50:::0;;1560:7:::1;1490:87;1756:24;1783:19;:17;:19::i;:::-;1756:46:::0;-1:-1:-1;1829:37:113::1;1847:19;1829:15:::0;:37:::1;:::i;:::-;:42:::0;::::1;::::0;:92:::1;;;1906:15;1887:16;:34;1829:92;1812:187;;;1953:35;;-1:-1:-1::0;;;1953:35:113::1;;;;;;;;;;;1812:187;2042:56;2059:15;2076:21;:19;:21::i;:::-;2042:16;:56::i;:::-;;1415:690;2387:1:169;2398:20:::0;1713:1;2924:7;:21;2744:208;2431:307;1755:1;2558:7;;:18;2554:86;;2599:30;;-1:-1:-1;;;2599:30:169;;;;;;;;;;;2554:86;1755:1;2714:7;:17;2431:307::o;7513:174:135:-;7588:10;-1:-1:-1;;;;;7580:26:135;129:42:120;7580:26:135;;;;:43;;;7622:1;7610:9;:13;7580:43;7576:105;;;7646:24;;-1:-1:-1;;;7646:24:135;;;;;;;;;;;7576:105;7513:174::o;8216:221:112:-;8360:1;8328:20;;;;:8;:20;:::i;:::-;-1:-1:-1;;;;;8328:34:112;;8324:107;;8385:35;;-1:-1:-1;;;8385:35:112;;;;;;;;;;;5594:150;5672:23;5718:19;193:4:122;5718:14:112;:19::i;:::-;5711:26;;5594:150;:::o;11561:223::-;11637:24;11739:37;11757:19;11739:15;:37;:::i;:::-;11708:69;;:15;:69;:::i;2367:8688:113:-;2493:7;2625:51;;;:12;:51;;;;;2703:27;;-1:-1:-1;;;;;2703:27:113;:32;;;:81;;;2769:15;2751;:33;2703:81;2686:168;;;2816:27;-1:-1:-1;;;;;2816:27:113;;-1:-1:-1;2809:34:113;;2686:168;3096:33;3139:24;3166:19;:17;:19::i;:::-;3139:46;;3218:16;3199:15;:35;3195:690;;3278:16;3250:44;;3195:690;;;3347:12;3362:37;3380:19;3362:15;:37;:::i;:::-;3347:52;;3325:550;3523:18;;;;:12;:18;;;;;:34;-1:-1:-1;;;;;3523:34:113;;-1:-1:-1;3600:24:113;;;:58;;;;-1:-1:-1;3628:30:113;;3600:58;3575:187;;;3727:16;3699:44;;3575:187;3783:25;3812:1;3783:30;3837:5;3779:82;3435:27;3443:19;3435:27;;:::i;:::-;;;3325:550;;;;3195:690;3977:37;:25;:35;:37::i;:::-;3947:67;;-1:-1:-1;;;;;;3947:67:113;-1:-1:-1;;;;;3947:67:113;;;;;;;4101:40;4124:16;4101:22;:40::i;:::-;-1:-1:-1;4605:27:113;;-1:-1:-1;4635:12:113;4605:27;4661:35;4679:17;4661:15;:35;:::i;:::-;4635:71;;;;;;;;;;;-1:-1:-1;4635:71:113;;;:87;-1:-1:-1;;;;;4635:87:113;;-1:-1:-1;4755:101:113;4790:27;4831:15;4755:21;:101::i;:::-;4866:27;4896:26;;;:12;:26;;;;;;4732:124;;-1:-1:-1;4966:23:113;;4962:2486;;-1:-1:-1;5180:4:113;5343:21;;5420:237;5467:19;5508;5549:25;5596:16;5343:21;5420:25;:237::i;:::-;5325:332;;;;5697:13;5671:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5749:15:113;;-1:-1:-1;5802:237:113;5836:19;5724:22;5892:13;5923:24;5892:13;5923:22;:24::i;:::-;6011:14;5802:16;:237::i;:::-;6273:30;6290:13;6273:30;;:::i;:::-;;-1:-1:-1;6711:16:113;6781:262;6840:19;6273:30;6908:19;6945:25;6711:16;7021:8;6781:41;:262::i;:::-;6765:278;-1:-1:-1;7278:84:113;:55;6765:278;7317:15;7278:38;:55::i;:::-;:82;:84::i;:::-;7243:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;7243:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7243:119:113;;;;;-1:-1:-1;;;;;7243:119:113;;;;;;7412:25;:13;:23;:25::i;:::-;7376:32;:61;;:32;;:61;;;;-1:-1:-1;;;7376:61:113;;-1:-1:-1;;;;;7376:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;7376:61:113;;;;;-1:-1:-1;;;;;7376:61:113;;;;;;4991:2457;;;;4962:2486;7566:19;7588:100;7623:26;7663:15;7588:21;:100::i;:::-;7698:26;7727:25;;;:12;:25;;;;;;7566:122;;-1:-1:-1;7766:22:113;;7762:1716;;7978:4;;-1:-1:-1;8148:16:113;8122:23;;8297:234;8344:18;8384:19;8425:25;8148:16;7978:4;8297:25;:234::i;:::-;8202:329;;;;8571:13;8545:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;8623:15:113;;-1:-1:-1;8676:235:113;8709:18;8598:22;8764:13;8795:24;8764:13;8795:22;:24::i;:::-;8883:14;8676:15;:235::i;:::-;9045:30;9062:13;9045:30;;:::i;:::-;;-1:-1:-1;9308:84:113;:55;9045:30;9347:15;9308:38;:55::i;:84::-;9273:31;:119;;:31;;:119;;;;;;;-1:-1:-1;;;;;9273:119:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9273:119:113;;;;;-1:-1:-1;;;;;9273:119:113;;;;;;9442:25;:13;:23;:25::i;:::-;9406:32;:61;;:32;;:61;;;;-1:-1:-1;;;9406:61:113;;-1:-1:-1;;;;;9406:61:113;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9406:61:113;;;;;-1:-1:-1;;;;;9406:61:113;;;;;;7790:1688;;;;7762:1716;9629:15;9625:701;;;9849:132;9918:30;:19;:28;:30::i;:::-;9886:29;:18;:27;:29::i;:::-;:62;;;;:::i;:::-;9966:1;9849:19;:132::i;:::-;10272:43;10298:16;10272:25;:43::i;:::-;;9625:701;10705:20;10731:44;10758:16;10731:26;:44::i;:::-;-1:-1:-1;10790:215:113;;;3767:25:234;;;3823:2;3808:18;;3801:34;;;3851:18;;;3844:34;;;3909:2;3894:18;;3887:34;;;3952:3;3937:19;;3930:35;;;10704:71:113;;-1:-1:-1;10820:15:113;;10790:215;;3754:3:234;3739:19;10790:215:113;;;;;;;-1:-1:-1;11023:25:113;;-1:-1:-1;;;;;;;;;2367:8688:113;;;;;:::o;19644:4007:117:-;19840:19;19873:26;19913;20201:239;20248:25;:23;:25::i;:::-;20287:12;:25;-1:-1:-1;;;20287:25:117;;-1:-1:-1;;;;;20287:25:117;20326:11;20351:12;20377:16;20407:23;20201:33;:239::i;:::-;20180:260;-1:-1:-1;20769:11:117;20724:42;20180:260;20749:16;20724:24;:42::i;:::-;:56;20720:213;;;20796:126;20852:56;20796:38;:126::i;:::-;21095:16;21121:26;21157:17;21177:184;21224:25;:23;:25::i;:::-;21263:12;:25;-1:-1:-1;;;21263:25:117;;-1:-1:-1;;;;;21263:25:117;21302:23;21339:12;21177:33;:184::i;:::-;21157:204;;21561:179;21599:11;193:4:122;21691:9:117;21714:16;21561:24;:179::i;:::-;-1:-1:-1;21524:216:117;;-1:-1:-1;21524:216:117;;-1:-1:-1;22413:29:117;;-1:-1:-1;21524:216:117;;22413:29;:::i;:::-;22391:51;;;;:::i;:::-;;-1:-1:-1;23031:542:117;23556:16;23031:505;23101:11;23325:39;23346:18;22391:51;23325:39;:::i;:::-;23382:20;23420:42;:16;23382:20;23420;:42::i;:::-;23480:16;23514:8;23031:52;:505::i;:::-;:524;;:542::i;:::-;23017:556;-1:-1:-1;23625:18:117;;-1:-1:-1;;;19644:4007:117;;;;;;;:::o;34231:393:112:-;34400:7;34423:15;;;;;;;;:::i;:::-;34419:199;;;-1:-1:-1;34461:7:112;34454:14;;34419:199;34574:33;:7;34590:16;34574:15;:33::i;:::-;34567:40;;34419:199;34231:393;;;;;:::o;1926:1509::-;2040:20;;;2206:15;;;;;;;;:::i;:::-;2202:812;;;2306:91;2340:7;2365:18;;;;:8;:18;:::i;:::-;2306:16;:91::i;:::-;2281:116;;-1:-1:-1;2281:116:112;-1:-1:-1;2202:812:112;;;-1:-1:-1;2553:9:112;2623:47;2642:7;2651:18;;;;:8;:18;:::i;:::-;2623;:47::i;:::-;2996:7;2981:22;;2202:812;3086:21;:19;:21::i;:::-;3068:39;-1:-1:-1;3184:10:112;;3180:200;;3229:45;;3211:12;;3237:10;;3262:6;;3211:12;3229:45;3211:12;3229:45;3262:6;3237:10;3229:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3210:64;;;3293:7;3288:82;;3327:28;;-1:-1:-1;;;3327:28:112;;;;;;;;;;;3288:82;3196:184;3180:200;3390:38;1926:1509;;;;;;:::o;13794:3622:117:-;14138:12;:26;-1:-1:-1;;;;;14138:26:117;14178:35;;;14174:192;;;14229:126;14285:56;14229:38;:126::i;:::-;14910:28;;14399:36;;;;;14955:21;;14815:137;;14399:36;;14910:28;;14815:46;:137::i;:::-;:161;14798:395;;;15001:181;15057:111;15001:38;:181::i;:::-;15428:30;;15307:311;;:286;;-1:-1:-1;;;15428:30:117;;-1:-1:-1;;;;;15428:30:117;15476:19;193:4:122;15476:13:117;:19;:::i;:::-;15328:37;;-1:-1:-1;;;15328:37:117;;-1:-1:-1;;;;;15328:37:117;;;15546:11;15575:4;15307:103;:286::i;:::-;:309;:311::i;:::-;15267:37;:351;;-1:-1:-1;;;;;15267:351:117;;;-1:-1:-1;;;15267:351:117;;;;;;;;;15941:25;:13;:23;:25::i;:::-;15912:12;:54;;-1:-1:-1;;;;;;15912:54:117;-1:-1:-1;;;;;15912:54:117;;;;;;;;;;16005:23;:11;:21;:23::i;:::-;15976:12;:52;;:25;;:52;;;;-1:-1:-1;;;15976:52:117;;-1:-1:-1;;;;;15976:52:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;15976:52:117;;;;;-1:-1:-1;;;;;15976:52:117;;;;;;16072:23;:11;:21;:23::i;:::-;16038:30;:57;;:30;;:57;;;;-1:-1:-1;;;16038:57:117;;-1:-1:-1;;;;;16038:57:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;16038:57:117;;;;;-1:-1:-1;;;;;16038:57:117;;;;;;16251:21;16275:30;16291:13;16275:15;:30::i;:::-;16251:54;;16315:110;16348:14;16393:22;:11;:20;:22::i;:::-;16376:39;;:14;:39;:::i;:::-;16315:19;:110::i;:::-;16842:28;16853:16;16842:10;:28::i;:::-;16837:186;;16886:126;16942:56;16886:38;:126::i;:::-;17256:12;17271:43;17297:16;17271:25;:43::i;:::-;17256:58;;17329:7;17324:86;;17359:40;;-1:-1:-1;;;17359:40:117;;;;;;;;;;;17324:86;13965:3451;;;13794:3622;;;;:::o;1198:469:119:-;1309:10;-1:-1:-1;;;;;1401:10:119;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:119;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:119;1620:18;;;;1617:34;;1198:469::o;5934:316:116:-;6051:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6051:23:116;;;;;;;;;:33;;6078:6;;6051:19;:33;;6078:6;;6051:33;:::i;:::-;;;;-1:-1:-1;;6094:21:116;;;;:12;:21;;;;;:31;;6119:6;;6094:21;:31;;6119:6;;6094:31;:::i;:::-;;;;-1:-1:-1;;6184:59:116;;;785:25:234;;;841:2;826:18;;819:34;;;-1:-1:-1;;;;;6184:59:116;;;6219:1;;6199:10;;6184:59;;758:18:234;6184:59:116;;;;;;;5934:316;;;:::o;33531:405:112:-;33707:7;33730:15;;;;;;;;:::i;:::-;33726:204;;;33841:33;:7;33857:16;33841:15;:33::i;33726:204::-;-1:-1:-1;33912:7:112;33905:14;;1610:118:122;1672:7;1699:21;1710:1;1713;193:4;1699:10;:21::i;7848:460:135:-;7940:7;;-1:-1:-1;;8055:10:135;-1:-1:-1;;;;;8047:26:135;;8043:162;;-1:-1:-1;8098:21:135;8043:162;;;8159:35;;-1:-1:-1;;;8159:35:135;;8188:4;8159:35;;;5031:51:234;8159:10:135;-1:-1:-1;;;;;8159:20:135;;;;5004:18:234;;8159:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8150:44;;8043:162;8234:11;;8249:1;8234:16;:67;;8300:1;8234:67;;;8285:11;;8253:44;;:12;;8277:6;;8253:23;:44::i;884:190:125:-;937:9;-1:-1:-1;;;964:1:125;:12;958:86;;1000:33;;-1:-1:-1;;;1000:33:125;;;;;;;;;;;958:86;-1:-1:-1;1065:1:125;884:190::o;21722:2511:112:-;22081:32;;21828:26;;;;22043:80;;:16;;-1:-1:-1;;;22081:32:112;;-1:-1:-1;;;;;22081:32:112;22043:24;:80::i;:::-;22154:31;;;;;-1:-1:-1;;;;;22154:31:112;;-1:-1:-1;22022:101:112;-1:-1:-1;22328:39:112;;;22324:1903;;;22533:22;22558:39;22579:18;22558;:39;:::i;:::-;22533:64;-1:-1:-1;22870:84:112;:55;22533:64;22908:16;22870:37;:55::i;:84::-;22834:32;:120;;:32;;:120;;;;-1:-1:-1;;;22834:120:112;;-1:-1:-1;;;;;22834:120:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;22834:120:112;;;;;-1:-1:-1;;;;;22834:120:112;;;;;;23253:28;23284:70;23324:16;23284:14;:22;;:70;;;;:::i;:::-;23253:101;-1:-1:-1;23368:36:112;23407:80;23253:101;23453:20;23407:28;:80::i;:::-;23368:119;;23527:28;23501:22;;:54;;;;;;;:::i;:::-;;;;-1:-1:-1;23832:52:112;;-1:-1:-1;23856:28:112;23832:52;;:::i;:::-;;;23928:32;:20;:30;:32::i;:::-;23898:12;:62;;:26;;:62;;;;-1:-1:-1;;;;;23898:62:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23898:62:112;;;;;-1:-1:-1;;;;;23898:62:112;;;;;;24006:31;:20;:29;:31::i;:::-;23974:28;:63;;:28;;:63;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;;-1:-1:-1;;;;;23974:63:112;;;;;;24198:18;24177:39;;22369:1858;;;22324:1903;21722:2511;;;:::o;11726:2452:113:-;11952:21;;12358:37;:11;12378:16;12358:19;:37::i;:::-;12342:53;-1:-1:-1;12405:15:113;12423:31;12342:53;12445:8;12423:21;:31::i;:::-;12405:49;-1:-1:-1;12480:33:113;12405:49;12496:16;12480:15;:33::i;:::-;12464:49;;12940:7;12936:557;;;12980:23;12990:13;12980:7;:23;:::i;:::-;12963:40;;;;:::i;:::-;;;12936:557;;;13459:23;13469:13;13459:7;:23;:::i;:::-;13442:40;;;;:::i;:::-;;;12936:557;13716:20;13692:21;:44;13688:484;;;13831:115;:13;13873:21;13912:20;13831:24;:115::i;:::-;13815:131;-1:-1:-1;14046:115:113;:13;14088:21;14127:20;14046:24;:115::i;:::-;14030:131;;13688:484;11998:2180;11726:2452;;;;;;;;:::o;2001:204:125:-;2053:8;-1:-1:-1;;;;;2079:1:125;:30;;2073:103;;2133:32;;-1:-1:-1;;;2133:32:125;;;;;;;;;;;17905:1127:117;18207:30;;-1:-1:-1;;;18207:30:117;;-1:-1:-1;;;;;18207:30:117;18287:300;:275;18207:30;18444:19;193:4:122;18444:13:117;:19;:::i;:::-;18308:37;;-1:-1:-1;;;18308:37:117;;-1:-1:-1;;;;;18308:37:117;;;18514:11;18543:5;18287:103;:275::i;:300::-;18247:37;:340;;-1:-1:-1;;;;;18247:340:117;;;-1:-1:-1;;;18247:340:117;;;;;;;;;18730:23;:11;:21;:23::i;:::-;18697:56;;:18;:56;:::i;:::-;18652:30;:101;;-1:-1:-1;;;;;18652:101:117;;;-1:-1:-1;;;18652:101:117;;;;;;;;;18851:31;:19;:29;:31::i;:::-;18821:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;18821:61:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18821:61:117;;;;;-1:-1:-1;;;;;18821:61:117;;;;;;18924:32;:21;:30;:32::i;:::-;18892:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;;-1:-1:-1;;;;;18892:64:117;;;;;;18995:30;:18;:28;:30::i;:::-;18966:12;:59;;:25;;:59;;;;-1:-1:-1;;;18966:59:117;;-1:-1:-1;;;;;18966:59:117;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;18966:59:117;;;;;-1:-1:-1;;;;;18966:59:117;;;;;;18117:915;17905:1127;;;;;:::o;14667:1674:123:-;14928:21;;15394:119;15496:16;15394:80;:11;15430:21;15453:20;15394:35;:80::i;:::-;:101;;:119::i;:::-;15373:140;-1:-1:-1;15764:50:123;:11;15787:8;15797:16;15764:22;:50::i;:::-;15750:64;;;;:::i;:::-;;;16130:12;16117:10;:25;16113:191;;;16267:12;16254:10;:25;16238:41;;16113:191;16314:20;14667:1674;;;;;;;;:::o;527:190:125:-;580:9;-1:-1:-1;;;607:1:125;:12;601:86;;643:33;;-1:-1:-1;;;643:33:125;;;;;;;;;;;14268:3167:115;14652:12;:26;-1:-1:-1;;;;;14652:26:115;14705:35;;;;:110;;-1:-1:-1;14794:21:115;14756:35;14772:19;14756:13;:35;:::i;:::-;:59;14705:110;14688:289;;;14840:126;14896:56;14840:38;:126::i;:::-;15539:28;;15010:36;;;;;15539:28;;15577:40;15596:21;15539:28;15577:40;:::i;:::-;;;15677:21;15644:30;:19;:28;:30::i;:::-;:54;:230;;;;;15853:21;15714:124;15778:13;15809:15;15714:46;:124::i;:::-;:160;15644:230;15627:464;;;15899:181;15955:111;15899:38;:181::i;:::-;16178:29;;-1:-1:-1;;;16178:29:115;;-1:-1:-1;;;;;16178:29:115;16256:297;:272;16178:29;16410:19;193:4:122;16410:13:115;:19;:::i;:::-;16277:36;;-1:-1:-1;;;;;16277:36:115;;16256:272;16480:11;16509:5;16256:102;:272::i;:297::-;16217:36;:336;;-1:-1:-1;;;;;;16217:336:115;-1:-1:-1;;;;;16217:336:115;;;;;;;;;;16615:31;16635:11;16615:31;;:::i;:::-;;;16688:28;:16;:26;:28::i;:::-;16656:29;:60;;-1:-1:-1;;;;;16656:60:115;;;-1:-1:-1;;;16656:60:115;;;;;;;;;17267:25;:13;:23;:25::i;:::-;17238:12;:54;;-1:-1:-1;;;;;;17238:54:115;-1:-1:-1;;;;;17238:54:115;;;;;;;;;;17333:26;:15;:24;:26::i;:::-;17302:28;:57;;-1:-1:-1;;;;;;17302:57:115;-1:-1:-1;;;;;17302:57:115;;;;;;;;;;17398:30;:18;:28;:30::i;:::-;17369:12;:59;;:25;;:59;;;;-1:-1:-1;;;17369:59:115;;-1:-1:-1;;;;;17369:59:115;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;17369:59:115;;;;;-1:-1:-1;;;;;17369:59:115;;;;;;14479:2956;;;14268:3167;;;;;:::o;18678:551:112:-;18982:12;18997:43;19014:14;:7;18982:12;19014:11;:14::i;:::-;18998:13;:6;19009:1;18998:10;:13::i;:::-;:30;;;;:::i;:::-;18997:41;:43::i;:::-;18982:58;;19062:1;19054:5;:9;;;19050:173;;;19079:25;:43;;19116:5;;19079:25;;;:43;;19116:5;;-1:-1:-1;;;;;19079:43:112;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;19079:43:112;;;;;-1:-1:-1;;;;;19079:43:112;;;;;;18747:482;18678:551;;:::o;19050:173::-;19151:1;19143:5;:9;;;19139:84;;;19205:6;19206:5;19205:6;:::i;:::-;19168:25;:44;;:25;;:44;;;;-1:-1:-1;;;;;19168:44:112;;:::i;19139:84::-;18747:482;18678:551;;:::o;21421:1762:114:-;21735:13;:29;-1:-1:-1;;;21514:4:114;21662:70;;;:12;:70;;;;21514:4;;;;21662:102;;-1:-1:-1;;;;;21735:29:114;;21662:102;:::i;:::-;21624:140;;21778:27;21809:1;21778:32;21774:74;;-1:-1:-1;21833:4:114;;21421:1762;-1:-1:-1;;21421:1762:114:o;21774:74::-;21934:12;21949:45;21977:16;21949:27;:45::i;:::-;21934:60;;22008:4;22016:1;22008:9;22004:51;;-1:-1:-1;22040:4:114;;21421:1762;-1:-1:-1;;;21421:1762:114:o;22004:51::-;22235:47;22296:12;22321:149;22373:4;22395:27;22440:16;22321:34;:149::i;:::-;22221:249;;;;22485:7;22480:51;;-1:-1:-1;22515:5:114;;21421:1762;-1:-1:-1;;;;;21421:1762:114:o;22480:51::-;22656:32;22690:21;22715:57;22765:6;22715:49;:57::i;:::-;22655:117;;;;22859:47;22881:24;:13;:22;:24::i;:::-;22880:25;;;:::i;:::-;22859:20;:47::i;:::-;22849:57;;22921:7;22916:51;;-1:-1:-1;22951:5:114;;21421:1762;-1:-1:-1;;;;;;;21421:1762:114:o;22916:51::-;23057:36;:24;:34;:36::i;:::-;23024:13;:69;;:29;;:69;;;;-1:-1:-1;;;;;23024:69:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23024:69:114;;;;;-1:-1:-1;;;;;23024:69:114;;;;;;23129:25;:13;:23;:25::i;:::-;23103:13;:51;;:22;;:51;;;;-1:-1:-1;;;23103:51:114;;-1:-1:-1;;;;;23103:51:114;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;23103:51:114;;;;;-1:-1:-1;;;;;23103:51:114;;;;;;23172:4;23165:11;;;;;;;;21421:1762;;;:::o;25409:1358:112:-;25508:7;25517:4;25660:26;25688:12;25704:117;25767:40;25790:16;25767:22;:40::i;:::-;25704:45;:117::i;:::-;25659:162;;;;25836:7;25831:56;;-1:-1:-1;25867:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;25409:1358:112:o;25831:56::-;26045:20;26087:1;26068:16;:20;:95;;26162:1;26068:95;;;26103:44;:18;26130:16;26103:26;:44::i;:::-;26309:13;:29;26246:12;:48;;;;26173:21;26197:34;;;;;26045:118;;-1:-1:-1;26173:21:112;-1:-1:-1;;;;;26309:29:112;;;;26197:97;;26246:48;26197:97;:::i;:::-;:141;;;;:::i;:::-;26173:165;;26475:13;26492:1;26475:18;26471:66;;-1:-1:-1;26517:1:112;;;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;25409:1358:112:o;26471:66::-;26664:20;26687:35;:12;26708:13;26687:20;:35::i;:::-;26664:58;26755:4;;-1:-1:-1;25409:1358:112;-1:-1:-1;;;;;;;25409:1358:112:o;11965:253::-;12125:12;:26;12169:28;;12023:7;;12061:150;;-1:-1:-1;;;;;12125:26:112;;;;12169:28;;12061:46;:150::i;23940:866:123:-;24201:7;24317:482;24384:23;24425:13;24456:9;24692:18;24698:12;193:4:122;24692:18:123;:::i;:::-;24728:16;24762:23;24317:49;:482::i;:::-;24298:501;23940:866;-1:-1:-1;;;;;;;23940:866:123:o;3190:114:122:-;3250:7;3277:19;3286:1;3289;193:4;3277:8;:19::i;317:182:121:-;485:6;451:41;;-1:-1:-1;;;451:41:121;;;;;;;;:::i;:::-;;;;;;;;3330:531:123;3530:17;3736:118;3841:12;3736:87;:23;3784;3809:13;3736:47;:87::i;:::-;:104;;:118::i;:::-;3724:130;3330:531;-1:-1:-1;;;;;3330:531:123:o;29755:2727:112:-;29988:16;;;;30875:144;30976:24;31002:16;30875:78;30941:11;30875:46;30904:16;30910:10;193:4:122;30904:16:112;:::i;:::-;30875:9;;:28;:46::i;:78::-;:100;:144;:100;:144::i;:::-;30864:155;-1:-1:-1;31307:34:112;30864:155;31324:16;31307;:34::i;:::-;31286:55;-1:-1:-1;31849:12:112;31864:104;31898:30;31904:24;193:4:122;31898:30:112;:::i;:::-;31864:11;;31942:16;31864:20;:104::i;:::-;31849:119;-1:-1:-1;31988:20:112;31849:119;31999:8;31988:10;:20::i;:::-;31978:30;-1:-1:-1;32442:33:112;31978:30;32458:16;32442:15;:33::i;:::-;32409:66;;:18;:66;:::i;:::-;32376:99;;30128:2354;29755:2727;;;;;;;;;:::o;15264:104:122:-;15322:7;15352:1;15348;:5;:13;;15360:1;15348:13;;;-1:-1:-1;15356:1:122;;15264:104;-1:-1:-1;15264:104:122:o;11517:1660:123:-;11776:21;;12239:115;12337:16;12239:78;:11;12273:21;12296:20;12239:33;:78::i;:::-;:97;;:115::i;:::-;12218:136;-1:-1:-1;12602:48:123;:11;12623:8;12633:16;12602:20;:48::i;1884:164:122:-;1946:7;1973:21;1984:1;193:4;1992:1;1973:10;:21::i;2054:1483:135:-;2176:7;;;-1:-1:-1;;2289:10:135;-1:-1:-1;;;;;2281:26:135;;2277:162;;-1:-1:-1;2332:21:135;2277:162;;;2393:35;;-1:-1:-1;;;2393:35:135;;2422:4;2393:35;;;5031:51:234;2393:10:135;-1:-1:-1;;;;;2393:20:135;;;;5004:18:234;;2393:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2384:44;;2277:162;2595:4;2580:12;-1:-1:-1;;2645:10:135;-1:-1:-1;;;;;2637:26:135;;2633:365;;2695:11;2683:9;:23;2679:97;;;2733:28;;-1:-1:-1;;;2733:28:135;;;;;;;;;;;2679:97;2798:23;2810:11;2798:9;:23;:::i;:::-;2789:32;;2633:365;;;2862:125;;-1:-1:-1;;;2862:125:135;;2903:10;2862:125;;;6834:34:234;2939:4:135;6884:18:234;;;6877:43;6936:18;;;6929:34;;;2862:10:135;-1:-1:-1;;;;;2862:23:135;;;;6769:18:234;;2862:125:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2852:135;;2633:365;3012:7;3007:74;;3042:28;;-1:-1:-1;;;3042:28:135;;;;;;;;;;;3007:74;3216:11;;3231:1;3216:16;3212:319;;3262:44;:11;3282:23;3262:19;:44::i;:::-;3248:11;:58;;;;-1:-1:-1;3341:6:135;-1:-1:-1;3320:28:135;;-1:-1:-1;;3320:28:135;3212:319;3422:11;;3379:17;;3399:43;;:11;;3435:6;3399:22;:43::i;:::-;3379:63;;3471:9;3456:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;3502:9:135;;-1:-1:-1;3513:6:135;;-1:-1:-1;3494:26:135;;-1:-1:-1;;;3494:26:135;2054:1483;;;;;;;:::o;3655:1226::-;3834:18;3855:28;3870:12;3855:14;:28::i;:::-;3834:49;;4019:11;;4034:1;4019:16;4015:221;;4065:43;:10;4084:23;4065:18;:43::i;:::-;4051:11;:57;4015:221;;;4139:17;4159:28;4176:10;4159:16;:28::i;:::-;4139:48;;4216:9;4201:11;;:24;;;;;;;:::i;:::-;;;;-1:-1:-1;;;4015:221:135;4392:4;4377:12;-1:-1:-1;;4442:10:135;-1:-1:-1;;;;;4434:26:135;;4430:362;;4492:10;4480:9;:22;4476:96;;;4529:28;;-1:-1:-1;;;4529:28:135;;;;;;;;;;;4476:96;4594:22;4606:10;4594:9;:22;:::i;:::-;4585:31;;4430:362;;;4657:124;;-1:-1:-1;;;4657:124:135;;4698:10;4657:124;;;6834:34:234;4734:4:135;6884:18:234;;;6877:43;6936:18;;;6929:34;;;4657:10:135;-1:-1:-1;;;;;4657:23:135;;;;6769:18:234;;4657:124:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4647:134;;4430:362;4806:7;4801:74;;4836:28;;-1:-1:-1;;;4836:28:135;;;;;;;;;;;4801:74;3771:1110;;;3655:1226;;;:::o;6050:574:123:-;6185:30;6227:12;6285:103;6334:14;6362:16;6285:35;:103::i;:::-;6249:139;;-1:-1:-1;6249:139:123;-1:-1:-1;6249:139:123;6398:220;;6426:181;6482:111;6426:38;:181::i;:::-;6217:407;6050:574;;;;:::o;12712:2102:122:-;12906:15;13006:12;13022:1;13006:17;13002:63;;-1:-1:-1;13046:8:122;13039:15;;13002:63;13323:9;13319:1489;;;13420:154;13529:27;13544:12;13529;:27;:::i;:::-;13470:28;:12;13491:6;13470:20;:28::i;:::-;13421:30;:12;13442:8;13421:20;:30::i;:::-;:77;;;;:::i;13420:154::-;13410:164;-1:-1:-1;13921:18:122;13942:20;:6;13953:8;13942:10;:20::i;:::-;13921:41;-1:-1:-1;13976:18:122;13997:20;:6;14008:8;13997:10;:20::i;:::-;13976:41;;14045:10;14035:7;:20;14031:164;;;14085:10;14075:20;;14031:164;;;14130:10;14120:7;:20;14116:79;;;14170:10;14160:20;;14116:79;13334:871;;13319:1489;;;14504:12;14488;:28;14484:75;;-1:-1:-1;14543:1:122;14536:8;;14484:75;14645:152;14752:27;14767:12;14752;:27;:::i;:::-;14695:26;:12;14714:6;14695:18;:26::i;:::-;14646:30;:12;14667:8;14646:20;:30::i;:::-;:75;;;;:::i;14645:152::-;14635:162;12712:2102;-1:-1:-1;;;;;;12712:2102:122:o;12556:675:112:-;12641:6;13046:178;:12;:167;13076:123;13119:27;13168:13;13076:21;:123::i;:::-;13046:167;;;;;;;;;;;;:176;:178::i;:::-;12912:119;:12;:108;12942:64;12964:26;12992:13;12942:21;:64::i;12912:119::-;:312;;;;:::i;18131:376::-;18200:4;18455:45;:21;18483:16;18455:27;:45::i;:::-;18411:25;;:89;;;-1:-1:-1;;;;;18411:25:112;:89;:::i;:::-;18342:12;:26;18334:61;;-1:-1:-1;;;;;18342:26:112;18378:16;18334:43;:61::i;:::-;:166;;;18131:376;-1:-1:-1;;18131:376:112:o;898:556:122:-;1014:9;1279:1;-1:-1:-1;;1262:19:122;1259:1;1256:26;1253:1;1249:34;1242:42;1229:11;1225:60;1198:146;;1328:1;1325;1318:12;1198:146;-1:-1:-1;1415:9:122;;1411:27;;898:556::o;3462:114::-;3522:7;3549:19;3558:1;193:4;3566:1;3549:8;:19::i;1240:212:125:-;1292:8;-1:-1:-1;;;;;1318:30:125;;;1312:103;;1372:32;;-1:-1:-1;;;1372:32:125;;;;;;;;;;;1616:219;1667:8;-1:-1:-1;;;;;;1693:21:125;;;;;:46;;-1:-1:-1;;;;;;1718:21:125;;;1693:46;1687:119;;1763:32;;-1:-1:-1;;;1763:32:125;;;;;;;;;;;15815:101:122;15871:6;15900:1;15896;:5;:13;;15908:1;15896:13;;24513:558:112;24734:25;;24613:18;;;;24726:80;;-1:-1:-1;;;;;24734:25:112;24780:16;24726:40;:80::i;:::-;24703:103;-1:-1:-1;24849:36:112;24864:21;24703:103;24849:36;:::i;:::-;24820:12;:26;-1:-1:-1;;;;;24820:26:112;:65;24816:222;;;24930:12;:26;25006:21;;24930:57;;24975:12;;-1:-1:-1;;;;;24930:26:112;:57;:::i;:::-;:97;;;;:::i;24816:222::-;25047:17;24513:558;;;:::o;13522:1887::-;13722:47;;:::i;:::-;13771:12;13954:63;14020:70;14060:16;14020:22;:70::i;:::-;13954:136;;14100:28;14172:74;14218:18;14172:32;:74::i;:::-;14138:108;-1:-1:-1;14138:108:112;-1:-1:-1;14138:108:112;14256:61;;-1:-1:-1;14300:5:112;;-1:-1:-1;14284:22:112;;-1:-1:-1;14284:22:112;14256:61;14464:20;14638:152;:124;14717:18;:44;;;14638:18;:53;;;:78;;:124;;;;:::i;:::-;:150;:152::i;:::-;14487:136;:112;14555:18;:43;;;14487:18;:48;;;:67;;:112;;;;:::i;:136::-;:303;;;;:::i;:::-;14809:569;;;;;;;;;;;;;;;;;;;-1:-1:-1;14986:34:112;;:12;:34;;;;14809:569;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15195:32:112;;14809:569;;;;15266:34;;;14809:569;;;;15336:31;;;;14809:569;;;;-1:-1:-1;14809:569:112;;15398:4;;-1:-1:-1;13522:1887:112;-1:-1:-1;13522:1887:112:o;21373:3408:124:-;21492:7;21501;21807:38;21847:12;21863:173;21944:7;:29;;;21991:7;:31;;;21863:63;:173::i;:::-;21806:230;;;;22051:7;22046:52;;-1:-1:-1;22082:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;21373:3408:124:o;22046:52::-;22107:29;22181:109;22229:7;22250:30;22181:34;:109::i;:::-;22146:144;-1:-1:-1;22146:144:124;-1:-1:-1;22304:8:124;;;:38;;-1:-1:-1;22316:26:124;;22304:38;22300:82;;;-1:-1:-1;22366:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;21373:3408:124:o;22300:82::-;22670:32;22705:131;22776:7;22801:21;22705:53;:131::i;:::-;22670:166;;22973:24;23001:1;22973:29;22969:743;;-1:-1:-1;23026:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;21373:3408:124:o;22969:743::-;23307:7;:35;;;23279:24;:63;23262:450;;23375:24;23401:21;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;21373:3408:124:o;23262:450::-;-1:-1:-1;23666:35:124;;;;23971:21;23995:152;24051:7;24072:30;24116:21;23995:42;:152::i;:::-;23971:176;;24161:13;24178:1;24161:18;24157:62;;-1:-1:-1;24203:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;;21373:3408:124:o;24157:62::-;24553:21;24536:13;:38;24532:82;;-1:-1:-1;24598:1:124;;;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;;21373:3408:124:o;24532:82::-;24734:24;;24760:13;;-1:-1:-1;21373:3408:124;-1:-1:-1;;;;;21373:3408:124:o;23871:1355:114:-;24087:12;:26;24149:28;;23961:4;;-1:-1:-1;;;;;24087:26:114;;;;24149:28;;;-1:-1:-1;;;24211:25:114;;;23961:4;;;;24411:222;24087:26;24149:28;24211:25;24561:21;24600:19;24411:35;:222::i;:::-;24246:387;;;;;;;;24648:7;24643:51;;-1:-1:-1;24678:5:114;;23871:1355;-1:-1:-1;;;;;;;;23871:1355:114:o;24643:51::-;24816:14;24792:20;:38;24788:130;;24875:32;:20;:30;:32::i;:::-;24846:12;:61;;-1:-1:-1;;;;;;24846:61:114;-1:-1:-1;;;;;24846:61:114;;;;;;;;;;24788:130;24957:16;24931:22;:42;24927:137;;25020:33;:22;:31;:33::i;:::-;24989:28;:64;;-1:-1:-1;;;;;;24989:64:114;-1:-1:-1;;;;;24989:64:114;;;;;;;;;;24927:137;25100:13;25077:19;:36;25073:126;;25157:31;:19;:29;:31::i;:::-;25129:12;:59;;-1:-1:-1;;;;;25129:59:114;;;-1:-1:-1;;;25129:59:114;;;;;;;;;25073:126;-1:-1:-1;25215:4:114;;23871:1355;-1:-1:-1;;;;;;;;23871:1355:114:o;15602:1035:112:-;15697:39;;:::i;:::-;15757:873;;;;;;;;15812:12;:26;-1:-1:-1;;;;;15812:26:112;;;15757:873;;15869:28;;;;15757:873;;;;-1:-1:-1;;;15925:25:112;;;;;;15757:873;;;;;;;;;;;;;16035:23;15757:873;;;;16094:21;15757:873;;;;16155:25;15757:873;;;;16207:12;15757:873;;;;15869:28;16251:29;;;;15812:26;15757:873;;;16367:36;;15757:873;;;;;;16320:97;;16367:36;16320:29;:97::i;:::-;15757:873;;16450:30;;-1:-1:-1;;;;;;;;16450:30:112;;;;;;15757:873;;;;16568:37;;15757:873;;;;;16521:98;;16568:37;;;16521:29;:98::i;:::-;15757:873;;15748:882;15602:1035;-1:-1:-1;;15602:1035:112:o;7264:1173:124:-;7371:7;7380:4;7757:19;7801:20;7823:12;7839:65;7883:7;7839:26;:65::i;:::-;7800:104;;;;7923:7;7918:64;;-1:-1:-1;7958:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;;;7264:1173:124:o;7918:64::-;8158:39;:7;:28;;;:37;:39::i;:::-;8109:30;8131:7;8109:21;:30::i;:::-;8077:13;8026:32;:7;:21;;;:30;:32::i;:::-;:64;;;;:::i;:::-;:113;;;;:::i;:::-;:171;;;;:::i;:::-;7995:202;;7786:422;;8339:1;8324:12;:16;8320:64;;;-1:-1:-1;8364:1:124;;;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;8320:64::-;8410:12;8425:4;;-1:-1:-1;7264:1173:124;-1:-1:-1;;7264:1173:124:o;10452:583:126:-;10642:14;10668:12;10710:141;10762:2;10778:1;10793:2;10809:1;10824;10839:2;10710:38;:141::i;:::-;10690:161;;-1:-1:-1;10690:161:126;-1:-1:-1;10690:161:126;10861:168;;10889:129;10945:59;10889:38;:129::i;2284:748:122:-;2398:9;2663:1;-1:-1:-1;;2646:19:122;2643:1;2640:26;2637:1;2633:34;2626:42;2613:11;2609:60;2582:146;;2712:1;2709;2702:12;2582:146;-1:-1:-1;2979:9:122;;2926:27;;;2923:34;;2975:27;;;2902:114;;2284:748::o;3811:844::-;3869:7;3935:1;3940;3935:6;3931:47;;-1:-1:-1;193:4:122;3957:10;;3931:47;4031:1;4036;4031:6;4027:45;;-1:-1:-1;4060:1:122;4053:8;;4027:45;4210:15;4228:12;:1;:10;:12::i;:::-;4210:30;;4402:10;4415:16;4418:12;:1;:10;:12::i;:::-;4415:2;:16::i;:::-;4402:29;-1:-1:-1;4509:18:122;;;4546:19;193:4;4509:18;4546:19;:::i;:::-;;;4638:9;4642:4;4638:3;:9::i;8468:425:135:-;8561:7;;-1:-1:-1;;8676:10:135;-1:-1:-1;;;;;8668:26:135;;8664:162;;-1:-1:-1;8719:21:135;8664:162;;;8780:35;;-1:-1:-1;;;8780:35:135;;8809:4;8780:35;;;5031:51:234;8780:10:135;-1:-1:-1;;;;;8780:20:135;;;;5004:18:234;;8780:35:135;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8771:44;;8664:162;8866:11;;8843:43;;:11;;8879:6;8843:22;:43::i;7273:398:123:-;7412:7;7421:4;7437:29;7509:16;7469:25;:14;:23;:25::i;:::-;:56;;;;:::i;:::-;7437:88;;7564:1;7539:22;:26;7535:74;;;7589:1;7592:5;7581:17;;;;;;;7535:74;7634:22;7659:4;;-1:-1:-1;7273:398:123;-1:-1:-1;;;7273:398:123:o;14987:104:122:-;15045:7;15075:1;15071;:5;:13;;15083:1;15071:13;;45699:3239:124;45872:29;45903:12;46092:1;46067:7;:21;;;:26;46063:84;;-1:-1:-1;;46117:12:124;;;;46131:4;46109:27;;46063:84;46156:21;46189:7;:21;;;46188:22;;;:::i;:::-;46156:55;;46460:21;46518:316;46574:31;46619:7;:28;;;46667:7;:26;;;:38;;;193:4:122;46661:44:124;;;;:::i;:::-;46719:26;;:42;;;;46775:49;;;;;46518:42;:316::i;:::-;46491:343;-1:-1:-1;46491:343:124;-1:-1:-1;46848:8:124;;;:30;;-1:-1:-1;46860:18:124;;46848:30;46844:78;;;46902:1;46905:5;46894:17;;;;;;;;46844:78;47945:24;47972:34;:13;47992;47972:19;:34::i;:::-;47945:61;;193:4:122;48189:16:124;:23;48185:453;;48286:16;193:4:122;48280:22:124;48256:46;;48354:90;48401:7;:29;;;48354:21;:29;;:90;;;;:::i;:::-;48330:114;;48185:453;;;48618:1;48621:5;48610:17;;;;;;;;;48185:453;48820:7;:12;;;48796:21;:36;48792:94;;;48856:7;:12;;;48870:4;48848:27;;;;;;;;;48792:94;-1:-1:-1;48926:4:124;;-1:-1:-1;;;45699:3239:124;;;;;:::o;25642:2209::-;25822:7;25921:12;26140:274;26182:7;:29;;;26225:7;:31;;;26270:7;:28;;;26312:7;:26;;;:47;;;26374:30;:19;:28;:30::i;:::-;26373:31;;;:::i;:::-;26140:28;:274::i;:::-;25957:26;;26067:39;;;25943:471;;;;26011:42;;;25943:471;;;;;;;;;-1:-1:-1;25943:471:124;26424:167;;26579:1;26572:8;;;;;26424:167;26600:26;26668:75;26707:7;:26;;;26668:25;:75::i;:::-;26636:107;-1:-1:-1;26636:107:124;-1:-1:-1;26636:107:124;26753:167;;26908:1;26901:8;;;;;;26753:167;27254:7;:28;;;27232:18;:50;27228:89;;27305:1;27298:8;;;;;;27228:89;27566:21;27632:7;:35;;;27590:7;:27;;;:77;;;;:::i;:::-;27566:101;;27724:120;27766:18;27802:7;:28;;;27724:13;:24;;:120;;;;;:::i;:::-;27696:148;;:13;:148;:::i;28733:10660::-;28954:7;29015:21;29081:7;:35;;;29039:7;:27;;;:77;;;;:::i;:::-;29674:28;;;;29614:35;;;;29015:101;;-1:-1:-1;29590:21:124;;29614:125;;29015:101;29614:46;:125::i;:::-;29590:149;;29852:7;:21;;;29877:1;29852:26;29848:77;;29901:13;-1:-1:-1;29894:20:124;;-1:-1:-1;29894:20:124;29848:77;30288:9;30283:9073;871:1;30303;:33;30283:9073;;;30511:41;:13;30529:22;30511:17;:41::i;:::-;30495:57;;30636:12;30879:292;30925:7;:29;;;30972:7;:31;;;31021:7;:28;;;31067:7;:26;;;:47;;;31133:24;:13;:22;:24::i;30879:292::-;30680:26;;30798:39;;;30662:509;;;;30738:42;;;30662:509;;;;;;;;;-1:-1:-1;30662:509:124;31185:268;;31437:1;31430:8;;;;;;;;31185:268;31513:20;31573:83;31616:7;:26;;;31573:25;:83::i;:::-;31547:109;-1:-1:-1;31547:109:124;-1:-1:-1;31547:109:124;31670:265;;31919:1;31912:8;;;;;;;;;31670:265;32039:167;32112:7;32141:12;32175:13;32039:51;:167::i;:::-;32018:241;;;32239:5;;;;32018:241;32509:1;32485:7;:21;;;:25;32481:4509;;;32898:25;;:39;;32963:41;;;;33030:38;;;;33094:46;;;;33172:37;;;;;32694:7;;32651:40;;32809:563;;32898:39;;32963:41;;33030:38;;33094:46;33166:43;;193:4:122;33166:43:124;:::i;:::-;33235:25;;:41;;;;33302:48;;;;;32809:63;:563::i;:::-;32782:590;-1:-1:-1;32782:590:124;-1:-1:-1;32782:590:124;33390:289;;33659:1;33652:8;;;;;;;;;;;33390:289;33890:13;33865:6;:20;;;33857:46;33853:3123;;34171:115;34258:6;34171:61;:115::i;:::-;34074:212;;-1:-1:-1;34074:212:124;-1:-1:-1;34074:212:124;34308:200;;34484:1;34477:8;;;;;;;;;;;34308:200;34920:336;34974:6;:28;;;35028:6;:30;;;35084:6;:27;;;35137:6;:25;;;:46;;;35210:24;:13;:22;:24::i;34920:336::-;34692:25;;34824:38;;;34666:590;;;;34757:41;;;34666:590;;;;;;;;;-1:-1:-1;34666:590:124;35278:200;;35454:1;35447:8;;;;;;;;;;;35278:200;35623:25;;:39;;35692:41;;;;35763:38;;;;35831:46;;;;;35913:26;;:38;;;35526:600;;35763:38;35831:46;35907:44;;193:4:122;35907:44:124;:::i;35526:600::-;35499:627;-1:-1:-1;35499:627:124;-1:-1:-1;35499:627:124;36148:200;;36324:1;36317:8;;;;;;;;;;;36148:200;36671:7;:21;;;36646:13;:47;36642:316;;36728:13;36721:20;;;;;;;;;;;36642:316;36927:8;;;;30283:9073;;36642:316;32512:4478;;32481:4509;37266:18;37368:176;37435:7;37460:31;37509:7;:21;;;37368:49;:176::i;:::-;37298:246;-1:-1:-1;37298:246:124;-1:-1:-1;37562:8:124;;;:29;;;193:4:122;37574:10:124;:17;;37562:29;37558:189;;;37731:1;37724:8;;;;;;;;;;37558:189;37807:10;193:4:122;37801:16:124;37788:29;;38119:12;38199:137;:105;38276:7;:27;;;38199:7;:49;;;:76;;:105;;;;:::i;:137::-;38134:46;:35;:12;38155:13;38134:20;:35::i;:46::-;:202;;;;:::i;:::-;38119:217;;38362:1;38354:5;:9;38350:893;;;38527:57;38570:13;38527:34;38535:5;38550:10;38527:22;:34::i;:57::-;38491:93;;:13;:93;:::i;:::-;38455:129;;38350:893;;;38617:1;38609:5;:9;38605:638;;;38710:14;38727:96;38792:13;38727:35;38751:10;38727:35;38736:5;38735:6;:::i;38727:96::-;38710:113;;38854:13;38845:6;:22;38841:344;;;38959:6;38943:13;:22;38927:38;;38841:344;;;39165:1;39158:8;;;;;;;;;;;;38841:344;38620:579;38605:638;;;39223:5;;;;;;38605:638;39328:3;;;;;30340:9016;;;;30283:9073;;;-1:-1:-1;39373:13:124;28733:10660;-1:-1:-1;;;;;28733:10660:124:o;1846:3557::-;2121:21;2156:22;2192:20;2226:4;2365:19;2388:1;2365:24;2361:117;;-1:-1:-1;2413:14:124;;-1:-1:-1;2429:16:124;;-1:-1:-1;2447:13:124;;-1:-1:-1;2462:4:124;2405:62;;2361:117;2647:21;2699:19;2671:25;:14;:23;:25::i;:::-;:47;;;;:::i;:::-;2647:71;;2749:32;:21;:30;:32::i;:::-;2732:14;:49;2728:103;;;2805:1;2808;2811;2814:5;2797:23;;;;;;;;;;;2728:103;2864:14;2840:39;;3454:1;3434:16;:21;3430:497;;3567:112;:84;:13;3617:16;3636:14;3567:41;:84::i;:112::-;3549:130;;3430:497;;;3805:111;:83;3853:17;3854:16;3853:17;:::i;:::-;3805:13;;3873:14;3805:39;:83::i;:111::-;3804:112;;;:::i;:::-;3786:130;;3430:497;4629:33;4664:12;4680:143;4761:14;4793:16;4680:63;:143::i;:::-;4628:195;;;;4838:7;4833:62;;4869:1;4872;4875;4878:5;4861:23;;;;;;;;;;;;;4833:62;4904:30;4980:141;5061:13;5092:15;4980:63;:141::i;:::-;4944:177;-1:-1:-1;4944:177:124;-1:-1:-1;4944:177:124;5131:62;;5167:1;5170;5173;5176:5;5159:23;;;;;;;;;;;;;;5131:62;5217:109;:13;5255:22;5291:25;5217:24;:109::i;:::-;5202:124;-1:-1:-1;5391:4:124;;-1:-1:-1;;;;;1846:3557:124;;;;;;;;;;;:::o;10998:450:112:-;11097:21;11130:24;193:4:122;11157:19:112;:17;:19::i;:::-;:25;;;;:::i;:::-;11130:52;;11224:16;11208:13;:32;:95;;11302:1;11208:95;;;11255:32;11271:16;11255:13;:32;:::i;:::-;11192:111;-1:-1:-1;11395:46:112;11417:23;193:4:122;11417:17:112;:23;:::i;:::-;11395:13;;:21;:46::i;8765:9443:124:-;8873:6;8881:4;9683:23;9838:130;:102;9906:7;:33;;;9838:7;:42;;;:67;;:102;;;;:::i;:130::-;9709:114;:90;9766:7;:32;;;9709:7;:37;;;:56;;:90;;;;:::i;:114::-;:259;;;;:::i;:::-;9683:285;;9979:30;10011:12;10027:157;10108:7;:21;;;10147:7;:23;;;10027:63;:157::i;:::-;9978:206;;;;10199:7;10194:160;;-1:-1:-1;10334:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;10194:160::-;10603:1;10584:16;:20;10580:7595;;;10620:25;10656:16;10620:53;;10861:21;10923:401;11004:7;:21;;;11047:7;:23;;;11092:7;:20;;;11134:7;:28;;;11190:7;:19;;;193:4:122;11184:25:124;;;;:::i;:::-;11231:7;:23;;;11276:7;:30;;;10923:59;:401::i;:::-;10896:428;-1:-1:-1;10896:428:124;-1:-1:-1;10896:428:124;11338:176;;-1:-1:-1;11490:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;11338:176::-;11691:17;11674:13;:34;11670:2891;;11982:21;12048:389;12148:22;12196:7;:20;;;12242:17;12291:7;:19;;;193:4:122;12285:25:124;;;;:::i;:::-;12336:7;:23;;;12385:7;:30;;;12048:74;:389::i;:::-;12021:416;-1:-1:-1;12021:416:124;-1:-1:-1;12743:8:124;;:84;;;;;12795:7;:32;;;12775:17;:52;12743:84;12718:335;;;-1:-1:-1;12876:1:124;;12879:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12718:335::-;12986:7;12981:72;;-1:-1:-1;13025:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;12981:72::-;13080:24;:13;:22;:24::i;:::-;13079:25;;;:::i;:::-;13071:40;13106:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;;8765:9443:124:o;11670:2891::-;13796:1;13769:7;:23;;;:28;13765:782;;13855:95;13881:7;:28;;;13856:22;:53;;;;:::i;13855:95::-;13854:96;;;:::i;13765:782::-;14407:28;;;;14383:21;;14382:94;;14383:52;;;:::i;10580:7595::-;14686:1;14667:16;:20;14663:3512;;;14703:25;14739:17;14740:16;14739:17;:::i;:::-;14703:54;;14874:21;14936:307;15017:22;15061:7;:20;;;15109:7;:19;;;193:4:122;15103:25:124;;;;:::i;:::-;15150:7;:23;;;15195:7;:30;;;14936:59;:307::i;:::-;14909:334;-1:-1:-1;14909:334:124;-1:-1:-1;14909:334:124;15257:64;;-1:-1:-1;15297:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;8765:9443:124:o;15257:64::-;15498:17;15481:13;:34;15477:2688;;15790:21;15856:387;15954:22;16002:7;:20;;;16048:17;16097:7;:19;;;193:4:122;16091:25:124;;;;:::i;:::-;16142:7;:23;;;16191:7;:30;;;15856:72;:387::i;:::-;15829:414;-1:-1:-1;15829:414:124;-1:-1:-1;16549:8:124;;:84;;;;;16601:7;:32;;;16581:17;:52;16549:84;16524:335;;;-1:-1:-1;16682:1:124;;16685:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16524:335::-;16792:7;16787:72;;-1:-1:-1;16831:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;16787:72::-;16885:24;:13;:22;:24::i;15477:2688::-;17243:23;17313:335;17402:22;17450:7;:20;;;17502:7;:19;;;193:4:122;17496:25:124;;;;:::i;:::-;17547:7;:23;;;17596:7;:30;;;17313:63;:335::i;:::-;17284:364;-1:-1:-1;17284:364:124;-1:-1:-1;17284:364:124;17666:72;;-1:-1:-1;17710:1:124;;;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;;;;8765:9443:124:o;17666:72::-;17929:177;17972:122;18045:7;:23;;;17993:13;17973:17;:33;;;;:::i;17972:122::-;17930:164;;:15;:164;:::i;14663:3512::-;-1:-1:-1;18193:1:124;;18196:4;;-1:-1:-1;8765:9443:124;-1:-1:-1;;;;8765:9443:124:o;18455:1167::-;18558:6;19416:199;19434:156;19495:7;:32;;;193:4:122;19489:38:124;;;;:::i;:::-;19549:23;;;;19434:24;;;;;:156;:33;:156::i;19416:199::-;19198:203;19216:160;19280:7;:33;;;193:4:122;19274:39:124;;;;:::i;:::-;19335:23;;;;19216:25;;;;;:160;:36;:160::i;11709:1515:126:-;11903:7;11912:4;12066:9;12078:20;12082:2;12086:1;12089;12092;12095:2;12078:3;:20::i;:::-;12066:32;-1:-1:-1;12141:15:126;12154:1;12142:6;12146:2;12142:1;:6;:::i;12141:15::-;12137:19;;12238:1;12234;:5;12230:53;;;12263:1;12266:5;12255:17;;;;;;;12230:53;12487:5;;;12517:18;12487:5;12529:2;12533:1;12517:11;:18::i;:::-;12512:23;;193:4:122;12549:2:126;:9;12545:263;;12648:20;12655:12;193:4:122;12665:1:126;12655:9;:12::i;:::-;12648:2;;:6;:20::i;:::-;12643:25;;12545:263;;;12775:22;12782:14;193:4:122;12794:1:126;12782:11;:14::i;12775:22::-;12770:27;;12545:263;12890:12;:2;12899;12890:8;:12::i;:::-;12885:17;;13027:2;13022;:7;13018:55;;;13053:1;13056:5;13045:17;;;;;;;;13018:55;13193:7;;;-1:-1:-1;13202:4:126;;-1:-1:-1;;11709:1515:126;;;;;;;;;;:::o;8508:3846:122:-;8553:8;8606:1;8601;:6;8597:80;;8634:28;;-1:-1:-1;;;8634:28:122;;;;;;;;;;;8597:80;-1:-1:-1;;;;;;9286:41:122;-1:-1:-1;9283:1:122;9279:49;9386:9;;;9366:18;9363:33;9360:1;9356:41;9350:48;9448:9;;;9436:10;9433:25;9430:1;9426:33;9420:40;9506:9;;;9498:6;9495:21;9492:1;9488:29;9482:36;9562:9;;;9556:4;9553:19;9550:1;9546:27;;;9540:34;;;9617:9;;;9612:3;9609:18;9606:1;9602:26;9596:33;9672:9;;;9664:18;;;9661:1;9657:26;;;9651:33;;;9720:9;;;9712:18;;;9706:25;9902:3;:7;;;9872:2;9902:7;9888:22;;;;;-1:-1:-1;;9868:6:122;;;9928:30;;9929:17;;;9928:28;:30::i;:::-;10733:31;10729:35;;10784:5;;10191:2;10783:13;;;10800:32;10782:50;10852:5;;10851:13;;10868:33;10850:51;10921:5;;10920:13;;10937:33;10919:51;10990:5;;10989:13;;11006:33;10988:51;11059:5;;11058:13;;11075:32;11057:50;11127:5;;11126:13;;11143:30;11125:48;10130:31;10126:35;;10181:5;;10180:13;;10197:32;10179:50;10249:5;;10248:13;;10265:32;10247:50;10317:5;;10316:13;;-1:-1:-1;;10315:50:122;10385:5;;10384:13;;-1:-1:-1;;10383:50:122;10453:5;;10452:13;;;-1:-1:-1;;10451:50:122;10519:5;;;-1:-1:-1;;10519:46:122;11514:10;11904:43;11899:48;12027:71;:91;;;;12006:112;12191:72;12186:77;12334:3;12328:9;;;-1:-1:-1;;8508:3846:122:o;4907:3302::-;4953:8;-1:-1:-1;;5130:1:122;:26;5126:40;;-1:-1:-1;5165:1:122;;4907:3302;-1:-1:-1;4907:3302:122:o;5126:40::-;5365:21;5360:1;:26;5356:87;;5411:32;;-1:-1:-1;;;5411:32:122;;;;;;;;;;;5356:87;5716:7;5710:2;5705:7;;;5704:19;;-1:-1:-1;6052:8:122;6136:2;6076:29;6065:7;;;6064:41;-1:-1:-1;;;6064:51:122;6063:75;;6164:29;6160:33;;6156:37;;;;-1:-1:-1;;6835:35:122;;6890:5;;6470:2;6889:13;;;6906:32;6888:50;6958:5;;6957:13;;-1:-1:-1;;6956:51:122;7027:5;;7026:13;;7043:34;7025:52;7097:5;;7096:13;;-1:-1:-1;;7095:53:122;7168:5;;7167:13;;7184:35;7166:53;6476:32;6409:31;6405:35;;6460:5;;6459:13;;6458:50;;;6533:5;;;-1:-1:-1;;6533:40:122;6593:5;;6592:13;;;6609:35;6591:53;6662:5;;-1:-1:-1;;;6662:50:122;7584:10;;;;-1:-1:-1;6063:75:122;;-1:-1:-1;6458:50:122;;6662;8063:129;8094:49;8065:78;;8172:3;:7;;;8064:116;8063:127;:129::i;15892:1050:126:-;16055:7;16064:4;16276:9;16288:20;16292:2;16296:1;16299;16302;16305:2;16288:3;:20::i;:::-;16276:32;-1:-1:-1;16318:16:126;16337:28;193:4:122;16345:13:126;:1;16355:2;16345:9;:13::i;:::-;:19;;;;:::i;:::-;16337:1;;:7;:28::i;:::-;16318:47;;193:4:122;16379:8:126;:15;16375:293;;16490:26;16503:12;193:4:122;16513:1:126;16503:9;:12::i;16490:26::-;16479:37;;16375:293;;;16629:28;16642:14;193:4:122;16654:1:126;16642:11;:14::i;16629:28::-;16618:39;;16375:293;16813:8;16809:1;:12;16805:60;;;16845:1;16848:5;16837:17;;;;;;;;16805:60;16906:12;;;-1:-1:-1;16920:4:126;;-1:-1:-1;;15892:1050:126;;;;;;;;;:::o;43668:1269:124:-;44295:28;;;;43872:4;;44295:50;;44330:14;44295:34;:50::i;:::-;44185:27;;;;44163:50;;:13;;:21;:50::i;:::-;:182;;:767;;;;-1:-1:-1;44856:28:124;;;;44791:139;;44902:14;44792:34;1037:3;193:4:122;44792:34:124;:::i;:::-;44791:47;:139;:47;:139::i;:::-;44679:27;;;;44659:48;;:13;;:19;:48::i;:::-;:271;;43888:1042;43668:1269;-1:-1:-1;;;;43668:1269:124:o;17581:2070:126:-;17786:7;17795:4;18092:1;18085:4;:8;18081:67;;;18131:5;18132:4;18131:5;:::i;:::-;18116:21;;:4;:21;:::i;:::-;18109:28;;18081:67;18644:10;18656:12;18672:72;18736:1;18739:4;18672:63;:72::i;:::-;18643:101;;;;18760:7;18755:56;;18791:1;18794:5;18783:17;;;;;;;;18755:56;18820:9;18832:22;18838:2;18842:1;18845;18848;18851:2;18832:5;:22::i;:::-;18820:34;-1:-1:-1;18864:11:126;18878:37;18889:21;18908:1;18889:14;:2;18898:4;18889:8;:14::i;:21::-;18878:1;;18912:2;18878:10;:37::i;:::-;18864:51;;18933:3;18929:1;:7;18925:55;;;18960:1;18963:5;18952:17;;;;;;;;;;18925:55;19050:7;;;193:4:122;19081:15:126;;19077:295;;19195:28;19208:14;193:4:122;19220:1:126;19208:11;:14::i;19195:28::-;19184:39;;19077:295;;;19335:26;19348:12;193:4:122;19358:1:126;19348:9;:12::i;19335:26::-;19324:37;;19077:295;19529:1;19518:8;:12;19514:60;;;19554:1;19557:5;19546:17;;;;;;;;;;;19514:60;19615:12;;;;-1:-1:-1;19629:4:126;;-1:-1:-1;;;;;17581:2070:126;;;;;;;;;;;:::o;41084:1866:124:-;41235:7;41244:4;41526:1;41491:7;:31;;;:36;41487:84;;-1:-1:-1;41551:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;41084:1866:124:o;41487:84::-;41622:19;41644:49;41666:7;:26;;;41644:21;:49::i;:::-;41622:71;;41836:11;41850:167;41901:7;:27;;;41972:7;:35;;;41942:7;:27;;;:65;;;;:::i;:::-;41850:28;;;;;:167;:37;:167::i;:::-;41836:181;;42047:1;42031:12;:17;42027:411;;42092:3;42076:12;42068:27;42064:304;;;42147:28;;;42027:411;;42064:304;-1:-1:-1;42344:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42027:411::-;42413:13;42414:12;42413:13;:::i;:::-;42398:29;;;;:::i;:::-;;;42027:411;42678:31;;;;42601:29;;;;:119;;42653:3;;42601:38;:119::i;:::-;42595:125;;42803:3;42771:7;:29;;;:35;42767:83;;;-1:-1:-1;42830:1:124;;;;-1:-1:-1;41084:1866:124;-1:-1:-1;;;41084:1866:124:o;42767:83::-;42923:3;42891:7;:29;;;:35;42928:4;42883:50;;;;;;41084:1866;;;:::o;51344:5799::-;51560:7;51569:4;51658:20;51707:1;51692:11;:16;51688:670;;51755:26;;:39;;;:78;;51821:11;;51755:78;:::i;:::-;51724:109;;51688:670;;;51864:18;51893:12;51894:11;51893:12;:::i;:::-;51937:26;;:39;;;51864:42;;-1:-1:-1;51924:52:124;;51920:428;;;52067:26;;:39;;;:76;;;;-1:-1:-1;51920:428:124;;;52324:1;52327:5;52316:17;;;;;;;;51920:428;51850:508;51688:670;52747:26;;:40;;52805:42;;;;;52618:30;;;;52666:195;;52747:40;52666:63;:195::i;:::-;52617:244;;;;52876:7;52871:56;;52907:1;52910:5;52899:17;;;;;;;;;52871:56;53419:26;;:38;;;;53350:39;;;;;52936:18;;53237:274;;53289:208;;53350:129;;:39;:43;:129::i;:::-;53289:31;;:39;:208::i;:::-;53237:28;;;;;:34;:274::i;:::-;53173:26;;:38;;;;53019:83;;;;;52957:265;;53019:193;;:132;;53128:22;53019:108;:132::i;:193::-;52957:26;;:42;;;;:48;:265::i;:::-;:554;;;;:::i;:::-;52936:575;;53581:11;53595:185;53645:125;53700:56;53717:7;:26;;;:38;;;53700:12;:16;;:56;;;;:::i;:::-;53645:31;;:37;:125::i;:::-;53595:28;;;;;:36;:185::i;:::-;53581:199;;53807:3;53794:10;:16;53790:64;;;53834:1;53837:5;53826:17;;;;;;;;;;;53790:64;53901:3;53887:17;;;;54144:9;54156:294;54188:22;54224:7;:26;;;:39;;;54283:7;:26;;;:38;;;193:4:122;54277:44:124;;;;:::i;:::-;54335:26;;:42;;;;54391:49;;;;;54156:18;:294::i;:::-;54144:306;;54460:13;54476:84;54512:7;:26;;;:38;;;193:4:122;54506:44:124;;;;:::i;:::-;54476:12;;:16;:84::i;:::-;54460:100;;54578:5;54574:1;:9;54570:201;;;54751:1;54754:5;54743:17;;;;;;;;;;;;;54570:201;54877:26;;:49;;;;54940:42;;;;;54812:9;;;;54849:143;;54812:9;;54849:14;:143::i;:::-;54841:151;;193:4:122;55006:5:124;:12;55002:584;;55217:26;;:38;;;55118:169;;55145:128;;55211:44;;193:4:122;55211:44:124;:::i;:::-;55145:26;;:38;;;;:44;:128::i;55118:169::-;55110:177;;55002:584;;;55505:26;;:38;;;55404:171;;55431:130;;55499:44;;193:4:122;55499:44:124;:::i;:::-;55431:26;;:38;;;;:46;:130::i;55404:171::-;55396:179;;55002:584;55738:26;;:42;;;55686:104;;:10;;55719:5;;55686:19;:104::i;:::-;55673:117;;55850:10;193:4:122;55844:16:124;55840:398;;;55923:10;193:4:122;55917:16:124;55904:29;;55840:398;;;56219:1;56222:4;56211:16;;;;;;;;;;;;;55840:398;56412:1;56377:7;:31;;;:36;56373:728;;56499:29;;;;56443:31;;;;56435:107;;:46;:107::i;:::-;56429:113;;193:4:122;56560:3:124;:10;56556:168;;56700:1;56703:5;56692:17;;;;;;;;;;;;;56556:168;193:4:122;56771:9:124;;;;;56821:23;:10;56771:9;56821:18;:23::i;:::-;56808:36;;56373:728;;;56888:202;56950:126;57025:7;:29;;;56959:7;:31;;;56958:32;;;:::i;56950:126::-;56924:152;;193:4:122;56924:152:124;:::i;:::-;56888:10;;:18;:202::i;:::-;56875:215;;56373:728;-1:-1:-1;57119:10:124;;57131:4;;-1:-1:-1;51344:5799:124;-1:-1:-1;;;;;;;;;51344:5799:124:o;5576:1765:126:-;5768:7;5777:4;5931:9;5943:20;5947:2;5951:1;5954;5957;5960:2;5943:3;:20::i;:::-;5931:32;;6086:2;6082:1;:6;6078:54;;;6112:1;6115:5;6104:17;;;;;;;6078:54;6194:7;;;;;6225:8;6194:7;6231:1;6225:5;:8::i;:::-;6221:12;;6355:1;6351;:5;6347:53;;;6380:1;6383:5;6372:17;;;;;;;6347:53;6604:5;;;6634:18;6604:5;6646:2;6650:1;6634:11;:18::i;:::-;6629:23;;193:4:122;6666:2:126;:9;6662:261;;6764:20;6771:12;193:4:122;6781:1:126;6771:9;:12::i;6764:20::-;6759:25;;6662:261;;;6890:22;6897:14;193:4:122;6909:1:126;6897:11;:14::i;6890:22::-;6885:27;;6662:261;7005:12;:2;7014;7005:8;:12::i;:::-;7000:17;;7142:2;7137;:7;7133:55;;;7168:1;7171:5;7160:17;;;;;;;;7133:55;7310:7;;;;;7319:4;;-1:-1:-1;5576:1765:126;-1:-1:-1;;;;;;;5576:1765:126:o;13859:1409::-;14022:7;14031:4;14543:9;14555:22;14561:2;14565:1;14568;14571;14574:2;14555:5;:22::i;:::-;14543:34;-1:-1:-1;14587:17:126;14607:28;193:4:122;14617:11:126;:1;14625:2;14617:7;:11::i;:::-;:17;;;;:::i;14607:28::-;14587:48;;193:4:122;14649:9:126;:16;14645:300;;14765:29;14779:14;193:4:122;14791:1:126;14779:11;:14::i;14765:29::-;14753:41;;14645:300;;;14907:27;14921:12;193:4:122;14931:1:126;14921:9;:12::i;14907:27::-;14895:39;;14645:300;14966:21;:9;14984:2;14966:17;:21::i;:::-;14954:33;;15143:2;15131:9;:14;15127:62;;;15169:1;15172:5;15161:17;;;;;;;;15127:62;15230:14;;;;;15246:4;;-1:-1:-1;13859:1409:126;-1:-1:-1;;;;;;13859:1409:126:o;20158:343::-;20297:7;20486:8;:1;20492;20486:5;:8::i;:::-;20448:35;20459:19;20476:1;20459:12;:2;20468;20459:8;:12::i;:19::-;20448:1;;20480:2;20448:10;:35::i;:::-;:46;;;;:::i;21014:352::-;21155:7;21351:8;:1;21357;21351:5;:8::i;:::-;21309:39;21322:21;21341:1;21322:14;:2;21333;21322:10;:14::i;:21::-;21309:1;;21345:2;21309:12;:39::i;-1:-1:-1:-;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:592:234:-;128:6;136;144;152;205:3;193:9;184:7;180:23;176:33;173:53;;;222:1;219;212:12;173:53;258:9;245:23;235:33;;315:2;304:9;300:18;287:32;277:42;;366:2;355:9;351:18;338:32;328:42;;421:2;410:9;406:18;393:32;448:18;440:6;437:30;434:50;;;480:1;477;470:12;434:50;503:22;;559:2;541:16;;;537:25;534:45;;;575:1;572;565:12;534:45;14:592;;;;-1:-1:-1;14:592:234;;-1:-1:-1;;14:592:234:o;864:180::-;923:6;976:2;964:9;955:7;951:23;947:32;944:52;;;992:1;989;982:12;944:52;-1:-1:-1;1015:23:234;;864:180;-1:-1:-1;864:180:234:o;1049:127::-;1110:10;1105:3;1101:20;1098:1;1091:31;1141:4;1138:1;1131:15;1165:4;1162:1;1155:15;1181:125;1246:9;;;1267:10;;;1264:36;;;1280:18;;:::i;1311:286::-;1370:6;1423:2;1411:9;1402:7;1398:23;1394:32;1391:52;;;1439:1;1436;1429:12;1391:52;1465:23;;-1:-1:-1;;;;;1517:31:234;;1507:42;;1497:70;;1563:1;1560;1553:12;1602:118;1688:5;1681:13;1674:21;1667:5;1664:32;1654:60;;1710:1;1707;1700:12;1725:241;1781:6;1834:2;1822:9;1813:7;1809:23;1805:32;1802:52;;;1850:1;1847;1840:12;1802:52;1889:9;1876:23;1908:28;1930:5;1908:28;:::i;1971:128::-;2038:9;;;2059:11;;;2056:37;;;2073:18;;:::i;2654:127::-;2715:10;2710:3;2706:20;2703:1;2696:31;2746:4;2743:1;2736:15;2770:4;2767:1;2760:15;2786:112;2818:1;2844;2834:35;;2849:18;;:::i;:::-;-1:-1:-1;2883:9:234;;2786:112::o;2903:193::-;-1:-1:-1;;;;;3021:10:234;;;3033;;;3017:27;;3056:11;;;3053:37;;;3070:18;;:::i;3101:197::-;-1:-1:-1;;;;;3223:10:234;;;3235;;;3219:27;;3258:11;;;3255:37;;;3272:18;;:::i;3303:200::-;3369:9;;;3342:4;3397:9;;3425:10;;3437:12;;;3421:29;3460:12;;;3452:21;;3418:56;3415:82;;;3477:18;;:::i;3976:521::-;4053:4;4059:6;4119:11;4106:25;4213:2;4209:7;4198:8;4182:14;4178:29;4174:43;4154:18;4150:68;4140:96;;4232:1;4229;4222:12;4140:96;4259:33;;4311:20;;;-1:-1:-1;4354:18:234;4343:30;;4340:50;;;4386:1;4383;4376:12;4340:50;4419:4;4407:17;;-1:-1:-1;4450:14:234;4446:27;;;4436:38;;4433:58;;;4487:1;4484;4477:12;4712:168;4785:9;;;4816;;4833:15;;;4827:22;;4813:37;4803:71;;4854:18;;:::i;5093:184::-;5163:6;5216:2;5204:9;5195:7;5191:23;5187:32;5184:52;;;5232:1;5229;5222:12;5184:52;-1:-1:-1;5255:16:234;;5093:184;-1:-1:-1;5093:184:234:o;5282:200::-;-1:-1:-1;;;;;5418:10:234;;;5406;;;5402:27;;5441:12;;;5438:38;;;5456:18;;:::i;5487:245::-;5585:2;5555:17;;;5574;;;;5551:41;-1:-1:-1;;;;;5607:44:234;;-1:-1:-1;;;;;;5653:49:234;;5604:99;5601:125;;;5706:18;;:::i;5737:213::-;5772:3;5820:5;5816:2;5805:21;-1:-1:-1;;;;;5850:39:234;5841:7;5838:52;5835:78;;5893:18;;:::i;:::-;5933:1;5929:15;;5737:213;-1:-1:-1;;5737:213:234:o;6087:136::-;6122:3;-1:-1:-1;;;6143:22:234;;6140:48;;6168:18;;:::i;:::-;-1:-1:-1;6208:1:234;6204:13;;6087:136::o;6228:361::-;6393:2;6378:18;;6426:1;6415:13;;6405:144;;6471:10;6466:3;6462:20;6459:1;6452:31;6506:4;6503:1;6496:15;6534:4;6531:1;6524:15;6405:144;6558:25;;;6228:361;:::o;6974:245::-;7041:6;7094:2;7082:9;7073:7;7069:23;7065:32;7062:52;;;7110:1;7107;7100:12;7062:52;7142:9;7136:16;7161:28;7183:5;7161:28;:::i;7224:216::-;7288:9;;;7316:11;;;7263:3;7346:9;;7374:10;;7370:19;;7399:10;;7391:19;;7367:44;7364:70;;;7414:18;;:::i;:::-;7364:70;;7224:216;;;;:::o;7445:193::-;7484:1;7510;7500:35;;7515:18;;:::i;:::-;-1:-1:-1;;;7551:18:234;;-1:-1:-1;;7571:13:234;;7547:38;7544:64;;;7588:18;;:::i;:::-;-1:-1:-1;7622:10:234;;7445:193::o";
        readonly linkReferences: {};
        readonly immutableReferences: {
            readonly "17691": readonly [{
                readonly start: 980;
                readonly length: 32;
            }, {
                readonly start: 3866;
                readonly length: 32;
            }, {
                readonly start: 3939;
                readonly length: 32;
            }, {
                readonly start: 7144;
                readonly length: 32;
            }, {
                readonly start: 7217;
                readonly length: 32;
            }, {
                readonly start: 7363;
                readonly length: 32;
            }, {
                readonly start: 7492;
                readonly length: 32;
            }, {
                readonly start: 7915;
                readonly length: 32;
            }, {
                readonly start: 8044;
                readonly length: 32;
            }, {
                readonly start: 10364;
                readonly length: 32;
            }, {
                readonly start: 10437;
                readonly length: 32;
            }];
            readonly "17698": readonly [{
                readonly start: 827;
                readonly length: 32;
            }, {
                readonly start: 1172;
                readonly length: 32;
            }, {
                readonly start: 1313;
                readonly length: 32;
            }, {
                readonly start: 1414;
                readonly length: 32;
            }];
            readonly "17701": readonly [{
                readonly start: 377;
                readonly length: 32;
            }, {
                readonly start: 1518;
                readonly length: 32;
            }, {
                readonly start: 12349;
                readonly length: 32;
            }];
            readonly "17704": readonly [{
                readonly start: 2417;
                readonly length: 32;
            }, {
                readonly start: 2586;
                readonly length: 32;
            }, {
                readonly start: 9887;
                readonly length: 32;
            }];
            readonly "17707": readonly [{
                readonly start: 6803;
                readonly length: 32;
            }];
            readonly "17710": readonly [{
                readonly start: 1713;
                readonly length: 32;
            }, {
                readonly start: 2707;
                readonly length: 32;
            }, {
                readonly start: 4575;
                readonly length: 32;
            }, {
                readonly start: 6932;
                readonly length: 32;
            }];
            readonly "17713": readonly [{
                readonly start: 4619;
                readonly length: 32;
            }, {
                readonly start: 6855;
                readonly length: 32;
            }, {
                readonly start: 6976;
                readonly length: 32;
            }];
            readonly "17716": readonly [{
                readonly start: 4325;
                readonly length: 32;
            }];
            readonly "17719": readonly [{
                readonly start: 2451;
                readonly length: 32;
            }, {
                readonly start: 2553;
                readonly length: 32;
            }, {
                readonly start: 7658;
                readonly length: 32;
            }, {
                readonly start: 7805;
                readonly length: 32;
            }, {
                readonly start: 9773;
                readonly length: 32;
            }];
            readonly "17722": readonly [{
                readonly start: 3072;
                readonly length: 32;
            }, {
                readonly start: 5314;
                readonly length: 32;
            }, {
                readonly start: 5415;
                readonly length: 32;
            }, {
                readonly start: 8516;
                readonly length: 32;
            }, {
                readonly start: 8809;
                readonly length: 32;
            }, {
                readonly start: 8869;
                readonly length: 32;
            }, {
                readonly start: 9476;
                readonly length: 32;
            }, {
                readonly start: 9811;
                readonly length: 32;
            }];
            readonly "17725": readonly [{
                readonly start: 236;
                readonly length: 32;
            }, {
                readonly start: 9849;
                readonly length: 32;
            }];
        };
    };
    readonly methodIdentifiers: {
        readonly "checkpoint(uint256)": "ed64bab2";
        readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": "dbbe8070";
    };
    readonly rawMetadata: "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"contract IERC20\",\"name\":\"vaultSharesToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"sweepCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"_config\",\"type\":\"tuple\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"DistributeExcessIdleFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ExpInvalidExponent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"enum IHyperdrive.InsufficientLiquidityReason\",\"name\":\"reason\",\"type\":\"uint8\"}],\"name\":\"InsufficientLiquidity\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidCheckpointTime\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidTimestamp\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LnInvalidInput\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumSharePrice\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MinimumTransactionAmount\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NotPayable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"OutputLimit\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"PoolIsPaused\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"RestrictedZeroAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"TransferFailed\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt128\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToInt256\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint112\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"UnsafeCastToUint128\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"basePayment\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"checkpointVaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newFeeCollector\",\"type\":\"address\"}],\"name\":\"FeeCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseProceeds\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"}],\"name\":\"Sweep\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newSweepCollector\",\"type\":\"address\"}],\"name\":\"SweepCollectorUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"checkpoint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_bondAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxDeposit\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_minVaultSharePrice\",\"type\":\"uint256\"},{\"components\":[{\"internalType\":\"address\",\"name\":\"destination\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"asBase\",\"type\":\"bool\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"internalType\":\"struct IHyperdrive.Options\",\"name\":\"_options\",\"type\":\"tuple\"}],\"name\":\"openShort\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"}],\"devdoc\":{\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"checkpoint(uint256)\":{\"params\":{\"_checkpointTime\":\"The time of the checkpoint to create.\"}},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"params\":{\"_bondAmount\":\"The amount of bonds to short.\",\"_maxDeposit\":\"The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.\",\"_minVaultSharePrice\":\"The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.\",\"_options\":\"The options that configure how the trade is settled.\"},\"returns\":{\"_0\":\"The maturity time of the short.\",\"_1\":\"The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"DistributeExcessIdleFailed()\":[{\"notice\":\"Thrown when the distribute excess idle calculation fails due         to the starting present value calculation failing.\"}],\"ExpInvalidExponent()\":[{\"notice\":\"Thrown when the exponent to `FixedPointMath.exp` would cause the         the result to be larger than the representable scale.\"}],\"InsufficientLiquidity(uint8)\":[{\"notice\":\"Thrown when the pool doesn't have sufficient liquidity to         complete the trade.\"}],\"InvalidCheckpointTime()\":[{\"notice\":\"Thrown when the checkpoint time provided to `checkpoint` is         larger than the current checkpoint or isn't divisible by the         checkpoint duration.\"}],\"InvalidTimestamp()\":[{\"notice\":\"Thrown when the timestamp used to construct an asset ID exceeds         the uint248 scale.\"}],\"LnInvalidInput()\":[{\"notice\":\"Thrown when the input to `FixedPointMath.ln` is less than or         equal to zero.\"}],\"MinimumSharePrice()\":[{\"notice\":\"Thrown when vault share price is smaller than the minimum share         price. This protects traders from unknowingly opening a long or         short after negative interest has accrued.\"}],\"MinimumTransactionAmount()\":[{\"notice\":\"Thrown when the input or output amount of a trade is smaller         than the minimum transaction amount. This protects traders and         LPs from losses of precision that can occur at small scales.\"}],\"NotPayable()\":[{\"notice\":\"Thrown when ether is sent to an instance that doesn't accept         ether as a deposit asset.\"}],\"OutputLimit()\":[{\"notice\":\"Thrown when a slippage guard is violated.\"}],\"PoolIsPaused()\":[{\"notice\":\"Thrown when the pool is paused and a trader tries to add         liquidity, open a long, or open a short. Traders can still         close their existing positions while the pool is paused.\"}],\"RestrictedZeroAddress()\":[{\"notice\":\"Thrown when the owner passed to permit is the zero address. This         prevents users from spending the funds in address zero by         sending an invalid signature to ecrecover.\"}],\"TransferFailed()\":[{\"notice\":\"Thrown when an ether transfer fails.\"}],\"UnsafeCastToInt128()\":[{\"notice\":\"Thrown when casting a value to a int128 that is outside of the         int128 scale.\"}],\"UnsafeCastToInt256()\":[{\"notice\":\"Thrown when casting a value to a int256 that is outside of the         int256 scale.\"}],\"UnsafeCastToUint112()\":[{\"notice\":\"Thrown when casting a value to a uint112 that is outside of the         uint128 scale.\"}],\"UnsafeCastToUint128()\":[{\"notice\":\"Thrown when casting a value to a uint128 that is outside of the         uint128 scale.\"}]},\"events\":{\"AddLiquidity(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when an LP adds liquidity to the Hyperdrive pool.\"},\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an account changes the allowance for another         account.\"},\"ApprovalForAll(address,address,bool)\":{\"notice\":\"Emitted when an account changes the approval for all of its         tokens.\"},\"CloseLong(address,address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is closed.\"},\"CloseShort(address,address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is closed.\"},\"CollectGovernanceFee(address,uint256)\":{\"notice\":\"Emitted when governance fees are collected.\"},\"CreateCheckpoint(uint256,uint256,uint256,uint256,uint256,uint256)\":{\"notice\":\"Emitted when a checkpoint is created.\"},\"FeeCollectorUpdated(address)\":{\"notice\":\"Emitted when the fee collector address is updated.\"},\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when the governance address is updated.\"},\"Initialize(address,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when the Hyperdrive pool is initialized.\"},\"OpenLong(address,uint256,uint256,uint256,uint256,bool,uint256)\":{\"notice\":\"Emitted when a long position is opened.\"},\"OpenShort(address,uint256,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when a short position is opened.\"},\"PauseStatusUpdated(bool)\":{\"notice\":\"Emitted when the pause status is updated.\"},\"PauserUpdated(address,bool)\":{\"notice\":\"Emitted when a pauser is updated.\"},\"RedeemWithdrawalShares(address,address,uint256,uint256,uint256,bool)\":{\"notice\":\"Emitted when an LP redeems withdrawal shares.\"},\"RemoveLiquidity(address,address,uint256,uint256,uint256,bool,uint256,uint256)\":{\"notice\":\"Emitted when an LP removes liquidity from the Hyperdrive pool.\"},\"Sweep(address,address)\":{\"notice\":\"Emitted when tokens are swept.\"},\"SweepCollectorUpdated(address)\":{\"notice\":\"Emitted when the sweep collector address is updated.\"},\"TransferSingle(address,address,address,uint256,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"checkpoint(uint256)\":{\"notice\":\"Allows anyone to mint a new checkpoint.\"},\"openShort(uint256,uint256,uint256,(address,bool,bytes))\":{\"notice\":\"Opens a short position.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/MockHyperdrive.sol\":\"MockHyperdriveTarget4\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/external/Hyperdrive.sol\":{\"keccak256\":\"0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67\",\"dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6\"]},\"contracts/src/external/HyperdriveTarget0.sol\":{\"keccak256\":\"0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206\",\"dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF\"]},\"contracts/src/external/HyperdriveTarget1.sol\":{\"keccak256\":\"0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e\",\"dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7\"]},\"contracts/src/external/HyperdriveTarget2.sol\":{\"keccak256\":\"0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39\",\"dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA\"]},\"contracts/src/external/HyperdriveTarget3.sol\":{\"keccak256\":\"0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a\",\"dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup\"]},\"contracts/src/external/HyperdriveTarget4.sol\":{\"keccak256\":\"0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886\",\"dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf\",\"dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24\",\"dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa\",\"dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86\",\"dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]},\"contracts/src/internal/HyperdriveAdmin.sol\":{\"keccak256\":\"0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad\",\"dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6\",\"dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557\",\"dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c\",\"dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7\",\"dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d\",\"dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006\",\"dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e\",\"dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131\",\"dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc\"]},\"contracts/src/libraries/Constants.sol\":{\"keccak256\":\"0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418\",\"dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd\",\"dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002\",\"dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a\",\"dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8\",\"dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9\",\"dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh\"]},\"contracts/test/ERC20Mintable.sol\":{\"keccak256\":\"0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df\",\"dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR\"]},\"contracts/test/MockHyperdrive.sol\":{\"keccak256\":\"0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace\",\"dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]},\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]},\"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol\":{\"keccak256\":\"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef\",\"dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"test/utils/HyperdriveUtils.sol\":{\"keccak256\":\"0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6\",\"dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P\"]}},\"version\":1}";
    readonly metadata: {
        readonly compiler: {
            readonly version: "0.8.20+commit.a1b79de6";
        };
        readonly language: "Solidity";
        readonly output: {
            readonly abi: readonly [{
                readonly inputs: readonly [{
                    readonly internalType: "struct IHyperdrive.PoolConfig";
                    readonly name: "_config";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "contract IERC20";
                        readonly name: "baseToken";
                        readonly type: "address";
                    }, {
                        readonly internalType: "contract IERC20";
                        readonly name: "vaultSharesToken";
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
                readonly stateMutability: "nonpayable";
                readonly type: "constructor";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "DistributeExcessIdleFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ExpInvalidExponent";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "enum IHyperdrive.InsufficientLiquidityReason";
                    readonly name: "reason";
                    readonly type: "uint8";
                }];
                readonly type: "error";
                readonly name: "InsufficientLiquidity";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidCheckpointTime";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "InvalidTimestamp";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "LnInvalidInput";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MinimumSharePrice";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "MinimumTransactionAmount";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "NotPayable";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "OutputLimit";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "PoolIsPaused";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "ReentrancyGuardReentrantCall";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "RestrictedZeroAddress";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "TransferFailed";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt128";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToInt256";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToUint112";
            }, {
                readonly inputs: readonly [];
                readonly type: "error";
                readonly name: "UnsafeCastToUint128";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "AddLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "owner";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "spender";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Approval";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "account";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "approved";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "ApprovalForAll";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "basePayment";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CloseShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "fees";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CollectGovernanceFee";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "checkpointTime";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "checkpointVaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedShorts";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturedLongs";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "CreateCheckpoint";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newFeeCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "FeeCollectorUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newGovernance";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "GovernanceUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "apr";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "Initialize";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenLong";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "trader";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "assetId";
                    readonly type: "uint256";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "maturityTime";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseProceeds";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "bondAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "OpenShort";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isPaused";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauseStatusUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newPauser";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "bool";
                    readonly name: "status";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "PauserUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RedeemWithdrawalShares";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "provider";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "destination";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "baseAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "vaultShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "bool";
                    readonly name: "asBase";
                    readonly type: "bool";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "withdrawalShareAmount";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "lpSharePrice";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "RemoveLiquidity";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "collector";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "target";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "Sweep";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "newSweepCollector";
                    readonly type: "address";
                    readonly indexed: true;
                }];
                readonly type: "event";
                readonly name: "SweepCollectorUpdated";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "address";
                    readonly name: "operator";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "from";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "address";
                    readonly name: "to";
                    readonly type: "address";
                    readonly indexed: true;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "id";
                    readonly type: "uint256";
                    readonly indexed: false;
                }, {
                    readonly internalType: "uint256";
                    readonly name: "value";
                    readonly type: "uint256";
                    readonly indexed: false;
                }];
                readonly type: "event";
                readonly name: "TransferSingle";
                readonly anonymous: false;
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_checkpointTime";
                    readonly type: "uint256";
                }];
                readonly stateMutability: "nonpayable";
                readonly type: "function";
                readonly name: "checkpoint";
            }, {
                readonly inputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "_bondAmount";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_maxDeposit";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "_minVaultSharePrice";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "struct IHyperdrive.Options";
                    readonly name: "_options";
                    readonly type: "tuple";
                    readonly components: readonly [{
                        readonly internalType: "address";
                        readonly name: "destination";
                        readonly type: "address";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "asBase";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bytes";
                        readonly name: "extraData";
                        readonly type: "bytes";
                    }];
                }];
                readonly stateMutability: "payable";
                readonly type: "function";
                readonly name: "openShort";
                readonly outputs: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "";
                    readonly type: "uint256";
                }];
            }];
            readonly devdoc: {
                readonly kind: "dev";
                readonly methods: {
                    readonly "checkpoint(uint256)": {
                        readonly params: {
                            readonly _checkpointTime: "The time of the checkpoint to create.";
                        };
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly params: {
                            readonly _bondAmount: "The amount of bonds to short.";
                            readonly _maxDeposit: "The most the user expects to deposit for this trade.        The units of this quantity are either base or vault shares,        depending on the value of `_options.asBase`.";
                            readonly _minVaultSharePrice: "The minimum vault share price at which to        open the short. This allows traders to protect themselves from        opening a short in a checkpoint where negative interest has        accrued.";
                            readonly _options: "The options that configure how the trade is settled.";
                        };
                        readonly returns: {
                            readonly _0: "The maturity time of the short.";
                            readonly _1: "The amount the user deposited for this trade. The units of this         quantity are either base or vault shares, depending on the value         of `_options.asBase`.";
                        };
                    };
                };
                readonly version: 1;
            };
            readonly userdoc: {
                readonly kind: "user";
                readonly methods: {
                    readonly "checkpoint(uint256)": {
                        readonly notice: "Allows anyone to mint a new checkpoint.";
                    };
                    readonly "openShort(uint256,uint256,uint256,(address,bool,bytes))": {
                        readonly notice: "Opens a short position.";
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
                readonly "contracts/test/MockHyperdrive.sol": "MockHyperdriveTarget4";
            };
            readonly libraries: {};
        };
        readonly sources: {
            readonly "contracts/src/external/Hyperdrive.sol": {
                readonly keccak256: "0x4d166ec6a8a2e3f2cae2d0f990d1cc40965ec995130d7a7be1af2b9e390d3fd8";
                readonly urls: readonly ["bzz-raw://2185afc7935052ce78427f3ee5629d4c6d93cbffad776fb281c2b79ff2234d67", "dweb:/ipfs/QmT6e2H7pXG3e2BM1EoHTxzWhTwxjGu75AxNkZ4CxyEbw6"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget0.sol": {
                readonly keccak256: "0x9cf2186541b5454544930c45d3ca5a7396a9122d7218e42670ae6e77eba7fe92";
                readonly urls: readonly ["bzz-raw://6d3da4a8aadd58e9f2ddc4c0fed4b91be1f4d8d572c7cb9eea7c6f2aa416b206", "dweb:/ipfs/QmcSDMBvhpkMi2NPqWhbgvK2qBzUaihW28t3KpZMxmCrmF"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget1.sol": {
                readonly keccak256: "0xafc075dac84c3c9d5be703d5068cc2a30875f16107b884c8ee416e877422c6da";
                readonly urls: readonly ["bzz-raw://12d86af9b6684898a97a67e268137da7a5fcff8f484c01dd73d92d2b2f1b881e", "dweb:/ipfs/QmQg2gg35jjmuG27HWjRVG65gYCdGmCHmCoiDC3GRoAMr7"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget2.sol": {
                readonly keccak256: "0xf5501de742b9054f1c8cbf6234e66aac5ca0380016cfa65ecd01840c2e857e79";
                readonly urls: readonly ["bzz-raw://3d971dfdd0986a75c0fa5d55fc3b7c4edb8126201a53f325d8bb6df293b94d39", "dweb:/ipfs/QmNnJsAcJEoChpJcCneEmwmAQ2n2F1u4YrYFS4hfwyiwVA"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget3.sol": {
                readonly keccak256: "0x805a1d075059fa6a4247f49e9b356f8df3da3bd37d778ad88591766c165529e1";
                readonly urls: readonly ["bzz-raw://6bbe4411d4b5fe5f9db08e4c4acef28a6cff80c5a9ae75d2d65a35f1616f0d5a", "dweb:/ipfs/QmZLYZU9Wz4gZEiY1vm1JT9me13oWj9scVMgV1tbDLMNup"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/external/HyperdriveTarget4.sol": {
                readonly keccak256: "0xfc2c1dfa778f4be903a0a078c7cfb29fdf2caded6b72cf222f5da4b39e512bfa";
                readonly urls: readonly ["bzz-raw://8bf1a17cc51013e821f44c426b8911db6f51ea96c0883f00ad98ab70993c2886", "dweb:/ipfs/QmdW2jFRm2vgoWQc1thZCPSASezv2dKFjmxayyV715HhFN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IERC20.sol": {
                readonly keccak256: "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9";
                readonly urls: readonly ["bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac", "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdrive.sol": {
                readonly keccak256: "0xc293b4229674624983294b673d6fefce53ed8f6f3d9c6bbcb34da25f42ef2c71";
                readonly urls: readonly ["bzz-raw://084f43e7c42615faabfb6ae9100a8cea6bf9846eb1c433dc08fe634c59cadcaf", "dweb:/ipfs/QmXW3GgcbQQg5xnfAC6RT2KBL9ii8s1jwbDtZywWXFydpm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveCore.sol": {
                readonly keccak256: "0x68adcd293ff25711add1698b6024faa45beec01eb044bd0103d3020aa96d856e";
                readonly urls: readonly ["bzz-raw://0e0f5e35a7d2c656e249394d25896e5adfb9af3e210c01b9ef5fa81d25a45e24", "dweb:/ipfs/QmbLASezHPWHcbodqSfw3Qh9NzqekqVPM8FhCXKGTCXL1h"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveEvents.sol": {
                readonly keccak256: "0x567b78388802482303910be022299e39a0ef95b4a9a30d6acc4bea0d467fa784";
                readonly urls: readonly ["bzz-raw://338a9f960049c37d13b6e23e5bc2c9e6005366aa99c95168f57f170ef2a4bcfa", "dweb:/ipfs/QmaeAwacrvMgJGqrKDSXZkYNYRJ5FvirYFpY3xjbCbJTF9"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/interfaces/IHyperdriveRead.sol": {
                readonly keccak256: "0xfbe341a751b577daa735f836ae9e213b23fffecfb1b7512e4faf3d7807f5b045";
                readonly urls: readonly ["bzz-raw://78ba0c247e48f642f44c30d7771bd752a5fe8bd4a6c10f849f1ad66804149c86", "dweb:/ipfs/QmXtSLfErEvA8wqMzXDdqNU9TRMVVgoMibmFSDRJCypi6j"];
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
            readonly "contracts/src/internal/HyperdriveAdmin.sol": {
                readonly keccak256: "0x93481611cf60c586320edf6a95162e96e9d9a3d691360e4b304cfff65af4ee95";
                readonly urls: readonly ["bzz-raw://5294c86957cd2e19951fb4e836cae62dca2353c73cbcf4a462e10969b0d1f6ad", "dweb:/ipfs/QmT6FfvF9XwsaZhA3wHgBgyQY4mXmnq3uffEqd8V77GC9b"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveBase.sol": {
                readonly keccak256: "0x7feb8df22e6f91b1ee70f50f5ca16a7819601bcb88fc5a5fa9cf16c708cc52bb";
                readonly urls: readonly ["bzz-raw://60ff7ff4faa45551099b025d03f2438477b5fd1f64f82b78c6ed26cbdafc64f6", "dweb:/ipfs/QmWtbftziGdSKAEvpRoaWRnTxMNwgUVs2nDN6nFugX1WYN"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveCheckpoint.sol": {
                readonly keccak256: "0x8c1f59668b8f9a7b07b70ec1d7180131a6e610d9f8ff3c99583dac3b0f0e2588";
                readonly urls: readonly ["bzz-raw://b2ce3226b9f22f643b58378a5cc6effda1a4f278d0d4262c31c6e7b3a3f48557", "dweb:/ipfs/QmdmBETY7MUfozxTWuHeyjpDjKtRFYWierdSajHyeNepHv"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLP.sol": {
                readonly keccak256: "0x3f1ff106b34d3161e4be0085385bffe4b842cff41687c763de7df1cb4f466976";
                readonly urls: readonly ["bzz-raw://c26ba880f9501d0d1366d9f95087b6ba4056c7983d8336aa23d51ae2778e097c", "dweb:/ipfs/Qme7virH8wbgnuHfBGsDZjDvPu84msxD6U1BUXPfkpYaER"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveLong.sol": {
                readonly keccak256: "0xe791adb5c58a73ff2c978fcc79153f9042702e2c4fc5d71f60534323d5ba4832";
                readonly urls: readonly ["bzz-raw://7ec4adf40e5f90574c7484ddeeed41cbe1f60b29847b18b169aa3130b8882aa7", "dweb:/ipfs/QmeY9y922jhcLzGw9d4VUNNoDkUeFhTJ8ZVThrvqzcGGjm"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveMultiToken.sol": {
                readonly keccak256: "0x21a9aafb8e23a22c77111e13538fa8f709446e4f3a64ef84b2eebc2aa9d04373";
                readonly urls: readonly ["bzz-raw://41517912353540de5b430587ca8220f9d34d4432d3c723951d5fb618d5907b5d", "dweb:/ipfs/QmU3cTCrAq94digVS97s5af1Pu86uGBpmpus6w7828fUbG"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveShort.sol": {
                readonly keccak256: "0xc42b5a9ee5eee3cb9177b136eb9f4b81a4b51d9468f8faa97309934b6b371bc5";
                readonly urls: readonly ["bzz-raw://b9291237fcdbb8ff97517acd19499cfa4afc6d670a89fd5cc0309a201a7b1006", "dweb:/ipfs/QmfQmUwvGhJgPFyNaHvur8AViePBzvSBNAdaZJBwMkY5Je"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/internal/HyperdriveStorage.sol": {
                readonly keccak256: "0xf965f50c6e452e4011a476c67e6cbea77e558570efb7532dbf1bd586e8705ab4";
                readonly urls: readonly ["bzz-raw://e81b4399e0e27f0a8d47dd7a79f7711d1bd4685e6b98d4ba778e32d1af7de50e", "dweb:/ipfs/QmQyCBv76GvWPxTjdR6yD7DTuvFAdxTkRp2A9wUgqP778N"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/AssetId.sol": {
                readonly keccak256: "0x3031a1ec376be333eebe0062c474a22d7f970cb02de62ab6823c6918c0a7f83b";
                readonly urls: readonly ["bzz-raw://6c80cc2fd8b7908b6420ebb21cb99266c93e01d6cdd9d1a41f8847493849b131", "dweb:/ipfs/QmeMehWbF2RwQaf6c6yaj5KHjXboDRpzBCtvFnLW4BXBbc"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Constants.sol": {
                readonly keccak256: "0xcf133c1d2db33dd318a51f8db58aa188225dd4383499cf82aa35bb49a678e30d";
                readonly urls: readonly ["bzz-raw://bdfefbcdf520ad8790372e66571a9f0782886e1d754dc83c834b98a19f450418", "dweb:/ipfs/QmdVcLsnb29dUJT4GVTWgEmuExEZ1wVhQ9KAJ5pwNTh6WU"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/Errors.sol": {
                readonly keccak256: "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0";
                readonly urls: readonly ["bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88", "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/FixedPointMath.sol": {
                readonly keccak256: "0x631f6529908f62f71775f8c6120afdca3a836fb24fa9fa4701cad54f4a9da076";
                readonly urls: readonly ["bzz-raw://2baf6ad8917a3fbb6d040334451f6b4f6936b00518c4cd308b9c6fa11569b2bd", "dweb:/ipfs/QmXD16vk6MRxmPRqy8ZXSpRA5XxhSf1pnsQH32ARDJTk8L"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/HyperdriveMath.sol": {
                readonly keccak256: "0xcf305dde8aa320d1e1b767734ce8edce456af537525d40e30d5345f09f6e34ab";
                readonly urls: readonly ["bzz-raw://056c9a563f1a9e0133e17463497ad19be517d35b770170122edea50ca9fbe002", "dweb:/ipfs/QmS6dkVRHzdbv7etumcCtNtm9GuXDCjqZxxhtYfP6keAAY"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/LPMath.sol": {
                readonly keccak256: "0x52cd64379d1fbb0acdd5152e84ff44ca2b2496e4bb43c0e02b61c28b97141bed";
                readonly urls: readonly ["bzz-raw://b1d9aadc1b53622adee86e41371c3a4efde7b53cdd5a828b2b733f0e3392b26a", "dweb:/ipfs/QmXkiVwpe7UxgeC1nYPk2x4wD9NVXuyFsiViyuvrgdtKpX"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/SafeCast.sol": {
                readonly keccak256: "0xc5282be69c8c85c1a1bbbf1554a501c17599f4b84119339b660018ae90eb7148";
                readonly urls: readonly ["bzz-raw://fd29b570d1e3205d25939b1c0e78e98ae34747a8118703fc5b2c9690791b26c8", "dweb:/ipfs/QmSdecxKRE66cgEipikK5uS4mUJxz2FgfncCk9iXvkdjG8"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/src/libraries/YieldSpaceMath.sol": {
                readonly keccak256: "0x92618059cb1370412177754f6d63dc91028226760b4e2c77d13a5686421f5fd1";
                readonly urls: readonly ["bzz-raw://4c7a27c21f1c57d9bb2857759ce41dd7e2afbc738cf47d3ae8c98639820ec8c9", "dweb:/ipfs/QmRF2Pz2Ezm5W84o4Fv8tqgrn1umy16i8Pis9H5CSsSSLh"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/ERC20Mintable.sol": {
                readonly keccak256: "0xa6b1089f313e782a365731db38adb49895a60cceb9e0815e2c68f01519e0060d";
                readonly urls: readonly ["bzz-raw://b816baf88a891a35c30eb264c83b27d087778efbb33a8c9b1086f3710e02e7df", "dweb:/ipfs/QmV24rEUp75368eJBfgo3MJfj65cvzfbzCD8zFyEaCUaTR"];
                readonly license: "Apache-2.0";
            };
            readonly "contracts/test/MockHyperdrive.sol": {
                readonly keccak256: "0x70110f424c1f1f19ee883acad7b22609b8b2fd2b0da99227bae7e3880d3ee0d1";
                readonly urls: readonly ["bzz-raw://4a3766f58274f66e6f8909896cdb27349126fe86da7558124ab088137c695ace", "dweb:/ipfs/QmVreuQKTnvPVdgiuQxeSaEwKJrX4L7wtZqfzwNdozwV7S"];
                readonly license: "Apache-2.0";
            };
            readonly "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
                readonly keccak256: "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7";
                readonly urls: readonly ["bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f", "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
                readonly keccak256: "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80";
                readonly urls: readonly ["bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229", "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
                readonly keccak256: "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70";
                readonly urls: readonly ["bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c", "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
                readonly keccak256: "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2";
                readonly urls: readonly ["bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850", "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
                readonly keccak256: "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff";
                readonly urls: readonly ["bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d", "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
                readonly keccak256: "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386";
                readonly urls: readonly ["bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0", "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
                readonly keccak256: "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721";
                readonly urls: readonly ["bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245", "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
                readonly keccak256: "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2";
                readonly urls: readonly ["bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12", "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"];
                readonly license: "MIT";
            };
            readonly "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
                readonly keccak256: "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236";
                readonly urls: readonly ["bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02", "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"];
                readonly license: "MIT";
            };
            readonly "lib/solmate/src/auth/Auth.sol": {
                readonly keccak256: "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c";
                readonly urls: readonly ["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac", "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/auth/authorities/MultiRolesAuthority.sol": {
                readonly keccak256: "0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3";
                readonly urls: readonly ["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef", "dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "lib/solmate/src/tokens/ERC20.sol": {
                readonly keccak256: "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10";
                readonly urls: readonly ["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35", "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"];
                readonly license: "AGPL-3.0-only";
            };
            readonly "test/utils/HyperdriveUtils.sol": {
                readonly keccak256: "0x764719deaf8b833fc87b8436d166030eaa05832bf3d5e259172f431778666e04";
                readonly urls: readonly ["bzz-raw://04c4bd84c0d60f9a7c68604cbe76d0cc88170bb569298749bc97d40b197f62f6", "dweb:/ipfs/QmQV6zkCCvLkbta2vDzjbMXKUzYDrAhcEyFA7QSRTVZJ1P"];
                readonly license: "Apache-2.0";
            };
        };
        readonly version: 1;
    };
    readonly ast: {
        readonly absolutePath: "contracts/test/MockHyperdrive.sol";
        readonly id: 25229;
        readonly exportedSymbols: {
            readonly ERC20Mintable: readonly [23479];
            readonly ETH: readonly [18174];
            readonly FixedPointMath: readonly [18968];
            readonly Hyperdrive: readonly [4427];
            readonly HyperdriveBase: readonly [13835];
            readonly HyperdriveTarget0: readonly [5242];
            readonly HyperdriveTarget1: readonly [5355];
            readonly HyperdriveTarget2: readonly [5444];
            readonly HyperdriveTarget3: readonly [5532];
            readonly HyperdriveTarget4: readonly [5611];
            readonly HyperdriveUtils: readonly [157393];
            readonly IHyperdrive: readonly [10506];
            readonly IMockHyperdrive: readonly [24275];
            readonly MockHyperdrive: readonly [25139];
            readonly MockHyperdriveBase: readonly [24810];
            readonly MockHyperdriveTarget0: readonly [25168];
            readonly MockHyperdriveTarget1: readonly [25183];
            readonly MockHyperdriveTarget2: readonly [25198];
            readonly MockHyperdriveTarget3: readonly [25213];
            readonly MockHyperdriveTarget4: readonly [25228];
        };
        readonly nodeType: "SourceUnit";
        readonly src: "39:14795:135";
        readonly nodes: readonly [{
            readonly id: 24205;
            readonly nodeType: "PragmaDirective";
            readonly src: "39:23:135";
            readonly nodes: readonly [];
            readonly literals: readonly ["solidity", "0.8", ".20"];
        }, {
            readonly id: 24207;
            readonly nodeType: "ImportDirective";
            readonly src: "64:67:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/Hyperdrive.sol";
            readonly file: "contracts/src/external/Hyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 4428;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24206;
                    readonly name: "Hyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 4427;
                    readonly src: "73:10:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24209;
            readonly nodeType: "ImportDirective";
            readonly src: "132:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget0.sol";
            readonly file: "contracts/src/external/HyperdriveTarget0.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 5243;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24208;
                    readonly name: "HyperdriveTarget0";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5242;
                    readonly src: "141:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24211;
            readonly nodeType: "ImportDirective";
            readonly src: "214:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget1.sol";
            readonly file: "contracts/src/external/HyperdriveTarget1.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 5356;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24210;
                    readonly name: "HyperdriveTarget1";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5355;
                    readonly src: "223:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24213;
            readonly nodeType: "ImportDirective";
            readonly src: "296:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget2.sol";
            readonly file: "contracts/src/external/HyperdriveTarget2.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 5445;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24212;
                    readonly name: "HyperdriveTarget2";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5444;
                    readonly src: "305:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24215;
            readonly nodeType: "ImportDirective";
            readonly src: "378:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget3.sol";
            readonly file: "contracts/src/external/HyperdriveTarget3.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 5533;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24214;
                    readonly name: "HyperdriveTarget3";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5532;
                    readonly src: "387:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24217;
            readonly nodeType: "ImportDirective";
            readonly src: "460:81:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/external/HyperdriveTarget4.sol";
            readonly file: "contracts/src/external/HyperdriveTarget4.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 5612;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24216;
                    readonly name: "HyperdriveTarget4";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 5611;
                    readonly src: "469:17:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24219;
            readonly nodeType: "ImportDirective";
            readonly src: "542:75:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/internal/HyperdriveBase.sol";
            readonly file: "contracts/src/internal/HyperdriveBase.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 13836;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24218;
                    readonly name: "HyperdriveBase";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 13835;
                    readonly src: "551:14:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24221;
            readonly nodeType: "ImportDirective";
            readonly src: "618:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 10507;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24220;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10506;
                    readonly src: "627:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24223;
            readonly nodeType: "ImportDirective";
            readonly src: "690:71:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/interfaces/IHyperdrive.sol";
            readonly file: "contracts/src/interfaces/IHyperdrive.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 10507;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24222;
                    readonly name: "IHyperdrive";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 10506;
                    readonly src: "699:11:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24225;
            readonly nodeType: "ImportDirective";
            readonly src: "762:60:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/Constants.sol";
            readonly file: "contracts/src/libraries/Constants.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 18175;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24224;
                    readonly name: "ETH";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18174;
                    readonly src: "771:3:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24227;
            readonly nodeType: "ImportDirective";
            readonly src: "823:76:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/src/libraries/FixedPointMath.sol";
            readonly file: "contracts/src/libraries/FixedPointMath.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 18969;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24226;
                    readonly name: "FixedPointMath";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 18968;
                    readonly src: "832:14:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24229;
            readonly nodeType: "ImportDirective";
            readonly src: "900:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "contracts/test/ERC20Mintable.sol";
            readonly file: "contracts/test/ERC20Mintable.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 23480;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24228;
                    readonly name: "ERC20Mintable";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 23479;
                    readonly src: "909:13:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24231;
            readonly nodeType: "ImportDirective";
            readonly src: "966:65:135";
            readonly nodes: readonly [];
            readonly absolutePath: "test/utils/HyperdriveUtils.sol";
            readonly file: "test/utils/HyperdriveUtils.sol";
            readonly nameLocation: "-1:-1:-1";
            readonly scope: 25229;
            readonly sourceUnit: 157394;
            readonly symbolAliases: readonly [{
                readonly foreign: {
                    readonly id: 24230;
                    readonly name: "HyperdriveUtils";
                    readonly nodeType: "Identifier";
                    readonly overloadedDeclarations: readonly [];
                    readonly referencedDeclaration: 157393;
                    readonly src: "975:15:135";
                    readonly typeDescriptions: {};
                };
                readonly nameLocation: "-1:-1:-1";
            }];
            readonly unitAlias: "";
        }, {
            readonly id: 24275;
            readonly nodeType: "ContractDefinition";
            readonly src: "1033:594:135";
            readonly nodes: readonly [{
                readonly id: 24238;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1065:51:135";
                readonly nodes: readonly [];
                readonly functionSelector: "68096239";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "1074:6:135";
                readonly parameters: {
                    readonly id: 24236;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24233;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "1089:4:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24238;
                        readonly src: "1081:12:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24232;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1081:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24235;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "1102:3:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24238;
                        readonly src: "1095:10:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24234;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1095:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1080:26:135";
                };
                readonly returnParameters: {
                    readonly id: 24237;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1115:0:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24245;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1122:101:135";
                readonly nodes: readonly [];
                readonly functionSelector: "68c2ecb8";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "1131:22:135";
                readonly parameters: {
                    readonly id: 24241;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24240;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1171:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24245;
                        readonly src: "1163:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24239;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1163:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1153:37:135";
                };
                readonly returnParameters: {
                    readonly id: 24244;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24243;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24245;
                        readonly src: "1214:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24242;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1214:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1213:9:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24252;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1229:107:135";
                readonly nodes: readonly [];
                readonly functionSelector: "ca6d38f7";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "1238:28:135";
                readonly parameters: {
                    readonly id: 24248;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24247;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "1284:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24252;
                        readonly src: "1276:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24246;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1276:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1266:37:135";
                };
                readonly returnParameters: {
                    readonly id: 24251;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24250;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24252;
                        readonly src: "1327:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24249;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1327:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1326:9:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24257;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1342:60:135";
                readonly nodes: readonly [];
                readonly functionSelector: "907c0f92";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "1351:16:135";
                readonly parameters: {
                    readonly id: 24253;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1367:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24256;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24255;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24257;
                        readonly src: "1393:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24254;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1393:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1392:9:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24262;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1408:62:135";
                readonly nodes: readonly [];
                readonly functionSelector: "ced09112";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "1417:15:135";
                readonly parameters: {
                    readonly id: 24260;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24259;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "1441:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24262;
                        readonly src: "1433:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24258;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1433:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1432:28:135";
                };
                readonly returnParameters: {
                    readonly id: 24261;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1469:0:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24269;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1476:75:135";
                readonly nodes: readonly [];
                readonly functionSelector: "8392b8c0";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "1485:11:135";
                readonly parameters: {
                    readonly id: 24267;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24264;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "1505:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24269;
                        readonly src: "1497:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24263;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1497:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24266;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "1528:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24269;
                        readonly src: "1520:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24265;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1520:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1496:45:135";
                };
                readonly returnParameters: {
                    readonly id: 24268;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1550:0:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24274;
                readonly nodeType: "FunctionDefinition";
                readonly src: "1557:68:135";
                readonly nodes: readonly [];
                readonly functionSelector: "8e67f87e";
                readonly implemented: false;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "1566:24:135";
                readonly parameters: {
                    readonly id: 24270;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "1590:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24273;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24272;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24274;
                        readonly src: "1616:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24271;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "1616:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "1615:9:135";
                };
                readonly scope: 24275;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [];
            readonly canonicalName: "IMockHyperdrive";
            readonly contractDependencies: readonly [];
            readonly contractKind: "interface";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [24275];
            readonly name: "IMockHyperdrive";
            readonly nameLocation: "1043:15:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [];
            readonly usedEvents: readonly [];
        }, {
            readonly id: 24810;
            readonly nodeType: "ContractDefinition";
            readonly src: "1629:7833:135";
            readonly nodes: readonly [{
                readonly id: 24280;
                readonly nodeType: "UsingForDirective";
                readonly src: "1690:33:135";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24278;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["1696:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18968;
                    readonly src: "1696:14:135";
                };
                readonly typeName: {
                    readonly id: 24279;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1715:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24282;
                readonly nodeType: "VariableDeclaration";
                readonly src: "1729:28:135";
                readonly nodes: readonly [];
                readonly constant: false;
                readonly mutability: "mutable";
                readonly name: "totalShares";
                readonly nameLocation: "1746:11:135";
                readonly scope: 24810;
                readonly stateVariable: true;
                readonly storageLocation: "default";
                readonly typeDescriptions: {
                    readonly typeIdentifier: "t_uint256";
                    readonly typeString: "uint256";
                };
                readonly typeName: {
                    readonly id: 24281;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "1729:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
                readonly visibility: "internal";
            }, {
                readonly id: 24415;
                readonly nodeType: "FunctionDefinition";
                readonly src: "2054:1483:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24414;
                    readonly nodeType: "Block";
                    readonly src: "2194:1343:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24296];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24296;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "2261:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24414;
                            readonly src: "2253:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24295;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2253:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24297;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2253:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24303;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24300;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "2289:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24299;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2281:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24298;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2281:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24301;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2281:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24302;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "2304:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2281:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24323;
                            readonly nodeType: "Block";
                            readonly src: "2370:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24321;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24313;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24296;
                                        readonly src: "2384:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24318;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2422:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24317;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2414:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24316;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2414:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24319;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2414:13:135";
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
                                            readonly expression: {
                                                readonly id: 24314;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "2393:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24315;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2404:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9809;
                                            readonly src: "2393:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24320;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2393:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2384:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24322;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2384:44:135";
                            }];
                        };
                        readonly id: 24324;
                        readonly nodeType: "IfStatement";
                        readonly src: "2277:162:135";
                        readonly trueBody: {
                            readonly id: 24312;
                            readonly nodeType: "Block";
                            readonly src: "2309:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24310;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24304;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24296;
                                        readonly src: "2323:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24307;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2340:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24306;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2332:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24305;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2332:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24308;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2332:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24309;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2346:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2332:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2323:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24311;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2323:30:135";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24326];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24326;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "2585:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24414;
                            readonly src: "2580:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24325;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2580:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24328;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24327;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "2595:4:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2580:19:135";
                    }, {
                        readonly assignments: readonly [24330];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24330;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "2617:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24414;
                            readonly src: "2609:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24329;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "2609:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24331;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "2609:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24337;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24334;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "2645:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24333;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "2637:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24332;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "2637:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24335;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "2637:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24336;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "2660:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "2637:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24370;
                            readonly nodeType: "Block";
                            readonly src: "2838:160:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24368;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24357;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24326;
                                        readonly src: "2852:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 24360;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2903:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24361;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2907:6:135";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2903:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24364;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "2939:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24363;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "2931:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24362;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "2931:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24365;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2931:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24366;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24285;
                                            readonly src: "2962:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
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
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24358;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "2862:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24359;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2873:12:135";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9767;
                                            readonly src: "2862:23:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24367;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "2862:125:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "2852:135:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24369;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2852:135:135";
                            }];
                        };
                        readonly id: 24371;
                        readonly nodeType: "IfStatement";
                        readonly src: "2633:365:135";
                        readonly trueBody: {
                            readonly id: 24356;
                            readonly nodeType: "Block";
                            readonly src: "2665:167:135";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24341;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24338;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "2683:3:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 24339;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "2687:5:135";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "2683:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 24340;
                                        readonly name: "_baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24285;
                                        readonly src: "2695:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2683:23:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24348;
                                readonly nodeType: "IfStatement";
                                readonly src: "2679:97:135";
                                readonly trueBody: {
                                    readonly id: 24347;
                                    readonly nodeType: "Block";
                                    readonly src: "2708:68:135";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24342;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10506;
                                                    readonly src: "2733:11:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24344;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "2745:14:135";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10451;
                                                readonly src: "2733:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24345;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "2733:28:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 24346;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "2726:35:135";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24354;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24349;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24330;
                                        readonly src: "2789:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 24353;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24350;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "2798:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24351;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "2802:5:135";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "2798:9:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 24352;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24285;
                                            readonly src: "2810:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "2798:23:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "2789:32:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24355;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "2789:32:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24373;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "3011:8:135";
                            readonly subExpression: {
                                readonly id: 24372;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24326;
                                readonly src: "3012:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24380;
                        readonly nodeType: "IfStatement";
                        readonly src: "3007:74:135";
                        readonly trueBody: {
                            readonly id: 24379;
                            readonly nodeType: "Block";
                            readonly src: "3021:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24374;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10506;
                                            readonly src: "3042:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24376;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3054:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10451;
                                        readonly src: "3042:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24377;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3042:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24378;
                                readonly nodeType: "RevertStatement";
                                readonly src: "3035:35:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 24383;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24381;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24282;
                                readonly src: "3216:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 24382;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "3231:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "3216:16:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24412;
                            readonly nodeType: "Block";
                            readonly src: "3365:166:135";
                            readonly statements: readonly [{
                                readonly assignments: readonly [24397];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 24397;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "3387:9:135";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 24412;
                                    readonly src: "3379:17:135";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 24396;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "3379:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 24403;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 24400;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "3422:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24401;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24296;
                                        readonly src: "3435:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly id: 24398;
                                            readonly name: "_baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24285;
                                            readonly src: "3399:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly id: 24399;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "3411:10:135";
                                        readonly memberName: "mulDivDown";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 18230;
                                        readonly src: "3399:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                            readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                        };
                                    };
                                    readonly id: 24402;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "3399:43:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "3379:63:135";
                            }, {
                                readonly expression: {
                                    readonly id: 24406;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24404;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "3456:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 24405;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24397;
                                        readonly src: "3471:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3456:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24407;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3456:24:135";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 24408;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24397;
                                        readonly src: "3502:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24409;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24330;
                                        readonly src: "3513:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 24410;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3501:19:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24294;
                                readonly id: 24411;
                                readonly nodeType: "Return";
                                readonly src: "3494:26:135";
                            }];
                        };
                        readonly id: 24413;
                        readonly nodeType: "IfStatement";
                        readonly src: "3212:319:135";
                        readonly trueBody: {
                            readonly id: 24395;
                            readonly nodeType: "Block";
                            readonly src: "3234:125:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24389;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24384;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "3248:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24387;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17719;
                                            readonly src: "3282:23:135";
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
                                            readonly expression: {
                                                readonly id: 24385;
                                                readonly name: "_baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24285;
                                                readonly src: "3262:11:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 24386;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "3274:7:135";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18266;
                                            readonly src: "3262:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 24388;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "3262:44:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "3248:58:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24390;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "3248:58:135";
                            }, {
                                readonly expression: {
                                    readonly components: readonly [{
                                        readonly id: 24391;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "3328:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }, {
                                        readonly id: 24392;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24330;
                                        readonly src: "3341:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly id: 24393;
                                    readonly isConstant: false;
                                    readonly isInlineArray: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "TupleExpression";
                                    readonly src: "3327:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "tuple(uint256,uint256)";
                                    };
                                };
                                readonly functionReturnParameters: 24294;
                                readonly id: 24394;
                                readonly nodeType: "Return";
                                readonly src: "3320:28:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12866];
                readonly documentation: {
                    readonly id: 24283;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "1764:285:135";
                    readonly text: "@dev Accepts a deposit from the user in base.\n @param _baseAmount The base amount to deposit.\n @return The shares that were minted in the deposit.\n @return The amount of ETH to refund. Since this yield source isn't\n         payable, this is always zero.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithBase";
                readonly nameLocation: "2063:16:135";
                readonly overrides: {
                    readonly id: 24289;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "2158:8:135";
                };
                readonly parameters: {
                    readonly id: 24288;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24285;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "2097:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24415;
                        readonly src: "2089:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24284;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2089:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24287;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24415;
                        readonly src: "2118:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24286;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2118:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2079:69:135";
                };
                readonly returnParameters: {
                    readonly id: 24294;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24291;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24415;
                        readonly src: "2176:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24290;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2176:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24293;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24415;
                        readonly src: "2185:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24292;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "2185:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "2175:18:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24510;
                readonly nodeType: "FunctionDefinition";
                readonly src: "3655:1226:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24509;
                    readonly nodeType: "Block";
                    readonly src: "3771:1110:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24425];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24425;
                            readonly mutability: "mutable";
                            readonly name: "baseAmount";
                            readonly nameLocation: "3842:10:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24509;
                            readonly src: "3834:18:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24424;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "3834:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24429;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24427;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24418;
                                readonly src: "3870:12:135";
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
                                readonly id: 24426;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24734];
                                readonly referencedDeclaration: 24734;
                                readonly src: "3855:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24428;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "3855:28:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "3834:49:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly id: 24432;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24430;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24282;
                                readonly src: "4019:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 24431;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "4034:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "4019:16:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24451;
                            readonly nodeType: "Block";
                            readonly src: "4125:111:135";
                            readonly statements: readonly [{
                                readonly assignments: readonly [24442];
                                readonly declarations: readonly [{
                                    readonly constant: false;
                                    readonly id: 24442;
                                    readonly mutability: "mutable";
                                    readonly name: "newShares";
                                    readonly nameLocation: "4147:9:135";
                                    readonly nodeType: "VariableDeclaration";
                                    readonly scope: 24451;
                                    readonly src: "4139:17:135";
                                    readonly stateVariable: false;
                                    readonly storageLocation: "default";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly typeName: {
                                        readonly id: 24441;
                                        readonly name: "uint256";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4139:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly visibility: "internal";
                                }];
                                readonly id: 24446;
                                readonly initialValue: {
                                    readonly arguments: readonly [{
                                        readonly id: 24444;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24425;
                                        readonly src: "4176:10:135";
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
                                        readonly id: 24443;
                                        readonly name: "_convertToShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [24780];
                                        readonly referencedDeclaration: 24780;
                                        readonly src: "4159:16:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                            readonly typeString: "function (uint256) view returns (uint256)";
                                        };
                                    };
                                    readonly id: 24445;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4159:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "VariableDeclarationStatement";
                                readonly src: "4139:48:135";
                            }, {
                                readonly expression: {
                                    readonly id: 24449;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24447;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "4201:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "+=";
                                    readonly rightHandSide: {
                                        readonly id: 24448;
                                        readonly name: "newShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24442;
                                        readonly src: "4216:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4201:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24450;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4201:24:135";
                            }];
                        };
                        readonly id: 24452;
                        readonly nodeType: "IfStatement";
                        readonly src: "4015:221:135";
                        readonly trueBody: {
                            readonly id: 24440;
                            readonly nodeType: "Block";
                            readonly src: "4037:82:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24438;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24433;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "4051:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24436;
                                            readonly name: "_initialVaultSharePrice";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 17719;
                                            readonly src: "4084:23:135";
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
                                            readonly expression: {
                                                readonly id: 24434;
                                                readonly name: "baseAmount";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24425;
                                                readonly src: "4065:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            };
                                            readonly id: 24435;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4076:7:135";
                                            readonly memberName: "divDown";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 18266;
                                            readonly src: "4065:18:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                                readonly typeString: "function (uint256,uint256) pure returns (uint256)";
                                            };
                                        };
                                        readonly id: 24437;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4065:43:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4051:57:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24439;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4051:57:135";
                            }];
                        };
                    }, {
                        readonly assignments: readonly [24454];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24454;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "4382:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24509;
                            readonly src: "4377:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24453;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4377:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24456;
                        readonly initialValue: {
                            readonly hexValue: "74727565";
                            readonly id: 24455;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly kind: "bool";
                            readonly lValueRequested: false;
                            readonly nodeType: "Literal";
                            readonly src: "4392:4:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly value: "true";
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4377:19:135";
                    }, {
                        readonly assignments: readonly [24458];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24458;
                            readonly mutability: "mutable";
                            readonly name: "refund";
                            readonly nameLocation: "4414:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24509;
                            readonly src: "4406:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24457;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "4406:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24459;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "4406:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24465;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24462;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "4442:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24461;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "4434:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24460;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "4434:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24463;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "4434:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24464;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "4457:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "4434:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24498;
                            readonly nodeType: "Block";
                            readonly src: "4633:159:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24496;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24485;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24454;
                                        readonly src: "4647:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly expression: {
                                                readonly id: 24488;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4698:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24489;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4702:6:135";
                                            readonly memberName: "sender";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4698:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24492;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "4734:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24491;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "4726:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24490;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "4726:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24493;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4726:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24494;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24425;
                                            readonly src: "4757:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
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
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24486;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "4657:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24487;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4668:12:135";
                                            readonly memberName: "transferFrom";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9767;
                                            readonly src: "4657:23:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24495;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "4657:124:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "4647:134:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24497;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4647:134:135";
                            }];
                        };
                        readonly id: 24499;
                        readonly nodeType: "IfStatement";
                        readonly src: "4430:362:135";
                        readonly trueBody: {
                            readonly id: 24484;
                            readonly nodeType: "Block";
                            readonly src: "4462:165:135";
                            readonly statements: readonly [{
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24469;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly expression: {
                                            readonly id: 24466;
                                            readonly name: "msg";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -15;
                                            readonly src: "4480:3:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_magic_message";
                                                readonly typeString: "msg";
                                            };
                                        };
                                        readonly id: 24467;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4484:5:135";
                                        readonly memberName: "value";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "4480:9:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: "<";
                                    readonly rightExpression: {
                                        readonly id: 24468;
                                        readonly name: "baseAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24425;
                                        readonly src: "4492:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4480:22:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24476;
                                readonly nodeType: "IfStatement";
                                readonly src: "4476:96:135";
                                readonly trueBody: {
                                    readonly id: 24475;
                                    readonly nodeType: "Block";
                                    readonly src: "4504:68:135";
                                    readonly statements: readonly [{
                                        readonly errorCall: {
                                            readonly arguments: readonly [];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [];
                                                readonly expression: {
                                                    readonly id: 24470;
                                                    readonly name: "IHyperdrive";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 10506;
                                                    readonly src: "4529:11:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                        readonly typeString: "type(contract IHyperdrive)";
                                                    };
                                                };
                                                readonly id: 24472;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "4541:14:135";
                                                readonly memberName: "TransferFailed";
                                                readonly nodeType: "MemberAccess";
                                                readonly referencedDeclaration: 10451;
                                                readonly src: "4529:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                                    readonly typeString: "function () pure";
                                                };
                                            };
                                            readonly id: 24473;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "functionCall";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "4529:28:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_tuple$__$";
                                                readonly typeString: "tuple()";
                                            };
                                        };
                                        readonly id: 24474;
                                        readonly nodeType: "RevertStatement";
                                        readonly src: "4522:35:135";
                                    }];
                                };
                            }, {
                                readonly expression: {
                                    readonly id: 24482;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24477;
                                        readonly name: "refund";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24458;
                                        readonly src: "4585:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly commonType: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                        readonly id: 24481;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly leftExpression: {
                                            readonly expression: {
                                                readonly id: 24478;
                                                readonly name: "msg";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -15;
                                                readonly src: "4594:3:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_magic_message";
                                                    readonly typeString: "msg";
                                                };
                                            };
                                            readonly id: 24479;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "4598:5:135";
                                            readonly memberName: "value";
                                            readonly nodeType: "MemberAccess";
                                            readonly src: "4594:9:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly nodeType: "BinaryOperation";
                                        readonly operator: "-";
                                        readonly rightExpression: {
                                            readonly id: 24480;
                                            readonly name: "baseAmount";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24425;
                                            readonly src: "4606:10:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        };
                                        readonly src: "4594:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "4585:31:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24483;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "4585:31:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24501;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "4805:8:135";
                            readonly subExpression: {
                                readonly id: 24500;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24454;
                                readonly src: "4806:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24508;
                        readonly nodeType: "IfStatement";
                        readonly src: "4801:74:135";
                        readonly trueBody: {
                            readonly id: 24507;
                            readonly nodeType: "Block";
                            readonly src: "4815:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24502;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10506;
                                            readonly src: "4836:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24504;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "4848:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10451;
                                        readonly src: "4836:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24505;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "4836:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24506;
                                readonly nodeType: "RevertStatement";
                                readonly src: "4829:35:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12874];
                readonly documentation: {
                    readonly id: 24416;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "3543:107:135";
                    readonly text: "@dev Process a deposit in vault shares.\n @param _shareAmount The vault shares amount to deposit.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_depositWithShares";
                readonly nameLocation: "3664:18:135";
                readonly overrides: {
                    readonly id: 24422;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "3762:8:135";
                };
                readonly parameters: {
                    readonly id: 24421;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24418;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "3700:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24510;
                        readonly src: "3692:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24417;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3692:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24420;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24510;
                        readonly src: "3722:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24419;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "3722:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "3682:70:135";
                };
                readonly returnParameters: {
                    readonly id: 24423;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "3771:0:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24587;
                readonly nodeType: "FunctionDefinition";
                readonly src: "5177:986:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24586;
                    readonly nodeType: "Block";
                    readonly src: "5356:807:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24530;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24523;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24513;
                                readonly src: "5478:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24526;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 24524;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24513;
                                        readonly src: "5493:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 24525;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "5508:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "5493:26:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 24528;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24513;
                                    readonly src: "5536:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24529;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "5493:55:135";
                                readonly trueExpression: {
                                    readonly id: 24527;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24282;
                                    readonly src: "5522:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5478:70:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24531;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5478:70:135";
                    }, {
                        readonly assignments: readonly [24533];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24533;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "5607:13:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24586;
                            readonly src: "5599:21:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24532;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5599:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24537;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24535;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24513;
                                readonly src: "5638:12:135";
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
                                readonly id: 24534;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24734];
                                readonly referencedDeclaration: 24734;
                                readonly src: "5623:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24536;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "5623:28:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5599:52:135";
                    }, {
                        readonly expression: {
                            readonly id: 24540;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24538;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24282;
                                readonly src: "5740:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 24539;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24513;
                                readonly src: "5755:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "5740:27:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24541;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "5740:27:135";
                    }, {
                        readonly assignments: readonly [24543];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24543;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "5782:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24586;
                            readonly src: "5777:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24542;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "5777:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24544;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "5777:12:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24550;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24547;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "5811:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24546;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "5803:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24545;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "5803:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24548;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "5803:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24549;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "5826:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "5803:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24573;
                            readonly nodeType: "Block";
                            readonly src: "5960:83:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24571;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24565;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24543;
                                        readonly src: "5974:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24568;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24515;
                                            readonly src: "6004:12:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24569;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24533;
                                            readonly src: "6018:13:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24566;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "5984:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24567;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "5995:8:135";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9755;
                                            readonly src: "5984:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24570;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5984:48:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "5974:58:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24572;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5974:58:135";
                            }];
                        };
                        readonly id: 24574;
                        readonly nodeType: "IfStatement";
                        readonly src: "5799:244:135";
                        readonly trueBody: {
                            readonly id: 24564;
                            readonly nodeType: "Block";
                            readonly src: "5831:123:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24562;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 24551;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24543;
                                            readonly src: "5846:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 24552;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "5845:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$__$";
                                            readonly typeString: "tuple(bool,)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "";
                                            readonly id: 24560;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "5927:2:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            };
                                            readonly value: "";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                    readonly typeString: "literal_string \"\"";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 24555;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 24515;
                                                        readonly src: "5867:12:135";
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
                                                        readonly id: 24554;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "5859:8:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 24553;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "5859:8:135";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24556;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "5859:21:135";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 24557;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "5881:4:135";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "5859:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 24559;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 24558;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24533;
                                                readonly src: "5894:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "5859:50:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 24561;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "5859:84:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "5845:98:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24563;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "5845:98:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24576;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "6056:8:135";
                            readonly subExpression: {
                                readonly id: 24575;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24543;
                                readonly src: "6057:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24583;
                        readonly nodeType: "IfStatement";
                        readonly src: "6052:74:135";
                        readonly trueBody: {
                            readonly id: 24582;
                            readonly nodeType: "Block";
                            readonly src: "6066:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24577;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10506;
                                            readonly src: "6087:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24579;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "6099:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10451;
                                        readonly src: "6087:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24580;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "6087:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24581;
                                readonly nodeType: "RevertStatement";
                                readonly src: "6080:35:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly id: 24584;
                            readonly name: "withdrawValue";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24533;
                            readonly src: "6143:13:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24522;
                        readonly id: 24585;
                        readonly nodeType: "Return";
                        readonly src: "6136:20:135";
                    }];
                };
                readonly baseFunctions: readonly [12886];
                readonly documentation: {
                    readonly id: 24511;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "4887:285:135";
                    readonly text: "@dev Process a withdrawal in base and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.\n @return amountWithdrawn The amount of base withdrawn.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithBase";
                readonly nameLocation: "5186:17:135";
                readonly overrides: {
                    readonly id: 24519;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "5313:8:135";
                };
                readonly parameters: {
                    readonly id: 24518;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24513;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "5221:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24587;
                        readonly src: "5213:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24512;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5213:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24515;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "5251:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24587;
                        readonly src: "5243:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24514;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5243:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24517;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24587;
                        readonly src: "5273:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24516;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5273:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5203:100:135";
                };
                readonly returnParameters: {
                    readonly id: 24522;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24521;
                        readonly mutability: "mutable";
                        readonly name: "amountWithdrawn";
                        readonly nameLocation: "5339:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24587;
                        readonly src: "5331:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24520;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "5331:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "5330:25:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24660;
                readonly nodeType: "FunctionDefinition";
                readonly src: "6405:923:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24659;
                    readonly nodeType: "Block";
                    readonly src: "6552:776:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24605;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24598;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24590;
                                readonly src: "6674:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly condition: {
                                    readonly commonType: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                    readonly id: 24601;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftExpression: {
                                        readonly id: 24599;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24590;
                                        readonly src: "6689:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "BinaryOperation";
                                    readonly operator: ">";
                                    readonly rightExpression: {
                                        readonly id: 24600;
                                        readonly name: "totalShares";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24282;
                                        readonly src: "6704:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "6689:26:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly falseExpression: {
                                    readonly id: 24603;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24590;
                                    readonly src: "6732:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24604;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "Conditional";
                                readonly src: "6689:55:135";
                                readonly trueExpression: {
                                    readonly id: 24602;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24282;
                                    readonly src: "6718:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6674:70:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24606;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6674:70:135";
                    }, {
                        readonly assignments: readonly [24608];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24608;
                            readonly mutability: "mutable";
                            readonly name: "withdrawValue";
                            readonly nameLocation: "6803:13:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24659;
                            readonly src: "6795:21:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24607;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6795:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24612;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly id: 24610;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24590;
                                readonly src: "6834:12:135";
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
                                readonly id: 24609;
                                readonly name: "_convertToBase";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24734];
                                readonly referencedDeclaration: 24734;
                                readonly src: "6819:14:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24611;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "6819:28:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6795:52:135";
                    }, {
                        readonly expression: {
                            readonly id: 24615;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24613;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24282;
                                readonly src: "6936:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "-=";
                            readonly rightHandSide: {
                                readonly id: 24614;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24590;
                                readonly src: "6951:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "6936:27:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24616;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "6936:27:135";
                    }, {
                        readonly assignments: readonly [24618];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24618;
                            readonly mutability: "mutable";
                            readonly name: "success";
                            readonly nameLocation: "6978:7:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24659;
                            readonly src: "6973:12:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly typeName: {
                                readonly id: 24617;
                                readonly name: "bool";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "6973:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24619;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "6973:12:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24625;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24622;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "7007:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24621;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "6999:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24620;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "6999:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24623;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "6999:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24624;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "7022:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "6999:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24648;
                            readonly nodeType: "Block";
                            readonly src: "7156:83:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24646;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24640;
                                        readonly name: "success";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24618;
                                        readonly src: "7170:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly id: 24643;
                                            readonly name: "_destination";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24592;
                                            readonly src: "7200:12:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly id: 24644;
                                            readonly name: "withdrawValue";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24608;
                                            readonly src: "7214:13:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly id: 24641;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "7180:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24642;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "7191:8:135";
                                            readonly memberName: "transfer";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9755;
                                            readonly src: "7180:19:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$";
                                                readonly typeString: "function (address,uint256) external returns (bool)";
                                            };
                                        };
                                        readonly id: 24645;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7180:48:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_bool";
                                            readonly typeString: "bool";
                                        };
                                    };
                                    readonly src: "7170:58:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_bool";
                                        readonly typeString: "bool";
                                    };
                                };
                                readonly id: 24647;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7170:58:135";
                            }];
                        };
                        readonly id: 24649;
                        readonly nodeType: "IfStatement";
                        readonly src: "6995:244:135";
                        readonly trueBody: {
                            readonly id: 24639;
                            readonly nodeType: "Block";
                            readonly src: "7027:123:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24637;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly components: readonly [{
                                            readonly id: 24626;
                                            readonly name: "success";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24618;
                                            readonly src: "7042:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_bool";
                                                readonly typeString: "bool";
                                            };
                                        }, null];
                                        readonly id: 24627;
                                        readonly isConstant: false;
                                        readonly isInlineArray: false;
                                        readonly isLValue: true;
                                        readonly isPure: false;
                                        readonly lValueRequested: true;
                                        readonly nodeType: "TupleExpression";
                                        readonly src: "7041:11:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$__$";
                                            readonly typeString: "tuple(bool,)";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly hexValue: "";
                                            readonly id: 24635;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly kind: "string";
                                            readonly lValueRequested: false;
                                            readonly nodeType: "Literal";
                                            readonly src: "7123:2:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            };
                                            readonly value: "";
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                readonly typeString: "literal_string \"\"";
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470";
                                                    readonly typeString: "literal_string \"\"";
                                                }];
                                                readonly expression: {
                                                    readonly arguments: readonly [{
                                                        readonly id: 24630;
                                                        readonly name: "_destination";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 24592;
                                                        readonly src: "7063:12:135";
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
                                                        readonly id: 24629;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "7055:8:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_payable_$";
                                                            readonly typeString: "type(address payable)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 24628;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "7055:8:135";
                                                            readonly stateMutability: "payable";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24631;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "7055:21:135";
                                                    readonly tryCall: false;
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_address_payable";
                                                        readonly typeString: "address payable";
                                                    };
                                                };
                                                readonly id: 24632;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly memberLocation: "7077:4:135";
                                                readonly memberName: "call";
                                                readonly nodeType: "MemberAccess";
                                                readonly src: "7055:26:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$";
                                                    readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                                };
                                            };
                                            readonly id: 24634;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly names: readonly ["value"];
                                            readonly nodeType: "FunctionCallOptions";
                                            readonly options: readonly [{
                                                readonly id: 24633;
                                                readonly name: "withdrawValue";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 24608;
                                                readonly src: "7090:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_uint256";
                                                    readonly typeString: "uint256";
                                                };
                                            }];
                                            readonly src: "7055:50:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_barecall_payable$_t_bytes_memory_ptr_$returns$_t_bool_$_t_bytes_memory_ptr_$value";
                                                readonly typeString: "function (bytes memory) payable returns (bool,bytes memory)";
                                            };
                                        };
                                        readonly id: 24636;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "7055:84:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$_t_bool_$_t_bytes_memory_ptr_$";
                                            readonly typeString: "tuple(bool,bytes memory)";
                                        };
                                    };
                                    readonly src: "7041:98:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24638;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "7041:98:135";
                            }];
                        };
                    }, {
                        readonly condition: {
                            readonly id: 24651;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "UnaryOperation";
                            readonly operator: "!";
                            readonly prefix: true;
                            readonly src: "7252:8:135";
                            readonly subExpression: {
                                readonly id: 24650;
                                readonly name: "success";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24618;
                                readonly src: "7253:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24658;
                        readonly nodeType: "IfStatement";
                        readonly src: "7248:74:135";
                        readonly trueBody: {
                            readonly id: 24657;
                            readonly nodeType: "Block";
                            readonly src: "7262:60:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24652;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10506;
                                            readonly src: "7283:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24654;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7295:14:135";
                                        readonly memberName: "TransferFailed";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10451;
                                        readonly src: "7283:26:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24655;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7283:28:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24656;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7276:35:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12896];
                readonly documentation: {
                    readonly id: 24588;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "6169:231:135";
                    readonly text: "@dev Process a withdrawal in vault shares and send the proceeds to the\n      destination.\n @param _shareAmount The amount of vault shares to withdraw.\n @param _destination The destination of the withdrawal.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_withdrawWithShares";
                readonly nameLocation: "6414:19:135";
                readonly overrides: {
                    readonly id: 24596;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "6543:8:135";
                };
                readonly parameters: {
                    readonly id: 24595;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24590;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "6451:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24660;
                        readonly src: "6443:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24589;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6443:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24592;
                        readonly mutability: "mutable";
                        readonly name: "_destination";
                        readonly nameLocation: "6481:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24660;
                        readonly src: "6473:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                        readonly typeName: {
                            readonly id: 24591;
                            readonly name: "address";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6473:7:135";
                            readonly stateMutability: "nonpayable";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24594;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24660;
                        readonly src: "6503:14:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "calldata";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_bytes_calldata_ptr";
                            readonly typeString: "bytes";
                        };
                        readonly typeName: {
                            readonly id: 24593;
                            readonly name: "bytes";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "6503:5:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bytes_storage_ptr";
                                readonly typeString: "bytes";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "6433:100:135";
                };
                readonly returnParameters: {
                    readonly id: 24597;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "6552:0:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24683;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7513:174:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24682;
                    readonly nodeType: "Block";
                    readonly src: "7566:121:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                            readonly id: 24674;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                                readonly id: 24669;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly arguments: readonly [{
                                        readonly id: 24666;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17691;
                                        readonly src: "7588:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                            readonly typeString: "contract IERC20";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                            readonly typeString: "contract IERC20";
                                        }];
                                        readonly id: 24665;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "7580:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 24664;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "7580:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 24667;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7580:19:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly id: 24668;
                                    readonly name: "ETH";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 18174;
                                    readonly src: "7603:3:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_address";
                                        readonly typeString: "address";
                                    };
                                };
                                readonly src: "7580:26:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "&&";
                            readonly rightExpression: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 24673;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly expression: {
                                        readonly id: 24670;
                                        readonly name: "msg";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -15;
                                        readonly src: "7610:3:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_message";
                                            readonly typeString: "msg";
                                        };
                                    };
                                    readonly id: 24671;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "7614:5:135";
                                    readonly memberName: "value";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "7610:9:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: ">";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24672;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "7622:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "7610:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly src: "7580:43:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly id: 24681;
                        readonly nodeType: "IfStatement";
                        readonly src: "7576:105:135";
                        readonly trueBody: {
                            readonly id: 24680;
                            readonly nodeType: "Block";
                            readonly src: "7625:56:135";
                            readonly statements: readonly [{
                                readonly errorCall: {
                                    readonly arguments: readonly [];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [];
                                        readonly expression: {
                                            readonly id: 24675;
                                            readonly name: "IHyperdrive";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 10506;
                                            readonly src: "7646:11:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_contract$_IHyperdrive_$10506_$";
                                                readonly typeString: "type(contract IHyperdrive)";
                                            };
                                        };
                                        readonly id: 24677;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "7658:10:135";
                                        readonly memberName: "NotPayable";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 10425;
                                        readonly src: "7646:22:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_error_pure$__$returns$__$";
                                            readonly typeString: "function () pure";
                                        };
                                    };
                                    readonly id: 24678;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "7646:24:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24679;
                                readonly nodeType: "RevertStatement";
                                readonly src: "7639:31:135";
                            }];
                        };
                    }];
                };
                readonly baseFunctions: readonly [12900];
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_checkMessageValue";
                readonly nameLocation: "7522:18:135";
                readonly overrides: {
                    readonly id: 24662;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7557:8:135";
                };
                readonly parameters: {
                    readonly id: 24661;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7540:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24663;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "7566:0:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24734;
                readonly nodeType: "FunctionDefinition";
                readonly src: "7848:460:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24733;
                    readonly nodeType: "Block";
                    readonly src: "7949:359:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24693];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24693;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8027:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24733;
                            readonly src: "8019:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24692;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8019:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24694;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8019:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24700;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24697;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "8055:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24696;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8047:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24695;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8047:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24698;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8047:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24699;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "8070:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8047:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24720;
                            readonly nodeType: "Block";
                            readonly src: "8136:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24718;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24710;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24693;
                                        readonly src: "8150:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24715;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8188:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24714;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8180:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24713;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8180:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24716;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8180:13:135";
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
                                            readonly expression: {
                                                readonly id: 24711;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "8159:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24712;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8170:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9809;
                                            readonly src: "8159:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24717;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8159:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8150:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24719;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8150:44:135";
                            }];
                        };
                        readonly id: 24721;
                        readonly nodeType: "IfStatement";
                        readonly src: "8043:162:135";
                        readonly trueBody: {
                            readonly id: 24709;
                            readonly nodeType: "Block";
                            readonly src: "8075:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24707;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24701;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24693;
                                        readonly src: "8089:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24704;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8106:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24703;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8098:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24702;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8098:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24705;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8098:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24706;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8112:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8098:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8089:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24708;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8089:30:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                                readonly id: 24724;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 24722;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24282;
                                    readonly src: "8234:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "!=";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24723;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "8249:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "8234:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly falseExpression: {
                                readonly hexValue: "30";
                                readonly id: 24730;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "8300:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly id: 24731;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "Conditional";
                            readonly src: "8234:67:135";
                            readonly trueExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24727;
                                    readonly name: "assets";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24693;
                                    readonly src: "8277:6:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 24728;
                                    readonly name: "totalShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24282;
                                    readonly src: "8285:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly expression: {
                                        readonly id: 24725;
                                        readonly name: "_shareAmount";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24686;
                                        readonly src: "8253:12:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly id: 24726;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "8266:10:135";
                                    readonly memberName: "mulDivDown";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 18230;
                                    readonly src: "8253:23:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                    };
                                };
                                readonly id: 24729;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8253:44:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24691;
                        readonly id: 24732;
                        readonly nodeType: "Return";
                        readonly src: "8215:86:135";
                    }];
                };
                readonly baseFunctions: readonly [12930];
                readonly documentation: {
                    readonly id: 24684;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "7693:150:135";
                    readonly text: "@dev Convert an amount of vault shares to an amount of base.\n @param _shareAmount The vault shares amount.\n @return The base amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToBase";
                readonly nameLocation: "7857:14:135";
                readonly overrides: {
                    readonly id: 24688;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "7922:8:135";
                };
                readonly parameters: {
                    readonly id: 24687;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24686;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "7889:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24734;
                        readonly src: "7881:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24685;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7881:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7871:36:135";
                };
                readonly returnParameters: {
                    readonly id: 24691;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24690;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24734;
                        readonly src: "7940:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24689;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "7940:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "7939:9:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24780;
                readonly nodeType: "FunctionDefinition";
                readonly src: "8468:425:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24779;
                    readonly nodeType: "Block";
                    readonly src: "8570:323:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [24744];
                        readonly declarations: readonly [{
                            readonly constant: false;
                            readonly id: 24744;
                            readonly mutability: "mutable";
                            readonly name: "assets";
                            readonly nameLocation: "8648:6:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24779;
                            readonly src: "8640:14:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                            readonly typeName: {
                                readonly id: 24743;
                                readonly name: "uint256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "8640:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24745;
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "8640:14:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_address";
                                readonly typeString: "address";
                            };
                            readonly id: 24751;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly arguments: readonly [{
                                    readonly id: 24748;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "8676:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    }];
                                    readonly id: 24747;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "8668:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24746;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "8668:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24749;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "8668:19:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: "==";
                            readonly rightExpression: {
                                readonly id: 24750;
                                readonly name: "ETH";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 18174;
                                readonly src: "8691:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_address";
                                    readonly typeString: "address";
                                };
                            };
                            readonly src: "8668:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly id: 24771;
                            readonly nodeType: "Block";
                            readonly src: "8757:69:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24769;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24761;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24744;
                                        readonly src: "8771:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24766;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8809:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24765;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8801:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24764;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8801:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24767;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8801:13:135";
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
                                            readonly expression: {
                                                readonly id: 24762;
                                                readonly name: "_baseToken";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 17691;
                                                readonly src: "8780:10:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                    readonly typeString: "contract IERC20";
                                                };
                                            };
                                            readonly id: 24763;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "8791:9:135";
                                            readonly memberName: "balanceOf";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 9809;
                                            readonly src: "8780:20:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                                readonly typeString: "function (address) view external returns (uint256)";
                                            };
                                        };
                                        readonly id: 24768;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "8780:35:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8771:44:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24770;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8771:44:135";
                            }];
                        };
                        readonly id: 24772;
                        readonly nodeType: "IfStatement";
                        readonly src: "8664:162:135";
                        readonly trueBody: {
                            readonly id: 24760;
                            readonly nodeType: "Block";
                            readonly src: "8696:55:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly id: 24758;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly leftHandSide: {
                                        readonly id: 24752;
                                        readonly name: "assets";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 24744;
                                        readonly src: "8710:6:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly nodeType: "Assignment";
                                    readonly operator: "=";
                                    readonly rightHandSide: {
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly id: 24755;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "8727:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                                    readonly typeString: "contract MockHyperdriveBase";
                                                }];
                                                readonly id: 24754;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "8719:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24753;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "8719:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24756;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "8719:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        };
                                        readonly id: 24757;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "8733:7:135";
                                        readonly memberName: "balance";
                                        readonly nodeType: "MemberAccess";
                                        readonly src: "8719:21:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    };
                                    readonly src: "8710:30:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24759;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "8710:30:135";
                            }];
                        };
                    }, {
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 24775;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24282;
                                readonly src: "8866:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24776;
                                readonly name: "assets";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24744;
                                readonly src: "8879:6:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24773;
                                    readonly name: "_baseAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24737;
                                    readonly src: "8843:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                };
                                readonly id: 24774;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "8855:10:135";
                                readonly memberName: "mulDivDown";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 18230;
                                readonly src: "8843:22:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256,uint256) pure returns (uint256)";
                                };
                            };
                            readonly id: 24777;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "8843:43:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24742;
                        readonly id: 24778;
                        readonly nodeType: "Return";
                        readonly src: "8836:50:135";
                    }];
                };
                readonly baseFunctions: readonly [12938];
                readonly documentation: {
                    readonly id: 24735;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8314:149:135";
                    readonly text: "@dev Convert an amount of base to an amount of vault shares.\n @param _baseAmount The base amount.\n @return The vault shares amount.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_convertToShares";
                readonly nameLocation: "8477:16:135";
                readonly overrides: {
                    readonly id: 24739;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "8543:8:135";
                };
                readonly parameters: {
                    readonly id: 24738;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24737;
                        readonly mutability: "mutable";
                        readonly name: "_baseAmount";
                        readonly nameLocation: "8511:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24780;
                        readonly src: "8503:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24736;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8503:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8493:35:135";
                };
                readonly returnParameters: {
                    readonly id: 24742;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24741;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24780;
                        readonly src: "8561:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24740;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "8561:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "8560:9:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24796;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9013:122:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24795;
                    readonly nodeType: "Block";
                    readonly src: "9076:59:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 24791;
                                    readonly name: "this";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: -28;
                                    readonly src: "9122:4:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveBase_$24810";
                                        readonly typeString: "contract MockHyperdriveBase";
                                    }];
                                    readonly id: 24790;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly nodeType: "ElementaryTypeNameExpression";
                                    readonly src: "9114:7:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_address_$";
                                        readonly typeString: "type(address)";
                                    };
                                    readonly typeName: {
                                        readonly id: 24789;
                                        readonly name: "address";
                                        readonly nodeType: "ElementaryTypeName";
                                        readonly src: "9114:7:135";
                                        readonly typeDescriptions: {};
                                    };
                                };
                                readonly id: 24792;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "typeConversion";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9114:13:135";
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
                                readonly expression: {
                                    readonly id: 24787;
                                    readonly name: "_baseToken";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17691;
                                    readonly src: "9093:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                        readonly typeString: "contract IERC20";
                                    };
                                };
                                readonly id: 24788;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "9104:9:135";
                                readonly memberName: "balanceOf";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 9809;
                                readonly src: "9093:20:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                    readonly typeString: "function (address) view external returns (uint256)";
                                };
                            };
                            readonly id: 24793;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9093:35:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24786;
                        readonly id: 24794;
                        readonly nodeType: "Return";
                        readonly src: "9086:42:135";
                    }];
                };
                readonly baseFunctions: readonly [12944];
                readonly documentation: {
                    readonly id: 24781;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "8899:109:135";
                    readonly text: "@dev Gets the total amount of base held by the pool.\n @return baseAmount The total amount of base.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalBase";
                readonly nameLocation: "9022:10:135";
                readonly overrides: {
                    readonly id: 24783;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9049:8:135";
                };
                readonly parameters: {
                    readonly id: 24782;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9032:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24786;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24785;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24796;
                        readonly src: "9067:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24784;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9067:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9066:9:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }, {
                readonly id: 24809;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9293:167:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24808;
                    readonly nodeType: "Block";
                    readonly src: "9406:54:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [];
                                readonly expression: {
                                    readonly argumentTypes: readonly [];
                                    readonly id: 24804;
                                    readonly name: "_totalBase";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [24796];
                                    readonly referencedDeclaration: 24796;
                                    readonly src: "9440:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                        readonly typeString: "function () view returns (uint256)";
                                    };
                                };
                                readonly id: 24805;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "9440:12:135";
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
                                readonly id: 24803;
                                readonly name: "_convertToShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [24780];
                                readonly referencedDeclaration: 24780;
                                readonly src: "9423:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 24806;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9423:30:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 24802;
                        readonly id: 24807;
                        readonly nodeType: "Return";
                        readonly src: "9416:37:135";
                    }];
                };
                readonly baseFunctions: readonly [12950];
                readonly documentation: {
                    readonly id: 24797;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9141:147:135";
                    readonly text: "@dev Gets the total amount of shares held by the pool in the yield\n      source.\n @return shareAmount The total amount of shares.";
                };
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "_totalShares";
                readonly nameLocation: "9302:12:135";
                readonly overrides: {
                    readonly id: 24799;
                    readonly nodeType: "OverrideSpecifier";
                    readonly overrides: readonly [];
                    readonly src: "9355:8:135";
                };
                readonly parameters: {
                    readonly id: 24798;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9314:2:135";
                };
                readonly returnParameters: {
                    readonly id: 24802;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24801;
                        readonly mutability: "mutable";
                        readonly name: "shareAmount";
                        readonly nameLocation: "9389:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24809;
                        readonly src: "9381:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24800;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "9381:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9380:21:135";
                };
                readonly scope: 24810;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "internal";
            }];
            readonly abstract: true;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24276;
                    readonly name: "HyperdriveBase";
                    readonly nameLocations: readonly ["1669:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 13835;
                    readonly src: "1669:14:135";
                };
                readonly id: 24277;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "1669:14:135";
            }];
            readonly canonicalName: "MockHyperdriveBase";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: false;
            readonly linearizedBaseContracts: readonly [24810, 13835, 17893, 71565, 11037, 11609];
            readonly name: "MockHyperdriveBase";
            readonly nameLocation: "1647:18:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }, {
            readonly id: 25139;
            readonly nodeType: "ContractDefinition";
            readonly src: "9464:4336:135";
            readonly nodes: readonly [{
                readonly id: 24817;
                readonly nodeType: "UsingForDirective";
                readonly src: "9528:33:135";
                readonly nodes: readonly [];
                readonly global: false;
                readonly libraryName: {
                    readonly id: 24815;
                    readonly name: "FixedPointMath";
                    readonly nameLocations: readonly ["9534:14:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 18968;
                    readonly src: "9534:14:135";
                };
                readonly typeName: {
                    readonly id: 24816;
                    readonly name: "uint256";
                    readonly nodeType: "ElementaryTypeName";
                    readonly src: "9553:7:135";
                    readonly typeDescriptions: {
                        readonly typeIdentifier: "t_uint256";
                        readonly typeString: "uint256";
                    };
                };
            }, {
                readonly id: 24867;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9567:406:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24866;
                    readonly nodeType: "Block";
                    readonly src: "9971:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 24823;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 24820;
                        readonly src: "9664:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24829;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24820;
                                readonly src: "9719:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24828;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9693:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget0_$25168_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget0)";
                                };
                                readonly typeName: {
                                    readonly id: 24827;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24826;
                                        readonly name: "MockHyperdriveTarget0";
                                        readonly nameLocations: readonly ["9697:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25168;
                                        readonly src: "9697:21:135";
                                    };
                                    readonly referencedDeclaration: 25168;
                                    readonly src: "9697:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25168";
                                        readonly typeString: "contract MockHyperdriveTarget0";
                                    };
                                };
                            };
                            readonly id: 24830;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9693:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25168";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget0_$25168";
                                readonly typeString: "contract MockHyperdriveTarget0";
                            }];
                            readonly id: 24825;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9685:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24824;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9685:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24831;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9685:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24837;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24820;
                                readonly src: "9776:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24836;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9750:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget1_$25183_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget1)";
                                };
                                readonly typeName: {
                                    readonly id: 24835;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24834;
                                        readonly name: "MockHyperdriveTarget1";
                                        readonly nameLocations: readonly ["9754:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25183;
                                        readonly src: "9754:21:135";
                                    };
                                    readonly referencedDeclaration: 25183;
                                    readonly src: "9754:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25183";
                                        readonly typeString: "contract MockHyperdriveTarget1";
                                    };
                                };
                            };
                            readonly id: 24838;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9750:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25183";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget1_$25183";
                                readonly typeString: "contract MockHyperdriveTarget1";
                            }];
                            readonly id: 24833;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9742:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24832;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9742:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24839;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9742:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24845;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24820;
                                readonly src: "9833:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24844;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9807:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget2_$25198_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget2)";
                                };
                                readonly typeName: {
                                    readonly id: 24843;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24842;
                                        readonly name: "MockHyperdriveTarget2";
                                        readonly nameLocations: readonly ["9811:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25198;
                                        readonly src: "9811:21:135";
                                    };
                                    readonly referencedDeclaration: 25198;
                                    readonly src: "9811:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25198";
                                        readonly typeString: "contract MockHyperdriveTarget2";
                                    };
                                };
                            };
                            readonly id: 24846;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9807:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25198";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget2_$25198";
                                readonly typeString: "contract MockHyperdriveTarget2";
                            }];
                            readonly id: 24841;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9799:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24840;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9799:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24847;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9799:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24853;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24820;
                                readonly src: "9890:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24852;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9864:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget3_$25213_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget3)";
                                };
                                readonly typeName: {
                                    readonly id: 24851;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24850;
                                        readonly name: "MockHyperdriveTarget3";
                                        readonly nameLocations: readonly ["9868:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25213;
                                        readonly src: "9868:21:135";
                                    };
                                    readonly referencedDeclaration: 25213;
                                    readonly src: "9868:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25213";
                                        readonly typeString: "contract MockHyperdriveTarget3";
                                    };
                                };
                            };
                            readonly id: 24854;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9864:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25213";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget3_$25213";
                                readonly typeString: "contract MockHyperdriveTarget3";
                            }];
                            readonly id: 24849;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9856:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24848;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9856:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24855;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9856:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }, {
                        readonly arguments: readonly [{
                            readonly arguments: readonly [{
                                readonly id: 24861;
                                readonly name: "_config";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24820;
                                readonly src: "9947:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.PoolConfig memory";
                                }];
                                readonly id: 24860;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly nodeType: "NewExpression";
                                readonly src: "9921:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_creation_nonpayable$_t_struct$_PoolConfig_$10300_memory_ptr_$returns$_t_contract$_MockHyperdriveTarget4_$25228_$";
                                    readonly typeString: "function (struct IHyperdrive.PoolConfig memory) returns (contract MockHyperdriveTarget4)";
                                };
                                readonly typeName: {
                                    readonly id: 24859;
                                    readonly nodeType: "UserDefinedTypeName";
                                    readonly pathNode: {
                                        readonly id: 24858;
                                        readonly name: "MockHyperdriveTarget4";
                                        readonly nameLocations: readonly ["9925:21:135"];
                                        readonly nodeType: "IdentifierPath";
                                        readonly referencedDeclaration: 25228;
                                        readonly src: "9925:21:135";
                                    };
                                    readonly referencedDeclaration: 25228;
                                    readonly src: "9925:21:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25228";
                                        readonly typeString: "contract MockHyperdriveTarget4";
                                    };
                                };
                            };
                            readonly id: 24862;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "9921:34:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25228";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            };
                        }];
                        readonly expression: {
                            readonly argumentTypes: readonly [{
                                readonly typeIdentifier: "t_contract$_MockHyperdriveTarget4_$25228";
                                readonly typeString: "contract MockHyperdriveTarget4";
                            }];
                            readonly id: 24857;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: true;
                            readonly lValueRequested: false;
                            readonly nodeType: "ElementaryTypeNameExpression";
                            readonly src: "9913:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_type$_t_address_$";
                                readonly typeString: "type(address)";
                            };
                            readonly typeName: {
                                readonly id: 24856;
                                readonly name: "address";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "9913:7:135";
                                readonly typeDescriptions: {};
                            };
                        };
                        readonly id: 24863;
                        readonly isConstant: false;
                        readonly isLValue: false;
                        readonly isPure: false;
                        readonly kind: "typeConversion";
                        readonly lValueRequested: false;
                        readonly nameLocations: readonly [];
                        readonly names: readonly [];
                        readonly nodeType: "FunctionCall";
                        readonly src: "9913:43:135";
                        readonly tryCall: false;
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_address";
                            readonly typeString: "address";
                        };
                    }];
                    readonly id: 24864;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 24822;
                        readonly name: "Hyperdrive";
                        readonly nameLocations: readonly ["9640:10:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 4427;
                        readonly src: "9640:10:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "9640:326:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 24821;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24820;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "9618:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24867;
                        readonly src: "9588:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 24819;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24818;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["9588:11:135", "9600:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "9588:22:135";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "9588:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "9578:53:135";
                };
                readonly returnParameters: {
                    readonly id: 24865;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "9971:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 24879;
                readonly nodeType: "FunctionDefinition";
                readonly src: "9998:138:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24878;
                    readonly nodeType: "Block";
                    readonly src: "10091:45:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24876;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24874;
                                readonly name: "_marketState";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 17729;
                                readonly src: "10101:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10187_storage";
                                    readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24875;
                                readonly name: "_marketState_";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24871;
                                readonly src: "10116:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_struct$_MarketState_$10187_memory_ptr";
                                    readonly typeString: "struct IHyperdrive.MarketState memory";
                                };
                            };
                            readonly src: "10101:28:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10187_storage";
                                readonly typeString: "struct IHyperdrive.MarketState storage ref";
                            };
                        };
                        readonly id: 24877;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10101:28:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 24868;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "9979:14:135";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "f45cf2e0";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setMarketState";
                readonly nameLocation: "10007:14:135";
                readonly parameters: {
                    readonly id: 24872;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24871;
                        readonly mutability: "mutable";
                        readonly name: "_marketState_";
                        readonly nameLocation: "10062:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24879;
                        readonly src: "10031:44:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_MarketState_$10187_memory_ptr";
                            readonly typeString: "struct IHyperdrive.MarketState";
                        };
                        readonly typeName: {
                            readonly id: 24870;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 24869;
                                readonly name: "IHyperdrive.MarketState";
                                readonly nameLocations: readonly ["10031:11:135", "10043:11:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10187;
                                readonly src: "10031:23:135";
                            };
                            readonly referencedDeclaration: 10187;
                            readonly src: "10031:23:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_MarketState_$10187_storage_ptr";
                                readonly typeString: "struct IHyperdrive.MarketState";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10021:60:135";
                };
                readonly returnParameters: {
                    readonly id: 24873;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10091:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24889;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10142:98:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24888;
                    readonly nodeType: "Block";
                    readonly src: "10197:43:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24886;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly id: 24884;
                                readonly name: "totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24282;
                                readonly src: "10207:11:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 24885;
                                readonly name: "_totalShares";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24881;
                                readonly src: "10221:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            };
                            readonly src: "10207:26:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly id: 24887;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "10207:26:135";
                    }];
                };
                readonly functionSelector: "a77384c1";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setTotalShares";
                readonly nameLocation: "10151:14:135";
                readonly parameters: {
                    readonly id: 24882;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24881;
                        readonly mutability: "mutable";
                        readonly name: "_totalShares";
                        readonly nameLocation: "10174:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24889;
                        readonly src: "10166:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24880;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10166:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10165:22:135";
                };
                readonly returnParameters: {
                    readonly id: 24883;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10197:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24957;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10372:566:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24956;
                    readonly nodeType: "Block";
                    readonly src: "10423:515:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly assignments: readonly [null, 24897];
                        readonly declarations: readonly [null, {
                            readonly constant: false;
                            readonly id: 24897;
                            readonly mutability: "mutable";
                            readonly name: "interest";
                            readonly nameLocation: "10443:8:135";
                            readonly nodeType: "VariableDeclaration";
                            readonly scope: 24956;
                            readonly src: "10436:15:135";
                            readonly stateVariable: false;
                            readonly storageLocation: "default";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly typeName: {
                                readonly id: 24896;
                                readonly name: "int256";
                                readonly nodeType: "ElementaryTypeName";
                                readonly src: "10436:6:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly visibility: "internal";
                        }];
                        readonly id: 24910;
                        readonly initialValue: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly arguments: readonly [{
                                        readonly id: 24904;
                                        readonly name: "this";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -28;
                                        readonly src: "10539:4:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25139";
                                            readonly typeString: "contract MockHyperdrive";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_contract$_MockHyperdrive_$25139";
                                            readonly typeString: "contract MockHyperdrive";
                                        }];
                                        readonly id: 24903;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: true;
                                        readonly lValueRequested: false;
                                        readonly nodeType: "ElementaryTypeNameExpression";
                                        readonly src: "10531:7:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_type$_t_address_$";
                                            readonly typeString: "type(address)";
                                        };
                                        readonly typeName: {
                                            readonly id: 24902;
                                            readonly name: "address";
                                            readonly nodeType: "ElementaryTypeName";
                                            readonly src: "10531:7:135";
                                            readonly typeDescriptions: {};
                                        };
                                    };
                                    readonly id: 24905;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "typeConversion";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10531:13:135";
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
                                    readonly expression: {
                                        readonly id: 24900;
                                        readonly name: "_baseToken";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: 17691;
                                        readonly src: "10510:10:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                            readonly typeString: "contract IERC20";
                                        };
                                    };
                                    readonly id: 24901;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "10521:9:135";
                                    readonly memberName: "balanceOf";
                                    readonly nodeType: "MemberAccess";
                                    readonly referencedDeclaration: 9809;
                                    readonly src: "10510:20:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_external_view$_t_address_$returns$_t_uint256_$";
                                        readonly typeString: "function (address) view external returns (uint256)";
                                    };
                                };
                                readonly id: 24906;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "10510:35:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24907;
                                readonly name: "apr";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24893;
                                readonly src: "10559:3:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }, {
                                readonly id: 24908;
                                readonly name: "time";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24891;
                                readonly src: "10576:4:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly expression: {
                                    readonly id: 24898;
                                    readonly name: "HyperdriveUtils";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 157393;
                                    readonly src: "10455:15:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_type$_t_contract$_HyperdriveUtils_$157393_$";
                                        readonly typeString: "type(library HyperdriveUtils)";
                                    };
                                };
                                readonly id: 24899;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly memberLocation: "10471:25:135";
                                readonly memberName: "calculateCompoundInterest";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 155221;
                                readonly src: "10455:41:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_uint256_$_t_int256_$_t_uint256_$returns$_t_uint256_$_t_int256_$";
                                    readonly typeString: "function (uint256,int256,uint256) pure returns (uint256,int256)";
                                };
                            };
                            readonly id: 24909;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "10455:135:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_int256_$";
                                readonly typeString: "tuple(uint256,int256)";
                            };
                        };
                        readonly nodeType: "VariableDeclarationStatement";
                        readonly src: "10433:157:135";
                    }, {
                        readonly condition: {
                            readonly commonType: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                            readonly id: 24913;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftExpression: {
                                readonly id: 24911;
                                readonly name: "interest";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24897;
                                readonly src: "10605:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            };
                            readonly nodeType: "BinaryOperation";
                            readonly operator: ">";
                            readonly rightExpression: {
                                readonly hexValue: "30";
                                readonly id: 24912;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: true;
                                readonly kind: "number";
                                readonly lValueRequested: false;
                                readonly nodeType: "Literal";
                                readonly src: "10616:1:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_rational_0_by_1";
                                    readonly typeString: "int_const 0";
                                };
                                readonly value: "0";
                            };
                            readonly src: "10605:12:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_bool";
                                readonly typeString: "bool";
                            };
                        };
                        readonly falseBody: {
                            readonly condition: {
                                readonly commonType: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                                readonly id: 24934;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly lValueRequested: false;
                                readonly leftExpression: {
                                    readonly id: 24932;
                                    readonly name: "interest";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24897;
                                    readonly src: "10773:8:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_int256";
                                        readonly typeString: "int256";
                                    };
                                };
                                readonly nodeType: "BinaryOperation";
                                readonly operator: "<";
                                readonly rightExpression: {
                                    readonly hexValue: "30";
                                    readonly id: 24933;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly kind: "number";
                                    readonly lValueRequested: false;
                                    readonly nodeType: "Literal";
                                    readonly src: "10784:1:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_rational_0_by_1";
                                        readonly typeString: "int_const 0";
                                    };
                                    readonly value: "0";
                                };
                                readonly src: "10773:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bool";
                                    readonly typeString: "bool";
                                };
                            };
                            readonly id: 24954;
                            readonly nodeType: "IfStatement";
                            readonly src: "10769:163:135";
                            readonly trueBody: {
                                readonly id: 24953;
                                readonly nodeType: "Block";
                                readonly src: "10787:145:135";
                                readonly statements: readonly [{
                                    readonly expression: {
                                        readonly arguments: readonly [{
                                            readonly arguments: readonly [{
                                                readonly id: 24944;
                                                readonly name: "this";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: -28;
                                                readonly src: "10866:4:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25139";
                                                    readonly typeString: "contract MockHyperdrive";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_contract$_MockHyperdrive_$25139";
                                                    readonly typeString: "contract MockHyperdrive";
                                                }];
                                                readonly id: 24943;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10858:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_address_$";
                                                    readonly typeString: "type(address)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24942;
                                                    readonly name: "address";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10858:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24945;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10858:13:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            };
                                        }, {
                                            readonly arguments: readonly [{
                                                readonly id: 24949;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "UnaryOperation";
                                                readonly operator: "-";
                                                readonly prefix: true;
                                                readonly src: "10897:9:135";
                                                readonly subExpression: {
                                                    readonly id: 24948;
                                                    readonly name: "interest";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 24897;
                                                    readonly src: "10898:8:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_int256";
                                                        readonly typeString: "int256";
                                                    };
                                                };
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                };
                                            }];
                                            readonly expression: {
                                                readonly argumentTypes: readonly [{
                                                    readonly typeIdentifier: "t_int256";
                                                    readonly typeString: "int256";
                                                }];
                                                readonly id: 24947;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: true;
                                                readonly lValueRequested: false;
                                                readonly nodeType: "ElementaryTypeNameExpression";
                                                readonly src: "10889:7:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_uint256_$";
                                                    readonly typeString: "type(uint256)";
                                                };
                                                readonly typeName: {
                                                    readonly id: 24946;
                                                    readonly name: "uint256";
                                                    readonly nodeType: "ElementaryTypeName";
                                                    readonly src: "10889:7:135";
                                                    readonly typeDescriptions: {};
                                                };
                                            };
                                            readonly id: 24950;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10889:18:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_address";
                                                readonly typeString: "address";
                                            }, {
                                                readonly typeIdentifier: "t_uint256";
                                                readonly typeString: "uint256";
                                            }];
                                            readonly expression: {
                                                readonly arguments: readonly [{
                                                    readonly arguments: readonly [{
                                                        readonly id: 24938;
                                                        readonly name: "_baseToken";
                                                        readonly nodeType: "Identifier";
                                                        readonly overloadedDeclarations: readonly [];
                                                        readonly referencedDeclaration: 17691;
                                                        readonly src: "10823:10:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                            readonly typeString: "contract IERC20";
                                                        };
                                                    }];
                                                    readonly expression: {
                                                        readonly argumentTypes: readonly [{
                                                            readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                            readonly typeString: "contract IERC20";
                                                        }];
                                                        readonly id: 24937;
                                                        readonly isConstant: false;
                                                        readonly isLValue: false;
                                                        readonly isPure: true;
                                                        readonly lValueRequested: false;
                                                        readonly nodeType: "ElementaryTypeNameExpression";
                                                        readonly src: "10815:7:135";
                                                        readonly typeDescriptions: {
                                                            readonly typeIdentifier: "t_type$_t_address_$";
                                                            readonly typeString: "type(address)";
                                                        };
                                                        readonly typeName: {
                                                            readonly id: 24936;
                                                            readonly name: "address";
                                                            readonly nodeType: "ElementaryTypeName";
                                                            readonly src: "10815:7:135";
                                                            readonly typeDescriptions: {};
                                                        };
                                                    };
                                                    readonly id: 24939;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: false;
                                                    readonly kind: "typeConversion";
                                                    readonly lValueRequested: false;
                                                    readonly nameLocations: readonly [];
                                                    readonly names: readonly [];
                                                    readonly nodeType: "FunctionCall";
                                                    readonly src: "10815:19:135";
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
                                                    readonly id: 24935;
                                                    readonly name: "ERC20Mintable";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 23479;
                                                    readonly src: "10801:13:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$23479_$";
                                                        readonly typeString: "type(contract ERC20Mintable)";
                                                    };
                                                };
                                                readonly id: 24940;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10801:34:135";
                                                readonly tryCall: false;
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_contract$_ERC20Mintable_$23479";
                                                    readonly typeString: "contract ERC20Mintable";
                                                };
                                            };
                                            readonly id: 24941;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly lValueRequested: false;
                                            readonly memberLocation: "10836:4:135";
                                            readonly memberName: "burn";
                                            readonly nodeType: "MemberAccess";
                                            readonly referencedDeclaration: 23478;
                                            readonly src: "10801:39:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                                readonly typeString: "function (address,uint256) external";
                                            };
                                        };
                                        readonly id: 24951;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "functionCall";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10801:120:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_tuple$__$";
                                            readonly typeString: "tuple()";
                                        };
                                    };
                                    readonly id: 24952;
                                    readonly nodeType: "ExpressionStatement";
                                    readonly src: "10801:120:135";
                                }];
                            };
                        };
                        readonly id: 24955;
                        readonly nodeType: "IfStatement";
                        readonly src: "10601:331:135";
                        readonly trueBody: {
                            readonly id: 24931;
                            readonly nodeType: "Block";
                            readonly src: "10619:144:135";
                            readonly statements: readonly [{
                                readonly expression: {
                                    readonly arguments: readonly [{
                                        readonly arguments: readonly [{
                                            readonly id: 24923;
                                            readonly name: "this";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: -28;
                                            readonly src: "10698:4:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25139";
                                                readonly typeString: "contract MockHyperdrive";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_contract$_MockHyperdrive_$25139";
                                                readonly typeString: "contract MockHyperdrive";
                                            }];
                                            readonly id: 24922;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10690:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_address_$";
                                                readonly typeString: "type(address)";
                                            };
                                            readonly typeName: {
                                                readonly id: 24921;
                                                readonly name: "address";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10690:7:135";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 24924;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10690:13:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        };
                                    }, {
                                        readonly arguments: readonly [{
                                            readonly id: 24927;
                                            readonly name: "interest";
                                            readonly nodeType: "Identifier";
                                            readonly overloadedDeclarations: readonly [];
                                            readonly referencedDeclaration: 24897;
                                            readonly src: "10729:8:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            };
                                        }];
                                        readonly expression: {
                                            readonly argumentTypes: readonly [{
                                                readonly typeIdentifier: "t_int256";
                                                readonly typeString: "int256";
                                            }];
                                            readonly id: 24926;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: true;
                                            readonly lValueRequested: false;
                                            readonly nodeType: "ElementaryTypeNameExpression";
                                            readonly src: "10721:7:135";
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_type$_t_uint256_$";
                                                readonly typeString: "type(uint256)";
                                            };
                                            readonly typeName: {
                                                readonly id: 24925;
                                                readonly name: "uint256";
                                                readonly nodeType: "ElementaryTypeName";
                                                readonly src: "10721:7:135";
                                                readonly typeDescriptions: {};
                                            };
                                        };
                                        readonly id: 24928;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly kind: "typeConversion";
                                        readonly lValueRequested: false;
                                        readonly nameLocations: readonly [];
                                        readonly names: readonly [];
                                        readonly nodeType: "FunctionCall";
                                        readonly src: "10721:17:135";
                                        readonly tryCall: false;
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        };
                                    }];
                                    readonly expression: {
                                        readonly argumentTypes: readonly [{
                                            readonly typeIdentifier: "t_address";
                                            readonly typeString: "address";
                                        }, {
                                            readonly typeIdentifier: "t_uint256";
                                            readonly typeString: "uint256";
                                        }];
                                        readonly expression: {
                                            readonly arguments: readonly [{
                                                readonly arguments: readonly [{
                                                    readonly id: 24917;
                                                    readonly name: "_baseToken";
                                                    readonly nodeType: "Identifier";
                                                    readonly overloadedDeclarations: readonly [];
                                                    readonly referencedDeclaration: 17691;
                                                    readonly src: "10655:10:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                        readonly typeString: "contract IERC20";
                                                    };
                                                }];
                                                readonly expression: {
                                                    readonly argumentTypes: readonly [{
                                                        readonly typeIdentifier: "t_contract$_IERC20_$9810";
                                                        readonly typeString: "contract IERC20";
                                                    }];
                                                    readonly id: 24916;
                                                    readonly isConstant: false;
                                                    readonly isLValue: false;
                                                    readonly isPure: true;
                                                    readonly lValueRequested: false;
                                                    readonly nodeType: "ElementaryTypeNameExpression";
                                                    readonly src: "10647:7:135";
                                                    readonly typeDescriptions: {
                                                        readonly typeIdentifier: "t_type$_t_address_$";
                                                        readonly typeString: "type(address)";
                                                    };
                                                    readonly typeName: {
                                                        readonly id: 24915;
                                                        readonly name: "address";
                                                        readonly nodeType: "ElementaryTypeName";
                                                        readonly src: "10647:7:135";
                                                        readonly typeDescriptions: {};
                                                    };
                                                };
                                                readonly id: 24918;
                                                readonly isConstant: false;
                                                readonly isLValue: false;
                                                readonly isPure: false;
                                                readonly kind: "typeConversion";
                                                readonly lValueRequested: false;
                                                readonly nameLocations: readonly [];
                                                readonly names: readonly [];
                                                readonly nodeType: "FunctionCall";
                                                readonly src: "10647:19:135";
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
                                                readonly id: 24914;
                                                readonly name: "ERC20Mintable";
                                                readonly nodeType: "Identifier";
                                                readonly overloadedDeclarations: readonly [];
                                                readonly referencedDeclaration: 23479;
                                                readonly src: "10633:13:135";
                                                readonly typeDescriptions: {
                                                    readonly typeIdentifier: "t_type$_t_contract$_ERC20Mintable_$23479_$";
                                                    readonly typeString: "type(contract ERC20Mintable)";
                                                };
                                            };
                                            readonly id: 24919;
                                            readonly isConstant: false;
                                            readonly isLValue: false;
                                            readonly isPure: false;
                                            readonly kind: "typeConversion";
                                            readonly lValueRequested: false;
                                            readonly nameLocations: readonly [];
                                            readonly names: readonly [];
                                            readonly nodeType: "FunctionCall";
                                            readonly src: "10633:34:135";
                                            readonly tryCall: false;
                                            readonly typeDescriptions: {
                                                readonly typeIdentifier: "t_contract$_ERC20Mintable_$23479";
                                                readonly typeString: "contract ERC20Mintable";
                                            };
                                        };
                                        readonly id: 24920;
                                        readonly isConstant: false;
                                        readonly isLValue: false;
                                        readonly isPure: false;
                                        readonly lValueRequested: false;
                                        readonly memberLocation: "10668:4:135";
                                        readonly memberName: "mint";
                                        readonly nodeType: "MemberAccess";
                                        readonly referencedDeclaration: 23449;
                                        readonly src: "10633:39:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_function_external_nonpayable$_t_address_$_t_uint256_$returns$__$";
                                            readonly typeString: "function (address,uint256) external";
                                        };
                                    };
                                    readonly id: 24929;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: false;
                                    readonly kind: "functionCall";
                                    readonly lValueRequested: false;
                                    readonly nameLocations: readonly [];
                                    readonly names: readonly [];
                                    readonly nodeType: "FunctionCall";
                                    readonly src: "10633:119:135";
                                    readonly tryCall: false;
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_tuple$__$";
                                        readonly typeString: "tuple()";
                                    };
                                };
                                readonly id: 24930;
                                readonly nodeType: "ExpressionStatement";
                                readonly src: "10633:119:135";
                            }];
                        };
                    }];
                };
                readonly functionSelector: "68096239";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "accrue";
                readonly nameLocation: "10381:6:135";
                readonly parameters: {
                    readonly id: 24894;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24891;
                        readonly mutability: "mutable";
                        readonly name: "time";
                        readonly nameLocation: "10396:4:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24957;
                        readonly src: "10388:12:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24890;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10388:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24893;
                        readonly mutability: "mutable";
                        readonly name: "apr";
                        readonly nameLocation: "10409:3:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24957;
                        readonly src: "10402:10:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 24892;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10402:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10387:26:135";
                };
                readonly returnParameters: {
                    readonly id: 24895;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "10423:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 24985;
                readonly nodeType: "FunctionDefinition";
                readonly src: "10944:411:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 24984;
                    readonly nodeType: "Block";
                    readonly src: "11144:211:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 24978;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 24970;
                                    readonly name: "curveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24966;
                                    readonly src: "11155:8:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 24971;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24968;
                                    readonly src: "11165:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 24972;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11154:30:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 24974;
                                    readonly name: "_shareAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24959;
                                    readonly src: "11226:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 24975;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24961;
                                    readonly src: "11252:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 24976;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24963;
                                    readonly src: "11276:15:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 24973;
                                    readonly name: "_calculateFeesGivenShares";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13686;
                                    readonly src: "11187:25:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256) view returns (uint256,uint256)";
                                    };
                                };
                                readonly id: 24977;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11187:114:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256)";
                                };
                            };
                            readonly src: "11154:147:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 24979;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11154:147:135";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 24980;
                                readonly name: "curveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24966;
                                readonly src: "11319:8:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 24981;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24968;
                                readonly src: "11329:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 24982;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "11318:30:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 24969;
                        readonly id: 24983;
                        readonly nodeType: "Return";
                        readonly src: "11311:37:135";
                    }];
                };
                readonly functionSelector: "71f88b7c";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenShares";
                readonly nameLocation: "10953:24:135";
                readonly parameters: {
                    readonly id: 24964;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24959;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "10995:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24985;
                        readonly src: "10987:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24958;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "10987:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24961;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11025:10:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24985;
                        readonly src: "11017:18:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24960;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11017:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24963;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11053:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24985;
                        readonly src: "11045:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24962;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11045:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "10977:97:135";
                };
                readonly returnParameters: {
                    readonly id: 24969;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24966;
                        readonly mutability: "mutable";
                        readonly name: "curveFee";
                        readonly nameLocation: "11106:8:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24985;
                        readonly src: "11098:16:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24965;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11098:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24968;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11124:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 24985;
                        readonly src: "11116:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24967;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11116:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11097:46:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25024;
                readonly nodeType: "FunctionDefinition";
                readonly src: "11361:822:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25023;
                    readonly nodeType: "Block";
                    readonly src: "11742:441:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25015;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly components: readonly [{
                                    readonly id: 25004;
                                    readonly name: "totalCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24996;
                                    readonly src: "11766:13:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25005;
                                    readonly name: "totalFlatFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24998;
                                    readonly src: "11793:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25006;
                                    readonly name: "governanceCurveFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25000;
                                    readonly src: "11819:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25007;
                                    readonly name: "totalGovernanceFee";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 25002;
                                    readonly src: "11851:18:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly id: 25008;
                                readonly isConstant: false;
                                readonly isInlineArray: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly nodeType: "TupleExpression";
                                readonly src: "11752:127:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly arguments: readonly [{
                                    readonly id: 25010;
                                    readonly name: "_bondAmount";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24987;
                                    readonly src: "11920:11:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25011;
                                    readonly name: "_normalizedTimeRemaining";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24989;
                                    readonly src: "11945:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25012;
                                    readonly name: "_spotPrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24991;
                                    readonly src: "11983:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }, {
                                    readonly id: 25013;
                                    readonly name: "vaultSharePrice";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 24993;
                                    readonly src: "12007:15:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    };
                                }];
                                readonly expression: {
                                    readonly argumentTypes: readonly [{
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }, {
                                        readonly typeIdentifier: "t_uint256";
                                        readonly typeString: "uint256";
                                    }];
                                    readonly id: 25009;
                                    readonly name: "_calculateFeesGivenBonds";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 13756;
                                    readonly src: "11882:24:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                        readonly typeString: "function (uint256,uint256,uint256,uint256) view returns (uint256,uint256,uint256,uint256)";
                                    };
                                };
                                readonly id: 25014;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "11882:150:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                                };
                            };
                            readonly src: "11752:280:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25016;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "11752:280:135";
                    }, {
                        readonly expression: {
                            readonly components: readonly [{
                                readonly id: 25017;
                                readonly name: "totalCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24996;
                                readonly src: "12063:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25018;
                                readonly name: "totalFlatFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 24998;
                                readonly src: "12090:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25019;
                                readonly name: "governanceCurveFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25000;
                                readonly src: "12116:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25020;
                                readonly name: "totalGovernanceFee";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25002;
                                readonly src: "12148:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly id: 25021;
                            readonly isConstant: false;
                            readonly isInlineArray: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly nodeType: "TupleExpression";
                            readonly src: "12049:127:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25003;
                        readonly id: 25022;
                        readonly nodeType: "Return";
                        readonly src: "12042:134:135";
                    }];
                };
                readonly functionSelector: "22d5506b";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateFeesGivenBonds";
                readonly nameLocation: "11370:23:135";
                readonly parameters: {
                    readonly id: 24994;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24987;
                        readonly mutability: "mutable";
                        readonly name: "_bondAmount";
                        readonly nameLocation: "11411:11:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11403:19:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24986;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11403:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24989;
                        readonly mutability: "mutable";
                        readonly name: "_normalizedTimeRemaining";
                        readonly nameLocation: "11440:24:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11432:32:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24988;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11432:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24991;
                        readonly mutability: "mutable";
                        readonly name: "_spotPrice";
                        readonly nameLocation: "11482:10:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11474:18:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24990;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11474:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24993;
                        readonly mutability: "mutable";
                        readonly name: "vaultSharePrice";
                        readonly nameLocation: "11510:15:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11502:23:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24992;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11502:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11393:138:135";
                };
                readonly returnParameters: {
                    readonly id: 25003;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 24996;
                        readonly mutability: "mutable";
                        readonly name: "totalCurveFee";
                        readonly nameLocation: "11600:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11592:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24995;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11592:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 24998;
                        readonly mutability: "mutable";
                        readonly name: "totalFlatFee";
                        readonly nameLocation: "11635:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11627:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24997;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11627:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25000;
                        readonly mutability: "mutable";
                        readonly name: "governanceCurveFee";
                        readonly nameLocation: "11669:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11661:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 24999;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11661:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25002;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "11709:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25024;
                        readonly src: "11701:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25001;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "11701:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "11578:159:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25043;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12232:351:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25042;
                    readonly nodeType: "Block";
                    readonly src: "12509:74:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25038;
                                readonly name: "_shareAmount";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25026;
                                readonly src: "12545:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }, {
                                readonly id: 25039;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25028;
                                readonly src: "12559:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }, {
                                    readonly typeIdentifier: "t_uint256";
                                    readonly typeString: "uint256";
                                }];
                                readonly id: 25037;
                                readonly name: "_calculateOpenLong";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 16059;
                                readonly src: "12526:18:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$_t_uint256_$returns$_t_uint256_$_t_uint256_$_t_uint256_$";
                                    readonly typeString: "function (uint256,uint256) view returns (uint256,uint256,uint256)";
                                };
                            };
                            readonly id: 25040;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12526:50:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$";
                                readonly typeString: "tuple(uint256,uint256,uint256)";
                            };
                        };
                        readonly functionReturnParameters: 25036;
                        readonly id: 25041;
                        readonly nodeType: "Return";
                        readonly src: "12519:57:135";
                    }];
                };
                readonly functionSelector: "9bd33498";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateOpenLong";
                readonly nameLocation: "12241:17:135";
                readonly parameters: {
                    readonly id: 25029;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25026;
                        readonly mutability: "mutable";
                        readonly name: "_shareAmount";
                        readonly nameLocation: "12276:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25043;
                        readonly src: "12268:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25025;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12268:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25028;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "12306:16:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25043;
                        readonly src: "12298:24:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25027;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12298:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12258:70:135";
                };
                readonly returnParameters: {
                    readonly id: 25036;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25031;
                        readonly mutability: "mutable";
                        readonly name: "shareReservesDelta";
                        readonly nameLocation: "12397:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25043;
                        readonly src: "12389:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25030;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12389:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25033;
                        readonly mutability: "mutable";
                        readonly name: "bondReservesDelta";
                        readonly nameLocation: "12437:17:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25043;
                        readonly src: "12429:25:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25032;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12429:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25035;
                        readonly mutability: "mutable";
                        readonly name: "totalGovernanceFee";
                        readonly nameLocation: "12476:18:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25043;
                        readonly src: "12468:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25034;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12468:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12375:129:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25055;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12589:177:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25054;
                    readonly nodeType: "Block";
                    readonly src: "12704:62:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25051;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25045;
                                readonly src: "12745:13:135";
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
                                readonly id: 25050;
                                readonly name: "_calculateTimeRemaining";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13006;
                                readonly src: "12721:23:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25052;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12721:38:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25049;
                        readonly id: 25053;
                        readonly nodeType: "Return";
                        readonly src: "12714:45:135";
                    }];
                };
                readonly functionSelector: "68c2ecb8";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemaining";
                readonly nameLocation: "12598:22:135";
                readonly parameters: {
                    readonly id: 25046;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25045;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12638:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25055;
                        readonly src: "12630:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25044;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12630:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12620:37:135";
                };
                readonly returnParameters: {
                    readonly id: 25049;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25048;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12689:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25055;
                        readonly src: "12681:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25047;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12681:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12680:23:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25067;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12772:189:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25066;
                    readonly nodeType: "Block";
                    readonly src: "12893:68:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25063;
                                readonly name: "_maturityTime";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25057;
                                readonly src: "12940:13:135";
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
                                readonly id: 25062;
                                readonly name: "_calculateTimeRemainingScaled";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13042;
                                readonly src: "12910:29:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25064;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "12910:44:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25061;
                        readonly id: 25065;
                        readonly nodeType: "Return";
                        readonly src: "12903:51:135";
                    }];
                };
                readonly functionSelector: "ca6d38f7";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateTimeRemainingScaled";
                readonly nameLocation: "12781:28:135";
                readonly parameters: {
                    readonly id: 25058;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25057;
                        readonly mutability: "mutable";
                        readonly name: "_maturityTime";
                        readonly nameLocation: "12827:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25067;
                        readonly src: "12819:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25056;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12819:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12809:37:135";
                };
                readonly returnParameters: {
                    readonly id: 25061;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25060;
                        readonly mutability: "mutable";
                        readonly name: "timeRemaining";
                        readonly nameLocation: "12878:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25067;
                        readonly src: "12870:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25059;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "12870:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "12869:23:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25076;
                readonly nodeType: "FunctionDefinition";
                readonly src: "12967:118:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25075;
                    readonly nodeType: "Block";
                    readonly src: "13042:43:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [];
                            readonly expression: {
                                readonly argumentTypes: readonly [];
                                readonly id: 25072;
                                readonly name: "_latestCheckpoint";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13060;
                                readonly src: "13059:17:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$__$returns$_t_uint256_$";
                                    readonly typeString: "function () view returns (uint256)";
                                };
                            };
                            readonly id: 25073;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13059:19:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25071;
                        readonly id: 25074;
                        readonly nodeType: "Return";
                        readonly src: "13052:26:135";
                    }];
                };
                readonly functionSelector: "907c0f92";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "latestCheckpoint";
                readonly nameLocation: "12976:16:135";
                readonly parameters: {
                    readonly id: 25068;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "12992:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25071;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25070;
                        readonly mutability: "mutable";
                        readonly name: "checkpointTime";
                        readonly nameLocation: "13026:14:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25076;
                        readonly src: "13018:22:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25069;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13018:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13017:24:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25086;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13091:116:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25085;
                    readonly nodeType: "Block";
                    readonly src: "13153:54:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25082;
                                readonly name: "_shareReservesDelta";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25078;
                                readonly src: "13180:19:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_int256";
                                    readonly typeString: "int256";
                                }];
                                readonly id: 25081;
                                readonly name: "_updateLiquidity";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 15175;
                                readonly src: "13163:16:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_nonpayable$_t_int256_$returns$__$";
                                    readonly typeString: "function (int256)";
                                };
                            };
                            readonly id: 25083;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13163:37:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25084;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13163:37:135";
                    }];
                };
                readonly functionSelector: "8120a3e2";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "updateLiquidity";
                readonly nameLocation: "13100:15:135";
                readonly parameters: {
                    readonly id: 25079;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25078;
                        readonly mutability: "mutable";
                        readonly name: "_shareReservesDelta";
                        readonly nameLocation: "13123:19:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25086;
                        readonly src: "13116:26:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_int256";
                            readonly typeString: "int256";
                        };
                        readonly typeName: {
                            readonly id: 25077;
                            readonly name: "int256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13116:6:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_int256";
                                readonly typeString: "int256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13115:28:135";
                };
                readonly returnParameters: {
                    readonly id: 25080;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13153:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25098;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13213:177:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25097;
                    readonly nodeType: "Block";
                    readonly src: "13321:69:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly id: 25094;
                                readonly name: "_vaultSharePrice";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25088;
                                readonly src: "13366:16:135";
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
                                readonly id: 25093;
                                readonly name: "_calculateIdleShareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 13568;
                                readonly src: "13338:27:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_view$_t_uint256_$returns$_t_uint256_$";
                                    readonly typeString: "function (uint256) view returns (uint256)";
                                };
                            };
                            readonly id: 25095;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "13338:45:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25092;
                        readonly id: 25096;
                        readonly nodeType: "Return";
                        readonly src: "13331:52:135";
                    }];
                };
                readonly functionSelector: "b1b4b170";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "calculateIdleShareReserves";
                readonly nameLocation: "13222:26:135";
                readonly parameters: {
                    readonly id: 25089;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25088;
                        readonly mutability: "mutable";
                        readonly name: "_vaultSharePrice";
                        readonly nameLocation: "13266:16:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25098;
                        readonly src: "13258:24:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25087;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13258:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13248:40:135";
                };
                readonly returnParameters: {
                    readonly id: 25092;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25091;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25098;
                        readonly src: "13312:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25090;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13312:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13311:9:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25106;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13396:93:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25105;
                    readonly nodeType: "Block";
                    readonly src: "13454:35:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25103;
                            readonly name: "totalShares";
                            readonly nodeType: "Identifier";
                            readonly overloadedDeclarations: readonly [];
                            readonly referencedDeclaration: 24282;
                            readonly src: "13471:11:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly functionReturnParameters: 25102;
                        readonly id: 25104;
                        readonly nodeType: "Return";
                        readonly src: "13464:18:135";
                    }];
                };
                readonly functionSelector: "d5002f2e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getTotalShares";
                readonly nameLocation: "13405:14:135";
                readonly parameters: {
                    readonly id: 25099;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13419:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25102;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25101;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25106;
                        readonly src: "13445:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25100;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13445:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13444:9:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25126;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13495:184:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25125;
                    readonly nodeType: "Block";
                    readonly src: "13570:109:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25117;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25113;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17729;
                                    readonly src: "13580:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10187_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25115;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13593:13:135";
                                readonly memberName: "shareReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10153;
                                readonly src: "13580:26:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25116;
                                readonly name: "shareReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25108;
                                readonly src: "13609:13:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13580:42:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25118;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13580:42:135";
                    }, {
                        readonly expression: {
                            readonly id: 25123;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25119;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17729;
                                    readonly src: "13632:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10187_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25121;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13645:12:135";
                                readonly memberName: "bondReserves";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10156;
                                readonly src: "13632:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25122;
                                readonly name: "bondReserves";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25110;
                                readonly src: "13660:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13632:40:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25124;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13632:40:135";
                    }];
                };
                readonly functionSelector: "702db0eb";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setReserves";
                readonly nameLocation: "13504:11:135";
                readonly parameters: {
                    readonly id: 25111;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25108;
                        readonly mutability: "mutable";
                        readonly name: "shareReserves";
                        readonly nameLocation: "13524:13:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25126;
                        readonly src: "13516:21:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25107;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13516:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }, {
                        readonly constant: false;
                        readonly id: 25110;
                        readonly mutability: "mutable";
                        readonly name: "bondReserves";
                        readonly nameLocation: "13547:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25126;
                        readonly src: "13539:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25109;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13539:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13515:45:135";
                };
                readonly returnParameters: {
                    readonly id: 25112;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13570:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }, {
                readonly id: 25138;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13685:113:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25137;
                    readonly nodeType: "Block";
                    readonly src: "13741:57:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly id: 25135;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly lValueRequested: false;
                            readonly leftHandSide: {
                                readonly expression: {
                                    readonly id: 25131;
                                    readonly name: "_marketState";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17729;
                                    readonly src: "13751:12:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_struct$_MarketState_$10187_storage";
                                        readonly typeString: "struct IHyperdrive.MarketState storage ref";
                                    };
                                };
                                readonly id: 25133;
                                readonly isConstant: false;
                                readonly isLValue: true;
                                readonly isPure: false;
                                readonly lValueRequested: true;
                                readonly memberLocation: "13764:12:135";
                                readonly memberName: "longExposure";
                                readonly nodeType: "MemberAccess";
                                readonly referencedDeclaration: 10159;
                                readonly src: "13751:25:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly nodeType: "Assignment";
                            readonly operator: "=";
                            readonly rightHandSide: {
                                readonly id: 25134;
                                readonly name: "longExposure";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 25128;
                                readonly src: "13779:12:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_uint128";
                                    readonly typeString: "uint128";
                                };
                            };
                            readonly src: "13751:40:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly id: 25136;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "13751:40:135";
                    }];
                };
                readonly functionSelector: "b4f8da39";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "setLongExposure";
                readonly nameLocation: "13694:15:135";
                readonly parameters: {
                    readonly id: 25129;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25128;
                        readonly mutability: "mutable";
                        readonly name: "longExposure";
                        readonly nameLocation: "13718:12:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25138;
                        readonly src: "13710:20:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint128";
                            readonly typeString: "uint128";
                        };
                        readonly typeName: {
                            readonly id: 25127;
                            readonly name: "uint128";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "13710:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint128";
                                readonly typeString: "uint128";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13709:22:135";
                };
                readonly returnParameters: {
                    readonly id: 25130;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13741:0:135";
                };
                readonly scope: 25139;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 24811;
                    readonly name: "Hyperdrive";
                    readonly nameLocations: readonly ["9491:10:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 4427;
                    readonly src: "9491:10:135";
                };
                readonly id: 24812;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9491:10:135";
            }, {
                readonly baseName: {
                    readonly id: 24813;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["9503:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24810;
                    readonly src: "9503:18:135";
                };
                readonly id: 24814;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "9503:18:135";
            }];
            readonly canonicalName: "MockHyperdrive";
            readonly contractDependencies: readonly [25168, 25183, 25198, 25213, 25228];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25139, 24810, 4427, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609, 10695, 11575];
            readonly name: "MockHyperdrive";
            readonly nameLocation: "9473:14:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [10371, 10383, 10413, 10457, 10463, 10466, 10469, 10475, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }, {
            readonly id: 25168;
            readonly nodeType: "ContractDefinition";
            readonly src: "13802:327:135";
            readonly nodes: readonly [{
                readonly id: 25153;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13880:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25152;
                    readonly nodeType: "Block";
                    readonly src: "13972:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25149;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25146;
                        readonly src: "13963:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25150;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25148;
                        readonly name: "HyperdriveTarget0";
                        readonly nameLocations: readonly ["13945:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5242;
                        readonly src: "13945:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "13945:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25147;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25146;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "13931:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25153;
                        readonly src: "13901:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25145;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25144;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["13901:11:135", "13913:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "13901:22:135";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "13901:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "13891:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25151;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "13972:0:135";
                };
                readonly scope: 25168;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }, {
                readonly id: 25167;
                readonly nodeType: "FunctionDefinition";
                readonly src: "13999:128:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25166;
                    readonly nodeType: "Block";
                    readonly src: "14067:60:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [{
                        readonly expression: {
                            readonly arguments: readonly [{
                                readonly arguments: readonly [{
                                    readonly id: 25162;
                                    readonly name: "_governanceFeesAccrued";
                                    readonly nodeType: "Identifier";
                                    readonly overloadedDeclarations: readonly [];
                                    readonly referencedDeclaration: 17751;
                                    readonly src: "14096:22:135";
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
                                    readonly expression: {
                                        readonly id: 25160;
                                        readonly name: "abi";
                                        readonly nodeType: "Identifier";
                                        readonly overloadedDeclarations: readonly [];
                                        readonly referencedDeclaration: -1;
                                        readonly src: "14085:3:135";
                                        readonly typeDescriptions: {
                                            readonly typeIdentifier: "t_magic_abi";
                                            readonly typeString: "abi";
                                        };
                                    };
                                    readonly id: 25161;
                                    readonly isConstant: false;
                                    readonly isLValue: false;
                                    readonly isPure: true;
                                    readonly lValueRequested: false;
                                    readonly memberLocation: "14089:6:135";
                                    readonly memberName: "encode";
                                    readonly nodeType: "MemberAccess";
                                    readonly src: "14085:10:135";
                                    readonly typeDescriptions: {
                                        readonly typeIdentifier: "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$";
                                        readonly typeString: "function () pure returns (bytes memory)";
                                    };
                                };
                                readonly id: 25163;
                                readonly isConstant: false;
                                readonly isLValue: false;
                                readonly isPure: false;
                                readonly kind: "functionCall";
                                readonly lValueRequested: false;
                                readonly nameLocations: readonly [];
                                readonly names: readonly [];
                                readonly nodeType: "FunctionCall";
                                readonly src: "14085:34:135";
                                readonly tryCall: false;
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                };
                            }];
                            readonly expression: {
                                readonly argumentTypes: readonly [{
                                    readonly typeIdentifier: "t_bytes_memory_ptr";
                                    readonly typeString: "bytes memory";
                                }];
                                readonly id: 25159;
                                readonly name: "_revert";
                                readonly nodeType: "Identifier";
                                readonly overloadedDeclarations: readonly [];
                                readonly referencedDeclaration: 5241;
                                readonly src: "14077:7:135";
                                readonly typeDescriptions: {
                                    readonly typeIdentifier: "t_function_internal_pure$_t_bytes_memory_ptr_$returns$__$";
                                    readonly typeString: "function (bytes memory) pure";
                                };
                            };
                            readonly id: 25164;
                            readonly isConstant: false;
                            readonly isLValue: false;
                            readonly isPure: false;
                            readonly kind: "functionCall";
                            readonly lValueRequested: false;
                            readonly nameLocations: readonly [];
                            readonly names: readonly [];
                            readonly nodeType: "FunctionCall";
                            readonly src: "14077:43:135";
                            readonly tryCall: false;
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_tuple$__$";
                                readonly typeString: "tuple()";
                            };
                        };
                        readonly id: 25165;
                        readonly nodeType: "ExpressionStatement";
                        readonly src: "14077:43:135";
                    }];
                };
                readonly documentation: {
                    readonly id: 25154;
                    readonly nodeType: "StructuredDocumentation";
                    readonly src: "13980:14:135";
                    readonly text: "Mocks ///";
                };
                readonly functionSelector: "8e67f87e";
                readonly implemented: true;
                readonly kind: "function";
                readonly modifiers: readonly [];
                readonly name: "getGovernanceFeesAccrued";
                readonly nameLocation: "14008:24:135";
                readonly parameters: {
                    readonly id: 25155;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14032:2:135";
                };
                readonly returnParameters: {
                    readonly id: 25158;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25157;
                        readonly mutability: "mutable";
                        readonly name: "";
                        readonly nameLocation: "-1:-1:-1";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25167;
                        readonly src: "14058:7:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "default";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_uint256";
                            readonly typeString: "uint256";
                        };
                        readonly typeName: {
                            readonly id: 25156;
                            readonly name: "uint256";
                            readonly nodeType: "ElementaryTypeName";
                            readonly src: "14058:7:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_uint256";
                                readonly typeString: "uint256";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14057:9:135";
                };
                readonly scope: 25168;
                readonly stateMutability: "view";
                readonly virtual: false;
                readonly visibility: "external";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25140;
                    readonly name: "HyperdriveTarget0";
                    readonly nameLocations: readonly ["13836:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5242;
                    readonly src: "13836:17:135";
                };
                readonly id: 25141;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13836:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25142;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["13855:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24810;
                    readonly src: "13855:18:135";
                };
                readonly id: 25143;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "13855:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget0";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25168, 24810, 5242, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609, 11357, 11697];
            readonly name: "MockHyperdriveTarget0";
            readonly nameLocation: "13811:21:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [10365, 10371, 10374, 10392, 10395, 10404, 10407, 10410, 10413, 10437, 10442, 10445, 10451, 10454, 10469, 70940, 71221, 71226, 71229, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }, {
            readonly id: 25183;
            readonly nodeType: "ContractDefinition";
            readonly src: "14131:174:135";
            readonly nodes: readonly [{
                readonly id: 25182;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14209:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25181;
                    readonly nodeType: "Block";
                    readonly src: "14301:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25178;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25175;
                        readonly src: "14292:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25179;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25177;
                        readonly name: "HyperdriveTarget1";
                        readonly nameLocations: readonly ["14274:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5355;
                        readonly src: "14274:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14274:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25176;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25175;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14260:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25182;
                        readonly src: "14230:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25174;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25173;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14230:11:135", "14242:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "14230:22:135";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "14230:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14220:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25180;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14301:0:135";
                };
                readonly scope: 25183;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25169;
                    readonly name: "HyperdriveTarget1";
                    readonly nameLocations: readonly ["14165:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5355;
                    readonly src: "14165:17:135";
                };
                readonly id: 25170;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14165:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25171;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14184:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24810;
                    readonly src: "14184:18:135";
                };
                readonly id: 25172;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14184:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget1";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25183, 24810, 5355, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609];
            readonly name: "MockHyperdriveTarget1";
            readonly nameLocation: "14140:21:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [10371, 10377, 10383, 10386, 10404, 10410, 10413, 10419, 10422, 10425, 10428, 10434, 10437, 10448, 10451, 10460, 10463, 10466, 10469, 10475, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }, {
            readonly id: 25198;
            readonly nodeType: "ContractDefinition";
            readonly src: "14307:174:135";
            readonly nodes: readonly [{
                readonly id: 25197;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14385:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25196;
                    readonly nodeType: "Block";
                    readonly src: "14477:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25193;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25190;
                        readonly src: "14468:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25194;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25192;
                        readonly name: "HyperdriveTarget2";
                        readonly nameLocations: readonly ["14450:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5444;
                        readonly src: "14450:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14450:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25191;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25190;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14436:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25197;
                        readonly src: "14406:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25189;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25188;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14406:11:135", "14418:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "14406:22:135";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "14406:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14396:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25195;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14477:0:135";
                };
                readonly scope: 25198;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25184;
                    readonly name: "HyperdriveTarget2";
                    readonly nameLocations: readonly ["14341:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5444;
                    readonly src: "14341:17:135";
                };
                readonly id: 25185;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14341:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25186;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14360:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24810;
                    readonly src: "14360:18:135";
                };
                readonly id: 25187;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14360:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget2";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25198, 24810, 5444, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609];
            readonly name: "MockHyperdriveTarget2";
            readonly nameLocation: "14316:21:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [10371, 10377, 10383, 10410, 10413, 10419, 10428, 10437, 10448, 10451, 10460, 10463, 10466, 10469, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }, {
            readonly id: 25213;
            readonly nodeType: "ContractDefinition";
            readonly src: "14483:174:135";
            readonly nodes: readonly [{
                readonly id: 25212;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14561:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25211;
                    readonly nodeType: "Block";
                    readonly src: "14653:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25208;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25205;
                        readonly src: "14644:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25209;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25207;
                        readonly name: "HyperdriveTarget3";
                        readonly nameLocations: readonly ["14626:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5532;
                        readonly src: "14626:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14626:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25206;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25205;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14612:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25212;
                        readonly src: "14582:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25204;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25203;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14582:11:135", "14594:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "14582:22:135";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "14582:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14572:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25210;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14653:0:135";
                };
                readonly scope: 25213;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25199;
                    readonly name: "HyperdriveTarget3";
                    readonly nameLocations: readonly ["14517:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5532;
                    readonly src: "14517:17:135";
                };
                readonly id: 25200;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14517:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25201;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14536:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24810;
                    readonly src: "14536:18:135";
                };
                readonly id: 25202;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14536:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget3";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25213, 24810, 5532, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609];
            readonly name: "MockHyperdriveTarget3";
            readonly nameLocation: "14492:21:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [10368, 10371, 10383, 10410, 10413, 10416, 10419, 10425, 10428, 10431, 10434, 10437, 10448, 10451, 10460, 10463, 10466, 10469, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }, {
            readonly id: 25228;
            readonly nodeType: "ContractDefinition";
            readonly src: "14659:174:135";
            readonly nodes: readonly [{
                readonly id: 25227;
                readonly nodeType: "FunctionDefinition";
                readonly src: "14737:94:135";
                readonly nodes: readonly [];
                readonly body: {
                    readonly id: 25226;
                    readonly nodeType: "Block";
                    readonly src: "14829:2:135";
                    readonly nodes: readonly [];
                    readonly statements: readonly [];
                };
                readonly implemented: true;
                readonly kind: "constructor";
                readonly modifiers: readonly [{
                    readonly arguments: readonly [{
                        readonly id: 25223;
                        readonly name: "_config";
                        readonly nodeType: "Identifier";
                        readonly overloadedDeclarations: readonly [];
                        readonly referencedDeclaration: 25220;
                        readonly src: "14820:7:135";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig memory";
                        };
                    }];
                    readonly id: 25224;
                    readonly kind: "baseConstructorSpecifier";
                    readonly modifierName: {
                        readonly id: 25222;
                        readonly name: "HyperdriveTarget4";
                        readonly nameLocations: readonly ["14802:17:135"];
                        readonly nodeType: "IdentifierPath";
                        readonly referencedDeclaration: 5611;
                        readonly src: "14802:17:135";
                    };
                    readonly nodeType: "ModifierInvocation";
                    readonly src: "14802:26:135";
                }];
                readonly name: "";
                readonly nameLocation: "-1:-1:-1";
                readonly parameters: {
                    readonly id: 25221;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [{
                        readonly constant: false;
                        readonly id: 25220;
                        readonly mutability: "mutable";
                        readonly name: "_config";
                        readonly nameLocation: "14788:7:135";
                        readonly nodeType: "VariableDeclaration";
                        readonly scope: 25227;
                        readonly src: "14758:37:135";
                        readonly stateVariable: false;
                        readonly storageLocation: "memory";
                        readonly typeDescriptions: {
                            readonly typeIdentifier: "t_struct$_PoolConfig_$10300_memory_ptr";
                            readonly typeString: "struct IHyperdrive.PoolConfig";
                        };
                        readonly typeName: {
                            readonly id: 25219;
                            readonly nodeType: "UserDefinedTypeName";
                            readonly pathNode: {
                                readonly id: 25218;
                                readonly name: "IHyperdrive.PoolConfig";
                                readonly nameLocations: readonly ["14758:11:135", "14770:10:135"];
                                readonly nodeType: "IdentifierPath";
                                readonly referencedDeclaration: 10300;
                                readonly src: "14758:22:135";
                            };
                            readonly referencedDeclaration: 10300;
                            readonly src: "14758:22:135";
                            readonly typeDescriptions: {
                                readonly typeIdentifier: "t_struct$_PoolConfig_$10300_storage_ptr";
                                readonly typeString: "struct IHyperdrive.PoolConfig";
                            };
                        };
                        readonly visibility: "internal";
                    }];
                    readonly src: "14748:53:135";
                };
                readonly returnParameters: {
                    readonly id: 25225;
                    readonly nodeType: "ParameterList";
                    readonly parameters: readonly [];
                    readonly src: "14829:0:135";
                };
                readonly scope: 25228;
                readonly stateMutability: "nonpayable";
                readonly virtual: false;
                readonly visibility: "public";
            }];
            readonly abstract: false;
            readonly baseContracts: readonly [{
                readonly baseName: {
                    readonly id: 25214;
                    readonly name: "HyperdriveTarget4";
                    readonly nameLocations: readonly ["14693:17:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 5611;
                    readonly src: "14693:17:135";
                };
                readonly id: 25215;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14693:17:135";
            }, {
                readonly baseName: {
                    readonly id: 25216;
                    readonly name: "MockHyperdriveBase";
                    readonly nameLocations: readonly ["14712:18:135"];
                    readonly nodeType: "IdentifierPath";
                    readonly referencedDeclaration: 24810;
                    readonly src: "14712:18:135";
                };
                readonly id: 25217;
                readonly nodeType: "InheritanceSpecifier";
                readonly src: "14712:18:135";
            }];
            readonly canonicalName: "MockHyperdriveTarget4";
            readonly contractDependencies: readonly [];
            readonly contractKind: "contract";
            readonly fullyImplemented: true;
            readonly linearizedBaseContracts: readonly [25228, 24810, 5611, 14324, 17668, 16198, 15264, 16682, 12659, 13835, 17893, 71565, 11037, 11609];
            readonly name: "MockHyperdriveTarget4";
            readonly nameLocation: "14668:21:135";
            readonly scope: 25229;
            readonly usedErrors: readonly [10371, 10383, 10389, 10410, 10413, 10416, 10419, 10425, 10428, 10434, 10437, 10448, 10451, 10460, 10463, 10466, 10469, 71510];
            readonly usedEvents: readonly [10855, 10870, 10889, 10904, 10921, 10940, 10959, 10980, 10995, 11002, 11007, 11012, 11017, 11024, 11029, 11036, 11590, 11599, 11608];
        }];
        readonly license: "Apache-2.0";
    };
    readonly id: 135;
};
//# sourceMappingURL=MockHyperdriveTarget4.d.ts.map